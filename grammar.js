/* Hanzi & Harf — grammar lessons and Arabic verb conjugator data.
   Grammar lesson: {id, title, tt, blocks:[{p:html}|{key:html}|{ex:[[target,pron,English],...]}|{table:{head:[...],rows:[[...],...]}}|{conj:[verbRoot,tense]}], q:[{q,o:[...],a,ex}]}
   NEW LESSONS MUST BE APPENDED AT THE END of GRAMMAR.ar / GRAMMAR.zh. */

const GRAMMAR={ar:[
{id:'ar-g1',title:'The nominal sentence',tt:'الْجُمْلَةُ الاسْمِيَّةُ',blocks:[
 {p:'A sentence can start with a noun. It has two parts: the <b>mubtadaʾ</b> (subject) and the <b>khabar</b> (predicate). In the present tense there is <b>no verb “to be”</b>.'},
 {key:'Subject = definite (with ال or a name). Predicate = indefinite. Both are nominative (‑u / ‑un).'},
 {ex:[['الْبَيْتُ كَبِيرٌ','al-baytu kabīrun','The house is big.'],['الْمُزَارِعُ مُجْتَهِدٌ','al-muzāriʿu mujtahidun','The farmer is hard-working.'],['أَحْمَدُ طَالِبٌ','Aḥmadu ṭālibun','Ahmed is a student.'],['الْحَقْلُ قَرِيبٌ','al-ḥaqlu qarībun','The field is near.']]}],
 q:[{q:'How do you say “The rice is good”?',o:['الْأَرُزُّ جَيِّدٌ','أَرُزٌّ الْجَيِّدُ','الْأَرُزُّ الْجَيِّدُ'],a:0,ex:'Definite subject + indefinite predicate. الْأَرُزُّ الْجَيِّدُ means “the good rice” — a phrase, not a sentence.'},
 {q:'Which one is a complete sentence?',o:['الطَّالِبُ الْمُجْتَهِدُ','الطَّالِبُ مُجْتَهِدٌ','طَالِبٌ مُجْتَهِدٌ'],a:1,ex:'“The student is hard-working.” The others mean “the hard-working student” and “a hard-working student”.'},
 {q:'In الْجَوُّ حَارٌّ, which word is the khabar (predicate)?',o:['الْجَوُّ','حَارٌّ'],a:1,ex:'الْجَوُّ is the subject, حَارٌّ tells us something about it.'},
 {q:'Arabic needs a verb “to be” in the present tense.',o:['True','False'],a:1,ex:'No: الْكِتَابُ جَدِيدٌ = The book is new.'}]},

{id:'ar-g2',title:'The article: sun & moon letters',tt:'الْحُرُوفُ الشَّمْسِيَّةُ وَالْقَمَرِيَّةُ',blocks:[
 {p:'ال (al‑) makes a noun definite. Before the 14 <b>sun letters</b> the <i>l</i> is silent and the first letter is doubled (shadda).'},
 {key:'Sun letters: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. All the others are moon letters: the l is pronounced.'},
 {ex:[['الشَّمْسُ','ash-shams','the sun'],['السُّوقُ','as-sūq','the market'],['الرَّيُّ','ar-rayy','irrigation'],['الْقَمَرُ','al-qamar','the moon'],['الْحَقْلُ','al-ḥaql','the field'],['الْأَرُزُّ','al-aruzz','the rice']]}],
 q:[{q:'How is النَّهْرُ (the river) pronounced?',o:['al-nahr','an-nahr'],a:1,ex:'ن is a sun letter.'},
 {q:'How is الْمَاءُ (the water) pronounced?',o:['al-māʾ','am-māʾ'],a:0,ex:'م is a moon letter.'},
 {q:'Which word starts with a sun letter?',o:['كِتَابٌ','طَبِيبٌ','بَيْتٌ'],a:1,ex:'ط → aṭ-ṭabīb.'},
 {q:'الدَّرْسُ (the lesson) is read:',o:['al-dars','ad-dars'],a:1,ex:'د is a sun letter.'}]},

{id:'ar-g3',title:'Gender & adjective agreement',tt:'الْمُذَكَّرُ وَالْمُؤَنَّثُ وَالصِّفَةُ',blocks:[
 {p:'Most feminine nouns end in <b>ة</b> (tāʾ marbūṭa). The adjective comes <b>after</b> the noun and agrees with it in gender, number, definiteness and case.'},
 {key:'Noun + adjective: both with ال or both without. Feminine noun → add ة to the adjective.'},
 {ex:[['مُزَارِعٌ مُجْتَهِدٌ','muzāriʿun mujtahidun','a hard-working farmer (m)'],['مُزَارِعَةٌ مُجْتَهِدَةٌ','muzāriʿatun mujtahidatun','a hard-working farmer (f)'],['الْحَقْلُ الْكَبِيرُ','al-ḥaqlu l-kabīru','the big field'],['الْمَدِينَةُ الْجَمِيلَةُ','al-madīnatu l-jamīlatu','the beautiful city'],['سَيَّارَةٌ جَدِيدَةٌ','sayyāratun jadīdatun','a new car']]}],
 q:[{q:'“a big university” =',o:['جَامِعَةٌ كَبِيرٌ','جَامِعَةٌ كَبِيرَةٌ','الْجَامِعَةُ كَبِيرَةٌ'],a:1,ex:'جَامِعَة is feminine → كَبِيرَة. The third one is a sentence: “The university is big.”'},
 {q:'“the new book” =',o:['الْكِتَابُ الْجَدِيدُ','الْكِتَابُ جَدِيدٌ','كِتَابٌ الْجَدِيدُ'],a:0,ex:'Both definite. الْكِتَابُ جَدِيدٌ is a sentence: “The book is new.”'},
 {q:'Which noun is feminine?',o:['قَلَمٌ','غُرْفَةٌ','بَيْتٌ'],a:1,ex:'غُرْفَة ends in ة.'},
 {q:'“a sick doctor (f)” =',o:['طَبِيبَةٌ مَرِيضٌ','طَبِيبٌ مَرِيضَةٌ','طَبِيبَةٌ مَرِيضَةٌ'],a:2,ex:'Both feminine.'}]},

{id:'ar-g4',title:'Iḍāfa: “the X of Y”',tt:'الْإِضَافَةُ',blocks:[
 {p:'To say “the X of Y”, put two nouns side by side: كِتَابُ الطَّالِبِ “the student’s book”.'},
 {key:'1st noun: no ال and no tanwīn. 2nd noun: genitive (‑i). The phrase is definite if the 2nd noun is definite.'},
 {ex:[['حَقْلُ الْأَرُزِّ','ḥaqlu l-aruzzi','the rice field'],['مَوْسِمُ الْأَمْطَارِ','mawsimu l-amṭāri','the rainy season'],['بَابُ الْبَيْتِ','bābu l-bayti','the door of the house'],['جَامِعَةُ دَاكَارَ','jāmiʿatu Dākāra','the University of Dakar'],['نَتَائِجُ الْبَحْثِ','natāʾiju l-baḥthi','the research results']]}],
 q:[{q:'“the farmer’s field” =',o:['الْحَقْلُ الْمُزَارِعِ','حَقْلُ الْمُزَارِعِ','حَقْلٌ الْمُزَارِعُ'],a:1,ex:'First noun without ال or tanwīn; second noun in the genitive.'},
 {q:'“the city’s market” =',o:['سُوقُ الْمَدِينَةِ','السُّوقُ الْمَدِينَةُ','سُوقٌ مَدِينَةٌ'],a:0,ex:'سُوقُ + الْمَدِينَةِ.'},
 {q:'In نَتَائِجُ الْبَحْثِ the second word ends in:',o:['‑u','‑a','‑i'],a:2,ex:'The 2nd noun of an iḍāfa is always genitive.'},
 {q:'Can the first word of an iḍāfa take ال?',o:['Yes','No'],a:1,ex:'Never: it is already made definite by the second noun.'}]},

{id:'ar-g5',title:'Attached pronouns',tt:'الضَّمَائِرُ الْمُتَّصِلَةُ',blocks:[
 {p:'Possessive pronouns are <b>suffixes</b> attached to the noun. The same suffixes attach to prepositions and verbs (as objects).'},
 {table:{head:['Suffix','Example','Pronunciation','Meaning'],rows:[['ـِي','كِتَابِي','kitābī','my book'],['ـكَ','كِتَابُكَ','kitābuka','your book (m)'],['ـكِ','كِتَابُكِ','kitābuki','your book (f)'],['ـهُ','كِتَابُهُ','kitābuhu','his book'],['ـهَا','كِتَابُهَا','kitābuhā','her book'],['ـنَا','كِتَابُنَا','kitābunā','our book'],['ـكُمْ','كِتَابُكُمْ','kitābukum','your book (pl)'],['ـهُمْ','كِتَابُهُمْ','kitābuhum','their book']]}},
 {key:'With ة, the ة becomes ت before a suffix: مَدْرَسَةٌ → مَدْرَسَتِي (my school).'},
 {ex:[['عِنْدِي','ʿindī','I have (lit. “with me”)'],['مَعَهُ','maʿahu','with him'],['لَهَا','lahā','for her'],['يَعْرِفُنِي','yaʿrifunī','he knows me']]}],
 q:[{q:'“her car” (سَيَّارَةٌ) =',o:['سَيَّارَتُهَا','سَيَّارَةُهَا','سَيَّارَتُهُ'],a:0,ex:'ة → ت before a suffix; ـهَا = her.'},
 {q:'“our field” =',o:['حَقْلُكُمْ','حَقْلُنَا','حَقْلُهُمْ'],a:1,ex:'ـنَا = our.'},
 {q:'كِتَابُهُمْ means:',o:['his book','their book','your book'],a:1,ex:'ـهُمْ = their.'},
 {q:'“my university” =',o:['جَامِعَتِي','جَامِعَتُكَ','جَامِعَةِي'],a:0,ex:'جَامِعَة → جَامِعَتِي.'}]},

{id:'ar-g6',title:'The past tense',tt:'الْفِعْلُ الْمَاضِي',blocks:[
 {p:'The past tense adds <b>suffixes</b> to the stem (e.g. كَتَبَ “he wrote”). The stem doesn’t change — only the ending.'},
 {key:'‑a he · ‑at she · ‑ta you (m) · ‑ti you (f) · ‑tu I · ‑nā we · ‑ū they (m).'},
 {conj:['كتب','past']}],
 q:[{q:'“I wrote” =',o:['كَتَبَ','كَتَبْتُ','كَتَبْتَ'],a:1,ex:'‑tu = I. كَتَبْتَ = you (m) wrote.'},
 {q:'“she studied” (دَرَسَ) =',o:['دَرَسَتْ','دَرَسْتِ','دَرَسُوا'],a:0,ex:'دَرَسَتْ = she studied; دَرَسْتِ = you (f) studied.'},
 {q:'ذَهَبْنَا means:',o:['they went','we went','you went'],a:1,ex:'‑nā = we.'},
 {q:'“they (m) went out” (خَرَجَ) =',o:['خَرَجُوا','خَرَجْنَ','خَرَجْتُمْ'],a:0,ex:'‑ū (written ـُوا) = they (m).'},
 {q:'شَرِبْتُمْ means:',o:['you (pl) drank','we drank','they drank'],a:0,ex:'‑tum = you (m pl).'}]},

{id:'ar-g7',title:'The present tense',tt:'الْفِعْلُ الْمُضَارِعُ',blocks:[
 {p:'The present tense uses <b>prefixes</b> (and some suffixes). The middle vowel depends on the verb: yaktubu, yaftaḥu, yajlisu — learn it with each verb.'},
 {key:'أَ = I · نَ = we · يَ = he / they · تَ = you, and also she.'},
 {conj:['كتب','pres']}],
 q:[{q:'“I write” =',o:['يَكْتُبُ','أَكْتُبُ','نَكْتُبُ'],a:1,ex:'أَ = I.'},
 {q:'تَدْرُسِينَ means:',o:['you (f) study','she studies','you (pl) study'],a:0,ex:'تَ… ‑īna = you (f).'},
 {q:'“they (m) work” (يَعْمَلُ) =',o:['يَعْمَلُونَ','تَعْمَلُونَ','يَعْمَلْنَ'],a:0,ex:'يَ… ‑ūna = they (m). تَعْمَلُونَ = you (pl) work.'},
 {q:'“she opens” (يَفْتَحُ) =',o:['يَفْتَحُ','تَفْتَحُ','تَفْتَحِينَ'],a:1,ex:'تَ = she (and also “you m.”).'},
 {q:'“we understand” (يَفْهَمُ) =',o:['نَفْهَمُ','أَفْهَمُ','يَفْهَمُونَ'],a:0,ex:'نَ = we.'}]},

{id:'ar-g8',title:'Future and negation',tt:'الْمُسْتَقْبَلُ وَالنَّفْيُ',blocks:[
 {table:{head:['Word','Example','Pronunciation','Meaning'],rows:[['سَ / سَوْفَ + present','سَأَكْتُبُ','sa-aktubu','I will write'],['لَا + present','لَا أَفْهَمُ','lā afhamu','I don’t understand'],['لَمْ + jussive','لَمْ أَكْتُبْ','lam aktub','I didn’t write'],['لَنْ + subjunctive','لَنْ أَذْهَبَ','lan adhhaba','I won’t go'],['مَا + past','مَا ذَهَبْتُ','mā dhahabtu','I didn’t go'],['لَيْسَ (nominal)','لَيْسَ الْجَوُّ حَارًّا','laysa l-jawwu ḥārran','The weather isn’t hot']]}},
 {key:'لَمْ is followed by a PRESENT form (jussive, ending in sukūn) but the meaning is PAST.'},
 {p:'Use the <b>Verbs</b> tab to see every form (لَا، لَمْ، لَنْ، سَ) for 20 verbs.'}],
 q:[{q:'“I didn’t understand” =',o:['لَا أَفْهَمُ','لَمْ أَفْهَمْ','لَنْ أَفْهَمَ'],a:1,ex:'لَمْ + jussive = past negation.'},
 {q:'“We will travel” =',o:['سَنُسَافِرُ','لَنْ نُسَافِرَ','سَافَرْنَا'],a:0,ex:'سَ + present = future.'},
 {q:'لَنْ يَذْهَبَ means:',o:['he didn’t go','he doesn’t go','he won’t go'],a:2,ex:'لَنْ = future negation.'},
 {q:'“He doesn’t work” (now) =',o:['لَا يَعْمَلُ','لَمْ يَعْمَلْ','مَا عَمِلَ'],a:0,ex:'لَا + present.'},
 {q:'“The rice isn’t expensive” =',o:['لَيْسَ الْأَرُزُّ غَالِيًا','لَمْ الْأَرُزُّ غَالٍ','لَا الْأَرُزُّ غَالٍ'],a:0,ex:'لَيْسَ negates a nominal sentence; the predicate becomes accusative.'}]},

{id:'ar-g9',title:'Imperative and prohibition',tt:'الْأَمْرُ وَالنَّهْيُ',blocks:[
 {p:'Imperative: take the present (jussive), drop the prefix and add a helping vowel: <b>اُ</b> if the middle vowel is u, otherwise <b>اِ</b>. Prohibition: <b>لَا + jussive</b>.'},
 {ex:[['اُكْتُبْ','uktub','Write! (m)'],['اِفْتَحْ','iftaḥ','Open! (m)'],['اِجْلِسْ','ijlis','Sit down! (m)'],['اُكْتُبِي','uktubī','Write! (f)'],['اُكْتُبُوا','uktubū','Write! (pl)'],['لَا تَكْتُبْ','lā taktub','Don’t write! (m)'],['لَا تَذْهَبُوا','lā tadhhabū','Don’t go! (pl)']]},
 {conj:['كتب','imp']}],
 q:[{q:'“Sit down!” (to a man; يَجْلِسُ)',o:['اِجْلِسْ','اُجْلُسْ','تَجْلِسُ'],a:0,ex:'Middle vowel i → اِ.'},
 {q:'“Write!” (to a woman)',o:['اُكْتُبْ','اُكْتُبِي','اُكْتُبُوا'],a:1,ex:'‑ī for a woman.'},
 {q:'“Don’t open!” (to a man)',o:['لَا تَفْتَحْ','لَا تَفْتَحُ','لَمْ تَفْتَحْ'],a:0,ex:'لَا + jussive (sukūn).'},
 {q:'“Come in!” (to a group; يَدْخُلُ)',o:['اُدْخُلُوا','اُدْخُلْ','اِدْخَلُوا'],a:0,ex:'Middle vowel u → اُ; plural ‑ū.'}]},

{id:'ar-g10',title:'Dual and plurals',tt:'الْمُثَنَّى وَالْجَمْعُ',blocks:[
 {p:'<b>Dual</b>: add ‑āni (‑ayni in accusative/genitive). <b>Sound masculine plural</b>: ‑ūna / ‑īna (for people). <b>Sound feminine plural</b>: ‑āt. Many nouns have a <b>broken plural</b> — learn each one.'},
 {ex:[['طَالِبَانِ','ṭālibāni','two students'],['مُزَارِعُونَ','muzāriʿūna','farmers (m)'],['مُعَلِّمَاتٌ','muʿallimātun','teachers (f)'],['سَيَّارَاتٌ','sayyārātun','cars'],['كِتَابٌ ← كُتُبٌ','kitāb → kutub','book → books'],['حَقْلٌ ← حُقُولٌ','ḥaql → ḥuqūl','field → fields'],['وَلَدٌ ← أَوْلَادٌ','walad → awlād','child → children'],['مَزْرَعَةٌ ← مَزَارِعُ','mazraʿa → mazāriʿ','farm → farms']]},
 {key:'Plurals of non-humans behave like a FEMININE SINGULAR: الْحُقُولُ كَبِيرَةٌ (the fields are big).'}],
 q:[{q:'“two fields” =',o:['حَقْلَانِ','حُقُولٌ','حَقْلُونَ'],a:0,ex:'Dual ‑āni.'},
 {q:'Plural of مُهَنْدِسٌ (engineer, m) =',o:['مُهَنْدِسُونَ','مُهَنْدِسَاتٌ','مُهَنْدِسَانِ'],a:0,ex:'Sound masculine plural ‑ūna. مُهَنْدِسَانِ is the dual.'},
 {q:'“The cars are new” =',o:['السَّيَّارَاتُ جَدِيدَةٌ','السَّيَّارَاتُ جَدِيدُونَ','السَّيَّارَاتُ جَدِيدٌ'],a:0,ex:'Non-human plural → feminine singular adjective.'},
 {q:'كُتُبٌ is the plural of:',o:['كَاتِبٌ','كِتَابٌ','مَكْتَبٌ'],a:1,ex:'كِتَابٌ → كُتُبٌ.'}]},

{id:'ar-g11',title:'Kāna and its sisters',tt:'كَانَ وَأَخَوَاتُهَا',blocks:[
 {p:'كَانَ (was) and its “sisters” enter a nominal sentence: the subject stays nominative, the <b>predicate becomes accusative</b> (‑an / ‑a).'},
 {ex:[['كَانَ الْجَوُّ حَارًّا','kāna l-jawwu ḥārran','The weather was hot.'],['سَيَكُونُ الْحَصَادُ كَبِيرًا','sa-yakūnu l-ḥaṣādu kabīran','The harvest will be big.'],['صَارَ الْأَرُزُّ أَخْضَرَ','ṣāra l-aruzzu akhḍara','The rice became green.'],['مَا زَالَ الْمَطَرُ قَلِيلًا','mā zāla l-maṭaru qalīlan','The rain is still scarce.'],['لَيْسَ الطَّرِيقُ بَعِيدًا','laysa ṭ-ṭarīqu baʿīdan','The road isn’t far.']]},
 {key:'كَانَ + subject (‑u) + predicate (‑an).'}],
 q:[{q:'“The exam was easy” (سَهْلٌ) =',o:['كَانَ الِامْتِحَانُ سَهْلًا','كَانَ الِامْتِحَانُ سَهْلٌ','كَانَ الِامْتِحَانَ سَهْلٌ'],a:0,ex:'Predicate in the accusative: سَهْلًا.'},
 {q:'In صَارَ الْجَوُّ بَارِدًا, بَارِدًا is:',o:['nominative','accusative','genitive'],a:1,ex:'صَارَ is a sister of كَانَ.'},
 {q:'“The farmers were happy” =',o:['كَانَ الْمُزَارِعُونَ سُعَدَاءَ','كَانَ الْمُزَارِعُونَ سَعِيدُونَ','كَانَ الْمُزَارِعِينَ سُعَدَاءُ'],a:0,ex:'Subject nominative (‑ūna), predicate accusative.'},
 {q:'مَا زَالَ means:',o:['never','still','no longer'],a:1,ex:'مَا زَالَ = to still be.'}]},

{id:'ar-g12',title:'Inna and its sisters',tt:'إِنَّ وَأَخَوَاتُهَا',blocks:[
 {p:'إِنَّ (indeed), أَنَّ (that), لَكِنَّ (but), لِأَنَّ (because), لَعَلَّ (perhaps): the <b>subject becomes accusative</b> (‑a), the predicate stays nominative.'},
 {ex:[['إِنَّ الرَّيَّ مُهِمٌّ','inna r-rayya muhimmun','Irrigation is (indeed) important.'],['أَعْرِفُ أَنَّ الطَّرِيقَ طَوِيلٌ','aʿrifu anna ṭ-ṭarīqa ṭawīlun','I know that the road is long.'],['الْحَقْلُ صَغِيرٌ لَكِنَّ الْمَحْصُولَ كَبِيرٌ','al-ḥaqlu ṣaghīrun lākinna l-maḥṣūla kabīrun','The field is small but the yield is big.'],['لَمْ أَذْهَبْ لِأَنَّ الْجَوَّ حَارٌّ','lam adhhab li-anna l-jawwa ḥārrun','I didn’t go because it was hot.']]},
 {key:'كَانَ changes the PREDICATE; إِنَّ changes the SUBJECT.'}],
 q:[{q:'“Indeed the result is good” =',o:['إِنَّ النَّتِيجَةَ جَيِّدَةٌ','إِنَّ النَّتِيجَةُ جَيِّدَةً','إِنَّ النَّتِيجَةَ جَيِّدَةً'],a:0,ex:'Subject accusative, predicate nominative.'},
 {q:'After لِأَنَّ, the subject is:',o:['nominative','accusative'],a:1,ex:'لِأَنَّ is a sister of إِنَّ.'},
 {q:'“because he is sick” =',o:['لِأَنَّهُ مَرِيضٌ','لِأَنَّ هُوَ مَرِيضٌ','لِأَنَّهُ مَرِيضًا'],a:0,ex:'Pronouns attach directly to إِنَّ and its sisters.'},
 {q:'Which one changes the predicate, not the subject?',o:['إِنَّ','كَانَ','لَكِنَّ'],a:1,ex:'كَانَ → predicate accusative.'}]},

{id:'ar-g13',title:'Derived verb forms',tt:'أَوْزَانُ الْفِعْلِ',blocks:[
 {p:'From one root, Arabic builds up to ten verb forms with related meanings. Knowing the pattern helps you guess new words.'},
 {table:{head:['Form','Pattern','Example','Meaning'],rows:[['I','فَعَلَ','عَلِمَ','to know'],['II','فَعَّلَ','عَلَّمَ','to teach'],['III','فَاعَلَ','سَاعَدَ','to help'],['IV','أَفْعَلَ','أَرْسَلَ','to send'],['V','تَفَعَّلَ','تَعَلَّمَ','to learn'],['VI','تَفَاعَلَ','تَعَاوَنَ','to cooperate'],['VII','اِنْفَعَلَ','اِنْكَسَرَ','to break (itself)'],['VIII','اِفْتَعَلَ','اِجْتَمَعَ','to meet'],['X','اِسْتَفْعَلَ','اِسْتَخْدَمَ','to use']]}},
 {key:'II often = causative · V = reflexive of II · VI = doing something together · X = to seek / to use.'}],
 q:[{q:'From عَلِمَ (to know), “to learn” is:',o:['عَلَّمَ','تَعَلَّمَ','اِسْتَعْلَمَ'],a:1,ex:'Form V تَعَلَّمَ = to learn (to teach oneself).'},
 {q:'اِسْتَخْدَمَ is form:',o:['VIII','X','IV'],a:1,ex:'اِسْتَفْعَلَ = Form X.'},
 {q:'دَرَسَ = to study. دَرَّسَ (Form II) means:',o:['to teach','to be studied','to study together'],a:0,ex:'Form II is often causative: make someone study → teach.'},
 {q:'تَعَاوَنَ (Form VI) suggests:',o:['doing something to oneself','doing something together','asking for something'],a:1,ex:'Form VI = reciprocal action.'}]},

{id:'ar-g14',title:'Relative pronouns',tt:'الْأَسْمَاءُ الْمَوْصُولَةُ',blocks:[
 {p:'الَّذِي (who/which, m), الَّتِي (f), الَّذِينَ (people, m pl). They are used <b>only after a definite noun</b>.'},
 {ex:[['الْمُزَارِعُ الَّذِي يَزْرَعُ الْأَرُزَّ','al-muzāriʿu lladhī yazraʿu l-aruzza','the farmer who grows rice'],['الْبِنْتُ الَّتِي تَدْرُسُ الصِّينِيَّةَ','al-bintu llatī tadrusu ṣ-ṣīniyyata','the girl who studies Chinese'],['الطُّلَّابُ الَّذِينَ نَجَحُوا','aṭ-ṭullābu lladhīna najaḥū','the students who passed'],['رَأَيْتُ رَجُلًا يَعْمَلُ فِي الْحَقْلِ','raʾaytu rajulan yaʿmalu fī l-ḥaqli','I saw a man working in the field']]},
 {key:'Definite noun → الَّذِي / الَّتِي / الَّذِينَ. Indefinite noun → no relative pronoun.'}],
 q:[{q:'“the car that I bought” =',o:['السَّيَّارَةُ الَّتِي اشْتَرَيْتُهَا','السَّيَّارَةُ الَّذِي اشْتَرَيْتُهُ','سَيَّارَةٌ الَّتِي اشْتَرَيْتُهَا'],a:0,ex:'Feminine definite noun → الَّتِي.'},
 {q:'“the researchers who came” =',o:['الْبَاحِثُونَ الَّذِينَ جَاؤُوا','الْبَاحِثُونَ الَّذِي جَاؤُوا','بَاحِثُونَ الَّذِينَ جَاؤُوا'],a:0,ex:'Plural people → الَّذِينَ.'},
 {q:'“a book that I read” =',o:['كِتَابٌ قَرَأْتُهُ','كِتَابٌ الَّذِي قَرَأْتُهُ','الْكِتَابُ قَرَأْتُهُ'],a:0,ex:'Indefinite noun → no relative pronoun.'}]},

{id:'ar-g15',title:'Hollow verbs',tt:'الْفِعْلُ الْأَجْوَفُ',blocks:[
 {p:'A <b>hollow verb</b> has و or ي as its <b>middle radical</b>. That letter turns into a long vowel: قَالَ (root ق و ل, to say), بَاعَ (ب ي ع, to sell), نَامَ (ن و م, to sleep). The long vowel <b>becomes short</b> whenever the stem syllable is closed by a consonant.'},
 {p:'Which short vowel appears in the past? <b>u</b> for verbs like قَالَ/يَقُولُ (قُلْتُ), <b>i</b> for verbs like بَاعَ/يَبِيعُ (بِعْتُ) and also for نَامَ/يَنَامُ (نِمْتُ), خَافَ/يَخَافُ (خِفْتُ).'},
 {key:'Long vowel before a vowel ending: قَالَ، قَالُوا، يَقُولُ. Short vowel before a consonant ending or with sukūn: قُلْتُ، قُلْنَا، لَمْ يَقُلْ، قُلْ!'},
 {table:{head:['Person','قَالَ to say','بَاعَ to sell','نَامَ to sleep'],rows:[['هُوَ','قَالَ','بَاعَ','نَامَ'],['هِيَ','قَالَتْ','بَاعَتْ','نَامَتْ'],['أَنَا','قُلْتُ','بِعْتُ','نِمْتُ'],['أَنْتَ','قُلْتَ','بِعْتَ','نِمْتَ'],['نَحْنُ','قُلْنَا','بِعْنَا','نِمْنَا'],['هُمْ','قَالُوا','بَاعُوا','نَامُوا'],['هُنَّ','قُلْنَ','بِعْنَ','نِمْنَ']]}},
 {table:{head:['Form','قَالَ','بَاعَ','نَامَ'],rows:[['Present (he)','يَقُولُ','يَبِيعُ','يَنَامُ'],['Present (they m)','يَقُولُونَ','يَبِيعُونَ','يَنَامُونَ'],['لَمْ (he)','لَمْ يَقُلْ','لَمْ يَبِعْ','لَمْ يَنَمْ'],['Imperative (m)','قُلْ','بِعْ','نَمْ'],['Imperative (f)','قُولِي','بِيعِي','نَامِي'],['Imperative (pl)','قُولُوا','بِيعُوا','نَامُوا']]}},
 {ex:[['قُلْتُ لَهُ الْحَقِيقَةَ','qultu lahu l-ḥaqīqata','I told him the truth.'],['نِمْتُ مُبَكِّرًا أَمْسِ','nimtu mubakkiran amsi','I went to bed early yesterday.'],['يَبِيعُ الْمُزَارِعُ أَرُزَّهُ فِي السُّوقِ','yabīʿu l-muzāriʿu aruzzahu fī s-sūqi','The farmer sells his rice at the market.'],['لَمْ يَقُلْ شَيْئًا','lam yaqul shayʾan','He didn’t say anything.'],['زُرْ جَدَّكَ يَوْمَ الْعِيدِ','zur jaddaka yawma l-ʿīdi','Visit your grandfather on the feast day.']]},
 {p:'Other common hollow verbs: كَانَ/يَكُونُ (to be), زَارَ/يَزُورُ (to visit), عَادَ/يَعُودُ (to return), صَامَ/يَصُومُ (to fast), طَارَ/يَطِيرُ (to fly), سَارَ/يَسِيرُ (to walk, to go).'}],
 q:[{q:'“I said” =',o:['قَالْتُ','قُلْتُ','قِلْتُ'],a:1,ex:'‑tu starts with a consonant → the ā shortens to u (قَالَ/يَقُولُ type).'},
 {q:'“I sold” =',o:['بُعْتُ','بِعْتُ','بَاعْتُ'],a:1,ex:'Verbs with ي (بَاعَ/يَبِيعُ) take i: بِعْتُ.'},
 {q:'“He didn’t sleep” =',o:['لَمْ يَنَامْ','لَمْ يَنَمْ','لَمْ يَنَامُ'],a:1,ex:'The jussive closes the syllable → long ā becomes short a: لَمْ يَنَمْ.'},
 {q:'“Say!” (to a man) =',o:['قُلْ','قُولْ','اُقْوُلْ'],a:0,ex:'Imperative ends in sukūn → short u: قُلْ. (To a woman: قُولِي.)'},
 {q:'قَالُوا means:',o:['we said','they (m) said','I said'],a:1,ex:'‑ū is a vowel ending, so the long ā stays. “We said” = قُلْنَا.'}]},

{id:'ar-g16',title:'Defective verbs',tt:'الْفِعْلُ النَّاقِصُ',blocks:[
 {p:'A <b>defective verb</b> has و or ي as its <b>last radical</b>. In the dictionary form it ends in a vowel: مَشَى (root م ش ي, to walk), دَعَا (د ع و, to invite, to call), نَسِيَ (ن س ي, to forget). There are three types: <b>a–i</b> مَشَى/يَمْشِي, <b>a–u</b> دَعَا/يَدْعُو and <b>i–a</b> نَسِيَ/يَنْسَى.'},
 {p:'In the <b>past</b>, the weak letter comes back before a consonant suffix: مَشَيْتُ (I walked), دَعَوْتُ (I invited). In the <b>jussive</b> (after لَمْ) and the <b>imperative</b>, the final long vowel is simply <b>cut short</b>: لَمْ يَمْشِ، لَمْ يَدْعُ، لَمْ يَنْسَ.'},
 {key:'لَمْ / imperative → drop the final long vowel: يَمْشِي → لَمْ يَمْشِ · يَدْعُو → اُدْعُ · يَنْسَى → لَا تَنْسَ!'},
 {table:{head:['Person','مَشَى to walk','دَعَا to invite','نَسِيَ to forget'],rows:[['هُوَ','مَشَى','دَعَا','نَسِيَ'],['هِيَ','مَشَتْ','دَعَتْ','نَسِيَتْ'],['أَنَا','مَشَيْتُ','دَعَوْتُ','نَسِيتُ'],['أَنْتَ','مَشَيْتَ','دَعَوْتَ','نَسِيتَ'],['نَحْنُ','مَشَيْنَا','دَعَوْنَا','نَسِينَا'],['هُمْ','مَشَوْا','دَعَوْا','نَسُوا']]}},
 {table:{head:['Form','مَشَى','دَعَا','نَسِيَ'],rows:[['Present (he)','يَمْشِي','يَدْعُو','يَنْسَى'],['Present (you f)','تَمْشِينَ','تَدْعِينَ','تَنْسَيْنَ'],['Present (they m)','يَمْشُونَ','يَدْعُونَ','يَنْسَوْنَ'],['لَنْ (he)','لَنْ يَمْشِيَ','لَنْ يَدْعُوَ','لَنْ يَنْسَى'],['لَمْ (he)','لَمْ يَمْشِ','لَمْ يَدْعُ','لَمْ يَنْسَ'],['Imperative (m)','اِمْشِ','اُدْعُ','اِنْسَ'],['Imperative (f)','اِمْشِي','اُدْعِي','اِنْسَيْ'],['Imperative (pl)','اِمْشُوا','اُدْعُوا','اِنْسَوْا']]}},
 {ex:[['أَمْشِي إِلَى الْجَامِعَةِ يَوْمِيًّا','amshī ilā l-jāmiʿati yawmiyyan','I walk to the university every day.'],['دَعَوْنَا الْأَقَارِبَ إِلَى الْعِيدِ','daʿawnā l-aqāriba ilā l-ʿīdi','We invited our relatives for the feast.'],['نَسِيتُ جَوَازَ السَّفَرِ فِي الْفُنْدُقِ','nasītu jawāza s-safari fī l-funduqi','I forgot the passport at the hotel.'],['لَمْ يَنْسَ الْمُزَارِعُ السَّمَادَ','lam yansa l-muzāriʿu s-samāda','The farmer didn’t forget the fertiliser.'],['لَا تَنْسَ كَلِمَةَ السِّرِّ','lā tansa kalimata s-sirri','Don’t forget the password!'],['لَمْ أَشْتَرِ شَيْئًا مِنَ السُّوقِ','lam ashtari shayʾan mina s-sūqi','I didn’t buy anything at the market.']]},
 {p:'The same rules apply to derived forms you already know: أَشْتَرِي (I buy, from اِشْتَرَى) and يَنْتَهِي (it ends, from اِنْتَهَى) behave like يَمْشِي. Other common defective verbs: بَنَى/يَبْنِي (to build), بَكَى/يَبْكِي (to cry), جَرَى/يَجْرِي (to run), شَكَا/يَشْكُو (to complain), رَجَا/يَرْجُو (to hope), بَقِيَ/يَبْقَى (to stay), لَقِيَ/يَلْقَى (to meet).'}],
 q:[{q:'“I walked” =',o:['مَشَيْتُ','مَشَوْتُ','مَشْتُ'],a:0,ex:'Root م ش ي: the ي comes back before the consonant suffix ‑tu.'},
 {q:'“We invited” =',o:['دَعَيْنَا','دَعَوْنَا','دَعَانَا'],a:1,ex:'Root د ع و: the و comes back. (دَعَانَا = he invited us.)'},
 {q:'“He didn’t forget” =',o:['لَمْ يَنْسَى','لَمْ يَنْسَ','لَمْ يَنْسُ'],a:1,ex:'After لَمْ the final long vowel is cut short: يَنْسَى → لَمْ يَنْسَ.'},
 {q:'“Walk!” (to a man) =',o:['اِمْشِي','اِمْشِ','اُمْشُ'],a:1,ex:'اِمْشِ for a man; اِمْشِي (with long ī) is for a woman.'},
 {q:'“They (m) forgot” =',o:['نَسِيُوا','نَسُوا','نَسِيَا'],a:1,ex:'نَسِيَ + ‑ū → نَسُوا. (نَسِيَا = the two of them forgot.)'}]},

{id:'ar-g17',title:'Assimilated verbs',tt:'الْفِعْلُ الْمِثَالُ',blocks:[
 {p:'An <b>assimilated verb</b> has و as its <b>first radical</b>: وَصَلَ (root و ص ل, to arrive), وَجَدَ (و ج د, to find), وَضَعَ (و ض ع, to put). The <b>past tense is completely regular</b>: وَصَلْتُ، وَجَدْنَا، وَضَعُوا.'},
 {p:'In the <b>present</b>, the و <b>disappears</b> for most of these verbs: يَصِلُ (not يَوْصِلُ), يَجِدُ، يَضَعُ. Because the present stem now starts with a vowelled consonant, the <b>imperative needs no helping alif</b>: صِلْ، جِدْ، ضَعْ.'},
 {key:'Past: regular (وَصَلْتُ). Present, لَمْ and imperative: the و drops — يَصِلُ، لَمْ يَصِلْ، صِلْ! — and the imperative has no اِ at the start.'},
 {table:{head:['Form','وَصَلَ to arrive','وَجَدَ to find','وَضَعَ to put'],rows:[['Past (he)','وَصَلَ','وَجَدَ','وَضَعَ'],['Past (I)','وَصَلْتُ','وَجَدْتُ','وَضَعْتُ'],['Present (he)','يَصِلُ','يَجِدُ','يَضَعُ'],['Present (I)','أَصِلُ','أَجِدُ','أَضَعُ'],['Present (you f)','تَصِلِينَ','تَجِدِينَ','تَضَعِينَ'],['Present (they m)','يَصِلُونَ','يَجِدُونَ','يَضَعُونَ'],['لَمْ (he)','لَمْ يَصِلْ','لَمْ يَجِدْ','لَمْ يَضَعْ'],['Imperative (m)','صِلْ','جِدْ','ضَعْ'],['Imperative (f)','صِلِي','جِدِي','ضَعِي'],['Imperative (pl)','صِلُوا','جِدُوا','ضَعُوا']]}},
 {ex:[['وَصَلَتِ الرِّحْلَةُ إِلَى الْمَطَارِ مُتَأَخِّرَةً','waṣalati r-riḥlatu ilā l-maṭāri mutaʾakhkhiratan','The flight arrived at the airport late.'],['لَمْ أَجِدْ جَوَازَ السَّفَرِ فِي حَقِيبَتِي','lam ajid jawāza s-safari fī ḥaqībatī','I didn’t find the passport in my bag.'],['يَضَعُ الْمُزَارِعُ السَّمَادَ فِي الْحَقْلِ','yaḍaʿu l-muzāriʿu s-samāda fī l-ḥaqli','The farmer puts fertiliser in the field.'],['ضَعِ الْقِدْرَ فِي الْمَطْبَخِ','ḍaʿi l-qidra fī l-maṭbakhi','Put the pot in the kitchen.'],['مَتَى تَصِلُ إِلَى الْجَامِعَةِ؟','matā taṣilu ilā l-jāmiʿati?','When do you get to the university?'],['وَعَدْتُ أُسْتَاذِي أَنْ أُنْهِيَ أُطْرُوحَتِي هَذَا الْعَامَ','waʿadtu ustādhī an unhiya uṭrūḥatī hādhā l-ʿāma','I promised my professor to finish my thesis this year.']]},
 {p:'Other common assimilated verbs: وَقَفَ/يَقِفُ (to stand, to stop), وَعَدَ/يَعِدُ (to promise), وَصَفَ/يَصِفُ (to describe), وَقَعَ/يَقَعُ (to fall; to be located), وَلَدَ/يَلِدُ (to give birth). Note: in <b>derived forms</b> the و stays (أَوْصَلَ/يُوصِلُ “to give someone a lift”) — except in <b>Form VIII</b>, where it merges into the ت: from و ص ل comes اِتَّصَلَ “to contact, to call”, which you know from اِتَّصِلْ بِي. Nouns keep the و too: وُصُولٌ (arrival), مَوْعِدٌ (appointment), وَصْفَةٌ (recipe, lit. “description”).'}],
 q:[{q:'“I arrived” =',o:['وَصَلْتُ','صِلْتُ','أَصِلُ'],a:0,ex:'The past tense of assimilated verbs is regular: وَصَلْتُ. (أَصِلُ = I arrive.)'},
 {q:'“He arrives” =',o:['يَوْصِلُ','يَصِلُ','يُوصِلُ'],a:1,ex:'The و drops in the present: يَصِلُ. (يُوصِلُ is Form IV: “he gives someone a lift”.)'},
 {q:'“I didn’t find” =',o:['لَمْ أَجِدْ','لَمْ أَوْجِدْ','لَمْ أَجِدُ'],a:0,ex:'لَمْ + jussive, without the و: لَمْ أَجِدْ.'},
 {q:'“Put!” (to a man) =',o:['اِوْضَعْ','ضَعْ','تَضَعْ'],a:1,ex:'The present stem يَضَعُ has no و, so the imperative needs no helping alif: ضَعْ.'},
 {q:'اِتَّصَلَ (to call, to contact) comes from the root:',o:['ت ص ل','و ص ل','ء ت ص'],a:1,ex:'Form VIII of و ص ل: the و merges into the ت → اِتَّصَلَ.'}]},

{id:'ar-g18',title:'Doubled verbs',tt:'الْفِعْلُ الْمُضَعَّفُ',blocks:[
 {p:'A <b>doubled verb</b> has the same letter as its <b>second and third radical</b>: رَدَّ (root ر د د, to reply, to give back), مَرَّ (م ر ر, to pass), ظَنَّ (ظ ن ن, to think — you know أَظُنُّ). When a vowel follows, the two identical letters <b>merge into one letter with a shadda</b>: رَدَّ، رَدُّوا، يَرُدُّ.'},
 {p:'When the ending starts with a <b>consonant</b> (past ‑tu, ‑ta, ‑nā, ‑na), the shadda <b>splits</b> and both letters are written: رَدَدْتُ (I replied), مَرَرْنَا (we passed). If the ending begins with the same letter, it merges again: ظَنَنْتُ but ظَنَنَّا (we thought). Most doubled verbs have <b>u</b> in the present (يَرُدُّ، يَمُرُّ، يَظُنُّ); some have <b>i</b> (فَرَّ/يَفِرُّ to flee) or <b>a</b> (ظَلَّ/يَظَلُّ to remain).'},
 {key:'Vowel after the doubled letter → shadda (رَدَّ، رَدُّوا، يَرُدُّ). Consonant ending → split (رَدَدْتُ، رَدَدْنَا). After لَمْ and in the imperative MSA usually keeps the shadda + a: لَمْ يَرُدَّ، رُدَّ!'},
 {table:{head:['Person','رَدَّ to reply','مَرَّ to pass','ظَنَّ to think'],rows:[['هُوَ','رَدَّ','مَرَّ','ظَنَّ'],['هِيَ','رَدَّتْ','مَرَّتْ','ظَنَّتْ'],['أَنَا','رَدَدْتُ','مَرَرْتُ','ظَنَنْتُ'],['أَنْتَ','رَدَدْتَ','مَرَرْتَ','ظَنَنْتَ'],['نَحْنُ','رَدَدْنَا','مَرَرْنَا','ظَنَنَّا'],['هُمْ','رَدُّوا','مَرُّوا','ظَنُّوا'],['هُنَّ','رَدَدْنَ','مَرَرْنَ','ظَنَنَّ']]}},
 {table:{head:['Form','رَدَّ','مَرَّ','ظَنَّ'],rows:[['Present (he)','يَرُدُّ','يَمُرُّ','يَظُنُّ'],['Present (I)','أَرُدُّ','أَمُرُّ','أَظُنُّ'],['Present (they m)','يَرُدُّونَ','يَمُرُّونَ','يَظُنُّونَ'],['Present (they f)','يَرْدُدْنَ','يَمْرُرْنَ','يَظْنُنَّ'],['لَمْ (he)','لَمْ يَرُدَّ','لَمْ يَمُرَّ','لَمْ يَظُنَّ'],['Imperative (m)','رُدَّ','مُرَّ','—'],['Imperative (f)','رُدِّي','مُرِّي','—'],['Imperative (pl)','رُدُّوا','مُرُّوا','—']]}},
 {ex:[['رَدَدْتُ عَلَى رِسَالَةِ الْأُسْتَاذِ مَسَاءً','radadtu ʿalā risālati l-ustādhi masāʾan','I replied to the professor’s message in the evening.'],['ظَنَنْتُ أَنَّ الْمَحَطَّةَ قَرِيبَةٌ مِنَ الْفُنْدُقِ','ẓanantu anna l-maḥaṭṭata qarībatun mina l-funduqi','I thought the station was near the hotel.'],['تَمُرُّ الْحَافِلَةُ أَمَامَ الْمَسْجِدِ كُلَّ صَبَاحٍ','tamurru l-ḥāfilatu amāma l-masjidi kulla ṣabāḥin','The bus passes in front of the mosque every morning.'],['لَمْ يَرُدَّ الْمُدِيرُ عَلَى هَاتِفِهِ','lam yarudda l-mudīru ʿalā hātifihi','The manager didn’t answer his phone.'],['رُدَّ الْكِتَابَ إِلَى الْمَكْتَبَةِ','rudda l-kitāba ilā l-maktabati','Return the book to the library!'],['مَرَرْنَا بِالسُّوقِ وَاشْتَرَيْنَا خُضَارًا','mararnā bis-sūqi wa-shtaraynā khuḍāran','We passed by the market and bought vegetables.']]},
 {p:'Derived forms follow the same rule. You already know أُحِبُّ (Form IV أَحَبَّ/يُحِبُّ): “I loved” = أَحْبَبْتُ. Form X اِسْتَمَرَّ/يَسْتَمِرُّ (to continue) → اِسْتَمْرَرْنَا (we continued). Other common Form I doubled verbs: عَدَّ/يَعُدُّ (to count), حَلَّ/يَحُلُّ (to solve), دَلَّ/يَدُلُّ (to show the way), شَدَّ/يَشُدُّ (to pull, to tighten), شَكَّ/يَشُكُّ (to doubt), فَرَّ/يَفِرُّ (to flee). The adjective مُهِمٌّ (important) comes from a doubled root too (ه م م).'}],
 q:[{q:'“I replied” =',o:['رَدَّتُ','رَدَدْتُ','رَدْدَتُ'],a:1,ex:'The ending ‑tu starts with a consonant, so the doubled letters split: رَدَدْتُ.'},
 {q:'“They (m) passed” =',o:['مَرَرُوا','مَرُّوا','مَرَّتْ'],a:1,ex:'‑ū is a vowel, so the shadda stays: مَرُّوا. (مَرَّتْ = she passed.)'},
 {q:'“He didn’t reply” (usual MSA form) =',o:['لَمْ يَرُدُّ','لَمْ يَرُدَّ','لَمْ يَرْدُ'],a:1,ex:'After لَمْ, MSA usually keeps the shadda and puts a fatḥa on it: لَمْ يَرُدَّ (also possible: لَمْ يَرْدُدْ).'},
 {q:'“We thought” =',o:['ظَنَنَّا','ظَنْنَا','ظُنَّا'],a:0,ex:'ظ ن ن + ‑nā: the shadda splits, and the last ن merges with ‑nā → ظَنَنَّا.'},
 {q:'“I loved” (Form IV أَحَبَّ) =',o:['أَحَبَّتُ','حَبَبْتُ','أَحْبَبْتُ'],a:2,ex:'Consonant ending → split: أَحْبَبْتُ. The Form IV prefix أَ stays.'}]},
{id:'ar-g19',title:'Hamzated verbs',tt:'الْفِعْلُ الْمَهْمُوزُ',blocks:[
 {p:'A <b>hamzated verb</b> has a hamza (ء) as one of its three radicals: the <b>first</b> (أَكَلَ to eat, أَخَذَ to take, أَمَرَ to order), the <b>second</b> (سَأَلَ to ask) or the <b>third</b> (قَرَأَ to read, بَدَأَ to begin — you know يَبْدَأُ). Good news: the hamza is a real consonant, so these verbs take <b>exactly the same endings as sound verbs</b>. What changes is mostly the <b>spelling</b> — the “seat” on which the hamza is written.'},
 {p:'<b>Seat rule:</b> look at the hamza’s own vowel and the vowel before it; the strongest wins: <b>i → ئ</b>, <b>u → ؤ</b>, <b>a → أ</b> (i is stronger than u, u stronger than a). So: سَأَلَ (a+a → أ), سُئِلَ “he was asked” (u+i → ئ), قَرَؤُوا “they read” (a+u → ؤ), قَرَأْتُ (a+sukūn → أ).'},
 {p:'<b>First-radical hamza:</b> in the present “I” form, the prefix أَ meets the hamza with sukūn, and أَأْ becomes <b>آ</b> (ā): آكُلُ (I eat), آخُذُ (I take) — but يَأْكُلُ، تَأْكُلُ، نَأْكُلُ as usual. Three very common verbs have a <b>short imperative</b> without the hamza: كُلْ (eat!), خُذْ (take!), مُرْ (order!).'},
 {key:'Hamzated verbs conjugate like sound verbs; only the hamza’s seat changes (i → ئ, u → ؤ, a → أ). Present “I” of أَكَلَ/أَخَذَ: آكُلُ، آخُذُ. Imperatives: كُلْ، خُذْ — but اِسْأَلْ، اِقْرَأْ.'},
 {table:{head:['Form','أَكَلَ to eat','سَأَلَ to ask','قَرَأَ to read'],rows:[['Past (he)','أَكَلَ','سَأَلَ','قَرَأَ'],['Past (I)','أَكَلْتُ','سَأَلْتُ','قَرَأْتُ'],['Past (they m)','أَكَلُوا','سَأَلُوا','قَرَؤُوا'],['Present (he)','يَأْكُلُ','يَسْأَلُ','يَقْرَأُ'],['Present (I)','آكُلُ','أَسْأَلُ','أَقْرَأُ'],['Present (they m)','يَأْكُلُونَ','يَسْأَلُونَ','يَقْرَؤُونَ'],['لَمْ (he)','لَمْ يَأْكُلْ','لَمْ يَسْأَلْ','لَمْ يَقْرَأْ'],['Imperative (m)','كُلْ','اِسْأَلْ','اِقْرَأْ'],['Imperative (pl)','كُلُوا','اِسْأَلُوا','اِقْرَؤُوا']]}},
 {ex:[['آكُلُ الْأَرُزَّ بِالسَّمَكِ كُلَّ يَوْمٍ','ākulu l-aruzza bis-samaki kulla yawmin','I eat rice with fish every day.'],['سَأَلْتُ السَّائِقَ عَنِ الْمَحَطَّةِ','saʾaltu s-sāʾiqa ʿani l-maḥaṭṭati','I asked the driver about the station.'],['قَرَأَ الْأُسْتَاذُ أُطْرُوحَتِي وَكَانَ سَعِيدًا','qaraʾa l-ustādhu uṭrūḥatī wa-kāna saʿīdan','The professor read my thesis and was happy.'],['يَبْدَأُ مَوْسِمُ الْأَمْطَارِ فِي يُولْيُو','yabdaʾu mawsimu l-amṭāri fī yūlyū','The rainy season begins in July.'],['خُذْ دَوَاءَكَ بَعْدَ الْعَشَاءِ','khudh dawāʾaka baʿda l-ʿashāʾi','Take your medicine after dinner!'],['لَمْ يَقْرَأِ الْمُدِيرُ رِسَالَتِي','lam yaqraʾi l-mudīru risālatī','The manager didn’t read my message.'],['اِسْأَلُوا الطَّبِيبَ قَبْلَ أَنْ تَأْخُذُوا الدَّوَاءَ','isʾalū ṭ-ṭabība qabla an taʾkhudhū d-dawāʾa','Ask the doctor before you take the medicine.']]},
 {p:'More hamzated verbs: أَخَذَ/يَأْخُذُ (to take), أَمَرَ/يَأْمُرُ (to order), أَذِنَ/يَأْذَنُ (to permit), مَلَأَ/يَمْلَأُ (to fill), نَشَأَ/يَنْشَأُ (to grow up). Two very frequent verbs are hamzated <b>and</b> weak, so learn them as special cases: رَأَى/يَرَى (to see: رَأَيْتُ، لَمْ يَرَ) and جَاءَ/يَجِيءُ (to come: جِئْتُ، لَمْ يَجِئْ).'}],
 q:[{q:'“I eat” =',o:['أَأْكُلُ','آكُلُ','أَكُلُ'],a:1,ex:'The prefix أَ + the radical hamza with sukūn (أَأْ) merge into آ: آكُلُ.'},
 {q:'“Take!” (to a man) =',o:['اُؤْخُذْ','خُذْ','أَخِذْ'],a:1,ex:'أَخَذَ, أَكَلَ and أَمَرَ have short imperatives without the hamza: خُذْ، كُلْ، مُرْ.'},
 {q:'“They (m) read” (past) =',o:['قَرَؤُوا','قَرَئُوا','قَرَاؤُوا'],a:0,ex:'The hamza carries u and follows a: u is stronger than a, so the seat is و → قَرَؤُوا.'},
 {q:'“He didn’t ask” =',o:['لَمْ يَسْأَلُ','لَمْ يَسْأَلْ','لَمْ يَسَلْ'],a:1,ex:'Exactly like a sound verb: لَمْ + jussive with sukūn → لَمْ يَسْأَلْ.'},
 {q:'“He was asked” (passive) is spelled:',o:['سُأِلَ','سُئِلَ','سُؤِلَ'],a:1,ex:'The hamza carries i (and follows u); i is the strongest vowel, so the seat is ي without dots → سُئِلَ.'}]}
],
zh:[
{id:'zh-g1',title:'了: completed action & change',tt:'了',blocks:[
 {p:'了 after a verb = the action is <b>completed</b>. 了 at the end of a sentence = a <b>new situation</b> or change.'},
 {ex:[['我吃了早饭。','wǒ chīle zǎofàn.','I had breakfast.'],['他买了三本书。','tā mǎile sān běn shū.','He bought three books.'],['下雨了。','xià yǔ le.','It’s started raining.'],['我饿了。','wǒ è le.','I’m hungry now.']]},
 {key:'Negating a completed action: 没(有) + verb, WITHOUT 了 — 我没吃早饭。'}],
 q:[{q:'“I didn’t buy it” =',o:['我没买了','我没买','我不买了'],a:1,ex:'没 + verb, no 了.'},
 {q:'天气冷___。(It has turned cold.)',o:['了','过','着'],a:0,ex:'Sentence-final 了 = change of situation.'},
 {q:'他昨天去___北京。',o:['了','着','的'],a:0,ex:'Completed action: 去了.'},
 {q:'我不想去了 means:',o:['I didn’t want to go','I don’t want to go anymore','I went'],a:1,ex:'了 marks the change: no longer.'}]},
{id:'zh-g2',title:'过: past experience',tt:'过',blocks:[
 {p:'Verb + 过 = have done something (at least once) before.'},
 {ex:[['我去过中国。','wǒ qùguo Zhōngguó.','I have been to China.'],['你吃过塞内加尔菜吗？','nǐ chīguo Sàinèijiā’ěr cài ma?','Have you ever eaten Senegalese food?'],['我没看过这本书。','wǒ méi kànguo zhè běn shū.','I have never read this book.']]},
 {key:'Negation: 没 + verb + 过 (过 stays!).'}],
 q:[{q:'“I have never been to Beijing” =',o:['我没去过北京','我不去过北京','我没去北京过'],a:0,ex:'没 + V + 过.'},
 {q:'你学___汉语吗？(Have you ever studied Chinese?)',o:['过','着','得'],a:0,ex:'Experience → 过.'},
 {q:'“I have eaten dumplings before” =',o:['我吃了饺子','我吃过饺子','我在吃饺子'],a:1,ex:'吃过 = have eaten (experience).'}]},
{id:'zh-g3',title:'着: ongoing state',tt:'着',blocks:[
 {p:'Verb + 着 describes a <b>continuing state</b>, or the manner in which another action is done.'},
 {ex:[['门开着。','mén kāizhe.','The door is open.'],['他笑着说。','tā xiàozhe shuō.','He said, smiling.'],['墙上挂着一张地图。','qiáng shang guàzhe yì zhāng dìtú.','A map is hanging on the wall.']]},
 {key:'V1 + 着 + V2 = do V2 while in the state of V1.'}],
 q:[{q:'“He sat reading” =',o:['他坐着看书','他坐了看书','他坐过看书'],a:0,ex:'坐着 = in a seated state.'},
 {q:'窗户开___。(The window is open.)',o:['着','过','得'],a:0,ex:'Continuing state → 着.'},
 {q:'他笑着说 means:',o:['He laughed and left','He said it smiling','He has laughed'],a:1,ex:'V1着 + V2.'}]},
{id:'zh-g4',title:'Comparison with 比',tt:'比',blocks:[
 {p:'A 比 B + adjective. Add 一点儿 / 多了 / 得多 for degree. <b>Never</b> put 很 before the adjective.'},
 {ex:[['今天比昨天热。','jīntiān bǐ zuótiān rè.','Today is hotter than yesterday.'],['他比我高一点儿。','tā bǐ wǒ gāo yìdiǎnr.','He’s a bit taller than me.'],['今年的产量比去年高得多。','jīnnián de chǎnliàng bǐ qùnián gāo de duō.','This year’s yield is much higher than last year’s.'],['我没有他高。','wǒ méiyǒu tā gāo.','I’m not as tall as him.']]},
 {key:'Negative comparison: A 没有 B + adjective.'}],
 q:[{q:'“Dakar is bigger than Touba” =',o:['达喀尔比图巴大','达喀尔比图巴很大','达喀尔大比图巴'],a:0,ex:'No 很 after 比.'},
 {q:'“I’m not as busy as you” =',o:['我没有你忙','我比你不忙','我不比你很忙'],a:0,ex:'A 没有 B + adj.'},
 {q:'“much hotter than yesterday” =',o:['比昨天热得多','比昨天很热','比昨天多热'],a:0,ex:'Adj + 得多 = much more.'}]},
{id:'zh-g5',title:'Degree complement 得',tt:'得',blocks:[
 {p:'Verb + 得 + description = <b>how</b> an action is done (well, fast, slowly…).'},
 {ex:[['他说得很快。','tā shuō de hěn kuài.','He speaks fast.'],['你汉语说得很好！','nǐ Hànyǔ shuō de hěn hǎo!','You speak Chinese very well!'],['我跑得不快。','wǒ pǎo de bú kuài.','I don’t run fast.']]},
 {key:'With an object: repeat the verb or put the object first — 他(说)汉语说得很好。'}],
 q:[{q:'“She writes beautifully” =',o:['她写得很漂亮','她写很漂亮','她很漂亮写'],a:0,ex:'V + 得 + description.'},
 {q:'他做饭做___很好。',o:['得','的','地'],a:0,ex:'Degree complement → 得.'},
 {q:'“He doesn’t speak slowly” =',o:['他说得不慢','他不说得慢','他说不得慢'],a:0,ex:'Negate the description: 得不慢.'}]},
{id:'zh-g6',title:'Result complements',tt:'结果补语',blocks:[
 {p:'Verb + result (完, 好, 懂, 到, 见, 错) shows the <b>outcome</b> of an action.'},
 {ex:[['我做完作业了。','wǒ zuòwán zuòyè le.','I finished my homework.'],['你听懂了吗？','nǐ tīngdǒng le ma?','Did you understand?'],['我找到了钥匙。','wǒ zhǎodào le yàoshi.','I found the key.'],['我写错了一个字。','wǒ xiěcuò le yí ge zì.','I wrote a character wrong.']]},
 {key:'Negation with 没: 我没听懂。'}],
 q:[{q:'“I didn’t understand (what I heard)” =',o:['我没听懂','我不听懂','我听没懂'],a:0,ex:'没 + V + result.'},
 {q:'我找___了我的手机。(found)',o:['到','完','错'],a:0,ex:'找到 = find (successfully).'},
 {q:'你吃___了吗？(finished eating)',o:['完','见','懂'],a:0,ex:'吃完 = finish eating.'}]},
{id:'zh-g7',title:'The 把 construction',tt:'把字句',blocks:[
 {p:'Subject + 把 + object + verb + something more. Used when you do something <b>to a specific object</b> (move it, change it, finish it).'},
 {ex:[['我把作业做完了。','wǒ bǎ zuòyè zuòwán le.','I finished the homework.'],['请把门关上。','qǐng bǎ mén guānshang.','Please close the door.'],['他把数据输入了电脑。','tā bǎ shùjù shūrù le diànnǎo.','He entered the data into the computer.']]},
 {key:'The verb can’t stand alone: it needs 了, a complement or another element.'}],
 q:[{q:'Which sentence is correct?',o:['我把书放在桌子上','我把书放','我放把书在桌子上'],a:0,ex:'把 + object + verb + complement.'},
 {q:'“Please give me the passport” =',o:['请把护照给我','请给护照把我','请把我给护照'],a:0,ex:'把 + 护照 + 给我.'},
 {q:'In a 把 sentence the object must be:',o:['specific / known','any indefinite thing'],a:0,ex:'You act on a definite object.'}]},
{id:'zh-g8',title:'Passive with 被',tt:'被字句',blocks:[
 {p:'Receiver + 被 + (doer) + verb + result. Often used for unwanted events.'},
 {ex:[['我的手机被偷了。','wǒ de shǒujī bèi tōu le.','My phone was stolen.'],['水稻被虫子吃了。','shuǐdào bèi chóngzi chī le.','The rice was eaten by insects.'],['他被老师批评了。','tā bèi lǎoshī pīpíng le.','He was criticised by the teacher.']]},
 {key:'被 + (doer) + verb + 了 / complement.'}],
 q:[{q:'“The computer was broken by him” =',o:['电脑被他弄坏了','他被电脑弄坏了','电脑他被弄坏了'],a:0,ex:'Receiver + 被 + doer + verb.'},
 {q:'我的钱包___偷了。',o:['被','把','比'],a:0,ex:'Passive → 被.'},
 {q:'Which sentence is passive?',o:['我把饭吃了','饭被我吃了','我吃了饭'],a:1,ex:'饭被我吃了 = The food was eaten by me.'}]},
{id:'zh-g9',title:'是…的: details of a past event',tt:'是……的',blocks:[
 {p:'Use 是…的 to stress <b>when, where, how or with whom</b> a past action happened.'},
 {ex:[['我是去年来的。','wǒ shì qùnián lái de.','I came last year.'],['你是怎么来的？','nǐ shì zěnme lái de?','How did you come?'],['我是坐飞机来的。','wǒ shì zuò fēijī lái de.','I came by plane.'],['他是在武汉学的汉语。','tā shì zài Wǔhàn xué de Hànyǔ.','He learned Chinese in Wuhan.']]},
 {key:'The action is already known; 是…的 highlights the detail.'}],
 q:[{q:'“I came by bus” =',o:['我是坐公共汽车来的','我坐公共汽车是来的','我是来坐公共汽车的'],a:0,ex:'是 + detail + verb + 的.'},
 {q:'你是什么时候到___？',o:['的','了','过'],a:0,ex:'是…的 frame.'},
 {q:'是…的 is used for:',o:['future plans','details of a past event','habits'],a:1,ex:'Focus on time, place, manner of a past action.'}]},
{id:'zh-g10',title:'越来越 / 一边…一边',tt:'越来越 · 一边……一边',blocks:[
 {p:'越来越 + adjective = more and more. 一边 V1 一边 V2 = doing two things at the same time.'},
 {ex:[['天气越来越热。','tiānqì yuè lái yuè rè.','The weather is getting hotter and hotter.'],['他的汉语越来越好。','tā de Hànyǔ yuè lái yuè hǎo.','His Chinese keeps getting better.'],['我一边吃饭一边看手机。','wǒ yìbiān chīfàn yìbiān kàn shǒujī.','I eat while looking at my phone.']]}],
 q:[{q:'“More and more people learn Chinese” =',o:['学汉语的人越来越多','学汉语的人越多越来','越来越学汉语的人多'],a:0,ex:'越来越 + adjective.'},
 {q:'“He listens to music while running” =',o:['他一边跑步一边听音乐','他跑步一边听音乐一边','他一边跑步听音乐'],a:0,ex:'一边 V1 一边 V2.'}]},
{id:'zh-g11',title:'Directional complements',tt:'趋向补语',blocks:[
 {p:'After a verb, <b>来</b> shows movement <b>towards the speaker</b> and <b>去</b> movement <b>away from the speaker</b>: 进来 (come in), 进去 (go in). For more detail, add a direction word between the verb and 来/去: 上 up, 下 down, 进 in, 出 out, 回 back, 过 over, 起 up (rising).'},
 {table:{head:['','上','下','进','出','回','过','起'],rows:[['+ 来','上来','下来','进来','出来','回来','过来','起来'],['+ 去','上去','下去','进去','出去','回去','过去','—']]}},
 {key:'A PLACE object goes before 来/去: 走进办公室来, 回中国去 — never 回去中国.'},
 {ex:[['经理走进办公室来了。','jīnglǐ zǒujìn bàngōngshì lái le.','The manager walked into the office.'],['他从行李箱里拿出护照来。','tā cóng xínglixiāng li náchū hùzhào lái.','He took his passport out of the suitcase.'],['请把垃圾带下去。','qǐng bǎ lājī dài xiàqu.','Please take the rubbish downstairs.'],['你什么时候回中国去？','nǐ shénme shíhou huí Zhōngguó qù?','When are you going back to China?'],['我想起来了，密码在我的手机里！','wǒ xiǎng qǐlai le, mìmǎ zài wǒ de shǒujī li!','I remember now — the password is in my phone!']]},
 {p:'Some complements also have <b>figurative meanings</b>: 起来 = to recall (想起来) or to start (下起雨来, it started to rain); 下去 = to keep going (说下去, keep talking); 出来 = to identify (看出来, to tell by looking).'}],
 q:[{q:'You are upstairs and call a friend downstairs to come up:',o:['上来！','上去！','下来！'],a:0,ex:'Upward movement towards you (the speaker) → 上来.'},
 {q:'You are inside the classroom. “He walked in.” = 他走___教室___了。',o:['进 … 来','进 … 去','出 … 来'],a:0,ex:'Movement into the place where the speaker is → 进…来, with the place word in the middle.'},
 {q:'我想___了！(Now I remember!)',o:['起来','下去','出去'],a:0,ex:'想起来 = to recall.'},
 {q:'“Please keep talking” =',o:['请说下去','请说上来','请说出去'],a:0,ex:'下去 after a verb can mean “continue”.'},
 {q:'Which sentence is correct?',o:['我明天回家去','我明天回去家'],a:0,ex:'A place object goes between 回 and 去: 回家去.'}]},
{id:'zh-g12',title:'Potential complements',tt:'可能补语',blocks:[
 {p:'Put <b>得</b> or <b>不</b> between a verb and its result or directional complement to say whether the result <b>can</b> or <b>cannot</b> be achieved: 看懂 (understand by reading) → 看<b>得</b>懂 (can understand) / 看<b>不</b>懂 (can’t understand). In speech 得 is pronounced <b>de</b> and 不 is light: kàn de dǒng, kàn bu dǒng.'},
 {table:{head:['Verb + complement','Can','Cannot','Meaning'],rows:[['看懂','看得懂','看不懂','understand (reading)'],['听清楚','听得清楚','听不清楚','hear clearly'],['找到','找得到','找不到','find'],['吃完','吃得完','吃不完','finish eating'],['回来','回得来','回不来','get back'],['睡着','睡得着','睡不着','fall asleep']]}},
 {key:'V + 得/不 + complement = can / can’t achieve the result. The negative form is much more common. It cannot be used in 把 or 被 sentences.'},
 {ex:[['这篇论文太难了，我看不懂。','zhè piān lùnwén tài nán le, wǒ kàn bu dǒng.','This paper is too difficult — I can’t understand it.'],['老师说得太快，我听不清楚。','lǎoshī shuō de tài kuài, wǒ tīng bu qīngchu.','The teacher speaks too fast; I can’t hear clearly.'],['我找不到护照了！','wǒ zhǎo bu dào hùzhào le!','I can’t find my passport!'],['菜太多了，我们吃不完。','cài tài duō le, wǒmen chī bu wán.','There’s too much food; we can’t finish it.'],['雨下得这么大，你今天晚上回得来吗？','yǔ xià de zhème dà, nǐ jīntiān wǎnshang huí de lái ma?','It’s raining so hard — can you get back tonight?'],['考试以前我紧张得睡不着。','kǎoshì yǐqián wǒ jǐnzhāng de shuì bu zháo.','Before exams I’m so nervous I can’t fall asleep.']]},
 {p:'<b>Potential complement vs 不能:</b> 我听不懂 = I hear it but <b>can’t understand</b> (ability to reach the result); 我不能听 = I’m <b>not allowed</b> / not in a position to listen. Questions: 你看得懂吗？ or 你看得懂看不懂？ Useful fixed expressions: 买不起 (can’t afford), 来不及 (not enough time), 受不了 (can’t stand it), and the everyday 对不起 (sorry).'}],
 q:[{q:'“I can’t understand (what I hear)” =',o:['我听不懂','我不听懂','我没听得懂'],a:0,ex:'Verb + 不 + result: 听不懂.'},
 {q:'房租太贵了，我租___。(I can’t afford it.)',o:['不起','不完','不到'],a:0,ex:'V + 不起 = can’t afford: 租不起, 买不起.'},
 {q:'黑板上的字你看___清楚吗？',o:['得','的','地'],a:0,ex:'Potential complement uses 得: 看得清楚.'},
 {q:'Which sentence is correct?',o:['我把作业做不完','我做不完作业'],a:1,ex:'Potential complements are not used in 把 sentences.'},
 {q:'“Smoking is not allowed here” =',o:['这儿不能抽烟','这儿抽不起烟','这儿抽不完烟'],a:0,ex:'Permission/prohibition → 不能, not a potential complement.'}]}
]};

/* Sound (regular) Form I verbs for the conjugator: [root, past middle vowel, present middle vowel, English] */
const VERBS=[['كتب','a','u','to write'],['درس','a','u','to study'],['ذهب','a','a','to go'],['فتح','a','a','to open'],['شرب','i','a','to drink'],['عمل','i','a','to work, to do'],['جلس','a','i','to sit'],['رجع','a','i','to return'],['فهم','i','a','to understand'],['زرع','a','a','to plant, to grow'],['حصد','a','u','to harvest'],['سمع','i','a','to hear'],['لعب','i','a','to play'],['خرج','a','u','to go out'],['دخل','a','u','to enter'],['شكر','a','u','to thank'],['نجح','a','a','to succeed'],['عرف','a','i','to know'],['طبخ','a','u','to cook'],['ركب','i','a','to ride, to board'],['حمل','a','i','to carry'],['غسل','a','i','to wash'],['نزل','a','i','to go down, to get off'],['حضر','a','u','to attend, to be present'],['رسم','a','u','to draw'],['حفظ','i','a','to memorise, to keep']];
