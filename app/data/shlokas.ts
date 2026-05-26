export interface ShlokaSection {
  id: string;
  titleSanskrit: string;
  titleHindi: string;
  verses: string[];
  translation?: string;
}

export const SHLOKA_SECTIONS: ShlokaSection[] = [
  {
    id: 'saraswati-vandana',
    titleSanskrit: 'सरस्वती-वन्दना',
    titleHindi: 'Saraswati Vandana',
    verses: [
      'हे हंसवाहिनी ज्ञानदायिनी\nअम्ब विमल मति दे। अम्ब विमल मति दे॥\nजग सिरमौर बनायें भारत,\nवह बल विक्रम दे। अम्ब विमल मति दे।',
      'साहस शील हृदय में भर दे,\nजीवन त्याग तपोमय कर दे,\nसंयम सत्य स्नेह का घर दे,\nस्वाभिमान भर दे॥ १॥\nहे हंसवाहिनी ज्ञानदायिनी\nअम्ब विमल मति दे। अम्ब विमल मति दे॥',
      'लव, कुश, ध्रुव, प्रह्लाद बनें हम,\nमानवता का त्रास हरें हम,\nसीता, सावित्री, दुर्गा माँ,\nफिर घर-घर भर दे॥ २॥\nहे हंसवाहिनी ज्ञानदायिनी\nअम्ब विमल मति दे। अम्ब विमल मति दे॥',
    ],
    translation: 'O Swan-rider, giver of knowledge — bestow upon us a pure and noble intellect, O Mother.',
  },
  {
    id: 'gayatri-mantra',
    titleSanskrit: 'गायत्री मंत्र',
    titleHindi: 'Gayatri Mantra',
    verses: [
      'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो\nदेवस्य धीमहि धियो यो नः प्रचोदयात्।',
    ],
    translation:
      'We meditate on the glorious splendour of the Vivifying Sun; may He illuminate our intellects.',
  },
  {
    id: 'shanti-path',
    titleSanskrit: 'शान्ति-पाठ',
    titleHindi: 'Shanti Path',
    verses: [
      'ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः\nशान्तिरोषधयः शान्ति वनस्पतयः शान्तिर्विश्वे देवाः शान्तिर्ब्रह्म शान्तिः\nसर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि॥\nॐ शान्तिः! शान्तिः!! शान्तिः!!!',
    ],
    translation:
      'May there be peace in the heavens, peace in the atmosphere, peace on earth. May the waters be peaceful, may the plants be peaceful. May all the divine forces be peaceful. May all be at peace — may that peace come to me.',
  },
  {
    id: 'swastivachanam',
    titleSanskrit: 'स्वस्तिवाचनम्',
    titleHindi: 'Swastivachanam',
    verses: [
      'ॐ गणानां त्वा गणपतिꣳहवामहे प्रियाणां त्वा\nप्रियपतिꣳहवामहे निधीनां त्वा निधिपतिꣳहवामहे\nव्यसो मम। आहमजानि गर्भधमात्वमजासि गर्भधम् ॥१॥',
      'ॐ स्वस्ति नऽइन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः।\nस्वस्तिनस्ताक्ष्योऽरिष्टनेमिः स्वस्तिनो बृहस्पतिर्दधातु ॥२॥',
      'ॐ पयः पृथिव्यां पयऽओषधीषु पयोदिव्यन्तरिक्षे पयोधाः।\nपयस्वतीः प्रदिशः सन्तु मह्यम् ॥३॥',
      'ॐ विष्णोर्राटमसि विष्णोः शनपेस्थो विष्णोः स्यूरसि\nविष्णोधृुवोऽसि वैष्णवमसि विष्णवे त्वा ॥४॥',
    ],
    translation:
      'Auspicious prayers invoking Ganesha, Indra, Pusha, and Vishnu — seeking protection, abundance, and well-being for all.',
  },
  {
    id: 'raksha-vidhanam',
    titleSanskrit: 'रक्षाविधानम्',
    titleHindi: 'Raksha Vidhanam',
    verses: [
      'सर्वमंगलमांगल्ये शिवे सर्वार्थसाधके।\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥',
      'शुक्लाम्बरधरं देवं शिशिवर्णं चतुर्भुजम्।\nप्रसन्नवदनं ध्यायेत्सर्वविघ्नोपशान्तये॥',
      'सर्वदा सर्वकार्येषु नास्ति तेषाममंगलम्।\nयेषां हृदिस्थो भगवान् मंगलायतनो हरिः॥',
      'विनायकं गुरुं भानुं ब्रह्मविष्णुमहेश्वरान्।\nसरस्वतीं प्रणम्यादौ शान्तिकार्यार्थसिद्धये॥',
      'मंगलं भगवान् विष्णुः मंगलं गरुडध्वजः।\nमंगलं पुण्डरीकाक्षो मंगलायतनो हरिः॥',
      'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्,\nविश्वाधारं गगनसदृशं मेघवर्णं शुभांगम्।\nलक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यम्,\nवन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥',
    ],
    translation:
      'Prayers seeking divine protection and auspiciousness — salutations to Devi, Ganesha, Vishnu and all the divine forces that remove obstacles.',
  },
  {
    id: 'vandana-shlokas',
    titleSanskrit: 'वन्दना श्लोकाः',
    titleHindi: 'Vandana Shlokas',
    verses: [
      'वन्दे देवमुमापतिं सुरगुरुं वन्दे जगत्कारणं,\nवन्दे पन्नगभूषणं मृगधरं वन्दे पशूनाम्पतिम्।\nवन्दे सूर्यशशांकवह्निनयनं वन्दे मुकुन्दप्रियम्,\nवन्दे भक्तजनाश्रयं च वरदं वन्दे शिवं शंकरम्॥',
      'ॐ त्र्यम्बकं यजामहे सुगन्धिंपुष्टिवर्धनम्।\nउर्वारुकिमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥',
      'शुक्लां ब्रह्मविचारसारपरमामाद्यां जगद्व्यापिनीं,\nवीणापुस्तकधारणीमभयदां जाड्यान्धकारापहाम्।\nहस्ते स्फाटिकामालिकां विदधतीं पद्यासने संस्थितां,\nवन्दे तां परमेश्वरीं भगवतीं बुद्धिप्रदां शारदाम्॥',
    ],
    translation:
      'Salutations to Lord Shiva the cosmic cause, to the Mahamrityunjaya (death-conquering mantra), and to Goddess Sharada who bestows divine wisdom.',
  },
  {
    id: 'puja-mantras',
    titleSanskrit: 'पूजा मन्त्राः',
    titleHindi: 'Puja Mantras',
    verses: [
      'अभीप्सितार्थसिद्ध्यर्थं पूजितो यः सुरासुरैः।\nसर्वविघ्नहरस्तस्मै गणाधिपतये नमः॥',
      'ॐ सिद्धिबुद्धिसहिताय श्रीमन्महागणाधिपतये नमः॥\nॐ लक्ष्मीनारायणाभ्यां नमः।\nॐ उमामहेश्वराभ्यां नमः।\nॐ वाणीहिरण्यगर्भाभ्यां नमः।\nॐ शचीपुरन्दराभ्यां नमः।\nॐ मातृपितृचरणकमलेभ्यो नमः।\nॐ कुलदेवताभ्यो नमः।\nॐ इष्टदेवताभ्यो नमः।\nॐ ग्रामदेवताभ्यो नमः।',
      'ॐ स्थानदेवताभ्यो नमः।\nॐ वास्तुदेवताभ्यो नमः।\nॐ सर्वेभ्यो देवेभ्यो नमः।\nॐ सर्वेभ्यो ब्राह्मणेभ्यो नमः।\nॐ सर्वेभ्यस्तीर्थेभ्यो नमः।\nॐ पुण्यं पुण्याहं दीर्घमायुरस्तु।\nसर्वारिष्ठ सुशान्तिर्भवतु!',
    ],
    translation:
      'Salutations to Ganesha who removes all obstacles, and namaskara to all divine forces — the Navadurga, Navagraha, ancestors, and all benevolent deities.',
  },
];
