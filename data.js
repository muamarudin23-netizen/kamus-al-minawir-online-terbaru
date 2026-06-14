const offlineWords = [
    {
        arabicRoot: "جَلَسَ",
        transliteration: "Jalasa",
        rootLetters: "ج - ل - س",
        wazanType: "ثُلَاثِيٌّ مُجَرَّدٌ",
        wazanPattern: "فَعَلَ - يَفْعِلُ",
        wazanBab: "صَحِيْحٌ سَالِمٌ",
        briefDefinition: "Duduk, menempati kedudukan, mengadakan rapat/sidang",
        definitions: [
            { number: 1, type: "فِعْلٌ ثُلَاثِيٌّ مُجَرَّدٌ", expression: "قَعَدَ - : جَلَسَ عَلَى الْكُرْسِيِّ", translation: "Menduduki, duduk di kursi" },
            { number: 2, type: "فِعْلٌ ثُلَاثِيٌّ مُجَرَّدٌ", expression: "— : تَبَوَّأَ مَكَانًا لِلْقُعُودِ", translation: "Mengambil tempat kedudukan / menempati majelis" },
            { number: 3, type: "—", expression: "الْمَجْلِسُ : مَكَانُ الْجُلُوسِ", translation: "Pertemuan, tempat duduk, atau persidangan" }
        ],
        isthilahi: {
            madhi: "جَلَسَ", mudhori: "يَجْلِسُ", mashdar: "جُلُوسًا", fail: "جَالِسٌ", maful: "مَجْلُوسٌ",
            amr: "اِجْلِسْ", nahi: "لَا تَجْلِسْ", makan: "مَجْلِسٌ", zaman: "مَجْلِسٌ", alat: "مِجْلَسٌ"
        },
        lughowi: [
            { pronounName: "هُوَ", pronounIndo: "Dia (Lk. Tunggal)", madhiConjugation: "جَلَسَ", mudhoriConjugation: "يَجْلِسُ" },
            { pronounName: "هُمَا", pronounIndo: "Mereka berdua (Lk)", madhiConjugation: "جَلَسَا", mudhoriConjugation: "يَجْلِسَانِ" },
            { pronounName: "هُمْ", pronounIndo: "Mereka (Lk. Jamak)", madhiConjugation: "جَلَسُوا", mudhoriConjugation: "يَجْلِسُونَ" },
            { pronounName: "هِيَ", pronounIndo: "Dia (Pr. Tunggal)", madhiConjugation: "جَلَسَتْ", mudhoriConjugation: "تَجْلِسُ" },
            { pronounName: "هُمَا", pronounIndo: "Mereka berdua (Pr)", madhiConjugation: "جَلَسَتَا", mudhoriConjugation: "تَجْلِسَانِ" },
            { pronounName: "هُنَّ", pronounIndo: "Mereka (Pr. Jamak)", madhiConjugation: "جَلَسْنَ", mudhoriConjugation: "يَجْلِسْنَ" },
            { pronounName: "أَنْتَ", pronounIndo: "Kamu (Lk. Tunggal)", madhiConjugation: "جَلَسْتَ", mudhoriConjugation: "تَجْلِسُ" },
            { pronounName: "أَنْتُمَا", pronounIndo: "Kamu berdua (Lk)", madhiConjugation: "جَلَسْتُمَا", mudhoriConjugation: "تَجْلِسَانِ" },
            { pronounName: "أَنْتُمْ", pronounIndo: "Kalian (Lk. Jamak)", madhiConjugation: "جَلَسْتُمْ", mudhoriConjugation: "تَجْلِسُونَ" },
            { pronounName: "أَنْتِ", pronounIndo: "Kamu (Pr. Tunggal)", madhiConjugation: "جَلَسْتِ", mudhoriConjugation: "تَجْلِسِينَ" },
            { pronounName: "أَنْتُمَا", pronounIndo: "Kamu berdua (Pr)", madhiConjugation: "جَلَسْتُمَا", mudhoriConjugation: "تَجْلِسَانِ" },
            { pronounName: "أَنْتُنَّ", pronounIndo: "Kalian (Pr. Jamak)", madhiConjugation: "جَلَسْتُنَّ", mudhoriConjugation: "تَجْلِسْنَ" },
            { pronounName: "أَنَا", pronounIndo: "Saya", madhiConjugation: "جَلَسْتُ", mudhoriConjugation: "أَجْلِسُ" },
            { pronounName: "نَحْنُ", pronounIndo: "Kami / Kita", madhiConjugation: "جَلَسْنَا", mudhoriConjugation: "نَجْلِسُ" }
        ]
    },
    {
        arabicRoot: "سَجَدَ",
        transliteration: "Sajada",
        rootLetters: "س - ج - د",
        wazanType: "ثُلَاثِيٌّ مُجَرَّدٌ",
        wazanPattern: "فَعَلَ - يَفْعُلُ",
        wazanBab: "صَحِيْحٌ سَالِمٌ",
        briefDefinition: "Sujud, menundukkan kepala, tunduk patuh hormat",
        definitions: [
            { number: 1, type: "فِعْلٌ ثُلَاثِيٌّ مُجَرَّدٌ", expression: "— : اِنْحَنَى خَاضِعًا", translation: "Membungkuk dengan khidmat" },
            { number: 2, type: "فِعْلٌ ثُلَاثِيٌّ مُجَرَّدٌ", expression: "— : وَضَعَ جَبْهَتَهُ بِالْأَرْضِ مُتَعَبِّدًا", translation: "Sujud, bersujud menghambakan diri" },
            { number: 3, type: "—", expression: "— : جَثَا", translation: "Berlutut, nunduk tawadhu" }
        ],
        isthilahi: {
            madhi: "سَجَدَ", mudhori: "يَسْجُدُ", mashdar: "سُجُودًا", fail: "سَاجِدٌ", maful: "مَسْجُودٌ",
            amr: "اُسْجُدْ", nahi: "لَا تَسْجُدْ", makan: "مَسْجِدٌ", zaman: "مَسْجِدٌ", alat: "مِسْجَدٌ"
        },
        lughowi: [
            { pronounName: "هُوَ", pronounIndo: "Dia (Lk. Tunggal)", madhiConjugation: "سَجَدَ", mudhoriConjugation: "يَسْجُدُ" },
            { pronounName: "هُمَا", pronounIndo: "Mereka berdua (Lk)", madhiConjugation: "سَجَدَا", mudhoriConjugation: "يَسْجُدَانِ" },
            { pronounName: "هُمْ", pronounIndo: "Mereka (Lk. Jamak)", madhiConjugation: "سَجَدُوا", mudhoriConjugation: "يَسْجُدُونَ" },
            { pronounName: "هِيَ", pronounIndo: "Dia (Pr. Tunggal)", madhiConjugation: "سَجَدَتْ", mudhoriConjugation: "تَسْجُدُ" },
            { pronounName: "هُمَا", pronounIndo: "Mereka berdua (Pr)", madhiConjugation: "سَجَدَتَا", mudhoriConjugation: "تَسْجُدَانِ" },
            { pronounName: "هُنَّ", pronounIndo: "Mereka (Pr. Jamak)", madhiConjugation: "سَجَدْنَ", mudhoriConjugation: "يَسْجُدْنَ" },
            { pronounName: "أَنْتَ", pronounIndo: "Kamu (Lk. Tunggal)", madhiConjugation: "سَجَدْتَ", mudhoriConjugation: "تَسْجُدُ" },
            { pronounName: "أَنْتُمَا", pronounIndo: "Kamu berdua (Lk)", madhiConjugation: "سَجَدْتُمَا", mudhoriConjugation: "تَسْجُدَانِ" },
            { pronounName: "أَنْتُمْ", pronounIndo: "Kalian (Lk. Jamak)", madhiConjugation: "سَجَدْتُمْ", mudhoriConjugation: "تَسْجُدُونَ" },
            { pronounName: "أَنْتِ", pronounIndo: "Kamu (Pr. Tunggal)", madhiConjugation: "سَجَدْتِ", mudhoriConjugation: "تَسْجُدِينَ" },
            { pronounName: "أَنْتُمَا", pronounIndo: "Kamu berdua (Pr)", madhiConjugation: "سَجَدْتُمَا", mudhoriConjugation: "تَسْجُدَانِ" },
            { pronounName: "أَنْتُنَّ", pronounIndo: "Kalian (Pr. Jamak)", madhiConjugation: "سَجَدْتُنَّ", mudhoriConjugation: "تَسْجُدْنَ" },
            { pronounName: "أَنَا", pronounIndo: "Saya", madhiConjugation: "سَجَدْتُ", mudhoriConjugation: "أَسْجُدُ" },
            { pronounName: "نَحْنُ", pronounIndo: "Kami / Kita", madhiConjugation: "سَجَدْنَا", mudhoriConjugation: "نَسْجُدُ" }
        ]
    },
    {
        arabicRoot: "كَتَبَ",
        transliteration: "Kataba",
        rootLetters: "ك - ت - ب",
        wazanType: "ثُلَاثِيٌّ مُجَرَّدٌ",
        wazanPattern: "فَعَلَ - يَفْعُلُ",
        wazanBab: "صَحِيْحٌ سَالِمٌ",
        briefDefinition: "Menulis, mencatat, menetapkan kewajiban",
        definitions: [
            { number: 1, type: "فِعْلٌ ثُلَاثِيٌّ مُجَرَّدٌ", expression: "— : رَثَمَ الْحُرُوفَ", translation: "Menulis huruf, menyusun tulisan" },
            { number: 2, type: "فِعْلٌ ثُلَاثِيٌّ مُجَرَّدٌ", expression: "— : فَرَضَ عَلَيْهِ", translation: "Mewajibkan, menetapkan keputusan (cth: kutiba 'alaikum)" },
            { number: 3, type: "—", expression: "الْكِتَابُ : دَفْتَرٌ مَجْمُوعٌ", translation: "Buku, kitab suci, tulisan resmi" }
        ],
        isthilahi: {
            madhi: "كَتَبَ", mudhori: "يَكْتُبُ", mashdar: "كِتَابَةً", fail: "كَاتِبٌ", maful: "مَكْتُوبٌ",
            amr: "اُكْتُبْ", nahi: "لَا تَكْتُبْ", makan: "مَكْتَبٌ", zaman: "مَكْتَبٌ", alat: "مِكْتَبٌ"
        },
        lughowi: [
            { pronounName: "هُوَ", pronounIndo: "Dia (Lk. Tunggal)", madhiConjugation: "كَتَبَ", mudhoriConjugation: "يَكْتُبُ" },
            { pronounName: "هُمَا", pronounIndo: "Mereka berdua (Lk)", madhiConjugation: "كَتَبَا", mudhoriConjugation: "يَكْتُبَانِ" },
            { pronounName: "هُمْ", pronounIndo: "Mereka (Lk. Jamak)", madhiConjugation: "كَتَبُوا", mudhoriConjugation: "يَكْتُبُونَ" },
            { pronounName: "هِيَ", pronounIndo: "Dia (Pr. Tunggal)", madhiConjugation: "كَتَبَتْ", mudhoriConjugation: "تَكْتُبُ" },
            { pronounName: "هُمَا", pronounIndo: "Mereka berdua (Pr)", madhiConjugation: "كَتَبَتَا", mudhoriConjugation: "تَكْتُبَانِ" },
            { pronounName: "هُنَّ", pronounIndo: "Mereka (Pr. Jamak)", madhiConjugation: "كَتَبْنَ", mudhoriConjugation: "يَكْتُبْنَ" },
            { pronounName: "أَنْتَ", pronounIndo: "Kamu (Lk. Tunggal)", madhiConjugation: "كَتَبْتَ", mudhoriConjugation: "تَكْتُبُ" },
            { pronounName: "أَنْتُمَا", pronounIndo: "Kamu berdua (Lk)", madhiConjugation: "كَتَبْتُمَا", mudhoriConjugation: "تَكْتُبَانِ" },
            { pronounName: "أَنْتُمْ", pronounIndo: "Kalian (Lk. Jamak)", madhiConjugation: "كَتَبْتُمْ", mudhoriConjugation: "تَكْتُبُونَ" },
            { pronounName: "أَنْتِ", pronounIndo: "Kamu (Pr. Tunggal)", madhiConjugation: "كَتَبْتِ", mudhoriConjugation: "تَكْتُبِينَ" },
            { pronounName: "أَنْتُمَا", pronounIndo: "Kamu berdua (Pr)", madhiConjugation: "كَتَبْتُمَا", mudhoriConjugation: "تَكْتُبَانِ" },
            { pronounName: "أَنْتُنَّ", pronounIndo: "Kalian (Pr. Jamak)", madhiConjugation: "كَتَبْتُنَّ", mudhoriConjugation: "تَكْتُبْنَ" },
            { pronounName: "أَنَا", pronounIndo: "Saya", madhiConjugation: "كَتَبْتُ", mudhoriConjugation: "أَكْتُبُ" },
            { pronounName: "نَحْنُ", pronounIndo: "Kami / Kita", madhiConjugation: "كَتَبْنَا", mudhoriConjugation: "نَكْتُبُ" }
        ]
    }
];

const grammarData = [
    { title: "Fi'il Tsulatsi", subtitle: "Kata Kerja 3 Huruf Dasar", arabicTerm: "فِعْلٌ ثُلَاثِيٌّ" },
    { title: "Fi'il Ruba'i", subtitle: "Kata Kerja 4 Huruf Dasar", arabicTerm: "فِعْلٌ رُبَاعِيٌّ" },
    { title: "Isim Fa'il", subtitle: "Kata Benda Pelaku (Subjek)", arabicTerm: "اِسْمُ الْفَاعِلِ" },
    { title: "Isim Mashdar", subtitle: "Kata Benda Konseptual (Infinitif)", arabicTerm: "اِسْمُ الْمَصْدَرِ" },
    { title: "Isim Maf'ul", subtitle: "Kata Benda Penderita (Objek)", arabicTerm: "اِسْمُ الْمَفْعُولِ" },
    { title: "Isim Makan/Zaman", subtitle: "Kata Benda Tempat dan Waktu", arabicTerm: "اِسْمُ الْمَكَانِ وَالزَّمَانِ" },
    { title: "Isim Alat", subtitle: "Kata Benda Instrumen (Alat)", arabicTerm: "اِسْمُ الْآلَةِ" }
];
