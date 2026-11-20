import type {
  CookingVideoRef,
  FoodDish,
  SourceReference,
  WeeklyMealDay,
  WhatsAppTemplate,
} from './types';

export const FOOD_DISHES: FoodDish[] = [
  // ── BREAKFAST ──────────────────────────────────────────────────────────────
  {
    code: 'F01',
    category: 'breakfast',
    badgeType: 'photo_confirmed',
    photo: 'R01',
    secondaryPhoto: 'F01',
    caption_id:
      'Bubur putih dengan Daliang milk (olahan susu asin dari Shunde), yang keluarga sebut keju Cina. Popo menambahkannya sendiri dari stoples.',
    caption_en:
      'Plain rice congee with Daliang salted milk (Shunde milk slices), the hometown accompaniment described as Chinese cheese. Popo adds it herself from the jar.',
    secondaryCaption_id: 'Foto keluarga lainnya: bubur putih.',
    secondaryCaption_en: 'Another family photograph of plain rice congee.',
    title_id: 'Bubur putih dengan Daliang milk / irisan susu Shunde',
    title_en: 'Plain rice congee with Daliang salted milk / Shunde milk slices',
    notes_id: [
      'Popo sendiri yang mengajari Lis membuat bubur ini.',
      'Sambil menunggu air memasak mendidih, rendam beras dengan air panas; beri sedikit minyak dan garam sesuai kebiasaan keluarga.',
      'Masak bubur jangan terlalu kental. Sajikan dengan Daliang milk; Popo menambahkannya sendiri dari stoples yang disediakan keluarga.',
    ],
    notes_en: [
      'Popo herself taught Lis to make this congee.',
      'While the cooking water comes to a boil, soak the rice in hot water; add a little oil and salt to the usual family taste.',
      'Cook so it is not too thick. Serve with Daliang salted milk; Popo adds it herself from the jar supplied by the family.',
    ],
  },
  {
    code: 'F02',
    category: 'breakfast',
    badgeType: 'photo_confirmed',
    photo: 'F02',
    caption_id: 'Jagung manis kukus, telur rebus, susu, dan air madu.',
    caption_en: 'Steamed sweet corn, boiled egg, milk and honey water.',
    title_id: 'Jagung manis kukus, telur rebus, susu, dan air madu',
    title_en: 'Steamed sweet corn, boiled egg, milk and honey water',
    notes_id: [
      'Pilihan sarapan akrab: jagung manis kukus, telur rebus, susu, dan air madu.',
      'Kadang air madunya diberi jahe; belanja dan siapkan bersama Lis.',
    ],
    notes_en: [
      'Familiar breakfast combination: steamed sweet corn, boiled egg, milk and honey water.',
      'Honey water sometimes includes ginger; buy and prepare together with Lis.',
    ],
  },
  {
    code: 'F03',
    category: 'breakfast',
    badgeType: 'photo_confirmed',
    photo: 'F03',
    caption_id: 'Roti lapis telur orak-arik ditemani air madu jahe.',
    caption_en: 'Scrambled-egg sandwiches served with honey-ginger water.',
    title_id: 'Roti lapis telur orak-arik dan air madu jahe',
    title_en: 'Scrambled-egg sandwiches with honey-ginger water',
    notes_id: [
      'Roti lapis isi telur orak-arik lembut ditemani air madu jahe hangat.',
      'Lis bisa menunjukkan jenis roti, isian, dan porsi biasanya saat membuat bersama.',
    ],
    notes_en: [
      'Soft scrambled-egg sandwiches paired with warm honey-ginger water.',
      'Lis can show her usual bread, filling and portion while making it together.',
    ],
  },
  {
    code: 'F04',
    category: 'breakfast',
    badgeType: 'photo_confirmed',
    photo: 'R02',
    secondaryPhoto: 'F04',
    caption_id:
      'Sarapan: cheung fun (rice rolls) kukus dengan kecap asin, disajikan bersama air madu lemon.',
    caption_en:
      'Breakfast: steamed rice rolls with soy sauce, served with honey-lemon water.',
    secondaryCaption_id: 'Foto sarapan keluarga lainnya: cheung fun kukus.',
    secondaryCaption_en: 'Another family breakfast photograph: steamed rice rolls.',
    title_id: 'Cheung fun (rice rolls) kukus dengan kecap asin & air madu lemon',
    title_en: 'Steamed rice rolls (cheung fun) with soy sauce & honey-lemon water',
    notes_id: [
      'Cheung fun (rice rolls) dibeli segar di pasar basah, lalu dikukus dan diberi kecap asin ringan serta lada.',
      'Disajikan bersama air madu lemon atau air lemon madu jahe; Lis akan menunjukkan kios langganan di pasar.',
    ],
    notes_en: [
      'Fresh rice rolls bought at the wet market, then steamed with light soy sauce and pepper.',
      'Served with honey-lemon or lemon-honey-ginger water; Lis will show the usual wet-market stall.',
    ],
  },
  {
    code: 'F07',
    category: 'breakfast',
    badgeType: 'photo_confirmed',
    photo: 'F07',
    caption_id: 'Bubur ikan dengan irisan selada Cina dan jahe.',
    caption_en: 'Fish congee with shredded Chinese lettuce and ginger.',
    title_id: 'Bubur ikan dengan selada Cina dan jahe',
    title_en: 'Fish congee with Chinese lettuce and ginger',
    notes_id: [
      'Bubur nasi lembut dengan irisan selada Cina dan jahe; ikan cincang dari pasar dibentuk bola kecil atau potongan kecil.',
      'Biasanya diberi sedikit garam dan Popo suka menambahkan lada putih. Cocok untuk sarapan maupun makan siang akhir pekan.',
    ],
    notes_en: [
      'Soft rice congee with shredded Chinese lettuce and ginger; wet-market minced fish shaped into little balls or pieces.',
      'Lightly salted, and Popo likes adding white pepper. Great for breakfast or weekend lunch.',
    ],
  },
  {
    code: 'F08',
    category: 'breakfast',
    badgeType: 'photo_confirmed',
    photo: 'F08',
    caption_id: 'Ubi kukus dari pasar basah, kadang ditemani telur rebus, dan air madu jahe.',
    caption_en: 'Steamed wet-market sweet potato, sometimes with egg, and honey-ginger water.',
    title_id: 'Ubi kukus, kadang dengan telur, dan air madu jahe',
    title_en: 'Steamed sweet potato, sometimes with egg, and honey-ginger water',
    notes_id: [
      'Ubi dari pasar basah dikukus sampai empuk; kadang ditemani telur rebus.',
      'Disajikan dengan air madu jahe; Lis bisa menunjukkan jenis ubi yang biasa dibeli.',
    ],
    notes_en: [
      'Wet-market sweet potato steamed until soft, sometimes alongside a boiled egg.',
      'Served with honey-ginger water; Lis will show which sweet potatoes she buys.',
    ],
  },
  {
    code: 'F44',
    category: 'breakfast',
    badgeType: 'family_addition',
    title_id: 'Daliang milk / irisan susu asin Shunde ("keju Cina")',
    title_en: 'Daliang salted milk / Shunde milk slices ("Chinese cheese")',
    notes_id: [
      'Pelengkap kampung halaman yang Popo gemari bersama bubur putih; disediakan oleh putri Popo dalam stoples.',
      'Biarkan Popo mengambil dan menambahkannya sendiri ke bubur sesuai selera.',
    ],
    notes_en: [
      'Popo’s beloved hometown accompaniment for plain congee, supplied in a jar by Popo’s daughter.',
      'Let Popo add her preferred amount directly to her bowl of congee.',
    ],
  },
  {
    code: 'F46',
    category: 'breakfast',
    badgeType: 'family_addition',
    title_id: 'Egg rolls (tambahan keluarga)',
    title_en: 'Egg rolls (family addition)',
    notes_id: [
      'Egg rolls, hidangan tambahan dari keluarga—berbeda dari cheung fun (rice rolls) kukus.',
      'Jenis isian dan cara menyajikannya akan ditunjukkan Lis.',
    ],
    notes_en: [
      'Egg rolls added by the family—kept distinct from steamed rice rolls (cheung fun).',
      'Lis can show the exact type and serving style.',
    ],
  },
  {
    code: 'F45',
    category: 'breakfast',
    badgeType: 'brief_reference',
    title_id: 'Bubur ikan telur pitan & kulit jeruk kering (ide video)',
    title_en: 'Fish congee with century egg & aged citrus peel (video idea)',
    notes_id: [
      'Rujukan video sebagai ide tambahan; berbeda dari bubur ikan-selada-jahe harian buatan Lis.',
    ],
    notes_en: [
      'Video reference idea; kept separate from Lis’s regular fish-lettuce-ginger congee.',
    ],
    videoLinks: [
      { label_id: 'Video 1', label_en: 'Video 1', url: 'https://youtu.be/JiLRDjo9gHI' },
      { label_id: 'Video 2', label_en: 'Video 2', url: 'https://youtu.be/NtYzvLpG9U0' },
    ],
  },

  // ── LUNCHES & DINNERS ──────────────────────────────────────────────────────
  {
    code: 'F09',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'R04',
    secondaryPhoto: 'R05',
    caption_id:
      'Popo membungkus pangsit ayam ala Shanghai untuk makan siang akhir pekan—makanan kesukaan yang dulu ia buat untuk keluarga.',
    caption_en:
      'Popo wrapping home-made Shanghainese chicken wontons for weekend lunch—a favourite she used to make for the family.',
    secondaryCaption_id:
      'Hasil pangsit ala Shanghai yang dibuat bersama Popo—dipasangkan dengan foto saat ia membungkusnya.',
    secondaryCaption_en:
      'The finished home-made Shanghainese wontons prepared with Popo—paired with the photograph of her wrapping them.',
    title_id: 'Pangsit ayam ala Shanghai buatan rumah bersama Popo',
    title_en: 'Home-made Shanghai chicken wontons with Popo',
    notes_id: [
      'Makanan kesukaan akhir pekan sekaligus kegiatan akrab yang membuat Popo bangga—dulu ia biasa membuatnya untuk keluarga.',
      'Bahan isian: kulit pangsit Shanghai, daging ayam cincang, jahe cincang, daun bawang, lada putih, dan kecap asin (arak masak Tionghoa bersifat opsional).',
      'Pastikan seluruh isian dan kaldu 100% bebas babi.',
    ],
    notes_en: [
      'A beloved weekend lunch and meaningful shared activity—Popo used to make these for the whole family.',
      'Filling ingredients: Shanghai wonton wrappers, minced chicken, minced ginger, green onion, white pepper and soy sauce (Chinese cooking wine optional).',
      'Always keep both the filling and broth 100% pork-free.',
    ],
  },
  {
    code: 'F10',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'R06',
    caption_id: 'Makan siang Sabtu: mi pangsit dengan sayuran. Lada putih tersedia di meja.',
    caption_en:
      'Saturday lunch: wonton noodles with vegetables, with a bottle of white pepper available at the table.',
    title_id: 'Mi pangsit dengan sayuran',
    title_en: 'Wonton noodles with vegetables',
    notes_id: [
      'Pilihan makan siang Sabtu yang akrab: mi pangsit kuah dengan sayuran empuk dan irisan jahe.',
      'Sediakan lada putih di meja makan agar Popo bisa menaburkannya sendiri sesuai selera; pastikan kaldu bebas babi.',
    ],
    notes_en: [
      'A comforting Saturday lunch: wonton noodle soup with tender greens and sliced ginger.',
      'Keep white pepper available on the table for Popo; ensure the broth and wontons remain pork-free.',
    ],
  },
  {
    code: 'F11',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'DIN03',
    caption_id:
      'Makan malam: telur dadar ala Cina dengan bawang bombai, buncis iris, jahe dan bawang putih cincang; selada Cina; serta sup sawi pahit dengan banyak jahe, tanpa bumbu tambahan.',
    caption_en:
      'Dinner: Chinese egg pancake with onion, shredded green beans, minced ginger and garlic; Chinese lettuce; and mustard-greens soup with plenty of ginger and no added seasoning.',
    title_id: 'Telur dadar ala Cina—salah satu kesukaan Popo',
    title_en: 'Chinese egg pancake—one of Popo’s favourites',
    notes_id: [
      'Telur dadar lembut berisi bawang bombai, buncis iris halus, jahe cincang, dan bawang putih cincang—juga cocok sebagai variasi telur dadar bawang/tomat untuk sarapan akhir pekan.',
      'Pada makan malam, biasa dipadukan dengan selada Cina dan sup sawi pahit beraroma banyak jahe tanpa bumbu tambahan.',
    ],
    notes_en: [
      'Savoury Chinese egg pancake with onion, shredded green beans, minced ginger and garlic—also inspires simple onion or tomato omelettes for weekend breakfasts.',
      'For dinner, served alongside Chinese lettuce and mustard-greens soup made with plenty of ginger and no added seasoning.',
    ],
  },
  {
    code: 'F12',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'DIN04',
    caption_id: 'Makan malam: telur kukus ala Cina yang lembut, selada dan sup sayuran.',
    caption_en: 'Dinner: silky Chinese steamed egg with lettuce and vegetable soup.',
    title_id: 'Telur kukus Tionghoa yang halus dan lembut',
    title_en: 'Silky Chinese steamed egg',
    notes_id: [
      'Tekstur halus seperti puding, tidak berpori. Rujukan keluarga: perbandingan telur : air/kaldu sekitar 1 : 1,5–2 menurut volume.',
      'Saring adonan, tutup wadah tahan panas, dan kukus perlahan hingga matang lembut; sajikan dengan kecap asin ringan, daun bawang, selada, dan sup sayuran.',
    ],
    notes_en: [
      'Smooth, silky custard texture, never puffy. Family reference: egg to water/stock ratio about 1 : 1.5–2 by volume.',
      'Strain, cover a heatproof dish and steam gently until just set; serve with light soy sauce, spring onion, lettuce and vegetable soup.',
    ],
    videoLinks: [
      {
        label_id: 'Video telur kukus',
        label_en: 'Steamed egg video',
        url: 'https://youtu.be/wq8R6c5P_uw',
      },
    ],
  },
  {
    code: 'F13',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'R09',
    secondaryPhoto: 'F13',
    caption_id:
      'Makan malam: ikan kukus dengan banyak jahe, daun bawang dan kecap asin, disajikan dengan caisim dan jahe cincang. Sayur dapat dikukus atau ditumis.',
    caption_en:
      'Dinner: steamed fish with plenty of ginger, spring onion and soy sauce, served with choy sum and minced ginger; the vegetables may be steamed or pan-fried.',
    secondaryCaption_id:
      'Makan malam keluarga sebelumnya: ikan kukus dengan selada Cina, nasi dan sup.',
    secondaryCaption_en:
      'Earlier family dinner photograph: steamed fish with Chinese lettuce, rice and soup.',
    title_id: 'Ikan kukus dengan selada Cina atau caisim',
    title_en: 'Steamed fish with Chinese lettuce or choy sum',
    notes_id: [
      'Salah satu makan malam rumahan paling akrab bagi Popo—ikan dikukus bersama banyak jahe, daun bawang, dan kecap asin ringan.',
      'Popo suka menyendok sedikit kuah ikan ke atas nasinya. Selalu periksa duri ikan dengan teliti.',
    ],
    notes_en: [
      'One of Popo’s most familiar home dinners—fish steamed with plenty of ginger, spring onion and light soy sauce.',
      'Popo enjoys spooning a little fish-plate sauce over her rice. Always check carefully for fish bones.',
    ],
    videoLinks: [
      {
        label_id: 'Video rujukan ikan kukus',
        label_en: 'Steamed fish video reference',
        url: 'https://youtu.be/-CHNAHeE9Fk',
      },
    ],
  },
  {
    code: 'F15',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'DIN05',
    caption_id:
      'Makan malam: ayam kukus dengan kuncup bunga lili kering dan jamur kuping, selada dan sup sayuran.',
    caption_en:
      'Dinner: steamed chicken with dried lily buds and cloud ear fungus, lettuce and vegetable soup.',
    title_id: 'Ayam kukus dengan kuncup bunga lili kering dan jamur kuping',
    title_en: 'Steamed chicken with dried lily buds and cloud ear fungus',
    notes_id: [
      'Lauk ayam kukus empuk tanpa babi (menggantikan resep iga babi lama), dipadukan dengan kuncup lili kering dan jamur kuping yang sudah direndam lunak.',
      'Bisa juga divariasikan dengan ayam kukus jahe, daun bawang, atau jamur sesuai arahan keluarga; sajikan bersama selada dan sup sayuran.',
    ],
    notes_en: [
      'Tender pork-free steamed chicken (replacing older pork-rib drafts) with soaked dried lily buds and cloud ear fungus.',
      'Can also be varied with steamed chicken, ginger, spring onion or mushrooms per family preference; served with lettuce and vegetable soup.',
    ],
    videoLinks: [
      {
        label_id: 'Video ayam kukus',
        label_en: 'Steamed chicken video',
        url: 'https://youtu.be/4MTO50yQ55Y',
      },
    ],
  },
  {
    code: 'F25',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'DIN01',
    caption_id: 'Makan malam: nasi pot belut, selada Cina, serta sup kundur dan telur.',
    caption_en: 'Dinner: eel pot rice, Chinese lettuce and winter-melon and egg soup.',
    title_id: 'Nasi pot belut atau ayam',
    title_en: 'Eel or chicken pot rice',
    notes_id: [
      'Nasi pot hangat dengan belut atau ayam (tanpa babi), disajikan bersama selada Cina empuk serta sup kundur dan telur.',
      'Lis dapat menunjukkan panci atau penanak nasi serta takaran bumbu yang biasa digunakan.',
    ],
    notes_en: [
      'Comforting pot rice with eel or chicken (pork-free), paired with tender Chinese lettuce and winter-melon and egg soup.',
      'Lis can show the usual pot or rice cooker and familiar seasoning.',
    ],
  },
  {
    code: 'F26',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'R10',
    caption_id:
      'Makan malam: kari Jepang dari blok kari, dengan kentang, wortel merah, daun ketumbar cincang dan sayap atau daging ayam, disajikan bersama selada Cina dan nasi putih.',
    caption_en:
      'Dinner: Japanese curry made from a curry block with potato, red carrot, chopped coriander and chicken wings or chicken meat, served with Chinese lettuce and white rice.',
    title_id: 'Kari Jepang ayam dengan kentang dan wortel merah (favorit)',
    title_en: 'Japanese chicken curry with potato and red carrot (favourite)',
    notes_id: [
      'Salah satu masakan kesukaan Popo: dimasak dengan blok kari Jepang tidak pedas (tanpa cabai), kentang empuk, wortel merah, daun ketumbar cincang, dan sayap atau daging ayam.',
      'Popo senang kuah kari lembut yang melembapkan nasinya; sajikan bersama selada Cina dan nasi putih.',
    ],
    notes_en: [
      'A confirmed favourite: cooked from a mild Japanese curry block (zero chilli) with soft potato, red carrot, chopped coriander and chicken wings or chicken meat.',
      'Popo loves the moist mild curry sauce over white rice, paired with Chinese lettuce.',
    ],
  },
  {
    code: 'F51',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'DIN02',
    caption_id: 'Makan malam: tumis tomat dan telur dengan selada Cina.',
    caption_en: 'Dinner: pan-fried tomato and egg with Chinese lettuce.',
    title_id: 'Tumis tomat dan telur',
    title_en: 'Pan-fried tomato and egg',
    notes_id: [
      'Masakan rumahan sederhana yang lembut dan mudah dikunyah—tomat segar dimasak lembut bersama telur orak-arik dan disajikan dengan selada Cina.',
      'Jaga rasa tetap ringan, tidak pedas, dan sedikit berkuah agar mudah disantap dengan nasi.',
    ],
    notes_en: [
      'A gentle, easy-to-eat home classic—soft cooked tomatoes with scrambled egg, paired with Chinese lettuce.',
      'Keep seasoning light, chilli-free and slightly saucy so it mixes comfortably with rice.',
    ],
  },
  {
    code: 'F52',
    category: 'mains',
    badgeType: 'photo_confirmed',
    photo: 'R08',
    caption_id:
      'Makan malam: nasi pot ceker ayam dengan jahe dan saus tiram, tempe, caisim, serta sup kundur dengan daun ketumbar dan telur.',
    caption_en:
      'Dinner: Chinese chicken-feet pot rice with ginger and oyster sauce, tempeh, choy sum, and winter-melon soup with coriander and egg drop.',
    title_id: 'Nasi pot ceker ayam ala Cina',
    title_en: 'Chinese chicken-feet pot rice',
    notes_id: [
      'Nasi pot ceker ayam berbumbu jahe dan saus tiram, disajikan bersama tempe goreng/tumis ringan, caisim, serta sup kundur beraroma daun ketumbar dan telur.',
      'Memadukan kehangatan masakan rumahan Tionghoa dan lauk Indonesia ringan tanpa cabai.',
    ],
    notes_en: [
      'Chicken-feet pot rice flavoured with ginger and oyster sauce, accompanied by tempeh, choy sum, and winter-melon soup with coriander and egg drop.',
      'Combines familiar Chinese home flavours with mild, chilli-free Indonesian sides.',
    ],
  },
  {
    code: 'F23',
    category: 'mains',
    badgeType: 'reference_illustration',
    photo: 'REF01',
    caption_id:
      'Ilustrasi kantong tahu isi, bukan masakan pendamping. Isian di gambar belum dipastikan; versi Popo memakai ikan cincang, bukan daging sapi.',
    caption_en:
      'Reference illustration of stuffed tofu pockets, not the helper’s cooking. The pictured filling is not verified; Popo’s version uses minced fish, not beef.',
    title_id: 'Terong dan kantong tahu isi ikan cincang',
    title_en: 'Aubergine and tofu pockets stuffed with minced fish',
    notes_id: [
      'Kedua hidangan—terong isi maupun kantong tahu isi—untuk Popo selalu memakai isian ikan cincang (bukan daging sapi dan tanpa babi).',
      'Biasa disajikan bersama selada Cina beraroma jahe. Gambar di atas hanya ilustrasi rujukan, bukan foto masakan dapur rumah.',
    ],
    notes_en: [
      'For Popo, both stuffed aubergine and stuffed tofu pockets use minced fish (NOT beef, and pork-free).',
      'Often paired with Chinese lettuce and sliced ginger. The image above is a reference illustration only, not family cooking.',
    ],
  },
  {
    code: 'F24',
    category: 'mains',
    badgeType: 'reference_illustration',
    photo: 'REF02',
    caption_id:
      'Ilustrasi tahu kukus dari The Foodie Takes Flight yang dibagikan keluarga. Saus di gambar bukan resep keluarga yang sudah dikonfirmasi.',
    caption_en:
      'Steamed-tofu reference illustration supplied by the family, from The Foodie Takes Flight. The pictured sauce is not the confirmed family recipe.',
    title_id: 'Tahu kukus polos — sekali setiap dua minggu',
    title_en: 'Plain steamed tofu — once every two weeks',
    notes_id: [
      'Aturan frekuensi keluarga: tahu kukus polos hanya disajikan sekali setiap dua minggu (batas ini khusus untuk tahu kukus polos, bukan untuk telur).',
      'Saus pada ilustrasi rujukan hanya inspirasi opsional—selalu hilangkan cabai dan minyak cabai sepenuhnya.',
    ],
    notes_en: [
      'Family frequency limit: plain steamed tofu is served once every two weeks (this limit applies to plain steamed tofu, not to eggs).',
      'The sauce in the reference illustration is optional inspiration only—always omit chilli and chilli oil completely.',
    ],
  },
  {
    code: 'F47',
    category: 'mains',
    badgeType: 'family_addition',
    title_id: 'Nasi pot kari (tambahan keluarga)',
    title_en: 'Curry pot rice (family addition)',
    notes_id: [
      'Nasi pot kari—berbeda dari kari Jepang berkuah terpisah di samping nasi putih.',
      'Lis dapat mendemonstrasikan cara memasak dalam pot/penanak nasi tanpa cabai.',
    ],
    notes_en: [
      'Curry pot rice—kept distinct from Japanese curry served alongside white rice.',
      'Lis can demonstrate the usual mild, chilli-free pot preparation.',
    ],
  },
  {
    code: 'F48',
    category: 'mains',
    badgeType: 'family_addition',
    title_id: 'Sup kundur/beligo, tomat, dan telur (tambahan keluarga)',
    title_en: 'Winter melon, tomato and egg soup (family addition)',
    notes_id: [
      'Sup bening segar kundur/beligo, tomat, dan telur—tanpa daging babi cincang atau telur asin.',
    ],
    notes_en: [
      'Light winter melon, tomato and egg soup—replacing older pork or salted-egg soup drafts.',
    ],
  },
  {
    code: 'F49',
    category: 'mains',
    badgeType: 'family_addition',
    title_id: 'Ubi dimasak perlahan dengan daging paha ayam (tambahan keluarga)',
    title_en: 'Stewed sweet potato with chicken-thigh meat (family addition)',
    notes_id: [
      'Masakan lauk ubi empuk yang dimasak perlahan dengan daging paha ayam—berbeda dari ubi kukus sarapan.',
    ],
    notes_en: [
      'Sweet potato gently stewed with chicken-thigh meat—distinct from breakfast steamed sweet potato.',
    ],
  },
  {
    code: 'F14',
    category: 'mains',
    badgeType: 'brief_reference',
    title_id: 'Ikan wajan ringan & tumis sayur empuk',
    title_en: 'Pan-fried fish & mild pan-cooked vegetables',
    notes_id: [
      'Ikan dimasak wajan ringan (periksa duri dengan teliti) atau kentang lembut, dipadukan dengan buncis, bawang bombai, paprika, dan nasi.',
      'Bumbu ringan beraroma jahe, daun bawang, dan sedikit lada putih—tanpa cabai.',
    ],
    notes_en: [
      'Lightly pan-cooked fish (checked carefully for bones) or soft potato, served with pan-cooked green beans, onion, bell pepper and rice.',
      'Season mildly with ginger, spring onion and white pepper—no chilli.',
    ],
  },
  {
    code: 'F21',
    category: 'mains',
    badgeType: 'brief_reference',
    title_id: 'Sayuran lunak (selada Cina & caisim) serta variasi Indonesia tidak pedas',
    title_en: 'Soft greens (Chinese lettuce & choy sum) & mild Indonesian options',
    notes_id: [
      'Popo sangat suka sayuran lunak—terutama selada Cina dan caisim yang dikukus atau ditumis bersama jahe cincang.',
      'Masakan Indonesia tidak pedas seperti tempe atau nasi santan ringan (opsional) dapat menjadi selingan sesekali.',
    ],
    notes_en: [
      'Popo loves soft vegetables—especially Chinese lettuce and choy sum steamed or pan-fried with minced ginger.',
      'Mild, chilli-free Indonesian sides like tempeh or light coconut rice (optional) provide welcome variety.',
    ],
  },
  {
    code: 'F29',
    category: 'mains',
    badgeType: 'brief_reference',
    title_id: 'Sup sayuran Tionghoa, sup ikan & sup ikan tomat-kentang',
    title_en: 'Chinese vegetable soup, fish soup & tomato-potato fish soup',
    notes_id: [
      'Sup hangat hampir selalu menemani makan malam. Gunakan ikan atau kaldu tanpa babi (versi tulang babi telah dihapus) dan periksa duri ikan.',
    ],
    notes_en: [
      'Warm soup nearly always accompanies dinner. Use fish or pork-free stock (pork-bone versions are excluded) and check fish bones.',
    ],
    videoLinks: [
      { label_id: 'Sup sayur', label_en: 'Veg soup', url: 'https://youtu.be/fK079ID29NY' },
      { label_id: 'Sup ikan', label_en: 'Fish soup', url: 'https://youtu.be/F-8UenkUN5w' },
      { label_id: 'Sup ikan tomat', label_en: 'Tomato fish soup', url: 'https://youtu.be/6ZdhDb6i6HI' },
    ],
  },

  // ── SNACKS & DRINKS ────────────────────────────────────────────────────────
  {
    code: 'F41',
    category: 'snacks_drinks',
    badgeType: 'photo_confirmed',
    photo: 'R07',
    caption_id:
      'Buah naga, buah kesukaan Popo, sebagai camilan saat jeda singkat melukis pada Sabtu atau Minggu.',
    caption_en:
      'Dragon fruit, Popo’s favourite fruit treat, during a short painting break on Saturday or Sunday.',
    title_id: 'Buah naga — buah yang paling Popo suka',
    title_en: 'Dragon fruit — Popo’s favourite fruit of all',
    notes_id: [
      'Buah naga potong segar adalah buah nomor satu kesukaan Popo.',
      'Sangat cocok disajikan sebagai camilan segar saat jeda singkat melukis pada Sabtu atau Minggu sore.',
    ],
    notes_en: [
      'Fresh sliced dragon fruit is Popo’s single favourite fruit.',
      'Ideal as a refreshing snack during a short painting break on Saturday or Sunday afternoon.',
    ],
  },
  {
    code: 'F50',
    category: 'snacks_drinks',
    badgeType: 'photo_confirmed',
    photo: 'S01',
    caption_id:
      'Popo makan sup manis ubi jalar dan jamur salju dengan gula kuning Cina; camilan sepulang dari pusat kegiatan atau sore akhir pekan.',
    caption_en:
      'Popo eating sweet-potato and snow-fungus sweet soup, made with Chinese yellow sugar; an after-centre or weekend-afternoon treat.',
    title_id: 'Sup manis ubi jalar dan jamur salju',
    title_en: 'Sweet potato and snow fungus sweet soup',
    notes_id: [
      'Sup manis hangat berbahan ubi jalar empuk, jamur salju (white fungus), dan gula kuning Cina.',
      'Camilan sore yang menenangkan sepulang dari pusat kegiatan atau pada sore akhir pekan.',
    ],
    notes_en: [
      'Warm sweet soup simmered with soft sweet potato, snow fungus and Chinese yellow sugar.',
      'A soothing afternoon treat after the day centre or on weekend afternoons.',
    ],
  },
  {
    code: 'F05',
    category: 'snacks_drinks',
    badgeType: 'photo_confirmed',
    photo: 'popo-enjoying-lis-pandan-jelly',
    caption_id: 'Jeli pandan buatan Lis — salah satu camilan sore kesukaan Popo.',
    caption_en: 'Pandan jelly made by Lis — one of Popo’s favourite afternoon snacks.',
    title_id: 'Jeli pandan buatan Lis',
    title_en: 'Lis’s pandan jelly',
    notes_id: [
      'Jeli pandan buatan Lis—salah satu camilan sore kesukaan Popo.',
      'Lis akan menunjukkan bahan dan cara memasaknya langsung di dapur.',
    ],
    notes_en: [
      'Pandan jelly made by Lis—one of Popo’s favourite afternoon snacks.',
      'Lis will show her actual ingredients and setting method in the kitchen.',
    ],
  },
  {
    code: 'F06',
    category: 'snacks_drinks',
    badgeType: 'photo_confirmed',
    photo: 'popo-ice-cream-outing-01',
    secondaryPhoto: 'popo-ice-cream',
    caption_id: 'Es krim saat jalan-jalan — momen sederhana yang selalu menyenangkan hati.',
    caption_en: 'Ice cream on an outing — a simple treat that brightens her afternoon.',
    secondaryCaption_id: 'Momen es krim lain bersama Lis saat jalan santai.',
    secondaryCaption_en: 'Another ice-cream outing moment with Lis.',
    title_id: 'Es krim saat jalan-jalan',
    title_en: 'Ice cream on outings',
    notes_id: [
      'Camilan istimewa saat jalan-jalan sore di mal atau taman (sering di McDonald’s).',
      'Ikuti kebiasaan jalan sore bersama keluarga; tidak perlu resep buatan sendiri.',
    ],
    notes_en: [
      'A cheerful treat during mall or park outings (often at McDonald’s).',
      'Follow the usual outing arrangement; no homemade recipe needed.',
    ],
  },
  {
    code: 'F35',
    category: 'snacks_drinks',
    badgeType: 'family_addition',
    title_id: 'Kuah manis jahe & gula kuning dengan tangyuan wijen hitam',
    title_en: 'Ginger & yellow-sugar sweet soup with black-sesame tangyuan',
    notes_id: [
      'Bola-bola tangyuan isi wijen hitam dalam kuah manis jahe hangat (banyak jahe) dan gula kuning.',
      'Camilan sore akrab yang disetujui keluarga (wijen bukan kacang), biasanya ditemani air madu pada hari kerja.',
    ],
    notes_en: [
      'Black-sesame dumpling balls in sweet ginger-and-yellow-sugar soup with plenty of ginger.',
      'A family-approved favourite afternoon snack (sesame is not a nut), usually with honey water on weekdays.',
    ],
  },
  {
    code: 'F37',
    category: 'snacks_drinks',
    badgeType: 'brief_reference',
    title_id: 'Minuman akrab (air madu/jahe, susu, oat milk) & crackers tanpa kacang',
    title_en: 'Familiar drinks (honey/ginger water, milk, oat milk) & nut-free crackers',
    notes_id: [
      'Air madu, air madu jahe, air lemon madu jahe, susu, susu oat, atau buah-dengan-susu adalah minuman akrab Popo; crackers/biskuit tanpa kacang juga sering dinikmati.',
      'Hindari teh dan Coke/cola agar tidur malam Popo tetap nyenyak; air putih selalu tersedia sepanjang hari.',
    ],
    notes_en: [
      'Honey water, honey-ginger water, lemon-honey-ginger water, milk, oat milk or fruit-and-milk are familiar drinks; nut-free crackers/biscuits are also popular.',
      'Avoid tea and Coke/cola so sleep stays peaceful; keep plain drinking water accessible all day.',
    ],
  },
  {
    code: 'M01',
    category: 'snacks_drinks',
    badgeType: 'photo_confirmed',
    photo: 'popo-at-table',
    secondaryPhoto: 'popo-eating-meal',
    caption_id: 'Popo duduk santai di meja menikmati potongan buah atau camilan ringan.',
    caption_en: 'Popo seated comfortably at the table enjoying fresh fruit or a light snack.',
    secondaryCaption_id: 'Suasana santap bersama yang tenang di meja makan rumah.',
    secondaryCaption_en: 'Unhurried everyday mealtime company at the dining table.',
    title_id: 'Buah segar & momen bersantap bersama Popo',
    title_en: 'Fresh fruit & everyday mealtime company',
    notes_id: [
      'Selain buah naga kesukaannya, buah akrab lain termasuk apel, jeruk, dan pisang potong segar.',
      'Menemani Popo duduk santai tanpa terburu-buru membuat nafsu makan dan suasana hatinya jauh lebih baik.',
    ],
    notes_en: [
      'Alongside her favourite dragon fruit, familiar fruits include sliced apple, orange and banana.',
      'Unhurried company at the table keeps both her appetite and mood steady.',
    ],
  },
];

