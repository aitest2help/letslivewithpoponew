import type { GuideChapter } from './types';

export const CHAPTERS_4_TO_6: GuideChapter[] = [
  {
    id: 'ch4',
    number: 4,
    nav_id: '04 Hari Sulit',
    nav_en: '04 Hard Days',
    short_id: 'Saat hari terasa berat',
    short_en: 'When days get hard',
    title_id: 'Saat hari terasa berat',
    title_en: 'When days get hard',
    subtitle_id:
      'Sabar bukan berarti memendam semuanya sendiri. Dengarkan perasaannya, beri jeda yang tenang, dan hubungi keluarga sejak awal. Perubahan mendadak atau bahaya selalu membutuhkan pertolongan segera.',
    subtitle_en:
      'Patience never means carrying everything alone. Listen to her feelings, allow calm space, and reach out to family early. Sudden changes or danger always need immediate help.',
    sections: [
      {
        id: 'ch4-food-again',
        icon: 'bowl',
        title_id: 'Jika suatu saat meminta makan lagi',
        title_en: 'If she asks for food again',
        cards: [
          {
            id: 'ch4-food-check',
            title_id: 'Kenali kebiasaannya sekarang',
            title_en: 'Know her current habits',
            body_id: [
              'Menurut Lis, saat ini Popo tidak meminta makanan tambahan setelah selesai makan. Panduan ini disiapkan sebagai bekal jika suatu hari hal itu muncul lagi.',
              'Tetap ikuti jadwal makan dan camilan yang akrab. Bila selera atau permintaannya tiba-tiba berubah drastis, kabari keluarga.',
            ],
            body_en: [
              'According to Lis, Popo does not currently ask for extra food after finishing a meal. This guide is preparation just in case it ever returns.',
              'Keep following her familiar meals and snacks, and let family know if her appetite changes noticeably.',
            ],
          },
          {
            id: 'ch4-food-words',
            kind: 'dialogue',
            title_id: 'Tanggapi rasa laparnya, bukan menguji ingatannya',
            title_en: 'Respond to hunger, not with a memory test',
            body_id: [
              'Jika Popo berkata belum makan atau masih lapar, dengarkan dengan hangat lalu cek apa yang baru dimakan dan camilan ringan apa yang cocok. Jangan berdebat untuk membuktikan ia sudah makan, dan jangan langsung menolak makanan hanya karena ia lupa.',
            ],
            body_en: [
              'If Popo says she has not eaten or feels hungry, listen warmly and check what she ate and what light food suits her. Do not argue to prove she already ate or automatically withhold food.',
            ],
            dialogue: [
              {
                speaker: 'Helper',
                text_id: 'Popo masih lapar, ya? Sebentar saya cek dulu makanan atau camilan yang cocok untuk Popo.',
                text_en: 'Still hungry, Popo? Let me check what meal or light snack would be nice for you.',
              },
            ],
            note_id: 'Contoh kalimat untuk disesuaikan dalam bahasa Kanton sehari-hari, bukan kutipan persis dari Lis.',
            note_en: 'Example wording to adapt in everyday Cantonese, not Lis’s exact words.',
          },
        ],
      },
      {
        id: 'ch4-anger',
        icon: 'heart',
        title_id: 'Saat Popo kesal atau marah',
        title_en: 'When Popo is upset or angry',
        cards: [
          {
            id: 'ch4-anger-needs',
            title_id: 'Suara tenang, cek kenyamanannya satu per satu',
            title_en: 'A calm voice, checking comfort one step at a time',
            body_id: [
              'Gunakan kalimat pendek dengan nada pelan dan halus, satu hal dulu, lalu beri Popo waktu menjawab. Perhatikan dengan lembut apakah ada rasa tidak nyaman di tubuh atau sekitarnya:',
            ],
            body_en: [
              'Use short sentences in a calm, soft tone, one idea at a time, then wait for her reply. Notice gently if any physical or room discomfort could be bothering her:',
            ],
            bullets_id: [
              'Lapar, haus, atau ingin ke toilet.',
              'Nyeri, kepanasan, kedinginan, lelah, atau pakaian yang lembap berkeringat.',
              'Suara terlalu ramai, ruangan mulai gelap, atau merasa sepi ingin ditemani.',
            ],
            bullets_en: [
              'Hunger, thirst or needing the toilet.',
              'Pain, feeling too hot or cold, tiredness or damp clothes.',
              'Too much noise, a dim room or wanting quiet company.',
            ],
          },
          {
            id: 'ch4-anger-heard',
            title_id: 'Dengarkan kekhawatirannya; keluarga selalu ikut membantu',
            title_en: 'Hear her worry; our family helps too',
            body_id: [
              'Saat kesal, Popo kadang khawatir barangnya diambil atau rumahnya dijual. Dengarkan kecemasannya dengan sabar tanpa membenarkan tuduhan atau menyalahkan ingatannya.',
              'Ingat bahwa kami menelepon Popo setiap hari atas inisiatif kami. Kapan pun Anda butuh dukungan untuk menenangkannya, kirim pesan atau telepon kami agar kita tangani bersama.',
            ],
            body_en: [
              'When upset, Popo may worry someone took her things or is selling the home. Acknowledge her worry patiently without confirming the accusation or blaming her memory.',
              'Remember we call Popo proactively every day. Whenever you need help calming her, message or call us so we work through it together.',
            ],
          },
          {
            id: 'ch4-anger-space',
            title_id: 'Beri jeda pada percakapan, lalu kembali hangat',
            title_en: 'Pause the conversation, then reconnect warmly',
            body_id: [
              'Saat Popo mengucapkan kata-kata tajam, Lis kadang melangkah sebentar ke dapur daripada meneruskan perdebatan—sambil tetap memastikan Popo aman dan tidak membutuhkan bantuan mendesak.',
              'Lis dan keluarga sering mengalihkan perhatian Popo ke musik favorit, kenangan masa muda, atau teman-temannya. Setelah kekesalan kecil itu memudar dari ingatannya, Lis kembali bercanda lembut dengannya sementara keluarga ikut menindaklanjuti lewat telepon.',
            ],
            body_en: [
              'If Popo uses sharp words, Lis sometimes steps briefly into the kitchen rather than continuing an argument—while making sure Popo is safe and does not need urgent help.',
              'Lis and family often shift focus to familiar music, younger days or friends. Once the small upset fades, Lis gently jokes with her again while family follows through by phone.',
            ],
          },
          {
            id: 'ch4-anger-you',
            kind: 'support',
            title_id: 'Perasaan Anda juga penting—jangan sungkan bercerita',
            title_en: 'Your feelings matter too—never hold back',
            body_id: [
              'Meski kita tahu demensia yang memicu kata-kata menyakitkan itu, merasa sedih, tersinggung, atau lelah adalah hal yang sangat manusiawi. Merasa terluka sama sekali bukan berarti Anda kurang sabar atau gagal merawat Popo.',
              'Jangan sungkan menceritakan kepada kami apa yang terjadi dan bagaimana perasaan Anda. Kita akan membicarakan dukungan bersama—Anda tidak pernah diminta menanggung momen berat ini sendirian.',
            ],
            body_en: [
              'Even knowing dementia causes hurtful words, feeling sad, stung or exhausted is completely human. Feeling hurt never means you lack patience or have failed Popo.',
              'Please do not hesitate to tell us what happened and how you feel. We will work out support together—you are never expected to carry hard moments alone.',
            ],
          },
        ],
      },
      {
        id: 'ch4-home',
        icon: 'home',
        title_id: 'Saat ingin pulang ke rumah lama',
        title_en: 'When she wants to go to her old home',
        cards: [
          {
            id: 'ch4-home-comfort',
            kind: 'dialogue',
            title_id: 'Dengarkan apa yang dirindukannya',
            title_en: 'Listen to what she misses',
            body_id: [
              'Lis sering mendengar Popo merindukan rumah lamanya dan ingin kembali ke sana. Dengarkan rindunya dengan hangat, lalu ajak duduk bersama atau melakukan hal yang akrab.',
              'Tidak perlu berdebat tentang sudah berapa lama ia tinggal di sini, dan jangan menjanjikan perjalanan yang tidak direncanakan atau mengatakan rumah ini akan dijual hanya agar ia berhenti bertanya.',
            ],
            body_en: [
              'Lis often hears Popo missing her old home and wanting to go back. Listen warmly to what she misses, then invite her to sit together or share something familiar.',
              'Avoid arguing over how long she has lived here, and never promise an unarranged trip or say the home is being sold just to stop the question.',
            ],
            dialogue: [
              {
                speaker: 'Popo',
                text_id: 'Saya mau pulang ke rumah yang dulu.',
                text_en: 'I must go back to the old home.',
              },
              {
                speaker: 'Helper',
                text_id: 'Popo rindu rumah yang dulu, ya? Saya temani duduk dulu. Popo mau cerita tentang rumah itu?',
                text_en: 'Do you miss the old home, Popo? I will sit with you for now. Would you like to tell me about it?',
              },
            ],
            note_id: 'Contoh kalimat untuk disesuaikan dalam bahasa Kanton sehari-hari, bukan kutipan persis dari Lis.',
            note_en: 'Example wording to adapt in everyday Cantonese, not Lis’s exact words.',
          },
          {
            id: 'ch4-home-exit',
            kind: 'safety',
            title_id: 'Jika ia mulai melangkah keluar rumah',
            title_en: 'If she starts to leave the flat',
            body_id: [
              'Bicaralah pelan, tetap dampingi dan jaga Popo dalam pandangan selama aman, lalu segera telepon keluarga untuk membantu. Jangan menarik, menahan paksa, atau mengejar secara berbahaya.',
            ],
            body_en: [
              'Speak gently, stay beside Popo and keep her in sight if safe, then call family right away. Never pull, forcibly restrain or chase her in an unsafe way.',
            ],
            bullets_id: [
              'Jika Popo hilang dari pandangan dan Anda tidak tahu keberadaannya, telepon 999 segera—jangan menunggu balasan pesan.',
              'Bahaya langsung seperti jalan raya atau kebakaran: telepon 999 segera.',
              'Pastikan pintu depan terkunci sesuai pengaturan rumah yang disepakati, dan jangan memberi obat penenang di luar panduan tertulis dokter.',
            ],
            bullets_en: [
              'If Popo goes missing and you do not know where she is, call 999 immediately—do not wait for a message reply.',
              'Immediate danger such as traffic or fire: call 999 immediately.',
              'Keep the front door secured per our agreed home setup, and never give calming medicine outside the doctor’s written plan.',
            ],
          },
        ],
      },
      {
        id: 'ch4-husband',
        icon: 'heart',
        title_id: 'Jika ia mencari almarhum suaminya',
        title_en: 'If she looks for her late husband',
        cards: [
          {
            id: 'ch4-husband-meal',
            kind: 'dialogue',
            title_id: 'Temani rindunya tanpa mengulang kabar duka',
            title_en: 'Offer warm company without repeating grief',
            body_id: [
              'Sekarang Popo jarang menyebut suaminya, meski catatan lama menyebut ia pernah ingin menunggu beliau sebelum makan. Bila hal ini muncul, dengarkan dengan penuh empati, duduklah menemaninya, dan tawarkan makanan yang sudah siap tanpa menjanjikan beliau akan datang.',
              'Tidak perlu mengulang kabar bahwa suaminya sudah wafat bila itu justru membuatnya makin terpukul. Tawarkan musik akrab atau kegiatan yang menenangkan, dan hubungi keluarga jika ia tetap sangat sedih.',
            ],
            body_en: [
              'Popo rarely mentions her husband now, though older notes recall her wanting to wait for him before eating. If this happens, listen warmly, sit beside her and offer ready food without promising he will arrive.',
              'There is no need to repeat that her husband passed away if doing so deepens her grief. Offer familiar music or calm company, and call family if sadness persists.',
            ],
            dialogue: [
              {
                speaker: 'Helper',
                text_id: 'Popo sedang teringat Bapak, ya? Saya temani Popo duduk di sini. Makanannya sudah siap kalau Popo mau mencicipi sedikit.',
                text_en: 'Are you thinking about your husband, Popo? I will sit here with you. The meal is ready whenever you would like a little.',
              },
            ],
            note_id: 'Contoh kalimat untuk disesuaikan dalam bahasa Kanton sehari-hari, bukan kutipan persis dari Lis.',
            note_en: 'Example wording to adapt in everyday Cantonese, not Lis’s exact words.',
          },
        ],
      },
      {
        id: 'ch4-missing',
        icon: 'note',
        title_id: 'Saat barang belum ketemu atau ia menyimpan benda kecil',
        title_en: 'Missing items, drawers and kept things',
        cards: [
          {
            id: 'ch4-missing-search',
            kind: 'dialogue',
            title_id: 'Cari bersama di tempat yang bisa ia lihat',
            title_en: 'Search together where she can see',
            body_id: [
              'Karena Popo senang memindahkan pakaian dan aksesori antar laci, barang bisa berpindah tempat. Jika ia merasa barangnya diambil, tanggapi kekhawatirannya dengan tenang tanpa membenarkan tuduhan, lalu ajak mencari bersama di depan matanya agar ia sendiri yang menemukannya.',
            ],
            body_en: [
              'Because Popo enjoys moving items between drawers, things often change spots. If she thinks something was taken, respond to her worry calmly without confirming any accusation, and invite her to look together in plain view so she can spot it herself.',
            ],
            dialogue: [
              {
                speaker: 'Helper',
                text_id: 'Barangnya belum ketemu, ya Popo? Mari kita cari bersama pelan-pelan.',
                text_en: 'Has it not turned up yet, Popo? Let us look together.',
              },
            ],
            note_id: 'Contoh kalimat untuk disesuaikan dalam bahasa Kanton sehari-hari, bukan kutipan persis dari Lis.',
            note_en: 'Example wording to adapt in everyday Cantonese, not Lis’s exact words.',
          },
          {
            id: 'ch4-missing-packing',
            title_id: 'Barangnya dihormati, ruang pribadi Anda juga',
            title_en: 'Respect her things—and your privacy too',
            body_id: [
              'Selama aman, biarkan Popo menata laci dan aksesori di kamarnya sendiri, dan tanyakan dulu sebelum memindahkan barang pribadinya.',
              'Sebaliknya, kamar dan barang pribadi Anda juga wajib dihormati. Jika Popo masuk mencari barang di kamar Anda, tuntun ia keluar dengan lembut lalu beri tahu keluarga—Anda tidak harus mengorbankan privasi Anda.',
            ],
            body_en: [
              'Where safe, let Popo arrange her own room and ask before reorganising her drawers.',
              'At the same time, your bedroom and personal belongings deserve full respect. If Popo wanders into your room looking for things, guide her out gently and tell family—you do not have to give up your privacy.',
            ],
          },
          {
            id: 'ch4-missing-collection',
            title_id: 'Tidak semua simpanannya adalah sampah',
            title_en: 'Not everything she keeps is rubbish',
            body_id: [
              'Popo kadang menyimpan tisu, masker, wadah plastik, kantong, atau kotak di tas dan lemari. Jangan menertawakannya atau berjanji menyimpan lalu diam-diam membuangnya.',
              'Kita akan menyepakati bersama keluarga benda bersih mana yang boleh disimpan dan bagaimana menangani barang kotor atau membahayakan jalur jalan tanpa berebut dengannya.',
            ],
            body_en: [
              'Popo sometimes keeps tissues, masks, plastic containers, bags or boxes in pockets and cupboards. Never mock her or promise to keep something only to throw it away secretly.',
              'We will agree with you how to distinguish clean keepsakes from dirty or hazardous items without ever struggling over an object.',
            ],
          },
        ],
      },
      {
        id: 'ch4-repetition',
        icon: 'chat',
        title_id: 'Saat pertanyaan terulang & menghormati keyakinan Anda',
        title_en: 'Repeated questions & respecting your faith',
        cards: [
          {
            id: 'ch4-repetition-meet',
            kind: 'dialogue',
            title_id: 'Perkenalkan diri lagi dengan ramah',
            title_en: 'Calmly introduce yourself again',
            body_id: [
              'Jika suatu saat Popo tidak mengenali Anda, sebutkan nama dan peran Anda dengan senyum tanpa menguji apakah ia ingat. Jelaskan singkat apa yang hendak Anda lakukan sebelum mendekat atau membantu.',
            ],
            body_en: [
              'If Popo does not recognise you, warmly share your name and role again without testing her memory. Briefly explain what you are about to do before stepping close or helping.',
            ],
            dialogue: [
              {
                speaker: 'Helper',
                text_id: 'Popo, saya [nama Anda]. Saya tinggal di sini untuk menemani Popo dan membantu pekerjaan rumah.',
                text_en: 'Popo, I am [your name]. I live here to keep you company and help with the home.',
              },
            ],
            note_id: 'Contoh kalimat untuk disesuaikan dalam bahasa Kanton sehari-hari, bukan kutipan persis dari Lis.',
            note_en: 'Example wording to adapt in everyday Cantonese, not Lis’s exact words.',
          },
          {
            id: 'ch4-repetition-beliefs',
            kind: 'support',
            title_id: 'Ibadah, shalat, dan kerudung Anda tetap dihormati',
            title_en: 'Your faith, prayer and headscarf remain respected',
            body_id: [
              'Jika Popo terkejut atau bingung melihat Anda beribadah/shalat atau mengenakan kerudung, jawablah singkat dengan tenang lalu alihkan ke topik santai bila perlu. Anda sepenuhnya bebas menjalankan ibadah dan berpakaian sesuai keyakinan Anda.',
              'Bila pertanyaan yang berulang membuat Anda tidak nyaman atau mengganggu waktu ibadah, beri tahu keluarga agar kita bersama-sama menjaga ketenangan bagi Anda dan Popo.',
            ],
            body_en: [
              'If Popo is surprised or confused seeing you pray or wear a head covering, reply briefly and calmly, then gently change the topic if needed. You remain completely free to practise your faith and dress accordingly.',
              'If repeated questions become distressing or interrupt prayer time, tell family so we can protect both your peace and Popo’s.',
            ],
          },
        ],
      },
      {
        id: 'ch4-independence',
        icon: 'hand',
        title_id: 'Saat ia ingin mengerjakan semuanya sendiri',
        title_en: 'When she wants to do it herself',
        cards: [
          {
            id: 'ch4-independence-bath',
            title_id: 'Ingin mandi lagi atau menolak bantuan mandi',
            title_en: 'Another bath or refusing hands-on bathing help',
            body_id: [
              'Popo mandi sendiri dan tidak suka tubuhnya dimandikan. Jika ia ingin mandi lagi, jangan mempermalukan atau mendebatnya; cek dengan halus apakah ia sedang gerah atau tidak nyaman.',
              'Tetap berada dekat kamar mandi untuk memastikan ia aman, ventilasi berjalan, lantai kering sesudahnya, dan tawarkan bantuan berjalan yang aman bila perlu. Jika ia tampak lemas atau tidak aman, hentikan kegiatan dan minta bantuan.',
            ],
            body_en: [
              'Popo bathes herself and dislikes body-washing help. If she wants another bath, never shame her or argue about earlier baths; check gently if she feels hot or uncomfortable.',
              'Stay nearby for safety, keep ventilation running, dry the floor afterward and offer demonstrated walking support if needed. If she seems unwell or unsafe, pause and call for help.',
            ],
          },
          {
            id: 'ch4-independence-laundry',
            title_id: 'Bantuan cucian tanpa perdebatan',
            title_en: 'Laundry support without arguments',
            body_id: [
              'Popo mencuci tangan hanya baju yang dipakainya sebelum mandi, lalu menerima bantuan menjemurnya; baju lain dan seprai dicuci Lis secara rapi tanpa membuat Popo merasa direpotkan.',
              'Jika Popo belum mau baju kotornya dicuci, jangan berdebat atau diam-diam menyemprotkan cairan kimia. Tawarkan bantuan kecil dan bicarakan bersama keluarga bila penolakan berlanjut.',
            ],
            body_en: [
              'Popo hand-washes only the clothes worn before bathing and welcomes help hanging them; other clothes and bedding are washed discreetly by Lis.',
              'If Popo refuses to have dirty clothes washed, avoid arguing or spraying chemicals secretly. Offer a small step of help and talk with family if it continues.',
            ],
          },
          {
            id: 'ch4-independence-finish',
            title_id: 'Saat terlalu fokus melukis dan sulit berhenti',
            title_en: 'Deep focus on artwork when a pause is needed',
            body_id: [
              'Melukis dan membuat kerajinan membuat Popo merasa dihargai dan berguna. Karena ia sangat tekun, jangan menganggap ia akan langsung berhenti saat diminta.',
              'Hargai usahanya, coba tawarkan jeda kecil atau minum sambil menjaga karyanya tetap rapi di meja, dan libatkan keluarga bila ia terus menolak istirahat—tanpa menambah janji upah atau tenggat waktu rekaan.',
            ],
            body_en: [
              'Painting and crafts help Popo feel valued and purposeful. Because she concentrates so deeply, do not assume she will stop the instant she is asked.',
              'Appreciate her work, gently offer a short rest or drink while keeping her drawing safe on the table, and team up with family when breaks are hard—never invent pay promises or deadlines.',
            ],
          },
        ],
      },
      {
        id: 'ch4-safety',
        icon: 'stop',
        title_id: 'Bukan sekadar hari buruk: pertolongan segera',
        title_en: 'Not just a bad day: immediate help',
        cards: [
          {
            id: 'ch4-safety-sudden',
            kind: 'safety',
            title_id: 'Bingung mendadak atau berubah sangat drastis',
            title_en: 'Sudden or very different confusion',
            body_id: [
              'Jika Popo tiba-tiba bingung dengan cara baru atau jauh lebih bingung dari biasanya, segera cari pertolongan medis darurat: telepon 999. Jangan menganggapnya demensia biasa atau menunggu balasan pesan keluarga dulu; kabari keluarga setelah menelepon.',
              'Rasa gelisah atau kantuk berat yang baru muncul juga perlu penilaian medis segera—jangan menebak sendiri penyebabnya.',
            ],
            body_en: [
              'If Popo suddenly becomes confused in a new way or much more confused than usual, get emergency medical help immediately: call 999. Do not wait for a family message reply; notify family after calling.',
              'New or much stronger agitation or drowsiness also requires prompt medical review—never guess the cause.',
            ],
          },
          {
            id: 'ch4-safety-emergency',
            kind: 'safety',
            title_id: 'Tanda bahaya darurat: telepon 999 dulu',
            title_en: 'Emergency signs: call 999 first',
            body_id: [
              'Untuk tanda-tanda berikut, telepon 999 segera lalu ikuti petunjuk petugas dan kabari keluarga. Jangan menunggu izin keluarga, balasan WhatsApp, atau hasil ukur tekanan darah:',
            ],
            body_en: [
              'For any sign below, call 999 immediately, follow the operator’s directions and then alert family. Never wait for permission, WhatsApp replies or a blood-pressure reading:',
            ],
            bullets_id: [
              'Tidak bisa dibangunkan, pingsan dan belum sadar penuh, atau napas sangat sulit, lambat, atau tidak normal.',
              'Nyeri dada; wajah tiba-tiba mencong; lemah atau kebas mendadak di satu sisi; sulit bicara; atau penglihatan berubah mendadak.',
              'Jika tidak sadar atau sulit dibangunkan, JANGAN beri makanan, minuman, atau obat lewat mulut.',
            ],
            bullets_en: [
              'Cannot be woken, fainted and has not recovered, or has very difficult, slow or abnormal breathing.',
              'Chest pain; sudden facial droop; sudden weakness or numbness (especially on one side); difficulty speaking; or sudden vision change.',
              'If unconscious or hard to wake, NEVER give food, drink or medicine by mouth.',
            ],
          },
          {
            id: 'ch4-safety-medicine-refusal',
            kind: 'safety',
            title_id: 'Jika obat ditolak atau belum pasti tertelan',
            title_en: 'If medicine is refused or swallowing is uncertain',
            body_id: [
              'Saat obat ditolak, Lis biasa mengajak Popo mengobrol santai atau membaca koran di pagi hari, dan menonton komedi bersama di malam hari. Ingat: suasana yang kembali tenang tidak membuktikan obat sudah tertelan.',
              'Catat jujur obat yang terlewat atau belum pasti tertelan beserta yang benar-benar terlihat, lalu hubungi keluarga dan dokter/apoteker mengikuti panduan obat tertulis.',
            ],
            body_en: [
              'When medicine is refused, Lis chats or reads the paper with Popo in the morning, or watches comedy in the evening. Remember: a calmer mood does not prove a tablet was swallowed.',
              'Note honestly what was missed or uncertain, then contact family and the doctor or pharmacist under the written plan.',
            ],
            bullets_id: [
              'Jangan memaksa, menyebut obat sebagai “vitamin”, menyembunyikannya dalam makanan/minuman, menghancurkan, atau mengubah dosis sendiri.',
              'Jangan menebak lalu mengulang dosis jika ragu apakah obat sudah tertelan. Kesulitan menelan harus dibahas dengan dokter atau apoteker.',
            ],
            bullets_en: [
              'Never force, call medicine “vitamins”, hide it in food or drink, crush tablets, or adjust doses yourself.',
              'Never guess and repeat a dose if swallowing is uncertain. Swallowing difficulties need clinical advice.',
            ],
          },
          {
            id: 'ch4-safety-after-medicine',
            kind: 'safety',
            title_id: 'Pusing, sangat mengantuk, atau langkah lebih goyah',
            title_en: 'Dizzy, overly sleepy or more unsteady',
            body_id: [
              'Jika Popo tampak pusing, hampir pingsan, atau jauh lebih mengantuk dan goyah dari biasanya, hentikan kegiatan dan jangan memintanya terus berjalan. Dampingi Popo, hubungi keluarga, dan cari nasihat medis segera meskipun tekanan darahnya tidak tinggi.',
              'Jika ia sulit dibangunkan, napas tidak normal, atau pingsan tanpa pulih, telepon 999 lebih dulu.',
            ],
            body_en: [
              'If Popo seems dizzy, nearly faints, or is much sleepier or unsteadier than usual, stop the activity and do not ask her to walk. Stay beside her, contact family and seek prompt medical advice even if blood pressure is not high.',
              'If she is hard to wake, breathing abnormally or faints without recovering, call 999 first.',
            ],
          },
          {
            id: 'ch4-safety-fall',
            kind: 'safety',
            title_id: 'Jika Popo jatuh: jangan terburu-buru mengangkat',
            title_en: 'If Popo falls: do not rush to lift her',
            body_id: [
              'Tetap tenang, tanyakan apakah ada bagian yang sakit, dan perhatikan nyeri, perdarahan, atau posisi kaki/tubuh yang tidak wajar. Jangan menariknya bangun atau mengangkatnya sendirian.',
            ],
            body_en: [
              'Stay calm, ask whether she hurts, and check for pain, bleeding or an unusual limb position. Never pull her up or lift her on your own.',
            ],
            bullets_id: [
              'Telepon 999 jika diduga ada benturan kepala, cedera leher/punggung/pinggul, nyeri hebat, atau ia tidak bisa bangun. Jaga ia tetap hangat dan ikuti arahan petugas.',
              'Laporkan setiap kejadian jatuh kepada keluarga meski ia tampak baik-baik saja; nyeri yang muncul belakangan juga perlu diperiksa dokter.',
            ],
            bullets_en: [
              'Call 999 for any head bump, suspected neck/back/hip injury, severe pain or inability to get up. Keep her warm and follow dispatcher instructions.',
              'Report every fall to family even if she looks fine; delayed pain or symptoms still need medical review.',
            ],
          },
          {
            id: 'ch4-safety-call',
            kind: 'safety',
            title_id: 'Saat menelepon untuk meminta bantuan',
            title_en: 'When calling for help',
            body_id: [
              'Untuk keadaan darurat di Hong Kong, telepon 999 dan sebutkan alamat lengkap, gedung, lantai, unit, apa yang terjadi, kondisi Popo, dan nomor telepon Anda.',
              'Untuk hal non-darurat, hubungi kontak utama keluarga lebih awal dan gunakan kontak cadangan bila belum tersambung. Pesan WhatsApp bukan pengganti telepon darurat.',
            ],
            body_en: [
              'For emergencies in Hong Kong, dial 999 and state the full address, building, floor, unit, what happened, Popo’s condition and your callback number.',
              'For non-emergencies, call the main family contact early and use the backup contact if unanswered. WhatsApp never replaces an emergency call.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch5',
    number: 5,
    nav_id: '05 Bersama',
    nav_en: '05 Together',
    short_id: 'Kita jalani bersama',
    short_en: 'We carry this together',
    title_id: 'Kita jalani bersama',
    title_en: 'We carry this together',
    subtitle_id:
      'Anda tidak memikul perawatan Popo sendirian. Istirahat, perasaan, ibadah, dan ruang pribadi Anda sama berharganya. Mari berbicara terbuka sejak awal tanpa sungkan.',
    subtitle_en:
      'You do not carry Popo’s care alone. Your rest, feelings, faith and private life matter just as much. Let us speak openly early so we can support each other.',
    sections: [
      {
        id: 'ch5-rest',
        icon: 'clock',
        title_id: 'Istirahat Anda sama pentingnya',
        title_en: 'You need rest too',
        cards: [
          {
            id: 'ch5-daytime-break',
            title_id: 'Waktu jeda saat Popo di pusat kegiatan',
            title_en: 'Your break while Popo is at the centre',
            body_id: [
              'Tinggal bersama Popo bukan berarti bekerja tanpa henti. Setelah pekerjaan rumah yang disepakati selesai di siang hari, Anda punya waktu untuk diri sendiri—beristirahat di kamar, menelepon keluarga, atau keluar sebentar.',
              'Bila pekerjaan terasa terus menyita waktu istirahat Anda, beri tahu kami sejak awal agar kita atur prioritas bersama.',
            ],
            body_en: [
              'Living with Popo never means working non-stop. Once agreed household tasks are finished during the day, you have time to yourself—to rest in your room, call home or step out.',
              'If chores keep eating into your break, tell us early so we can adjust priorities together.',
            ],
          },
          {
            id: 'ch5-night-sleep',
            title_id: 'Malam adalah waktu tidur Anda juga',
            title_en: 'Night is your sleeping time too',
            body_id: [
              'Anda tidak diharapkan berjaga semalaman, memasang alarm, atau berulang kali bangun memeriksa Popo. Jika kebetulan Anda sudah terjaga dan melihat Popo perlu dibantu ke toilet, tuntun ia dengan aman.',
              'Bila suatu saat kebutuhan malam Popo meningkat atau tidur Anda terus terganggu, beri tahu kami. Kita akan meninjau keamanan malam bersama—dan bila Anda sangat lelah, tugas siang bisa disesuaikan supaya Anda sempat pulih.',
            ],
            body_en: [
              'You are not expected to stay awake, set alarms or wake repeatedly to check on Popo. If you happen to be naturally awake and see she needs guidance to the toilet, assist safely.',
              'If nighttime needs ever increase or disrupt your sleep, tell us right away so we can review support together—and adjust daytime chores so you can recover.',
            ],
          },
          {
            id: 'ch5-rest-day',
            title_id: 'Hari libur mingguan tetap menjadi hak Anda',
            title_en: 'Your weekly rest day remains yours',
            body_id: [
              'Hari Minggu direncanakan sebagai hari libur mingguan Anda. Jika suatu saat keluarga ingin menanyakan apakah Anda bersedia membantu pada hari libur, kami akan membicarakannya jauh sebelumnya—dan Anda sepenuhnya bebas menolak tanpa rasa tidak enak.',
            ],
            body_en: [
              'Sunday is your planned weekly rest day. If our family ever asks about help on a rest day, we discuss it beforehand—and you may always decline comfortably with zero guilt.',
            ],
            rows: [
              {
                label_id: 'Hari libur mingguan',
                label_en: 'Weekly rest day',
                value_id: 'Minimal 1 hari dalam setiap 7 hari (setidaknya 24 jam penuh tanpa bekerja).',
                value_en: 'At least one day in every seven days—at least 24 continuous hours off duty.',
              },
              {
                label_id: 'Hari libur resmi HK',
                label_en: 'HK statutory holidays',
                value_id: 'Hak tersendiri di luar hari libur mingguan; tidak boleh diganti uang semata.',
                value_en: 'Separate from weekly rest days; extra pay cannot replace a statutory holiday entitlement.',
              },
            ],
          },
        ],
      },
      {
        id: 'ch5-speak-up',
        icon: 'chat',
        title_id: 'Bicarakan sejak awal—jangan sungkan memikul sendiri',
        title_en: 'Talk early; do not carry it alone',
        cards: [
          {
            id: 'ch5-shared-care',
            kind: 'support',
            title_id: 'Keluarga ikut bertanggung jawab bersama Anda',
            title_en: 'Family shares the responsibility',
            body_id: [
              'Kami ingin Anda merasa diterima, aman, dan dihargai di rumah ini. Suasana kekeluargaan sama sekali tidak mengurangi hak kerja Anda maupun hak Anda untuk meminta bantuan.',
              'Keluarga tinggal dekat, meski tidak selalu bisa menjawab detik itu juga—itulah sebabnya kita menyiapkan kontak utama, kontak cadangan, dan nomor 999 untuk keadaan darurat.',
            ],
            body_en: [
              'We want you to feel genuinely welcome, safe and respected here. A warm family atmosphere never reduces your employment rights or your right to ask for help.',
              'Family lives nearby, though we cannot answer every single second—which is why we prepare primary contacts, backup contacts and 999 for emergencies.',
            ],
          },
          {
            id: 'ch5-speak-early',
            kind: 'dialogue',
            title_id: 'Katakan jujur sebelum masalah terasa berat',
            title_en: 'Speak honestly before a small worry grows',
            body_id: [
              'Di Indonesia kita kadang merasa sungkan untuk bilang belum paham atau sedang lelah. Di rumah ini, justru kami sangat berterima kasih bila Anda berbicara jujur sejak awal—jika ada instruksi yang membingungkan, hal yang membuat kurang nyaman, atau kebutuhan pribadi. Anda juga bebas meminta bantuan penerjemah atau orang tepercaya bila perlu.',
            ],
            body_en: [
              'Many caregivers hesitate to speak up out of politeness when unsure or tired. In this home, we truly appreciate honest, early communication whenever something is unclear or uncomfortable—and you are always welcome to involve a translator or trusted person.',
            ],
            dialogue: [
              {
                speaker: 'Helper',
                text_id: 'Saya belum begitu yakin cara melakukan ini. Boleh kita bahas dulu sebelum saya coba?',
                text_en: 'I am not completely sure how to do this yet. Could we go through it together before I try?',
              },
              {
                speaker: 'Family',
                text_id: 'Terima kasih sudah memberi tahu. Mari kita cari cara yang paling nyaman; kalau ada yang belum bisa, kami akan jelaskan jujur.',
                text_en: 'Thank you for telling us. Let us work out support together; if something is not possible, we will explain honestly.',
              },
            ],
          },
          {
            id: 'ch5-burnout-signs',
            title_id: 'Tanda-tanda bahwa Anda sedang butuh dukungan ekstra',
            title_en: 'Signs that you need extra support',
            body_id: [
              'Merawat lansia dengan demensia membutuhkan energi hati dan fisik. Beri tahu kami—tidak perlu menunggu sampai semua tanda ini muncul:',
            ],
            body_en: [
              'Caring for an elder with dementia takes real emotional and physical energy. Let us know early—do not wait for every sign to build up:',
            ],
            bullets_id: [
              'Merasa sangat lelah sepanjang waktu, bahkan sesudah istirahat.',
              'Susah tidur atau kehilangan selera makan.',
              'Sering merasa sangat kesal pada Popo atau ingin membentak.',
              'Sering menangis, merasa sendirian, atau lebih sering jatuh sakit dari biasanya.',
            ],
            bullets_en: [
              'Feeling exhausted all the time, even after resting.',
              'Struggling to sleep or losing appetite.',
              'Frequently feeling angry with Popo or close to shouting.',
              'Crying often, feeling alone, or falling ill more often than usual.',
            ],
            note_id: 'Langkah bersama: kita akan membahas cara mengurangi beban dan mengatur bantuan. Jika keluhan menetap, periksakan juga ke dokter.',
            note_en: 'Next step: we will discuss lightening the load and arranging help. If symptoms persist, please also see a doctor.',
          },
          {
            id: 'ch5-checkins',
            title_id: 'Obrolan santai tentang kabar Anda juga',
            title_en: 'Relaxed check-ins about how you are doing',
            body_id: [
              'Kita akan menyepakati waktu ngobrol singkat dan santai: bagaimana kabar Popo, bagaimana perasaan Anda, dan dukungan apa yang perlu ditambah. Ini bukan ujian nilai—dan Anda selalu boleh menghubungi kami kapan saja tanpa menunggu jadwal obrolan.',
            ],
            body_en: [
              'We will agree on a short, relaxed chat from time to time: how Popo is doing, how you are feeling and what support would help. It is never a graded test—and you can always reach out in between.',
            ],
          },
        ],
      },
      {
        id: 'ch5-your-life',
        icon: 'home',
        title_id: 'Ruang untuk kehidupan pribadi dan keyakinan Anda',
        title_en: 'Space for your own life and beliefs',
        cards: [
          {
            id: 'ch5-private-room',
            title_id: 'Kamar pribadi, Wi-Fi, dan waktu untuk diri sendiri',
            title_en: 'Your private room, Wi-Fi and personal recharge',
            body_id: [
              'Anda memiliki kamar pribadi dan akses Wi-Fi. Saat sedang tidak bertugas, Anda bisa menutup pintu, beristirahat, menelepon keluarga di Indonesia, berdoa, mendengarkan musik, atau berjalan santai.',
              'Jika Popo sesekali masuk kamar Anda untuk mencari sesuatu, kabari keluarga agar kita bantu menjaga batas ruang pribadi Anda.',
            ],
            body_en: [
              'You have your own private room and Wi-Fi. When off duty, you may close your door to rest, call family back home, pray, listen to music or take a walk.',
              'If Popo occasionally wanders into your room looking for belongings, let family know so we help protect that boundary.',
            ],
          },
          {
            id: 'ch5-faith-food',
            title_id: 'Ibadah, pakaian, dan pilihan makanan Anda dihormati',
            title_en: 'Your worship, dress and food choices are respected',
            body_id: [
              'Kami menghormati agama, waktu ibadah/shalat, dan pilihan Anda mengenakan kerudung. Anda tidak pernah diminta melepas keyakinan atau kebiasaan ibadah Anda.',
              'Beri tahu kami makanan apa saja yang tidak Anda konsumsi atau tidak bersedia Anda pegang. Menu Popo saat ini sudah tanpa babi dan tanpa kaldu babi, dan meski makan bersama Popo terasa hangat, Anda tetap boleh menikmati waktu makan sendiri dengan tenang.',
            ],
            body_en: [
              'We respect your religion, prayer times and choice to wear a headscarf. You will never be asked to give up your beliefs or worship.',
              'Let us know which foods you do not eat or handle. Popo’s current food guide already excludes pork and pork stock, and while sharing meals with Popo is warm company, you are always welcome to enjoy your own mealtimes too.',
            ],
          },
        ],
      },
      {
        id: 'ch5-handover',
        icon: 'book',
        title_id: 'Belajar pelan-pelan di samping Mbak Lis',
        title_en: 'Learn together, a little at a time with Lis',
        cards: [
          {
            id: 'ch5-watch-practise',
            image: 'lis-with-popo',
            title_id: 'Lihat, tanya, lalu coba bersama Lis',
            title_en: 'Watch, ask, then practise beside Lis',
            body_id: [
              'Anda tidak harus hafal semua kebiasaan rumah ini di hari pertama. Lis telah menemani Popo selama enam tahun, dan keluarga akan mengatur masa serah terima agar Anda bisa melihat langsung, bertanya sebebasnya, lalu mencoba pelan-pelan bersama Lis.',
              'Kalau ada hal yang belum terasa mantap, minta latihan lagi—tidak perlu buru-buru. Dan ingat: untuk obat serta perawatan khusus, panduan tertulis yang sudah ditinjau tenaga kesehatan tetap menjadi patokan keselamatan.',
            ],
            body_en: [
              'You do not need to memorise every habit on day one. Lis has cared for Popo for six years, and family will arrange handover days so you can watch, ask freely and practise beside her.',
              'If anything does not feel confident yet, ask for another walkthrough. For medicines and special care steps, reviewed written instructions always remain our safety standard.',
            ],
            rows: [
              {
                label_id: 'Rutinitas & hiburan',
                label_en: 'Routines & TV',
                value_id: 'Musik pagi di TV, koran lobi, rute penjemputan pusat kegiatan, dan bahasa Kanton sehari-hari.',
                value_en: 'Morning TV music, lobby newspaper, pickup route and everyday Cantonese expressions.',
              },
              {
                label_id: 'Pasar & dapur',
                label_en: 'Market & kitchen',
                value_id: 'Kios pasar basah, bahan tanpa babi, masakan favorit seperti bubur ikan jahe, jeli pandan, dan letak perlengkapan.',
                value_en: 'Wet-market stalls, pork-free staples, favourite dishes like ginger fish congee and pandan jelly, and storage.',
              },
              {
                label_id: 'Perawatan & obat',
                label_en: 'Care & medicines',
                value_id: 'Cara aman mendampingi berjalan, alat tensi, kotak obat sesuai panduan dokter, perawatan gigi palsu, kaki, dan kulit.',
                value_en: 'Safe walking support, blood-pressure monitor, doctor-reviewed medicine box, and denture, foot and skin care.',
              },
            ],
          },
          {
            id: 'ch5-jokes-and-change',
            title_id: 'Candaan yang aman—dan penyesuaian bila kebutuhan Popo berubah',
            title_en: 'Kind humour—and reviewing together if needs change',
            body_id: [
              'Tawa hangat lahir dari hal yang benar-benar Popo sukai. Jangan pernah menyembunyikan tongkat, alat bantu jalan, tas, atau barang penting Popo sebagai candaan; hentikan bila ia tampak kurang nyaman.',
              'Saat ini Popo masih mandi sendiri. Jika di masa depan kesehatannya berubah dan ia membutuhkan bantuan lebih berat, keluarga akan membahas ulang tugas, alat bantu, pelatihan, dan dukungan bersama Anda—tugas berat baru tidak akan muncul begitu saja tanpa kesepakatan.',
            ],
            body_en: [
              'Warm laughter grows from things Popo genuinely enjoys. Never hide her cane, walking aid, bag or important items as a joke, and stop right away if she looks uneasy.',
              'Right now Popo bathes herself. If her health changes later and she needs heavier care, our family will review duties, equipment, training and support with you first—new duties will never appear automatically without discussion.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch6',
    number: 6,
    nav_id: '06 Praktis',
    nav_en: '06 Practical',
    short_id: 'Panduan praktis & masak',
    short_en: 'Practical & cookbook',
    title_id: 'Panduan praktis & buku masak bersama',
    title_en: 'Practical matters & our shared cookbook',
    subtitle_id:
      'Pegangan ringkas untuk keseharian: kontak darurat, contoh pesan WhatsApp siap salin, tekanan darah & obat, keselamatan rumah, hingga buku masak bergambar dari foto asli Lis.',
    subtitle_en:
      'A clear everyday reference: handover contacts, copy-ready WhatsApp messages, blood pressure & medicines, home safety, and our illustrated shared cookbook from Lis’s real photos.',
    sections: [
      {
        id: 'ch6-contacts',
        icon: 'phone',
        title_id: 'Kontak penting & darurat 999',
        title_en: 'Who to contact & 999 emergency',
        cards: [
          {
            id: 'ch6-contact-sheet',
            reader_label_id: 'Diisi bersama saat serah terima',
            reader_label_en: 'Completed privately at handover',
            title_id: 'Nomor keluarga dan layanan (disimpan pribadi di ponsel Anda)',
            title_en: 'Family and service numbers (saved privately on your phone)',
            body_id: [
              'Demi privasi keluarga, nomor telepon dan alamat lengkap tidak ditampilkan di halaman publik ini. Kita akan mengisi, menyimpan, dan menguji panggilan nomor-nomor ini bersama di hari serah terima.',
            ],
            body_en: [
              'For family privacy, phone numbers and exact home addresses are kept off this public page. We will fill in, save and test these numbers together during handover.',
            ],
            rows: [
              {
                label_id: 'Kontak utama keluarga',
                label_en: 'Main family contact',
                value_id: 'Diisi & diuji saat serah terima',
                value_en: 'To be filled & tested at handover',
              },
              {
                label_id: 'Kontak cadangan keluarga',
                label_en: 'Backup family contact',
                value_id: 'Diisi & diuji saat serah terima',
                value_en: 'To be filled & tested at handover',
              },
              {
                label_id: 'Pusat kegiatan lansia',
                label_en: 'Day centre & transport',
                value_id: 'Nama petugas & nomor jemputan diisi saat serah terima',
                value_en: 'Staff & pickup driver number added at handover',
              },
              {
                label_id: 'Dokter / klinik Popo',
                label_en: 'Popo’s doctor / clinic',
                value_id: 'Nama klinik & nomor diisi saat serah terima',
                value_en: 'Clinic name & number added at handover',
              },
              {
                label_id: 'Agensi Anda',
                label_en: 'Your agency',
                value_id: 'Nama kontak & nomor disimpan di ponsel Anda',
                value_en: 'Contact name & number saved on your phone',
              },
            ],
          },
          {
            id: 'ch6-emergency-999',
            kind: 'safety',
            title_id: 'Darurat medis atau kebakaran: telepon 999 dulu',
            title_en: 'Medical or fire emergency: call 999 first',
            body_id: [
              'Untuk kebakaran atau kondisi darurat medis, langsung telepon 999 tanpa menunggu balasan WhatsApp keluarga. Simpan salinan alamat rumah lengkap (gedung, lantai, dan nomor unit) di tempat yang mudah dibaca saat menelepon.',
            ],
            body_en: [
              'For fire or a medical emergency, dial 999 immediately without waiting for a family WhatsApp reply. Keep the complete home address (building, floor and unit) written privately where you can read it easily during a call.',
            ],
            bullets_id: [
              'Sebutkan alamat lengkap, gedung, lantai, dan nomor unit.',
              'Sebutkan nomor ponsel Anda, apa yang terjadi, dan kondisi Popo saat itu.',
              'Setelah pertolongan diminta dan keadaan aman, segera kabari keluarga.',
            ],
            bullets_en: [
              'Give the full address, building, floor and unit number.',
              'Share your mobile number, what happened and Popo’s condition.',
              'Once help is on the way and you are safe, notify family.',
            ],
          },
        ],
      },
      {
        id: 'ch6-whatsapp',
        icon: 'chat',
        title_id: 'Contoh pesan WhatsApp singkat (siap salin)',
        title_en: 'Short WhatsApp messages (ready to copy)',
        intro_id:
          'Contoh pesan ini membantu Anda berkabar singkat tanpa harus mengetik panjang dari awal. Cukup ketuk Salin, lalu ganti bagian di dalam tanda kurung [ ] sesuai keadaan—tidak ada kewajiban melapor sepanjang hari.',
        intro_en:
          'These short templates save you typing from scratch. Tap Copy and replace the bracketed [ ] parts with what happened—there is never a requirement for all-day reporting.',
        embedWidget: 'whatsapp-templates',
        cards: [],
      },
      {
        id: 'ch6-bp-meds',
        icon: 'shield',
        title_id: 'Tekanan darah & panduan obat tertulis',
        title_en: 'Blood pressure & the written medicine plan',
        cards: [
          {
            id: 'ch6-bp-method',
            title_id: 'Mengukur dan mencatat tekanan darah dengan tenang',
            title_en: 'Measure while settled and record accurately',
            body_id: [
              'Lis biasa mengukur tekanan darah pada pagi dan malam hari. Waktu tepat pengukuran (sebelum atau sesudah sarapan/makan malam) serta angka batas lapor akan diselaraskan dengan instruksi dokter saat serah terima.',
            ],
            body_en: [
              'Lis normally checks blood pressure morning and evening. Exact timing relative to meals and personal reporting thresholds follow the doctor’s instructions shown at handover.',
            ],
            bullets_id: [
              'Biarkan Popo duduk tenang minimal 5 menit sebelum mengukur, dan tidak berbicara saat manset mengembang.',
              'Pasang manset di lengan atas tanpa terhalang lengan baju tebal, dengan lengan ditopang setinggi jantung sesuai petunjuk alat.',
              'Catat tanggal, waktu, angka atas & bawah (mmHg), serta keluhan bila ada. Catat jujur juga jika pengukuran batal atau ditolak.',
              'Angka tensi tidak pernah menjadi dasar untuk menambah, mengurangi, atau menghentikan obat sendiri.',
            ],
            bullets_en: [
              'Have Popo sit quietly for at least 5 minutes first, without talking during measurement.',
              'Place the cuff on her bare upper arm supported at heart level according to the monitor guide.',
              'Record date, time, top and bottom numbers (mmHg), and any symptoms—and note honestly if refused or incomplete.',
              'A blood-pressure reading never authorises adding, reducing or stopping medicine on your own.',
            ],
          },
          {
            id: 'ch6-meds-safety',
            kind: 'safety',
            title_id: 'Obat: ikuti panduan tertulis dokter & apoteker',
            title_en: 'Medicines: follow the doctor-reviewed written plan',
            body_id: [
              'Pengaturan dan pemberian obat hanya dilakukan setelah pelatihan menggunakan daftar tertulis yang telah dicek dokter atau apoteker. Jangan mengenali obat hanya dari warna atau bentuk tabletnya.',
            ],
            body_en: [
              'Organise and give medicines only after training with a written list reconciled by the doctor or pharmacist. Never identify tablets by colour or shape alone.',
            ],
            bullets_id: [
              'Cocokkan label, dosis, kotak obat, dan jadwal persis dengan panduan tertulis terbaru.',
              'Jangan menghancurkan tablet, membuka kapsul, mencampur atau menyembunyikan obat dalam makanan/minuman, atau mengubah dosis sendiri.',
              'Untuk obat malam atau penenang bila sulit tidur, ikuti syarat dan batas pengulangan pada panduan tertulis dokter—jangan berasumsi obat rutin boleh diberikan dua kali.',
              'Kabari keluarga lebih awal sebelum persediaan obat hampir habis.',
            ],
            bullets_en: [
              'Match label, strength, compartment and timing exactly to the current written plan.',
              'Never crush tablets, open capsules, hide medicine in food or drink, or change doses based on older drafts.',
              'For sleep or calming medicines, follow exact written criteria and limits—never assume a dose can be repeated.',
              'Alert family early before supplies run low.',
            ],
          },
        ],
      },
      {
        id: 'ch6-personal-safety',
        icon: 'hand',
        title_id: 'Perawatan diri & keselamatan rumah, malam, kebakaran',
        title_en: 'Dignified personal care & home/fire safety',
        cards: [
          {
            id: 'ch6-personal-care',
            title_id: 'Mandi, gigi palsu, kaki, losion, dan rambut',
            title_en: 'Bathing, dentures, feet, lotion and hair',
            body_id: [
              'Semua langkah perawatan harian akan dicontohkan langsung dengan produk yang aman dan nyaman bagi Popo:',
            ],
            body_en: [
              'Every daily personal-care step will be demonstrated directly with safe products comfortable for Popo:',
            ],
            rows: [
              {
                label_id: 'Mandi & cucian',
                label_en: 'Bathing & clothes',
                value_id: 'Popo mandi sendiri; tetap dekat menjaga keselamatan & ventilasi. Bantu jemur baju pra-mandi yang dicucinya.',
                value_en: 'Popo bathes herself; stay nearby for wellbeing & ventilation. Offer help hanging her pre-bath clothes.',
              },
              {
                label_id: 'Gigi palsu',
                label_en: 'Dentures',
                value_id: 'Bantu melepas, merendam, dan membilas sesuai petunjuk produk pembersih yang ditunjukkan—bukan takaran catatan lama.',
                value_en: 'Help remove, soak and rinse following the current cleaner directions—not older draft numbers.',
              },
              {
                label_id: 'Perawatan kaki',
                label_en: 'Foot care',
                value_id: 'Perhatikan luka, nyeri, atau perubahan kulit lalu laporkan ke keluarga. Jangan mengoles alkohol harian atau memotong kuku tanpa arahan.',
                value_en: 'Report any new pain, wound or skin change to family. Do not apply daily alcohol, massage sore feet or trim nails without checked instructions.',
              },
              {
                label_id: 'Losion & rambut',
                label_en: 'Lotion & hair',
                value_id: 'Oleskan losion di lengan/kaki dengan izin Popo. Pewarnaan rambut hanya dilakukan setelah produk dan caranya dicek bersama—uban bukan perintah langsung menyemir.',
                value_en: 'Apply agreed lotion to arms/legs with permission. Hair dye waits until product and safety steps are checked—white roots are not an instruction to dye immediately.',
              },
            ],
          },
          {
            id: 'ch6-walking-night',
            title_id: 'Berjalan aman & malam tanpa berjaga',
            title_en: 'Safe walking & calm nights without a vigil',
            body_id: [
              'Jaga lantai selalu bersih, kering, dan bebas penghalang. Berjalanlah dekat di samping Popo memakai cara menopang yang sudah dicontohkan. Payung bukan pengganti alat bantu jalan, dan jangan pernah menarik atau mengangkat Popo dari ketiak.',
              'Sebelum tidur, nyalakan lampu jalur ke toilet sesuai kesepakatan dan pastikan rute darurat tetap lapang tanpa penghalang pintu. Anda tidak diminta berjaga atau memasang alarm.',
            ],
            body_en: [
              'Keep floors clean, dry and unobstructed. Walk close beside Popo using the demonstrated support method. An umbrella never replaces a walking aid, and never pull or lift Popo under the armpits.',
              'Before bed, switch on the agreed toilet-route light and keep emergency exits clear without barriers. You are never expected to keep a night vigil or set alarms.',
            ],
          },
          {
            id: 'ch6-fire-bags',
            kind: 'safety',
            title_id: 'Jika terjadi kebakaran & dua tas siaga',
            title_en: 'If there is a fire & two preparedness bags',
            body_id: [
              'Jika kebakaran terjadi di dalam unit, tetap tenang dan bantu Popo segera keluar lewat tangga darurat terdekat lalu telepon 999 dari tempat aman—JANGAN memakai lift.',
            ],
            body_en: [
              'If fire starts inside the unit, stay calm and guide Popo out promptly via the nearest safe staircase, then call 999 from safety—NEVER use the lift.',
            ],
            bullets_id: [
              'Jangan masuk ke koridor atau tangga yang dipenuhi asap. Tutup pintu unit setelah keluar bila aman.',
              'Jika tidak ada jalur keluar yang aman, berlindung di ruangan bebas asap, tutup pintu, telepon 999, sebutkan lokasi Anda, dan ikuti arahan petugas.',
              'JANGAN menunda menyelamatkan diri untuk mengambil tas, obat, atau handuk basah, dan JANGAN menyalakan kipas pembuangan (exhaust fan) saat kebakaran.',
              'Tas keluar harian (ponsel, kunci, tisu, handuk kecil, payung, kipas kecil) dan tas darurat (identitas, sedikit uang tunai, 2 handuk kecil, air minum, power bank) akan disepakati tempat simpannya bersama—keselamatan nyawa selalu lebih utama daripada barang.',
            ],
            bullets_en: [
              'Do not enter a smoke-filled corridor or staircase. Close the unit door behind you if safe.',
              'If no safe escape exists, shelter in a smoke-free room, close the door, call 999, state your exact location and follow instructions.',
              'NEVER delay escape to grab bags, medicine or wet towels, and NEVER turn on exhaust fans as a fire response.',
              'We will agree easy spots for the outing bag and emergency bag—getting out safely always comes before collecting items.',
            ],
          },
        ],
      },
      {
        id: 'ch6-home-shopping',
        icon: 'home',
        title_id: 'Rumah, belanja pasar, catatan uang & kontrol dokter',
        title_en: 'Home, wet market, money records & appointments',
        cards: [
          {
            id: 'ch6-appliances-clean',
            title_id: 'Peralatan rumah, kebersihan, cucian, dan TV',
            title_en: 'Appliances, cleaning, laundry and TV',
            body_id: [
              'Lis akan mendemonstrasikan peralatan dapur, mesin cuci, remote TV/YouTube, dan produk pembersih yang dipakai di rumah ini. Selalu pakai pembersih sesuai label—jangan membuat campuran Dettol dari catatan lama dan jangan menyemprotkan disinfektan ke bahan makanan.',
              'Jangan menyalakan pengering listrik atau penghangat tempat tidur sebelum alat dan cara pakainya dicek bersama. Cek stok tisu, sabun, sampo, dan perlengkapan mandi lalu kabari keluarga sebelum habis—Popo memakai cukup banyak tisu, dan itu hal wajar.',
            ],
            body_en: [
              'Lis will show you kitchen appliances, the washing machine, TV/YouTube controls and current cleaning products. Always follow product labels—never mix old Dettol recipes or spray household disinfectant onto food.',
              'Do not use an electric dryer or bed heater before its safety and instructions are checked together. Let family know early when tissues, soap or toiletries run low—Popo uses plenty of tissues, and we never restrict hygiene essentials.',
            ],
          },
          {
            id: 'ch6-shopping-money',
            title_id: 'Belanja pasar basah, kartu Octopus, dan catatan belanja',
            title_en: 'Wet-market shopping, Octopus card and clear records',
            body_id: [
              'Lis biasanya berbelanja bahan segar sekitar seminggu sekali (sayuran, ikan, daging tanpa babi) sementara kebutuhan rumah tangga besar dipesan keluarga secara daring. Lis akan menemani Anda mengenali kios langganan dan rute pasar.',
              'Uang belanja dan kartu Octopus untuk keperluan kerja selalu terpisah dari gaji pribadi Anda—jangan menalangi biaya rumah tangga dengan uang pribadi tanpa kesepakatan penggantian. Jika butuh rekening bank Hong Kong, keluarga membantu mengurusnya sementara kartu dan PIN tetap sepenuhnya pribadi milik Anda.',
            ],
            body_en: [
              'Lis usually shops for fresh vegetables, fish and non-pork meats about once a week, while family orders bulk household supplies online. Lis will introduce the usual stalls and route.',
              'Shopping money and the work Octopus card stay completely separate from your personal wages—never cover household expenses out of pocket without agreed reimbursement. If you need a Hong Kong bank account, family helps set it up while your card and PIN stay strictly private.',
            ],
          },
          {
            id: 'ch6-appointments',
            title_id: 'Persiapan kunjungan dokter atau tes klinik',
            title_en: 'Preparing for clinic visits or tests',
            body_id: [
              'Keluarga biasanya ikut mendampingi saat jadwal kontrol dokter; Anda menemani untuk membantu Popo. Perjalanan berdua saja untuk tes sederhana hanya disepakati jika Anda sudah benar-benar siap dan nyaman.',
            ],
            body_en: [
              'Family normally attends doctor appointments with you so you can support Popo together. Going solo for a simple clinic test is agreed only when you feel genuinely ready.',
            ],
            bullets_id: [
              'Sebelum berangkat: cek tanggal, lokasi, transportasi, surat janji temu, identitas, daftar obat terbaru, dan catatan tensi/keluhan.',
              'Untuk tes darah, ikuti instruksi klinik soal makan, minum, dan obat—jangan menebak sendiri apakah Popo harus puasa.',
              'Sepulang dari klinik: catat arahan dokter dan jadwal kontrol berikutnya; jika resep berubah, keluarga dan dokter/apoteker akan mencocokkan kotak obat sebelum dipakai.',
            ],
            bullets_en: [
              'Before leaving: confirm date, clinic, transport, appointment slip, ID, reviewed medicine list and BP/symptom notes.',
              'For blood tests, follow clinic instructions on fasting and medicines—never guess whether to skip tablets.',
              'Afterward: note doctor instructions and the next appointment; if prescriptions change, family and the doctor/pharmacist reconcile the medicine box before use.',
            ],
          },
        ],
      },
      {
        id: 'ch6-cookbook',
        icon: 'bowl',
        title_id: 'Buku masak bersama & rekap menu 7 hari',
        title_en: 'Familiar foods: our shared cookbook & 7-day recap',
        intro_id:
          'Foto-foto masakan asli yang sudah dikonfirmasi keluarga mengenalkan hidangan yang dinikmati Popo bersama Lis. Jelajahi sarapan, makan siang & malam, camilan & minuman, ide menu 7 hari, serta rujukan video memasak tanpa babi.',
        intro_en:
          'Confirmed real kitchen photographs introduce the dishes Popo has enjoyed with Lis. Explore familiar breakfasts, lunches and dinners, snacks and drinks, 7-day meal ideas, and pork-free cooking video references.',
        embedWidget: 'shared-cookbook',
        cards: [],
      },
      {
        id: 'ch6-contract',
        icon: 'shield',
        title_id: 'Pengaturan rumah & kontrak kerja tetap terpisah',
        title_en: 'Household guide & employment contract kept separate',
        cards: [
          {
            id: 'ch6-rights-separate',
            kind: 'support',
            title_id: 'Panduan merawat ini tidak menggantikan kontrak resmi Anda',
            title_en: 'This care guide never replaces your Standard Employment Contract',
            body_id: [
              'Gaji, hari libur mingguan, hari libur resmi, cuti, akomodasi, dan makan tetap mengikuti Standard Employment Contract serta hukum Hong Kong. Tanggal dan cara pembayaran gaji selalu tertulis jelas terpisah dari uang belanja rumah.',
              'Usulan lama soal target masak, bonus, atau tabungan bukanlah kewajiban otomatis. Mintalah penjelasan dalam bahasa yang Anda pahami sepenuhnya sebelum menyetujui apa pun; membaca panduan ini tidak pernah mengurangi hak kerja Anda.',
            ],
            body_en: [
              'Wages, weekly rest days, statutory holidays, leave, accommodation and food always follow the Standard Employment Contract and Hong Kong law. Pay date and method are set clearly and separately from household grocery funds.',
              'Older draft notes on bonuses, savings or cooking targets are not automatic duties. Always ask for an explanation in a language you understand fully before agreeing to anything; reading this guide never waives your rights.',
            ],
          },
        ],
      },
    ],
  },
];
