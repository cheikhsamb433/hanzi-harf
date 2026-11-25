/* Leçons de grammaire coranique (français).
   ex: [référence, explication]  — référence "s:a:w" (un mot) ou "s:a" (un verset entier) ; le texte arabe est lu dans les données.
   key: point à retenir (affiché souligné).  q: quiz {q, o:[...], a:index, ex}.
   AJOUTER LES NOUVELLES LEÇONS À LA FIN. */
const QGRAM=[
{id:'g1',title:'Racine et schème : la clé du vocabulaire',ar:'الجَذْرُ وَالوَزْنُ',blocks:[
 {p:'Presque chaque mot du Coran est construit sur une <b>racine</b> de trois consonnes qui porte l’idée générale. Un <b>schème</b> (wazn) — voyelles, préfixes, lettres doublées — précise le sens : action, agent, lieu, intensité…'},
 {key:'Apprendre une racine, c’est apprendre une famille de mots. Dans l’application, touchez un mot : sa racine est toujours affichée.'},
 {ex:[['48:1:2','fataḥnâ « Nous avons ouvert / accordé une victoire » — verbe, racine ف ت ح'],['48:1:4','fatḥan « une victoire, une ouverture » — nom de la même racine'],['32:28:4','al-fatḥu « la victoire, la décision » — même racine avec l’article']]},
 {p:'La racine <b>ر ح م</b> (miséricorde) donne dans tes sourates : ar-Raḥmân (le Tout Miséricordieux), ar-Raḥîm (le Très Miséricordieux), raḥma (miséricorde), ruḥamâ’ (miséricordieux, pluriel).'},
 {ex:[['55:1:1','ar-Raḥmânu — schème faʿlân : miséricorde immense et débordante'],['32:6:6','ar-Raḥîmu — schème faʿîl : qualité permanente'],['48:29:9','ruḥamâ’u — pluriel de raḥîm : « miséricordieux entre eux »']]}],
 q:[{q:'Quelle est la racine de فَتْحًا (fatḥan) ?',o:['ف ت ح','ف ت ن','ت ح ا'],a:0,ex:'Le tanwîn (-an) et l’alif final ne font pas partie de la racine.'},
 {q:'ٱلرَّحْمَٰن, رَحِيم et رَحْمَة ont…',o:['la même racine','le même schème','le même genre'],a:0,ex:'Racine ر ح م : idée de miséricorde.'},
 {q:'عِلْم (science), عَلِيم (omniscient), ٱلْعَٰلَمِينَ (les mondes) partagent la racine…',o:['ع ل م','ع ل ي','ل م ي'],a:0,ex:'Racine ع ل م : savoir, signe, monde.'}]},

{id:'g2',title:'L’article, les lettres solaires et l’alif de liaison (ٱ)',ar:'أَلْ وَهَمْزَةُ الوَصْلِ',blocks:[
 {p:'ال (al-) rend un nom défini. Devant une <b>lettre solaire</b> (ت ث د ذ ر ز س ش ص ض ط ظ ل ن) le l ne se prononce pas : la lettre suivante est doublée (shadda). Devant une <b>lettre lunaire</b> le l se prononce (sukûn sur le lâm).'},
 {p:'Dans l’écriture du Coran (rasm uthmânî), l’alif de l’article porte souvent un petit signe : <b>ٱ</b> (alif waṣla). Il signifie : « ne prononce pas cet alif quand tu enchaînes avec le mot précédent ».'},
 {key:'ٱ = alif de liaison : muet en enchaînement. Au début de la récitation, on le prononce « a » (article) ou « i » (verbes).'},
 {ex:[['55:1:1','ar-Raḥmân : ر est solaire → l muet, ر doublé'],['55:5:1','ash-shams : ش solaire'],['55:5:2','wal-qamar : ق lunaire → l prononcé'],['56:74:2','bi-smi : l’alif de ٱسْم disparaît dans la liaison']]}],
 q:[{q:'Comment se prononce ٱلشَّمْسُ ?',o:['ash-shamsu','al-shamsu'],a:0,ex:'ش est une lettre solaire.'},
 {q:'Comment se prononce ٱلْقَمَرُ ?',o:['al-qamaru','aq-qamaru'],a:0,ex:'ق est une lettre lunaire.'},
 {q:'Que signifie le signe sur ٱ ?',o:['alif muet en liaison','alif long','hamza obligatoire'],a:0,ex:'C’est la hamzat al-waṣl.'}]},

{id:'g3',title:'Les pronoms attachés (suffixes)',ar:'الضَّمَائِرُ المُتَّصِلَةُ',blocks:[
 {p:'Un pronom peut se coller à la fin d’un nom (possessif : « son, notre »), d’un verbe (complément : « le, nous ») ou d’une préposition (« à lui, pour toi »).'},
 {table:{head:['Suffixe','Sens','Exemple'],rows:[['ـِي / ـنِي','moi, mon','رَبِّي mon Seigneur'],['ـنَا','nous, notre','فَتَحْنَا Nous avons ouvert'],['ـكَ','toi, ton (m.)','لَكَ pour toi'],['ـكُمْ','vous, votre','رَبُّكُمْ votre Seigneur'],['ـكُمَا','vous deux','رَبِّكُمَا votre Seigneur (à vous deux)'],['ـهُ / ـهِ','lui, son','رَحْمَتِهِ Sa miséricorde'],['ـهَا','elle, sa','فِيهَا en elle'],['ـهُمْ / ـهِمْ','eux, leur','إِيمَٰنِهِمْ leur foi']]}},
 {key:'ـهُ devient ـهِ après un i (kasra ou yâ’) : رَحْمَتِهِۦ. Même chose pour ـهُمْ → ـهِمْ.'},
 {ex:[['48:1:3','laka « pour toi » : préposition لِ + كَ'],['55:13:3','rabbikumâ « votre Seigneur (à vous deux) » — les djinns et les humains'],['48:4:11','îmânihim « leur foi » : ـهِمْ après la kasra']]}],
 q:[{q:'Dans رَبِّكُمَا, ـكُمَا signifie…',o:['vous deux','vous (pluriel)','eux deux'],a:0,ex:'Duel de la 2e personne.'},
 {q:'Dans فَتَحْنَا, ـنَا est…',o:['le sujet « nous »','le possessif « notre »','un pluriel'],a:0,ex:'Sur un verbe à l’accompli, ـنَا est le sujet : « Nous avons ouvert ».'},
 {q:'إِيمَٰنِهِمْ = ',o:['leur foi','sa foi','notre foi'],a:0,ex:'ـهِمْ = eux / leur.'}]},

{id:'g4',title:'Le verbe : accompli, inaccompli, impératif',ar:'المَاضِي وَالمُضَارِعُ وَالأَمْرُ',blocks:[
 {p:'L’<b>accompli</b> (mâḍî) exprime une action achevée, souvent traduite au passé ; la personne est marquée par un <b>suffixe</b>. L’<b>inaccompli</b> (muḍâriʿ) exprime le présent ou le futur ; la personne est marquée par un <b>préfixe</b> (أ ن ت ي).'},
 {key:'Accompli = suffixes (خَلَقَ, خَلَقْنَا). Inaccompli = préfixes (يَعْلَمُ, نَعْلَمُ, تُكَذِّبَانِ).'},
 {p:'Dans le Coran, l’accompli décrit souvent un événement futur certain (le Jour dernier) : il est si sûr qu’il est raconté comme déjà arrivé.'},
 {ex:[['32:4:3','khalaqa « Il a créé » — accompli, 3e pers. masc. sing.'],['44:38:2','khalaqnâ « Nous avons créé » — accompli, 1re pers. pluriel'],['55:13:4','tukadhdhibâni « vous (deux) niez » — inaccompli, duel'],['48:11:9','fa-staghfir « demande pardon ! » — impératif'],['56:1:1','idhâ waqaʿati… « quand surviendra… » — accompli après idhâ = futur']]}],
 q:[{q:'يَعْلَمُ est…',o:['un inaccompli','un accompli','un impératif'],a:0,ex:'Préfixe يَـ = inaccompli, 3e pers. masc. sing.'},
 {q:'Dans « إِذَا وَقَعَتِ ٱلْوَاقِعَةُ », le verbe à l’accompli se traduit…',o:['au futur','au passé uniquement'],a:0,ex:'Après إِذَا, l’accompli exprime un futur.'},
 {q:'ٱسْتَغْفِرْ est…',o:['un impératif','un nom','un accompli'],a:0,ex:'« Demande pardon ! »'}]},

{id:'g5',title:'Les formes verbales (I à X)',ar:'أَوْزَانُ الفِعْلِ',blocks:[
 {p:'À partir d’une racine, l’arabe forme jusqu’à dix « formes » verbales. Chaque forme ajoute une nuance. Reconnaître la forme aide à comprendre un verbe jamais vu.'},
 {table:{head:['Forme','Schème','Nuance','Exemple dans tes sourates'],rows:[['I','faʿala','sens de base','خَلَقَ créer, فَتَحَ ouvrir'],['II','faʿʿala','intensif, causatif','عَلَّمَ enseigner, كَذَّبَ traiter de menteur'],['III','fâʿala','action avec / contre quelqu’un','قَاتَلَ combattre'],['IV','afʿala','faire faire, causatif','أَنزَلَ faire descendre, آمَنَ croire'],['V','tafaʿʿala','réfléchi de II','تَذَكَّرَ se rappeler'],['VI','tafâʿala','réciproque, majesté','تَبَارَكَ être béni'],['VIII','iftaʿala','réfléchi, effort','ٱسْتَوَى s’établir, ٱهْتَدَى se guider'],['X','istafʿala','demander, se considérer','ٱسْتَغْفَرَ demander pardon, ٱسْتَكْبَرَ s’enorgueillir']]}},
 {key:'است (ist-) au début d’un verbe = forme X, souvent « demander » : غَفَرَ pardonner → ٱسْتَغْفَرَ demander pardon.'},
 {ex:[['48:4:3','anzala « Il a fait descendre » — forme IV de ن ز ل'],['67:1:1','tabâraka « Béni soit » — forme VI'],['32:4:12','istawâ « Il s’est établi » — forme VIII'],['32:15:15','yastakbirûna « ils s’enorgueillissent » — forme X']]}],
 q:[{q:'ٱسْتَغْفَرَ est de forme…',o:['X','IV','II'],a:0,ex:'Schème istafʿala.'},
 {q:'أَنزَلَ (faire descendre) est de forme…',o:['IV','I','VIII'],a:0,ex:'Schème afʿala, causatif de نَزَلَ (descendre).'},
 {q:'تَبَٰرَكَ est de forme…',o:['VI','V','III'],a:0,ex:'Schème tafâʿala.'}]},

{id:'g6',title:'Les cas et le tanwîn',ar:'الإِعْرَابُ وَالتَّنْوِينُ',blocks:[
 {p:'La voyelle finale d’un nom indique sa fonction : <b>nominatif</b> -u (sujet, attribut), <b>accusatif</b> -a (complément d’objet, après إِنَّ), <b>génitif</b> -i (après une préposition ou dans une annexion).'},
 {p:'Le <b>tanwîn</b> (voyelle doublée : -un, -an, -in) marque un nom <b>indéfini</b>. À l’accusatif, il s’écrit avec un alif : فَتْحًا.'},
 {key:'-u sujet · -a objet · -i après préposition. Voyelle doublée = indéfini (« un, une »).'},
 {ex:[['48:1:4','fatḥan — accusatif indéfini : complément de « Nous avons ouvert »'],['48:1:5','mubînan — adjectif accordé : accusatif indéfini aussi'],['55:1:1','ar-Raḥmânu — nominatif défini'],['56:74:3','rabbika — génitif après بِٱسْمِ (annexion)']]},
 {p:'En pause (fin de verset), la voyelle finale tombe : on lit fatḥâ, mubînâ (l’alif du tanwîn devient un â long), mais ar-Raḥmân.'}],
 q:[{q:'Après une préposition, le nom est au…',o:['génitif (-i)','nominatif (-u)','accusatif (-a)'],a:0,ex:'Ex. بِٱسْمِ : bi-smi.'},
 {q:'فَتْحًا est…',o:['indéfini à l’accusatif','défini au nominatif','au génitif'],a:0,ex:'Tanwîn -an = accusatif indéfini.'},
 {q:'Comment lit-on مُّبِينًا en fin de verset ?',o:['mubînâ','mubînan','mubîn'],a:0,ex:'Le tanwîn -an devient â en pause.'}]},

{id:'g7',title:'L’annexion (iḍâfa) : « le Seigneur des mondes »',ar:'الإِضَافَةُ',blocks:[
 {p:'Deux noms collés forment une <b>annexion</b> : le premier n’a jamais l’article ni le tanwîn, le second est au génitif. C’est l’équivalent de « X de Y ».'},
 {key:'1er nom : sans ال, sans tanwîn, cas variable. 2e nom : toujours au génitif.'},
 {ex:[['32:2','tanzîlu l-kitâbi… min rabbi l-ʿâlamîn : « révélation du Livre… de la part du Seigneur des mondes »'],['56:8','fa-aṣḥâbu l-maymana : « les gens de la droite »'],['55:13:2','âlâ’i rabbikumâ : « les bienfaits de votre Seigneur » — double annexion'],['67:1','biyadihi l-mulk : « dans Sa main (est) la royauté »']]}],
 q:[{q:'Dans أَصْحَٰبُ ٱلْمَيْمَنَةِ, le 2e nom est…',o:['au génitif','au nominatif','à l’accusatif'],a:0,ex:'Le complément du nom est toujours au génitif.'},
 {q:'Le 1er nom d’une annexion peut-il avoir l’article ال ?',o:['Non','Oui'],a:0,ex:'Il est défini par le second nom.'}]},

{id:'g8',title:'Les participes : actif et passif',ar:'اسْمُ الفَاعِلِ وَاسْمُ المَفْعُولِ',blocks:[
 {p:'Le <b>participe actif</b> désigne celui qui fait l’action (forme I : fâʿil ; formes dérivées : préfixe mu- et voyelle i). Le <b>participe passif</b> désigne ce qui subit l’action (forme I : mafʿûl ; formes dérivées : mu- et voyelle a).'},
 {table:{head:['Racine','Participe actif','Participe passif'],rows:[['خ ل ق','خَالِق créateur','مَخْلُوق créé'],['ك ن ن','—','مَكْنُون caché, bien gardé'],['ب ي ن (IV)','مُبِين clair, qui rend clair','—'],['أ م ن (IV)','مُؤْمِن croyant (qui croit)','—'],['ق ر ب (II)','—','مُقَرَّب rapproché']]}},
 {key:'mu-…-i- = celui qui fait (مُؤْمِن). mu-…-a- = celui qui subit (مُقَرَّب). mafʿûl = participe passif de la forme I (مَكْنُون).'},
 {ex:[['56:59:5','al-khâliqûna « les créateurs » — participe actif, pluriel'],['56:23:3','al-maknûn « bien gardé (caché) » — participe passif'],['48:4:7','al-mu’minîna « les croyants » — participe actif forme IV'],['56:11:2','al-muqarrabûna « les rapprochés » — participe passif forme II']]}],
 q:[{q:'مَكْنُون est…',o:['un participe passif','un participe actif','un verbe'],a:0,ex:'Schème mafʿûl.'},
 {q:'مُؤْمِن signifie…',o:['celui qui croit','celui en qui on croit'],a:0,ex:'Participe actif de آمَنَ (IV).'}]},

{id:'g9',title:'Le duel dans Ar-Rahmân',ar:'المُثَنَّى',blocks:[
 {p:'L’arabe a un nombre spécial pour <b>deux</b> : le duel. Nom : -âni (nominatif), -ayni (accusatif/génitif). Verbe à l’inaccompli : -âni. Pronom : -kumâ (vous deux), -humâ (eux deux).'},
 {p:'Ar-Rahmân s’adresse à <b>deux</b> catégories d’êtres responsables : les humains et les djinns. D’où le refrain au duel.'},
 {key:'فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ : « Lequel donc des bienfaits de votre Seigneur (à vous deux) niez-vous (vous deux) ? »'},
 {ex:[['55:13','le refrain : rabbikumâ (vous deux) + tukadhdhibâni (vous deux niez)'],['55:17','rabbu l-mashriqayni wa rabbu l-maghribayn : « Seigneur des deux levants et des deux couchants » (-ayni)'],['55:46:5','jannatâni « deux jardins » (-âni)'],['55:50:2','ʿaynâni « deux sources »']]}],
 q:[{q:'Pourquoi le refrain d’Ar-Rahmân est-il au duel ?',o:['Il s’adresse aux humains et aux djinns','Par style poétique seulement','Il s’adresse à deux prophètes'],a:0,ex:'Voir aussi le verset 33 : « Ô communauté des djinns et des humains ».'},
 {q:'جَنَّتَانِ signifie…',o:['deux jardins','des jardins','un jardin'],a:0,ex:'Terminaison -âni = duel.'}]},

{id:'g10',title:'Les particules essentielles',ar:'الحُرُوفُ',blocks:[
 {table:{head:['Particule','Rôle','Exemple'],rows:[['إِنَّ','« certes » ; le nom qui suit est à l’accusatif','إِنَّا فَتَحْنَا'],['أَنَّ','« que » (+ nom à l’accusatif)','—'],['قَدْ','+ accompli : « déjà, certes »','لَقَدْ رَضِيَ ٱللَّهُ'],['لَمْ','+ inaccompli apocopé = passé nié','لَمْ يُؤْمِن'],['لَنْ','+ subjonctif = futur nié (« ne… jamais »)','لَن تَجِدَ'],['لَا','négation simple, ou prohibition « ne… pas ! »','لَا رَيْبَ فِيهِ'],['إِلَّا','« sauf », ou après négation « ne… que »','—'],['إِذَا','« quand » (futur)','إِذَا وَقَعَتِ']]}},
 {key:'لَمْ يَفْعَلْ = il n’a pas fait (passé). لَنْ يَفْعَلَ = il ne fera jamais (futur).'},
 {ex:[['48:1:1','innâ = إِنَّ + نَا « certes Nous »'],['48:18:1','la-qad = لَ (insistance) + قَدْ : « Allah a certes agréé »'],['48:23:8','wa lan tajida : « et tu ne trouveras jamais »'],['32:2:3','lâ rayba fîhi : « aucun doute en lui »']]}],
 q:[{q:'لَنْ + verbe exprime…',o:['un futur nié','un passé nié','un ordre'],a:0,ex:'« Ne… jamais ».'},
 {q:'لَمْ يُؤْمِنْ se traduit…',o:['il n’a pas cru','il ne croira jamais','ne crois pas !'],a:0,ex:'لَمْ + apocopé = passé nié.'},
 {q:'Après إِنَّ, le nom est…',o:['à l’accusatif','au nominatif','au génitif'],a:0,ex:'إِنَّ ٱللَّهَ… (Allâha).'}]},

{id:'g11',title:'Le serment dans le Coran',ar:'القَسَمُ',blocks:[
 {p:'Allah jure souvent par Ses créatures pour attirer l’attention sur leur grandeur et sur la vérité annoncée : وَ (wa) ou بِـ + génitif, ou la formule <b>فَلَآ أُقْسِمُ</b>.'},
 {p:'Dans <b>فَلَآ أُقْسِمُ</b> (56:75), le لَا n’est pas une négation du serment : selon la majorité des exégètes, c’est un lâ d’insistance (« Non ! Je jure… »). Le sens est : « Je jure par les positions des étoiles ».'},
 {key:'Le serment annonce une vérité importante : cherchez la « réponse du serment » (jawâb al-qasam) qui suit — ici : « c’est un Coran noble » (56:77).'},
 {ex:[['56:75','falâ uqsimu bi-mawâqiʿi n-nujûm'],['56:76','wa innahu la-qasamun law taʿlamûna ʿaẓîm : « et c’est un serment immense, si vous saviez »'],['56:77','innahu la-qur’ânun karîm : la réponse du serment'],['44:2','wa l-kitâbi l-mubîn : « Par le Livre explicite ! » (wa du serment + génitif)']]}],
 q:[{q:'Dans وَٱلْكِتَٰبِ ٱلْمُبِينِ (44:2), pourquoi le génitif (-i) ?',o:['Après le wâw du serment','Parce que c’est un sujet','Parce que c’est un duel'],a:0,ex:'Le wa du serment fonctionne comme une préposition.'},
 {q:'Quelle est la réponse du serment de 56:75 ?',o:['« C’est un Coran noble »','« Les positions des étoiles »','« Si vous saviez »'],a:0,ex:'56:77 : إِنَّهُۥ لَقُرْءَانٌ كَرِيمٌ.'}]},

{id:'g12',title:'Lire l’écriture coranique (rasm uthmânî)',ar:'الرَّسْمُ العُثْمَانِيُّ',blocks:[
 {p:'Le Coran utilise des signes absents de l’arabe courant. Les connaître évite les fautes de récitation.'},
 {table:{head:['Signe','Nom','Lecture'],rows:[['ـٰ (petit alif)','alif suscrit','â long : ٱلرَّحْمَٰن = ar-Raḥmân'],['ـۥ / ـۦ','petit wâw / petit yâ’','allonger : رَحْمَتِهِۦ = raḥmatihî'],['ـۢ (petit mîm)','iqlâb','n prononcé m devant ب : مِنۢ بَعْدِ = mim baʿdi'],['ـٓ (madda)','allongement','allonger 4 à 6 temps : جَآءَ'],['ۚ ۖ ۗ','signes de pause','ۚ pause permise ; ۖ continuer de préférence ; ۗ s’arrêter de préférence'],['ۛ','pause d’embrassement','s’arrêter à l’un des deux, pas aux deux']]}},
 {key:'Un petit alif (ـٰ) se lit toujours â long, même sans alif écrit en entier.'},
 {ex:[['55:1:1','ar-Raḥmân : petit alif après le mîm'],['48:25:30','raḥmatihî : petit yâ’ = i long'],['67:1:1','tabâraka : petit alif']]}],
 q:[{q:'Comment lit-on ٱلرَّحْمَٰنُ ?',o:['ar-Raḥmânu','ar-Raḥmanu','al-Raḥmânu'],a:0,ex:'Petit alif = â ; ر solaire.'},
 {q:'Le petit mîm (ۢ) indique…',o:['que le n se prononce m','une pause','un allongement'],a:0,ex:'C’est l’iqlâb, devant la lettre ب.'}]}
];