export const WEEKLY_MEAL_IDEAS: WeeklyMealDay[] = [
  {
    day_id: 'Senin',
    day_en: 'Monday',
    breakfast_id: 'Bubur putih; cheung fun (rice rolls) kukus; 1 buah.',
    breakfast_en: 'Plain rice congee; steamed rice rolls; 1 fruit.',
    lunch_id: 'Mi kuah ala Tionghoa dengan jahe (jika di rumah).',
    lunch_en: 'Chinese soup noodles with ginger (when at home).',
    snack_id: 'Crackers/biskuit tanpa kacang; air madu.',
    snack_en: 'Nut-free crackers/biscuits; honey water.',
    dinner_id:
      'Ikan kukus, sayur empuk, nasi & sup; ATAU nasi pot belut, selada Cina, serta sup kundur dan telur.',
    dinner_en:
      'Steamed fish, soft veg, rice & soup; OR eel pot rice, Chinese lettuce & winter-melon egg soup.',
  },
  {
    day_id: 'Selasa',
    day_en: 'Tuesday',
    breakfast_id: 'Susu oat; jagung manis kukus (1 potong).',
    breakfast_en: 'Oat milk; steamed sweet corn (1 piece).',
    lunch_id:
      'Ayam kukus jamur, daun bawang & jahe; ATAU ayam kukus kuncup lili kering & jamur kuping, selada, dan sup sayur.',
    lunch_en:
      'Steamed chicken with mushrooms, spring onion & ginger; OR steamed chicken with dried lily buds & cloud ear fungus, lettuce & veg soup.',
    snack_id: 'Jeli pandan; air madu.',
    snack_en: 'Pandan jelly; honey water.',
    dinner_id: 'Ikan wajan ringan; tumis sayur (buncis, bawang bombai, paprika); nasi.',
    dinner_en: 'Pan-fried fish; pan-cooked veg (green beans, onion, bell pepper); rice.',
  },
  {
    day_id: 'Rabu',
    day_en: 'Wednesday',
    breakfast_id: 'Bubur putih; ubi kukus.',
    breakfast_en: 'Plain rice congee; steamed sweet potato.',
    lunch_id: 'Sayuran dan sup telur; nasi (tanpa gado-gado saus kacang).',
    lunch_en: 'Vegetables and egg soup; rice (no peanut-sauce gado-gado).',
    snack_id: 'Kuah manis tangyuan wijen hitam dengan banyak jahe & gula kuning; air madu.',
    snack_en: 'Black-sesame dumpling ginger & yellow-sugar sweet soup; honey water.',
    dinner_id:
      'Ikan kukus; telur kukus lembut dengan kecap asin & daun bawang; selada; sup sayur; nasi.',
    dinner_en:
      'Steamed fish; silky steamed egg with soy sauce & spring onion; lettuce; vegetable soup; rice.',
  },
  {
    day_id: 'Kamis',
    day_en: 'Thursday',
    breakfast_id: '1 gelas susu; telur rebus.',
    breakfast_en: '1 glass of milk; boiled egg.',
    lunch_id: 'Pangsit ayam (wonton); sup sayur dengan irisan jahe.',
    lunch_en: 'Chicken wontons; vegetable soup with sliced ginger.',
    snack_id: 'Crackers/biskuit tanpa kacang; air madu.',
    snack_en: 'Nut-free crackers/biscuits; honey water.',
    dinner_id:
      'Telur kukus lembut; sup ikan tomat-kentang (tahu kukus polos hanya sekali per 2 minggu; batas ini bukan untuk telur).',
    dinner_en:
      'Silky steamed egg; tomato-potato fish soup (plain steamed tofu once every two weeks; frequency limit is not for eggs).',
  },
  {
    day_id: 'Jumat',
    day_en: 'Friday',
    breakfast_id: 'Bubur ikan dengan irisan jahe & selada Cina; telur rebus; 1 buah.',
    breakfast_en: 'Fish congee with ginger & Chinese lettuce; boiled egg; 1 fruit.',
    lunch_id: 'Terong dan kantong tahu isi ikan cincang (bukan sapi); selada Cina dengan jahe.',
    lunch_en: 'Aubergine & tofu pockets both stuffed with minced fish (not beef); Chinese lettuce with ginger.',
    snack_id: 'Jeli pandan atau kuah manis tangyuan wijen hitam; air madu.',
    snack_en: 'Pandan jelly or black-sesame dumpling sweet soup; honey water.',
    dinner_id:
      'Kari Jepang blok tidak pedas (kentang, wortel merah, daun ketumbar cincang, sayap/daging ayam); selada Cina; nasi putih.',
    dinner_en:
      'Mild no-chilli Japanese curry block (potato, red carrot, chopped coriander, chicken wings/meat); Chinese lettuce; white rice.',
  },
  {
    day_id: 'Sabtu',
    day_en: 'Saturday',
    breakfast_id: 'Bubur putih; 1 telur rebus; 1 buah.',
    breakfast_en: 'Plain rice congee; 1 boiled egg; 1 fruit.',
    lunch_id:
      'Mi pangsit dengan sayuran (lada putih tersedia di meja; pilihan lain: nasi santan ringan ala Indonesia).',
    lunch_en:
      'Wonton noodles with vegetables (white pepper at the table; earlier optional idea: Indonesian coconut rice).',
    snack_id:
      'Buah naga saat jeda melukis, ATAU sup manis ubi jalar & jamur salju gula kuning Cina (atau crackers/jeli/tangyuan wijen).',
    snack_en:
      'Dragon fruit during painting break, OR sweet-potato & snow-fungus Chinese yellow-sugar sweet soup (or crackers/jelly/sesame tangyuan).',
    dinner_id:
      'Ayam kukus dengan kuncup bunga lili kering & jamur kuping, selada, dan sup sayur (atau ayam kukus jahe/jamur).',
    dinner_en:
      'Steamed chicken with dried lily buds & cloud ear fungus, lettuce & vegetable soup (or chicken with ginger/mushrooms).',
  },
  {
    day_id: 'Minggu',
    day_en: 'Sunday',
    breakfast_id: 'Telur dadar dengan irisan bawang bombai atau tomat.',
    breakfast_en: 'Pan-fried omelette with sliced onion or tomato.',
    lunch_id:
      'Pangsit ayam ala Shanghai buatan rumah bersama Popo (atau ikan kukus, sayur empuk & sup).',
    lunch_en:
      'Home-made Shanghai chicken wontons prepared with Popo (or steamed fish, soft veg & soup).',
    snack_id:
      'Buah naga saat jeda melukis, ATAU sup manis ubi jalar & jamur salju (atau es krim saat jalan sore).',
    snack_en:
      'Dragon fruit during painting break, OR sweet-potato & snow-fungus sweet soup (or ice cream on outings).',
    dinner_id:
      'Nasi pot ceker ayam dengan jahe & saus tiram, tempe, caisim, serta sup kundur ketumbar telur (atau masakan Indonesia/Tionghoa ringan).',
    dinner_en:
      'Chicken-feet pot rice with ginger & oyster sauce, tempeh, choy sum & winter-melon coriander egg-drop soup (or mild Indonesian/Chinese dishes).',
  },
];

