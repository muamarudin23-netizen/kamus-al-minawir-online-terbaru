document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeBtn = document.getElementById('themeBtn');
    const toggleTheme = () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        themeBtn.innerText = next === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', next);
    };
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeBtn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
    }
    themeBtn.addEventListener('click', toggleTheme);

    // --- Navigation Tabs ---
    const navKamus = document.getElementById('navKamus');
    const navAnalisis = document.getElementById('navAnalisis');
    const viewKamus = document.getElementById('viewKamus');
    const viewAnalisis = document.getElementById('viewAnalisis');

    navKamus.addEventListener('click', () => {
        navKamus.classList.add('active');
        navAnalisis.classList.remove('active');
        viewKamus.classList.remove('hidden');
        viewAnalisis.classList.add('hidden');
    });

    navAnalisis.addEventListener('click', () => {
        navAnalisis.classList.add('active');
        navKamus.classList.remove('active');
        viewAnalisis.classList.remove('hidden');
        viewKamus.classList.add('hidden');
    });

    // --- Grammar Grid Render ---
    const grammarGrid = document.getElementById('grammarGrid');
    grammarData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'grammar-card glass-panel';
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p style="font-size:0.9rem; color:var(--text-muted)">${item.subtitle}</p>
            <div class="grammar-arabic">${item.arabicTerm}</div>
        `;
        grammarGrid.appendChild(div);
    });

    // --- Search Logic ---
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const emptyState = document.getElementById('emptyState');
    const loadingState = document.getElementById('loadingState');
    const errorState = document.getElementById('errorState');
    const errorMsg = document.getElementById('errorMsg');
    const resultCard = document.getElementById('resultCard');

    // UI Elements for Result
    const resRoot = document.getElementById('resRoot');
    const resTrans = document.getElementById('resTrans');
    const resWazan = document.getElementById('resWazan');
    const resBab = document.getElementById('resBab');
    const resPattern = document.getElementById('resPattern');
    const resDefs = document.getElementById('resDefs');
    const istilahGrid = document.getElementById('istilahGrid');
    const lughowiBody = document.getElementById('lughowiBody');

    const cleanArabic = (str) => str.replace(/[\u064B-\u0652]/g, '');

    const renderWord = (wordData) => {
        resRoot.innerText = wordData.arabicRoot;
        resTrans.innerText = wordData.transliteration;
        resWazan.innerText = wordData.wazanType || "—";
        resBab.innerText = wordData.wazanBab || "—";
        resPattern.innerText = wordData.wazanPattern || "—";

        // Render Defs
        resDefs.innerHTML = '';
        wordData.definitions.forEach(d => {
            const el = document.createElement('div');
            el.className = 'definition-item';
            el.innerHTML = `
                <div class="def-arabic">${d.expression || d.type}</div>
                <div>${d.translation}</div>
            `;
            resDefs.appendChild(el);
        });

        // Render Isthilahi
        const labels = [
            { k: 'madhi', l: 'Madhi' }, { k: 'mudhori', l: 'Mudhori' }, { k: 'mashdar', l: 'Mashdar' },
            { k: 'fail', l: 'Fa\\'il' }, { k: 'maful', l: 'Maf\\'ul' }, { k: 'amr', l: 'Amr' },
            { k: 'nahi', l: 'Nahi' }, { k: 'makan', l: 'Makan/Zaman' }, { k: 'alat', l: 'Alat' }
        ];
        istilahGrid.innerHTML = '';
        labels.forEach(lb => {
            if(wordData.isthilahi && wordData.isthilahi[lb.k]){
                const d = document.createElement('div');
                d.className = 'tashrif-item';
                d.innerHTML = `
                    <div class="tashrif-label">${lb.l}</div>
                    <div class="tashrif-val">${wordData.isthilahi[lb.k]}</div>
                `;
                istilahGrid.appendChild(d);
            }
        });

        // Render Lughowi
        lughowiBody.innerHTML = '';
        if(wordData.lughowi) {
            wordData.lughowi.forEach(l => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${l.pronounName}</strong><br><small style="color:var(--text-muted)">${l.pronounIndo}</small></td>
                    <td class="arabic">${l.madhiConjugation}</td>
                    <td class="arabic">${l.mudhoriConjugation}</td>
                `;
                lughowiBody.appendChild(tr);
            });
        }
    };

    const performSearch = async (query) => {
        if(!query) return;
        emptyState.classList.add('hidden');
        resultCard.classList.add('hidden');
        errorState.classList.add('hidden');
        loadingState.classList.remove('hidden');

        // 1. Search Offline First
        const cleanQ = cleanArabic(query);
        const offlineMatch = offlineWords.find(w => 
            cleanArabic(w.arabicRoot).includes(cleanQ) || 
            w.transliteration.toLowerCase() === query.toLowerCase()
        );

        if(offlineMatch) {
            setTimeout(() => {
                loadingState.classList.add('hidden');
                renderWord(offlineMatch);
                resultCard.classList.remove('hidden');
            }, 400); // fake smooth delay
            return;
        }

        // 2. Call Vercel Serverless Function (Gemini)
        try {
            const res = await fetch(\`/api/gemini?q=\${encodeURIComponent(query)}\`);
            const data = await res.json();
            
            loadingState.classList.add('hidden');
            
            if(res.ok && data.success) {
                renderWord(data.word);
                resultCard.classList.remove('hidden');
            } else {
                errorMsg.innerText = data.error || "Kata tidak ditemukan. Silakan pastikan API Key Gemini dikonfigurasi di Vercel Environment Variables.";
                errorState.classList.remove('hidden');
            }
        } catch(e) {
            loadingState.classList.add('hidden');
            errorMsg.innerText = "Terjadi kesalahan jaringan atau server.";
            errorState.classList.remove('hidden');
        }
    };

    searchBtn.addEventListener('click', () => performSearch(searchInput.value.trim()));
    searchInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') performSearch(searchInput.value.trim());
    });

    // --- Tashrif Tabs ---
    const tTabs = document.querySelectorAll('.tashrif-section .tab');
    const tabIstilah = document.getElementById('tab-istilah');
    const tabLughowi = document.getElementById('tab-lughowi');

    tTabs.forEach(t => {
        t.addEventListener('click', () => {
            tTabs.forEach(tt => tt.classList.remove('active'));
            t.classList.add('active');
            if(t.dataset.target === 'istilah') {
                tabIstilah.classList.remove('hidden');
                tabLughowi.classList.add('hidden');
            } else {
                tabLughowi.classList.remove('hidden');
                tabIstilah.classList.add('hidden');
            }
        });
    });

    // Trigger initial state
    performSearch('sajada');
});
