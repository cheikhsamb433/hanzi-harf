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
 {q:'قَالُوا means:',o:['we said','they (m) said','I said'],a:1,ex:'‑ū is a vowel ending, so the long ā stays. “We said” = قُلْنَا.'}]}
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
 {q:'“He listens to music while running” =',o:['他一边跑步一边听音乐','他跑步一边听音乐一边','他一边跑步听音乐'],a:0,ex:'一边 V1 一边 V2.'}]}
]};

/* Sound (regular) Form I verbs for the conjugator: [root, past middle vowel, present middle vowel, English] */
const VERBS=[['كتب','a','u','to write'],['درس','a','u','to study'],['ذهب','a','a','to go'],['فتح','a','a','to open'],['شرب','i','a','to drink'],['عمل','i','a','to work, to do'],['جلس','a','i','to sit'],['رجع','a','i','to return'],['فهم','i','a','to understand'],['زرع','a','a','to plant, to grow'],['حصد','a','u','to harvest'],['سمع','i','a','to hear'],['لعب','i','a','to play'],['خرج','a','u','to go out'],['دخل','a','u','to enter'],['شكر','a','u','to thank'],['نجح','a','a','to succeed'],['عرف','a','i','to know'],['طبخ','a','u','to cook'],['ركب','i','a','to ride, to board']];