export const COOKING_VIDEOS: CookingVideoRef[] = [
  {
    number: 1,
    title_id: 'Bubur ikan, telur pitan, dan kulit jeruk kering',
    title_en: 'Fish congee with century egg and aged citrus peel',
    urls: ['https://youtu.be/JiLRDjo9gHI', 'https://youtu.be/NtYzvLpG9U0'],
  },
  {
    number: 2,
    title_id: 'Telur kukus Tionghoa yang lembut',
    title_en: 'Silky Chinese steamed egg',
    urls: ['https://youtu.be/wq8R6c5P_uw'],
  },
  {
    number: 3,
    title_id: 'Sup sayuran Tionghoa',
    title_en: 'Chinese vegetable soup',
    urls: ['https://youtu.be/fK079ID29NY'],
  },
  {
    number: 4,
    title_id: 'Ayam kukus pasta udang, bawang, dan kantong tahu',
    title_en: 'Shrimp-paste chicken, shallot and bean-curd pockets',
    urls: ['https://youtu.be/1bYbWtrHTzs'],
  },
  {
    number: 5,
    title_id: 'Sup ikan',
    title_en: 'Fish soup',
    urls: ['https://youtu.be/F-8UenkUN5w'],
  },
  {
    number: 6,
    title_id: 'Sayap ayam isi sayuran dimasak di wajan',
    title_en: 'Pan-cooked vegetable-stuffed chicken wings',
    urls: ['https://youtu.be/lI2KuvREldc'],
  },
  {
    number: 7,
    title_id: 'Ayam kukus dengan jamur dan sayuran',
    title_en: 'Steamed chicken with mushrooms and vegetables',
    urls: ['https://youtu.be/4MTO50yQ55Y'],
  },
  {
    number: 8,
    title_id: 'Sup ikan merah, tomat, dan kentang',
    title_en: 'Red fish, tomato and potato soup',
    urls: ['https://youtu.be/6ZdhDb6i6HI'],
  },
  {
    number: 9,
    title_id: 'Ikan wu-tou kukus dengan lemon',
    title_en: 'Steamed wu-tou fish with lemon',
    urls: ['https://youtu.be/-CHNAHeE9Fk'],
  },
  {
    number: 10,
    title_id: 'Tumis daging sapi atau ayam dengan nanas',
    title_en: 'Pan-cooked beef or chicken with pineapple',
    urls: ['https://youtu.be/XMeeg_pQXm4'],
  },
];

