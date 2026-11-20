import type { GuideChapter } from './types';

export const CHAPTERS_1_TO_3: GuideChapter[] = [
  {
    id: 'ch1',
    number: 1,
    nav_id: '01 Popo',
    nav_en: '01 Popo',
    short_id: 'Kenalan dengan Popo',
    short_en: 'Who Popo is',
    title_id: 'Kenalan lebih dekat dengan Popo',
    title_en: 'Come and get to know Popo better',
    subtitle_id:
      'Ingatannya memang memudar, tapi perasaannya tetap hangat dan nyata. Mengenal kisah hidup Popo membantu kita merawatnya dengan penuh hormat—seperti menyayangi ibu atau nenek sendiri di rumah.',
    subtitle_en:
      'Her memory fades, but her feelings remain warm and real. Knowing Popo’s life story helps us care for her with dignity—just as we would care for our own mother or grandmother.',
    sections: [
      {
        id: 'ch1-welcome',
        icon: 'heart',
        title_id: 'Pujian kecil, senyum lebar.',
        title_en: 'A little compliment, a warm smile.',
        cards: [
          {
            id: 'ch1-hello',
            image: 'popo-sunglasses',
            title_id: 'Ini Popo, ibu kami.',
            title_en: 'Meet Popo, our mother.',
            body_id: [
              'Lis membantu memilih kacamata hitam ini untuk Popo. Popo adalah sosok ibu yang biasanya ramah, sopan, dan murah senyum—mungkin senyumnya mengingatkan Anda pada ibu atau nenek di kampung halaman.',
              'Popo sangat senang mendapat pujian yang tulus tentang pakaian, rambut, atau penampilannya. Sejak mengalami demensia dan kehilangan suaminya, kadang muncul rasa sedih, sepi, bingung, atau kesal—dan itu semua perasaan manusiawi yang butuh ditemani dengan tenang.',
            ],
            body_en: [
              'Lis helped choose these sunglasses for Popo. Popo is usually cheerful, polite and warm—perhaps her smile reminds you of your own mother or grandmother back home.',
              'She loves a sincere compliment about her clothes, hair or accessories. Since living with dementia and losing her husband, she also has moments of sadness, loneliness, confusion or irritation—real feelings that simply need calm company.',
            ],
          },
        ],
      },
      {
        id: 'ch1-story',
        icon: 'home',
        title_id: 'Ia pernah mulai dari nol juga.',
        title_en: 'She once had to start afresh, too.',
        cards: [
          {
            id: 'ch1-younger-work',
            image: 'popo-young',
            title_id: 'Kisah hidup Popo mungkin mirip kisah Anda!',
            title_en: 'Popo’s life might have the same life like yours!',
            body_id: [
              'Karena perang, Popo harus meninggalkan kampung halamannya dan merantau ke Hong Kong. Pekerjaan pertamanya di sini adalah sebagai pembantu rumah tangga—yang paling muda di rumah keluarga berbahasa Shanghai.',
              'Awalnya ia sama sekali belum mengerti bahasanya; ada banyak kesulitan dan air mata saat beradaptasi di negeri orang. Namun Popo cerdas, rajin, dan cepat belajar. Pasangan majikannya sangat menyayanginya dan berkali-kali memintanya tetap tinggal ketika keluarga lain menawarkan pekerjaan.',
            ],
            body_en: [
              'Because of war, Popo had to leave her hometown and come to Hong Kong. Her very first job here was as a domestic helper—the youngest one in a Shanghainese-speaking household.',
              'At first she understood none of the language, and there were real hardships and tears. Yet she was bright, hardworking and eager to learn. Her employers grew deeply fond of her and repeatedly asked her to stay whenever another family offered her work.',
            ],
          },
          {
            id: 'ch1-childhood',
            title_id: 'Dari toko keluarga yang ramai di Guangzhou',
            title_en: 'From a busy family shop in Guangzhou',
            body_id: [
              'Semasa kecil, keluarga Popo memiliki toko besar di Guangzhou yang menjual kebutuhan sehari-hari, bahan makanan, kue bulan buatan sendiri, dan memiliki bagian potong daging. Popo adalah anak kedua dari tujuh bersaudara.',
              'Meskipun ada empat pembantu di rumah keluarganya, sang nenek tetap membiasakan Popo membantu pekerjaan rumah dan toko. Sopan santun, rajin, dan rendah hati adalah nilai yang ia pegang sejak kecil.',
            ],
            body_en: [
              'Growing up, Popo’s family ran a large shop in Guangzhou selling daily necessities, groceries, homemade mooncakes and fresh cuts from its butcher counter. She was the second of seven children.',
              'Even with four domestic helpers at home, her grandmother still expected Popo to help with household and shop chores. Good manners, diligence and humility mattered deeply to her.',
            ],
          },
          {
            id: 'ch1-school-reading',
            title_id: 'Sekolah singkat, gemar membaca sampai sekarang',
            title_en: 'Brief schooling, a lasting love of reading',
            body_id: [
              'Popo hanya sempat bersekolah sampai kelas dua sekolah dasar. Meski demikian, ia mengenali banyak huruf Tionghoa dan sangat suka membacanya keras-keras—bahkan tanpa diminta. Sekolah yang singkat tidak pernah memadamkan rasa ingin tahunya.',
            ],
            body_en: [
              'Popo completed only the second year of primary school. Even so, she recognises many Chinese characters and enjoys reading them aloud—even without being asked. Brief schooling never dimmed her curiosity.',
            ],
          },
        ],
      },
      {
        id: 'ch1-pride',
        icon: 'hand',
        title_id: 'Menjaga harga diri: bantu tanpa mengambil alih.',
        title_en: 'Her pride: help without taking over.',
        cards: [
          {
            id: 'ch1-bag-and-towels',
            title_id: 'Tas dan barang pribadinya punya arti sendiri',
            title_en: 'Her bag and belongings matter deeply',
            body_id: [
              'Saat bangun tidur, hal pertama yang biasanya dicari Popo adalah tasnya. Ia senang memeriksa, mengemas, dan menata pakaian serta aksesori di kamarnya—sering memindahkannya dari satu laci ke laci lain.',
              'Ia juga suka melipat handuk kecil dan meletakkannya dekat tempat tidur. Sama seperti kita menjaga rasa hormat pada orang tua, biarkan ia menata barangnya dengan caranya sendiri selama aman. Jangan menata ulang kamarnya kecuali ia meminta; urusan mencuci pakaian rutin dan seprai adalah hal yang terpisah.',
            ],
            body_en: [
              'When she wakes, the first thing Popo looks for is her bag. She enjoys checking, packing and arranging clothes and accessories in her room—often moving them from one drawer to another.',
              'She also folds small towels and keeps them near her bed. Out of respect for her independence, let her arrange her own things her way where it is safe. Do not rearrange her room unless she asks; routine laundry and bedding care are separate.',
            ],
          },
          {
            id: 'ch1-self-care',
            title_id: 'Yang masih bisa ia kerjakan sendiri, beri ruang',
            title_en: 'Let her keep doing what she still can',
            body_id: [
              'Popo masih mencuci muka, menyikat gigi, dan mandi sendiri. Ia tidak suka dibantu saat mandi. Ia hanya mencuci dengan tangan pakaian yang baru saja dipakainya sebelum mandi; setelah itu, Lis membantu menjemurnya.',
              'Pakaian lainnya dan seprai mudah terlupakan oleh Popo. Sebenarnya Lis tetap mencuci semuanya itu secara rapi tanpa membuat Popo merasa direpotkan atau menyadarinya. Saat Popo mandi, tetaplah berada dekat kamar mandi untuk memastikan ia baik-baik saja dan kipas ventilasi menyala; sesudahnya Lis membantu berganti pakaian sambil bercanda hangat.',
            ],
            body_en: [
              'Popo still washes her face, brushes her teeth and bathes herself. She dislikes assistance during the bath. She hand-washes only the clothes she wore right before bathing; afterward, Lis helps hang them up.',
              'Her remaining clothes and bedding are easily forgotten, so Lis washes those discreetly without Popo noticing. Stay near the bathroom to check she is alright and ensure ventilation is on; afterward, Lis helps her dress while sharing lighthearted jokes.',
            ],
          },
          {
            id: 'ch1-painting-purpose',
            image: 'popo-painting',
            title_id: 'Masih berkarya. Masih merasa berguna bagi keluarga.',
            title_en: 'Still creating. Still helping her family.',
            body_id: [
              'Meski kini berusia 91 tahun, Popo percaya ia masih bekerja sebagai Manajer Ruang Sampel di pusat kegiatan lansia yang ia datangi pada hari kerja. Selama enam tahun kami menjaga cerita hangat ini: ia menggambar dan membuat kerajinan sebagai sampel untuk dijual di India, mendapat kupon belanja supermarket, dan ikut membantu kebutuhan keluarga.',
              'Ia merasa bakatnya diakui dan dihargai. Saat kami memberinya buku gambar di rumah, ia melihatnya sebagai tugas penting untuk diselesaikan. Bagi Popo, ini adalah kebanggaan dan bukti bahwa dirinya masih berarti—bukan sekadar pengisi waktu sore.',
            ],
            body_en: [
              'Even at 91, Popo believes she still works as Sample Room Manager at the day centre she attends on weekdays. For six years we have kept this familiar story warm: she creates paintings and craft samples to be sold in India, earns supermarket coupons, and helps support her family.',
              'Her skills feel recognised and valued. When we give her a painting book at home, she sees it as meaningful work to finish. It is her pride and reassurance that she is still useful—not merely passing the afternoon.',
            ],
          },
          {
            id: 'ch1-painting-family-story',
            title_id: '“Di rumah, bisa dapat tiga kali lebih banyak!”',
            title_en: '“At home, you can earn three times more!”',
            body_id: [
              'Lis dan kami sering menyemangati Popo dengan kalimat ini, dan kami menelepon Popo setiap hari untuk memberinya semangat. Kadang kami menambahkan cerita candaan: bos pusat kegiatan asal India dalam cerita kami punya enam istri yang semuanya menyukai lukisan Popo, sampai berebut mencetaknya di kaus putih untuk dijual di pegunungan India. Kenapa enam istri? Supaya kami punya bahan tertawa bersama.',
              'Ini adalah cerita penyemangat buatan keluarga, bukan pekerjaan atau upah sungguhan. Anda tidak harus menghafal atau menceritakan semuanya; cukup pahami maknanya dan jangan menambahkan janji uang atau tenggat waktu baru.',
            ],
            body_en: [
              'Lis and our family encourage Popo with this playful line, and we call her every day to cheer her on. Sometimes we add a lighthearted story: the imaginary Indian boss has six wives who all adore her artwork and compete to print it on white T-shirts for India’s mountain towns. Why six wives? It gives us something to laugh about together.',
              'This is our family’s warm encouragement story, not real pay or a job contract. You never have to recite the whole story—just understand why her work matters, and do not add invented money promises or deadlines.',
            ],
          },
          {
            id: 'ch1-painting-focus',
            title_id: 'Ia tekun sekali—kadang sulit diajak berhenti sejenak',
            title_en: 'Deeply committed—sometimes hard to pause',
            body_id: [
              'Di pusat kegiatan, Popo dikenal sangat tekun dan berbakat dalam seni. Di rumah pun ia bisa begitu tenggelam dalam mewarnai hingga ingin menyelesaikan semuanya tanpa jeda.',
              'Ketahui ini sejak awal agar Anda tidak kaget: mengajaknya istirahat sejenak tidak selalu mudah. Hargai kesungguhannya, tawarkan istirahat dengan halus, dan bekerja samalah bersama kami jika ia perlu jeda untuk makan, minum, atau beristirahat.',
            ],
            body_en: [
              'At the day centre, Popo is known for genuine commitment and artistic talent. At home she can become completely absorbed, wanting every page finished without taking a break.',
              'Know this upfront so it does not catch you off guard: getting her to pause is not always easy. Appreciate her effort, gently invite a rest, and team up with us whenever she needs a break for food, water or sleep.',
            ],
          },
        ],
      },
      {
        id: 'ch1-loves',
        icon: 'sun',
        title_id: 'Hal-hal kecil yang membuat hatinya gembira.',
        title_en: 'Small things that bring real joy.',
        cards: [
          {
            id: 'ch1-music-tv',
            title_id: 'Lagu kenangan di pagi hari, tontonan komedi di malam hari',
            title_en: 'Nostalgic songs in the morning, comedy in the evening',
            body_id: [
              'Popo menyukai musik lama dan komedi yang penuh kenangan. Lagu Kanton klasik—termasuk karya Adam Cheng (鄭少秋)—sering membangkitkan ingatan indah masa mudanya, dan kadang bisa membantu menenangkan hatinya saat sedang murung.',
              'Gunakan YouTube di TV internet untuk memutar lagu kesukaannya sejak pagi agar suasana hati Popo gembira, atau putar saat suasana hatinya kurang baik untuk menghiburnya. Lis dan keluarga akan mengajari Anda cara mencari daftar putar dan memutarnya lewat TV maupun ponsel.',
            ],
            body_en: [
              'Popo loves familiar music and comedy that stir warm nostalgia. Classic Cantonese songs—including Adam Cheng (鄭少秋)—bring back happy memories of her youth and can often help calm her mood.',
              'Use YouTube on the internet TV to play her favourites right in the morning to set a cheerful tone, or play them to lift her spirits on moody days. Lis and our family will show you how to find the playlists and play them using the TV and phone.',
            ],
          },
          {
            id: 'ch1-everyday-words',
            image: 'popo-reading',
            title_id: 'Koran, menu, papan toko—bahan obrolan yang hangat',
            title_en: 'Newspapers, menus and shop signs—easy conversation',
            body_id: [
              'Popo sering membaca huruf Tionghoa yang dikenalinya dengan suara keras tanpa diminta. Lis biasa mengambil koran di lobi; di rumah mereka juga mengobrol santai tentang berita dan acara TV.',
              'Saat jalan-jalan keluar, Lis suka menunjuk label harga, menu makanan, papan nama toko, atau iklan lalu bertanya artinya. Popo bangga bisa menjelaskan. Ikuti ketertarikannya dengan ramah—jangan menjadikannya seperti ujian.',
            ],
            body_en: [
              'Popo often reads Chinese characters she recognises aloud without being asked. Lis collects the newspaper from the lobby, and they chat casually about the news and TV at home.',
              'On outings, Lis points to price tags, menus, shop signs or adverts and asks what they mean. Popo loves explaining them. Follow her curiosity warmly—never turn it into a test.',
            ],
          },
          {
            id: 'ch1-breakfast-favourites',
            title_id: 'Sarapan yang akrab dan menenangkan',
            title_en: 'Familiar breakfasts she enjoys',
            body_id: [
              'Lis menyiapkan sarapan untuk mereka berdua. Popo sendiri yang mengajari Lis cara memasak bubur putih kesukaannya.',
            ],
            body_en: [
              'Lis makes breakfast for them both. Popo herself taught Lis how to cook her favourite plain rice congee.',
            ],
            bullets_id: [
              'Bubur putih lembut; pendamping susu asin Daliang disediakan keluarga dan Popo menambahkannya sendiri.',
              'Bubur daging ikan dengan irisan selada Tionghoa dan jahe.',
              'Telur rebus, jagung manis kukus, ubi kukus, atau rice rolls kukus termasuk pilihan akrabnya.',
            ],
            bullets_en: [
              'Soft plain rice congee; our family supplies the Daliang salted milk accompaniment, which Popo adds herself.',
              'Fish-meat congee with shredded Chinese lettuce and ginger.',
              'Boiled eggs, steamed sweet corn, steamed sweet potato and steamed rice rolls are among her familiar choices.',
            ],
          },
          {
            id: 'ch1-home-food',
            title_id: 'Masakan rumahan yang lembut—termasuk sentuhan Indonesia',
            title_en: 'Soft home cooking—including Indonesian touches',
            body_id: [
              'Popo menyukai masakan rumahan yang empuk, berkuah atau lembap, dan tidak pedas: selada Tionghoa dan sawi, ikan kukus, kari Jepang dengan kentang dan ayam/sayap ayam, tumis telur dan tomat, telur kukus lembut, serta tahu kukus. Ia juga menyukai beberapa masakan Indonesia tanpa cabai, termasuk tempe goreng dan jeli pandan buatan Lis.',
              'Anda tidak perlu langsung menguasai semua resep sekaligus. Lis akan menemani Anda belanja di pasar dan memasak bersama langkah demi langkah; tahu mengikuti batas keluarga sekali tiap dua minggu, dan dapur ini sama sekali tidak memakai babi atau kaldu babi.',
            ],
            body_en: [
              'Popo enjoys soft, moist, mild home cooking: Chinese lettuce and sawi greens, steamed fish, mild Japanese curry with potato and chicken or wings, stir-fried tomato and egg, silky steamed egg, and steamed tofu. She also enjoys some chilli-free Indonesian dishes, including fried tempeh and Lis’s pandan jelly.',
              'You do not have to master everything at once. Lis will show you the wet market and cook alongside you step by step; tofu follows our once-every-two-weeks family limit, and Popo’s meals use no pork or pork stock.',
            ],
          },
          {
            id: 'ch1-treats-outings',
            title_id: 'Lihat-lihat toko di mal, gerak ringan di taman, lalu es krim',
            title_en: 'Mall shop windows, light park exercise, then ice cream',
            body_id: [
              'Pada akhir pekan dan hari libur, sore hari—biasanya sekitar pukul 3–5—kami dan Lis mengajak Popo jalan santai: melihat-lihat toko di mal, bergerak ringan di taman dekat rumah, lalu menikmati es krim di McDonald’s. Jalan sore ini membantu Popo gembira, tetap aktif bergerak, dan lebih tenang saat istirahat malam.',
              'Berjalanlah dekat di sampingnya dan pastikan langkahnya mantap. Bawa handuk kecil, payung, tisu, air minum, dan kipas kecil; tambahkan jaket atau syal saat cuaca dingin. Keluarga mendukung pengaturan kegiatan akhir pekan, dan makan malam Minggu biasanya dinikmati bersama keluarga.',
            ],
            body_en: [
              'On weekends and holidays, afternoons—usually around 3–5 p.m.—are for a gentle outing: browsing shops in the mall, doing light movement at the nearby park, and enjoying an ice cream at McDonald’s. These outings keep Popo cheerful, gently mobile and more ready to rest at night.',
              'Walk close beside her and check that her steps are steady. Bring her small towel, umbrella, tissues, water and a handheld fan; add a jacket or scarf in cool weather. Family helps arrange weekend outings, and Sunday dinner is usually shared with family.',
            ],
          },
        ],
      },
      {
        id: 'ch1-getting-along',
        icon: 'chat',
        title_id: 'Dekat lewat obrolan, bukan ujian.',
        title_en: 'Connect through conversation, not a test.',
        cards: [
          {
            id: 'ch1-familiar-conversation',
            title_id: 'Beri petunjuk lembut, ikuti suasana hatinya',
            title_en: 'Offer a gentle cue, follow her mood',
            body_id: [
              'Lis berbicara dengan Popo dalam bahasa Kanton sehari-hari. Keluarga dan Lis senang mengobrol tentang anak-anak dan keluarga Popo, saudara, orang tua, kampung halaman di Guangzhou, rumah, toko keluarga, dan empat pembantu di masa mudanya.',
              'Jika suatu nama sempat terlupa, beri petunjuk kecil seperti marga atau satu huruf dalam namanya. Bila Popo tampak kesal atau enggan menjawab, ganti topik dengan santai—misalnya ke perannya di pusat kegiatan. Obrolan ini adalah kebersamaan yang hangat, bukan kuis atau kewajiban target harian.',
            ],
            body_en: [
              'Lis speaks ordinary daily Cantonese with Popo. Family and Lis enjoy chatting with her about her children and family, siblings, parents, hometown in Guangzhou, former home, family shop and the four helpers from her youth.',
              'If a name slips away, offer a gentle hint such as the surname or one character of the name. If she seems upset or tired of talking, switch smoothly to a happier subject—such as her role at the day centre. This is warm connection, never a quiz or a quota.',
            ],
          },
          {
            id: 'ch1-mood-support',
            title_id: 'Saat suasana hatinya sedang keruh, Anda tidak sendirian',
            title_en: 'When she is upset, you are not alone',
            body_id: [
              'Kami menelepon Popo setiap hari atas inisiatif kami sendiri. Saat Popo sedang kesal dan Lis membutuhkan dukungan, Lis mengirim pesan kepada kami; kami berdiskusi bersama untuk menenangkan Popo, lalu kami menelepon untuk ikut menindaklanjuti atau mendukung Lis bersama-sama.',
              'Lis sering mengalihkan perhatian Popo ke musik, kenangan masa muda, atau teman-temannya, atau memberi jeda sejenak dari percakapan langsung. Ketika hal kecil yang membuat Popo kesal mulai memudar dari ingatannya, Lis kembali mengajaknya bercanda dengan lembut. Kita menghadapinya bersama sebagai satu tim.',
            ],
            body_en: [
              'We call Popo proactively every day—not only when asked. Whenever Popo is upset and Lis wants backup, she messages us; we work out together how to calm Popo, and we call to follow through and support Lis jointly.',
              'Lis often redirects Popo toward familiar music, younger days or friends, or pauses direct conversation briefly. As the small upset fades from Popo’s memory, Lis resumes gentle joking with her. You will never have to carry difficult moods alone.',
            ],
          },
        ],
      },
      {
        id: 'ch1-people',
        icon: 'user',
        title_id: 'Keakraban tumbuh pelan-pelan.',
        title_en: 'Closeness grows gradually.',
        cards: [
          {
            id: 'ch1-building-trust',
            image: 'lis-with-popo',
            title_id: 'Mulai dari ngobrol santai dan candaan hangat',
            title_en: 'Begin with friendly chats and light jokes',
            body_id: [
              'Saat pertama kali mengenal Popo, Lis menyarankan untuk sering menyapa, mengobrol ringan, dan bercanda. Lis kadang merangkul atau menggandeng Popo bila keduanya merasa nyaman—namun senyum dan suara yang ramah sudah sangat berarti tanpa harus memaksakan sentuhan.',
              'Keluarga kami tinggal dekat dan tetap terhubung setiap hari. Saling mengenal memang butuh waktu; tidak ada tuntutan untuk langsung sempurna di minggu pertama.',
            ],
            body_en: [
              'When first getting to know Popo, Lis recommends chatting warmly and sharing light jokes. Lis sometimes puts an arm around her or holds her hand when both are comfortable—though a warm smile and gentle voice already mean a great deal without forcing physical touch.',
              'Our family lives nearby and stays involved every day. Building trust takes time; nobody expects everything to feel effortless in the first week.',
            ],
          },
          {
            id: 'ch1-lis-message',
            kind: 'quote',
            title_id: 'Pesan tulus dari Mbak Lis untuk Anda',
            title_en: 'A warm message from Lis to you',
            quote_id:
              'buat mbk pengganti saya semoga betah ya merawat popo.\ndan semoga mbknya juga baik dengan popo, sabar merawat popo.\nsebernarnya popo itu baik dan perhatian.',
            quote_en:
              'To the woman replacing me, I hope you will feel at home caring for Popo. I hope you will be kind to her and patient in caring for her. Really, Popo is kind and considerate.',
            author: 'Lis',
          },
        ],
      },
    ],
  },
  {
    id: 'ch2',
    number: 2,
    nav_id: '02 Demensia',
    nav_en: '02 Dementia',
    short_id: 'Memahami demensia',
    short_en: 'What dementia is doing',
    title_id: 'Apa yang berubah, dan apa yang tetap ada',
    title_en: 'What changes, and what remains',
    subtitle_id:
      'Demensia bukan sekadar pikun biasa dan bukan sifat buruk. Memahami cara kerja demensia membantu kita tetap sabar, tenang, dan menjaga harga diri Popo.',
    subtitle_en:
      'Dementia is more than ordinary forgetfulness and never bad character. Understanding what it does helps us stay patient, calm and protective of Popo’s dignity.',
    heroPhoto: 'popo-art-ch2',
    heroCaption_id: 'Ia tetap punya perasaan. Ia tetap ingin dihargai.',
    heroCaption_en: 'She still has feelings. She still wants to be valued.',
    heroSubcaption_id:
      'Karya dan perhatian kecil setiap hari membantu kita melihat sosok Popo seutuhnya, bukan hanya demensianya.',
    heroSubcaption_en:
      'Her artwork and shared daily moments help us see Popo as a whole person, not only her dementia.',
    sections: [
      {
        id: 'ch2-understanding',
        icon: 'note',
        title_id: 'Bukan hanya soal lupa.',
        title_en: 'More than forgetting.',
        cards: [
          {
            id: 'ch2-more-than-memory',
            title_id: 'Bukan disengaja, bukan pula watak keras',
            title_en: 'Not deliberate. Not bad character.',
            body_id: [
              'Demensia terjadi karena penyakit atau perubahan yang memengaruhi otak. Hal ini bisa mengubah daya ingat jangka pendek, cara berpikir, pemahaman percakapan, serta rasa waktu dan tempat.',
              'Demensia bukan sekadar bagian biasa dari menua. Bila Popo lupa sesuatu yang baru dikatakan, mengulang pertanyaan, atau tiba-tiba bingung, itu bukan karena ia sengaja mempersulit Anda atau tidak menghargai usaha Anda.',
            ],
            body_en: [
              'Dementia happens because disease or damage affects the brain. It can change recent memory, thinking, following conversations, and one’s sense of time and place.',
              'It is not an inevitable part of ageing. When Popo forgets something just said, repeats a question or feels confused, she is not deliberately making things hard for you or ignoring your care.',
            ],
          },
          {
            id: 'ch2-strengths',
            title_id: 'Masih banyak hal yang bisa ia kerjakan',
            title_en: 'Much of Popo’s ability remains',
            body_id: [
              'Popo masih bisa membaca huruf Tionghoa, melipat handuk kecil, mewarnai dengan tekun, dan mengurus perawatan dirinya sendiri. Kemampuannya memang bisa naik turun tergantung hari, rasa lelah, dan suasana hati.',
              'Berilah waktu tanpa tergesa dan bantu secukupnya saja. Bicaralah langsung kepada Popo dengan hormat sebagai orang dewasa dan orang tua—bukan membicarakannya seolah ia tidak mendengar.',
            ],
            body_en: [
              'Popo still reads Chinese characters, folds small towels, colours with deep focus and manages personal self-care. Her abilities naturally vary from day to day depending on energy and mood.',
              'Allow unhurried time and offer just enough help. Speak directly and respectfully to Popo as an adult and an elder—never talk about her as though she were not there.',
            ],
          },
        ],
      },
      {
        id: 'ch2-feelings',
        icon: 'heart',
        title_id: 'Perasaan dan harga dirinya tetap nyata.',
        title_en: 'Her feelings and dignity remain real.',
        cards: [
          {
            id: 'ch2-feeling-safe',
            title_id: 'Cerita bisa berubah, tetapi rasa khawatirnya terasa nyata',
            title_en: 'The story may shift, yet her worry feels real',
            body_id: [
              'Saat sedang cemas atau kesal, Popo kadang berkata anggota keluarga mengambil barangnya, baru saja tinggal di rumah ini lalu pergi, atau rumah ini akan dijual. Kami menelepon atas inisiatif kami setiap hari; bila Anda butuh bantuan, kirim pesan agar kita bisa menenangkannya bersama.',
              'Dengarkan rasa takut atau cemas di balik kata-katanya tanpa ikut membenarkan cerita itu sebagai fakta. Suara yang lembut dan penjelasan singkat jauh lebih menenangkan daripada berdebat atau memaksanya mengingat.',
            ],
            body_en: [
              'When anxious or upset, Popo may say someone took her belongings, stayed here and left when she returned, or that this home is being sold. We call proactively every day; whenever you need backup, message us so we can calm her together.',
              'Listen to the fear underneath her words without confirming the account as fact. A calm voice and brief reassurance help far more than arguing or pressing her to remember.',
            ],
          },
          {
            id: 'ch2-five-reminders',
            title_id: 'Lima pengingat lembut saat berbicara dengan Popo',
            title_en: 'Five gentle reminders when talking',
            body_id: [
              'Dalam budaya kita menghormati orang tua, nada suara yang halus dan sikap tenang sering lebih menyentuh daripada panjangnya kalimat. Gunakan satu hal dulu dalam kalimat pendek, lalu beri waktu Popo menjawab.',
            ],
            body_en: [
              'A warm tone and unhurried manner often reach Popo even more deeply than long explanations. Use short sentences, one idea at a time, and pause so she can reply.',
            ],
            rows: [
              {
                label_id: 'Sapa dengan hangat',
                label_en: 'Greet warmly',
                value_id: 'Tersenyumlah dan panggil “Popo”, meski ia sesaat lupa siapa nama Anda.',
                value_en: 'Smile and use her name, even if she momentarily does not recognise you.',
              },
              {
                label_id: 'Ucapkan terima kasih',
                label_en: 'Say thank you',
                value_id: 'Hargai hal kecil yang benar-benar ia kerjakan, seperti melipat handuk atau menggambar.',
                value_en: 'Appreciate real small contributions she makes, like folding towels or painting.',
              },
              {
                label_id: 'Sejajarkan pandangan',
                label_en: 'Let her see your face',
                value_id: 'Duduk atau berdiri di posisi yang nyaman agar ia melihat wajah Anda, tidak menunduk terlalu dekat.',
                value_en: 'Be at a comfortable eye level; avoid looming over her or standing too close.',
              },
              {
                label_id: 'Ikuti perasaannya dulu',
                label_en: 'Follow her feelings first',
                value_id: 'Jika ia bercerita seolah masih di masa lalu, dengarkan dulu tanpa perlu memperdebatkan tahun atau mengarang fakta baru.',
                value_en: 'If she speaks as though in the past, listen first—no need to argue about the year or invent new facts.',
              },
              {
                label_id: 'Jawab dengan tenang',
                label_en: 'Answer calmly',
                value_id: 'Pertanyaan yang sama terasa baru baginya. Jawab singkat tanpa sindiran, lalu minta dukungan keluarga bila mulai lelah.',
                value_en: 'A repeated question still feels brand-new to her. Answer gently without sarcasm, and ask family for support when tired.',
              },
            ],
          },
          {
            id: 'ch2-current-habits',
            title_id: 'Kenali Popo hari ini, bukan hanya catatan lama',
            title_en: 'Know Popo today, not only older notes',
            body_id: [
              'Setiap penyandang demensia berbeda dan kebiasaannya bisa berubah dari tahun ke tahun. Berikut gambaran kebiasaan Popo saat ini menurut pengalaman Lis:',
            ],
            body_en: [
              'Every person with dementia is unique and habits change over time. Here is what Lis observes in Popo today:',
            ],
            bullets_id: [
              'Ia masih sering rindu dan ingin kembali ke rumah lamanya.',
              'Sekarang ia jarang membicarakan almarhum suaminya.',
              'Menurut Lis, sesudah makan ia tidak meminta makanan tambahan lagi.',
            ],
            bullets_en: [
              'She still often misses and wants to return to her old home.',
              'She rarely mentions her late husband now.',
              'According to Lis, she does not ask for extra food after finishing a meal.',
            ],
          },
          {
            id: 'ch2-kindness',
            title_id: 'Cara kita memperlakukannya tetap terasa di hati',
            title_en: 'How we treat her stays with her heart',
            body_id: [
              'Popo mungkin lupa kata-kata yang baru ia dengar lima menit lalu, tetapi kehangatan, rasa aman, atau nada kesal tetap terasa oleh hatinya. Senyum dan sikap sabar tidak mengharuskan pelukan—sentuhan hanya jika Popo dan Anda sama-sama nyaman.',
              'Dan ingat: jika suatu hari Anda merasa kewalahan, jangan dipendam sendiri. Beri tahu keluarga sejak awal supaya kita bisa saling bantu.',
            ],
            body_en: [
              'Popo may forget words heard five minutes ago, yet warmth, safety or irritation linger in her feelings. A gentle voice and smile never require a hug—touch is only when both you and Popo are comfortable.',
              'And remember: if you ever feel overwhelmed, do not keep it inside. Tell our family early so we can support you.',
            ],
          },
        ],
      },
      {
        id: 'ch2-changes',
        icon: 'chat',
        title_id: 'Tetap terhubung, dan peka pada perubahan.',
        title_en: 'Stay connected, and notice sudden changes.',
        cards: [
          {
            id: 'ch2-family-hints',
            title_id: 'Temani ingatannya, bukan mengujinya',
            title_en: 'Support her memories, do not quiz her',
            body_id: [
              'Mengobrol tentang keluarga, memberi petunjuk marga atau satu huruf nama sudah enam tahun membantu Popo tetap akrab dengan kisahnya sendiri. Jika ia enggan atau sedang kesal, gantilah topik dengan lembut.',
              'Ini adalah kebiasaan baik yang dinikmati keluarga—bukan ujian hafalan, target wajib, atau jaminan menghentikan demensia.',
            ],
            body_en: [
              'Chatting about family stories and offering a surname or single-character cue has been a warm habit for six years. If she is upset or does not want to answer, switch subjects gently.',
              'This is our family’s positive shared habit—not a memory test, compulsory quota or guarantee against dementia.',
            ],
          },
          {
            id: 'ch2-sudden-change',
            kind: 'safety',
            title_id: 'Perubahan mendadak: jangan dianggap demensia biasa',
            title_en: 'Sudden change: do not assume it is ordinary dementia',
            body_id: [
              'Bila Popo tiba-tiba bingung dengan cara yang baru atau jauh lebih bingung dari biasanya, segera cari pertolongan medis darurat. Penyebabnya bisa infeksi, cedera, atau efek obat—jangan langsung menganggapnya hanya demensia.',
              'Untuk keadaan darurat di Hong Kong, telepon 999 terlebih dahulu lalu kabari keluarga tanpa menunda pertolongan. Tetap temani Popo dengan tenang sambil menunggu bantuan.',
            ],
            body_en: [
              'If Popo suddenly becomes confused in a new way or much more confused than usual, seek emergency medical help right away. Infection, injury or medicine effects can cause sudden changes—never dismiss them as ordinary dementia.',
              'In Hong Kong, call 999 first and notify family without delaying care. Stay calmly beside Popo while waiting for help.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch3',
    number: 3,
    nav_id: '03 Sehari',
    nav_en: '03 Her Day',
    short_id: 'Sehari bersama Popo',
    short_en: 'Making a good day',
    title_id: 'Menjalani hari yang nyaman bersama Popo',
    title_en: 'Making a good day with Popo',
    subtitle_id:
      'Enam momen akrab dari pagi hingga malam, lalu pilihan akhir pekan, kegiatan, makanan, dan kenyamanan rumah. Ini gambaran ritme hari Popo—bukan jadwal jam yang kaku.',
    subtitle_en:
      'Six familiar moments from morning to bedtime, followed by weekends, activities, food and home comfort. This is a picture of Popo’s rhythm—not a rigid clock timetable.',
    sections: [
      {
        id: 'ch3-morning',
        icon: 'sun',
        title_id: 'Pagi yang akrab',
        title_en: 'A familiar morning',
        day_flow: {
          moment_id: 'Momen 01 · Pagi',
          moment_en: 'Moment 01 · Morning',
          cue_id: 'Setelah bangun dan sarapan',
          cue_en: 'Waking up & breakfast',
        },
        cards: [
          {
            id: 'ch3-waking-bag-self-care',
            image: 'F01',
            title_id: 'Tasnya dulu, lalu sarapan berdua',
            title_en: 'Her bag first, then breakfast together',
            body_id: [
              'Saat bangun, Popo biasanya langsung mencari tasnya dan memeriksa isinya. Ia mencuci muka dan menyikat gigi sendiri, lalu sarapan bersama Lis.',
              'Lis menyiapkan sarapan untuk mereka berdua. Bubur putih adalah salah satu kesukaan Popo—Popo sendiri yang mengajari Lis cara memasaknya. Mulai saja dari makanan yang sudah akrab, tidak perlu repot memikirkan menu baru setiap pagi.',
            ],
            body_en: [
              'On waking, Popo usually looks for her bag first and checks its contents. She washes her face and brushes her teeth herself, then shares breakfast with Lis.',
              'Lis prepares breakfast for them both. Plain congee is one of Popo’s favourites—Popo herself taught Lis to make it. Starting with familiar food is best; there is no need for a brand-new menu every morning.',
            ],
          },
          {
            id: 'ch3-music-paper',
            image: 'morning-music-on-tv',
            secondaryImage: 'newspapers-in-lobby',
            title_id: 'Musik kenangan di TV dan koran dari lobi',
            title_en: 'Familiar TV music and the lobby newspaper',
            body_id: [
              'Lis memutar musik YouTube lewat TV—lagu Kanton klasik termasuk Adam Cheng (鄭少秋)—untuk memulai pagi dengan suasana gembira dan akrab. Lis dan keluarga akan menunjukkan daftar putar serta cara memutarnya.',
              'Lis juga mengambil koran pagi di lobi. Popo gemar membaca dan sering mengucapkan huruf Tionghoa yang dikenalinya dengan suara keras. Dengarkan dengan ramah bila ia ingin bercerita.',
            ],
            body_en: [
              'Lis plays YouTube music on the TV—classic Cantonese songs including Adam Cheng (鄭少秋)—to start the morning on a warm, happy note. Lis and our family will show you the playlists and TV setup.',
              'Lis also collects the morning newspaper in the lobby. Popo loves reading and often says Chinese characters aloud spontaneously. Listen warmly when she wants to share.',
            ],
            lis_quote: {
              author: 'Lis',
              portrait: 'lis-portrait',
              text_id: 'selsai sarapan popo membaca koran karena popo suka membaca.',
              text_en: 'After breakfast, Popo reads the newspaper because she likes reading.',
            },
          },
          {
            id: 'ch3-get-ready',
            title_id: 'Bantu bersiap tanpa mengambil alih',
            title_en: 'Help her get ready without taking over',
            body_id: [
              'Lis membantu Popo berganti pakaian sambil bercanda, mengoleskan losion, dan memakai sepatu sebelum berangkat ke pusat kegiatan. Beri waktu agar Popo tetap mengerjakan bagian yang masih ia bisa.',
              'Puji penampilannya dengan tulus bila Anda menyukainya. Saat berjalan, tetaplah dekat di samping Popo dan gunakan cara mendampingi yang ditunjukkan Lis serta keluarga—jangan mencoba teknik mengangkat sendiri.',
            ],
            body_en: [
              'Lis helps Popo dress while joking gently, apply lotion and put on shoes before the day centre. Allow time for the parts Popo can still manage herself.',
              'Offer a sincere compliment on her outfit. Walk close beside her and use the walking-support method demonstrated by Lis and our family—never improvise a lifting technique.',
            ],
          },
          {
            id: 'ch3-morning-care-plan',
            reader_label_id: 'Panduan untuk Anda',
            reader_label_en: 'For your reference',
            title_id: 'Obat pagi dan pemeriksaan tekanan darah',
            title_en: 'Morning medicines and blood pressure',
            body_id: [
              'Obat yang diresepkan dokter dan pengukuran tekanan darah merupakan bagian dari rutinitas pagi dan malam Popo. Lis dan keluarga akan menunjukkan panduan tertulis terbaru yang sudah disetujui dokter, beserta cara mengukur dan mencatatnya.',
              'Selalu ikuti waktu, cara pemberian, dan pencatatan dari panduan tertulis tersebut—bukan menebak urutan dari cerita bab ini. Jika ada instruksi yang belum jelas, tanyakan dulu sebelum menjalankannya.',
            ],
            body_en: [
              'Prescribed medicines and blood-pressure checks are part of Popo’s morning and evening care. Lis and our family will walk you through the current doctor-approved written plan, plus how to measure and log readings.',
              'Always follow that written plan for timing, giving medicines and recording—never guess order or dosing from this narrative. Ask before carrying out anything unclear.',
            ],
          },
        ],
      },
      {
        id: 'ch3-centre',
        icon: 'walk',
        title_id: 'Bersiap berangkat ke pusat kegiatan',
        title_en: 'Leaving for the day centre',
        day_flow: {
          moment_id: 'Momen 02 · Berangkat',
          moment_en: 'Moment 02 · Heading out',
          cue_id: 'Penjemputan hari kerja (Senin–Jumat)',
          cue_en: 'Weekday pickup (Mon–Fri)',
        },
        cards: [
          {
            id: 'ch3-centre-handover',
            image: 'popo-in-vehicle',
            title_id: 'Ikuti kabar penjemputan tanpa terburu-buru',
            title_en: 'Follow pickup updates without rushing',
            body_id: [
              'Pada hari kerja Senin–Jumat, Popo biasanya berangkat ke pusat kegiatan dan makan siang di sana. Bila ada perubahan hari atau jadwal kontrol dokter, keluarga akan mengabari terpisah.',
              'Pengemudi atau petugas biasanya menelepon sebelum penjemputan maupun kepulangan. Sisakan waktu cukup agar Popo tidak terburu-buru. Lis dan keluarga akan menunjukkan langsung rute, titik tunggu, dan cara mendampinginya.',
            ],
            body_en: [
              'On weekdays (Monday–Friday), Popo usually attends the day centre and has lunch there. Any schedule change or clinic visit is communicated separately.',
              'The driver or staff usually call before pickup or drop-off. Leave plenty of time so Popo never feels rushed. Lis and family will demonstrate the route, meeting spot and safe support.',
            ],
          },
          {
            id: 'ch3-wait-and-return',
            title_id: 'Menunggu dengan nyaman sesuai cuaca',
            title_en: 'Waiting comfortably',
            body_id: [
              'Lis bercerita mobil jemputan kadang datang sedikit lebih siang pada hari Senin, Rabu, dan Jumat. Terkadang Lis mengajak Popo turun sedikit lebih awal agar Popo tenang dan tidak kesal. Ini pengalaman praktis Lis—bukan aturan wajib untuk menunggu lama setiap hari.',
              'Sesuaikan waktu turun dengan kabar penjemputan, suhu cuaca hari itu, dan kenyamanan Popo.',
            ],
            body_en: [
              'Lis notes that the pickup van arrives a little later on Mondays, Wednesdays and Fridays. Sometimes she takes Popo downstairs a bit earlier so Popo stays calm. This is Lis’s experience—not a rule to wait a long time every day.',
              'Adjust gently to pickup updates, the weather and Popo’s comfort.',
            ],
          },
        ],
      },
      {
        id: 'ch3-daytime',
        icon: 'sparkles',
        title_id: 'Hari Popo di sana. Waktu Anda di rumah.',
        title_en: 'Her day there. Your time at home.',
        day_flow: {
          moment_id: 'Momen 03 · Siang',
          moment_en: 'Moment 03 · Daytime',
          cue_id: 'Popo berkarya · Anda beres-beres & istirahat',
          cue_en: 'Popo at the centre · Tasks & your rest',
        },
        cards: [
          {
            id: 'ch3-home-time',
            image: 'popo-colouring-focused',
            title_id: 'Popo berkegiatan; Anda mengurus rumah lalu beristirahat',
            title_en: 'Her day at the centre; housework then rest for you',
            body_labels_id: ['Popo di pusat kegiatan', 'Anda di rumah'],
            body_labels_en: ['Popo at the centre', 'You at home'],
            body_id: [
              'Di pusat kegiatan, Popo makan siang bersama teman-teman dan mengisi hari dengan melukis serta membuat kerajinan yang sangat ia banggakan.',
              'Setelah mengantar Popo, Lis pulang untuk membersihkan rumah dan menyiapkan kebutuhan harian. Setelah pekerjaan rumah yang disepakati selesai, gunakan sisa waktu saat Popo di pusat kegiatan untuk benar-benar beristirahat, menelepon keluarga, beribadah, atau keluar sebentar.',
            ],
            body_en: [
              'At the centre, Popo has lunch and spends meaningful time painting and making crafts she takes deep pride in.',
              'After seeing Popo off, Lis returns to tidy and clean the home. Once agreed household tasks are done, use the remaining daytime hours while Popo is away to truly rest, pray, call home or step out for a breather.',
            ],
            lis_quote: {
              author: 'Lis',
              portrait: 'lis-portrait',
              text_id: 'selesai saya mengatar popo saya pulang untuk bersih bersih rumah.',
              text_en: 'After taking Popo to the centre, I return home to clean the house.',
            },
          },
        ],
      },
      {
        id: 'ch3-homecoming',
        icon: 'home',
        title_id: 'Pulang ke rumah dan merasa nyaman',
        title_en: 'Coming home and feeling comfortable',
        day_flow: {
          moment_id: 'Momen 04 · Sore',
          moment_en: 'Moment 04 · Coming home',
          cue_id: 'Bersihkan barang, camilan, lalu mandi sendiri',
          cue_en: 'Outside items, snack, then self-bath',
        },
        cards: [
          {
            id: 'ch3-after-centre-snack',
            image: 'popo-enjoying-lis-pandan-jelly',
            title_id: 'Camilan sore hangat dulu',
            title_en: 'A familiar snack first',
            body_id: [
              'Sesampainya di rumah, Lis menyiapkan camilan sore dan air madu. Pilihan yang akrab bagi Popo adalah biskuit atau crackers tanpa kacang, jeli pandan buatan Lis, atau kuah manis dengan tangyuan isi wijen hitam, banyak jahe, dan gula kuning.',
              'Pilih satu yang cocok dengan selera hari itu—tidak perlu membuat semuanya. Air madu biasa menemani camilan hari kerja, sementara air putih tetap tersedia sepanjang hari.',
            ],
            body_en: [
              'Once home, Lis prepares an afternoon snack with honey water. Familiar favourites include nut-free crackers or biscuits, Lis’s pandan jelly, or sweet soup with black-sesame tangyuan, plenty of ginger and yellow sugar.',
              'Pick one option suited to the day—there is no need to make all of them. Honey water usually accompanies weekday snacks alongside plain drinking water.',
            ],
          },
          {
            id: 'ch3-return-belongings',
            reader_label_id: 'Panduan untuk Anda',
            reader_label_en: 'For your reference',
            title_id: 'Rapikan dan bersihkan barang dari luar',
            title_en: 'Attend to outside belongings',
            body_id: [
              'Saat Popo pulang, Lis membersihkan tas, payung, dan sepatunya sebelum menyiapkan camilan. Lis dan keluarga akan menunjukkan produk pembersih yang sesuai serta cara pemakaiannya.',
              'Selalu gunakan produk pembersih sesuai petunjuk pada labelnya—jangan mencampur cairan pembersih atau membuat takaran pengenceran sendiri.',
            ],
            body_en: [
              'When Popo returns, Lis cleans her bag, umbrella and shoes before preparing a snack. Lis and our family will show the current products and safe steps.',
              'Always follow the product label directions—do not invent chemical mixtures or dilutions from older notes.',
            ],
          },
          {
            id: 'ch3-bath-own-way',
            title_id: 'Mandi sendiri, Anda cukup berjaga di dekatnya',
            title_en: 'Bathing herself, with your calm presence nearby',
            body_id: [
              'Sesudah camilan, Popo biasanya mandi sendiri. Ia tidak suka dibantu mencuci tubuhnya. Tetaplah berada di dekat kamar mandi untuk mengecek ia baik-baik saja sambil menghormati privasinya, dan pastikan kipas ventilasi menyala. Memandikan tubuh Popo bukan bagian dari tugas rutin saat ini.',
              'Pastikan lantai kamar mandi kering setelah dipakai. Saat Popo keluar, Lis biasa menopangnya lewat tangan atau lengan dengan cara yang aman—yang akan dicontohkan langsung saat serah terima.',
              'Popo mencuci dengan tangan hanya pakaian yang dipakainya sebelum mandi, lalu menerima bantuan Lis untuk menjemurnya. Pakaian lain dan seprai yang terlupakan tetap dicuci Lis secara rapi tanpa membuat Popo merasa terganggu.',
            ],
            body_en: [
              'After her snack, Popo usually bathes on her own. She dislikes help washing her body. Stay nearby to check she is safe while keeping her privacy, and turn on the ventilation fan. Routinely washing her body is not part of the role.',
              'Check that the bathroom floor stays dry afterward. As she steps out, Lis gently steadies her by the hand or arm—we will demonstrate the safe support method during handover.',
              'Popo hand-washes only the clothes worn before her bath and welcomes help hanging them. Other clothes and bedding she forgets are washed discreetly by Lis without disturbing Popo’s sense of order.',
            ],
            lis_quote: {
              author: 'Lis',
              portrait: 'lis-portrait',
              text_id:
                'popo tidak suka di bantu saat mandi, selesai mandi saya membantu popo menjemur pakaiannya yang sudah di cuci.',
              text_en:
                'Popo does not like being helped while bathing. After her bath, I help hang the clothes she has washed.',
            },
          },
        ],
      },
      {
        id: 'ch3-evening',
        icon: 'heart',
        title_id: 'Makan malam dan tawa bersama',
        title_en: 'Dinner and warm company',
        day_flow: {
          moment_id: 'Momen 05 · Malam',
          moment_en: 'Moment 05 · Evening',
          cue_id: 'Makan malam hangat, komedi, & perawatan ringan',
          cue_en: 'Home dinner, comedy & gentle evening care',
        },
        cards: [
          {
            id: 'ch3-dinner-shape',
            image: 'F13',
            title_id: 'Makan malam rumahan yang lembut',
            title_en: 'A familiar, comforting dinner',
            body_id: [
              'Makan malam biasanya terdiri dari nasi, satu sayur lunak, satu lauk ikan atau ayam, dan sup. Popo biasanya makan sekitar setengah mangkuk nasi, kadang sedikit lebih banyak—ikuti seleranya tanpa paksaan.',
              'Ia menyukai makanan yang empuk dan tidak kering, dengan sedikit kuah atau saus untuk membasahi nasinya (misalnya saus dari ikan kukus atau kari Jepang kentang-ayam yang tidak pedas). Gunakan minyak, garam, dan gula secukupnya.',
            ],
            body_en: [
              'Dinner is usually rice, a soft vegetable dish, a fish or chicken dish, and soup. Popo typically eats around half a bowl of rice, sometimes a bit more—follow her appetite naturally.',
              'She likes soft, moist food with a little sauce or dish juices over her rice (such as sauce from steamed fish or mild Japanese potato-chicken curry). Keep oil, salt and sugar modest.',
            ],
          },
          {
            id: 'ch3-comedy-company',
            title_id: 'Menonton komedi bersama sesudah makan',
            title_en: 'Watching comedy together after dinner',
            body_id: [
              'Sesudah makan malam, Lis mengajak Popo menonton tayangan komedi di YouTube. Lis membereskan piring dan membuang sampah terlebih dahulu, lalu kembali duduk menonton bersama. Obat malam tetap mengikuti panduan tertulis dokter.',
              'Bantu mengganti saluran bila Popo lupa caranya. Acara kuliner, perjalanan, atau hewan kadang juga menyenangkan untuk dicoba—ikuti minatnya dan kecilkan suara jika tampak terlalu ramai.',
            ],
            body_en: [
              'After dinner, Lis puts on YouTube comedy for Popo, clears the dishes and rubbish, then joins her to watch together. Evening medicines follow the doctor’s written plan rather than story order.',
              'Help switch channels if Popo forgets how. Food, travel or animal shows can also be offered—follow her enjoyment and lower the volume if it feels overwhelming.',
            ],
          },
          {
            id: 'ch3-evening-care',
            reader_label_id: 'Panduan untuk Anda',
            reader_label_en: 'For your reference',
            title_id: 'Losion, gigi palsu, kaki, dan tekanan darah malam',
            title_en: 'Lotion, dentures, foot care and evening blood pressure',
            body_id: [
              'Lis membantu mengoleskan losion pada tangan, lengan, dan kaki Popo. Pengukuran serta pencatatan tekanan darah malam mengikuti panduan yang dijelaskan saat serah terima.',
              'Perawatan kaki, kulit, rambut, serta membantu melepas dan membersihkan gigi palsu akan diajarkan langsung oleh Lis dan keluarga memakai produk yang sesuai—tidak perlu menebak atau memakai bahan campuran sendiri.',
            ],
            body_en: [
              'Lis gently applies lotion to Popo’s arms, hands and legs. Evening blood-pressure checks and logging follow the handover guide.',
              'Foot, skin and hair care, as well as removing and cleaning dentures, will be demonstrated directly with suitable products—never improvise home remedies.',
            ],
          },
        ],
      },
      {
        id: 'ch3-night',
        icon: 'moon',
        title_id: 'Menjelang tidur dan ketenangan malam',
        title_en: 'Settling for the night',
        day_flow: {
          moment_id: 'Momen 06 · Malam & Tidur',
          moment_en: 'Moment 06 · Bedtime & night',
          cue_id: 'Kenyamanan Popo & hak tidur Anda',
          cue_en: 'Popo’s rest & your sleep protected',
        },
        cards: [
          {
            id: 'ch3-bedtime-comfort',
            title_id: 'Bantal, selimut, dan kamar yang teduh',
            title_en: 'Pillow, blanket and a calm room',
            body_id: [
              'Menjelang tidur, Lis menata bantal dan selimut Popo, menjaga suhu kamar tetap nyaman, dan meredakan suara yang bising.',
              'Lis kadang memeluk Popo sebelum tidur—itu adalah kedekatan pribadi mereka selama enam tahun, bukan kewajiban Anda. Cukup tunjukkan perhatian dengan cara yang membuat Anda dan Popo sama-sama nyaman.',
            ],
            body_en: [
              'At bedtime, Lis arranges Popo’s pillow and blanket, keeps the room at a comfortable temperature and lowers household noise.',
              'Lis sometimes hugs Popo goodnight—that is their own six-year bond, never a requirement for you. Show warmth in ways comfortable for both Popo and yourself.',
            ],
            lis_quote: {
              author: 'Lis',
              portrait: 'lis-portrait',
              text_id:
                'ketika popo mau tidur biasanya saya menyiapkan slimut dan bantal popo, saya juga sering memeluk popo ketika mau tidur.',
              text_en:
                'When Popo is going to sleep, I usually prepare her blanket and pillow. I also often hug her when she is going to sleep.',
            },
          },
          {
            id: 'ch3-night-pattern',
            title_id: 'Pola bangun malam Popo—dan hak tidur Anda tetap dijaga',
            title_en: 'Night waking—and protecting your sleep',
            body_id: [
              'Keluarga memperkirakan Popo bangun sekitar 2–3 kali semalam untuk ke toilet; kadang langsung tidur lagi, kadang agak sulit terlelap kembali. Biasanya ia tidak membangunkan Lis untuk meminta tolong.',
              'Anda TIDAK diminta berjaga semalaman, memasang alarm, atau bangun berulang kali untuk memeriksa. Jika kebetulan Anda sudah terbangun dan melihat Popo butuh bantuan ke toilet, tuntunlah dengan cara aman yang diajarkan.',
              'Keluarga dan Anda akan menyepakati penerangan jalur ke toilet dan letak alat bantu jalan. Bila suatu saat kebutuhan malam bertambah atau tidur Anda terganggu, segera bicarakan bersama keluarga.',
            ],
            body_en: [
              'Family estimates Popo wakes around 2–3 times a night for the toilet; sometimes she falls right back asleep, sometimes it takes longer. She does not usually wake Lis to ask for help.',
              'You are NOT expected to stay awake, set alarms or repeatedly wake up to check on her. If you happen to be awake and notice she needs help to the toilet, guide her using the safe method taught to you.',
              'We will agree on toilet-route lighting and walking-aid placement together. If nighttime needs grow or disturb your rest, tell us promptly so we can review support together.',
            ],
          },
          {
            id: 'ch3-sleep-plan-only',
            reader_label_id: 'Panduan untuk Anda',
            reader_label_en: 'For your reference',
            title_id: 'Jika Popo sulit tidur: ikuti panduan dokter',
            title_en: 'If sleep is difficult: follow the doctor’s plan',
            body_id: [
              'Popo memiliki panduan obat tidur dan penenang tertulis yang disetujui dokter. Lis dan keluarga akan menunjukkan salinan terbaru beserta kapan harus menghubungi keluarga.',
              'Bila Popo terus sulit tidur, hubungi keluarga dan ikuti panduan tertulis tersebut. Jangan pernah menambah, mengulang, atau mengubah dosis obat sendiri.',
            ],
            body_en: [
              'Popo has a doctor-approved written medicine plan for sleep and restlessness. Lis and our family will show you the current written instructions and when to call us.',
              'If Popo continues struggling to sleep, contact family and follow that written plan. Never add, repeat or alter medicine on your own.',
            ],
          },
        ],
      },
      {
        id: 'ch3-weekends',
        icon: 'walk',
        title_id: 'Hari tanpa pusat kegiatan (Akhir pekan & libur)',
        title_en: 'Days without the centre (Weekends & holidays)',
        cards: [
          {
            id: 'ch3-park-mall-treat',
            image: 'popo-ice-cream-outing-01',
            secondaryImage: 'popo-ice-cream',
            title_id: 'Santai di rumah, jalan ke taman dan mal, lalu es krim',
            title_en: 'Unhurried home time, mall & park, then ice cream',
            body_id: [
              'Pada hari tanpa pusat kegiatan, sarapan dan perawatan tetap berjalan akrab, ditambah makan siang di rumah. Tawarkan koran, TV, obrolan santai, mewarnai, kerajinan, atau jalan sebentar sesuai suasana hati dan tenaga Popo hari itu.',
              'Pada sore akhir pekan atau hari libur, Lis dan keluarga mengajak Popo melihat-lihat toko di mal, bergerak ringan di taman dekat rumah, lalu makan es krim di McDonald’s. Ini momen bersenang-senang agar Popo ceria dan tetap bugar—bukan target olahraga.',
              'Makan malam hari Minggu biasanya dinikmati bersama keluarga, dan keluarga ikut mendukung pengaturan kegiatan.',
            ],
            body_en: [
              'On days without the centre, morning habits continue with lunch prepared at home. Offer the newspaper, TV, friendly chats, painting, crafts or a short walk matched to Popo’s energy that day.',
              'On weekend or holiday afternoons, Lis and family take Popo to browse shops at the mall, move gently at the nearby park, then share McDonald’s ice cream. It is for joy and light movement—never a strict workout target.',
              'Sunday dinner is usually shared with family, and we help coordinate weekend outings.',
            ],
          },
          {
            id: 'ch3-outing-ready',
            title_id: 'Perlengkapan keluar—dan boleh pulang lebih cepat',
            title_en: 'Outing essentials—and always free to return early',
            body_id: [
              'Bawa payung, handuk kecil, tisu, air minum, dan kipas kecil bila cuaca hangat. Tambahkan jaket atau syal saat cuaca dingin meski Popo merasa cukup hangat. Berjalanlah dekat di sampingnya dengan cara mendampingi yang diajarkan.',
              'Sesuaikan lama jalan-jalan dengan cuaca dan rasa lelah Popo; sangat boleh istirahat atau pulang lebih awal. Siapa yang mendampingi akhir pekan selalu disepakati bersama—hari libur mingguan Anda tetap dihormati sepenuhnya.',
            ],
            body_en: [
              'Pack an umbrella, small sweat towel, tissues, drinking water and a small portable fan in warm weather, plus a jacket or scarf in cool weather even if Popo thinks she is warm enough. Walk close beside her using the demonstrated method.',
              'Adjust the outing to weather and fatigue—resting or heading home early is always fine. Weekend accompaniment is agreed mutually; your weekly rest day is always respected.',
            ],
          },
        ],
      },
      {
        id: 'ch3-together',
        icon: 'hand',
        title_id: 'Kegiatan kecil yang bermakna',
        title_en: 'Small activities that matter',
        cards: [
          {
            id: 'ch3-read-surroundings',
            title_id: 'Dengarkan yang ingin Popo bagikan',
            title_en: 'Listen to what Popo wants to share',
            body_id: [
              'Bicara pelan dengan kalimat pendek dan satu topik dulu, lalu beri jeda untuk Popo menjawab. Lis dan keluarga akan membantu Anda mengenal ungkapan bahasa Kanton sehari-hari yang akrab bagi Popo.',
              'Koran, TV, papan toko, label harga, maupun pengetahuan memasak Popo semuanya bisa jadi bahan obrolan hangat. Melipat handuk kecil, menggambar, atau memasak ringan bersama bisa dicoba selama ia berminat dan aman—tanpa target jumlah kegiatan.',
            ],
            body_en: [
              'Speak calmly in short sentences, one idea at a time, and give Popo space to reply. Lis and family will teach you everyday Cantonese phrases familiar to Popo.',
              'The newspaper, TV, shop signs, prices and Popo’s own cooking wisdom all spark warm conversation. Folding small towels, drawing or simple shared tasks are wonderful when she is interested and safe—with no quota to hit.',
            ],
          },
          {
            id: 'ch3-family-conversation',
            title_id: 'Cerita keluarga yang hangat, bukan kuis',
            title_en: 'Warm family stories, never a quiz',
            body_id: [
              'Lis dan keluarga sering mengobrol tentang anak-anak Popo, saudara, orang tua, Guangzhou, toko keluarga dulu, dan empat pembantu masa kecilnya. Jika Popo sempat lupa nama, beri petunjuk marga atau satu huruf Tionghoa saja; jika suasana hatinya kurang enak, pindah ke topik lain seperti karyanya di pusat kegiatan.',
              'Keluarga menelepon setiap hari atas inisiatif kami dan siap menindaklanjuti bersama kapan pun Anda membutuhkan dukungan.',
            ],
            body_en: [
              'Lis and our family enjoy chatting about Popo’s children, siblings, parents, Guangzhou, the old shop and the four helpers. If a name slips away, hint with the surname or one character; if her mood dips, move lightly to a pleasant subject such as her day-centre role.',
              'Family calls proactively every day and is ready to step in and support you jointly whenever needed.',
            ],
          },
        ],
      },
      {
        id: 'ch3-meals',
        icon: 'bowl',
        title_id: 'Makanan: mulai dari yang akrab',
        title_en: 'Food: start with what is familiar',
        intro_id:
          'Popo tidak menuntut hidangan rumit yang berbeda setiap hari. Di bawah ini adalah gambaran makanan asli yang biasa dibuat Lis—dan buku masak lengkap beserta ide menu 7 hari tersedia di Bab 6.',
        intro_en:
          'Popo does not need fancy new dishes every day. Below is a visual preview of real meals Lis prepares—and the full Shared Cookbook with 7-day meal ideas is ready in Chapter 6.',
        embedWidget: 'food-intro-strip',
        cards: [
          {
            id: 'ch3-meal-company-library',
            title_id: 'Makan bersama, belajar pelan-pelan bersama Lis',
            title_en: 'Share meals, learn step by step with Lis',
            body_id: [
              'Popo biasanya makan tiga kali sehari dan senang ditemani mengobrol saat makan. Namun pilihan makanan dan keyakinan Anda tetap dihormati—Anda tidak harus selalu makan lauk yang sama.',
              'Mulailah dari makanan kesukaan Popo terlebih dahulu: bubur putih, bubur ikan jahe-selada, ikan kukus, telur kukus lembut, sayur empuk, dan kari Jepang tidak pedas. Lis akan membimbing langsung saat belanja di pasar basah dan memasak bersama.',
            ],
            body_en: [
              'Popo usually has three meals a day and enjoys friendly company at the table. Your own food and religious choices are always respected—you never have to eat the exact same dish.',
              'Start with her favourites: plain congee, ginger-lettuce fish congee, steamed fish, silky steamed egg, soft greens and mild Japanese curry. Lis will guide you face to face at the wet market and in the kitchen.',
            ],
          },
          {
            id: 'ch3-food-boundaries',
            title_id: 'Aturan bahan makanan & minuman keluarga',
            title_en: 'Family ingredients & drinks to avoid',
            body_id: [
              'Ikuti aturan bahan keluarga ini saat belanja dan memasak untuk Popo:',
            ],
            body_en: [
              'Follow these clear family food boundaries whenever shopping or cooking for Popo:',
            ],
            bullets_id: [
              'TANPA babi atau kaldu babi, kacang (nuts), dan cabai/pedas. Cek label kemasan dan isian pangsit bersama Lis.',
              'TANPA teh atau cola/Coke—keduanya membuat Popo sulit tidur malam.',
              'Tahu kukus polos: maksimal sekali tiap dua minggu (batas ini khusus tahu, bukan telur).',
              'Tangyuan isi wijen hitam tetap boleh dan merupakan camilan favorit keluarga (wijen bukan kacang).',
            ],
            bullets_en: [
              'NO pork or pork stock, nuts, or chilli/spicy seasoning. Always check packaged labels and dumpling fillings with Lis.',
              'NO tea or Coke/cola—our family finds both make it hard for Popo to sleep.',
              'Plain steamed tofu: once every two weeks (this applies to tofu, not eggs).',
              'Black-sesame tangyuan remains a family-approved favourite snack (sesame is not a nut).',
            ],
          },
        ],
      },
      {
        id: 'ch3-comfort',
        icon: 'home',
        title_id: 'Air minum, cahaya, dan suhu yang nyaman',
        title_en: 'Water, light and comfortable temperature',
        cards: [
          {
            id: 'ch3-water-ready',
            title_id: 'Air putih selalu mudah dijangkau',
            title_en: 'Keep plain drinking water within easy reach',
            body_id: [
              'Isi ulang botol minum Popo dan letakkan di tempat yang mudah dilihatnya. Tawarkan air putih saat makan, setelah mandi, dan ketika jalan-jalan. Popo mudah merasa haus—tawarkan dengan lembut tanpa memaksanya menghabiskan takaran tertentu.',
            ],
            body_en: [
              'Refill Popo’s water bottle and place it within easy reach. Offer plain water at meals, after bathing and on outings. Popo often feels thirsty—offer gently without forcing a fixed volume unless her doctor advises otherwise.',
            ],
          },
          {
            id: 'ch3-heat-cool-clothes',
            title_id: 'Kenyamanan saat gerah maupun cuaca dingin',
            title_en: 'Comfort in hot or cool weather',
            body_id: [
              'Popo mudah berkeringat, memakai banyak tisu, dan sangat tidak nyaman dengan pakaian atau seprai yang lembap. Sediakan pakaian dan seprai yang kering serta bersih; tawarkan kipas atau AC bila gerah—dan tenangkan Popo bahwa keluarga mengurus biaya listriknya.',
              'Popo menyukai udara mengalir dan kadang membuka banyak jendela meski cuaca dingin. Tawarkan jaket bila perlu, dan Anda pun boleh berkata jujur dengan sopan jika Anda merasa kedinginan agar kenyamanan rumah terjaga untuk berdua.',
            ],
            body_en: [
              'Popo sweats easily, uses many tissues and strongly dislikes damp clothes or bedding. Keep dry items handy and offer a fan or AC—reassure her that our family covers electricity costs.',
              'She loves fresh airflow and may open windows even when cool. Offer her a jacket, and feel free to say politely if you feel cold too so both of you stay comfortable.',
            ],
          },
          {
            id: 'ch3-daylight-dusk',
            title_id: 'Nyalakan lampu sebelum rumah terasa temaram',
            title_en: 'Turn lights on before dusk settles in',
            body_id: [
              'Nikmati cahaya alami di siang hari bila memungkinkan. Ketika mendung, hujan, atau menjelang sore, nyalakan lampu sebelum ruangan menjadi gelap dan kurangi kebisingan; tawarkan musik akrab atau duduk bersama.',
              'Bila Popo tampak gelisah di sore hari, cek dulu kebutuhan dasar seperti lapar, haus, ingin ke toilet, lelah, atau gerah, lalu ceritakan pola baru kepada keluarga.',
            ],
            body_en: [
              'Enjoy comfortable natural daylight during the day. In gloomy weather, rain or toward dusk, turn lights on before rooms grow dim and keep noise calm; offer familiar music or quiet company.',
              'If Popo feels restless in the afternoon, check basic comfort first—hunger, thirst, toilet, tiredness or heat—and let family know about any new recurring pattern.',
            ],
          },
        ],
      },
    ],
  },
];