export const WHATSAPP_TEMPLATES: WhatsAppTemplate[] = [
  {
    id: 'wa-homecoming',
    title_id: 'Kabar singkat saat diperlukan',
    title_en: 'A brief update when useful',
    context_id: 'Saat Popo pulang atau ada pertanyaan ringan',
    context_en: 'When Popo is home or you have a quick question',
    message_id:
      'Halo, Popo sudah pulang dari pusat kegiatan. Hari ini [kabar singkat]. Saya ingin bertanya tentang: [pertanyaan].',
    message_en:
      'Hello, Popo is home from the day centre. Today [brief update]. I would like to ask about: [question].',
  },
  {
    id: 'wa-bp',
    title_id: 'Mengirim hasil tekanan darah',
    title_en: 'Sending blood-pressure readings',
    context_id: 'Salin kedua angka persis sesuai layar alat tensi',
    context_en: 'Copy both numbers accurately—no diagnosis needed',
    message_id:
      'Tanggal/jam: [ ]. Tekanan darah: [angka atas]/[angka bawah] mmHg. Pengukuran kedua: [ ]/[ ] mmHg. Kondisi Popo: [ ]. Diukur [sebelum/sesudah makan atau obat].',
    message_en:
      'Date/time: [ ]. Blood pressure: [top]/[bottom] mmHg. Second reading: [ ]/[ ] mmHg. Popo feels [ ]. Taken [before/after meal or medicine].',
  },
  {
    id: 'wa-change',
    title_id: 'Melaporkan perubahan baru (non-darurat)',
    title_en: 'Reporting a new non-emergency change',
    context_id: 'Untuk darurat atau sesak napas, langsung telepon 999',
    context_en: 'For emergencies or breathing trouble, call 999 directly',
    message_id:
      'Sejak pukul [jam], Popo tampak [perubahan yang terlihat]. Biasanya Popo [keadaan biasanya]. Saya sudah [langkah aman yang dilakukan]. Mohon telepon saya untuk langkah selanjutnya.',
    message_en:
      'Since [time], Popo has [observed change]. Normally she [usual state]. I have [safe step taken]. Please call me about the next step.',
  },
  {
    id: 'wa-supplies',
    title_id: 'Perlengkapan menipis atau uang belanja',
    title_en: 'Supplies running low or shopping funds',
    context_id: 'Kirim sebelum tisu, sabun, atau uang belanja habis',
    context_en: 'Send early before essentials or grocery funds run out',
    message_id:
      'Stok [barang] mulai menipis. Kami perlu [daftar barang]. Perkiraan biaya [HK$ ]. Sisa uang belanja [HK$ / belum dihitung]. Mohon konfirmasi pembelian atau pengisian dana.',
    message_en:
      '[Item] is running low. We need [list]. Estimated cost [HK$ ]. Remaining shopping money [HK$ / not yet counted]. Please confirm purchase or top-up.',
  },
  {
    id: 'wa-help-early',
    title_id: 'Meminta dukungan lebih awal untuk Anda',
    title_en: 'Asking for help early for yourself',
    context_id: 'Jangan sungkan saat lelah, kurang sehat, atau butuh bantuan',
    context_en: 'Speak up anytime you feel unwell, exhausted or stuck',
    message_id:
      'Saya sedang [kurang sehat/sangat lelah/kesulitan dengan tugas ini]. Hari ini saya butuh bantuan untuk [ ]. Bisa kita atur siapa yang bisa membantu dan kapan?',
    message_en:
      'I am [unwell/very tired/having trouble with this task]. Today I need help with [ ]. Could we arrange who can help and when?',
  },
];

export const GUIDE_SOURCES: SourceReference[] = [
  { org: 'WHO', title: 'Dementia fact sheet' },
  { org: 'NHS', title: 'Sudden confusion, Falls, Stroke symptoms, Coping with dementia behaviour changes & Medicines tips' },
  { org: 'Alzheimer’s Society', title: 'Understanding and supporting a person with dementia & Aggressive behaviour' },
  { org: 'Dementia UK & Dementia Australia', title: 'Meaningful activities & Talking to someone with dementia' },
  { org: 'American Heart Association', title: 'Home Blood Pressure Monitoring' },
  { org: 'Hong Kong Fire Services Department', title: 'Fire Escape & Calling 999 for Fire and Ambulance' },
  { org: 'Hong Kong Labour Department', title: 'Practical Guide for Employment of Foreign Domestic Helpers & Rest Days/Holidays' },
];
