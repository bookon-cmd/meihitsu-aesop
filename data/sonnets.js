/**
 * 名筆 (MEIHITSU) - 作品集データ
 * コレクション第1弾：シェイクスピアのソネット全154篇 (Shakespeare's Sonnets)
 * 
 * 構造:
 * collections: [{
 *   id, title, author, lang, credit,
 *   works: [{ no, title_ja, lines: [{ text, ja }], audio: { url, reader, duration } | null }]
 * }]
 */
window.COLLECTIONS = [
{
  "id": "shakespeare-sonnets",
  "title": "シェイクスピアのソネット全154篇",
  "author": "ウィリアム・シェイクスピア",
  "lang": "en",
  "credit": "テキスト：パブリックドメイン (Project Gutenberg) / 朗読：LibriVox (Public Domain) / 和訳：オリジナル (名筆)",
  "works": [
    {
      "no": 1,
      "title_ja": "美しき者よ、その命の種を残せ",
      "lines": [
        {
          "text": "From fairest creatures we desire increase,",
          "ja": "最も美しき者たちよ、その命が増えることを誰もが望む"
        },
        {
          "text": "That thereby beauty’s rose might never die,",
          "ja": "そうすれば美の薔薇は決して滅びることなく"
        },
        {
          "text": "But as the riper should by time decease,",
          "ja": "熟した者が時の流れに散りゆくときも"
        },
        {
          "text": "His tender heir might bear his memory:",
          "ja": "幼き後継者がその面影を永遠に受け継いでゆくのだから。"
        },
        {
          "text": "But thou, contracted to thine own bright eyes,",
          "ja": "だがお前は、己の輝く瞳ばかりに恋焦がれ"
        },
        {
          "text": "Feed’st thy light’s flame with self-substantial fuel,",
          "ja": "自らの命の炎を己の身で燃やし尽くし"
        },
        {
          "text": "Making a famine where abundance lies,",
          "ja": "豊かな実りある場所に飢饉をもたらしている。"
        },
        {
          "text": "Thyself thy foe, to thy sweet self too cruel:",
          "ja": "自分自身に対して冷酷な敵となり、己を痛めつけているのだ。"
        },
        {
          "text": "Thou that art now the world’s fresh ornament,",
          "ja": "今こそお前はこの世の鮮やかな飾りであり"
        },
        {
          "text": "And only herald to the gaudy spring,",
          "ja": "誇らしき春の訪れを告げる唯一の使者であるというのに"
        },
        {
          "text": "Within thine own bud buriest thy content,",
          "ja": "その蕾の中に我が身の宝を埋め隠してしまい"
        },
        {
          "text": "And tender churl mak’st waste in niggarding:",
          "ja": "美しき出し惜しみをして、かえって無駄に浪費している。"
        },
        {
          "text": "Pity the world, or else this glutton be,",
          "ja": "この世を憐れみなさい。さもなくば貪欲な墓場と共に"
        },
        {
          "text": "To eat the world’s due, by the grave and thee.",
          "ja": "この世に遺すべき美しい宝を、独り占めして食い尽くすことになるのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc206_2008_librivox/spc206_sonnet1_gd.mp3",
        "reader": "Garth Davies",
        "duration": "1:24"
      }
    },
    {
      "no": 2,
      "title_ja": "四十の冬がお前の額を刻むとき",
      "lines": [
        {
          "text": "When forty winters shall besiege thy brow,",
          "ja": "四十の冬がお前の美しい額に塹壕を掘り"
        },
        {
          "text": "And dig deep trenches in thy beauty’s field,",
          "ja": "若々しき肌に深い畝を刻み込むとき"
        },
        {
          "text": "Thy youth’s proud livery so gazed on now,",
          "ja": "今誰もが見惚れるその誇らしき若さの装いは"
        },
        {
          "text": "Will be a tatter’d weed of small worth held:",
          "ja": "誰からも省みられない、ぼろ布のようになってしまうだろう。"
        },
        {
          "text": "Then being asked, where all thy beauty lies,",
          "ja": "その時「お前の美しさはどこへ行ったのか"
        },
        {
          "text": "Where all the treasure of thy lusty days;",
          "ja": "あの輝かしき青春の宝はどこにあるのか」と問われたら"
        },
        {
          "text": "To say, within thine own deep sunken eyes,",
          "ja": "己の窪んだ瞳の奥にあると答えるのは"
        },
        {
          "text": "Were an all-eating shame, and thriftless praise.",
          "ja": "身を滅ぼす恥辱であり、空しき自己満足にすぎない。"
        },
        {
          "text": "How much more praise deserv’d thy beauty’s use,",
          "ja": "だがもし「我が愛する子が私の美を受け継ぎ"
        },
        {
          "text": "If thou couldst answer ‘This fair child of mine",
          "ja": "我が老いの勘定をきれいに清算してくれた」と答えられたなら"
        },
        {
          "text": "Shall sum my count, and make my old excuse,’",
          "ja": "その子の美しさがお前の美の正しさを証明し"
        },
        {
          "text": "Proving his beauty by succession thine!",
          "ja": "「老いた私の中に、かつての私が新しく生きている」と言えるはずだ。"
        },
        {
          "text": "This were to be new made when thou art old,",
          "ja": "それは老いて冷え切ったお前の血潮を"
        },
        {
          "text": "And see thy blood warm when thou feel’st it cold.",
          "ja": "もう一度温かく蘇らせることなのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc206_2008_librivox/spc206_sonnet2_gd.mp3",
        "reader": "Garth Davies",
        "duration": "1:25"
      }
    },
    {
      "no": 3,
      "title_ja": "鏡を見つめ自らの姿に問いかけよ",
      "lines": [
        {
          "text": "Look in thy glass and tell the face thou viewest",
          "ja": "鏡を見つめ、そこに映る顔に告げるがよい"
        },
        {
          "text": "Now is the time that face should form another;",
          "ja": "「今こそその顔が、もう一つの新しい顔を創るべき時だ」と。"
        },
        {
          "text": "Whose fresh repair if now thou not renewest,",
          "ja": "もし今、その姿を新しく生まれ変わらせないなら"
        },
        {
          "text": "Thou dost beguile the world, unbless some mother.",
          "ja": "お前はこの世を欺き、母となるべき誰かから祝福を奪うことになる。"
        },
        {
          "text": "For where is she so fair whose unear’d womb",
          "ja": "お前の処女地を耕し、豊かな実りをもたらすことを"
        },
        {
          "text": "Disdains the tillage of thy husbandry?",
          "ja": "拒むほど高慢な乙女がこの世のどこにいようか。"
        },
        {
          "text": "Or who is he so fond will be the tomb,",
          "ja": "あるいは、自らの墓場となることを望み"
        },
        {
          "text": "Of his self-love to stop posterity?",
          "ja": "後世に何も残さぬ愚かな自己愛に溺れる男がどこにいようか。"
        },
        {
          "text": "Thou art thy mother’s glass and she in thee",
          "ja": "お前は母の鏡であり、母はお前を見るたびに"
        },
        {
          "text": "Calls back the lovely April of her prime;",
          "ja": "自らの青春の愛らしき四月を思い出すのだ。"
        },
        {
          "text": "So thou through windows of thine age shalt see,",
          "ja": "同じようにお前も、老いの窓から振り返るとき"
        },
        {
          "text": "Despite of wrinkles this thy golden time.",
          "ja": "皺だらけの我が身の中に、輝く黄金の若さを見ることだろう。"
        },
        {
          "text": "But if thou live, remember’d not to be,",
          "ja": "だがもし、誰の記憶にも残らず消え去ることを望むなら"
        },
        {
          "text": "Die single and thine image dies with thee.",
          "ja": "独り身のまま死にゆき、その面影もろとも灰となれ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc206_2008_librivox/spc206_sonnet3_gd.mp3",
        "reader": "Garth Davies",
        "duration": "1:22"
      }
    },
    {
      "no": 4,
      "title_ja": "使い切らぬ美の浪費者よ",
      "lines": [
        {
          "text": "Unthrifty loveliness, why dost thou spend",
          "ja": "自らの美を出し惜しみする無駄遣い人よ、なぜお前は"
        },
        {
          "text": "Upon thyself thy beauty’s legacy?",
          "ja": "自らに受け継がれた美の遺産を独り占めにするのか。"
        },
        {
          "text": "Nature’s bequest gives nothing, but doth lend,",
          "ja": "自然の恵みとは無償で与えられるものではなく、貸し出されるもの"
        },
        {
          "text": "And being frank she lends to those are free:",
          "ja": "自然は寛大であるがゆえに、自らも寛大な者にのみ貸しを与えるのだ。"
        },
        {
          "text": "Then, beauteous niggard, why dost thou abuse",
          "ja": "それなのに美しき吝嗇家よ、なぜお前は"
        },
        {
          "text": "The bounteous largess given thee to give?",
          "ja": "人に与えるために託された大いなる恵みを乱用するのか。"
        },
        {
          "text": "Profitless usurer, why dost thou use",
          "ja": "利息を取らぬ高利貸しのように、莫大な富を抱え込みながら"
        },
        {
          "text": "So great a sum of sums, yet canst not live?",
          "ja": "なぜ本当の豊かさを生きることができないのか。"
        },
        {
          "text": "For having traffic with thyself alone,",
          "ja": "自分自身とばかり取引を重ねて"
        },
        {
          "text": "Thou of thyself thy sweet self dost deceive:",
          "ja": "甘やかな自らの存在を自ら騙し取っているだけではないか。"
        },
        {
          "text": "Then how when nature calls thee to be gone,",
          "ja": "やがて避けがたい死の清算が訪れたとき"
        },
        {
          "text": "What acceptable audit canst thou leave?",
          "ja": "お前はいかなる言い訳を帳簿に残せるというのか。"
        },
        {
          "text": "Thy unused beauty must be tombed with thee,",
          "ja": "お前の使わなかった美しさは、お前と共に墓に眠るだけだ。"
        },
        {
          "text": "Which, used, lives th’ executor to be.",
          "ja": "だが命を継ぐなら、お前の美は遺言執行人として永遠に生き続ける。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc207_2009_librivox/spc207_sonnet4_gd.mp3",
        "reader": "Garth Davies",
        "duration": "1:18"
      }
    },
    {
      "no": 5,
      "title_ja": "時が美を織りなし時が奪う",
      "lines": [
        {
          "text": "Those hours, that with gentle work did frame",
          "ja": "かつて優しい手つきで美しい姿を形づくり"
        },
        {
          "text": "The lovely gaze where every eye doth dwell,",
          "ja": "あらゆる人の目を釘付けにした穏やかな時が"
        },
        {
          "text": "Will play the tyrants to the very same",
          "ja": "やがて暴君へと豹変し、自ら創り出した美しさを"
        },
        {
          "text": "And that unfair which fairly doth excel;",
          "ja": "容赦なく破壊し、見る影もなく奪い去っていく。"
        },
        {
          "text": "For never-resting time leads summer on",
          "ja": "時は休みなく夏を過酷な冬へと追い立て"
        },
        {
          "text": "To hideous winter, and confounds him there;",
          "ja": "実り豊かな大地を雪と霜で凍てつかせ"
        },
        {
          "text": "Sap checked with frost, and lusty leaves quite gone,",
          "ja": "葉を散らし、樹々を枯らし、美しさを雪の下に埋め尽くし"
        },
        {
          "text": "Beauty o’er-snowed and bareness every where:",
          "ja": "かつての青々とした命をすべて奪い去る。"
        },
        {
          "text": "Then were not summer’s distillation left,",
          "ja": "だがもし、夏の花から甘やかな香りを蒸留し"
        },
        {
          "text": "A liquid prisoner pent in walls of glass,",
          "ja": "ガラスの小瓶の中にその精髄を閉じ込めておいたなら"
        },
        {
          "text": "Beauty’s effect with beauty were bereft,",
          "ja": "たとえ花そのものが冬の寒さに枯れ果てようとも"
        },
        {
          "text": "Nor it, nor no remembrance what it was:",
          "ja": "その芳しい命は失われず、小瓶の中で生き続ける。"
        },
        {
          "text": "But flowers distill’d, though they with winter meet,",
          "ja": "冬に咲く花は形こそ失われてしまうが"
        },
        {
          "text": "Leese but their show; their substance still lives sweet.",
          "ja": "その香りの精髄は永遠に甘く香り続けるのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc207_2009_librivox/spc207_sonnet5_gd.mp3",
        "reader": "Garth Davies",
        "duration": "1:19"
      }
    },
    {
      "no": 6,
      "title_ja": "冬の荒廃がお前を凍てつかせる前に",
      "lines": [
        {
          "text": "Then let not winter’s ragged hand deface,",
          "ja": "だから冬の荒々しき手が、お前の甘やかな夏を"
        },
        {
          "text": "In thee thy summer, ere thou be distill’d:",
          "ja": "枯らし尽くしてしまう前に、その命の香りを蒸留しなさい。"
        },
        {
          "text": "Make sweet some vial; treasure thou some place",
          "ja": "美の小瓶を満たし、美しい宝を納める場所を作り"
        },
        {
          "text": "With beauty’s treasure ere it be self-kill’d.",
          "ja": "お前の美しさが消え去る前に、自らの命を増やしなさい。"
        },
        {
          "text": "That use is not forbidden usury,",
          "ja": "それは決して不当な利息などではない"
        },
        {
          "text": "Which happies those that pay the willing loan;",
          "ja": "利息を喜んで支払う者に富を貸し出すようなものだ。"
        },
        {
          "text": "That’s for thyself to breed another thee,",
          "ja": "お前がもう一人のお前を生み出し、十倍の命を残すなら"
        },
        {
          "text": "Or ten times happier, be it ten for one;",
          "ja": "十人の我が子が生まれれば、幸福は十倍にも膨らむ。"
        },
        {
          "text": "Ten times thyself were happier than thou art,",
          "ja": "もし十人のお前が、今のお前を写し出すなら"
        },
        {
          "text": "If ten of thine ten times refigur’d thee:",
          "ja": "死神がお前を奪おうとしたとて、一体何ができようか。"
        },
        {
          "text": "Then what could death do if thou shouldst depart,",
          "ja": "お前は我が子たちの中に生き続け、死の力を笑い飛ばせるのだから。"
        },
        {
          "text": "Leaving thee living in posterity?",
          "ja": "頑なな心を捨てなさい。"
        },
        {
          "text": "Be not self-will’d, for thou art much too fair",
          "ja": "お前はあまりに美しく、"
        },
        {
          "text": "To be death’s conquest and make worms thine heir.",
          "ja": "死神の餌食となり、虫たちの遺産となるには惜しすぎるのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc207_2009_librivox/spc207_sonnet6_gd.mp3",
        "reader": "Garth Davies",
        "duration": "1:20"
      }
    },
    {
      "no": 7,
      "title_ja": "東の空に昇る太陽のように",
      "lines": [
        {
          "text": "Lo! in the orient when the gracious light",
          "ja": "見よ、恵みの光を放つ太陽が東の空に頭を上げるとき"
        },
        {
          "text": "Lifts up his burning head, each under eye",
          "ja": "地上にあるすべての目は敬意を込めて見上げ"
        },
        {
          "text": "Doth homage to his new-appearing sight,",
          "ja": "新しく昇りゆく光の王にひれ伏し"
        },
        {
          "text": "Serving with looks his sacred majesty;",
          "ja": "その神々しき輝きに心からの祈りを捧げる。"
        },
        {
          "text": "And having climb’d the steep-up heavenly hill,",
          "ja": "太陽が急な天の丘を登り詰め"
        },
        {
          "text": "Resembling strong youth in his middle age,",
          "ja": "力強い壮年のような正午の頂点に達するときも"
        },
        {
          "text": "Yet mortal looks adore his beauty still,",
          "ja": "人々の目はその黄金の歩みを讃え"
        },
        {
          "text": "Attending on his golden pilgrimage:",
          "ja": "眩いばかりの美しさに従い続ける。"
        },
        {
          "text": "But when from highmost pitch, with weary car,",
          "ja": "だが太陽が疲れ果て、弱々しき車輪を軋ませて"
        },
        {
          "text": "Like feeble age, he reeleth from the day,",
          "ja": "夕暮れの西の空へと滑り落ちていくとき"
        },
        {
          "text": "The eyes, ’fore duteous, now converted are",
          "ja": "かつて敬虔に見上げていた人々の目は背けられ"
        },
        {
          "text": "From his low tract, and look another way:",
          "ja": "沈みゆく光を見捨てて、別の場所へと去っていく。"
        },
        {
          "text": "So thou, thyself outgoing in thy noon:",
          "ja": "お前もまた同じだ。正午の若さを誇っていようとも"
        },
        {
          "text": "Unlook’d, on diest unless thou get a son.",
          "ja": "もし子を残さぬなら、誰にも見守られずに黄昏の中に消えてゆくのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 8,
      "title_ja": "音楽を聴いてなぜ悲しむのか",
      "lines": [
        {
          "text": "Music to hear, why hear’st thou music sadly?",
          "ja": "お前自身が音楽のような美しさであるのに、なぜ音楽を聴いて悲しむのか。"
        },
        {
          "text": "Sweets with sweets war not, joy delights in joy:",
          "ja": "甘美なものは甘美なものを愛し、喜びは喜びに心を開くはずなのに。"
        },
        {
          "text": "Why lov’st thou that which thou receiv’st not gladly,",
          "ja": "なぜ嬉しくもない不協和音を好んで聴き"
        },
        {
          "text": "Or else receiv’st with pleasure thine annoy?",
          "ja": "自らを苛むような調べを快く受け入れるのか。"
        },
        {
          "text": "If the true concord of well-tuned sounds,",
          "ja": "調和の取れた弦の重なりが放つ完璧な響きが"
        },
        {
          "text": "By unions married, do offend thine ear,",
          "ja": "お前の耳を優しく責めているのだとしたら"
        },
        {
          "text": "They do but sweetly chide thee, who confounds",
          "ja": "それは弦たちが一つに溶け合って奏でる家族の調べを"
        },
        {
          "text": "In singleness the parts that thou shouldst bear.",
          "ja": "お前が独り身のままで壊しているからに他ならない。"
        },
        {
          "text": "Mark how one string, sweet husband to another,",
          "ja": "見よ、一本の弦が寄り添う別の弦と手を取り合い"
        },
        {
          "text": "Strikes each in each by mutual ordering;",
          "ja": "互いに響き合って一つの調べを生み出しているのを。"
        },
        {
          "text": "Resembling sire and child and happy mother,",
          "ja": "それは父と子と幸福な母が手を取り合い"
        },
        {
          "text": "Who, all in one, one pleasing note do sing:",
          "ja": "一つの美しい歌を声を揃えて歌っているかのようだ。"
        },
        {
          "text": "Whose speechless song being many, seeming one,",
          "ja": "声を持たぬ弦たちの歌は、一つに溶け合ってお前に歌いかける、"
        },
        {
          "text": "Sings this to thee: ‘Thou single wilt prove none.’",
          "ja": "「独り身でいるお前は、この世にとって『無』に等しい」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 9,
      "title_ja": "未亡人の涙を恐れて独り身でいるのか",
      "lines": [
        {
          "text": "Is it for fear to wet a widow’s eye,",
          "ja": "残された妻が濡らす涙を恐れるあまりに"
        },
        {
          "text": "That thou consum’st thyself in single life?",
          "ja": "お前は独り身のまま人生を浪費しているのか。"
        },
        {
          "text": "Ah! if thou issueless shalt hap to die,",
          "ja": "ああ、もしお前が子を持たずにこの世を去るならば"
        },
        {
          "text": "The world will wail thee like a makeless wife;",
          "ja": "世界中が夫を失った未亡人のように嘆き悲しむだろう。"
        },
        {
          "text": "The world will be thy widow and still weep",
          "ja": "世界こそがお前の未亡人となり、涙を流すのだ"
        },
        {
          "text": "That thou no form of thee hast left behind,",
          "ja": "お前が自らの面影を誰にも遺さなかったことを。"
        },
        {
          "text": "When every private widow well may keep",
          "ja": "世の未亡人たちは、亡き夫の子を見つめることで"
        },
        {
          "text": "By children’s eyes, her husband’s shape in mind:",
          "ja": "夫の面影を心に留め、悲しみを癒やすことができるのに。"
        },
        {
          "text": "Look! what an unthrift in the world doth spend",
          "ja": "見よ、浪費家が使い果たした富であっても"
        },
        {
          "text": "Shifts but his place, for still the world enjoys it;",
          "ja": "金は持ち手を変えて世の中を巡り、失われはしない。"
        },
        {
          "text": "But beauty’s waste hath in the world an end,",
          "ja": "だが美しさを浪費して子孫を残さないなら"
        },
        {
          "text": "And kept unused the user so destroys it.",
          "ja": "その美はこの世から消滅し、二度と戻らない。"
        },
        {
          "text": "No love toward others in that bosom sits",
          "ja": "他者を愛する心など、その胸には宿っていないのだ"
        },
        {
          "text": "That on himself such murd’rous shame commits.",
          "ja": "己自身に対してそれほど残酷な恥辱をもたらす者には。"
        }
      ],
      "audio": null
    },
    {
      "no": 10,
      "title_ja": "誰をも愛さぬ罪深き心よ",
      "lines": [
        {
          "text": "For shame! deny that thou bear’st love to any,",
          "ja": "恥を知りなさい。誰をも愛していないと白状するがよい"
        },
        {
          "text": "Who for thyself art so unprovident.",
          "ja": "己自身に対してそれほど無分別であるお前には。"
        },
        {
          "text": "Grant, if thou wilt, thou art belov’d of many,",
          "ja": "多くの人々がお前を心から愛しているというのに"
        },
        {
          "text": "But that thou none lov’st is most evident:",
          "ja": "お前は誰の愛にも応えようとしないことがあまりに明白だ。"
        },
        {
          "text": "For thou art so possess’d with murderous hate,",
          "ja": "お前は破滅的な憎悪に心を奪われ"
        },
        {
          "text": "That ’gainst thyself thou stick’st not to conspire,",
          "ja": "己の身を滅ぼすことばかり企てている。"
        },
        {
          "text": "Seeking that beauteous roof to ruinate",
          "ja": "本来ならば修復し美しく保つべき"
        },
        {
          "text": "Which to repair should be thy chief desire.",
          "ja": "その気品ある館を、自らの手で崩壊させようとしているのだ。"
        },
        {
          "text": "O! change thy thought, that I may change my mind:",
          "ja": "ああ、その冷たき考えを改めなさい、そうすれば私の心も和らぐ。"
        },
        {
          "text": "Shall hate be fairer lodg’d than gentle love?",
          "ja": "憎しみが愛よりも優しい住処を持つことなどあってよいのか。"
        },
        {
          "text": "Be, as thy presence is, gracious and kind,",
          "ja": "その美しい外見のように、心もまた優しく気品に満ちた者であれ"
        },
        {
          "text": "Or to thyself at least kind-hearted prove:",
          "ja": "少なくとも自分自身に対して、もっと慈しみ深くありなさい。"
        },
        {
          "text": "Make thee another self for love of me,",
          "ja": "もう一人の自分を創り出しなさい、私への愛のために"
        },
        {
          "text": "That beauty still may live in thine or thee.",
          "ja": "お前の美しさが、お前の子の中に永遠に生き続けるように。"
        }
      ],
      "audio": null
    },
    {
      "no": 11,
      "title_ja": "衰えゆく速さと同じ速さで命を継げ",
      "lines": [
        {
          "text": "As fast as thou shalt wane, so fast thou grow’st,",
          "ja": "お前が老い衰えてゆくその速さと同じ速さで"
        },
        {
          "text": "In one of thine, from that which thou departest;",
          "ja": "お前の子はお前の若さを受け継いで育ってゆく。"
        },
        {
          "text": "And that fresh blood which youngly thou bestow’st,",
          "ja": "お前の身体から去りゆく若き日の温かい血潮は"
        },
        {
          "text": "Thou mayst call thine when thou from youth convertest,",
          "ja": "老いたお前を再び「我が子」という形で若返らせるのだ。"
        },
        {
          "text": "Herein lives wisdom, beauty, and increase;",
          "ja": "ここにこそ知恵があり、美があり、命の繁栄がある。"
        },
        {
          "text": "Without this folly, age, and cold decay:",
          "ja": "これなくしては、ただ狂気と老いと冷たき死の滅びがあるのみだ。"
        },
        {
          "text": "If all were minded so, the times should cease",
          "ja": "もし誰もが子を残さぬなら、時はたちまち止まり"
        },
        {
          "text": "And threescore year would make the world away.",
          "ja": "わずか六十年で人類はこの地上から絶滅してしまうだろう。"
        },
        {
          "text": "Let those whom nature hath not made for store,",
          "ja": "不格好で粗野な、美しき価値を持たぬ者たちこそ"
        },
        {
          "text": "Harsh, featureless, and rude, barrenly perish:",
          "ja": "子を残さず不毛のまま消え去ればよい。"
        },
        {
          "text": "Look, whom she best endow’d, she gave thee more;",
          "ja": "だが自然は、お前に最も豊かな恵みを与えたのだから"
        },
        {
          "text": "Which bounteous gift thou shouldst in bounty cherish:",
          "ja": "お前はその贈り物を感謝と共に増やさねばならない。"
        },
        {
          "text": "She carv’d thee for her seal, and meant thereby,",
          "ja": "自然はお前を自らの最高傑作の印章として刻んだのだ"
        },
        {
          "text": "Thou shouldst print more, not let that copy die.",
          "ja": "その型を壊さず、もっと多くの版を押し出させるために。"
        }
      ],
      "audio": null
    },
    {
      "no": 12,
      "title_ja": "時計が時を刻むのを見るとき",
      "lines": [
        {
          "text": "When I do count the clock that tells the time,",
          "ja": "時計の針が刻一刻と時を数え進むのを見つめ"
        },
        {
          "text": "And see the brave day sunk in hideous night;",
          "ja": "眩い昼の光が恐ろしい漆黒の夜へと沈むのを見るとき"
        },
        {
          "text": "When I behold the violet past prime,",
          "ja": "かつて咲き誇っていた菫の花が色褪せ枯れ果て"
        },
        {
          "text": "And sable curls, all silvered o’er with white;",
          "ja": "黒々としていた若き巻き毛が、銀色の白髪で覆われるのを見るとき"
        },
        {
          "text": "When lofty trees I see barren of leaves,",
          "ja": "かつて家畜たちを夏の猛暑から守った大木が"
        },
        {
          "text": "Which erst from heat did canopy the herd,",
          "ja": "すっかり葉を落とし、裸の梢を寒空にさらすのを見るとき"
        },
        {
          "text": "And summer’s green all girded up in sheaves,",
          "ja": "夏の緑が刈り取られて束ねられ"
        },
        {
          "text": "Borne on the bier with white and bristly beard,",
          "ja": "白い剛毛の髭を蓄えた棺桶のように荷車に積まれるのを見るとき"
        },
        {
          "text": "Then of thy beauty do I question make,",
          "ja": "私は君の美しさに思いを馳せずにはいられない"
        },
        {
          "text": "That thou among the wastes of time must go,",
          "ja": "君の美もまた、容赦なき時の破壊の中へと呑み込まれてゆくのだと。"
        },
        {
          "text": "Since sweets and beauties do themselves forsake",
          "ja": "あらゆる甘美な若さの美は自ら散りゆき"
        },
        {
          "text": "And die as fast as they see others grow;",
          "ja": "他者が育ちゆくのを眺めながら、自ら死へと向かっていく。"
        },
        {
          "text": "And nothing ’gainst Time’s scythe can make defence",
          "ja": "時の大鎌から身を守る術など、この世のどこにもない"
        },
        {
          "text": "Save breed, to brave him when he takes thee hence.",
          "ja": "ただ一つ、我が子を残して時に立ち向かうこと以外には。"
        }
      ],
      "audio": null
    },
    {
      "no": 13,
      "title_ja": "愛する人よ、自らを滅ぼしてはならぬ",
      "lines": [
        {
          "text": "O! that you were your self; but, love you are",
          "ja": "ああ、君がいつまでも君自身であってくれたなら。"
        },
        {
          "text": "No longer yours, than you yourself here live:",
          "ja": "だが愛する人よ"
        },
        {
          "text": "Against this coming end you should prepare,",
          "ja": "君が今ここに生きているのは、君一代限りの借り物にすぎない。"
        },
        {
          "text": "And your sweet semblance to some other give:",
          "ja": "避けがたい死の訪れに備え、君自身を準備しなければならない"
        },
        {
          "text": "So should that beauty which you hold in lease",
          "ja": "その甘やかな姿を、別の誰かに託して残すことによって。"
        },
        {
          "text": "Find no determination; then you were",
          "ja": "そうすれば、君が借り受けたその比類なき美しさは"
        },
        {
          "text": "Yourself again, after yourself’s decease,",
          "ja": "決して終わりを迎えることなく、君は再び生き続ける。"
        },
        {
          "text": "When your sweet issue your sweet form should bear.",
          "ja": "君の肉体が冷たく朽ち果てようとも"
        },
        {
          "text": "Who lets so fair a house fall to decay,",
          "ja": "君の甘やかな面影は我が子の中に息づき続けるのだから。"
        },
        {
          "text": "Which husbandry in honour might uphold,",
          "ja": "これほど美しき館を、荒れ果てるがままに放置し"
        },
        {
          "text": "Against the stormy gusts of winter’s day",
          "ja": "風雨の吹きすさぶ冬の嵐に晒して崩壊させようとする者が"
        },
        {
          "text": "And barren rage of death’s eternal cold?",
          "ja": "一体この世のどこにいようか。知恵ある者なら誰が許そうか。"
        },
        {
          "text": "O! none but unthrifts. Dear my love, you know,",
          "ja": "浪費を捨てなさい、愛する人よ。君にはかつて父がいた"
        },
        {
          "text": "You had a father: let your son say so.",
          "ja": "同じように君の子にも、「私には父がいる」と言わせるがよい。"
        }
      ],
      "audio": null
    },
    {
      "no": 14,
      "title_ja": "星占いから未来を知るのではなく",
      "lines": [
        {
          "text": "Not from the stars do I my judgement pluck;",
          "ja": "私は天空の星占いから判断を下す天文学者ではない。"
        },
        {
          "text": "And yet methinks I have astronomy,",
          "ja": "天文学の知識ならいくらか心得ているつもりだが"
        },
        {
          "text": "But not to tell of good or evil luck,",
          "ja": "幸運や不運、飢饉や疫病の兆しを読み解くためではなく"
        },
        {
          "text": "Of plagues, of dearths, or seasons’ quality;",
          "ja": "短い季節ごとの天候の移り変わりを告げるためでもない。"
        },
        {
          "text": "Nor can I fortune to brief minutes tell,",
          "ja": "天変地異がいつ誰の上に降りかかるかを言い当てることも"
        },
        {
          "text": "Pointing to each his thunder, rain and wind,",
          "ja": "風評や雨や風の運命を予言することも私にはできないし"
        },
        {
          "text": "Or say with princes if it shall go well",
          "ja": "王たちの行く末を天の星巡りから読み解くこともできない。"
        },
        {
          "text": "By oft predict that I in heaven find:",
          "ja": "だが私は、君の二つの瞳という星からすべてを読み取るのだ。"
        },
        {
          "text": "But from thine eyes my knowledge I derive,",
          "ja": "その瞳という星巡りの中に、私は確かな真理を見出す"
        },
        {
          "text": "And constant stars in them I read such art",
          "ja": "「真実と美しさは共に栄え、共に手を取り合うだろう"
        },
        {
          "text": "As ‘Truth and beauty shall together thrive,",
          "ja": "もし君が自らの面影を子孫へと託す道を選ぶならば」と。"
        },
        {
          "text": "If from thyself, to store thou wouldst convert’;",
          "ja": "だがもし君がそうしないなら、私は君の運命を予言しよう"
        },
        {
          "text": "Or else of thee this I prognosticate:",
          "ja": "「君の命の終わりと共に"
        },
        {
          "text": "‘Thy end is truth’s and beauty’s doom and date.’",
          "ja": "この世の真実と美しさも墓場へと消え去る」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 15,
      "title_ja": "この世の栄華が瞬きに過ぎぬと知るとき",
      "lines": [
        {
          "text": "When I consider everything that grows",
          "ja": "この世に育つあらゆる美しいものが"
        },
        {
          "text": "Holds in perfection but a little moment,",
          "ja": "ほんの束の間の頂点を極めるに過ぎぬと考え深くなるとき"
        },
        {
          "text": "That this huge stage presenteth nought but shows",
          "ja": "この大いなる世界の舞台の上で演じられるすべてが"
        },
        {
          "text": "Whereon the stars in secret influence comment;",
          "ja": "ただ星々の秘密の力によって操られているに過ぎぬと知るとき"
        },
        {
          "text": "When I perceive that men as plants increase,",
          "ja": "人間もまた草木と同じように天の恵みを受けて育ち"
        },
        {
          "text": "Cheered and checked even by the self-same sky,",
          "ja": "同じ空の下で誇らしく勢いを増し、やがて衰え"
        },
        {
          "text": "Vaunt in their youthful sap, at height decrease,",
          "ja": "若き日の誇りの絶頂で戯れ、やがて忘れ去られ"
        },
        {
          "text": "And wear their brave state out of memory;",
          "ja": "記憶の彼方へと落ちてゆくのを見つめるとき"
        },
        {
          "text": "Then the conceit of this inconstant stay",
          "ja": "儚きこの世の定めが、君の豊かな若さの姿を"
        },
        {
          "text": "Sets you most rich in youth before my sight,",
          "ja": "私の目の前に鮮やかに呼び覚ますのだ。"
        },
        {
          "text": "Where wasteful Time debateth with Decay",
          "ja": "そこでは容赦なき時と荒廃が結託し"
        },
        {
          "text": "To change your day of youth to sullied night,",
          "ja": "君の若き日を濁った夜へと変えようと狙っている。"
        },
        {
          "text": "And all in war with Time for love of you,",
          "ja": "だが君への愛のために、私は時と戦い続けよう"
        },
        {
          "text": "As he takes from you, I engraft you new.",
          "ja": "時が君から奪い去る命を、私の詩によって新しく創り直しながら。"
        }
      ],
      "audio": null
    },
    {
      "no": 16,
      "title_ja": "荒ぶる時の暴君に立ち向かう術",
      "lines": [
        {
          "text": "But wherefore do not you a mightier way",
          "ja": "だがなぜ君は、もっと力強いやり方で"
        },
        {
          "text": "Make war upon this bloody tyrant, Time?",
          "ja": "あの血に飢えた暴君『時』に立ち向かおうとしないのか。"
        },
        {
          "text": "And fortify yourself in your decay",
          "ja": "私の拙い詩よりも、はるかに祝福された手立てで"
        },
        {
          "text": "With means more blessed than my barren rhyme?",
          "ja": "老いゆく運命の猛威から自らを守ろうとしないのか。"
        },
        {
          "text": "Now stand you on the top of happy hours,",
          "ja": "今こそ君は幸福な若さの頂点に立っている"
        },
        {
          "text": "And many maiden gardens, yet unset,",
          "ja": "処女なる多くの乙女たちの庭は、まだ花を植えられぬまま"
        },
        {
          "text": "With virtuous wish would bear you living flowers,",
          "ja": "君の生きた花をその胎内に宿すことを心から望んでいる。"
        },
        {
          "text": "Much liker than your painted counterfeit:",
          "ja": "それこそが、どんな絵画の筆よりも君の姿を生き写しにするのだ。"
        },
        {
          "text": "So should the lines of life that life repair,",
          "ja": "生きた命の筆こそが、君の真の姿を生き生きと描く"
        },
        {
          "text": "Which this, Time’s pencil, or my pupil pen,",
          "ja": "時の刃も私の不完全なペンも、君の命そのものを描くことはできない。"
        },
        {
          "text": "Neither in inward worth nor outward fair,",
          "ja": "人々の目に君を永遠に美しく映し出すことはできないのだ。"
        },
        {
          "text": "Can make you live yourself in eyes of men.",
          "ja": "自分自身を誰かに与えなさい、そうしてこそ君は君であり続ける。"
        },
        {
          "text": "To give away yourself, keeps yourself still,",
          "ja": "君自身の甘やかな技によって創られた、もう一人の君の中でこそ"
        },
        {
          "text": "And you must live, drawn by your own sweet skill.",
          "ja": "君の命は永遠に生き続けるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 17,
      "title_ja": "私の詩が君の美しさをどれほど讃えても",
      "lines": [
        {
          "text": "Who will believe my verse in time to come,",
          "ja": "やがて来る時代に、私の詩を一体誰が信じてくれようか"
        },
        {
          "text": "If it were fill’d with your most high deserts?",
          "ja": "もしそこに、君の至高の美しさをそのまま書き残したなら。"
        },
        {
          "text": "Though yet heaven knows it is but as a tomb",
          "ja": "天よ知る通り、私の詩句など君の命を隠す墓場に過ぎず"
        },
        {
          "text": "Which hides your life, and shows not half your parts.",
          "ja": "君の真の輝きの半分も表すことができてはいないというのに。"
        },
        {
          "text": "If I could write the beauty of your eyes,",
          "ja": "もし私が、君の瞳の眩しさを詩に書き留め"
        },
        {
          "text": "And in fresh numbers number all your graces,",
          "ja": "君の類まれなる美徳をすべて数え上げることができたとしても"
        },
        {
          "text": "The age to come would say ‘This poet lies;",
          "ja": "未来の人々は言うだろう、「これは詩人の嘘に過ぎない"
        },
        {
          "text": "Such heavenly touches ne’er touch’d earthly faces.’",
          "ja": "地上の人間にこれほど天上の顔立ちが宿るはずがない」と。"
        },
        {
          "text": "So should my papers, yellow’d with their age,",
          "ja": "私の書き残した紙は、歳月と共に黄ばんで軽蔑され"
        },
        {
          "text": "Be scorn’d, like old men of less truth than tongue,",
          "ja": "口数の多すぎる老人の世迷い言のように扱われ"
        },
        {
          "text": "And your true rights be term’d a poet’s rage",
          "ja": "君の正当なる権利は、ただの詩人の狂気や"
        },
        {
          "text": "And stretched metre of an antique song:",
          "ja": "古めかしい歌の誇張だと笑われてしまうだろう。"
        },
        {
          "text": "But were some child of yours alive that time,",
          "ja": "だがもしその時、君の生きた子がこの世に生きていたなら"
        },
        {
          "text": "You should live twice,—in it, and in my rhyme.",
          "ja": "君は二度生きるのだ、その子の中と、そして私の詩の中で。"
        }
      ],
      "audio": null
    },
    {
      "no": 18,
      "title_ja": "君を夏の日にたとえようか",
      "lines": [
        {
          "text": "Shall I compare thee to a summer’s day?",
          "ja": "君を夏の日にたとえようか。"
        },
        {
          "text": "Thou art more lovely and more temperate:",
          "ja": "いや、君のほうがずっと美しく穏やかだ。"
        },
        {
          "text": "Rough winds do shake the darling buds of May,",
          "ja": "荒々しい風は五月の愛らしき蕾を揺さぶり落とし"
        },
        {
          "text": "And summer’s lease hath all too short a date:",
          "ja": "夏が約束された季節は、あまりに短く過ぎ去ってしまう。"
        },
        {
          "text": "Sometime too hot the eye of heaven shines,",
          "ja": "時に天の瞳（太陽）はあまりに熱く照りつけ"
        },
        {
          "text": "And often is his gold complexion dimm’d,",
          "ja": "その黄金色の顔もしばしば雲に覆われて曇ってしまう。"
        },
        {
          "text": "And every fair from fair sometime declines,",
          "ja": "あらゆる美しきものは、やがて美しさを失い"
        },
        {
          "text": "By chance, or nature’s changing course untrimm’d:",
          "ja": "偶然や移ろいゆく自然の歩みによって姿を変えてゆく。"
        },
        {
          "text": "But thy eternal summer shall not fade,",
          "ja": "だが、君の永遠の夏が色褪せることは決してない。"
        },
        {
          "text": "Nor lose possession of that fair thou ow’st,",
          "ja": "君が持つその美しさを、君が失うことも決してない。"
        },
        {
          "text": "Nor shall death brag thou wander’st in his shade,",
          "ja": "死神が、己の影の中に君を歩かせようと誇ることも決してない"
        },
        {
          "text": "When in eternal lines to time thou grow’st,",
          "ja": "君が永遠の詩句の中に育ち、時と一つに溶け合うのだから。"
        },
        {
          "text": "So long as men can breathe, or eyes can see,",
          "ja": "人間が息をし、瞳が見つめることができる限り"
        },
        {
          "text": "So long lives this, and this gives life to thee.",
          "ja": "この詩は生き続け、そして君に永遠の命を与え続けるのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/sonnet_18_1604.poem_librivox/sonnet18_shakespeare_alp.mp3",
        "reader": "ALP",
        "duration": "1:05"
      }
    },
    {
      "no": 19,
      "title_ja": "大食らいの時よ、獅子の爪を削れ",
      "lines": [
        {
          "text": "Devouring Time, blunt thou the lion’s paws,",
          "ja": "大食らいの時よ、獅子の爪をすり減らすがよい"
        },
        {
          "text": "And make the earth devour her own sweet brood;",
          "ja": "大地に命じた自らの子らを"
        },
        {
          "text": "Pluck the keen teeth from the fierce tiger’s jaws,",
          "ja": "大地の口で貪り食らわせるがよい。"
        },
        {
          "text": "And burn the long-liv’d phoenix, in her blood;",
          "ja": "どう猛な虎の顎から鋭き牙を引き抜き"
        },
        {
          "text": "Make glad and sorry seasons as thou fleets,",
          "ja": "長寿の不死鳥を己の血の炎の中で焼き尽くすのもよい。"
        },
        {
          "text": "And do whate’er thou wilt, swift-footed Time,",
          "ja": "飛び去りゆく季節の中で、春夏秋冬をめぐらせ"
        },
        {
          "text": "To the wide world and all her fading sweets;",
          "ja": "この世のあらゆるものに、お前の望む通りの喜びと悲しみを味わわせよ。"
        },
        {
          "text": "But I forbid thee one most heinous crime:",
          "ja": "だが時よ、たった一つだけ、最も忌まわしき罪を犯してはならぬ。"
        },
        {
          "text": "O! carve not with thy hours my love’s fair brow,",
          "ja": "我が愛する人の甘やかな額に、お前の古びた針で皺を刻んではならぬ。"
        },
        {
          "text": "Nor draw no lines there with thine antique pen;",
          "ja": "お前の古びた筆で、その美しい顔に傷をつけてはならぬ。"
        },
        {
          "text": "Him in thy course untainted do allow",
          "ja": "彼を傷つけることなく、永遠の清らかな姿のまま残せ"
        },
        {
          "text": "For beauty’s pattern to succeeding men.",
          "ja": "未来のすべての世代が見習うべき、至高の美の規範として。"
        },
        {
          "text": "Yet do thy worst, old Time; despite thy wrong,",
          "ja": "だが老いた時よ、たとえお前が最悪の暴虐を尽くそうとも"
        },
        {
          "text": "My love shall in my verse ever live young.",
          "ja": "我が愛する人は、私の詩の中で永遠に若く生き続けるのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 20,
      "title_ja": "自然が描いた至高の面影",
      "lines": [
        {
          "text": "A woman’s face with nature’s own hand painted,",
          "ja": "自然が自らの手で描き上げた、女の美しき顔を持つ人よ"
        },
        {
          "text": "Hast thou, the master mistress of my passion;",
          "ja": "君こそは私の情熱を支配する、男であり女である君主。"
        },
        {
          "text": "A woman’s gentle heart, but not acquainted",
          "ja": "移り気な女たちのような偽りの心を持たぬ、柔らかな女の心を持ち"
        },
        {
          "text": "With shifting change, as is false women’s fashion:",
          "ja": "流行の化粧に染まらぬ、気品ある瞳を輝かせている。"
        },
        {
          "text": "An eye more bright than theirs, less false in rolling,",
          "ja": "君が見つめるすべてのものを黄金色に染め上げる瞳"
        },
        {
          "text": "Gilding the object whereupon it gazeth;",
          "ja": "あらゆる男たちの視線を奪い、女たちの心を惑わす完璧な姿立ち。"
        },
        {
          "text": "A man in hue all ‘hues’ in his controlling,",
          "ja": "自然は最初、君を女として創ろうとしていたのだ"
        },
        {
          "text": "Which steals men’s eyes and women’s souls amazeth.",
          "ja": "だが創り上げるうちに自ら君の美しさに夢中になり、"
        },
        {
          "text": "And for a woman wert thou first created;",
          "ja": "余計なものを一つ付け足して、私から君を奪い去ってしまった。"
        },
        {
          "text": "Till Nature, as she wrought thee, fell a-doting,",
          "ja": "私にとっては何の役にも立たぬ、男の印を付け足して。"
        },
        {
          "text": "And by addition me of thee defeated,",
          "ja": "だが自然が君を女たちの喜びのために創ったのだとしても"
        },
        {
          "text": "By adding one thing to my purpose nothing.",
          "ja": "どうか君の心と愛だけは、この私に捧げてほしい。"
        },
        {
          "text": "But since she prick’d thee out for women’s pleasure,",
          "ja": "君の身体の愛を女たちの宝とするならば"
        },
        {
          "text": "Mine be thy love and thy love’s use their treasure.",
          "ja": "君の魂の真の愛を、私の宝として受け取らせてほしいのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc195_1909_librivox/spc195_sonnet20_cjph.mp3",
        "reader": "C.J. Plog",
        "duration": "1:15"
      }
    },
    {
      "no": 21,
      "title_ja": "飾り立てた言葉の詩人たちとは違い",
      "lines": [
        {
          "text": "So is it not with me as with that Muse,",
          "ja": "私は"
        },
        {
          "text": "Stirr’d by a painted beauty to his verse,",
          "ja": "あの絵の具で塗りたくられた詩神を持つ詩人たちとは違う。"
        },
        {
          "text": "Who heaven itself for ornament doth use",
          "ja": "彼らは飾り立てた美しさで詩を綴り"
        },
        {
          "text": "And every fair with his fair doth rehearse,",
          "ja": "天そのものを比較の対象として並べ立て"
        },
        {
          "text": "Making a couplement of proud compare.",
          "ja": "愛する人の賛美のために、ありとあらゆる美しいものを総動員する。"
        },
        {
          "text": "With sun and moon, with earth and sea’s rich gems,",
          "ja": "太陽や月や海や陸の真珠や"
        },
        {
          "text": "With April’s first-born flowers, and all things rare,",
          "ja": "四月の花々や、この巨大な空の下に抱かれた"
        },
        {
          "text": "That heaven’s air in this huge rondure hems.",
          "ja": "珍しいすべての品々と、愛する人の美を比べ立てる。"
        },
        {
          "text": "O! let me, true in love, but truly write,",
          "ja": "だが誠実に愛する私は、誠実な言葉で書きたいのだ。"
        },
        {
          "text": "And then believe me, my love is as fair",
          "ja": "信じてほしい、我が愛する人は、誰よりも美しいけれど"
        },
        {
          "text": "As any mother’s child, though not so bright",
          "ja": "夜空に煌めく黄金の星眼鏡ほどには輝いてはいない。"
        },
        {
          "text": "As those gold candles fix’d in heaven’s air:",
          "ja": "大げさに褒め立てる詩人は、売り物に値段をつけたい者たちだ。"
        },
        {
          "text": "Let them say more that like of hearsay well;",
          "ja": "私は君を売りに出すつもりなどないのだから、大げさな賛美は要らない。"
        },
        {
          "text": "I will not praise that purpose not to sell.",
          "ja": "口先だけの噂話で君を汚したくはないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 22,
      "title_ja": "鏡が私の老いを示すまで若さを信じよう",
      "lines": [
        {
          "text": "My glass shall not persuade me I am old,",
          "ja": "私の鏡が、我が身の老いを映し出すまでは"
        },
        {
          "text": "So long as youth and thou are of one date;",
          "ja": "私は自分が老いたとは決して信じないだろう。"
        },
        {
          "text": "But when in thee time’s furrows I behold,",
          "ja": "君と若さが同じひとつの季節を生きている限りは。"
        },
        {
          "text": "Then look I death my days should expiate.",
          "ja": "だが君の美しい顔に時の皺が刻まれるのを見たならば"
        },
        {
          "text": "For all that beauty that doth cover thee,",
          "ja": "その時こそ私は、我が命の終わりと死の訪れを予期しよう"
        },
        {
          "text": "Is but the seemly raiment of my heart,",
          "ja": "私の命の歳月は、君の若さの中に包まれているのだから。"
        },
        {
          "text": "Which in thy breast doth live, as thine in me:",
          "ja": "なぜなら、君の胸を飾る美しき心は私の心であり"
        },
        {
          "text": "How can I then be elder than thou art?",
          "ja": "私の胸の中に宿る心は、君の心そのものなのだから。"
        },
        {
          "text": "O! therefore love, be of thyself so wary",
          "ja": "ならば私が君より年老いることなど、どうしてあり得ようか。"
        },
        {
          "text": "As I, not for myself, but for thee will;",
          "ja": "だから愛する人よ、自分自身を大切にしておくれ"
        },
        {
          "text": "Bearing thy heart, which I will keep so chary",
          "ja": "私が君のために、自分の心を大切に守り続けるように。"
        },
        {
          "text": "As tender nurse her babe from faring ill.",
          "ja": "乳母が我が子を病から守るように、私は君の心を胸に抱いているのだから。"
        },
        {
          "text": "Presume not on thy heart when mine is slain,",
          "ja": "忘れないでおくれ、もし君の心が傷つくなら、私の心も死ぬのだと"
        },
        {
          "text": "Thou gav’st me thine not to give back again.",
          "ja": "一度私にくれたその心を、二度と取り戻すことはできないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 23,
      "title_ja": "舞台でおののく不慣れな役者のように",
      "lines": [
        {
          "text": "As an unperfect actor on the stage,",
          "ja": "舞台の上で恐怖に震え、自分の台詞を忘れてしまう"
        },
        {
          "text": "Who with his fear is put beside his part,",
          "ja": "不慣れな哀れな役者のように"
        },
        {
          "text": "Or some fierce thing replete with too much rage,",
          "ja": "あるいは、あまりに激しい怒りの昂ぶりに満たされ"
        },
        {
          "text": "Whose strength’s abundance weakens his own heart;",
          "ja": "自らの力の強さゆえに身動きが取れなくなる狂人のように"
        },
        {
          "text": "So I, for fear of trust, forget to say",
          "ja": "私もまた、君への想いのあまりの深さに怯え"
        },
        {
          "text": "The perfect ceremony of love’s rite,",
          "ja": "完璧な愛の儀式を言葉にして伝えることができない。"
        },
        {
          "text": "And in mine own love’s strength seem to decay,",
          "ja": "あまりに巨大な愛の重みに圧倒されて"
        },
        {
          "text": "O’ercharg’d with burthen of mine own love’s might.",
          "ja": "我が愛の力そのものによって、口ごもってしまうのだ。"
        },
        {
          "text": "O! let my looks be then the eloquence",
          "ja": "ああ、どうか私の書いた詩の沈黙の訴えを読んでほしい"
        },
        {
          "text": "And dumb presagers of my speaking breast,",
          "ja": "胸の内にあふれる無言の言葉に耳を傾けてほしい。"
        },
        {
          "text": "Who plead for love, and look for recompense,",
          "ja": "私の詩こそが、愛の使者として誰よりも雄弁に"
        },
        {
          "text": "More than that tongue that more hath more express’d.",
          "ja": "どんな言葉の弁論よりも深く、愛の報酬を求めているのだから。"
        },
        {
          "text": "O! learn to read what silent love hath writ:",
          "ja": "沈黙の愛が書き記した文字を読み解いておくれ"
        },
        {
          "text": "To hear with eyes belongs to love’s fine wit.",
          "ja": "目で聴くことこそが、愛の深き知恵なのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/sonnet_23_librivox/sonnet_23_shakespeare_ac.mp3",
        "reader": "Annie Coleman",
        "duration": "1:27"
      }
    },
    {
      "no": 24,
      "title_ja": "私の瞳は画家の筆となり",
      "lines": [
        {
          "text": "Mine eye hath play’d the painter and hath stell’d,",
          "ja": "私の瞳は画家の役目を果たし"
        },
        {
          "text": "Thy beauty’s form in table of my heart;",
          "ja": "君の美しい姿を、私の胸のキャンバスに描き込んだ。"
        },
        {
          "text": "My body is the frame wherein ’tis held,",
          "ja": "私の肉体はその絵を収める額縁となり"
        },
        {
          "text": "And perspective it is best painter’s art.",
          "ja": "そこには透視画法の見事な技が生きている。"
        },
        {
          "text": "For through the painter must you see his skill,",
          "ja": "画家（瞳）の真の腕前を見極めるためには"
        },
        {
          "text": "To find where your true image pictur’d lies,",
          "ja": "絵がどこに掛けられているかを見なければならない。"
        },
        {
          "text": "Which in my bosom’s shop is hanging still,",
          "ja": "その絵は私の胸の奥深き部屋に掛けられており"
        },
        {
          "text": "That hath his windows glazed with thine eyes.",
          "ja": "そこには君の瞳というガラスの窓が輝いている。"
        },
        {
          "text": "Now see what good turns eyes for eyes have done:",
          "ja": "見よ、瞳と瞳が互いにどれほど助け合っているかを。"
        },
        {
          "text": "Mine eyes have drawn thy shape, and thine for me",
          "ja": "私の瞳は君の姿を描き、君の瞳は私の胸の窓となって"
        },
        {
          "text": "Are windows to my breast, where-through the sun",
          "ja": "太陽そのものがその窓から覗き込み"
        },
        {
          "text": "Delights to peep, to gaze therein on thee;",
          "ja": "君の肖像画を見つめて喜んでいるのだから。"
        },
        {
          "text": "Yet eyes this cunning want to grace their art,",
          "ja": "だが瞳の絵画には、たった一つだけ欠けた技がある"
        },
        {
          "text": "They draw but what they see, know not the heart.",
          "ja": "瞳は外見しか描けず、君の心の奥底までは見抜くことができないのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 25,
      "title_ja": "世の栄達を誇る者たちをよそに",
      "lines": [
        {
          "text": "Let those who are in favour with their stars",
          "ja": "星々の寵愛を受ける者たちには、公の栄誉や"
        },
        {
          "text": "Of public honour and proud titles boast,",
          "ja": "宮廷の高貴な身分を誇らせておくがよい。"
        },
        {
          "text": "Whilst I, whom fortune of such triumph bars",
          "ja": "運命の気まぐれから見放された私は"
        },
        {
          "text": "Unlook’d for joy in that I honour most.",
          "ja": "名誉も誇りも持たぬが、心から愛する喜びを静かに味わっている。"
        },
        {
          "text": "Great princes’ favourites their fair leaves spread",
          "ja": "王侯貴族の寵愛を受ける寵臣たちは"
        },
        {
          "text": "But as the marigold at the sun’s eye,",
          "ja": "太陽の光を浴びて誇らしげに葉を広げる向日葵のようだ。"
        },
        {
          "text": "And in themselves their pride lies buried,",
          "ja": "だが王の眉がひとたび曇れば、その誇りは砕け散り"
        },
        {
          "text": "For at a frown they in their glory die.",
          "ja": "太陽を失った花のように、自らの栄光の中で枯れ果ててゆく。"
        },
        {
          "text": "The painful warrior famoused for fight,",
          "ja": "戦場で千の勝利を収めた誇り高き勇士であっても"
        },
        {
          "text": "After a thousand victories once foil’d,",
          "ja": "たった一度の敗北によって、勝利の記録帳から名を消され"
        },
        {
          "text": "Is from the book of honour razed quite,",
          "ja": "それまで積み上げたすべての苦労は忘れ去られ"
        },
        {
          "text": "And all the rest forgot for which he toil’d:",
          "ja": "過去の武勲もすべて無に帰してしまう。"
        },
        {
          "text": "Then happy I, that love and am belov’d,",
          "ja": "だが私は愛し、愛されている。誰にも奪われぬ場所で"
        },
        {
          "text": "Where I may not remove nor be remov’d.",
          "ja": "私は誰をも変えず、誰からも変えられることはないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 26,
      "title_ja": "我が主よ、愛の忠誠を捧げる使者",
      "lines": [
        {
          "text": "Lord of my love, to whom in vassalage",
          "ja": "我が愛の主よ、君の尊き美徳の鎖によって"
        },
        {
          "text": "Thy merit hath my duty strongly knit,",
          "ja": "私の魂は君への忠誠の義務に固く縛られている。"
        },
        {
          "text": "To thee I send this written embassage,",
          "ja": "今私は、この拙き書面を君へと送り届ける"
        },
        {
          "text": "To witness duty, not to show my wit:",
          "ja": "才気を示すためではなく、ただ我が忠誠を証し立てるために。"
        },
        {
          "text": "Duty so great, which wit so poor as mine",
          "ja": "あまりに偉大なる君の美徳の前に、我が言葉はあまりに貧しく"
        },
        {
          "text": "May make seem bare, in wanting words to show it,",
          "ja": "私の義務の深さに比べ、言葉は裸でみすぼらしく見えることだろう。"
        },
        {
          "text": "But that I hope some good conceit of thine",
          "ja": "だが願わくは、君の心の優れた善意が"
        },
        {
          "text": "In thy soul’s thought, all naked, will bestow it:",
          "ja": "この裸の想いに温かい情けの衣を着せてくれますように。"
        },
        {
          "text": "Till whatsoever star that guides my moving,",
          "ja": "やがて我が頭上を導く星が、幸運の光を投げかけ"
        },
        {
          "text": "Points on me graciously with fair aspect,",
          "ja": "不遇なる我が運命に優しい光を注ぎ"
        },
        {
          "text": "And puts apparel on my tatter’d loving,",
          "ja": "破れた我がぼろ布のような運命を新しく繕って"
        },
        {
          "text": "To show me worthy of thy sweet respect:",
          "ja": "君の気高き愛に見合う身分へと引き上げてくれるその日まで。"
        },
        {
          "text": "Then may I dare to boast how I do love thee;",
          "ja": "その時こそ私は、君をどれほど愛しているかを胸を張って語ろう"
        },
        {
          "text": "Till then, not show my head where thou mayst prove me.",
          "ja": "それまでは、君の試練にさらされぬよう、身を潜めていよう。"
        }
      ],
      "audio": null
    },
    {
      "no": 27,
      "title_ja": "旅路に疲れ床に就いても",
      "lines": [
        {
          "text": "Weary with toil, I haste me to my bed,",
          "ja": "旅の疲れに足は重く、私は床へと倒れ込む"
        },
        {
          "text": "The dear respose for limbs with travel tir’d;",
          "ja": "旅路に疲れ果てた手足を休めるために。"
        },
        {
          "text": "But then begins a journey in my head",
          "ja": "だが肉体が休まり始めたその瞬間から"
        },
        {
          "text": "To work my mind, when body’s work’s expired:",
          "ja": "頭の中の旅が始まる"
        },
        {
          "text": "For then my thoughts, from far where I abide,",
          "ja": "肉体の働きが終わった後も、魂の巡礼が動き出すのだ。"
        },
        {
          "text": "Intend a zealous pilgrimage to thee,",
          "ja": "私の想いは、遠く離れた君のいる場所へと飛んでゆき"
        },
        {
          "text": "And keep my drooping eyelids open wide,",
          "ja": "疲れ切った重い瞼を、力づくで見開かせる。"
        },
        {
          "text": "Looking on darkness which the blind do see:",
          "ja": "漆黒の闇を見つめながら、盲目の者が見るような暗闇の中に"
        },
        {
          "text": "Save that my soul’s imaginary sight",
          "ja": "私の魂の澄んだ視線が、君の面影を描き出すのだ。"
        },
        {
          "text": "Presents thy shadow to my sightless view,",
          "ja": "その面影は、暗い部屋の中に幻の宝石のように浮かび上がり"
        },
        {
          "text": "Which, like a jewel hung in ghastly night,",
          "ja": "恐ろしく陰鬱な夜を、息をのむほど美しく輝かせ"
        },
        {
          "text": "Makes black night beauteous, and her old face new.",
          "ja": "古びた黒き夜の顔を、若き日の奇跡のように変えてしまう。"
        },
        {
          "text": "Lo! thus, by day my limbs, by night my mind,",
          "ja": "見よ、昼は私の手足を労働で疲れさせ"
        },
        {
          "text": "For thee, and for myself, no quiet find.",
          "ja": "夜は私の魂を君への想いで疲れさせ、私には安息がない。"
        }
      ],
      "audio": null
    },
    {
      "no": 28,
      "title_ja": "夜も昼も悲嘆の鎖から逃れられず",
      "lines": [
        {
          "text": "How can I then return in happy plight,",
          "ja": "私はどうやって安らかな休息へと戻れようか"
        },
        {
          "text": "That am debarre’d the benefit of rest?",
          "ja": "夜の安息すら私から奪い去られているというのに。"
        },
        {
          "text": "When day’s oppression is not eas’d by night,",
          "ja": "昼の苦しみが夜に救われることはなく、夜の嘆きが昼に和らぐこともなく"
        },
        {
          "text": "But day by night and night by day oppress’d,",
          "ja": "昼と夜という二つの敵同士が、私を苦しめるために手を結んでいる。"
        },
        {
          "text": "And each, though enemies to either’s reign,",
          "ja": "一方は労働によって、一方は君への切ない想いによって"
        },
        {
          "text": "Do in consent shake hands to torture me,",
          "ja": "互いに手を取り合い、私の休む間を奪い去る。"
        },
        {
          "text": "The one by toil, the other to complain",
          "ja": "私は昼を喜ばせようと、「君は太陽のように輝いている」と告げ"
        },
        {
          "text": "How far I toil, still farther off from thee.",
          "ja": "雲が空を覆うときも、「君こそが光だ」とお世辞を言う。"
        },
        {
          "text": "I tell the day, to please him thou art bright,",
          "ja": "私は夜を宥めようと、「黒き肌の夜よ、星々が隠れても"
        },
        {
          "text": "And dost him grace when clouds do blot the heaven:",
          "ja": "君の面影が星々の代わりに闇を照らしている」と語りかける。"
        },
        {
          "text": "So flatter I the swart-complexion’d night,",
          "ja": "だが昼は毎日私の苦しみを引き延ばし"
        },
        {
          "text": "When sparkling stars twire not thou gild’st the even.",
          "ja": "夜は毎夜私の悲哀を重く積み重ねてゆく。"
        },
        {
          "text": "But day doth daily draw my sorrows longer,",
          "ja": "君と離れている悲しみが、昼も夜も私を縛りつけ"
        },
        {
          "text": "And night doth nightly make grief’s length seem stronger.",
          "ja": "この胸の痛みには、終わりがないのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/sonnet_28_librivox/sonnet28_shakespeare_acc.mp3",
        "reader": "A.C. Clark",
        "duration": "1:16"
      }
    },
    {
      "no": 29,
      "title_ja": "境遇を呪い落ち込むときも",
      "lines": [
        {
          "text": "When in disgrace with fortune and men’s eyes",
          "ja": "運命に見放され、人々の軽蔑の目にさらされて"
        },
        {
          "text": "I all alone beweep my outcast state,",
          "ja": "私は一人、惨めな我が身の境遇を嘆き涙することがある。"
        },
        {
          "text": "And trouble deaf heaven with my bootless cries,",
          "ja": "見捨てられた者の叫びを、冷たい天に向かって叫んでも天は耳を貸さず"
        },
        {
          "text": "And look upon myself, and curse my fate,",
          "ja": "自分自身を見つめ直し、我が身の不運を呪うのだ。"
        },
        {
          "text": "Wishing me like to one more rich in hope,",
          "ja": "もっと希望に満ちたあの人のようになりたいと望み"
        },
        {
          "text": "Featur’d like him, like him with friends possess’d,",
          "ja": "あの人のような容姿に恵まれ、あの人のように多くの友を持ちたいと羨み"
        },
        {
          "text": "Desiring this man’s art, and that man’s scope,",
          "ja": "ある者の才能を妬み、ある者の権力を羨みながら"
        },
        {
          "text": "With what I most enjoy contented least;",
          "ja": "かつて最も愛したはずの我が喜びさえ、すっかり色褪せてしまう。"
        },
        {
          "text": "Yet in these thoughts my self almost despising,",
          "ja": "だが、そうして自分を蔑み、絶望の淵に沈みかけているとき"
        },
        {
          "text": "Haply I think on thee, and then my state,",
          "ja": "ふと、君のことを想い出すのだ。すると私の魂は"
        },
        {
          "text": "Like to the lark at break of day arising",
          "ja": "夜明けの冷たい大地から飛び立つ雲雀（ヒバリ）のように天高く舞い上がり"
        },
        {
          "text": "From sullen earth, sings hymns at heaven’s gate;",
          "ja": "天国の門口に向かって歓喜の讃美歌を歌い始める。"
        },
        {
          "text": "For thy sweet love remember’d such wealth brings",
          "ja": "君の甘やかな愛を想うだけで、私はどんな王よりも豊かになる"
        },
        {
          "text": "That then I scorn to change my state with kings.",
          "ja": "王座と我が境遇を取り替えようと誘われても、私は決して首を縦に振らない。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/sonnet29_1905.poem_librivox/sonnet29_shakespeare_bd.mp3",
        "reader": "Bruce Dennill",
        "duration": "1:22"
      }
    },
    {
      "no": 30,
      "title_ja": "過ぎ去りし日々の追憶に沈むとき",
      "lines": [
        {
          "text": "When to the sessions of sweet silent thought",
          "ja": "静かな瞑想の法廷に、過ぎ去りし日々の記憶を呼び出すとき"
        },
        {
          "text": "I summon up remembrance of things past,",
          "ja": "私はかつて追い求めながら得られなかった多くの夢を嘆き"
        },
        {
          "text": "I sigh the lack of many a thing I sought,",
          "ja": "貴重な歳月が無為に失われたことを"
        },
        {
          "text": "And with old woes new wail my dear time’s waste:",
          "ja": "新たな悲しみと共に痛惜する。"
        },
        {
          "text": "Then can I drown an eye, unused to flow,",
          "ja": "普段は涙することのない私の瞳も、涙であふれてしまう"
        },
        {
          "text": "For precious friends hid in death’s dateless night,",
          "ja": "死という果てなき夜に呑み込まれた、愛する友たちを想うとき。"
        },
        {
          "text": "And weep afresh love’s long since cancell’d woe,",
          "ja": "とうの昔に消え去ったはずの、古い恋の傷跡を再び泣き直し"
        },
        {
          "text": "And moan the expense of many a vanish’d sight:",
          "ja": "二度と戻らぬ多くの愛おしき幻影の喪失を、再び嘆き直す。"
        },
        {
          "text": "Then can I grieve at grievances foregone,",
          "ja": "過去の悲しみを次から次へと数え直し"
        },
        {
          "text": "And heavily from woe to woe tell o’er",
          "ja": "かつて一度は支払ったはずの苦痛の勘定を"
        },
        {
          "text": "The sad account of fore-bemoaned moan,",
          "ja": "まるでまだ払っていないかのように、もう一度痛切に支払い直すのだ。"
        },
        {
          "text": "Which I new pay as if not paid before.",
          "ja": "重い嘆きから重い嘆きへと、心の帳簿を繰り広げながら。"
        },
        {
          "text": "But if the while I think on thee, dear friend,",
          "ja": "だが、愛する友よ、君のことをふと想い出すだけで"
        },
        {
          "text": "All losses are restor’d and sorrows end.",
          "ja": "すべての失われた宝は戻り、すべての悲しみは消え去るのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc155_1605_librivox/spc155_sonnet30_ta.mp3",
        "reader": "Tomas Peter",
        "duration": "1:25"
      }
    },
    {
      "no": 31,
      "title_ja": "失われた愛が君の中に息づく",
      "lines": [
        {
          "text": "Thy bosom is endeared with all hearts,",
          "ja": "君の胸の中には、私がかつて失ったと思っていた"
        },
        {
          "text": "Which I by lacking have supposed dead;",
          "ja": "あらゆる愛しい魂たちが、すべて息づいている。"
        },
        {
          "text": "And there reigns Love, and all Love’s loving parts,",
          "ja": "死者たちに捧げたと信じていた我が愛の滴が"
        },
        {
          "text": "And all those friends which I thought buried.",
          "ja": "今すべて、君の瞳の奥で再び輝いているのだ。"
        },
        {
          "text": "How many a holy and obsequious tear",
          "ja": "かつて信心深き涙が、我が瞳からいく筋も流れ落ちたことか"
        },
        {
          "text": "Hath dear religious love stol’n from mine eye,",
          "ja": "永遠に葬り去られたと信じた愛しい人たちのために。"
        },
        {
          "text": "As interest of the dead, which now appear",
          "ja": "だが彼らは死んだのではなく、ただ君の中に隠れていただけだった"
        },
        {
          "text": "But things remov’d that hidden in thee lie!",
          "ja": "君という美しき住処の中で、再び息を吹き返すために。"
        },
        {
          "text": "Thou art the grave where buried love doth live,",
          "ja": "かつて私が誰かに捧げたすべての愛の分け前が"
        },
        {
          "text": "Hung with the trophies of my lovers gone,",
          "ja": "今や君一人のものとなり、君の胸に集約されている。"
        },
        {
          "text": "Who all their parts of me to thee did give,",
          "ja": "私が愛したすべての面影が、君の面影の中に重なり合い"
        },
        {
          "text": "That due of many now is thine alone:",
          "ja": "彼らの持っていた美徳のすべてを、君一人が受け継いでいる。"
        },
        {
          "text": "Their images I lov’d, I view in thee,",
          "ja": "彼らの愛のすべてが、今この胸で君のものとなる"
        },
        {
          "text": "And thou, all they, hast all the all of me.",
          "ja": "私は君だけのもの、私のすべてが君のものなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 32,
      "title_ja": "私の死後にこの拙い詩を読まば",
      "lines": [
        {
          "text": "If thou survive my well-contented day,",
          "ja": "もし君が、私の定めの命を生き長らえ"
        },
        {
          "text": "When that churl Death my bones with dust shall cover",
          "ja": "無骨な死神が私の骨を土に埋め尽くした後に"
        },
        {
          "text": "And shalt by fortune once more re-survey",
          "ja": "君の亡き友（私）の遺したこの拙い詩句を"
        },
        {
          "text": "These poor rude lines of thy deceased lover,",
          "ja": "偶然にももう一度、めくり返すことがあるならば"
        },
        {
          "text": "Compare them with the bett’ring of the time,",
          "ja": "やがて来る時代の、もっと洗練された詩人たちの筆と"
        },
        {
          "text": "And though they be outstripp’d by every pen,",
          "ja": "私の不器用な詩の調べとを、ぜひ見比べてみてほしい。"
        },
        {
          "text": "Reserve them for my love, not for their rhyme,",
          "ja": "そして、詩の技巧においては他者に劣るとしても"
        },
        {
          "text": "Exceeded by the height of happier men.",
          "ja": "私の詩に込められた「愛の深さ」だけは"
        },
        {
          "text": "O! then vouchsafe me but this loving thought:",
          "ja": "どうか大切に記憶しておくれ。"
        },
        {
          "text": "‘Had my friend’s Muse grown with this growing age,",
          "ja": "その時、君は優しくこう呟いてくれるだろうか、"
        },
        {
          "text": "A dearer birth than this his love had brought,",
          "ja": "「もし私の友の詩神が、この進んだ時代まで育っていたなら"
        },
        {
          "text": "To march in ranks of better equipage:",
          "ja": "彼ももっと素晴らしい愛の詩を紡ぎ出せたはずだ。"
        },
        {
          "text": "But since he died and poets better prove,",
          "ja": "だが彼は去り、より優れた詩人たちが生まれたのだから"
        },
        {
          "text": "Theirs for their style I’ll read, his for his love’.",
          "ja": "彼らの詩は技巧のために読み、我が友の詩は愛のために読もう」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 33,
      "title_ja": "輝く朝が雲に覆われるように",
      "lines": [
        {
          "text": "Full many a glorious morning have I seen",
          "ja": "幾度となく私は目にしてきた、栄光ある朝の太陽が"
        },
        {
          "text": "Flatter the mountain tops with sovereign eye,",
          "ja": "堂々たる瞳で山々の頂を愛撫し、黄金に染め上げるのを。"
        },
        {
          "text": "Kissing with golden face the meadows green,",
          "ja": "緑なす牧草地に口づけを授け、青白き小川を"
        },
        {
          "text": "Gilding pale streams with heavenly alchemy;",
          "ja": "天上の錬金術によって黄金の流れへと変えてゆくのを。"
        },
        {
          "text": "Anon permit the basest clouds to ride",
          "ja": "だが悲しいかな、その太陽もしばしば忌まわしき低き雲を"
        },
        {
          "text": "With ugly rack on his celestial face,",
          "ja": "自らの輝かしき顔の上に立ち込めさせ"
        },
        {
          "text": "And from the forlorn world his visage hide,",
          "ja": "見捨てられた地上から、その光を隠してしまい"
        },
        {
          "text": "Stealing unseen to west with this disgrace:",
          "ja": "人目につかぬ西の空へと、見知らぬ道を通って沈んでゆく。"
        },
        {
          "text": "Even so my sun one early morn did shine,",
          "ja": "同じように、ある早朝、我が太陽（君）もまた"
        },
        {
          "text": "With all triumphant splendour on my brow;",
          "ja": "眩いばかりの光を私の額に投げかけてくれた。"
        },
        {
          "text": "But out! alack! he was but one hour mine,",
          "ja": "だが悲しいかな、君の光はわずか一時間しか私のものとならず"
        },
        {
          "text": "The region cloud hath mask’d him from me now.",
          "ja": "今や冷たい雲が、君の光と私の間に立ち塞がっている。"
        },
        {
          "text": "Yet him for this my love no whit disdaineth;",
          "ja": "それでも私は、君への愛を少しも疑ったりはしない"
        },
        {
          "text": "Suns of the world may stain when heaven’s sun staineth.",
          "ja": "天の太陽でさえ曇るのだから、地上の太陽（君）が曇るのを誰が責められよう。"
        }
      ],
      "audio": null
    },
    {
      "no": 34,
      "title_ja": "なぜ晴れ渡る空を約束しておきながら",
      "lines": [
        {
          "text": "Why didst thou promise such a beauteous day,",
          "ja": "なぜ君は、あの美しい晴れ渡る一日を私に約束し"
        },
        {
          "text": "And make me travel forth without my cloak,",
          "ja": "私に外套も持たずに旅立たせようとしたのか。"
        },
        {
          "text": "To let base clouds o’ertake me in my way,",
          "ja": "行く手には卑しい黒雲が待ち伏せし"
        },
        {
          "text": "Hiding thy bravery in their rotten smoke?",
          "ja": "その冷たい煙で、君の光を覆い隠してしまうというのに。"
        },
        {
          "text": "’Tis not enough that through the cloud thou break,",
          "ja": "たとえ今、君が雲を突き抜けてその顔を現し"
        },
        {
          "text": "To dry the rain on my storm-beaten face,",
          "ja": "嵐に打たれた私の雨に濡れた顔を乾かしてくれたとしても、"
        },
        {
          "text": "For no man well of such a salve can speak,",
          "ja": "誰もそんな傷の手当てを喜ぶことはできない"
        },
        {
          "text": "That heals the wound, and cures not the disgrace:",
          "ja": "傷口を治しても、恥辱の傷跡までは消し去ることができないのだから。"
        },
        {
          "text": "Nor can thy shame give physic to my grief;",
          "ja": "君の恥じ入る姿も、私の深い悲しみを癒やす薬にはならず"
        },
        {
          "text": "Though thou repent, yet I have still the loss:",
          "ja": "君の後悔の言葉も、私の失った痛みを埋め合わせることはできない。"
        },
        {
          "text": "The offender’s sorrow lends but weak relief",
          "ja": "傷つけた側の痛哭の涙など、傷つけられた側にとっては"
        },
        {
          "text": "To him that bears the strong offence’s cross.",
          "ja": "わずかな慰めにしかならないのだから。"
        },
        {
          "text": "Ah! but those tears are pearl which thy love sheds,",
          "ja": "ああ、だが君が流すその真珠の涙はあまりに尊く"
        },
        {
          "text": "And they are rich and ransom all ill deeds.",
          "ja": "それは愛の香油となって、君の犯したすべての罪を洗い流してくれる。"
        }
      ],
      "audio": null
    },
    {
      "no": 35,
      "title_ja": "己を悔やむな、薔薇にも棘がある",
      "lines": [
        {
          "text": "No more be griev’d at that which thou hast done:",
          "ja": "もうこれ以上、己の犯した罪を悲しまないでおくれ。"
        },
        {
          "text": "Roses have thorns, and silver fountains mud:",
          "ja": "薔薇にさえ鋭い棘があり、銀の泉にも泥が混じるものだ。"
        },
        {
          "text": "Clouds and eclipses stain both moon and sun,",
          "ja": "太陽にも月にも日食や月食があり"
        },
        {
          "text": "And loathsome canker lives in sweetest bud.",
          "ja": "最も愛らしい蕾の奥にも、忌まわしい毛虫が潜んでいる。"
        },
        {
          "text": "All men make faults, and even I in this,",
          "ja": "あらゆる人間が過ちを犯す。"
        },
        {
          "text": "Authorizing thy trespass with compare,",
          "ja": "そして今、私もまた過ちを犯している"
        },
        {
          "text": "Myself corrupting, salving thy amiss,",
          "ja": "君の過ちを許すために、ありとあらゆる言い訳を並べ立て"
        },
        {
          "text": "Excusing thy sins more than thy sins are;",
          "ja": "君の犯した罪をかばうために、自分自身を傷つけ"
        },
        {
          "text": "For to thy sensual fault I bring in sense;",
          "ja": "君の罪よりも重い弁解を、自らの口から吐き出しながら。"
        },
        {
          "text": "Thy adverse party is thy advocate,",
          "ja": "君の官能の過ちを弁護するために、私は自らの理性を動員し"
        },
        {
          "text": "And ’gainst myself a lawful plea commence:",
          "ja": "被害者であるはずの私が、加害者である君の弁護人となり"
        },
        {
          "text": "Such civil war is in my love and hate,",
          "ja": "自分自身を相手取って、愛の法廷で争っているのだ。"
        },
        {
          "text": "That I an accessary needs must be,",
          "ja": "愛と憎しみの激しい内乱が、私の胸の中で吹き荒れる"
        },
        {
          "text": "To that sweet thief which sourly robs from me.",
          "ja": "私から宝を奪い去った愛する盗賊の、共犯者とならざるを得ないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 36,
      "title_ja": "愛は一つでも運命は別離を命じる",
      "lines": [
        {
          "text": "Let me confess that we two must be twain,",
          "ja": "認めよう、私たちは別々の道を歩まねばならないと"
        },
        {
          "text": "Although our undivided loves are one:",
          "ja": "二人の愛は分かち難く一つであるとしても。"
        },
        {
          "text": "So shall those blots that do with me remain,",
          "ja": "私ひとりに残されたこの不名誉の傷跡を"
        },
        {
          "text": "Without thy help, by me be borne alone.",
          "ja": "君にまで背負わせるわけにはいかないのだから。"
        },
        {
          "text": "In our two loves there is but one respect,",
          "ja": "私たちの愛には、ただひとつの心、ひとつの誠実さがあるけれど"
        },
        {
          "text": "Though in our lives a separable spite,",
          "ja": "私たちの人生には、残酷な隔たりと別離が横たわっている。"
        },
        {
          "text": "Which though it alter not love’s sole effect,",
          "ja": "その隔たりが愛の純粋さを損なうことはないとしても"
        },
        {
          "text": "Yet doth it steal sweet hours from love’s delight.",
          "ja": "二人が共に過ごす甘やかな時間を、容赦なく奪い去ってゆく。"
        },
        {
          "text": "I may not evermore acknowledge thee,",
          "ja": "私は公の場で、君の知己であると名乗ることもできず"
        },
        {
          "text": "Lest my bewailed guilt should do thee shame,",
          "ja": "私の恥辱が君の名誉に影を落としてはならないからだ。"
        },
        {
          "text": "Nor thou with public kindness honour me,",
          "ja": "君もまた、公の場で私に優しい敬意を示すことはできない"
        },
        {
          "text": "Unless thou take that honour from thy name:",
          "ja": "君の誇り高き名声から、名誉を奪い去ってはならないからだ。"
        },
        {
          "text": "But do not so, I love thee in such sort,",
          "ja": "だがそれも構わない。私は君を愛しているのだから"
        },
        {
          "text": "As thou being mine, mine is thy good report.",
          "ja": "君の良き名声こそが、私自身の名声でもあるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 37,
      "title_ja": "老いた父が子の若さに喜ぶように",
      "lines": [
        {
          "text": "As a decrepit father takes delight",
          "ja": "足腰の衰えた老いた父親が"
        },
        {
          "text": "To see his active child do deeds of youth,",
          "ja": "我が子の若々しく敏捷な姿を見て心から喜ぶように"
        },
        {
          "text": "So I, made lame by Fortune’s dearest spite,",
          "ja": "運命の残酷な打撃によって傷つき衰えた私もまた"
        },
        {
          "text": "Take all my comfort of thy worth and truth;",
          "ja": "君の類まれなる美徳と美しさに、すべての慰めを見出している。"
        },
        {
          "text": "For whether beauty, birth, or wealth, or wit,",
          "ja": "美しさであれ、高貴な家柄であれ、富であれ、知性であれ"
        },
        {
          "text": "Or any of these all, or all, or more,",
          "ja": "あるいはそのすべてが、最も見事な調和をもって"
        },
        {
          "text": "Entitled in thy parts, do crowned sit,",
          "ja": "君というひとりの器の中に美しく注ぎ込まれているのだから"
        },
        {
          "text": "I make my love engrafted, to this store:",
          "ja": "私は自らの愛を、その栄光の台座の上にしっかりと据えるのだ。"
        },
        {
          "text": "So then I am not lame, poor, nor despis’d,",
          "ja": "そうすれば私はもはや傷ついてなどおらず、貧しくも卑しくもなく"
        },
        {
          "text": "Whilst that this shadow doth such substance give",
          "ja": "この影のような我が身に、君の豊かな光が降り注ぐのだから。"
        },
        {
          "text": "That I in thy abundance am suffic’d,",
          "ja": "君の栄光の分け前を浴びるだけで、私は十分に満ち足りている"
        },
        {
          "text": "And by a part of all thy glory live.",
          "ja": "君が誇るその美しさの、ほんの一部が私に注がれるだけで。"
        },
        {
          "text": "Look what is best, that best I wish in thee:",
          "ja": "願わくは、君が最高と望むすべての幸運が君に訪れますように！"
        },
        {
          "text": "This wish I have; then ten times happy me!",
          "ja": "その願いが叶うなら、私は十倍もの幸福に包まれるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 38,
      "title_ja": "君が息吹を与えるなら詩神は枯れない",
      "lines": [
        {
          "text": "How can my Muse want subject to invent,",
          "ja": "私の詩神が、書くべき言葉に困ることなどどうしてあろうか"
        },
        {
          "text": "While thou dost breathe, that pour’st into my verse",
          "ja": "君が私の詩の紙の上に、その甘美な息吹を注ぎ込んでくれる限りは。"
        },
        {
          "text": "Thine own sweet argument, too excellent",
          "ja": "君という存在は、あまりに尊い言葉の源であり"
        },
        {
          "text": "For every vulgar paper to rehearse?",
          "ja": "どんなありふれた紙でさえ、高貴な詩へと変えてしまうのだから。"
        },
        {
          "text": "O! give thyself the thanks, if aught in me",
          "ja": "君自身に感謝するがよい、もし私の詩の中に"
        },
        {
          "text": "Worthy perusal stand against thy sight;",
          "ja": "君の瞳を捉えるに足る、わずかでも価値ある言葉があるならば。"
        },
        {
          "text": "For who’s so dumb that cannot write to thee,",
          "ja": "君の面影を見つめながら沈黙を守るほど愚かな者が"
        },
        {
          "text": "When thou thyself dost give invention light?",
          "ja": "一体この世のどこにいようか。君自身が光を放っているというのに。"
        },
        {
          "text": "Be thou the tenth Muse, ten times more in worth",
          "ja": "君こそは、十番目の詩神（ムーサ）となるべき人だ"
        },
        {
          "text": "Than those old nine which rhymers invocate;",
          "ja": "古代の詩人たちが讃えた九柱の女神たちよりも十倍も尊い存在。"
        },
        {
          "text": "And he that calls on thee, let him bring forth",
          "ja": "君の名を呼ぶ詩人には、誰であっても永遠の歌が授けられ"
        },
        {
          "text": "Eternal numbers to outlive long date.",
          "ja": "その詩は、遠い未来の歳月をも軽々と超えてゆくだろう。"
        },
        {
          "text": "If my slight Muse do please these curious days,",
          "ja": "もし私の拙い詩が、この批判的な時代に愛されることがあるならば"
        },
        {
          "text": "The pain be mine, but thine shall be the praise.",
          "ja": "苦労は私のもの、だがその栄光はすべて君のものなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 39,
      "title_ja": "君と私が一つなら自らを讃えられようか",
      "lines": [
        {
          "text": "O! how thy worth with manners may I sing,",
          "ja": "ああ、私はどうやって君の美徳を讃えればよいのだろう"
        },
        {
          "text": "When thou art all the better part of me?",
          "ja": "君と私はひとつであり"
        },
        {
          "text": "What can mine own praise to mine own self bring?",
          "ja": "君は私自身のより良き半身であるというのに。"
        },
        {
          "text": "And what is’t but mine own when I praise thee?",
          "ja": "自分自身を褒め称えることなど、誰にできようか"
        },
        {
          "text": "Even for this, let us divided live,",
          "ja": "我が身を讃えることは、ただの浅ましい自惚れに過ぎないではないか。"
        },
        {
          "text": "And our dear love lose name of single one,",
          "ja": "だからこそ私たちは、離れ離れに生きねばならないのだ"
        },
        {
          "text": "That by this separation I may give",
          "ja": "二人の愛がひとつであっても、身体を二つに分かつことによって"
        },
        {
          "text": "That due to thee which thou deserv’st alone.",
          "ja": "私は君に、受けるべき正当な賛辞を捧げることができるのだから。"
        },
        {
          "text": "O absence! what a torment wouldst thou prove,",
          "ja": "君という存在を、私自身から切り離して見つめるために。"
        },
        {
          "text": "Were it not thy sour leisure gave sweet leave,",
          "ja": "ああ別離よ、お前が愛する者にもたらす苦痛はどれほど重いことか"
        },
        {
          "text": "To entertain the time with thoughts of love,",
          "ja": "もしお前の残酷な暇が、甘美な孤独を与えてくれなかったなら。"
        },
        {
          "text": "Which time and thoughts so sweetly doth deceive,",
          "ja": "愛の想いに耽る甘やかな時間を許してくれなかったなら。"
        },
        {
          "text": "And that thou teachest how to make one twain,",
          "ja": "離れているからこそ、私は君を心の中で抱きしめることができる"
        },
        {
          "text": "By praising him here who doth hence remain.",
          "ja": "君と私はひとつでありながら、二倍の愛を語り合えるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 40,
      "title_ja": "愛する者をすべて奪い去るがよい",
      "lines": [
        {
          "text": "Take all my loves, my love, yea take them all;",
          "ja": "私の愛するすべてのものを奪い去るがよい、愛する友よ"
        },
        {
          "text": "What hast thou then more than thou hadst before?",
          "ja": "持てるすべてを取るがよい。それで君が豊かになるというのなら。"
        },
        {
          "text": "No love, my love, that thou mayst true love call;",
          "ja": "君が新たに手に入れる愛の何一つとして、かつて君のものでなかったものはない"
        },
        {
          "text": "All mine was thine, before thou hadst this more.",
          "ja": "この私の真の愛は、すべて初めから君のものだったのだから。"
        },
        {
          "text": "Then, if for my love, thou my love receivest,",
          "ja": "もし君が、私の愛する女を愛として受け入れるのなら"
        },
        {
          "text": "I cannot blame thee, for my love thou usest;",
          "ja": "私は君を責めはしない、君が私の宝を愛してくれるのだから。"
        },
        {
          "text": "But yet be blam’d, if thou thyself deceivest",
          "ja": "だがもし君が、愛しもしないのに彼女を奪い去り"
        },
        {
          "text": "By wilful taste of what thyself refusest.",
          "ja": "ただ気まぐれな肉欲によって私を裏切るのだとしたら、私は君を責めよう。"
        },
        {
          "text": "I do forgive thy robbery, gentle thief,",
          "ja": "甘美な盗賊よ、私は君の強奪を許そう"
        },
        {
          "text": "Although thou steal thee all my poverty:",
          "ja": "君が私の全財産を奪い去ったとしても。"
        },
        {
          "text": "And yet, love knows it is a greater grief",
          "ja": "だが愛の裏切りがもたらす悲哀は、あまりに深く痛ましい"
        },
        {
          "text": "To bear love’s wrong, than hate’s known injury.",
          "ja": "敵から受けるどんな侮辱の傷口よりも、はるかに痛いのだから。"
        },
        {
          "text": "Lascivious grace, in whom all ill well shows,",
          "ja": "悪事さえも愛らしく見せてしまう、蠱惑的な君よ"
        },
        {
          "text": "Kill me with spites yet we must not be foes.",
          "ja": "私を殺すのもよい、だが私を敵として憎むことだけはしないでほしい。"
        }
      ],
      "audio": null
    },
    {
      "no": 41,
      "title_ja": "若き日の甘き過ちを許そう",
      "lines": [
        {
          "text": "Those pretty wrongs that liberty commits,",
          "ja": "君が私の元を離れ、自由気ままに犯す愛の過ちは"
        },
        {
          "text": "When I am sometime absent from thy heart,",
          "ja": "君の若さと美しさを思えば"
        },
        {
          "text": "Thy beauty, and thy years full well befits,",
          "ja": "仕方のないことなのかもしれない。"
        },
        {
          "text": "For still temptation follows where thou art.",
          "ja": "誘惑の魔の手は、君の行く手の至るところに待ち構えているのだから。"
        },
        {
          "text": "Gentle thou art, and therefore to be won,",
          "ja": "君は優しく美しい、だから誰もが君を求めてやまない。"
        },
        {
          "text": "Beauteous thou art, therefore to be assail’d;",
          "ja": "君は愛らしい、だから誰もが君を誘惑せずにはいられない。"
        },
        {
          "text": "And when a woman woos, what woman’s son",
          "ja": "女が求めて迫るとき、一体どこの男の子供が"
        },
        {
          "text": "Will sourly leave her till he have prevail’d?",
          "ja": "冷淡に彼女を拒み、立ち去ることなどできようか。"
        },
        {
          "text": "Ay me! but yet thou mightst my seat forbear,",
          "ja": "ああ、だが君は、我が身の席を守るべきだったのだ"
        },
        {
          "text": "And chide thy beauty and thy straying youth,",
          "ja": "その若さと美しさが、君を暴走へと駆り立てるとしても。"
        },
        {
          "text": "Who lead thee in their riot even there",
          "ja": "美しさが引き起こす情熱に身を任せるあまり"
        },
        {
          "text": "Where thou art forced to break a twofold truth:",
          "ja": "二重の誓いを破り、二重の愛を傷つけてしまう前に。"
        },
        {
          "text": "Hers by thy beauty tempting her to thee,",
          "ja": "彼女を誘惑して、彼女の私への愛の誓いを破らせ"
        },
        {
          "text": "Thine by thy beauty being false to me.",
          "ja": "そして君自身もまた、私への揺るぎなき友情の誓いを破ってしまったのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 42,
      "title_ja": "君が彼女を愛し彼女が君を愛しても",
      "lines": [
        {
          "text": "That thou hast her it is not all my grief,",
          "ja": "君が彼女を手に入れたこと、それが私の悲しみのすべてではない"
        },
        {
          "text": "And yet it may be said I loved her dearly;",
          "ja": "たとえ彼女を深く愛していたとしても、それだけなら耐えられる。"
        },
        {
          "text": "That she hath thee is of my wailing chief,",
          "ja": "私の胸を最も深く突き刺す痛みは、彼女が君を手に入れたことだ"
        },
        {
          "text": "A loss in love that touches me more nearly.",
          "ja": "愛する友を奪われた喪失こそが、私の魂を最も激しく苛むのだ。"
        },
        {
          "text": "Loving offenders thus I will excuse ye:",
          "ja": "私は二人の愛の盗賊を、こう言って許そうとする、"
        },
        {
          "text": "Thou dost love her, because thou know’st I love her;",
          "ja": "「君が彼女を愛するのは、私が彼女を愛していたと知っているからだ"
        },
        {
          "text": "And for my sake even so doth she abuse me,",
          "ja": "そして彼女が君を愛するのも、私が君を愛していると知っているからだ」と。"
        },
        {
          "text": "Suffering my friend for my sake to approve her.",
          "ja": "君への愛のために彼女を愛し、彼女への愛のために君を愛しているのだと。"
        },
        {
          "text": "If I lose thee, my loss is my love’s gain,",
          "ja": "もし私が友を失うなら、その友は我が愛する女性の胸に抱かれ"
        },
        {
          "text": "And losing her, my friend hath found that loss;",
          "ja": "もし私が彼女を失うなら、私の友が彼女の愛をその手に抱く。"
        },
        {
          "text": "Both find each other, and I lose both twain,",
          "ja": "二人は互いを見つけ合い、私ひとりだけが二人を失って取り残される"
        },
        {
          "text": "And both for my sake lay on me this cross:",
          "ja": "二人は私という犠牲の十字架の上に、自らの愛を築き上げているのだ。"
        },
        {
          "text": "But here’s the joy; my friend and I are one;",
          "ja": "だが甘美な慰めよ、我が友と私はひとつの心なのだから"
        },
        {
          "text": "Sweet flattery! then she loves but me alone.",
          "ja": "彼女が友を愛するということは、私を愛しているのと同じことなのだから！"
        }
      ],
      "audio": null
    },
    {
      "no": 43,
      "title_ja": "目を閉じるとき最もよく君が見える",
      "lines": [
        {
          "text": "When most I wink, then do mine eyes best see,",
          "ja": "最も深く目を閉じるとき、私の瞳は最も明るく物を見つめる。"
        },
        {
          "text": "For all the day they view things unrespected;",
          "ja": "昼の光の中で私の目は"
        },
        {
          "text": "But when I sleep, in dreams they look on thee,",
          "ja": "価値のない日常の雑多な景色しか見ないが"
        },
        {
          "text": "And darkly bright, are bright in dark directed.",
          "ja": "眠りに落ちて目を閉じるとき、我が夢は君の姿を捉え"
        },
        {
          "text": "Then thou, whose shadow shadows doth make bright,",
          "ja": "暗闇の中で眩い光を放ち"
        },
        {
          "text": "How would thy shadow’s form form happy show",
          "ja": "影なき闇を明るく照らし出すのだから。"
        },
        {
          "text": "To the clear day with thy much clearer light,",
          "ja": "ならば君の影の姿でさえ、これほど美しく闇を照らし出し"
        },
        {
          "text": "When to unseeing eyes thy shade shines so!",
          "ja": "閉ざされた私の目を通して、深い夜を光り輝かせるのだとしたら"
        },
        {
          "text": "How would, I say, mine eyes be blessed made",
          "ja": "君の実体そのものは、一体どれほど眩い奇跡を見せてくれることだろう"
        },
        {
          "text": "By looking on thee in the living day,",
          "ja": "輝く昼の光の中で、君の姿をこの目で見つめることができたなら！"
        },
        {
          "text": "When in dead night thy fair imperfect shade",
          "ja": "夜の静寂の中で、君の美しい面影が"
        },
        {
          "text": "Through heavy sleep on sightless eyes doth stay!",
          "ja": "眠れる重い瞼の奥に浮かび上がるだけで、私の目はどれほど祝福されることか。"
        },
        {
          "text": "All days are nights to see till I see thee,",
          "ja": "君を見ることができないあらゆる昼は、私にとって暗い夜であり"
        },
        {
          "text": "And nights bright days when dreams do show thee me.",
          "ja": "夢の中で君を見るあらゆる夜は、私にとって輝かしい昼となるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 44,
      "title_ja": "もし我が肉体が重き土でなければ",
      "lines": [
        {
          "text": "If the dull substance of my flesh were thought,",
          "ja": "もし私のこの肉体が、重苦しい土の塊でなかったなら"
        },
        {
          "text": "Injurious distance should not stop my way;",
          "ja": "どんな理不尽な距離も"
        },
        {
          "text": "For then despite of space I would be brought,",
          "ja": "私の歩みを止めることはできなかっただろう。"
        },
        {
          "text": "From limits far remote, where thou dost stay.",
          "ja": "果てしなく広がる空間の隔たりを飛び越えて"
        },
        {
          "text": "No matter then although my foot did stand",
          "ja": "君のいる遠くの場所へと、私は瞬時に駆けつけることができたはずだ。"
        },
        {
          "text": "Upon the farthest earth remov’d from thee;",
          "ja": "たとえ私の足が、地上の果ての見知らぬ荒野に置かれていようとも"
        },
        {
          "text": "For nimble thought can jump both sea and land,",
          "ja": "俊敏な想いの力は、海と陸をひとっ飛びに飛び越えて"
        },
        {
          "text": "As soon as think the place where he would be.",
          "ja": "想いが向かうべき場所へと、たちまち辿り着くことができるのだから。"
        },
        {
          "text": "But, ah! thought kills me that I am not thought,",
          "ja": "だが悲しいかな、私自身は想いそのものではなく"
        },
        {
          "text": "To leap large lengths of miles when thou art gone,",
          "ja": "君の元へと瞬時に飛んでゆくことができない。"
        },
        {
          "text": "But that so much of earth and water wrought,",
          "ja": "私は土と水という、重く鈍い元素によって形づくられており"
        },
        {
          "text": "I must attend time’s leisure with my moan;",
          "ja": "ただ時の歩みに従い、涙を流しながら嘆き待つしかないのだ。"
        },
        {
          "text": "Receiving nought by elements so slow",
          "ja": "この重苦しい肉体から生まれるものといえば"
        },
        {
          "text": "But heavy tears, badges of either’s woe.",
          "ja": "ただ君の不在を悲しむ、重い涙のしずく以外にはないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 45,
      "title_ja": "風と火のような想いは君のもとへ",
      "lines": [
        {
          "text": "The other two, slight air, and purging fire",
          "ja": "私を形づくる他の二つの軽やかな元素、澄んだ空気と清らかな火は"
        },
        {
          "text": "Are both with thee, wherever I abide;",
          "ja": "私がどこにいようとも、常に君のもとへと飛んでゆく。"
        },
        {
          "text": "The first my thought, the other my desire,",
          "ja": "空気は我が想いであり、火は我が激しい情熱の炎"
        },
        {
          "text": "These present-absent with swift motion slide.",
          "ja": "この二つはいかなる距離にも妨げられず、瞬時に行き来する。"
        },
        {
          "text": "For when these quicker elements are gone",
          "ja": "この二つの素早き使者たちが、君への愛を届けるために旅立ち"
        },
        {
          "text": "In tender embassy of love to thee,",
          "ja": "私の肉体をあとに残していくとき"
        },
        {
          "text": "My life, being made of four, with two alone",
          "ja": "土と水という二つの重い元素だけに残された私の生命は"
        },
        {
          "text": "Sinks down to death, oppress’d with melancholy;",
          "ja": "死の淵へと沈み込み、重い憂鬱の底で嘆き悲しむ。"
        },
        {
          "text": "Until life’s composition be recur’d",
          "ja": "私の命の調和は乱れ、息絶え絶えになって倒れ伏すのだ"
        },
        {
          "text": "By those swift messengers return’d from thee,",
          "ja": "あの軽やかな使者たちが、再び君のもとから帰ってくるその時までは。"
        },
        {
          "text": "Who even but now come back again, assur’d,",
          "ja": "やがて彼らは戻り、君の健康と変わらぬ愛の便りを携えて"
        },
        {
          "text": "Of thy fair health, recounting it to me:",
          "ja": "私の耳に甘やかな報告を囁き届けてくれる。"
        },
        {
          "text": "This told, I joy; but then no longer glad,",
          "ja": "私は再び息を吹き返し、喜びに胸を震わせるのだ"
        },
        {
          "text": "I send them back again, and straight grow sad.",
          "ja": "だがたちまち彼らは再び君のもとへと飛び去り、私はまた悲しみに沈む。"
        }
      ],
      "audio": null
    },
    {
      "no": 46,
      "title_ja": "瞳と心が激しい争いを繰り広げ",
      "lines": [
        {
          "text": "Mine eye and heart are at a mortal war,",
          "ja": "私の瞳と心が、いま激しい戦いを繰り広げている"
        },
        {
          "text": "How to divide the conquest of thy sight;",
          "ja": "君の姿という獲物を、どちらが独占するかをめぐって。"
        },
        {
          "text": "Mine eye my heart thy picture’s sight would bar,",
          "ja": "我が瞳は、君の肖像画を心の部屋から締め出そうとし"
        },
        {
          "text": "My heart mine eye the freedom of that right.",
          "ja": "我が心は、瞳が君を見つめる権利を奪い取ろうとする。"
        },
        {
          "text": "My heart doth plead that thou in him dost lie,",
          "ja": "心は主張する、「君の真の姿は我が胸の奥深くに住んでいる"
        },
        {
          "text": "A closet never pierced with crystal eyes;",
          "ja": "いかなる水晶の瞳も"
        },
        {
          "text": "But the defendant doth that plea deny,",
          "ja": "心の深奥を覗き見ることはできない」と。"
        },
        {
          "text": "And says in him thy fair appearance lies.",
          "ja": "だが瞳は反論する、「君の美しい姿が映し出されているのは我が瞳の中であり"
        },
        {
          "text": "To side this title is impannelled",
          "ja": "君の外面の輝きは、この瞳の中にこそ宿るのだ」と。"
        },
        {
          "text": "A quest of thoughts, all tenants to the heart;",
          "ja": "この激しい内乱を裁くために、陪審員たちが法廷に召喚された"
        },
        {
          "text": "And by their verdict is determined",
          "ja": "それは心の中に仕える、澄み切った思考の陪審員たち。"
        },
        {
          "text": "The clear eye’s moiety, and the dear heart’s part:",
          "ja": "彼らの下した公正な判決によって、君の権利は美しく二分された。"
        },
        {
          "text": "As thus; mine eye’s due is thy outward part,",
          "ja": "「我が瞳は、君の外見の美しさと視線の喜びを分かち持ち"
        },
        {
          "text": "And my heart’s right, thy inward love of heart.",
          "ja": "我が心は、君の内面の愛と魂の絆を永遠に独占する」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 47,
      "title_ja": "瞳と心は和解を結び",
      "lines": [
        {
          "text": "Betwixt mine eye and heart a league is took,",
          "ja": "いまや私の瞳と心は、固き同盟の和解を結び"
        },
        {
          "text": "And each doth good turns now unto the other:",
          "ja": "互いに手を取り合って、互いの飢えを助け合っている。"
        },
        {
          "text": "When that mine eye is famish’d for a look,",
          "ja": "瞳が君の姿を恋しがって涙に暮れるとき"
        },
        {
          "text": "Or heart in love with sighs himself doth smother,",
          "ja": "心は自らの胸を開き、秘められた君の愛を瞳に見せてやる。"
        },
        {
          "text": "With my love’s picture then my eye doth feast,",
          "ja": "また心が君への切なさに胸を締め付けられるとき"
        },
        {
          "text": "And to the painted banquet bids my heart;",
          "ja": "瞳は君の美しい肖像画を心に差し出し、愛の祝宴を開く。"
        },
        {
          "text": "Another time mine eye is my heart’s guest,",
          "ja": "こうして君の肖像画と私の愛の力によって"
        },
        {
          "text": "And in his thoughts of love doth share a part:",
          "ja": "どんなに遠く離れていようとも、君は常に私と共にいるのだ。"
        },
        {
          "text": "So, either by thy picture or my love,",
          "ja": "君は私の思考よりも遠くへ行くことなど決してできない"
        },
        {
          "text": "Thyself away, art present still with me;",
          "ja": "私の思考は常に君と共にあり"
        },
        {
          "text": "For thou not farther than my thoughts canst move,",
          "ja": "君もまた私の思考と共にあるのだから。"
        },
        {
          "text": "And I am still with them, and they with thee;",
          "ja": "たとえ思考が眠りに落ちようとも、君の面影が私の瞳を呼び覚まし"
        },
        {
          "text": "Or, if they sleep, thy picture in my sight",
          "ja": "私の心と瞳の両方を、甘やかな歓喜で満たしてくれる。"
        },
        {
          "text": "Awakes my heart, to heart’s and eye’s delight.",
          "ja": "君がどれほど遠くにいようとも、君は私の胸の中に生きているのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 48,
      "title_ja": "旅に出る時小さな宝は鍵をかけたが",
      "lines": [
        {
          "text": "How careful was I when I took my way,",
          "ja": "旅に出るとき"
        },
        {
          "text": "Each trifle under truest bars to thrust,",
          "ja": "私はどんな些細な持ち物にも用心深く鍵をかけた"
        },
        {
          "text": "That to my use it might unused stay",
          "ja": "日々の暮らしで使う小さな品々でさえ、"
        },
        {
          "text": "From hands of falsehood, in sure wards of trust!",
          "ja": "盗人の卑しい手に触れられぬよう、頑丈な小箱の中に収めておいた。"
        },
        {
          "text": "But thou, to whom my jewels trifles are,",
          "ja": "だが、あらゆる宝の中でも最も尊い君に対して"
        },
        {
          "text": "Most worthy comfort, now my greatest grief,",
          "ja": "私の最大の宝であり、唯一の歓喜である君に対して、私は何をしただろうか。"
        },
        {
          "text": "Thou best of dearest, and mine only care,",
          "ja": "君はどんな宝石よりも尊く、どんな富よりも眩しいというのに"
        },
        {
          "text": "Art left the prey of every vulgar thief.",
          "ja": "今や君は、誰の目にも触れ得る無防備な場所に残されている。"
        },
        {
          "text": "Thee have I not lock’d up in any chest,",
          "ja": "私は君を、どんな鍵付きの箱にも閉じ込めておくことができない"
        },
        {
          "text": "Save where thou art not, though I feel thou art,",
          "ja": "ただ、君がいつも住んでいる我が胸の奥深き部屋以外には。"
        },
        {
          "text": "Within the gentle closure of my breast,",
          "ja": "そこは鍵などなくても、私の魂が君を守り続ける場所。"
        },
        {
          "text": "From whence at pleasure thou mayst come and part;",
          "ja": "だがそれでも私は恐れている、君がそこから盗み去られてしまうのではないかと。"
        },
        {
          "text": "And even thence thou wilt be stol’n I fear,",
          "ja": "誠実な者でさえ、君の美しさの前には盗賊へと変わってしまうのだから"
        },
        {
          "text": "For truth proves thievish for a prize so dear.",
          "ja": "あまりに尊い宝は、聖者の心さえも狂わせてしまうのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 49,
      "title_ja": "君が私を見捨てるその日のために",
      "lines": [
        {
          "text": "Against that time, if ever that time come,",
          "ja": "やがて来るかもしれないその日のために"
        },
        {
          "text": "When I shall see thee frown on my defects,",
          "ja": "もしその日が来るならば"
        },
        {
          "text": "When as thy love hath cast his utmost sum,",
          "ja": "君が私の欠点を見つめ、冷たく眉をひそめるその日のために"
        },
        {
          "text": "Call’d to that audit by advis’d respects;",
          "ja": "君の愛がその勘定をすべて清算し終えて"
        },
        {
          "text": "Against that time when thou shalt strangely pass,",
          "ja": "厳格な礼儀正しさという冷たい帳簿を差し出してくるその日のために"
        },
        {
          "text": "And scarcely greet me with that sun, thine eye,",
          "ja": "君が旅人のように私の傍らを通り過ぎ"
        },
        {
          "text": "When love, converted from the thing it was,",
          "ja": "かつて太陽のように輝いていたその瞳が、別人のように冷たくよそよそしくなるその日のために"
        },
        {
          "text": "Shall reasons find of settled gravity;",
          "ja": "私は今から、自分自身を要塞の中に立て籠もらせよう"
        },
        {
          "text": "Against that time do I ensconce me here,",
          "ja": "私自身の無力と欠点を、自らの口からすべて証言しながら。"
        },
        {
          "text": "Within the knowledge of mine own desert,",
          "ja": "私は自ら法廷に立ち、君の側に立って証言しよう"
        },
        {
          "text": "And this my hand, against my self uprear,",
          "ja": "君が私を見捨てる正当な理由を、私自身の手で並べ立てながら。"
        },
        {
          "text": "To guard the lawful reasons on thy part:",
          "ja": "私には、君の愛を繋ぎ止めるいかなる権利もないのだと。"
        },
        {
          "text": "To leave poor me thou hast the strength of laws,",
          "ja": "なぜなら、貧しくみすぼらしいこの私が"
        },
        {
          "text": "Since why to love I can allege no cause.",
          "ja": "君のような比類なき至高の愛を受け続ける理由など、どこにもないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 50,
      "title_ja": "重い足取りで進む馬の背の上で",
      "lines": [
        {
          "text": "How heavy do I journey on the way,",
          "ja": "旅路を進む私の足取りは、どれほど重く沈んでいることか"
        },
        {
          "text": "When what I seek, my weary travel’s end,",
          "ja": "私が求める唯一の安息が、君から遠く離れることであるならば。"
        },
        {
          "text": "Doth teach that ease and that repose to say,",
          "ja": "疲れ切った馬の背に揺られながら、私は溜息をつく"
        },
        {
          "text": "‘Thus far the miles are measured from thy friend!’",
          "ja": "「お前が進む一歩一歩が、愛する人から私を引き離してゆくのだ」と。"
        },
        {
          "text": "The beast that bears me, tired with my woe,",
          "ja": "私の下で重い足取りを運ぶ哀れな馬は"
        },
        {
          "text": "Plods dully on, to bear that weight in me,",
          "ja": "私の胸の底知れぬ重さを敏感に感じ取っているかのようだ。"
        },
        {
          "text": "As if by some instinct the wretch did know",
          "ja": "拍車を当てて急き立てても、馬はただ鈍く進むだけ"
        },
        {
          "text": "His rider lov’d not speed, being made from thee:",
          "ja": "速く走ることが、愛する人から遠ざかることだと知っているかのように。"
        },
        {
          "text": "The bloody spur cannot provoke him on,",
          "ja": "血を流すほどの鋭い拍車の痛みでさえ"
        },
        {
          "text": "That sometimes anger thrusts into his hide,",
          "ja": "馬の鈍い歩みを速めることはできず、馬はただ重く嘶くだけだ。"
        },
        {
          "text": "Which heavily he answers with a groan,",
          "ja": "その嘶きは、拍車よりも鋭く私の胸を突き刺す"
        },
        {
          "text": "More sharp to me than spurring to his side;",
          "ja": "「お前の行く先には悲しみしかなく、喜びはすべて後ろに残してきたのだ」と。"
        },
        {
          "text": "For that same groan doth put this in my mind,",
          "ja": "愛する人から遠ざかる旅路において"
        },
        {
          "text": "My grief lies onward, and my joy behind.",
          "ja": "進むことのすべてが、ただ悲哀の距離を積み重ねるだけなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 51,
      "title_ja": "愛が走る速さに馬は追いつけない",
      "lines": [
        {
          "text": "Thus can my love excuse the slow offence",
          "ja": "こうして私の愛は、あの哀れな鈍い馬を許すのだ"
        },
        {
          "text": "Of my dull bearer when from thee I speed:",
          "ja": "君から遠ざかる旅において"
        },
        {
          "text": "From where thou art why should I haste me thence?",
          "ja": "馬が急ぎ足で進まなかったことを。"
        },
        {
          "text": "Till I return, of posting is no need.",
          "ja": "君の元を去る旅において、急ぐ理由など何一つないのだから。"
        },
        {
          "text": "O! what excuse will my poor beast then find,",
          "ja": "だが"
        },
        {
          "text": "When swift extremity can seem but slow?",
          "ja": "君のもとへと帰る旅路においては、いかなる駿馬であっても"
        },
        {
          "text": "Then should I spur, though mounted on the wind,",
          "ja": "私の燃えるような渇望に追いつくことなどできはしない。"
        },
        {
          "text": "In winged speed no motion shall I know,",
          "ja": "たとえ風の翼に乗って飛んだとしても、私の焦燥には遅すぎるのだ。"
        },
        {
          "text": "Then can no horse with my desire keep pace;",
          "ja": "だから私は、どんな駿馬をも走らせる必要はない"
        },
        {
          "text": "Therefore desire, of perfect’st love being made,",
          "ja": "どんな馬であっても、愛の速さの前には立ち止まっているに等しいのだから。"
        },
        {
          "text": "Shall neigh no dull flesh in his fiery race,",
          "ja": "愛は羽を持たぬ想いとなって、瞬時に空間を飛び越え"
        },
        {
          "text": "But love, for love, thus shall excuse my jade:",
          "ja": "馬を置き去りにして、君の胸へと駆けつけるのだから。"
        },
        {
          "text": "‘Since from thee going, he went wilful-slow,",
          "ja": "帰りの旅路において、私は馬の鈍さを寛大に許そう"
        },
        {
          "text": "Towards thee I’ll run, and give him leave to go.’",
          "ja": "「お前はただゆっくり歩むがよい、私の魂はすでに君の元へ飛んでいるのだから」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 52,
      "title_ja": "年に一度の祝宴のように貴重な逢瀬",
      "lines": [
        {
          "text": "So am I as the rich, whose blessed key,",
          "ja": "私は、金庫の鍵を持つ裕福な主人のようだ"
        },
        {
          "text": "Can bring him to his sweet up-locked treasure,",
          "ja": "滅多に開けることのない貴重な宝箱を、大切に守り続ける主人のように。"
        },
        {
          "text": "The which he will not every hour survey,",
          "ja": "主人は毎時間ごとに宝を取り出して眺めたりはしない"
        },
        {
          "text": "For blunting the fine point of seldom pleasure.",
          "ja": "贅沢の甘美な鋭さが、日常の慣れによって鈍ってしまうのを恐れるからだ。"
        },
        {
          "text": "Therefore are feasts so solemn and so rare,",
          "ja": "だからこそ、年に一度しか訪れぬ祝祭の日はこれほど尊く"
        },
        {
          "text": "Since, seldom coming in that long year set,",
          "ja": "退屈な日々の連なりの中に、稀にしか置かれぬからこそ輝くのだ。"
        },
        {
          "text": "Like stones of worth they thinly placed are,",
          "ja": "高貴な首飾りの中に、間隔を空けて散りばめられた"
        },
        {
          "text": "Or captain jewels in the carcanet.",
          "ja": "大粒のダイヤモンドのように、特別な輝きを放ちながら。"
        },
        {
          "text": "So is the time that keeps you as my chest,",
          "ja": "君と私の逢瀬もまた同じだ。"
        },
        {
          "text": "Or as the wardrobe which the robe doth hide,",
          "ja": "君を閉じ込める時間は"
        },
        {
          "text": "To make some special instant special-blest,",
          "ja": "衣装戸棚のように、特別な祝宴の晴れ着を大切に隠している。"
        },
        {
          "text": "By new unfolding his imprison’d pride.",
          "ja": "その扉が開かれる瞬間を、何倍もの歓喜で満たすために。"
        },
        {
          "text": "Blessed are you whose worthiness gives scope,",
          "ja": "君を持つことは無上の祝福であり、君を待つこともまた希望の誇りである"
        },
        {
          "text": "Being had, to triumph; being lacked, to hope.",
          "ja": "君がいるときは喜びを抱きしめ、君なきときは再会の希望を抱きしめるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 53,
      "title_ja": "あらゆる美の影は君ひとりを映し出す",
      "lines": [
        {
          "text": "What is your substance, whereof are you made,",
          "ja": "君はいかなる神秘の素材で形づくられているのだろうか"
        },
        {
          "text": "That millions of strange shadows on you tend?",
          "ja": "何百万もの見知らぬ影たちが"
        },
        {
          "text": "Since every one, hath every one, one shade,",
          "ja": "君ひとりに仕えているのはなぜか。"
        },
        {
          "text": "And you but one, can every shadow lend.",
          "ja": "あらゆる人間は、それぞれ自分ひとりの影しか持たないというのに"
        },
        {
          "text": "Describe Adonis, and the counterfeit",
          "ja": "君ひとりだけが、この世のあらゆる美の影を貸し与えている。"
        },
        {
          "text": "Is poorly imitated after you;",
          "ja": "アドニスの美しい姿を描こうとすれば、それは君の貧しい模倣となり"
        },
        {
          "text": "On Helen’s cheek all art of beauty set,",
          "ja": "ヘレネの美貌を絵画に写し取れば、ギリシャの装束を纏った君の姿となる。"
        },
        {
          "text": "And you in Grecian tires are painted new:",
          "ja": "春の盛りを描いても、実り豊かな秋の収穫を描いても"
        },
        {
          "text": "Speak of the spring, and foison of the year,",
          "ja": "前者は君の若さの影であり、後者は君の豊かな実りの恵みにすぎない。"
        },
        {
          "text": "The one doth shadow of your beauty show,",
          "ja": "この世に知られたあらゆる賞賛すべき美しさの形の中に"
        },
        {
          "text": "The other as your bounty doth appear;",
          "ja": "私たちはただ、君の面影の断片を見出しているにすぎないのだ。"
        },
        {
          "text": "And you in every blessed shape we know.",
          "ja": "あらゆる外見の美しさは、君の美しさの写し絵にすぎない。"
        },
        {
          "text": "In all external grace you have some part,",
          "ja": "だが、君のその揺るぎなき誠実な心に匹敵するものは"
        },
        {
          "text": "But you like none, none you, for constant heart.",
          "ja": "この地上のどこを探しても、何ひとつとして見出すことはできないのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc151_1601_librivox/spc151_sonnet53_ta.mp3",
        "reader": "Tomas Peter",
        "duration": "1:46"
      }
    },
    {
      "no": 54,
      "title_ja": "真実の心が美に香りを添える",
      "lines": [
        {
          "text": "O! how much more doth beauty beauteous seem",
          "ja": "ああ、美しさはどれほど美しく輝きを増すことだろう"
        },
        {
          "text": "By that sweet ornament which truth doth give.",
          "ja": "真実という甘やかな香りが、その美しさに添えられるとき！"
        },
        {
          "text": "The rose looks fair, but fairer we it deem",
          "ja": "薔薇の花はただ見た目が美しいだけでなく"
        },
        {
          "text": "For that sweet odour, which doth in it live.",
          "ja": "その胸に秘められた甘美な香りがあるからこそ、いっそう愛されるのだ。"
        },
        {
          "text": "The canker blooms have full as deep a dye",
          "ja": "野に咲く野薔薇（イヌバラ）も、栽培された紅薔薇と同じように"
        },
        {
          "text": "As the perfumed tincture of the roses.",
          "ja": "鮮やかな緋色の衣を纏い、同じような棘を持ち"
        },
        {
          "text": "Hang on such thorns, and play as wantonly",
          "ja": "夏の風が愛らしき蕾を吹き開くときも、同じように咲き誇る。"
        },
        {
          "text": "When summer’s breath their masked buds discloses:",
          "ja": "だが野薔薇の価値は、ただその見た目だけの見せかけにすぎず"
        },
        {
          "text": "But, for their virtue only is their show,",
          "ja": "誰からも愛されず、誰にも香りを惜しまれぬまま"
        },
        {
          "text": "They live unwoo’d, and unrespected fade;",
          "ja": "ひと知れず咲き、ひと知れず枯れて、誰の記憶にも残らず死んでゆく。"
        },
        {
          "text": "Die to themselves. Sweet roses do not so;",
          "ja": "だが甘やかな本物の紅薔薇はそうではない。花が枯れ果てても"
        },
        {
          "text": "Of their sweet deaths, are sweetest odours made:",
          "ja": "その甘美な死の中から、最高の香水が蒸留されて永遠に生き続ける。"
        },
        {
          "text": "And so of you, beauteous and lovely youth,",
          "ja": "美しき若者よ、君の外見の若さがやがて色褪せる日が来ようとも"
        },
        {
          "text": "When that shall vade, by verse distills your truth.",
          "ja": "君の真実の美徳は、私の詩の中で蒸留され、永遠に香り続けるのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 55,
      "title_ja": "大理石の墓標や黄金の記念碑よりも",
      "lines": [
        {
          "text": "Not marble, nor the gilded monuments",
          "ja": "大理石の墓標も、王侯たちの黄金の記念碑も"
        },
        {
          "text": "Of princes, shall outlive this powerful rhyme;",
          "ja": "この力強い私の詩句よりも長く生き残ることは決してない。"
        },
        {
          "text": "But you shall shine more bright in these contents",
          "ja": "君の姿は、時が荒れ果てた石碑を苔むし風化させる中であっても"
        },
        {
          "text": "Than unswept stone, besmear’d with sluttish time.",
          "ja": "この詩の光の中で、誰よりも鮮やかに輝き続けるだろう。"
        },
        {
          "text": "When wasteful war shall statues overturn,",
          "ja": "荒れ狂う戦争が壮麗な彫像を打ち倒し"
        },
        {
          "text": "And broils root out the work of masonry,",
          "ja": "激しい暴動が堅固な石造りの建物を根底から破壊しようとも"
        },
        {
          "text": "Nor Mars his sword, nor war’s quick fire shall burn",
          "ja": "軍神マルスの剣も、戦争の焼き尽くす炎でさえも"
        },
        {
          "text": "The living record of your memory.",
          "ja": "君の生きた記憶を刻んだこの詩を消し去ることはできない。"
        },
        {
          "text": "’Gainst death, and all-oblivious enmity",
          "ja": "死神の力をも乗り越え、あらゆる忘却の敵意を打ち破って"
        },
        {
          "text": "Shall you pace forth; your praise shall still find room",
          "ja": "君は前へと進み続けるのだ。君への賛美の言葉は"
        },
        {
          "text": "Even in the eyes of all posterity",
          "ja": "この世が終わりを告げる最後の日まで、未来のあらゆる世代の"
        },
        {
          "text": "That wear this world out to the ending doom.",
          "ja": "人々の瞳の中に、永遠の住処を見出し続けるだろう。"
        },
        {
          "text": "So, till the judgement that yourself arise,",
          "ja": "審判の日に君自身が死の眠りから起き上がるその時まで"
        },
        {
          "text": "You live in this, and dwell in lovers’ eyes.",
          "ja": "君はこの詩の中で生き、そして愛する人々の瞳の中に生き続けるのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc183_1809_librivox/spc183_sonnet3-55_bsa.mp3",
        "reader": "Bob Sherman",
        "duration": "1:26"
      }
    },
    {
      "no": 56,
      "title_ja": "甘き愛よ、その刃を鈍らせるな",
      "lines": [
        {
          "text": "Sweet love, renew thy force; be it not said",
          "ja": "甘美な愛よ、その力を新たにしておくれ。"
        },
        {
          "text": "Thy edge should blunter be than appetite,",
          "ja": "誰も君のことを"
        },
        {
          "text": "Which but to-day by feeding is allay’d,",
          "ja": "食欲よりも鈍く弱い力だなどと言わせないために。"
        },
        {
          "text": "To-morrow sharpened in his former might:",
          "ja": "食欲は今日どれほど満たされようとも、明日には再び飢えを覚え"
        },
        {
          "text": "So, love, be thou, although to-day thou fill",
          "ja": "自らの鋭い刃を研ぎ澄まして蘇るではないか。"
        },
        {
          "text": "Thy hungry eyes, even till they wink with fulness,",
          "ja": "愛よ、君も同じであれ。"
        },
        {
          "text": "To-morrow see again, and do not kill",
          "ja": "今日その目を愛の光で満たしたとしても"
        },
        {
          "text": "The spirit of love, with a perpetual dulness.",
          "ja": "明日には再び目を見開き、飢えた瞳で愛を求めよ。"
        },
        {
          "text": "Let this sad interim like the ocean be",
          "ja": "愛の炎を眠り込ませ、鈍い倦怠に沈めてはならない。"
        },
        {
          "text": "Which parts the shore, where two contracted new",
          "ja": "この別離の時間を、海を隔てた二つの岸辺の別れのように見立てよ"
        },
        {
          "text": "Come daily to the banks, that when they see",
          "ja": "日々互いの姿を見つめ合いながら、再会の瞬間を待ち侘びる恋人たちのように。"
        },
        {
          "text": "Return of love, more blest may be the view;",
          "ja": "あるいは、この冬の不在を耐え忍ぶがよい"
        },
        {
          "text": "Or call it winter, which being full of care,",
          "ja": "冬の寒さがあるからこそ、やがて巡り来る春の訪れが"
        },
        {
          "text": "Makes summer’s welcome, thrice more wished, more rare.",
          "ja": "何倍もの歓喜となって、私たちの胸に飛び込んでくるのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc241_2307_librivox/spc241_sonnet56_wt.mp3",
        "reader": "Winston Tharp",
        "duration": "1:18"
      }
    },
    {
      "no": 57,
      "title_ja": "君の召使いとしてただ待つことしかできず",
      "lines": [
        {
          "text": "Being your slave what should I do but tend,",
          "ja": "君の召使いであり奴隷である私に、一体何ができようか"
        },
        {
          "text": "Upon the hours, and times of your desire?",
          "ja": "君が求めるその時間と欲望を、ただじっと待つこと以外に。"
        },
        {
          "text": "I have no precious time at all to spend;",
          "ja": "私には自分自身の時間など一秒たりともなく、費やすべき貴重な時もない"
        },
        {
          "text": "Nor services to do, till you require.",
          "ja": "君が私を必要とし、声をかけてくれるその瞬間までは。"
        },
        {
          "text": "Nor dare I chide the world-without-end hour,",
          "ja": "果てしなく長い時間に文句を言う権利など、私にはない"
        },
        {
          "text": "Whilst I, my sovereign, watch the clock for you,",
          "ja": "愛する主よ、君の時計の針をじっと見つめながら待つことしか。"
        },
        {
          "text": "Nor think the bitterness of absence sour,",
          "ja": "君が召使いの私に暇を出したとしても、その苦々しさを恨む権利もない"
        },
        {
          "text": "When you have bid your servant once adieu;",
          "ja": "一度君に自由を奪われた我が身には。"
        },
        {
          "text": "Nor dare I question with my jealous thought",
          "ja": "嫉妬深い想いを抱いて、「君は今どこにいるのか"
        },
        {
          "text": "Where you may be, or your affairs suppose,",
          "ja": "誰と楽しく語り合っているのか」と問い質す勇気もない。"
        },
        {
          "text": "But, like a sad slave, stay and think of nought",
          "ja": "ただ哀れな奴隷のように、じっと部屋の片隅に佇み"
        },
        {
          "text": "Save, where you are, how happy you make those.",
          "ja": "君が誰かに注いでいるであろう幸福を、遠くから祈るだけだ。"
        },
        {
          "text": "So true a fool is love, that in your will,",
          "ja": "愛とはあまりに愚かな盲目だ。君が何をしていようとも"
        },
        {
          "text": "Though you do anything, he thinks no ill.",
          "ja": "どんな理不尽な行いさえも、悪だと思えなくなってしまうのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 58,
      "title_ja": "君の自由を責める権利など私にはない",
      "lines": [
        {
          "text": "That god forbid, that made me first your slave,",
          "ja": "私を君の奴隷とした神よ、どうか私を守り給え"
        },
        {
          "text": "I should in thought control your times of pleasure,",
          "ja": "君の自由な時間の過ごし方を、私が責めたり問いただしたりせぬように。"
        },
        {
          "text": "Or at your hand the account of hours to crave,",
          "ja": "我が主よ、君の気まぐれな時間の歩みに文句を言ったり"
        },
        {
          "text": "Being your vassal, bound to stay your leisure!",
          "ja": "召使いの身でありながら、君に釈明を求める権利など私にはない。"
        },
        {
          "text": "O! let me suffer, being at your beck,",
          "ja": "ああ、私はただ耐え忍ぶことしか許されていないのだ"
        },
        {
          "text": "The imprison’d absence of your liberty;",
          "ja": "君の不在という名の監禁の中で、じっと苦痛に耐えながら。"
        },
        {
          "text": "And patience, tame to sufferance, bide each check,",
          "ja": "君から受けた傷口を恨み言で汚すことも許されず"
        },
        {
          "text": "Without accusing you of injury.",
          "ja": "ただ忍耐の鎖に縛られて、黙って頭を垂れるしかない。"
        },
        {
          "text": "Be where you list, your charter is so strong",
          "ja": "君の好きな場所へ行くがよい、君には完全な自由があるのだから"
        },
        {
          "text": "That you yourself may privilage your time",
          "ja": "自らの時間をどのように浪費しようとも、それは君の特権なのだ。"
        },
        {
          "text": "To what you will; to you it doth belong",
          "ja": "君は自らに罪を許す絶対の権力者であり"
        },
        {
          "text": "Yourself to pardon of self-doing crime.",
          "ja": "どんな過ちを犯そうとも、自分自身を無罪放免にできるのだから。"
        },
        {
          "text": "I am to wait, though waiting so be hell,",
          "ja": "私はただ待つことしかできない、たとえその待ち時間が地獄であっても"
        },
        {
          "text": "Not blame your pleasure be it ill or well.",
          "ja": "君の気まぐれを責めたりせず、ただ君の帰りを待つことしか。"
        }
      ],
      "audio": null
    },
    {
      "no": 59,
      "title_ja": "かつて書かれたすべてが繰り返されるなら",
      "lines": [
        {
          "text": "If there be nothing new, but that which is",
          "ja": "もしこの世に新しいものなど何一つなく、かつてあったものすべてが"
        },
        {
          "text": "Hath been before, how are our brains beguil’d,",
          "ja": "ただ繰り返されているに過ぎないのだとしたら"
        },
        {
          "text": "Which labouring for invention bear amiss",
          "ja": "私たちの脳はどれほど騙され、無駄な苦労を重ねていることだろう"
        },
        {
          "text": "The second burthen of a former child!",
          "ja": "すでに生み出された子供を、新しく生み出そうともがきながら。"
        },
        {
          "text": "O! that record could with a backward look,",
          "ja": "ああ、願わくは記録の針を五百年巻き戻して"
        },
        {
          "text": "Even of five hundred courses of the sun,",
          "ja": "太陽の五百回の巡りを過去へと遡ることができたなら！"
        },
        {
          "text": "Show me your image in some antique book,",
          "ja": "そして、最初の本が文字として刻まれた最も古い時代の記録の中に"
        },
        {
          "text": "Since mind at first in character was done!",
          "ja": "君の面影がどのように描かれていたかを見ることができたなら！"
        },
        {
          "text": "That I might see what the old world could say",
          "ja": "古の時代が、君の美しい姿をどのように語り伝えていたか"
        },
        {
          "text": "To this composed wonder of your frame;",
          "ja": "言葉の技が君の美しさをどれほど讃えることができたか"
        },
        {
          "text": "Wh’r we are mended, or wh’r better they,",
          "ja": "あるいは、私たちが古人たちよりも進歩したのか、それとも衰退したのか"
        },
        {
          "text": "Or whether revolution be the same.",
          "ja": "それとも時の輪は、ただ同じ美しさをぐるぐると巡らせているだけなのかを。"
        },
        {
          "text": "O! sure I am the wits of former days,",
          "ja": "ああ、確かなことはただ一つ、古の詩人たちがどんな賛辞を費やしたとしても"
        },
        {
          "text": "To subjects worse have given admiring praise.",
          "ja": "君のような比類なき奇跡の美しさを、彼らは決して知らなかったということだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 60,
      "title_ja": "波が小石の浜に打ち寄せるように",
      "lines": [
        {
          "text": "Like as the waves make towards the pebbled shore,",
          "ja": "波が小石の散らばる浜辺へと、休みなく打ち寄せては砕け散るように"
        },
        {
          "text": "So do our minutes hasten to their end;",
          "ja": "私たちの生きる一分一秒もまた、自らの終わりへと急ぎ足で進んでゆく。"
        },
        {
          "text": "Each changing place with that which goes before,",
          "ja": "すべての瞬間は、先行く瞬間の場所を奪い合って入れ替わり"
        },
        {
          "text": "In sequent toil all forwards do contend.",
          "ja": "互いに押し合いながら、休みなく前へと進み続ける。"
        },
        {
          "text": "Nativity, once in the main of light,",
          "ja": "かつて光の海の中に生まれ落ちた幼き命は"
        },
        {
          "text": "Crawls to maturity, wherewith being crown’d,",
          "ja": "やがて這い進み、若さの頂点へと登り詰める。"
        },
        {
          "text": "Crooked eclipses ’gainst his glory fight,",
          "ja": "だが栄光の冠をいただいたその瞬間から、不吉な日食が影を落とし"
        },
        {
          "text": "And Time that gave doth now his gift confound.",
          "ja": "時がかつて与えた贈り物を、時自身の手で容赦なく奪い去ってゆく。"
        },
        {
          "text": "Time doth transfix the flourish set on youth",
          "ja": "時は若さの額に刻まれた、あの輝く美しさを傷つけ"
        },
        {
          "text": "And delves the parallels in beauty’s brow,",
          "ja": "美しき肌に深い平行線の皺を刻み込み"
        },
        {
          "text": "Feeds on the rarities of nature’s truth,",
          "ja": "自然が創り上げた至高の真理を貪り食らい"
        },
        {
          "text": "And nothing stands but for his scythe to mow:",
          "ja": "その鎌の刃の前に、刈り取られずに立つものなど何ひとつとしてない。"
        },
        {
          "text": "And yet to times in hope, my verse shall stand.",
          "ja": "だが、やがて来る残酷な時代の中にあっても、私の詩は生き残る"
        },
        {
          "text": "Praising thy worth, despite his cruel hand.",
          "ja": "時の無慈悲な鎌に立ち向かい、君の美しさを永遠に讃え続けながら。"
        }
      ],
      "audio": null
    },
    {
      "no": 61,
      "title_ja": "夜毎に私の眠りを妨げるのは君の意志か",
      "lines": [
        {
          "text": "Is it thy will, thy image should keep open",
          "ja": "夜毎に私の重い瞼を開かせ、疲れた瞳を"
        },
        {
          "text": "My heavy eyelids to the weary night?",
          "ja": "暗い闇の中に見開かせ続けるのは、君の意志なのだろうか。"
        },
        {
          "text": "Dost thou desire my slumbers should be broken,",
          "ja": "君の幻影が私の眠りを嘲笑い、私を苦しめるために"
        },
        {
          "text": "While shadows like to thee do mock my sight?",
          "ja": "君が自らの影を私の元へと送り届けているのだろうか。"
        },
        {
          "text": "Is it thy spirit that thou send’st from thee",
          "ja": "君の魂が、遠く離れた我が家へと密かに旅立ち"
        },
        {
          "text": "So far from home into my deeds to pry,",
          "ja": "私の過ちや嫉妬深い恥辱を見張るために"
        },
        {
          "text": "To find out shames and idle hours in me,",
          "ja": "私の夜の時間を盗み見させているのだろうか。"
        },
        {
          "text": "The scope and tenure of thy jealousy?",
          "ja": "いや、違う。"
        },
        {
          "text": "O, no! thy love, though much, is not so great:",
          "ja": "君の愛はそこまで深くはないのだ。"
        },
        {
          "text": "It is my love that keeps mine eye awake:",
          "ja": "私の眠りを奪うのは、君の愛ではなく、この私自身の真実の愛なのだ。"
        },
        {
          "text": "Mine own true love that doth my rest defeat,",
          "ja": "私の燃えるような愛の想いが、私自身の眠りを打ち砕き"
        },
        {
          "text": "To play the watchman ever for thy sake:",
          "ja": "君のために絶え間なき夜の歩哨に立たせているのだから。"
        },
        {
          "text": "For thee watch I, whilst thou dost wake elsewhere,",
          "ja": "私は君のために目覚め、君は遠く離れた別の場所で"
        },
        {
          "text": "From me far off, with others all too near.",
          "ja": "私の知らない誰かと共に、目覚めているというのに。"
        }
      ],
      "audio": null
    },
    {
      "no": 62,
      "title_ja": "己を愛する罪が心に深く根づき",
      "lines": [
        {
          "text": "Sin of self-love possesseth all mine eye",
          "ja": "自己愛という名の罪が、私の瞳のすべてを支配し"
        },
        {
          "text": "And all my soul, and all my every part;",
          "ja": "私の魂の奥深き部分まで、すっかり根を張っている。"
        },
        {
          "text": "And for this sin there is no remedy,",
          "ja": "この罪を癒やす薬などどこにもない、あまりに深く"
        },
        {
          "text": "It is so grounded inward in my heart.",
          "ja": "私の心の中に、自惚れの病が染み付いてしまっているのだから。"
        },
        {
          "text": "Methinks no face so gracious is as mine,",
          "ja": "私は思い込む、自分の顔こそが最も美しい顔であり"
        },
        {
          "text": "No shape so true, no truth of such account;",
          "ja": "自分の身体こそが最も端正であり、我が真実は誰よりも尊いのだと。"
        },
        {
          "text": "And for myself mine own worth do define,",
          "ja": "自分自身の価値を誰よりも高く見積もり"
        },
        {
          "text": "As I all other in all worths surmount.",
          "ja": "他のあらゆる人間を、我が美徳の下に見下してしまうのだ。"
        },
        {
          "text": "But when my glass shows me myself indeed",
          "ja": "だが鏡が私に、ありのままの真実の姿を映し出すとき"
        },
        {
          "text": "Beated and chopp’d with tanned antiquity,",
          "ja": "歳月に刻まれ、皺だらけになった我が老いの肌を見せつけるとき"
        },
        {
          "text": "Mine own self-love quite contrary I read;",
          "ja": "私の自己愛はたちまち崩れ去り、正気を取り戻すのだ。"
        },
        {
          "text": "Self so self-loving were iniquity.",
          "ja": "自分のような老いぼれを愛することは、ただの恥ずべき錯覚にすぎないと。"
        },
        {
          "text": "’Tis thee, myself, that for myself I praise,",
          "ja": "私が愛していたのは私自身ではなく、君だったのだ"
        },
        {
          "text": "Painting my age with beauty of thy days.",
          "ja": "君の若さと美しさを、自分自身のものだと錯覚していただけなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 63,
      "title_ja": "愛する人が私のように老いゆく日のために",
      "lines": [
        {
          "text": "Against my love shall be as I am now,",
          "ja": "やがて我が愛する人が"
        },
        {
          "text": "With Time’s injurious hand crush’d and o’erworn;",
          "ja": "今の私のようになってしまう日のために"
        },
        {
          "text": "When hours have drain’d his blood and fill’d his brow",
          "ja": "時という残酷な手が彼を傷つけ、血の気を奪い去る日のために"
        },
        {
          "text": "With lines and wrinkles; when his youthful morn",
          "ja": "彼の美しい額に時の皺が深く刻み込まれ"
        },
        {
          "text": "Hath travell’d on to age’s steepy night;",
          "ja": "あの甘美な青春の夜明けが、険しい老いの黄昏へと沈みゆく日のために"
        },
        {
          "text": "And all those beauties whereof now he’s king",
          "ja": "今彼が誇らしげに輝かせている、あの至高の美しさが"
        },
        {
          "text": "Are vanishing, or vanished out of sight,",
          "ja": "すべて色褪せ、消え去り、あるいは散り果ててゆく日のために"
        },
        {
          "text": "Stealing away the treasure of his spring;",
          "ja": "春の盛りを過ぎた王侯のような彼の美しさが"
        },
        {
          "text": "For such a time do I now fortify",
          "ja": "記憶の影へと落ちてゆくその日のために"
        },
        {
          "text": "Against confounding age’s cruel knife,",
          "ja": "私は今から、時の破壊に対抗する防壁を築いておこう"
        },
        {
          "text": "That he shall never cut from memory",
          "ja": "あの残酷な時の鎌が、我が愛する人の命を刈り取ってしまわぬように。"
        },
        {
          "text": "My sweet love’s beauty, though my lover’s life:",
          "ja": "彼の美しさは、時の刃に傷つけられようとも"
        },
        {
          "text": "His beauty shall in these black lines be seen,",
          "ja": "この黒々とした詩の文字の中で、永遠に生き続けるのだから。"
        },
        {
          "text": "And they shall live, and he in them still green.",
          "ja": "彼はこの詩の中で永遠に若く生き、そして輝き続けるのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 64,
      "title_ja": "時が壮麗な建物を崩し去るのを見るとき",
      "lines": [
        {
          "text": "When I have seen by Time’s fell hand defac’d",
          "ja": "過去の栄華を誇った壮麗な記念碑が、時の無慈悲な手によって"
        },
        {
          "text": "The rich-proud cost of outworn buried age;",
          "ja": "粉々に打ち砕かれ、見る影もなく崩壊してゆくのを見るとき"
        },
        {
          "text": "When sometime lofty towers I see down-raz’d,",
          "ja": "そびえ立つ高塔が、永遠の眠りの中に倒れ伏し"
        },
        {
          "text": "And brass eternal slave to mortal rage;",
          "ja": "不滅を誓った真鍮の彫像さえも、時の破壊の餌食となるのを見るとき"
        },
        {
          "text": "When I have seen the hungry ocean gain",
          "ja": "飢えた大海が、傲慢にも陸地を呑み込み"
        },
        {
          "text": "Advantage on the kingdom of the shore,",
          "ja": "また固き大地が、海の領域を侵食してゆくのを見るとき"
        },
        {
          "text": "And the firm soil win of the watery main,",
          "ja": "増大と減少が、互いに押し合いへし合いしながら"
        },
        {
          "text": "Increasing store with loss, and loss with store;",
          "ja": "あらゆる物質を荒廃の淵へと引きずり込んでゆくのを見るとき"
        },
        {
          "text": "When I have seen such interchange of state,",
          "ja": "私は考え込まずにはいられない、この無慈悲な破壊の嵐は"
        },
        {
          "text": "Or state itself confounded, to decay;",
          "ja": "やがて我が愛する人をも、私から奪い去るに違いないと。"
        },
        {
          "text": "Ruin hath taught me thus to ruminate:",
          "ja": "この恐怖の想いは、私にとって死そのもののように重く"
        },
        {
          "text": "That Time will come and take my love away.",
          "ja": "ただ涙を流しながら、自らの宝の儚さを嘆くことしかできない。"
        },
        {
          "text": "This thought is as a death which cannot choose",
          "ja": "いつか失うことを恐れながら、今目の前にある宝を抱きしめる"
        },
        {
          "text": "But weep to have, that which it fears to lose.",
          "ja": "その恐怖こそが、我が愛の深き悲哀なのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc182_1808_librivox/spc182_sonnet64_rr.mp3",
        "reader": "Red Rooster",
        "duration": "1:27"
      }
    },
    {
      "no": 65,
      "title_ja": "真鍮も石も時の力には抗えず",
      "lines": [
        {
          "text": "Since brass, nor stone, nor earth, nor boundless sea,",
          "ja": "真鍮も、石も、果てしなき大地も、広大なる海も"
        },
        {
          "text": "But sad mortality o’ersways their power,",
          "ja": "悲哀に満ちた死の力には抗えず、すべて時の前に屈するというのなら"
        },
        {
          "text": "How with this rage shall beauty hold a plea,",
          "ja": "花のように儚い美しさが、一体どうやってその猛威に立ち向かえようか"
        },
        {
          "text": "Whose action is no stronger than a flower?",
          "ja": "花の力は、ただ夏の一日の香りの強さしか持たないというのに。"
        },
        {
          "text": "O! how shall summer’s honey breath hold out,",
          "ja": "ああ、鋼鉄の城壁さえも打ち崩す、あの時の破壊の息吹に"
        },
        {
          "text": "Against the wrackful siege of battering days,",
          "ja": "夏の日の甘美な息吹が、どうやって持ちこたえることができようか。"
        },
        {
          "text": "When rocks impregnable are not so stout,",
          "ja": "難攻不落の岩山が崩れ去り、強固なる真鍮の門が朽ち果てるとき"
        },
        {
          "text": "Nor gates of steel so strong but Time decays?",
          "ja": "時が自らの宝を奪い去るのを、一体誰が防ぐことができようか。"
        },
        {
          "text": "O fearful meditation! where, alack,",
          "ja": "恐るべき瞑想よ！時の最高の宝石（君）を"
        },
        {
          "text": "Shall Time’s best jewel from Time’s chest lie hid?",
          "ja": "時の黒い棺桶の中に隠されないように守る術が、どこにあろうか。"
        },
        {
          "text": "Or what strong hand can hold his swift foot back?",
          "ja": "時の素早き足を止めることができる強い手が、どこにあろうか。"
        },
        {
          "text": "Or who his spoil of beauty can forbid?",
          "ja": "誰も時の暴虐を止めることはできない。"
        },
        {
          "text": "O! none, unless this miracle have might,",
          "ja": "ただ一つの奇跡を除いては"
        },
        {
          "text": "That in black ink my love may still shine bright.",
          "ja": "この黒いインクの文字の中で、我が愛する人が永遠に輝き続けること以外には！"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc171_1709_librivox/spc171_sonnet65_rls.mp3",
        "reader": "R.L. Stine",
        "duration": "1:03"
      }
    },
    {
      "no": 66,
      "title_ja": "この世の理不尽に疲れ果て死を望むとも",
      "lines": [
        {
          "text": "Tired with all these, for restful death I cry:",
          "ja": "この世のあらゆる理不尽に疲れ果て、私は安らかな死を願う"
        },
        {
          "text": "As to behold desert a beggar born,",
          "ja": "真に高潔な生まれの者が、乞食のように落ちぶれるのを見るとき"
        },
        {
          "text": "And needy nothing trimm’d in jollity,",
          "ja": "無価値で空虚な者たちが、華やかに着飾って歓楽に溺れるのを見るとき"
        },
        {
          "text": "And purest faith unhappily forsworn,",
          "ja": "最も純粋な誠実さが、無残にも裏切られ踏みにじられるのを見るとき"
        },
        {
          "text": "And gilded honour shamefully misplac’d,",
          "ja": "黄金の栄誉が、恥知らずにもふさわしからぬ者に授けられるのを見るとき"
        },
        {
          "text": "And maiden virtue rudely strumpeted,",
          "ja": "処女の純潔が、粗野な暴力によって穢されるのを見るとき"
        },
        {
          "text": "And right perfection wrongfully disgrac’d,",
          "ja": "完璧な正義が、不当にも歪められ辱められるのを見るとき"
        },
        {
          "text": "And strength by limping sway disabled",
          "ja": "力ある強者が、足萎えの権力者によって無力化されるのを見るとき"
        },
        {
          "text": "And art made tongue-tied by authority,",
          "ja": "真の芸術が、権力の検閲によって口を塞がれるのを見るとき"
        },
        {
          "text": "And folly, doctor-like, controlling skill,",
          "ja": "愚か者が博士の顔をして、知恵ある者を指図するのを見るとき"
        },
        {
          "text": "And simple truth miscall’d simplicity,",
          "ja": "素朴な真実が、愚純な単純さだとあざ笑われるのを見るとき"
        },
        {
          "text": "And captive good attending captain ill:",
          "ja": "善なる美徳が、悪の首領の虜となって捕らえられるのを見るとき。"
        },
        {
          "text": "Tir’d with all these, from these would I be gone,",
          "ja": "これらすべてに疲れ果て、私はこの世を去りたいと願うのだ"
        },
        {
          "text": "Save that, to die, I leave my love alone.",
          "ja": "ただ、私が死ねば、我が愛する君を独り残してしまうこと、それだけを惜しんで。"
        }
      ],
      "audio": null
    },
    {
      "no": 67,
      "title_ja": "なぜこの腐敗した時代に美しき君が生きるのか",
      "lines": [
        {
          "text": "Ah! wherefore with infection should he live,",
          "ja": "ああ、なぜ彼は、この腐敗しきった時代に生きねばならないのか"
        },
        {
          "text": "And with his presence grace impiety,",
          "ja": "その気高い美しさによって、悪しき世の中に箔をつけるためにか。"
        },
        {
          "text": "That sin by him advantage should achieve,",
          "ja": "なぜ罪深き者たちが、彼の美徳の影に隠れて自らを正当化し"
        },
        {
          "text": "And lace itself with his society?",
          "ja": "彼の純粋な光の分け前を浴びて、己の汚れを覆い隠そうとするのか。"
        },
        {
          "text": "Why should false painting imitate his cheek,",
          "ja": "なぜ偽りの絵の具が、彼の生き生きとした血色を盗み取り"
        },
        {
          "text": "And steel dead seeming of his living hue?",
          "ja": "死んだ見せかけの化粧で、本物の美しさを真似ようとするのか。"
        },
        {
          "text": "Why should poor beauty indirectly seek",
          "ja": "なぜ貧しい美が、彼の生きた薔薇の花影を借り受け"
        },
        {
          "text": "Roses of shadow, since his rose is true?",
          "ja": "彼から美を奪い去って、自らの虚栄を飾ろうとするのか。"
        },
        {
          "text": "Why should he live, now Nature bankrupt is,",
          "ja": "なぜ彼は生きねばならないのか。今や自然は破産し"
        },
        {
          "text": "Beggar’d of blood to blush through lively veins?",
          "ja": "自らの動脈に、新しい命の血潮を失ってしまっているというのに。"
        },
        {
          "text": "For she hath no exchequer now but his,",
          "ja": "自然にはもはや、彼のような美を新しく生み出す力など残されておらず"
        },
        {
          "text": "And proud of many, lives upon his gains.",
          "ja": "ただ彼ひとりという奇跡の遺産を頼りに、命を長らえているにすぎない。"
        },
        {
          "text": "O! him she stores, to show what wealth she had",
          "ja": "自然は彼を大切に守り続けているのだ、見せびらかすために"
        },
        {
          "text": "In days long since, before these last so bad.",
          "ja": "かつての古き良き時代には、どれほど豊かな美が存在していたかを証明するために。"
        }
      ],
      "audio": null
    },
    {
      "no": 68,
      "title_ja": "君の面影こそ古き良き時代の名残",
      "lines": [
        {
          "text": "Thus is his cheek the map of days outworn,",
          "ja": "こうして彼の顔は、あの古き良き時代の地図となるのだ"
        },
        {
          "text": "When beauty lived and died as flowers do now,",
          "ja": "かつて美が"
        },
        {
          "text": "Before these bastard signs of fair were born,",
          "ja": "今のように飾り立てられることなく生まれ、生きていた時代の。"
        },
        {
          "text": "Or durst inhabit on a living brow;",
          "ja": "偽りの美の装飾が、まだ誰の頭にも乗せられず"
        },
        {
          "text": "Before the golden tresses of the dead,",
          "ja": "死者の墓を暴いて、死者の金髪の巻き毛を切り取り"
        },
        {
          "text": "The right of sepulchres, were shorn away,",
          "ja": "別の者の頭の上に飾り立てるような、不気味な真似がされる前の時代の。"
        },
        {
          "text": "To live a second life on second head;",
          "ja": "かつて死者たちの美しい遺産が、墓の中で静かに眠ることを許されていた時代に。"
        },
        {
          "text": "Ere beauty’s dead fleece made another gay:",
          "ja": "彼の顔の中には、あの古代の清らかな美しさがそのまま息づいている"
        },
        {
          "text": "In him those holy antique hours are seen,",
          "ja": "何の化粧も偽りも持たぬ、真実の春の姿そのものとして。"
        },
        {
          "text": "Without all ornament, itself and true,",
          "ja": "他者の緑を奪って己を飾ることもなく"
        },
        {
          "text": "Making no summer of another’s green,",
          "ja": "古びた過去の遺産を身に纏って、若さを偽ることもない。"
        },
        {
          "text": "Robbing no old to dress his beauty new;",
          "ja": "自然は彼を、古き時代の記念碑として大切に守り続けている"
        },
        {
          "text": "And him as for a map doth Nature store,",
          "ja": "偽りの芸術に満ちたこの堕落した時代に対して、"
        },
        {
          "text": "To show false Art what beauty was of yore.",
          "ja": "「真の美とは何であったか」を教え示すための、唯一の生きた模範として。"
        }
      ],
      "audio": null
    },
    {
      "no": 69,
      "title_ja": "外見の美を讃える世の賛美と裏腹に",
      "lines": [
        {
          "text": "Those parts of thee that the world’s eye doth view",
          "ja": "君の外見の美しさは、この世の誰の目から見ても完璧であり"
        },
        {
          "text": "Want nothing that the thought of hearts can mend;",
          "ja": "どんな言葉の賛辞を費やそうとも"
        },
        {
          "text": "All tongues, the voice of souls, give thee that due,",
          "ja": "非の打ち所などどこにもない。"
        },
        {
          "text": "Uttering bare truth, even so as foes commend.",
          "ja": "敵の舌でさえも、ありのままの真実を認めざるを得ず"
        },
        {
          "text": "Thy outward thus with outward praise is crown’d;",
          "ja": "君の姿を見つめる者は誰もが、心からの賛美を口にする。"
        },
        {
          "text": "But those same tongues, that give thee so thine own,",
          "ja": "君の外見の美しさは、世の人々の賛美の冠によって飾られている。"
        },
        {
          "text": "In other accents do this praise confound",
          "ja": "だが、その同じ舌が、外見への賛美を語り終えたその瞬間から"
        },
        {
          "text": "By seeing farther than the eye hath shown.",
          "ja": "別の言葉を囁き始めるのだ、君の内面の心について。"
        },
        {
          "text": "They look into the beauty of thy mind,",
          "ja": "彼らは君の行いの数々を見つめ、君の魂の深奥を推し量ろうとし"
        },
        {
          "text": "And that in guess they measure by thy deeds;",
          "ja": "そして彼らの邪悪な推測は、君の外見の美しさを裏切るものとなる。"
        },
        {
          "text": "Then churls their thoughts, although their eyes were kind,",
          "ja": "彼らは君の美しい薔薇の庭に、雑草の悪臭が混じっていると噂するのだ。"
        },
        {
          "text": "To thy fair flower add the rank smell of weeds:",
          "ja": "なぜ君の香りが、その美しい姿に見合わないと噂されてしまうのか。"
        },
        {
          "text": "But why thy odour matcheth not thy show,",
          "ja": "その理由はただ一つ、君があまりに誰にでも愛を安売りし"
        },
        {
          "text": "The soil is this, that thou dost common grow.",
          "ja": "誰とでも無分別に交わり、自らの価値を落としてしまっているからなのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 70,
      "title_ja": "悪意の誹謗を受けることこそ美の証",
      "lines": [
        {
          "text": "That thou art blam’d shall not be thy defect,",
          "ja": "君が世の人々から悪意の噂を立てられたとしても、それは君の罪ではない。"
        },
        {
          "text": "For slander’s mark was ever yet the fair;",
          "ja": "なぜなら、美しい者こそが常に中傷の標的となるのがこの世の習いなのだから。"
        },
        {
          "text": "The ornament of beauty is suspect,",
          "ja": "疑いの目は、常に最も美しいものの上に投げかけられるもの"
        },
        {
          "text": "A crow that flies in heaven’s sweetest air.",
          "ja": "青空の最も澄み切った場所にこそ、鳥の姿がよく見えるように。"
        },
        {
          "text": "So thou be good, slander doth but approve",
          "ja": "君が善き人であるなら、誹謗を受けることこそが君の価値を証明している"
        },
        {
          "text": "Thy worth the greater being woo’d of time;",
          "ja": "時が愛する最も輝かしい若者こそが、嫉妬の炎にさらされるのだから。"
        },
        {
          "text": "For canker vice the sweetest buds doth love,",
          "ja": "最も甘美な蕾の奥にこそ、毛虫は好んで住み着くもの"
        },
        {
          "text": "And thou present’st a pure unstained prime.",
          "ja": "そして君こそは、純白の青春の盛りを生きているのだから。"
        },
        {
          "text": "Thou hast passed by the ambush of young days",
          "ja": "君は青春の危うき罠をいくつも無傷で通り抜けてきた"
        },
        {
          "text": "Either not assail’d, or victor being charg’d;",
          "ja": "いかなる誘惑にも負けず、あるいは戦いに勝利して誇り高く生き残ってきた。"
        },
        {
          "text": "Yet this thy praise cannot be so thy praise,",
          "ja": "だが、どれほど純潔であっても、悪意の誹謗の口を塞ぐことはできない"
        },
        {
          "text": "To tie up envy, evermore enlarg’d,",
          "ja": "中傷の刃は、いかに高潔な魂であっても避けることはできないのだから。"
        },
        {
          "text": "If some suspect of ill mask’d not thy show,",
          "ja": "もし悪意の噂が君に影を落とさなかったなら"
        },
        {
          "text": "Then thou alone kingdoms of hearts shouldst owe.",
          "ja": "君は今頃、この地上のあらゆる人々の心を独占する絶対の君主となっていただろう。"
        }
      ],
      "audio": null
    },
    {
      "no": 71,
      "title_ja": "私が死んだなら長く嘆き悲しむな",
      "lines": [
        {
          "text": "No longer mourn for me when I am dead",
          "ja": "私が死んだなら、もうこれ以上私のために悲しまないでおくれ"
        },
        {
          "text": "Than you shall hear the surly sullen bell",
          "ja": "あの陰鬱なる教会の弔鐘が、世の人々に告げ終えたなら"
        },
        {
          "text": "Give warning to the world that I am fled",
          "ja": "私がこの卑しい世界から逃れ去り、"
        },
        {
          "text": "From this vile world with vilest worms to dwell:",
          "ja": "土の中の卑しい虫たちと共に住まうことになったと知らせ終えたなら。"
        },
        {
          "text": "Nay, if you read this line, remember not",
          "ja": "いや、もし君がこの詩を読むことがあっても、思い出さないでおくれ"
        },
        {
          "text": "The hand that writ it, for I love you so,",
          "ja": "この詩を書き記した私の不器用な手のことを。"
        },
        {
          "text": "That I in your sweet thoughts would be forgot,",
          "ja": "私は君を愛するがゆえに"
        },
        {
          "text": "If thinking on me then should make you woe.",
          "ja": "君の愛らしき胸の中に、私の記憶が痛ましい悲しみをもたらすくらいなら"
        },
        {
          "text": "O if, I say, you look upon this verse,",
          "ja": "君の記憶から、私の存在などすっかり忘れ去られてほしいのだ。"
        },
        {
          "text": "When I perhaps compounded am with clay,",
          "ja": "ああ、もし君がこの詩を見つめる時、私がすでに土と同化しているなら"
        },
        {
          "text": "Do not so much as my poor name rehearse;",
          "ja": "私の哀れな名前を、口に出して呟くことさえしないでほしい。"
        },
        {
          "text": "But let your love even with my life decay;",
          "ja": "君の愛が、私の命の終わりと共に静かに消え去ることを許しておくれ。"
        },
        {
          "text": "Lest the wise world should look into your moan,",
          "ja": "さもなくば、賢明な世の人々が君の悲しみの涙を覗き込み"
        },
        {
          "text": "And mock you with me after I am gone.",
          "ja": "亡き私を愛した廉で、君のことを嘲笑うかもしれないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 72,
      "title_ja": "私が去った後なぜ愛したのか世に問われなば",
      "lines": [
        {
          "text": "O! lest the world should task you to recite",
          "ja": "ああ、私が死んだあと、君がなぜ私のような者を愛したのかと"
        },
        {
          "text": "What merit lived in me, that you should love",
          "ja": "世の人々が君を問い詰め、君に釈明を迫る日のために"
        },
        {
          "text": "After my death, dear love, forget me quite,",
          "ja": "愛する人よ、私の存在などすっかり忘れ去ってしまうがよい。"
        },
        {
          "text": "For you in me can nothing worthy prove;",
          "ja": "私の中には"
        },
        {
          "text": "Unless you would devise some virtuous lie,",
          "ja": "君が誇らしく語れるような価値ある美徳など何一つなく"
        },
        {
          "text": "To do more for me than mine own desert,",
          "ja": "君は私のために、優しい嘘を作り出さねばならなくなるのだから。"
        },
        {
          "text": "And hang more praise upon deceased I",
          "ja": "私の実力以上の賛美を捏造し、亡き私に"
        },
        {
          "text": "Than niggard truth would willingly impart:",
          "ja": "恥ずべきお世辞の衣を着せねばならなくなるのだから。"
        },
        {
          "text": "O! lest your true love may seem false in this",
          "ja": "君の真実の愛が、私のために偽りを語るくらいなら"
        },
        {
          "text": "That you for love speak well of me untrue,",
          "ja": "私の名前を、私の遺体と共に土の中に葬り去ってほしいのだ。"
        },
        {
          "text": "My name be buried where my body is,",
          "ja": "君の名誉のためにも、私の名誉のためにも"
        },
        {
          "text": "And live no more to shame nor me nor you.",
          "ja": "恥ずべき私の名前を、二度と口にしないでほしい。"
        },
        {
          "text": "For I am shamed by that which I bring forth,",
          "ja": "私が書き遺した詩など、ただの恥辱にすぎないのだから"
        },
        {
          "text": "And so should you, to love things nothing worth.",
          "ja": "そして、そんな無価値な私を愛した君の愛もまた、恥辱となってしまうのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 73,
      "title_ja": "黄葉の梢のように我が身は衰え",
      "lines": [
        {
          "text": "That time of year thou mayst in me behold",
          "ja": "その季節を、君は今の私の中に見出すことができるだろう"
        },
        {
          "text": "When yellow leaves, or none, or few, do hang",
          "ja": "黄色い葉が枝にわずかに残り"
        },
        {
          "text": "Upon those boughs which shake against the cold,",
          "ja": "あるいは一枚も残らず散り果てて"
        },
        {
          "text": "Bare ruin’d choirs, where late the sweet birds sang.",
          "ja": "寒風に震える梢が、かつて甘やかな小鳥たちが歌った"
        },
        {
          "text": "In me thou see’st the twilight of such day",
          "ja": "荒れ果てた教会の聖歌隊席のように、裸で天を仰いでいる季節を。"
        },
        {
          "text": "As after sunset fadeth in the west;",
          "ja": "その日の黄昏を、君は今の私の中に見出すことができるだろう"
        },
        {
          "text": "Which by and by black night doth take away,",
          "ja": "日没の太陽が西の空に沈み去り、やがて黒い夜が"
        },
        {
          "text": "Death’s second self, that seals up all in rest.",
          "ja": "その光をゆっくりと奪い去ってゆく、あの薄暮の時間を。"
        },
        {
          "text": "In me thou see’st the glowing of such fire,",
          "ja": "死の分身である夜が、あらゆるものを永遠の眠りの中に閉じ込めるように。"
        },
        {
          "text": "That on the ashes of his youth doth lie,",
          "ja": "その残り火の輝きを、君は今の私の中に見出すことができるだろう"
        },
        {
          "text": "As the death-bed, whereon it must expire,",
          "ja": "かつての若き日の灰の上に横たわり、自らの燃えかすの上で息絶えようとしている炎を。"
        },
        {
          "text": "Consum’d with that which it was nourish’d by.",
          "ja": "かつて己を育んだ若さそのものによって、息を詰まらせて消えゆく火を。"
        },
        {
          "text": "This thou perceiv’st, which makes thy love more strong,",
          "ja": "これを見つめるからこそ、君の愛はいっそう強く燃え上がるのだ"
        },
        {
          "text": "To love that well, which thou must leave ere long.",
          "ja": "やがて遠からず失われゆく我が命を、いっそう深く愛さずにはいられないのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/sonnet_73_librivox/sonnet_73_shakespeare_aa.mp3",
        "reader": "Alan",
        "duration": "1:07"
      }
    },
    {
      "no": 74,
      "title_ja": "我が魂は詩の中に生き続ける",
      "lines": [
        {
          "text": "But be contented: when that fell arrest",
          "ja": "だが安心してほしい。"
        },
        {
          "text": "Without all bail shall carry me away,",
          "ja": "あの無慈悲な死神の逮捕の手が私を捕らえ"
        },
        {
          "text": "My life hath in this line some interest,",
          "ja": "いかなる保釈も許されぬまま、私を冷たい牢獄へと連れ去るときも"
        },
        {
          "text": "Which for memorial still with thee shall stay.",
          "ja": "私の生命のより良き一部は、この詩の中に生き残り"
        },
        {
          "text": "When thou reviewest this, thou dost review",
          "ja": "君の記念碑として、永遠に君のそばに留まり続けるのだから。"
        },
        {
          "text": "The very part was consecrate to thee:",
          "ja": "君がこの詩を見返すとき、君は私自身を読み返すのだ"
        },
        {
          "text": "The earth can have but earth, which is his due;",
          "ja": "私が持っていた至高の命のすべてを、君に捧げたのだから。"
        },
        {
          "text": "My spirit is thine, the better part of me:",
          "ja": "土が受け取るのは、土から生まれた卑しい肉体にすぎず"
        },
        {
          "text": "So then thou hast but lost the dregs of life,",
          "ja": "それは虫たちの餌食であり、死せる骸骨の残骸にすぎない。"
        },
        {
          "text": "The prey of worms, my body being dead;",
          "ja": "卑しい悪党の刃にさえ倒れ得る、あの脆い肉体など"
        },
        {
          "text": "The coward conquest of a wretch’s knife,",
          "ja": "記憶に留めるほどの価値など何ひとつないのだ。"
        },
        {
          "text": "Too base of thee to be remembered.",
          "ja": "君が心に留めるべき真の宝とは、肉体の中に宿っていた我が魂であり"
        },
        {
          "text": "The worth of that is that which it contains,",
          "ja": "そして我が魂のすべては、この詩の中に宿っているのだから。"
        },
        {
          "text": "And that is this, and this with thee remains.",
          "ja": "私の肉体が朽ち果てようとも、君の手の中に私は生きているのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 75,
      "title_ja": "飢えた魂にとって君は日々の糧",
      "lines": [
        {
          "text": "So are you to my thoughts as food to life,",
          "ja": "私の魂にとって、君への想いは日々のパンのように欠かせぬものであり"
        },
        {
          "text": "Or as sweet-season’d showers are to the ground;",
          "ja": "大地にとって、恵みの春の雨のように必要なものだ。"
        },
        {
          "text": "And for the peace of you I hold such strife",
          "ja": "君を愛する私の心は、あの強欲な守銭奴の心と同じだ"
        },
        {
          "text": "As ’twixt a miser and his wealth is found.",
          "ja": "自らの莫大な黄金を前にして、喜びと不安の間で絶えず揺れ動いている。"
        },
        {
          "text": "Now proud as an enjoyer, and anon",
          "ja": "今は自らの富を誇らしげに見つめ、歓喜に胸を震わせながらも"
        },
        {
          "text": "Doubting the filching age will steal his treasure;",
          "ja": "次の瞬間には、盗賊に宝を奪われはしないかと恐怖におののく。"
        },
        {
          "text": "Now counting best to be with you alone,",
          "ja": "ある時は、君と二人きりで静かに過ごすことだけを望み"
        },
        {
          "text": "Then better’d that the world may see my pleasure:",
          "ja": "またある時は、君の美しさを世界中に見せびらかしたいと誇らしく思う。"
        },
        {
          "text": "Sometime all full with feasting on your sight,",
          "ja": "ある時は、君の面影を見つめるだけで満腹の喜びに浸り"
        },
        {
          "text": "And by and by clean starved for a look;",
          "ja": "またある時は、君の視線を求めて餓死しそうになる。"
        },
        {
          "text": "Possessing or pursuing no delight,",
          "ja": "私には、君が与えてくれる喜び以外の喜びなど何ひとつなく"
        },
        {
          "text": "Save what is had, or must from you be took.",
          "ja": "君から奪われる悲しみ以外の悲しみなど何ひとつないのだ。"
        },
        {
          "text": "Thus do I pine and surfeit day by day,",
          "ja": "こうして私は日々、飽食と飢餓の間を行き来しながら"
        },
        {
          "text": "Or gluttoning on all, or all away.",
          "ja": "君の愛を貪り食らい、あるいは君の愛に飢え渇いているのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 76,
      "title_ja": "なぜ私の詩はいつも同じ調子なのか",
      "lines": [
        {
          "text": "Why is my verse so barren of new pride,",
          "ja": "なぜ私の詩には、新しい華やかな装飾が乏しいのだろうか"
        },
        {
          "text": "So far from variation or quick change?",
          "ja": "時代の流行に合わせた、目新しい技巧の数々が見当たらないのだろうか。"
        },
        {
          "text": "Why with the time do I not glance aside",
          "ja": "なぜ私は、移り変わる時代の流行を追い求めず"
        },
        {
          "text": "To new-found methods, and to compounds strange?",
          "ja": "新奇な表現や奇抜な言葉の組み合わせを探そうとしないのだろうか。"
        },
        {
          "text": "Why write I still all one, ever the same,",
          "ja": "なぜ私は、いつでも同じひとつのことばかりを書き続け"
        },
        {
          "text": "And keep invention in a noted weed,",
          "ja": "我が詩句を、見慣れた日常の衣で包み続けるのだろうか。"
        },
        {
          "text": "That every word doth almost tell my name,",
          "ja": "私の書くあらゆる言葉が、私の名を語り明かしてしまうほどに"
        },
        {
          "text": "Showing their birth, and where they did proceed?",
          "ja": "その言葉がどこから来たかを、誰の目にも露わにしてしまうほどに。"
        },
        {
          "text": "O! know sweet love I always write of you,",
          "ja": "ああ知っておくれ、甘美な愛する人よ、私が書くのは常に君のことなのだ"
        },
        {
          "text": "And you and love are still my argument;",
          "ja": "君と愛こそが、私の唯一の永遠の主題なのだから。"
        },
        {
          "text": "So all my best is dressing old words new,",
          "ja": "だから私の最善の技とは、古びた言葉を新しく使い直すことであり"
        },
        {
          "text": "Spending again what is already spent:",
          "ja": "すでに費やした言葉を、もう一度新しく語り直すことなのだ。"
        },
        {
          "text": "For as the sun is daily new and old,",
          "ja": "太陽が毎日新しく昇りながら、常に同じ太陽であるように"
        },
        {
          "text": "So is my love still telling what is told.",
          "ja": "私の愛もまた、常に語り尽くされたことを、新しく語り続けるのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 77,
      "title_ja": "鏡は老いを、日時計は時の歩みを示す",
      "lines": [
        {
          "text": "Thy glass will show thee how thy beauties wear,",
          "ja": "君の鏡は、君の美しさがどのように衰えゆくかを教え"
        },
        {
          "text": "Thy dial how thy precious minutes waste;",
          "ja": "日時計の影は、君の貴重な時間がどのように盗み去られるかを教えるだろう。"
        },
        {
          "text": "These vacant leaves thy mind’s imprint will bear,",
          "ja": "そしてこの白紙の帳面は、君の魂の思考を書き留める場所となり"
        },
        {
          "text": "And of this book, this learning mayst thou taste.",
          "ja": "君はこの本から、人生の真実の知恵を学ぶことができるはずだ。"
        },
        {
          "text": "The wrinkles which thy glass will truly show",
          "ja": "鏡が映し出すあの小さな皺の溝は"
        },
        {
          "text": "Of mouthed graves will give thee memory;",
          "ja": "やがて君を呑み込む墓穴の姿を、君の目の前に思い出させるだろう。"
        },
        {
          "text": "Thou by thy dial’s shady stealth mayst know",
          "ja": "日時計の針が刻む影の歩みは"
        },
        {
          "text": "Time’s thievish progress to eternity.",
          "ja": "時が盗人のように静かに進み、永遠の闇へと歩み去ることを教えるだろう。"
        },
        {
          "text": "Look! what thy memory cannot contain,",
          "ja": "君の記憶の引き出しに留めておくことのできない想いを"
        },
        {
          "text": "Commit to these waste blanks, and thou shalt find",
          "ja": "この白紙のページの上に、書き留めておくがよい。"
        },
        {
          "text": "Those children nursed, deliver’d from thy brain,",
          "ja": "君の脳から生まれた子供たちが、文字として紙の上に育ちゆくのを"
        },
        {
          "text": "To take a new acquaintance of thy mind.",
          "ja": "後になって再び読み返すとき、君は新しい驚きと共に再会するだろう。"
        },
        {
          "text": "These offices, so oft as thou wilt look,",
          "ja": "この帳面を君の思考で満たすことは、君自身を豊かにし"
        },
        {
          "text": "Shall profit thee and much enrich thy book.",
          "ja": "そしてこの本は、君にとってかけがえのない友となるはずだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 78,
      "title_ja": "幾度となく君を我が詩神と仰ぎ",
      "lines": [
        {
          "text": "So oft have I invoked thee for my Muse,",
          "ja": "幾度となく私は、君を我が唯一の詩神として祈り求め"
        },
        {
          "text": "And found such fair assistance in my verse",
          "ja": "私の詩句に、君の甘美な息吹を注ぎ込んでもらってきたことか。"
        },
        {
          "text": "As every alien pen hath got my use",
          "ja": "今や他の詩人たちもまた、私の真似をして君の名を呼び"
        },
        {
          "text": "And under thee their poesy disperse.",
          "ja": "君の庇護のもとに、自らの詩を競い合って捧げ始めている。"
        },
        {
          "text": "Thine eyes, that taught the dumb on high to sing",
          "ja": "物言わぬ唖者（私）に、天高く歌い上げる声を授けてくれた君の瞳は"
        },
        {
          "text": "And heavy ignorance aloft to fly,",
          "ja": "重苦しい無知の鈍重ささえも、翼を与えて羽ばたかせ"
        },
        {
          "text": "Have added feathers to the learned’s wing",
          "ja": "学識ある者たちの知性を、さらに一段と高貴な高みへと引き上げ"
        },
        {
          "text": "And given grace a double majesty.",
          "ja": "優雅な才能に、さらに二倍の恵みを与えている。"
        },
        {
          "text": "Yet be most proud of that which I compile,",
          "ja": "だが君よ、最も誇らしく思うべきは、この私の拙い詩なのだ"
        },
        {
          "text": "Whose influence is thine, and born of thee:",
          "ja": "私の詩は、ただ君の力によってのみ生み出されたものなのだから。"
        },
        {
          "text": "In others’ works thou dost but mend the style,",
          "ja": "他者の詩においては、君は彼らの技術を洗練させ、技巧を飾るにすぎないが"
        },
        {
          "text": "And arts with thy sweet graces graced be;",
          "ja": "私の詩においては、君こそが私の芸術のすべてであり、私の学識のすべてなのだ。"
        },
        {
          "text": "But thou art all my art, and dost advance",
          "ja": "君こそが、私の粗野な無知を天上の知恵へと変えてくれる"
        },
        {
          "text": "As high as learning, my rude ignorance.",
          "ja": "唯一の奇跡の光なのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 79,
      "title_ja": "君の美は別の詩人の筆によっても描かれるが",
      "lines": [
        {
          "text": "Whilst I alone did call upon thy aid,",
          "ja": "私がひとりだけで君の助けを求めていた頃は"
        },
        {
          "text": "My verse alone had all thy gentle grace;",
          "ja": "私の詩句だけが、君の美しさを独占して輝いていた。"
        },
        {
          "text": "But now my gracious numbers are decay’d,",
          "ja": "だが今や私の拙い詩は色褪せ、私の詩神は病に倒れ"
        },
        {
          "text": "And my sick Muse doth give an other place.",
          "ja": "別の優れた詩人に、その席を譲らざるを得なくなってしまった。"
        },
        {
          "text": "I grant, sweet love, thy lovely argument",
          "ja": "認めよう、愛する人よ、君の甘美な主題は"
        },
        {
          "text": "Deserves the travail of a worthier pen;",
          "ja": "より洗練された詩人の筆によって讃えられるにふさわしいと。"
        },
        {
          "text": "Yet what of thee thy poet doth invent",
          "ja": "だが、彼が君について書き記す賛美の言葉のすべてを"
        },
        {
          "text": "He robs thee of, and pays it thee again.",
          "ja": "彼はただ、君自身から盗み取っているにすぎないのだ。"
        },
        {
          "text": "He lends thee virtue, and he stole that word",
          "ja": "彼が君に美徳を授けるなら、彼はその美徳を君の行いから盗んだのだ。"
        },
        {
          "text": "From thy behaviour; beauty doth he give,",
          "ja": "彼が君に美しさを捧げるなら、彼はその美しさを君の顔から見出したのだ。"
        },
        {
          "text": "And found it in thy cheek: he can afford",
          "ja": "君を讃えるどんな言葉であっても、彼が君に与えたものなど何ひとつなく"
        },
        {
          "text": "No praise to thee, but what in thee doth live.",
          "ja": "君の中にすでに生きて息づいているものを、そのまま書き留めたにすぎない。"
        },
        {
          "text": "Then thank him not for that which he doth say,",
          "ja": "だから彼に感謝する必要などない。彼が書き記す賛美は"
        },
        {
          "text": "Since what he owes thee, thou thyself dost pay.",
          "ja": "ただ君が彼に支払った美の借金を、君に返済しているだけなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 80,
      "title_ja": "大船のようなライバル詩人に我が小舟は怯え",
      "lines": [
        {
          "text": "O how I faint when I of you do write,",
          "ja": "ああ、私が君のことを書こうとするとき、どれほど私の心は怯えることか"
        },
        {
          "text": "Knowing a better spirit doth use your name,",
          "ja": "私よりもはるかに優れた詩人が、君の賛美を歌い上げていると知るとき。"
        },
        {
          "text": "And in the praise thereof spends all his might,",
          "ja": "彼はその持てる才能のすべてを注ぎ込み、君を讃えるために"
        },
        {
          "text": "To make me tongue-tied speaking of your fame!",
          "ja": "誇らしき大船のように、大海原へと堂々と帆を広げているというのに。"
        },
        {
          "text": "But since your worth, wide as the ocean is,",
          "ja": "だが君の大いなる海は、傲慢な大船を受け入れるのと同じように"
        },
        {
          "text": "The humble as the proudest sail doth bear,",
          "ja": "私の貧しい小さな小舟をも、その波の上に浮かばせてくれるはずだ。"
        },
        {
          "text": "My saucy bark, inferior far to his,",
          "ja": "私の不器用な舟は、彼の巨大な船に比べればあまりに小さく"
        },
        {
          "text": "On your broad main doth wilfully appear.",
          "ja": "君の果てしなき深淵の上に、おずおずと姿を現すことしかできない。"
        },
        {
          "text": "Your shallowest help will hold me up afloat,",
          "ja": "だが君の浅瀬の慈悲が、私を波の上に留まらせてくれるなら"
        },
        {
          "text": "Whilst he upon your soundless deep doth ride;",
          "ja": "私は君の愛の海に浮かび、転覆することなく航海を続けることができるだろう。"
        },
        {
          "text": "Or, being wrack’d, I am a worthless boat,",
          "ja": "彼が広大な水深を誇らしげに進む一方で。 もし私が難破し、波の底へと沈みゆく運命にあるのだとしたら"
        },
        {
          "text": "He of tall building, and of goodly pride:",
          "ja": "私はただの無価値な小舟であり、彼こそが堂々たる巨船なのだ。"
        },
        {
          "text": "Then if he thrive and I be cast away,",
          "ja": "だが最悪の結末であっても、私はこの愛に満足しよう"
        },
        {
          "text": "The worst was this: my love was my decay.",
          "ja": "我が愛の破滅が、君への愛の海の中で起きたのだとしたら。"
        }
      ],
      "audio": null
    },
    {
      "no": 81,
      "title_ja": "私が先に死すとも君の名は詩に残り",
      "lines": [
        {
          "text": "Or I shall live your epitaph to make,",
          "ja": "私が先に死んで君のための墓碑銘を書くことになるのか"
        },
        {
          "text": "Or you survive when I in earth am rotten;",
          "ja": "あるいは君が生き長らえ、私の腐ちゆく亡骸を土に埋めることになるのか"
        },
        {
          "text": "From hence your memory death cannot take,",
          "ja": "どちらであろうとも、死神が君の記憶を奪い去ることは決してない"
        },
        {
          "text": "Although in me each part will be forgotten.",
          "ja": "私の存在は忘れ去られようとも、君の命は生き残り続けるのだから。"
        },
        {
          "text": "Your name from hence immortal life shall have,",
          "ja": "君の名前は、この詩の中で永遠の不滅の命を授けられ"
        },
        {
          "text": "Though I, once gone, to all the world must die:",
          "ja": "私は死の床に沈み、誰の記憶にも残らず消え去ろうとも"
        },
        {
          "text": "The earth can yield me but a common grave,",
          "ja": "地上は私に、ただ無名の卑しい墓穴しか与えないだろうが"
        },
        {
          "text": "When you entombed in men’s eyes shall lie.",
          "ja": "君は人々の瞳の記念碑の中に、永遠に横たわり続けるだろう。"
        },
        {
          "text": "Your monument shall be my gentle verse,",
          "ja": "私の優しい詩句こそが、君の不滅の記念碑となるのだ"
        },
        {
          "text": "Which eyes not yet created shall o’er-read;",
          "ja": "まだ生まれてもいない未来の瞳が、君の姿を読み返すだろう。"
        },
        {
          "text": "And tongues to be, your being shall rehearse,",
          "ja": "まだ息もしていない未来の舌が、君の名を讃えて口ずさむだろう"
        },
        {
          "text": "When all the breathers of this world are dead;",
          "ja": "この世の呼吸するすべての者たちが、灰となって消え去った後であっても。"
        },
        {
          "text": "You still shall live, such virtue hath my pen,",
          "ja": "君は永遠に生き続けるのだ、この私のペンの力によって"
        },
        {
          "text": "Where breath most breathes, even in the mouths of men.",
          "ja": "人々の息吹の中に、最も生き生きとした命を宿しながら。"
        }
      ],
      "audio": null
    },
    {
      "no": 82,
      "title_ja": "君が他者の賛辞を求めることを責めはせぬ",
      "lines": [
        {
          "text": "I grant thou wert not married to my Muse,",
          "ja": "君は私の詩神と結婚したわけではない、だから私は君を責めはしない"
        },
        {
          "text": "And therefore mayst without attaint o’erlook",
          "ja": "君が他者の捧げる賛辞の言葉に、嬉しそうに目を留めたとしても。"
        },
        {
          "text": "The dedicated words which writers use",
          "ja": "洗練された学者たちの熱心な献辞を、君が心から受け入れたとしても"
        },
        {
          "text": "Of their fair subject, blessing every book.",
          "ja": "彼らはあらゆる美しい言葉を駆使して、君の美を讃えようとしているのだから。"
        },
        {
          "text": "Thou art as fair in knowledge as in hue,",
          "ja": "君の知性はあまりに深く、君の美しさはあまりに眩しい"
        },
        {
          "text": "Finding thy worth a limit past my praise;",
          "ja": "だから私の拙い筆の限界を超えて、もっと優れた賛辞を求めるのは当然のことだ。"
        },
        {
          "text": "And therefore art enforced to seek anew",
          "ja": "今の時代の最も進んだ技巧によって、君の価値を新しく磨き上げ"
        },
        {
          "text": "Some fresher stamp of the time-bettering days.",
          "ja": "より輝かしい詩の衣を纏わせようと望むのは、君の正当な権利なのだから。"
        },
        {
          "text": "And do so, love; yet when they have devis’d,",
          "ja": "彼らの詩を受け取るがよい、愛する人よ。"
        },
        {
          "text": "What strained touches rhetoric can lend,",
          "ja": "だが彼らがどんな修辞を尽くそうとも"
        },
        {
          "text": "Thou truly fair, wert truly sympathiz’d",
          "ja": "彼らの誇張された言葉の数々も、君の真実の美しさの前には色褪せてしまう。"
        },
        {
          "text": "In true plain words, by thy true-telling friend;",
          "ja": "真の美しさは、絵の具の厚化粧など必要とはしないのだから。"
        },
        {
          "text": "And their gross painting might be better us’d",
          "ja": "彼らの大げさな賛美は、血色の悪い病人に紅を塗るようなものだ"
        },
        {
          "text": "Where cheeks need blood; in thee it is abus’d.",
          "ja": "君の美しい頬には、言葉の化粧など何ひとつ要らないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 83,
      "title_ja": "飾らぬ君の美しさを筆で汚したくなかった",
      "lines": [
        {
          "text": "I never saw that you did painting need,",
          "ja": "私は"
        },
        {
          "text": "And therefore to your fair no painting set;",
          "ja": "君の美しさが絵の具の化粧を必要としているとは決して思わなかった"
        },
        {
          "text": "I found, or thought I found, you did exceed",
          "ja": "だから私は、君の顔の上に何の飾り言葉も塗りたくろうとはしなかった。"
        },
        {
          "text": "That barren tender of a poet’s debt:",
          "ja": "私は見たのだ、君の美しさがどんな詩人の賛美の言葉よりもはるかに高く"
        },
        {
          "text": "And therefore have I slept in your report,",
          "ja": "いかなる詩句の限界をも、軽々と超え出ているその姿を。"
        },
        {
          "text": "That you yourself, being extant, well might show",
          "ja": "だから私は、あえて筆を休め、沈黙を守っていたのだ"
        },
        {
          "text": "How far a modern quill doth come too short,",
          "ja": "君がそこに生きて息づいているその姿こそが、いかなる詩人の筆よりも雄弁に"
        },
        {
          "text": "Speaking of worth, what worth in you doth grow.",
          "ja": "この時代の浅ましい賛美の言葉の無力さを、世に知らしめることができるのだから。"
        },
        {
          "text": "This silence for my sin you did impute,",
          "ja": "君の美しさを傷つけぬために沈黙を守っていたことを、君は我が罪と責めるのか。"
        },
        {
          "text": "Which shall be most my glory being dumb;",
          "ja": "だが私の沈黙こそが、私の最大の栄光なのだ。"
        },
        {
          "text": "For I impair not beauty being mute,",
          "ja": "私が沈黙を守ることで"
        },
        {
          "text": "When others would give life, and bring a tomb.",
          "ja": "君の美しさは少しも傷つけられず、完全な輝きを保っているのだから。"
        },
        {
          "text": "There lives more life in one of your fair eyes",
          "ja": "他者の詩人たちが、君に命を授けようと言葉を尽くしながら"
        },
        {
          "text": "Than both your poets can in praise devise.",
          "ja": "かえって君の生きた美しさを、死んだ言葉の墓場の中に閉じ込めているというのに。"
        }
      ],
      "audio": null
    },
    {
      "no": 84,
      "title_ja": "「君は君である」と書くことこそ最高の賛美",
      "lines": [
        {
          "text": "Who is it that says most, which can say more,",
          "ja": "一体誰が、これ以上の賛美の言葉を語ることができようか"
        },
        {
          "text": "Than this rich praise: that you alone are you,",
          "ja": "「君は君である」という"
        },
        {
          "text": "In whose confine immured is the store",
          "ja": "この至高の言葉以上に深い賛辞を語れる者がどこにいようか。"
        },
        {
          "text": "Which should example where your equal grew.",
          "ja": "君というひとりの器の中に、あらゆる美の宝庫が閉じ込められており"
        },
        {
          "text": "Lean penury within that pen doth dwell",
          "ja": "君に匹敵する手本など、君自身の姿以外にはこの世のどこにもないというのに。"
        },
        {
          "text": "That to his subject lends not some small glory;",
          "ja": "詩人のペンはあまりに貧しく、自らの主題にわずかな尊厳すら与えられない"
        },
        {
          "text": "But he that writes of you, if he can tell",
          "ja": "もし彼が、君自身の中からその輝きを盗み取ってこないならば。"
        },
        {
          "text": "That you are you, so dignifies his story,",
          "ja": "だがもし誰かが、ただ「君のありのままの姿」をそのまま書き記すことができるなら"
        },
        {
          "text": "Let him but copy what in you is writ,",
          "ja": "自然が君の中に描いたその美しさを、ただありのままに写し取ることができるなら"
        },
        {
          "text": "Not making worse what nature made so clear,",
          "ja": "その詩人の名は、永遠の不滅の知性として讃えられるだろう。"
        },
        {
          "text": "And such a counterpart shall fame his wit,",
          "ja": "君の美しさに、余計な飾りを付け足して汚すことさえしなければ"
        },
        {
          "text": "Making his style admired every where.",
          "ja": "その詩は、世界で最も輝かしい傑作となるのだから。"
        },
        {
          "text": "You to your beauteous blessings add a curse,",
          "ja": "君にはたった一つだけ、その美しさを損なう残酷な欠点がある"
        },
        {
          "text": "Being fond on praise, which makes your praises worse.",
          "ja": "それは、人々の浅ましい賛美をあまりに喜び、自らを安売りしてしまうことなのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 85,
      "title_ja": "他者の巧みな詩句の前で我が舌は沈黙し",
      "lines": [
        {
          "text": "My tongue-tied Muse in manners holds her still,",
          "ja": "私の舌足らずな詩神は、礼儀正しく沈黙を守っている"
        },
        {
          "text": "While comments of your praise richly compil’d,",
          "ja": "他者の豊かな詩人たちが"
        },
        {
          "text": "Reserve their character with golden quill,",
          "ja": "君を讃える黄金の賛辞を競い合う中で。"
        },
        {
          "text": "And precious phrase by all the Muses fil’d.",
          "ja": "彼らの洗練されたペンは、貴重な言葉の数々を連ね"
        },
        {
          "text": "I think good thoughts, whilst others write good words,",
          "ja": "詩のミューズのすべての技を動員して、見事な讃美歌を紡ぎ出している。"
        },
        {
          "text": "And like unlettered clerk still cry ‘Amen’",
          "ja": "他者が巧みな言葉を書き記すとき、私はただ良き信者のように"
        },
        {
          "text": "To every hymn that able spirit affords,",
          "ja": "「アーメン」と心の中で呟き、彼らの言葉に頭を垂れることしかできない。"
        },
        {
          "text": "In polish’d form of well-refined pen.",
          "ja": "彼らの見事な詩句が、君の美しさを鮮やかに讃えるのを聞くとき"
        },
        {
          "text": "Hearing you praised, I say ‘’tis so, ’tis true,’",
          "ja": "私はただ心の中で、「その通りだ、まったくその通りだ」と頷き"
        },
        {
          "text": "And to the most of praise add something more;",
          "ja": "彼らの言葉に、さらに深い愛の想いを心の中で付け足しているのだ。"
        },
        {
          "text": "But that is in my thought, whose love to you,",
          "ja": "私は心の中で君を愛し、他者はただ言葉の技で君を愛している。"
        },
        {
          "text": "Though words come hindmost, holds his rank before.",
          "ja": "言葉を巧みに操る詩人たちの美辞麗句を、君は耳で聴き届けるがよい"
        },
        {
          "text": "Then others, for the breath of words respect,",
          "ja": "だが言葉を持たぬ私の沈黙の祈りこそを、魂で受け止めてほしいのだ。"
        },
        {
          "text": "Me for my dumb thoughts, speaking in effect.",
          "ja": "沈黙の愛こそが、どんな饒舌な賛辞よりも深い真実を語っているのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 86,
      "title_ja": "大いなる誇らしき帆を掲げた彼の詩によってか",
      "lines": [
        {
          "text": "Was it the proud full sail of his great verse,",
          "ja": "大いなる誇らしき帆を掲げた彼の壮麗な詩が、"
        },
        {
          "text": "Bound for the prize of all too precious you,",
          "ja": "私の最も愛する宝（君）を我が手から奪い去ろうとしたから、"
        },
        {
          "text": "That did my ripe thoughts in my brain inhearse,",
          "ja": "私の脳の中で育ちつつあった想いは、沈黙の墓場へと葬られたのか。"
        },
        {
          "text": "Making their tomb the womb wherein they grew?",
          "ja": "私の胸の中に宿っていた詩句は、彼の筆に怯えて窒息してしまったのか。"
        },
        {
          "text": "Was it his spirit, by spirits taught to write,",
          "ja": "夜毎に彼に霊感を授け、天上の秘密を囁き届けるという"
        },
        {
          "text": "Above a mortal pitch, that struck me dead?",
          "ja": "あの世の幽霊たちの力が、私のペンを縛りつけ、沈黙させたのか。"
        },
        {
          "text": "No, neither he, nor his compeers by night",
          "ja": "いや、彼自身も、夜毎に彼を訪れるあの傲慢な亡霊たちも"
        },
        {
          "text": "Giving him aid, my verse astonished.",
          "ja": "私の沈黙の原因ではない。彼らの力など恐れるに足りない。"
        },
        {
          "text": "He, nor that affable familiar ghost",
          "ja": "私の詩神を沈黙させ、我が舌を麻痺させた唯一の真実とは"
        },
        {
          "text": "Which nightly gulls him with intelligence,",
          "ja": "君が彼に優しい微笑みを向け、彼の詩を喜んで受け入れたことなのだ。"
        },
        {
          "text": "As victors of my silence cannot boast;",
          "ja": "君の愛が彼の言葉を照らし出し、私の詩を闇の中へと突き落としたとき"
        },
        {
          "text": "I was not sick of any fear from thence:",
          "ja": "私の力は尽き果て、私は言葉を失って倒れ伏したのだ。"
        },
        {
          "text": "But when your countenance fill’d up his line,",
          "ja": "君の寵愛こそが私の命のすべてであり、それを失った瞬間から"
        },
        {
          "text": "Then lacked I matter; that enfeebled mine.",
          "ja": "私の詩は、息絶えた抜け殻となってしまったのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 87,
      "title_ja": "さようなら、君はあまりに尊く私には惜しい",
      "lines": [
        {
          "text": "Farewell! thou art too dear for my possessing,",
          "ja": "さようなら！君はあまりに尊く、この私にはもったいなさすぎる。"
        },
        {
          "text": "And like enough thou know’st thy estimate,",
          "ja": "君自身の価値の高さを知れば、君が私から去りゆくのは当然のことだ。"
        },
        {
          "text": "The charter of thy worth gives thee releasing;",
          "ja": "君を手に入れるための特権など私にはなく、君の束縛を解く権利は君にある"
        },
        {
          "text": "My bonds in thee are all determinate.",
          "ja": "私の君への権利の証書は、すでに完全に期限切れとなってしまったのだから。"
        },
        {
          "text": "For how do I hold thee but by thy granting?",
          "ja": "なぜなら、私が君を手に入れることができたのは、ただ君の気まぐれな恩恵のおかげであり"
        },
        {
          "text": "And for that riches where is my deserving?",
          "ja": "私自身のいかなる功績によるものでもなかったのだから。"
        },
        {
          "text": "The cause of this fair gift in me is wanting,",
          "ja": "この身分不相応な贈り物を繋ぎ止める権利など、私にはどこにもない"
        },
        {
          "text": "And so my patent back again is swerving.",
          "ja": "だから君の気前の良い恩恵は、再び君の元へと返還されねばならないのだ。"
        },
        {
          "text": "Thyself thou gav’st, thy own worth then not knowing,",
          "ja": "君が自らの本当の価値を知らなかったからこそ、君はかつて私のような者に身を任せたのだ"
        },
        {
          "text": "Or me to whom thou gav’st it, else mistaking;",
          "ja": "あるいは、私という人間の真の無価値さを、君が見誤っていたからにすぎない。"
        },
        {
          "text": "So thy great gift, upon misprision growing,",
          "ja": "だが君の誤解が解け、真実の判断が君の心に戻った今"
        },
        {
          "text": "Comes home again, on better judgement making.",
          "ja": "君の偉大なる契約は破棄され、君は自らの高貴な場所へと戻ってゆく。"
        },
        {
          "text": "Thus have I had thee, as a dream doth flatter,",
          "ja": "こうして私は、夢の中で君という王侯の宝を抱きしめていたのだ"
        },
        {
          "text": "In sleep a king, but waking no such matter.",
          "ja": "だが目覚めてみれば、私はただの哀れな無一文の乞食にすぎなかったのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 88,
      "title_ja": "君が私を軽蔑するなら自らを咎めよう",
      "lines": [
        {
          "text": "When thou shalt be dispos’d to set me light,",
          "ja": "やがて君が、私を軽蔑して笑い物にし"
        },
        {
          "text": "And place my merit in the eye of scorn,",
          "ja": "私の真実の愛を"
        },
        {
          "text": "Upon thy side, against myself I’ll fight,",
          "ja": "冷たく踏みにじろうと決意するその時が来たら"
        },
        {
          "text": "And prove thee virtuous, though thou art forsworn.",
          "ja": "私は君の側に立って戦おう、自分自身を敵として告発しながら。"
        },
        {
          "text": "With mine own weakness, being best acquainted,",
          "ja": "君の正しさを証明するために、私自身の罪を自らの手で暴き立てよう。"
        },
        {
          "text": "Upon thy part I can set down a story",
          "ja": "私自身の欠点なら、誰よりも私自身が一番よく知っている"
        },
        {
          "text": "Of faults conceal’d, wherein I am attainted;",
          "ja": "私の犯した過ちの数々を、私は喜んで世にさらけ出そう。"
        },
        {
          "text": "That thou in losing me shalt win much glory:",
          "ja": "君が私を見捨てたことの正当性を証明するために"
        },
        {
          "text": "And I by this will be a gainer too;",
          "ja": "私の卑しさを余すところなく語り明かし、君の名誉を高らかに守り抜こう。"
        },
        {
          "text": "For bending all my loving thoughts on thee,",
          "ja": "そうして自分自身を傷つけることによって、私は大いなる勝利を得るのだ"
        },
        {
          "text": "The injuries that to myself I do,",
          "ja": "なぜなら、君を愛する私の魂にとって、君に利益をもたらすことこそが"
        },
        {
          "text": "Doing thee vantage, double-vantage me.",
          "ja": "我が身を滅ぼすこと以上の、無上の歓喜であるのだから。"
        },
        {
          "text": "Such is my love, to thee I so belong,",
          "ja": "君への愛の深さゆえに、私は君のすべての不正を正義へと変えてしまう"
        },
        {
          "text": "That for thy right, myself will bear all wrong.",
          "ja": "君が犯すいかなる残酷さに対しても、私は自ら喜んで有罪を認めるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 89,
      "title_ja": "我が不義を並べ立て別れを告げるなら",
      "lines": [
        {
          "text": "Say that thou didst forsake me for some fault,",
          "ja": "君が私を見捨てるために"
        },
        {
          "text": "And I will comment upon that offence:",
          "ja": "我が不義の罪を並べ立てるというのなら"
        },
        {
          "text": "Speak of my lameness, and I straight will halt,",
          "ja": "私はその罪のすべてを認め、君の言葉通りに我が身を咎めよう。"
        },
        {
          "text": "Against thy reasons making no defence.",
          "ja": "私の不器用さを笑うなら、私はその場で足を引きずって歩いてみせよう"
        },
        {
          "text": "Thou canst not love disgrace me half so ill,",
          "ja": "君の言い分に反論することなど、私は決してしないのだから。"
        },
        {
          "text": "To set a form upon desired change,",
          "ja": "君が私との別れを正当化するために、どんな口実を設けようとも"
        },
        {
          "text": "As I’ll myself disgrace; knowing thy will,",
          "ja": "私は自らの手で我が身を傷つけ、君の言葉の正しさを証明しよう。"
        },
        {
          "text": "I will acquaintance strangle, and look strange;",
          "ja": "君を困らせるような親しげな態度を、私はすべて捨て去り"
        },
        {
          "text": "Be absent from thy walks; and in my tongue",
          "ja": "君の名前を二度と口にせず、見知らぬ他人のように振る舞おう。"
        },
        {
          "text": "Thy sweet beloved name no more shall dwell,",
          "ja": "かつての二人の甘やかな交わりの記憶が、君の誇りを汚してしまわぬように"
        },
        {
          "text": "Lest I, too much profane, should do it wrong,",
          "ja": "偶然道で出会おうとも、私は目を伏せて通り過ぎよう。"
        },
        {
          "text": "And haply of our old acquaintance tell.",
          "ja": "君のために、私は自分自身に対して激しい敵意を抱き"
        },
        {
          "text": "For thee, against my self I’ll vow debate,",
          "ja": "君が嫌う者を、私もまた激しく憎み、呪い続けよう。"
        },
        {
          "text": "For I must ne’er love him whom thou dost hate.",
          "ja": "君が嫌うその男（私自身）を、私は愛することなどできないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 90,
      "title_ja": "私を見捨てるなら今この瞬間に見捨てよ",
      "lines": [
        {
          "text": "Then hate me when thou wilt; if ever, now;",
          "ja": "私を憎むというのなら、今すぐに憎んでおくれ。今この瞬間に"
        },
        {
          "text": "Now, while the world is bent my deeds to cross,",
          "ja": "世界中が私を打ち倒そうと牙を剥いている、この最悪の時に。"
        },
        {
          "text": "Join with the spite of fortune, make me bow,",
          "ja": "運命の残酷な悪意に加担して、私を打ちのめすがよい"
        },
        {
          "text": "And do not drop in for an after-loss:",
          "ja": "倒れかけた我が身に、君の手で最後の一撃を加えておくれ。"
        },
        {
          "text": "Ah! do not, when my heart hath ’scap’d this sorrow,",
          "ja": "ああ、私の胸がこの苦しみを乗り越えて立ち直ったその後に"
        },
        {
          "text": "Come in the rearward of a conquer’d woe;",
          "ja": "遅れてやってくる悲しみとして、私を捨て去ることだけはしないでほしい。"
        },
        {
          "text": "Give not a windy night a rainy morrow,",
          "ja": "嵐の過ぎ去った晴れやかな朝に、再び暗雲をもたらすような真似はしないでほしい"
        },
        {
          "text": "To linger out a purpos’d overthrow.",
          "ja": "すでに失われた苦しみの勘定を、引き延ばして私を苛まないでおくれ。"
        },
        {
          "text": "If thou wilt leave me, do not leave me last,",
          "ja": "もし君が私を見捨てるつもりなら、今すぐ見捨ててほしい"
        },
        {
          "text": "When other petty griefs have done their spite,",
          "ja": "他のあらゆる小さな悲しみが、私の身に降りかかっている今この時に。"
        },
        {
          "text": "But in the onset come: so shall I taste",
          "ja": "そうすれば、君の愛の喪失という巨大な嵐が"
        },
        {
          "text": "At first the very worst of fortune’s might;",
          "ja": "他のあらゆる小さな悲しみを、たちまち吹き飛ばしてしまうのだから。"
        },
        {
          "text": "And other strains of woe, which now seem woe,",
          "ja": "愛を失うことの底知れぬ絶望に比べれば"
        },
        {
          "text": "Compar’d with loss of thee, will not seem so.",
          "ja": "世のいかなる不幸も、ただの些細な擦り傷にすぎないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 91,
      "title_ja": "家柄や財産を誇る人々がいるけれど",
      "lines": [
        {
          "text": "Some glory in their birth, some in their skill,",
          "ja": "ある者は自らの高貴な生まれを誇り"
        },
        {
          "text": "Some in their wealth, some in their body’s force,",
          "ja": "ある者は自らの才能を誇る"
        },
        {
          "text": "Some in their garments though new-fangled ill;",
          "ja": "ある者は財宝の豊かさを誇り、ある者は逞しい肉体の力を誇る。"
        },
        {
          "text": "Some in their hawks and hounds, some in their horse;",
          "ja": "ある者は流行の華やかな衣服を誇り、ある者は駿馬や鷹や猟犬を誇る"
        },
        {
          "text": "And every humour hath his adjunct pleasure,",
          "ja": "そして誰もが、自らの最も好む道楽の中に、最高の喜びを見出している。"
        },
        {
          "text": "Wherein it finds a joy above the rest:",
          "ja": "だがこれら個別の喜びのどれひとつとして、私の求める基準には遠く及ばない"
        },
        {
          "text": "But these particulars are not my measure,",
          "ja": "私は、これらすべてを一まとめにした以上の、至高の宝を見出しているのだから。"
        },
        {
          "text": "All these I better in one general best.",
          "ja": "君の愛は、どんな高貴な生まれよりも気高く誇らしく"
        },
        {
          "text": "Thy love is better than high birth to me,",
          "ja": "どんな莫大な財宝よりも豊かで、どんな華麗な衣服よりも美しい。"
        },
        {
          "text": "Richer than wealth, prouder than garments’ costs,",
          "ja": "鷹や駿馬を操るどんな歓喜よりも、はるかに甘美な喜びに満ちている。"
        },
        {
          "text": "Of more delight than hawks and horses be;",
          "ja": "君を我がものとすることによって、私は世のあらゆる誇りを誇ることができるのだ。"
        },
        {
          "text": "And having thee, of all men’s pride I boast:",
          "ja": "ただ一つ、我が身の不運を悲しむことがあるとすれば"
        },
        {
          "text": "Wretched in this alone, that thou mayst take",
          "ja": "それは君が、その愛のすべてを私から奪い去る力を持っているということ。"
        },
        {
          "text": "All this away, and me most wretched make.",
          "ja": "その時私は、この世で最も惨めな貧民へと落ちぶれてしまうのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 92,
      "title_ja": "死ぬまで君は私のもの、愛を失うときは死ぬとき",
      "lines": [
        {
          "text": "But do thy worst to steal thyself away,",
          "ja": "だが君よ、私から逃れ去ろうとどんなに試みようとも構わない"
        },
        {
          "text": "For term of life thou art assured mine;",
          "ja": "私の命ある限り、君は私の愛する人であり続けるのだから。"
        },
        {
          "text": "And life no longer than thy love will stay,",
          "ja": "君の愛が終わりを告げるとき"
        },
        {
          "text": "For it depends upon that love of thine.",
          "ja": "それは私の命が終わるときであり"
        },
        {
          "text": "Then need I not to fear the worst of wrongs,",
          "ja": "我が命は"
        },
        {
          "text": "When in the least of them my life hath end.",
          "ja": "ただ君の愛の長さにのみ寄り添って息づいているのだから。"
        },
        {
          "text": "I see a better state to me belongs",
          "ja": "だから私は、最悪の別離の苦痛を恐れる必要など何ひとつない"
        },
        {
          "text": "Than that which on thy humour doth depend:",
          "ja": "君の愛が冷え切ったその瞬間に、私の命も息絶えてしまうのだから。"
        },
        {
          "text": "Thou canst not vex me with inconstant mind,",
          "ja": "君の心変わりの苦しみに耐え忍ぶような惨めな余生を、私は送る必要がない"
        },
        {
          "text": "Since that my life on thy revolt doth lie.",
          "ja": "君の愛の喪失は、即座に私に慈悲ある死の安らぎを与えてくれるのだから。"
        },
        {
          "text": "O! what a happy title do I find,",
          "ja": "なんと幸福な特権を、私はこの胸に抱いていることだろう"
        },
        {
          "text": "Happy to have thy love, happy to die!",
          "ja": "君の愛を喜んで生き、そして君の心変わりと共に死ぬことができるのだから！"
        },
        {
          "text": "But what’s so blessed-fair that fears no blot?",
          "ja": "だが、この世のいかなる甘美な幸福であっても、汚れなきものなどあり得ようか"
        },
        {
          "text": "Thou mayst be false, and yet I know it not.",
          "ja": "君がすでに心変わりしていながら、私がそれに気づいていないだけかもしれないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 93,
      "title_ja": "君の不義を知り得ぬ騙されし夫のように",
      "lines": [
        {
          "text": "So shall I live, supposing thou art true,",
          "ja": "ならば私は、君が誠実であると信じて生きることにしよう"
        },
        {
          "text": "Like a deceived husband; so love’s face",
          "ja": "妻の浮気心を知り得ぬ、哀れな騙されし夫のように。"
        },
        {
          "text": "May still seem love to me, though alter’d new;",
          "ja": "君の愛がすでに別の場所へと移り去っていたとしても"
        },
        {
          "text": "Thy looks with me, thy heart in other place:",
          "ja": "私は君の愛に包まれていると信じて、幸福に浸っていよう。"
        },
        {
          "text": "For there can live no hatred in thine eye,",
          "ja": "なぜなら、君の瞳は決して私への憎しみを映し出さず"
        },
        {
          "text": "Therefore in that I cannot know thy change.",
          "ja": "君の美しい顔からは、心変わりを読み取ることができないのだから。"
        },
        {
          "text": "In many’s looks, the false heart’s history",
          "ja": "多くの人々は、心変わりするとき顔つきが冷たく変わり"
        },
        {
          "text": "Is writ in moods, and frowns, and wrinkles strange.",
          "ja": "その瞳の奥に、かつての情熱の冷めた気配を露わにしてしまうものだ。"
        },
        {
          "text": "But heaven in thy creation did decree",
          "ja": "だが天は、君を創り給うたとき、ひとつの至高の奇跡を命じられた"
        },
        {
          "text": "That in thy face sweet love should ever dwell;",
          "ja": "君の顔には、ただ甘美な愛の微笑みだけが宿るようにと。"
        },
        {
          "text": "Whate’er thy thoughts, or thy heart’s workings be,",
          "ja": "君の心が何を考え、どんな気まぐれを抱いていようとも"
        },
        {
          "text": "Thy looks should nothing thence, but sweetness tell.",
          "ja": "君の顔立ちには、ただ純白の愛の光しか宿らないようにと。"
        },
        {
          "text": "How like Eve’s apple doth thy beauty grow,",
          "ja": "だがそれはいかに恐ろしいことか。エデンの園の禁断の林檎のように"
        },
        {
          "text": "If thy sweet virtue answer not thy show!",
          "ja": "そのあまりに美しい外見の奥に、偽りの心が隠されているのだとしたら。"
        }
      ],
      "audio": null
    },
    {
      "no": 94,
      "title_ja": "人を傷つける力を持ちながら傷つけぬ者",
      "lines": [
        {
          "text": "They that have power to hurt, and will do none,",
          "ja": "人を傷つける力を持ちながら、あえて傷つけることをせず"
        },
        {
          "text": "That do not do the thing they most do show,",
          "ja": "他人を誘惑しながらも"
        },
        {
          "text": "Who, moving others, are themselves as stone,",
          "ja": "自らは氷のように冷静であり続ける者たち。"
        },
        {
          "text": "Unmoved, cold, and to temptation slow;",
          "ja": "他者の心を激しく動かしながら、自らは岩のように動かされず"
        },
        {
          "text": "They rightly do inherit heaven’s graces,",
          "ja": "どんな誘惑の甘い風にも揺らぐことのない者たち。"
        },
        {
          "text": "And husband nature’s riches from expense;",
          "ja": "彼らこそが、天の恵みを真に受け継ぐべき正当な後継者であり"
        },
        {
          "text": "They are the lords and owners of their faces,",
          "ja": "自然の惜しみない富を、無駄遣いから守る真の守護者なのだ。"
        },
        {
          "text": "Others, but stewards of their excellence.",
          "ja": "彼らこそが己の顔の真の主人であり、他人はただその美の召使いにすぎない。"
        },
        {
          "text": "The summer’s flower is to the summer sweet,",
          "ja": "夏に咲く花は、夏の一日にとってあまりに甘美な宝である"
        },
        {
          "text": "Though to itself, it only live and die,",
          "ja": "たとえその花が、ただ自分自身のためだけに咲き、散りゆくとしても。"
        },
        {
          "text": "But if that flower with base infection meet,",
          "ja": "だがもしその愛らしい花が、恐ろしい病の菌に侵されて腐敗するならば"
        },
        {
          "text": "The basest weed outbraves his dignity:",
          "ja": "名もなき卑しい雑草のほうが、よほど尊く見えてしまうのだ。"
        },
        {
          "text": "For sweetest things turn sourest by their deeds;",
          "ja": "最も甘美なものほど、腐敗したときには最も耐え難い悪臭を放つ"
        },
        {
          "text": "Lilies that fester, smell far worse than weeds.",
          "ja": "腐り果てた百合の花は、どんな雑草よりもひどい臭いを放つものなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 95,
      "title_ja": "甘き過ちさえ君の美しさによって許され",
      "lines": [
        {
          "text": "How sweet and lovely dost thou make the shame",
          "ja": "君は、自らの恥辱の罪さえも、どれほど愛らしく見せてしまうことか！"
        },
        {
          "text": "Which, like a canker in the fragrant rose,",
          "ja": "香しい蕾の奥に潜む毛虫のように、罪を君の若さの奥に隠しながら。"
        },
        {
          "text": "Doth spot the beauty of thy budding name!",
          "ja": "君の放埒な悪名の数々でさえ、君の美しさの衣を纏うことによって"
        },
        {
          "text": "O! in what sweets dost thou thy sins enclose.",
          "ja": "世の人々の目には、甘美な魅力として映ってしまうのだから。"
        },
        {
          "text": "That tongue that tells the story of thy days,",
          "ja": "君の気まぐれな過ちを噂する人々の舌でさえも"
        },
        {
          "text": "Making lascivious comments on thy sport,",
          "ja": "君の行いを非難しようとしながら、いつしか君の美を讃え始めてしまう。"
        },
        {
          "text": "Cannot dispraise, but in a kind of praise;",
          "ja": "君の名前を口にするだけで、あらゆる非難の言葉は祝福へと変わり"
        },
        {
          "text": "Naming thy name, blesses an ill report.",
          "ja": "君の犯した罪は、君の美しさの魔法によって無罪放免となってしまうのだ。"
        },
        {
          "text": "O! what a mansion have those vices got",
          "ja": "なんと豪奢な宮殿を、あの卑しい罪悪は手に入れたことだろう"
        },
        {
          "text": "Which for their habitation chose out thee,",
          "ja": "君の美しい胸という、至高の住処の中に住まうことによって！"
        },
        {
          "text": "Where beauty’s veil doth cover every blot",
          "ja": "あらゆる汚れが、君の美のベールによって隠されてしまうのだから。"
        },
        {
          "text": "And all things turns to fair that eyes can see!",
          "ja": "だが愛する人よ、自分自身を戒めなさい。"
        },
        {
          "text": "Take heed, dear heart, of this large privilege;",
          "ja": "その強大な特権を過信してはならない"
        },
        {
          "text": "The hardest knife ill-us’d doth lose his edge.",
          "ja": "最も鋭い刃を持つ名剣であっても、乱用すればやがて刃こぼれしてしまうのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 96,
      "title_ja": "君の欠点さえも美徳に見えてしまう",
      "lines": [
        {
          "text": "Some say thy fault is youth, some wantonness;",
          "ja": "ある者は君の若さを咎め、ある者は君の放埒さを責める"
        },
        {
          "text": "Some say thy grace is youth and gentle sport;",
          "ja": "ある者は君の愛らしさを褒め称え、若さと過ちを許そうとする。"
        },
        {
          "text": "Both grace and faults are lov’d of more and less:",
          "ja": "君の長所と欠点は、分かち難くひとつに溶け合っており"
        },
        {
          "text": "Thou mak’st faults graces that to thee resort.",
          "ja": "あらゆる階層の人々の目の中で、美徳へと姿を変えてしまうのだから。"
        },
        {
          "text": "As on the finger of a throned queen",
          "ja": "最も卑しい宝石であっても、女王の美しい指にはめられるならば"
        },
        {
          "text": "The basest jewel will be well esteem’d,",
          "ja": "比類なき高貴な宝物として讃えられるように"
        },
        {
          "text": "So are those errors that in thee are seen",
          "ja": "君の犯すあらゆる過ちも、君という器の中に収まることによって"
        },
        {
          "text": "To truths translated, and for true things deem’d.",
          "ja": "美徳の真理として、世の人々を魅了してしまうのだ。"
        },
        {
          "text": "How many lambs might the stern wolf betray,",
          "ja": "あの残酷な狼でさえ、もし羊の皮を被って純白の姿を見せるなら"
        },
        {
          "text": "If like a lamb he could his looks translate!",
          "ja": "どれほど多くの迷える子羊たちを、やすやすと騙し取ることができるだろうか。"
        },
        {
          "text": "How many gazers mightst thou lead away,",
          "ja": "同じように君も、その持てる美しさの力をすべて行使するならば"
        },
        {
          "text": "If thou wouldst use the strength of all thy state!",
          "ja": "世界中のあらゆる人々の心を、思いのままに騙し取ることができるはずだ。"
        },
        {
          "text": "But do not so; I love thee in such sort,",
          "ja": "だがどうかそうしないでほしい。私は君を愛しているのだから"
        },
        {
          "text": "As, thou being mine, mine is thy good report.",
          "ja": "君の名誉こそが私の名誉であり、君と私はひとつの心なのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 97,
      "title_ja": "君と離れた日々はまるで暗き冬のよう",
      "lines": [
        {
          "text": "How like a winter hath my absence been",
          "ja": "君と離れていた日々は"
        },
        {
          "text": "From thee, the pleasure of the fleeting year!",
          "ja": "私にとってどれほど暗い冬のようであったことか！"
        },
        {
          "text": "What freezings have I felt, what dark days seen!",
          "ja": "過ぎ去りし一年の悲哀よ、凍てつく闇の孤独よ！"
        },
        {
          "text": "What old December’s bareness everywhere!",
          "ja": "あの凍りつくような寒さに震え、裸の木々が立ち竦む荒涼たる景色よ！"
        },
        {
          "text": "And yet this time removed was summer’s time;",
          "ja": "だが実際には、私たちが離れていたその時間は、夏の盛りであり"
        },
        {
          "text": "The teeming autumn, big with rich increase,",
          "ja": "豊かな実りを蓄えた実りの秋の季節であったというのに。"
        },
        {
          "text": "Bearing the wanton burden of the prime,",
          "ja": "大地は豊かな恵みをその胎内に宿し、まるで未亡人の腹のように"
        },
        {
          "text": "Like widow’d wombs after their lords’ decease:",
          "ja": "亡き夫の残した実りの遺産を、誇らしげに膨らませていたというのに。"
        },
        {
          "text": "Yet this abundant issue seem’d to me",
          "ja": "だが私にとって、この豊かな実りのすべては"
        },
        {
          "text": "But hope of orphans, and unfather’d fruit;",
          "ja": "ただの父なき孤児たちの悲哀にしか見えなかったのだ。"
        },
        {
          "text": "For summer and his pleasures wait on thee,",
          "ja": "なぜなら、すべての夏と夏の喜びは、君の中にこそあるのであり"
        },
        {
          "text": "And, thou away, the very birds are mute:",
          "ja": "君のいない場所では、鳥たちの歌さえも凍りついてしまうのだから。"
        },
        {
          "text": "Or, if they sing, ’tis with so dull a cheer,",
          "ja": "もし鳥たちが歌ったとしても、その調べはあまりに哀しく沈んでおり"
        },
        {
          "text": "That leaves look pale, dreading the winter’s near.",
          "ja": "迫り来る冬の恐怖におののいて、木の葉が青ざめて散り急ぐかのようだった。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc143_1505_librivox/spc143_sonnet97_wt.mp3",
        "reader": "Winston Tharp",
        "duration": "1:13"
      }
    },
    {
      "no": 98,
      "title_ja": "春の花々も君の面影の写しにすぎず",
      "lines": [
        {
          "text": "From you have I been absent in the spring,",
          "ja": "私は君と離れて、あの誇らしき春の季節を過ごした"
        },
        {
          "text": "When proud-pied April, dress’d in all his trim,",
          "ja": "色とりどりの衣装を纏った四月が、華やかに着飾って大地を歩み"
        },
        {
          "text": "Hath put a spirit of youth in every thing,",
          "ja": "万物に青春の重い息吹を吹き込んで、"
        },
        {
          "text": "That heavy Saturn laugh’d and leap’d with him.",
          "ja": "あの陰鬱なる土星（サターン）神さえも、喜びに踊らせたあの季節を。"
        },
        {
          "text": "Yet nor the lays of birds, nor the sweet smell",
          "ja": "だが咲き誇る花々の甘美な香りも、"
        },
        {
          "text": "Of different flowers in odour and in hue,",
          "ja": "様々な色に染め抜かれた花びらの鮮やかな競演も"
        },
        {
          "text": "Could make me any summer’s story tell,",
          "ja": "私に夏の一日の物語を歌わせることはできず"
        },
        {
          "text": "Or from their proud lap pluck them where they grew:",
          "ja": "誇らしげに咲く花を摘み取って、楽しむ気にもさせなかった。"
        },
        {
          "text": "Nor did I wonder at the lily’s white,",
          "ja": "私は百合の純白の白さに驚くこともなく、"
        },
        {
          "text": "Nor praise the deep vermilion in the rose;",
          "ja": "薔薇の深紅の紅を褒め称えることもなかった。"
        },
        {
          "text": "They were but sweet, but figures of delight,",
          "ja": "それらはただ、君の面影の甘やかな写し絵にすぎず"
        },
        {
          "text": "Drawn after you, you pattern of all those.",
          "ja": "君という完璧な原型から、美を模倣した幻影にすぎなかったのだから。"
        },
        {
          "text": "Yet seem’d it winter still, and you away,",
          "ja": "君のいない春は、私にとって依然として冬のままであり"
        },
        {
          "text": "As with your shadow I with these did play.",
          "ja": "私はただ花々の中に君の影を見出し、その影と戯れていただけだったのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 99,
      "title_ja": "早咲きの菫の花よ、その香りは君から盗んだもの",
      "lines": [
        {
          "text": "The forward violet thus did I chide:",
          "ja": "私は早咲きの生意気な菫（スミレ）の花を、こう咎めたのだ、"
        },
        {
          "text": "Sweet thief, whence didst thou steal thy sweet that smells,",
          "ja": "「甘美な盗賊よ、お前はその芳しい甘い香りをどこから盗んできたのか"
        },
        {
          "text": "If not from my love’s breath? The purple pride",
          "ja": "我が愛する人の息吹から盗んだのでないなら？"
        },
        {
          "text": "Which on thy soft cheek for complexion dwells",
          "ja": "お前の柔らかな花びらの頬を染めている、あの誇らしき紫の紅は"
        },
        {
          "text": "In my love’s veins thou hast too grossly dy’d.",
          "ja": "我が愛する人の血管の青い血から、図々しく染め抜いたものではないのか」と。"
        },
        {
          "text": "The lily I condemned for thy hand,",
          "ja": "私は百合の花を咎めた、君の美しい白い手を盗んだと。"
        },
        {
          "text": "And buds of marjoram had stol’n thy hair;",
          "ja": "マジョラム（ハーブ）の蕾を咎めた、君の巻き毛の香りを盗んだと。"
        },
        {
          "text": "The roses fearfully on thorns did stand,",
          "ja": "薔薇たちは、自らの盗みの罪におののいて棘の上に立ち竦んでいた"
        },
        {
          "text": "One blushing shame, another white despair;",
          "ja": "一輪の薔薇は恥じ入って赤らみ、もう一輪は絶望のあまり青ざめていた。"
        },
        {
          "text": "A third, nor red nor white, had stol’n of both,",
          "ja": "三輪目の薔薇は、赤でも白でもなく、その両方の色を盗み取り"
        },
        {
          "text": "And to his robbery had annex’d thy breath;",
          "ja": "そして自らの強奪の罪に、君の甘美な息吹の香りを付け足していた。"
        },
        {
          "text": "But, for his theft, in pride of all his growth",
          "ja": "だが、その盗みの罪ゆえに、誇らしく咲き誇るその蕾の奥を"
        },
        {
          "text": "A vengeful canker eat him up to death.",
          "ja": "復讐の毛虫が食い荒らし、花を死へと追いやっていたのだ。"
        },
        {
          "text": "More flowers I noted, yet I none could see,",
          "ja": "私はさらに多くの花々を見つめたが、どの花ひとつとして"
        },
        {
          "text": "But sweet, or colour it had stol’n from thee.",
          "ja": "君から甘美な香りか色を盗んでいないものなど、どこにもなかったのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 100,
      "title_ja": "我が詩神よ、なぜ長きにわたり沈黙したのか",
      "lines": [
        {
          "text": "Where art thou Muse that thou forget’st so long,",
          "ja": "我が詩神よ"
        },
        {
          "text": "To speak of that which gives thee all thy might?",
          "ja": "お前はどこへ行ってしまっていたのか、なぜこれほど長く"
        },
        {
          "text": "Spend’st thou thy fury on some worthless song,",
          "ja": "お前に力を授けてくれる唯一の源泉について"
        },
        {
          "text": "Darkening thy power to lend base subjects light?",
          "ja": "歌うことを忘れていたのか。"
        },
        {
          "text": "Return forgetful Muse, and straight redeem,",
          "ja": "お前はその気高い炎を、無価値な世俗の歌のために浪費し"
        },
        {
          "text": "In gentle numbers time so idly spent;",
          "ja": "卑しい題材を飾るために、その輝かしい力をすり減らしていたのか。"
        },
        {
          "text": "Sing to the ear that doth thy lays esteem",
          "ja": "戻っておいで、物忘れのひどい詩神よ、今すぐに戻っておいで"
        },
        {
          "text": "And gives thy pen both skill and argument.",
          "ja": "そして甘美なる歳月を讃える、永遠の讃美歌をもう一度歌い始めるのだ。"
        },
        {
          "text": "Rise, resty Muse, my love’s sweet face survey,",
          "ja": "愛する人の美しい顔を見つめるがよい、もしあの時の針が"
        },
        {
          "text": "If Time have any wrinkle graven there;",
          "ja": "彼の愛らしき顔に、ひとすじでも皺を刻みつけてはいないかを。"
        },
        {
          "text": "If any, be a satire to decay,",
          "ja": "もし皺を見出したなら、お前の詩を時の風化への風刺とし"
        },
        {
          "text": "And make time’s spoils despised every where.",
          "ja": "時の無慈悲な略奪の罪を、世界中の人々の前に暴き立てるがよい。"
        },
        {
          "text": "Give my love fame faster than Time wastes life,",
          "ja": "時が彼の命を刈り取るよりも速く、君の筆で彼に名声の冠を授けよ"
        },
        {
          "text": "So thou prevent’st his scythe and crooked knife.",
          "ja": "時の大鎌が彼の美しさを奪い去る前に、彼を不滅の存在へと変えてしまえ。"
        }
      ],
      "audio": null
    },
    {
      "no": 101,
      "title_ja": "真実も美も飾りを要さぬと詩神は弁明するか",
      "lines": [
        {
          "text": "O truant Muse what shall be thy amends",
          "ja": "おお、我が怠惰な詩神よ、お前は自らの沈黙の罪をどう言い訳するのか"
        },
        {
          "text": "For thy neglect of truth in beauty dy’d?",
          "ja": "真実と美しさがひとつに溶け合う、愛する友の賛美を怠ったことに対して。"
        },
        {
          "text": "Both truth and beauty on my love depends;",
          "ja": "真実も美しさも、愛する友の中にこそ完璧に息づいており"
        },
        {
          "text": "So dost thou too, and therein dignified.",
          "ja": "そしてお前もまた、彼によってこそ高貴な品位を授かっているというのに。"
        },
        {
          "text": "Make answer Muse: wilt thou not haply say,",
          "ja": "詩神よ、お前は答えるのか、「真実は絵の具の装飾など必要とせず"
        },
        {
          "text": "‘Truth needs no colour, with his colour fix’d;",
          "ja": "本物の美しさは、詩人の貧しい筆の化粧など求めはしない。"
        },
        {
          "text": "Beauty no pencil, beauty’s truth to lay;",
          "ja": "最高のものは、何の手を加えずとも最高なのだから」と。"
        },
        {
          "text": "But best is best, if never intermix’d’?",
          "ja": "だからといってお前は、沈黙を守り続けてよいことにはならないのだ！"
        },
        {
          "text": "Because he needs no praise, wilt thou be dumb?",
          "ja": "彼が賛美を必要としていないからといって、お前が沈黙してよい理由にはならない。"
        },
        {
          "text": "Excuse not silence so, for’t lies in thee",
          "ja": "彼を金色の記念碑よりも長く生き長らえさせ"
        },
        {
          "text": "To make him much outlive a gilded tomb",
          "ja": "未来のあらゆる世紀の人々の瞳の中に、彼を輝かせることこそがお前の務めなのだから。"
        },
        {
          "text": "And to be prais’d of ages yet to be.",
          "ja": "立ち上がりなさい、詩神よ。"
        },
        {
          "text": "Then do thy office, Muse; I teach thee how",
          "ja": "私が教えてやろう、彼の姿をどのように描くべきかを"
        },
        {
          "text": "To make him seem long hence as he shows now.",
          "ja": "遥かなる未来の時代の人々に、彼が今の姿のまま輝いて見えるようにと。"
        }
      ],
      "audio": null
    },
    {
      "no": 102,
      "title_ja": "我が愛は衰えたのではなく声を潜めただけ",
      "lines": [
        {
          "text": "My love is strengthen’d, though more weak in seeming;",
          "ja": "私の愛は強く育っている、たとえ外見には弱々しく見えようとも。"
        },
        {
          "text": "I love not less, though less the show appear;",
          "ja": "私は決して愛を失ったのではない、ただ愛を見せびらかさなくなっただけだ。"
        },
        {
          "text": "That love is merchandiz’d, whose rich esteeming,",
          "ja": "愛を売り物にする商人のように、あらゆる場所で"
        },
        {
          "text": "The owner’s tongue doth publish every where.",
          "ja": "愛の言葉を軽々しく口にする者を、真の愛と呼ぶことなどできはしない。"
        },
        {
          "text": "Our love was new, and then but in the spring,",
          "ja": "私たちの愛がまだ若く、新緑の芽吹きの春にあった頃は"
        },
        {
          "text": "When I was wont to greet it with my lays;",
          "ja": "私は君を讃える歌を、日夜休むことなく歌い続けていた。"
        },
        {
          "text": "As Philomel in summer’s front doth sing,",
          "ja": "あのナイチンゲール（夜啼き鶯）が、初夏の訪れと共に野山で歌い"
        },
        {
          "text": "And stops her pipe in growth of riper days:",
          "ja": "やがて季節が深まるにつれて、その歌の声を潜めるように。"
        },
        {
          "text": "Not that the summer is less pleasant now",
          "ja": "夏がその美しさを失ったからナイチンゲールが沈黙するのではない"
        },
        {
          "text": "Than when her mournful hymns did hush the night,",
          "ja": "夜の静寂の中に響いていたあの甘美な調べが"
        },
        {
          "text": "But that wild music burthens every bough,",
          "ja": "他の無数の鳥たちの騒がしい鳴き声によってかき消され"
        },
        {
          "text": "And sweets grown common lose their dear delight.",
          "ja": "その歌の尊い価値が、日常のありふれた音へと落ちてしまうのを嫌うからだ。"
        },
        {
          "text": "Therefore like her, I sometime hold my tongue:",
          "ja": "だから私もまた、ナイチンゲールのように時に舌を休めるのだ"
        },
        {
          "text": "Because I would not dull you with my song.",
          "ja": "あまりに歌いすぎて、君の耳を退屈な倦怠で曇らせたくはないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 103,
      "title_ja": "君を讃えようとするほど筆は貧しくなり",
      "lines": [
        {
          "text": "Alack! what poverty my Muse brings forth,",
          "ja": "ああ"
        },
        {
          "text": "That having such a scope to show her pride,",
          "ja": "私の詩神が紡ぎ出す詩句は"
        },
        {
          "text": "The argument, all bare, is of more worth",
          "ja": "なんと貧しくみすぼらしいことか！"
        },
        {
          "text": "Than when it hath my added praise beside!",
          "ja": "それ自体で輝かしい主題（君）を前にしながら"
        },
        {
          "text": "O! blame me not, if I no more can write!",
          "ja": "私の言葉を付け足すことによって、かえって君の価値を落としてしまうとは。"
        },
        {
          "text": "Look in your glass, and there appears a face",
          "ja": "私の詩などないほうが、君の美しさはどれほど鮮やかに輝くことだろう。"
        },
        {
          "text": "That over-goes my blunt invention quite,",
          "ja": "ああ、どうか私を責めないでおくれ、私が書けなくなったことを！"
        },
        {
          "text": "Dulling my lines, and doing me disgrace.",
          "ja": "ただ君の鏡を覗き込むがよい、そこに映る君のありのままの姿が"
        },
        {
          "text": "Were it not sinful then, striving to mend,",
          "ja": "私の不器用な詩句のどんな大げさな賛美をも、はるかに凌駕しているのを見るだろう。"
        },
        {
          "text": "To mar the subject that before was well?",
          "ja": "私の詩など、君の完璧な姿をただ傷つけ、不格好に歪めるだけなのだから。"
        },
        {
          "text": "For to no other pass my verses tend",
          "ja": "私の詩の目的とは、ただ君の美しさと美徳を少しでも世に伝えることであり"
        },
        {
          "text": "Than of your graces and your gifts to tell;",
          "ja": "君の姿をより輝かせること以外の何ものでもなかったというのに。"
        },
        {
          "text": "And more, much more, than in my verse can sit,",
          "ja": "だが私の言葉は、君自身の姿の前にはあまりに無力だ。"
        },
        {
          "text": "Your own glass shows you when you look in it.",
          "ja": "君の鏡が君に映し出してくれる真実の姿の、千分の一も語ることができないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 104,
      "title_ja": "初めて君に出会ったあの日から君は美しきまま",
      "lines": [
        {
          "text": "To me, fair friend, you never can be old,",
          "ja": "私にとって、美しき友よ、君は決して老いることがない。"
        },
        {
          "text": "For as you were when first your eye I ey’d,",
          "ja": "初めて君の瞳と私の瞳が出会ったあの日と全く同じ姿で"
        },
        {
          "text": "Such seems your beauty still. Three winters cold,",
          "ja": "君の美しさは、今も私の目の前に輝き続けているのだから。"
        },
        {
          "text": "Have from the forests shook three summers’ pride,",
          "ja": "三度の冷たい冬が、森から夏の誇りを揺さぶり落とし"
        },
        {
          "text": "Three beauteous springs to yellow autumn turn’d,",
          "ja": "三度の美しい春が"
        },
        {
          "text": "In process of the seasons have I seen,",
          "ja": "黄色の秋へと姿を変えてゆくのを私は見てきた。"
        },
        {
          "text": "Three April perfumes in three hot Junes burn’d,",
          "ja": "三度の薫り高き四月が、三度の六月の炎の中で燃え尽きるのを見守ってきた"
        },
        {
          "text": "Since first I saw you fresh, which yet are green.",
          "ja": "私が初めて君の若き姿を見つめてから、今に至るまでの歳月の中で。"
        },
        {
          "text": "Ah! yet doth beauty like a dial-hand,",
          "ja": "だが君は、今も変わらぬ新鮮な緑を保っているのだ！"
        },
        {
          "text": "Steal from his figure, and no pace perceiv’d;",
          "ja": "ああ、だが日時計の針が、その歩みを誰の目にも見せぬまま進むように"
        },
        {
          "text": "So your sweet hue, which methinks still doth stand,",
          "ja": "君の甘美な姿もまた、人の目には見えぬ静けさの中で、老いへと進んでいるのかもしれない。"
        },
        {
          "text": "Hath motion, and mine eye may be deceiv’d:",
          "ja": "私の目がお前の歩みに騙されているだけなのかもしれない。"
        },
        {
          "text": "For fear of which, hear this thou age unbred:",
          "ja": "ならば聴くがよい、まだ生まれぬ未来の世代の人々よ！"
        },
        {
          "text": "Ere you were born was beauty’s summer dead.",
          "ja": "「お前たちが生まれる前に、美の最高の頂点はすでに死に絶えていたのだ」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 105,
      "title_ja": "我が愛を偶像崇拝と呼ぶことなかれ",
      "lines": [
        {
          "text": "Let not my love be call’d idolatry,",
          "ja": "私の愛を偶像崇拝と呼ぶな、我が愛する人を"
        },
        {
          "text": "Nor my beloved as an idol show,",
          "ja": "ただの偶像のように祭り上げていると非難するな。"
        },
        {
          "text": "Since all alike my songs and praises be",
          "ja": "私のすべての歌と祈りは、ただひとつの存在に向けられ"
        },
        {
          "text": "To one, of one, still such, and ever so.",
          "ja": "ひとつの主題、ひとつの愛の周りを巡り続けているのだから。"
        },
        {
          "text": "Kind is my love to-day, to-morrow kind,",
          "ja": "我が愛する人は今日も優しく、明日もまた優しい"
        },
        {
          "text": "Still constant in a wondrous excellence;",
          "ja": "常に変わらぬ完璧な誠実さを保ち続けている。"
        },
        {
          "text": "Therefore my verse to constancy confin’d,",
          "ja": "だから私の詩句もまた、移り気な変化を拒み"
        },
        {
          "text": "One thing expressing, leaves out difference.",
          "ja": "ひとつの変わらぬ主題を、永遠に歌い続けるのだ。"
        },
        {
          "text": "‘Fair, kind, and true,’ is all my argument,",
          "ja": "「美しく"
        },
        {
          "text": "‘Fair, kind, and true,’ varying to other words;",
          "ja": "優しく、真実であること」、これが私の歌のすべてだ"
        },
        {
          "text": "And in this change is my invention spent,",
          "ja": "「美しく、優しく、真実であること」、言葉を変えて歌い直す我が祈りのすべて。"
        },
        {
          "text": "Three themes in one, which wondrous scope affords.",
          "ja": "この三つの言葉の中に、私の詩のすべての広がりが閉じ込められている。"
        },
        {
          "text": "Fair, kind, and true, have often liv’d alone,",
          "ja": "「美」と「優しさ」と「真実」は、かつて別々にしか存在しなかった"
        },
        {
          "text": "Which three till now, never kept seat in one.",
          "ja": "だが今やこの三つの至高の美徳が、君というひとりの器の中に奇跡のように宿っているのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 106,
      "title_ja": "古き物語に描かれた美の予言こそ君の姿",
      "lines": [
        {
          "text": "When in the chronicle of wasted time",
          "ja": "失われた過去の時代の記録をめくり"
        },
        {
          "text": "I see descriptions of the fairest wights,",
          "ja": "古代の美しい人々についての甘美な描写を読むとき"
        },
        {
          "text": "And beauty making beautiful old rime,",
          "ja": "古の詩人たちが、自らの美しい言葉を飾るために"
        },
        {
          "text": "In praise of ladies dead and lovely knights,",
          "ja": "死せる乙女たちや"
        },
        {
          "text": "Then, in the blazon of sweet beauty’s best,",
          "ja": "愛らしき騎士たちを讃えた歌を見つめるとき"
        },
        {
          "text": "Of hand, of foot, of lip, of eye, of brow,",
          "ja": "私は知るのだ、彼らが描いたあらゆる美の賛辞が"
        },
        {
          "text": "I see their antique pen would have express’d",
          "ja": "目や唇や頬や足や額の、あの息をのむような美しい描写のすべてが"
        },
        {
          "text": "Even such a beauty as you master now.",
          "ja": "ただ、今ここに生きる君の美しさを、前もって予言していたにすぎないのだと。"
        },
        {
          "text": "So all their praises are but prophecies",
          "ja": "彼らの描いたあらゆる賛美の言葉は、ただの影絵の予言にすぎず"
        },
        {
          "text": "Of this our time, all you prefiguring;",
          "ja": "この時代に現れる君という奇跡の姿を、あらかじめ見通していただけなのだ。"
        },
        {
          "text": "And for they looked but with divining eyes,",
          "ja": "だが古人たちは、ただ希望の瞳で遠くを眺めていただけであり"
        },
        {
          "text": "They had not skill enough your worth to sing:",
          "ja": "君の真の姿を余すところなく讃えるための、十分な言葉を持たなかった。"
        },
        {
          "text": "For we, which now behold these present days,",
          "ja": "そして今、君の生きた姿をこの目で見つめる幸運に恵まれた私たちもまた"
        },
        {
          "text": "Have eyes to wonder, but lack tongues to praise.",
          "ja": "君の美しさを讃えるための舌を持たず、ただ息を呑んで見つめることしかできないのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 107,
      "title_ja": "迫り来る破滅を占う預言者も愛を裂けず",
      "lines": [
        {
          "text": "Not mine own fears, nor the prophetic soul",
          "ja": "私自身の抱く不安も、未来の破滅を夢想する"
        },
        {
          "text": "Of the wide world dreaming on things to come,",
          "ja": "この広い世界の予言者たちの不吉な占いも"
        },
        {
          "text": "Can yet the lease of my true love control,",
          "ja": "我が真実の愛の不滅の命を"
        },
        {
          "text": "Supposed as forfeit to a confin’d doom.",
          "ja": "支配することなど決してできない。"
        },
        {
          "text": "The mortal moon hath her eclipse endur’d,",
          "ja": "かつて運命の宣告によって、終わりを迎えると信じられていた愛であっても。"
        },
        {
          "text": "And the sad augurs mock their own presage;",
          "ja": "見よ、あの不吉な月食を恐れられた月（女王）は、無事にその闇を通り抜け"
        },
        {
          "text": "Incertainties now crown themselves assur’d,",
          "ja": "陰鬱なる占星術師たちは、己の予言の愚かさを恥じて沈黙した。"
        },
        {
          "text": "And peace proclaims olives of endless age.",
          "ja": "不安と混乱の霧は晴れ渡り、果てしなきオリーブの平和が"
        },
        {
          "text": "Now with the drops of this most balmy time,",
          "ja": "永遠の約束と共に、地上に降り注いでいるではないか。"
        },
        {
          "text": "My love looks fresh, and Death to me subscribes,",
          "ja": "今こそ、この平和な時代の甘美な雫を浴びて"
        },
        {
          "text": "Since, spite of him, I’ll live in this poor rime,",
          "ja": "私の愛は新しく生まれ変わり、死神でさえ我が愛に屈服するのだ。"
        },
        {
          "text": "While he insults o’er dull and speechless tribes:",
          "ja": "私はこの詩の中で永遠に生き続け、無学な愚者たちが塵となって消え去る中であっても"
        },
        {
          "text": "And thou in this shalt find thy monument,",
          "ja": "君はこの詩の文字の中で、永遠の不滅の記念碑を見出し続けるのだから。"
        },
        {
          "text": "When tyrants’ crests and tombs of brass are spent.",
          "ja": "暴君たちの真鍮の墓碑銘が風化し消え去ろうとも、君は永遠に生き続けるのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 108,
      "title_ja": "新しい言葉はなくとも日々の愛は永遠に若く",
      "lines": [
        {
          "text": "What’s in the brain, that ink may character,",
          "ja": "私の脳のインクが"
        },
        {
          "text": "Which hath not figur’d to thee my true spirit?",
          "ja": "紙の上に書き残せる新しい言葉など何があろうか"
        },
        {
          "text": "What’s new to speak, what now to register,",
          "ja": "君の美徳と私の真実の愛を"
        },
        {
          "text": "That may express my love, or thy dear merit?",
          "ja": "まだ語り尽くしていない言葉など何があろうか。"
        },
        {
          "text": "Nothing, sweet boy; but yet, like prayers divine,",
          "ja": "新しく語るべきことなど何ひとつなく、新しく表現すべき言葉など何ひとつない"
        },
        {
          "text": "I must each day say o’er the very same;",
          "ja": "すでに語り尽くした言葉を、毎日祈りのように繰り返すこと以外には。"
        },
        {
          "text": "Counting no old thing old, thou mine, I thine,",
          "ja": "日々の祈りの言葉のように、毎日同じ言葉を口にする"
        },
        {
          "text": "Even as when first I hallow’d thy fair name.",
          "ja": "「君は私のもの、私は君のもの」、かつて初めて君に愛を誓ったあの日と同じように。"
        },
        {
          "text": "So that eternal love in love’s fresh case,",
          "ja": "永遠の愛の前にあっては、歳月による古びなど存在しないのだ"
        },
        {
          "text": "Weighs not the dust and injury of age,",
          "ja": "日々の埃を払い落とし、最初に出会ったあの日の新鮮さを永遠に保ち続けるのだから。"
        },
        {
          "text": "Nor gives to necessary wrinkles place,",
          "ja": "愛は、老いの皺や時の歩みをものともせず"
        },
        {
          "text": "But makes antiquity for aye his page;",
          "ja": "かつて若き日に生まれた甘美な愛の詩を、永遠に新しく歌い直す。"
        },
        {
          "text": "Finding the first conceit of love there bred,",
          "ja": "最初の愛が生み出されたあの場所において"
        },
        {
          "text": "Where time and outward form would show it dead.",
          "ja": "時と歳月が死と運命を告げようとも、愛は赤子のように永遠に若く生き続けるのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 109,
      "title_ja": "たとえ私が彷徨おうとも心は決して変わらぬ",
      "lines": [
        {
          "text": "O! never say that I was false of heart,",
          "ja": "ああ"
        },
        {
          "text": "Though absence seem’d my flame to qualify,",
          "ja": "決して言わないでおくれ、私の心が偽りに満ちていたなどと"
        },
        {
          "text": "As easy might I from my self depart",
          "ja": "たとえ旅の別離が、私の身体を遠くへ彷徨わせたとしても。"
        },
        {
          "text": "As from my soul which in thy breast doth lie:",
          "ja": "私自身の魂から私自身を引き離すことができないのと同じように"
        },
        {
          "text": "That is my home of love: if I have rang’d,",
          "ja": "私の心が君の胸から離れ去ることなど、決してあり得ないのだから。"
        },
        {
          "text": "Like him that travels, I return again;",
          "ja": "君こそは私の魂の故郷であり、私がどれほど遠く彷徨い歩こうとも"
        },
        {
          "text": "Just to the time, not with the time exchang’d,",
          "ja": "私は必ず戻ってくるのだ、時間通りに、自分自身を変えることなく。"
        },
        {
          "text": "So that myself bring water for my stain.",
          "ja": "旅の埃に汚れた我が身を、自らの悔恨の涙で洗い清めながら。"
        },
        {
          "text": "Never believe though in my nature reign’d,",
          "ja": "決して信じないでおくれ、私の肉体を支配するあらゆる弱さのせいで"
        },
        {
          "text": "All frailties that besiege all kinds of blood,",
          "ja": "私の魂がこれほど卑しく堕落してしまったなどとは。"
        },
        {
          "text": "That it could so preposterously be stain’d,",
          "ja": "君というかけがえのない至高の宝を捨て去って、"
        },
        {
          "text": "To leave for nothing all thy sum of good;",
          "ja": "世のくだらぬ無価値な愛のために、君を裏切るような真似をするはずがないと。"
        },
        {
          "text": "For nothing this wide universe I call,",
          "ja": "なぜなら、この広大なる宇宙のすべての中にあっても、君以外には何ひとつ価値あるものなどなく"
        },
        {
          "text": "Save thou, my rose, in it thou art my all.",
          "ja": "君こそは私の世界であり、私の喜びのすべてなのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc222_2112_librivox/spc222_sonnet109_wt.mp3",
        "reader": "Winston Tharp",
        "duration": "1:15"
      }
    },
    {
      "no": 110,
      "title_ja": "過ちを重ねて世の道化を演じたけれど",
      "lines": [
        {
          "text": "Alas! ’tis true, I have gone here and there,",
          "ja": "ああ、まったくその通りだ、私はあちこちを彷徨い歩き"
        },
        {
          "text": "And made my self a motley to the view,",
          "ja": "世の人々の前で"
        },
        {
          "text": "Gor’d mine own thoughts, sold cheap what is most dear,",
          "ja": "道化のように我が身を晒して笑い者にしてきた。"
        },
        {
          "text": "Made old offences of affections new;",
          "ja": "自分自身の感情を切り売りし、最も大切な真実を安売りし"
        },
        {
          "text": "Most true it is, that I have look’d on truth",
          "ja": "古い愛の傷跡の上に、新しい過ちの傷を重ねてきた。"
        },
        {
          "text": "Askance and strangely; but, by all above,",
          "ja": "まったくその通りだ、私は真実を斜めに見つめ、過ちの道を歩んだ。"
        },
        {
          "text": "These blenches gave my heart another youth,",
          "ja": "だが天よ知る通り、これらの悲しい彷徨の数々こそが"
        },
        {
          "text": "And worse essays prov’d thee my best of love.",
          "ja": "私の心に、君の真実の愛の尊さを、何倍もの力で教え直してくれたのだ！"
        },
        {
          "text": "Now all is done, save what shall have no end:",
          "ja": "あらゆる試練を経て、私の愛は今や永遠に満たされた。"
        },
        {
          "text": "Mine appetite I never more will grind",
          "ja": "私はもう二度と、新しい欲望の火遊びに身を焦がすことはないだろう"
        },
        {
          "text": "On newer proof, to try an older friend,",
          "ja": "古い誠実な愛を、新しい気まぐれで試すような愚かな真似は決してしない。"
        },
        {
          "text": "A god in love, to whom I am confin’d.",
          "ja": "君こそは私の魂の神であり、私の愛の至高の終着点なのだから。"
        },
        {
          "text": "Then give me welcome, next my heaven the best,",
          "ja": "だから愛する人よ、私を君の胸へと温かく迎え入れておくれ"
        },
        {
          "text": "Even to thy pure and most most loving breast.",
          "ja": "彷徨に疲れ果てたこの私を、君の純白の慈愛の胸に抱きとめておくれ。"
        }
      ],
      "audio": null
    },
    {
      "no": 111,
      "title_ja": "私を育てた運命を呪うがよい",
      "lines": [
        {
          "text": "O! for my sake do you with Fortune chide,",
          "ja": "ああ、私のために運命の女神を呪っておくれ"
        },
        {
          "text": "The guilty goddess of my harmful deeds,",
          "ja": "我が卑しい過ちの原因となった、あの罪深き不運の女神を。"
        },
        {
          "text": "That did not better for my life provide",
          "ja": "運命は私の生涯に、気高く高貴な手段を与えてはくれず"
        },
        {
          "text": "Than public means which public manners breeds.",
          "ja": "ただ大衆の目に晒される、卑しい職業（演劇）によってしか糧を得る道を許さなかった。"
        },
        {
          "text": "Thence comes it that my name receives a brand,",
          "ja": "その卑しい暮らしのせいで、私の名前には消えぬ汚名が焼き付けられ"
        },
        {
          "text": "And almost thence my nature is subdu’d",
          "ja": "染物屋の手が、染料の壺に浸されて決して落ちぬ色に染まるように"
        },
        {
          "text": "To what it works in, like the dyer’s hand:",
          "ja": "私の魂もまた、その卑しい暮らしの汚れに深く染まってしまったのだ。"
        },
        {
          "text": "Pity me, then, and wish I were renew’d;",
          "ja": "だからどうか私を憐れんでおくれ、そして私の魂が清められることを祈っておくれ！"
        },
        {
          "text": "Whilst, like a willing patient, I will drink,",
          "ja": "病人が苦い酢（薬）を素直に飲み干すように"
        },
        {
          "text": "Potions of eisel ’gainst my strong infection;",
          "ja": "私は君の与えてくれるどんな厳しい戒めの薬であっても、喜んで飲み干そう。"
        },
        {
          "text": "No bitterness that I will bitter think,",
          "ja": "苦痛に満ちた反省の痛みを、私は少しも苦しいとは思わないだろう。"
        },
        {
          "text": "Nor double penance, to correct correction.",
          "ja": "どうか私を憐れんでおくれ、優しい友よ。"
        },
        {
          "text": "Pity me then, dear friend, and I assure ye,",
          "ja": "私は約束しよう"
        },
        {
          "text": "Even that your pity is enough to cure me.",
          "ja": "君の優しい憐れみだけで、私の魂のあらゆる汚れは綺麗に洗い流されるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 112,
      "title_ja": "世の誹謗も君の愛が我が額を覆うなら",
      "lines": [
        {
          "text": "Your love and pity doth the impression fill,",
          "ja": "君の優しい愛と憐れみこそが、私の額に焼き付けられた"
        },
        {
          "text": "Which vulgar scandal stamp’d upon my brow;",
          "ja": "あの世の人々の冷たい中傷の傷跡を"
        },
        {
          "text": "For what care I who calls me well or ill,",
          "ja": "すっかり埋め尽くしてくれた。"
        },
        {
          "text": "So you o’er-green my bad, my good allow?",
          "ja": "世の人々が私をどう呼ぼうとも、私には何の関心もない"
        },
        {
          "text": "You are my all-the-world, and I must strive",
          "ja": "君が私の悪しき面を覆い隠し、我が良き面を信じてくれる限りは。"
        },
        {
          "text": "To know my shames and praises from your tongue;",
          "ja": "君こそが私の全世界であり、私は君の舌からのみ"
        },
        {
          "text": "None else to me, nor I to none alive,",
          "ja": "我が恥辱と我が名誉の審判を受け取るべきなのだから。"
        },
        {
          "text": "That my steel’d sense or changes right or wrong.",
          "ja": "君以外の誰ひとりとして、私の魂を生かすことも殺すこともできない"
        },
        {
          "text": "In so profound abysm I throw all care",
          "ja": "他のあらゆる人間の批判など、私の耳には届かないのだから。"
        },
        {
          "text": "Of others’ voices, that my adder’s sense",
          "ja": "私は世のあらゆる中傷の声を、深い忘却の深淵へと投げ捨てた"
        },
        {
          "text": "To critic and to flatterer stopped are.",
          "ja": "蛇のように頑なに耳を塞ぎ、世の賞賛にも非難にも耳を貸さない。"
        },
        {
          "text": "Mark how with my neglect I do dispense:",
          "ja": "私が他者の声をこれほど完全に無視できる理由を教えてやろう"
        },
        {
          "text": "You are so strongly in my purpose bred,",
          "ja": "私の胸の中には、君への想いがあまりに深く満ち満ちており"
        },
        {
          "text": "That all the world besides methinks are dead.",
          "ja": "君以外のすべての世界は、死に絶えた抜け殻のようにしか見えないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 113,
      "title_ja": "君と離れて我が瞳は心の中にしか映さず",
      "lines": [
        {
          "text": "Since I left you, mine eye is in my mind;",
          "ja": "君と離れ去ってから、私の瞳は心の中にしか物を見つめない。"
        },
        {
          "text": "And that which governs me to go about",
          "ja": "私の目を開いて外界を眺めさせても、その視線は死んでおり"
        },
        {
          "text": "Doth part his function and is partly blind,",
          "ja": "外の世界の景色を"
        },
        {
          "text": "Seems seeing, but effectually is out;",
          "ja": "頭の中へと届ける機能をすっかり失ってしまっている。"
        },
        {
          "text": "For it no form delivers to the heart",
          "ja": "瞳は景色を見つめながら"
        },
        {
          "text": "Of bird, of flower, or shape which it doth latch:",
          "ja": "その形を少しも心に留めることができず"
        },
        {
          "text": "Of his quick objects hath the mind no part,",
          "ja": "鳥であれ、花であれ、どのような姿が目の前を通り過ぎようとも"
        },
        {
          "text": "Nor his own vision holds what it doth catch;",
          "ja": "その映像を記憶に焼き付けることができないのだ。"
        },
        {
          "text": "For if it see the rud’st or gentlest sight,",
          "ja": "瞳の前に現れるあらゆる景色は、美しいものであれ醜いものであれ"
        },
        {
          "text": "The most sweet favour or deformed’st creature,",
          "ja": "最も気高い姿であれ、最も粗野な生き物であれ"
        },
        {
          "text": "The mountain or the sea, the day or night:",
          "ja": "カラスであれ鳩であれ、山であれ海であれ、昼であれ夜であれ"
        },
        {
          "text": "The crow, or dove, it shapes them to your feature.",
          "ja": "私の瞳は、そのあらゆる姿を君の面影へと変えてしまうのだ！"
        },
        {
          "text": "Incapable of more, replete with you,",
          "ja": "君への想いにあまりに深く満たされているがゆえに"
        },
        {
          "text": "My most true mind thus maketh mine untrue.",
          "ja": "私の瞳は真実を見失い、ただ君の姿ばかりを世界中に見出しているのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 114,
      "title_ja": "愛の幻影が我が目を騙しているのか",
      "lines": [
        {
          "text": "Or whether doth my mind, being crown’d with you,",
          "ja": "それとも、私の魂が君という王冠を戴く君主となったゆえに"
        },
        {
          "text": "Drink up the monarch’s plague, this flattery?",
          "ja": "我が瞳はお世辞の毒杯を呷り"
        },
        {
          "text": "Or whether shall I say, mine eye saith true,",
          "ja": "君の幻影を作り出しているのか。"
        },
        {
          "text": "And that your love taught it this alchemy,",
          "ja": "それとも私の瞳は、愛の深き錬金術の技を心得ていて"
        },
        {
          "text": "To make of monsters and things indigest",
          "ja": "あらゆる見苦しいもの"
        },
        {
          "text": "Such cherubins as your sweet self resemble,",
          "ja": "醜いものを、君の天使のような美しい姿へと"
        },
        {
          "text": "Creating every bad a perfect best,",
          "ja": "黄金のように変えてしまう奇跡を成し遂げているのだろうか。"
        },
        {
          "text": "As fast as objects to his beams assemble?",
          "ja": "ああ、そうだ、これは私の瞳が仕掛けた、甘美なお世辞の罠なのだ"
        },
        {
          "text": "O! ’tis the first, ’tis flattery in my seeing,",
          "ja": "そして私の高貴な魂は、その杯を喜んで飲み干しているのだ。"
        },
        {
          "text": "And my great mind most kingly drinks it up:",
          "ja": "王侯貴族がお世辞の毒杯を好むように、私の心もまた"
        },
        {
          "text": "Mine eye well knows what with his gust is ’greeing,",
          "ja": "我が瞳が差し出す、甘美なお世辞の酒を喜んで受け入れているのだから。"
        },
        {
          "text": "And to his palate doth prepare the cup:",
          "ja": "たとえその杯に毒が盛られているとしても、罪は軽い"
        },
        {
          "text": "If it be poison’d, ’tis the lesser sin",
          "ja": "なぜなら、その酒を差し出す瞳自身が、最初にその毒を味わい"
        },
        {
          "text": "That mine eye loves it and doth first begin.",
          "ja": "心と瞳がひとつになって、君への愛の毒に酔い痴れているのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 115,
      "title_ja": "かつて「これ以上は愛せない」と書いた嘘",
      "lines": [
        {
          "text": "Those lines that I before have writ do lie,",
          "ja": "かつて私が書いた詩の数々は、嘘を語っていたのだ"
        },
        {
          "text": "Even those that said I could not love you dearer:",
          "ja": "「私はこれ以上君を愛することはできない」と書き残したあの日々の言葉は。"
        },
        {
          "text": "Yet then my judgement knew no reason why",
          "ja": "その時私の理性は"
        },
        {
          "text": "My most full flame should afterwards burn clearer.",
          "ja": "自らの愛がこれ以上強く燃え上がることなど"
        },
        {
          "text": "But reckoning Time, whose million’d accidents",
          "ja": "あり得ないと信じ込んでいたというのに。"
        },
        {
          "text": "Creep in ’twixt vows, and change decrees of kings,",
          "ja": "だが何百万もの偶然の出来事が、日々の暮らしの間に忍び込み"
        },
        {
          "text": "Tan sacred beauty, blunt the sharp’st intents,",
          "ja": "王たちの誓いを破らせ、神聖なる約束を覆し"
        },
        {
          "text": "Divert strong minds to the course of altering things;",
          "ja": "美しき若さを衰えさせ、力強い意志を鈍らせてゆく。"
        },
        {
          "text": "Alas! why fearing of Time’s tyranny,",
          "ja": "移ろいゆく時の暴虐を恐れるあまりに、私はかつて書いたのだ"
        },
        {
          "text": "Might I not then say, ‘Now I love you best,’",
          "ja": "「今この瞬間こそが、我が愛の最高の頂点である」と。"
        },
        {
          "text": "When I was certain o’er incertainty,",
          "ja": "だが愛とは、成長し続ける命の赤子なのだ！"
        },
        {
          "text": "Crowning the present, doubting of the rest?",
          "ja": "ならばなぜ私は、まだ育ちゆく愛に向かって「これが限界だ」などと告げたのか。"
        },
        {
          "text": "Love is a babe, then might I not say so,",
          "ja": "だから私は言い直そう、「かつての愛も完全であったけれど"
        },
        {
          "text": "To give full growth to that which still doth grow?",
          "ja": "今日の愛は、その完全さを超えてさらに豊かに燃え上がっている」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 116,
      "title_ja": "真の愛は心変わりの嵐にも揺るがない",
      "lines": [
        {
          "text": "Let me not to the marriage of true minds",
          "ja": "真実の魂と魂の結びつきに、いかなる障害も認めてはならない。"
        },
        {
          "text": "Admit impediments. Love is not love",
          "ja": "相手の心変わりを見て自らも心変わりし"
        },
        {
          "text": "Which alters when it alteration finds,",
          "ja": "相手が去りゆくのを見て自らも愛を取り去るようなものは、愛ではない。"
        },
        {
          "text": "Or bends with the remover to remove:",
          "ja": "決して、断じて違う！愛とは永遠に揺らぐことのない標識（灯台）であり"
        },
        {
          "text": "O, no! it is an ever-fixed mark,",
          "ja": "嵐をじっと見つめながら、決して激しい波風に揺らぐことはない。"
        },
        {
          "text": "That looks on tempests and is never shaken;",
          "ja": "愛とは、荒波を彷徨うすべての舟を導く天の星であり"
        },
        {
          "text": "It is the star to every wandering bark,",
          "ja": "その高度は測り得ても、その神秘の価値は誰にも測り知ることはできない。"
        },
        {
          "text": "Whose worth’s unknown, although his height be taken.",
          "ja": "愛は時の道化（おもちゃ）ではない。"
        },
        {
          "text": "Love’s not Time’s fool, though rosy lips and cheeks",
          "ja": "たとえ薔薇色の頬や唇が"
        },
        {
          "text": "Within his bending sickle’s compass come;",
          "ja": "時の曲がった大鎌の刃の前に、刈り取られようとも。"
        },
        {
          "text": "Love alters not with his brief hours and weeks,",
          "ja": "愛は、わずか数時間や数週間の短い歳月によって色褪せることはなく"
        },
        {
          "text": "But bears it out even to the edge of doom.",
          "ja": "この世が終わりを告げる最後の審判の瞬間まで、生き残り続けるのだ。"
        },
        {
          "text": "If this be error and upon me prov’d,",
          "ja": "もしこれが誤りであり、私の言葉が嘘であると証明されるならば"
        },
        {
          "text": "I never writ, nor no man ever lov’d.",
          "ja": "私は二度と詩を書くことはなく、そして誰も真に人を愛したことなどなかったのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/sonnet_116_librivox/sonnet_116_shakespeare_add.mp3",
        "reader": "Algy Pug",
        "duration": "1:29"
      }
    },
    {
      "no": 117,
      "title_ja": "我が怠惰と不義を責めるが良い",
      "lines": [
        {
          "text": "Accuse me thus: that I have scanted all,",
          "ja": "告発するがよい"
        },
        {
          "text": "Wherein I should your great deserts repay,",
          "ja": "私が君の豊かな恵みに十分な感謝を返さなかったと"
        },
        {
          "text": "Forgot upon your dearest love to call,",
          "ja": "君への愛の借金を、怠惰にも支払わずに放置していたと。"
        },
        {
          "text": "Whereto all bonds do tie me day by day;",
          "ja": "君の気高い愛に縛られた我が身でありながら、その義務を忘れ"
        },
        {
          "text": "That I have frequent been with unknown minds,",
          "ja": "日毎に君へと捧げるべき祈りの時間を、惜しんでいたと。"
        },
        {
          "text": "And given to time your own dear-purchas’d right;",
          "ja": "私が無価値な他者たちと共に時間を浪費し"
        },
        {
          "text": "That I have hoisted sail to all the winds",
          "ja": "君に捧げるべき貴重な時間を、くだらぬ人々に分け与えていたと。"
        },
        {
          "text": "Which should transport me farthest from your sight.",
          "ja": "あらゆる風に向かって我が帆を広げ、君の愛の港から"
        },
        {
          "text": "Book both my wilfulness and errors down,",
          "ja": "遠く離れた見知らぬ海へと、愚かにも船を走らせていたと。"
        },
        {
          "text": "And on just proof surmise, accumulate;",
          "ja": "我が過ちと我が罪のすべてを、君の手で帳簿に書き留めるがよい"
        },
        {
          "text": "Bring me within the level of your frown,",
          "ja": "疑わしき証拠の上に、さらに確かな証拠を積み重ねて私を裁くがよい。"
        },
        {
          "text": "But shoot not at me in your waken’d hate;",
          "ja": "だが愛する人よ、私の心を知っておくれ。"
        },
        {
          "text": "Since my appeal says I did strive to prove",
          "ja": "私が犯した過ちのすべては"
        },
        {
          "text": "The constancy and virtue of your love.",
          "ja": "ただ君の愛の深さと寛大さを、試してみたかっただけなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 118,
      "title_ja": "食欲を刺激するために苦き薬を飲むように",
      "lines": [
        {
          "text": "Like as, to make our appetite more keen,",
          "ja": "日々の食事に飽きぬよう、鋭い食欲を呼び覚ますために"
        },
        {
          "text": "With eager compounds we our palate urge;",
          "ja": "苦味の効いた香辛料や前菜を口にするように"
        },
        {
          "text": "As, to prevent our maladies unseen,",
          "ja": "あるいは、まだ見ぬ病の訪れを未然に防ぐために"
        },
        {
          "text": "We sicken to shun sickness when we purge;",
          "ja": "健康な身体にあえて下剤を飲ませ、自らを病気にするように"
        },
        {
          "text": "Even so, being full of your ne’er-cloying sweetness,",
          "ja": "私もまた、君の甘美な愛に満腹しきっていたあまりに"
        },
        {
          "text": "To bitter sauces did I frame my feeding;",
          "ja": "あえて苦い過ちの毒を自らに味わわせようとしたのだ。"
        },
        {
          "text": "And, sick of welfare, found a kind of meetness",
          "ja": "完璧な健康の喜びに飽き足らず、愚かにも病人の真似をして"
        },
        {
          "text": "To be diseas’d, ere that there was true needing.",
          "ja": "何の病気でもない健康な魂に、病の薬を与えてしまったのだ。"
        },
        {
          "text": "Thus policy in love, to anticipate",
          "ja": "だがこの過ちの実験によって、私は痛烈な真理を学んだ"
        },
        {
          "text": "The ills that were not, grew to faults assur’d,",
          "ja": "真実の健康を保つために、毒を飲むことの恐ろしさを。"
        },
        {
          "text": "And brought to medicine a healthful state",
          "ja": "君の甘美さに飽きることを恐れるあまりに"
        },
        {
          "text": "Which, rank of goodness, would by ill be cur’d;",
          "ja": "自らを毒に晒した愚かさを。"
        },
        {
          "text": "But thence I learn and find the lesson true,",
          "ja": "私は薬によって癒やされたのではなく、ただ自らを病気にしただけだった"
        },
        {
          "text": "Drugs poison him that so fell sick of you.",
          "ja": "君の愛こそが、私の唯一の真実の生命の糧であったというのに。"
        }
      ],
      "audio": null
    },
    {
      "no": 119,
      "title_ja": "恋の涙に洗われ我が愛はより強く育ち",
      "lines": [
        {
          "text": "What potions have I drunk of Siren tears,",
          "ja": "なんと恐ろしいサイレン（魔女）の涙の毒杯を、私は飲み干したことか"
        },
        {
          "text": "Distill’d from limbecks foul as hell within,",
          "ja": "地獄の底から蒸留されたような、偽りの恋の罠の中で！"
        },
        {
          "text": "Applying fears to hopes, and hopes to fears,",
          "ja": "恐れから希望へ、希望から恐れへと翻弄され"
        },
        {
          "text": "Still losing when I saw myself to win!",
          "ja": "勝ったと思った瞬間に、すべてを失って絶望の淵へと叩き落とされながら！"
        },
        {
          "text": "What wretched errors hath my heart committed,",
          "ja": "なんと悲惨な過ちを、私の心は犯してしまったことか"
        },
        {
          "text": "Whilst it hath thought itself so blessed never!",
          "ja": "自らが最高の幸福の中にいると信じ込んでいたその時に！"
        },
        {
          "text": "How have mine eyes out of their spheres been fitted,",
          "ja": "我が瞳は熱病の狂気によって見開かれ、"
        },
        {
          "text": "In the distraction of this madding fever!",
          "ja": "理性の座から引きずり降ろされて、激しい混乱に引き裂かれた。"
        },
        {
          "text": "O benefit of ill! now I find true",
          "ja": "ああ、だがこの悪の体験のおかげで、私は知ったのだ"
        },
        {
          "text": "That better is, by evil still made better;",
          "ja": "悪を経験したからこそ、善はいっそう輝かしく蘇るのだと！"
        },
        {
          "text": "And ruin’d love, when it is built anew,",
          "ja": "打ち砕かれた真実の愛は、再び建て直されるとき"
        },
        {
          "text": "Grows fairer than at first, more strong, far greater.",
          "ja": "かつてよりもはるかに美しく、はるかに強く、はるかに偉大に育つのだと！"
        },
        {
          "text": "So I return rebuk’d to my content,",
          "ja": "こうして私は、傷つき疲れ果てて君の元へと帰ってきた"
        },
        {
          "text": "And gain by ill thrice more than I have spent.",
          "ja": "失った悲しみの何倍もの豊かさを、この胸に取り戻しながら。"
        }
      ],
      "audio": null
    },
    {
      "no": 120,
      "title_ja": "かつての君の冷酷さを思えば我が過ちも許されよう",
      "lines": [
        {
          "text": "That you were once unkind befriends me now,",
          "ja": "かつて君が私に冷酷であったあの日の記憶が"
        },
        {
          "text": "And for that sorrow, which I then did feel,",
          "ja": "今の私を救ってくれる"
        },
        {
          "text": "Needs must I under my transgression bow,",
          "ja": "私が犯した過ちの深さに、今私が苦しみ悶えているこの時に。"
        },
        {
          "text": "Unless my nerves were brass or hammer’d steel.",
          "ja": "もし私の心が、神経の通わぬ鋼鉄や真鍮でできていないなら"
        },
        {
          "text": "For if you were by my unkindness shaken,",
          "ja": "私は君に与えた苦痛の重さを"
        },
        {
          "text": "As I by yours, you’ve pass’d a hell of time;",
          "ja": "自らの骨身に染みて感じねばならないはずだ。"
        },
        {
          "text": "And I, a tyrant, have no leisure taken",
          "ja": "なぜなら、かつて君の冷酷さによって私が流したあの涙の苦痛を思えば"
        },
        {
          "text": "To weigh how once I suffer’d in your crime.",
          "ja": "今回私の過ちによって君が流した涙の苦痛もまた、同じ地獄であったはずだから。"
        },
        {
          "text": "O! that our night of woe might have remember’d",
          "ja": "ああ、なぜ私はあの時、君の苦痛の深さを思いやらなかったのだろう！"
        },
        {
          "text": "My deepest sense, how hard true sorrow hits,",
          "ja": "かつて私が味わったあの深い悲哀の重さを思い出して、"
        },
        {
          "text": "And soon to you, as you to me, then tender’d",
          "ja": "君の傷口に、愛の優しい香油をすぐに注いであげなかったのだろう。"
        },
        {
          "text": "The humble salve, which wounded bosoms fits!",
          "ja": "かつて君が犯した罪と、今私が犯した罪とが、互いに痛みを相殺し合う。"
        },
        {
          "text": "But that your trespass now becomes a fee;",
          "ja": "君が私を許してくれたように、今度は君が私を許しておくれ"
        },
        {
          "text": "Mine ransoms yours, and yours must ransom me.",
          "ja": "互いの犯した過ちの痛みが、互いの愛をより深く結び合わせるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 121,
      "title_ja": "悪しくあろうとするより悪しきと噂される方がましだ",
      "lines": [
        {
          "text": "’Tis better to be vile than vile esteem’d,",
          "ja": "実際に悪人であるよりも、悪人だと世に噂されるほうがまだましだ"
        },
        {
          "text": "When not to be receives reproach of being;",
          "ja": "何の罪も犯していないのに、非難の視線にさらされるくらいなら。"
        },
        {
          "text": "And the just pleasure lost, which is so deem’d",
          "ja": "正当な喜びを失い、ただ他人の邪悪な推測によって"
        },
        {
          "text": "Not by our feeling, but by others’ seeing:",
          "ja": "自分自身が悪と決めつけられてしまうくらいなら。"
        },
        {
          "text": "For why should others’ false adulterate eyes",
          "ja": "なぜ他者の不道徳で好色な瞳が"
        },
        {
          "text": "Give salutation to my sportive blood?",
          "ja": "私の熱い血潮の歩みを監視し、指図できるというのか。"
        },
        {
          "text": "Or on my frailties why are frailer spies,",
          "ja": "なぜ私よりもはるかに罪深い悪徳の目撃者たちが"
        },
        {
          "text": "Which in their wills count bad what I think good?",
          "ja": "私が善と信じる行いを、悪だと決めつけることができるのか。"
        },
        {
          "text": "No, I am that I am, and they that level",
          "ja": "いや、私は私自身なのだ。彼らが私の欠点を告発しようとも"
        },
        {
          "text": "At my abuses reckon up their own:",
          "ja": "彼らはただ、自分自身の心の汚れを私の姿に映しているにすぎない。"
        },
        {
          "text": "I may be straight though they themselves be bevel;",
          "ja": "私は真っ直ぐに歩んでいる、彼ら自身が歪んで曲がっているのだ。"
        },
        {
          "text": "By their rank thoughts, my deeds must not be shown;",
          "ja": "彼らの邪悪な思考で、私の純粋な行いを測ってはならない"
        },
        {
          "text": "Unless this general evil they maintain,",
          "ja": "「すべての人間は悪であり、その悪徳の中で生きている」という"
        },
        {
          "text": "All men are bad and in their badness reign.",
          "ja": "あの絶望的な独断を、彼らが信じ込んでいるのでない限りは。"
        }
      ],
      "audio": null
    },
    {
      "no": 122,
      "title_ja": "君の贈りし記録帳は記憶の中に深く刻まれ",
      "lines": [
        {
          "text": "Thy gift, thy tables, are within my brain",
          "ja": "君が私に贈ってくれたあの美しい手帳の記録は"
        },
        {
          "text": "Full character’d with lasting memory,",
          "ja": "私の脳の記憶のページの中に、深く永遠に刻み込まれている。"
        },
        {
          "text": "Which shall above that idle rank remain,",
          "ja": "いかなる歳月の荒廃も、それを消し去ることはできず"
        },
        {
          "text": "Beyond all date; even to eternity:",
          "ja": "私の命ある限り、遠い未来の果てまで残り続けるだろう。"
        },
        {
          "text": "Or, at the least, so long as brain and heart",
          "ja": "少なくとも、私の心と脳がその働きを保ち続ける限り"
        },
        {
          "text": "Have faculty by nature to subsist;",
          "ja": "自然が私に与えた命の火が燃え続ける限りは。"
        },
        {
          "text": "Till each to raz’d oblivion yield his part",
          "ja": "君の記憶は、あの小さな手帳の紙切れなどよりもはるかに深く"
        },
        {
          "text": "Of thee, thy record never can be miss’d.",
          "ja": "私の魂の深奥に、消えることのない文字として刻まれているのだから。"
        },
        {
          "text": "That poor retention could not so much hold,",
          "ja": "だから私は、あの手帳の紙片を他者に譲り渡してしまったのだ"
        },
        {
          "text": "Nor need I tallies thy dear love to score;",
          "ja": "君への愛を記録しておくために、そんな外側の道具など必要ないのだから。"
        },
        {
          "text": "Therefore to give them from me was I bold,",
          "ja": "君の記憶を保つために紙の助けを借りるなどということは"
        },
        {
          "text": "To trust those tables that receive thee more:",
          "ja": "私の物忘れの愚かさを認めるようなものだから。"
        },
        {
          "text": "To keep an adjunct to remember thee",
          "ja": "君を忘れることなど決してない、だから私はあの手帳を手放したのだ"
        },
        {
          "text": "Were to import forgetfulness in me.",
          "ja": "ただ君の愛を、私の魂の部屋の中に永遠に抱きしめておくために。"
        }
      ],
      "audio": null
    },
    {
      "no": 123,
      "title_ja": "時よ、お前の変化を私は誇らしく思わぬ",
      "lines": [
        {
          "text": "No, Time, thou shalt not boast that I do change:",
          "ja": "時よ、お前の移り変わりを、私は恐れも誇りもしない！"
        },
        {
          "text": "Thy pyramids built up with newer might",
          "ja": "お前が新しく築き上げるあの巨大なピラミッドの数々も"
        },
        {
          "text": "To me are nothing novel, nothing strange;",
          "ja": "私にとっては新奇なものなど何ひとつなく、驚くに値しない。"
        },
        {
          "text": "They are but dressings of a former sight.",
          "ja": "それらはただ"
        },
        {
          "text": "Our dates are brief, and therefore we admire",
          "ja": "かつてあった過去の姿の焼き直しにすぎないのだから。"
        },
        {
          "text": "What thou dost foist upon us that is old;",
          "ja": "私たちの短い生涯は、お前が古びた過去を新しく見せかけ"
        },
        {
          "text": "And rather make them born to our desire",
          "ja": "まるで今初めて生まれたかのように偽る手品に騙されているだけだ。"
        },
        {
          "text": "Than think that we before have heard them told.",
          "ja": "私たちは、古びたものを新しい欲望で追い求め"
        },
        {
          "text": "Thy registers and thee I both defy,",
          "ja": "かつて一度語り尽くされたことを、今初めて知ったかのように喜んでいる。"
        },
        {
          "text": "Not wondering at the present nor the past,",
          "ja": "時よ、私はお前と、お前の記録の帳簿をものともしない"
        },
        {
          "text": "For thy records and what we see doth lie,",
          "ja": "現在にも過去にも、私は何の幻想も抱いてはいないのだから。"
        },
        {
          "text": "Made more or less by thy continual haste.",
          "ja": "お前の記録も、お前の記念碑も、すべては嘘偽りに満ちている。"
        },
        {
          "text": "This I do vow and this shall ever be;",
          "ja": "だが私は誓おう、お前のどんな鎌の刃の前にあっても"
        },
        {
          "text": "I will be true despite thy scythe and thee.",
          "ja": "私は永遠に誠実であり続け、君への愛を変えることは決してないと。"
        }
      ],
      "audio": null
    },
    {
      "no": 124,
      "title_ja": "我が愛は時の偶然に翻弄される子ではない",
      "lines": [
        {
          "text": "If my dear love were but the child of state,",
          "ja": "もし私の愛する心が"
        },
        {
          "text": "It might for Fortune’s bastard be unfather’d,",
          "ja": "高貴な身分の富や名誉から生まれたものなら"
        },
        {
          "text": "As subject to Time’s love or to Time’s hate,",
          "ja": "我が愛は、運命の気まぐれに翻弄される私生児となっていただろう。"
        },
        {
          "text": "Weeds among weeds, or flowers with flowers gather’d.",
          "ja": "時の寵愛を受けて栄え、時の怒りを受けて見捨てられ"
        },
        {
          "text": "No, it was builded far from accident;",
          "ja": "雑草のように抜かれ、あるいは気まぐれに育てられていただろう。"
        },
        {
          "text": "It suffers not in smiling pomp, nor falls",
          "ja": "だが私の愛はそうではない。"
        },
        {
          "text": "Under the blow of thralled discontent,",
          "ja": "いかなる偶然の嵐にも揺らぐことなく"
        },
        {
          "text": "Whereto th’ inviting time our fashion calls:",
          "ja": "権力者たちの微笑みにも、冷たい怒りの眼差しにも屈することはない。"
        },
        {
          "text": "It fears not policy, that heretic,",
          "ja": "世の政治の動乱を恐れることもなく"
        },
        {
          "text": "Which works on leases of short-number’d hours,",
          "ja": "移ろいゆく時代の短き栄華に、一喜一憂することもない。"
        },
        {
          "text": "But all alone stands hugely politic,",
          "ja": "私の愛は、自らの内に巨大な要塞を築き上げており"
        },
        {
          "text": "That it nor grows with heat, nor drowns with showers.",
          "ja": "灼熱の太陽にも、凍てつく冬の豪雨にも決して揺らぐことはない。"
        },
        {
          "text": "To this I witness call the fools of time,",
          "ja": "時の愚か者たちを証人として召喚するがよい"
        },
        {
          "text": "Which die for goodness, who have lived for crime.",
          "ja": "罪のために生き、そして罪のために死んでゆく、あの世俗の奴隷たちを！"
        }
      ],
      "audio": null
    },
    {
      "no": 125,
      "title_ja": "華やかな天蓋を掲げる儀式などに意味はなく",
      "lines": [
        {
          "text": "Were’t aught to me I bore the canopy,",
          "ja": "王侯の頭上に華やかな天蓋を掲げて歩くことなど"
        },
        {
          "text": "With my extern the outward honouring,",
          "ja": "私にとって何の意味があろうか"
        },
        {
          "text": "Or laid great bases for eternity,",
          "ja": "外見の儀式的な敬意で、空虚な栄光を称えることなど。"
        },
        {
          "text": "Which proves more short than waste or ruining?",
          "ja": "永遠の長さよりも短い、儚き土台の上に記念碑を築き"
        },
        {
          "text": "Have I not seen dwellers on form and favour",
          "ja": "やがて崩れ去る建物のために"
        },
        {
          "text": "Lose all and more by paying too much rent",
          "ja": "莫大な費用を浪費することなど。"
        },
        {
          "text": "For compound sweet; forgoing simple savour,",
          "ja": "私は見てきた、外見の装飾にすべてを捧げた者たちが"
        },
        {
          "text": "Pitiful thrivers, in their gazing spent?",
          "ja": "その浅ましい代償として、真実の宝を失ってゆくのを。"
        },
        {
          "text": "No; let me be obsequious in thy heart,",
          "ja": "彼らは単純な味覚を失い、贅沢の果てに餓死してゆくのだ。"
        },
        {
          "text": "And take thou my oblation, poor but free,",
          "ja": "いや、私は君の胸の奥深き祭壇に、私自身の魂を捧げよう"
        },
        {
          "text": "Which is not mix’d with seconds, knows no art,",
          "ja": "何の計算も下心も持たぬ、純粋な愛の供物として。"
        },
        {
          "text": "But mutual render, only me for thee.",
          "ja": "君と私の愛の間には、いかなる世俗の取引も存在しない。"
        },
        {
          "text": "Hence, thou suborned informer! a true soul",
          "ja": "去れ、悪意の密告者よ！罪深き魂よ！"
        },
        {
          "text": "When most impeach’d, stands least in thy control.",
          "ja": "どれほど君が私を陥れようと画策しようとも、真実の愛の前には無力なのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 126,
      "title_ja": "美しき少年よ、時を弄ぶ愛らしき君よ",
      "lines": [
        {
          "text": "O thou, my lovely boy, who in thy power",
          "ja": "おお、我が愛らしき少年よ、君はその若さの力によって"
        },
        {
          "text": "Dost hold Time’s fickle glass, his fickle hour;",
          "ja": "気まぐれな時の砂時計と、時の鋭い鎌を意のままに支配している。"
        },
        {
          "text": "Who hast by waning grown, and therein show’st",
          "ja": "他者が衰えゆく中で、君はいっそう若々しく美しく育ち"
        },
        {
          "text": "Thy lovers withering, as thy sweet self grow’st.",
          "ja": "君を愛する者たちが枯れ果ててゆく中で、君は甘美な光を放ち続ける。"
        },
        {
          "text": "If Nature, sovereign mistress over wrack,",
          "ja": "もし万物を滅ぼす自然の女王が、君を破滅から守り続け"
        },
        {
          "text": "As thou goest onwards, still will pluck thee back,",
          "ja": "君が老いへと向かおうとするとき、常に君を引き戻してくれるのだとしたら"
        },
        {
          "text": "She keeps thee to this purpose, that her skill",
          "ja": "自然がそうするのは、自らの至高の技を誇示するためなのだ"
        },
        {
          "text": "May time disgrace and wretched minutes kill.",
          "ja": "時を侮辱し、無慈悲な分秒の歩みを打ち負かすために。"
        },
        {
          "text": "Yet fear her, O thou minion of her pleasure!",
          "ja": "だが少年よ、自然を恐れなさい、彼女の愛玩の寵児よ！"
        },
        {
          "text": "She may detain, but not still keep, her treasure:",
          "ja": "自然は君を長く引き留めることはできても、永遠に守ることはできない。"
        },
        {
          "text": "Her audit (though delayed) answered must be,",
          "ja": "自然もまた、いつか時の帳簿の清算に応じねばならないのだから"
        },
        {
          "text": "And her quietus is to render thee.",
          "ja": "そして自然の最後の支払調書とは、君自身を時に引き渡すことなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 127,
      "title_ja": "黒き髪黒き瞳こそ真の美と讃えられる時代",
      "lines": [
        {
          "text": "In the old age black was not counted fair,",
          "ja": "古の時代には、黒い髪や黒い瞳は美しいとは見なされず"
        },
        {
          "text": "Or if it were, it bore not beauty’s name;",
          "ja": "美の名を名乗ることさえ許されていなかった。"
        },
        {
          "text": "But now is black beauty’s successive heir,",
          "ja": "だが今や黒こそが、美の正当な王位を受け継ぎ"
        },
        {
          "text": "And beauty slander’d with a bastard shame:",
          "ja": "かつての美しさは、私生児の恥辱として見捨てられている。"
        },
        {
          "text": "For since each hand hath put on Nature’s power,",
          "ja": "なぜなら、あらゆる手が自然の技を偽る化粧の技を覚え"
        },
        {
          "text": "Fairing the foul with Art’s false borrowed face,",
          "ja": "偽りの絵の具で醜さを飾り立てるようになったからだ。"
        },
        {
          "text": "Sweet beauty hath no name, no holy bower,",
          "ja": "真実の美は冒涜され、その神聖なる住処を追われ"
        },
        {
          "text": "But is profan’d, if not lives in disgrace.",
          "ja": "美は名を汚され、世俗の偽りの中に埋もれてしまった。"
        },
        {
          "text": "Therefore my mistress’ eyes are raven black,",
          "ja": "だからこそ、我が愛する女性の瞳はカラスのように漆黒であり"
        },
        {
          "text": "Her eyes so suited, and they mourners seem",
          "ja": "その髪もまた黒く、まるで喪服を着ているかのように美しいのだ。"
        },
        {
          "text": "At such who, not born fair, no beauty lack,",
          "ja": "生まれながらの美を持たず、偽りの化粧で自らを飾る"
        },
        {
          "text": "Sland’ring creation with a false esteem:",
          "ja": "あの哀れな世の女たちを、哀れんで喪に服しているかのように。"
        },
        {
          "text": "Yet so they mourn becoming of their woe,",
          "ja": "だが彼女の喪服の黒さこそが、あまりに気品に満ちているがゆえに"
        },
        {
          "text": "That every tongue says beauty should look so.",
          "ja": "今や世界中のあらゆる舌が、「黒こそが最高の美である」と叫んでいるのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 128,
      "title_ja": "君がチェンバロの鍵盤を指で奏でるとき",
      "lines": [
        {
          "text": "How oft when thou, my music, music play’st,",
          "ja": "我が音楽よ"
        },
        {
          "text": "Upon that blessed wood whose motion sounds",
          "ja": "君がその愛らしき指先でチェンバロの木片を奏でるとき"
        },
        {
          "text": "With thy sweet fingers when thou gently sway’st",
          "ja": "調和の取れた弦の響きが、私の耳を歓喜で痺れさせるとき"
        },
        {
          "text": "The wiry concord that mine ear confounds,",
          "ja": "あの幸せな鍵盤の木片たちが、君の手の下で軽やかに跳ね踊り"
        },
        {
          "text": "Do I envy those jacks that nimble leap,",
          "ja": "君の優しい手のひらに口づけを授けているのを見つめるとき"
        },
        {
          "text": "To kiss the tender inward of thy hand,",
          "ja": "私はどれほど、あの物言わぬ木片たちに嫉妬することか！"
        },
        {
          "text": "Whilst my poor lips which should that harvest reap,",
          "ja": "私の唇が受けるべき至高の口づけの恵みを、"
        },
        {
          "text": "At the wood’s boldness by thee blushing stand!",
          "ja": "あの生意気な木片たちが、大胆にも貪り食らっているのだから。"
        },
        {
          "text": "To be so tickled, they would change their state",
          "ja": "君の指の優しい愛撫を受けるためなら、私の唇は喜んで"
        },
        {
          "text": "And situation with those dancing chips,",
          "ja": "あの木片と身分を取り替え、自らの身体を鍵盤に変えてしまいたいほどだ。"
        },
        {
          "text": "O’er whom thy fingers walk with gentle gait,",
          "ja": "君の指先が触れるだけで、あの乾いた木片さえも歓喜に震えているのだから。"
        },
        {
          "text": "Making dead wood more bless’d than living lips.",
          "ja": "だが甘美な気まぐれな君よ、もしあの木片たちに指先を委ねるというのなら"
        },
        {
          "text": "Since saucy jacks so happy are in this,",
          "ja": "彼らには指を与えておくがよい、だが君のその唇だけは"
        },
        {
          "text": "Give them thy fingers, me thy lips to kiss.",
          "ja": "この私の飢えた唇のために、どうか残しておいてほしいのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 129,
      "title_ja": "肉欲の嵐が過ぎ去ったあとの虚しさと後悔",
      "lines": [
        {
          "text": "The expense of spirit in a waste of shame",
          "ja": "恥ずべき浪費の極みの中で、魂の精髄を失うこと"
        },
        {
          "text": "Is lust in action: and till action, lust",
          "ja": "それこそが肉欲の狂乱だ。そしてその欲望が満たされるその瞬間まで"
        },
        {
          "text": "Is perjur’d, murderous, bloody, full of blame,",
          "ja": "肉欲は偽りに満ち、残忍で、血に飢え、裏切りに満ち、恥知らずだ。"
        },
        {
          "text": "Savage, extreme, rude, cruel, not to trust;",
          "ja": "野蛮であり、過激であり、無慈悲であり、信用ならぬ獣だ。"
        },
        {
          "text": "Enjoy’d no sooner but despised straight;",
          "ja": "味わうその瞬間までは、狂おしいほどに渇望されながら"
        },
        {
          "text": "Past reason hunted; and no sooner had,",
          "ja": "ひとたび味わい尽くされたその瞬間から、激しい嫌悪へと一変する。"
        },
        {
          "text": "Past reason hated, as a swallow’d bait,",
          "ja": "理性を失って追い求められ、そして手に入れた瞬間から"
        },
        {
          "text": "On purpose laid to make the taker mad:",
          "ja": "理性を失って憎悪される、仕掛けられた餌のような狂気の罠。"
        },
        {
          "text": "Mad in pursuit and in possession so;",
          "ja": "餌を呑み込んだ哀れな魚を、狂気と死へと追いやる釣り針のように。"
        },
        {
          "text": "Had, having, and in quest, to have extreme;",
          "ja": "追い求める時も、味わう時も、味わい終えた後も、ただ狂気があるのみだ"
        },
        {
          "text": "A bliss in proof, and proved, a very woe;",
          "ja": "極上の歓喜の絶頂を極めながら、直後には底知れぬ惨めさに沈む。"
        },
        {
          "text": "Before, a joy propos’d; behind a dream.",
          "ja": "前もっては至高の喜びと約束されながら、後にはただの悪夢が残る。"
        },
        {
          "text": "All this the world well knows; yet none knows well",
          "ja": "世界中の誰もがこの恐ろしい真理を知り尽くしていながら"
        },
        {
          "text": "To shun the heaven that leads men to this hell.",
          "ja": "この地獄へと続く天国の甘い罠から、逃れられる者は誰もいないのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc193_1907_librivox/spc193_sonnet129_wt.mp3",
        "reader": "Winston Tharp",
        "duration": "1:18"
      }
    },
    {
      "no": 130,
      "title_ja": "我が君の瞳は太陽とはほど遠いけれど",
      "lines": [
        {
          "text": "My mistress’ eyes are nothing like the sun;",
          "ja": "私の愛する人の瞳は、太陽の輝きなどとはまるで似ていない。"
        },
        {
          "text": "Coral is far more red, than her lips red:",
          "ja": "珊瑚の紅に比べれば、彼女の唇はずっと色褪せている。"
        },
        {
          "text": "If snow be white, why then her breasts are dun;",
          "ja": "もし雪が白いというのなら、彼女の肌は茶色く濁っている。"
        },
        {
          "text": "If hairs be wires, black wires grow on her head.",
          "ja": "もし髪の毛が金の針金であるなら、彼女の頭には黒い針金が生えている。"
        },
        {
          "text": "I have seen roses damask’d, red and white,",
          "ja": "私はダマスク薔薇の紅白の咲き乱れる美しい花々を見てきたが"
        },
        {
          "text": "But no such roses see I in her cheeks;",
          "ja": "彼女の頬の上には、そんな薔薇の色など見当たらない。"
        },
        {
          "text": "And in some perfumes is there more delight",
          "ja": "高貴な香水の放つ甘美な香りに比べれば"
        },
        {
          "text": "Than in the breath that from my mistress reeks.",
          "ja": "我が愛する人の息吹は、決して芳しい香りとは言えない。"
        },
        {
          "text": "I love to hear her speak, yet well I know",
          "ja": "私は彼女の語る声を聞くのが好きだ、だが音楽の調べのほうが"
        },
        {
          "text": "That music hath a far more pleasing sound:",
          "ja": "はるかに快い響きを持っていることを私はよく知っている。"
        },
        {
          "text": "I grant I never saw a goddess go;",
          "ja": "私は告白しよう、女神がどのように歩くのかを私は見たことがないが"
        },
        {
          "text": "My mistress, when she walks, treads on the ground:",
          "ja": "我が愛する人が歩くとき、彼女は大地をしっかりと踏みしめて歩くのだと。"
        },
        {
          "text": "And yet by heaven, I think my love as rare,",
          "ja": "だが天にかけて誓おう、我が愛する人はどんな女よりも尊く美しい"
        },
        {
          "text": "As any she belied with false compare.",
          "ja": "大げさな嘘の比喩で飾り立てられた、どんな女たちよりもずっと。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/sonnet_130_librivox/sonnet130_shakespeare_apc.mp3",
        "reader": "Alex Foster",
        "duration": "1:31"
      }
    },
    {
      "no": 131,
      "title_ja": "君は黒くとも我が心には最も眩しく美しい",
      "lines": [
        {
          "text": "Thou art as tyrannous, so as thou art,",
          "ja": "君はティラノス（暴君）のように残酷だ、まさに君そのものとして"
        },
        {
          "text": "As those whose beauties proudly make them cruel;",
          "ja": "自らの美しさを鼻にかけ、誇らしげに振る舞うあの傲慢な美女たちのように。"
        },
        {
          "text": "For well thou know’st to my dear doting heart",
          "ja": "君はよく知っているのだ、私の愛する心にとって"
        },
        {
          "text": "Thou art the fairest and most precious jewel.",
          "ja": "君こそが最も貴重で、最も輝かしい宝石であるということを。"
        },
        {
          "text": "Yet, in good faith, some say that thee behold,",
          "ja": "世の人々は言う、「君の顔には、愛の溜息を誘うような"
        },
        {
          "text": "Thy face hath not the power to make love groan;",
          "ja": "輝かしい美しさなど何ひとつない」と。"
        },
        {
          "text": "To say they err I dare not be so bold,",
          "ja": "私は彼らに面と向かって反論する勇気を持たないとしても"
        },
        {
          "text": "Although I swear it to myself alone.",
          "ja": "ただ一人、心の中で誓うのだ、彼らの判断は誤っていると。"
        },
        {
          "text": "And to be sure that is not false I swear,",
          "ja": "千の溜息が、次から次へと私の胸からあふれ出し"
        },
        {
          "text": "A thousand groans, but thinking on thy face,",
          "ja": "君の黒い顔こそが、この世で最も白く輝いていると証言するのだから。"
        },
        {
          "text": "One on another’s neck, do witness bear",
          "ja": "君の黒い肌の中に、何の欠点も見出すことはできない"
        },
        {
          "text": "Thy black is fairest in my judgement’s place.",
          "ja": "ただ、君の冷酷な行いだけが黒いのだと、私の心は嘆くのだ。"
        },
        {
          "text": "In nothing art thou black save in thy deeds,",
          "ja": "君の顔が黒いから人々が中傷するのではない"
        },
        {
          "text": "And thence this slander, as I think, proceeds.",
          "ja": "君の黒い行いこそが、中傷の噂を呼び寄せているのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 132,
      "title_ja": "我が痛みを哀れむ君の黒き瞳が好きだ",
      "lines": [
        {
          "text": "Thine eyes I love, and they, as pitying me,",
          "ja": "私は君の瞳を愛している、なぜなら君の瞳は私の苦痛を知り"
        },
        {
          "text": "Knowing thy heart torment me with disdain,",
          "ja": "君の心が私を冷たく蔑む一方で"
        },
        {
          "text": "Have put on black and loving mourners be,",
          "ja": "君の瞳は喪服を着て私を哀れんでくれるからだ。"
        },
        {
          "text": "Looking with pretty ruth upon my pain.",
          "ja": "漆黒の喪服を身に纏い、私の悲しみを優しく見つめながら"
        },
        {
          "text": "And truly not the morning sun of heaven",
          "ja": "我が胸の痛みに寄り添ってくれる、あの黒い瞳の美しさよ。"
        },
        {
          "text": "Better becomes the grey cheeks of the east,",
          "ja": "朝の東の空に輝く、あの栄光ある太陽の光であっても"
        },
        {
          "text": "Nor that full star that ushers in the even,",
          "ja": "夕暮れの西の空に輝く、あの清らかな宵の明星であっても"
        },
        {
          "text": "Doth half that glory to the sober west,",
          "ja": "君の顔に輝くあの二つの黒い瞳ほどには"
        },
        {
          "text": "As those two mourning eyes become thy face:",
          "ja": "美しく天を飾ることはできない！"
        },
        {
          "text": "O! let it then as well beseem thy heart",
          "ja": "ああ"
        },
        {
          "text": "To mourn for me since mourning doth thee grace,",
          "ja": "願わくは、その瞳のように、君の心もまた私を哀れんで喪服を着てくれますように。"
        },
        {
          "text": "And suit thy pity like in every part.",
          "ja": "君の心もまた、私への慈悲の思いで満たされますように。"
        },
        {
          "text": "Then will I swear beauty herself is black,",
          "ja": "そうすれば私は誇らしく歌い上げよう、「美とは黒の中にこそあり"
        },
        {
          "text": "And all they foul that thy complexion lack.",
          "ja": "君の顔立ちに似ていないあらゆる顔こそが、醜い見せかけにすぎない」と。"
        }
      ],
      "audio": null
    },
    {
      "no": 133,
      "title_ja": "我が友をも奪いし無慈悲な君の心よ",
      "lines": [
        {
          "text": "Beshrew that heart that makes my heart to groan",
          "ja": "呪われよ、君の冷酷な心よ！その無慈悲な一撃によって"
        },
        {
          "text": "For that deep wound it gives my friend and me!",
          "ja": "私の心だけでなく、我が友の心までもが深い傷を負わされたのだから！"
        },
        {
          "text": "Is’t not enough to torture me alone,",
          "ja": "私ひとりを苦しめるだけでは飽き足らず、君は残酷にも"
        },
        {
          "text": "But slave to slavery my sweet’st friend must be?",
          "ja": "私の最も愛する友をも、君の冷酷な奴隷として捕らえてしまった。"
        },
        {
          "text": "Me from myself thy cruel eye hath taken,",
          "ja": "君の残酷な瞳は私を奪い去り、そして我が友をも奪い去り"
        },
        {
          "text": "And my next self thou harder hast engross’d:",
          "ja": "私自身と友の二重の存在を、完全に奪い取ってしまったのだ。"
        },
        {
          "text": "Of him, myself, and thee I am forsaken;",
          "ja": "私自身を失い、友を失い、そして君をも失い"
        },
        {
          "text": "A torment thrice three-fold thus to be cross’d:",
          "ja": "三重の苦痛の拷問台の上に、私は張り付けられている。"
        },
        {
          "text": "Prison my heart in thy steel bosom’s ward,",
          "ja": "私の胸を君の牢獄とし、私を君の鉄格子の奥に閉じ込めるがよい"
        },
        {
          "text": "But then my friend’s heart let my poor heart bail;",
          "ja": "だが頼むから、我が友の哀れな心を、私の胸の牢獄に匿わせておくれ。"
        },
        {
          "text": "Whoe’er keeps me, let my heart be his guard;",
          "ja": "私が友の身代わりとなって、君のどんな厳しい監視にも耐えよう"
        },
        {
          "text": "Thou canst not then use rigour in my jail:",
          "ja": "そうすれば君は、友を自らの牢獄に閉じ込めることはできないはずだ。"
        },
        {
          "text": "And yet thou wilt; for I, being pent in thee,",
          "ja": "だがそれも無駄な願いか。君の虜となった私自身が君のものなのだから"
        },
        {
          "text": "Perforce am thine, and all that is in me.",
          "ja": "そして私の内にあるすべてのもの（友）もまた、君の意のままなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 134,
      "title_ja": "私は君に囚われ我が友も君の虜となった",
      "lines": [
        {
          "text": "So, now I have confess’d that he is thine,",
          "ja": "認めよう"
        },
        {
          "text": "And I my self am mortgag’d to thy will,",
          "ja": "彼は今や君のものであり、私は君の担保として囚われていると"
        },
        {
          "text": "Myself I’ll forfeit, so that other mine",
          "ja": "私自身のすべてが"
        },
        {
          "text": "Thou wilt restore to be my comfort still:",
          "ja": "君への愛の借金のために差し押さえられていると。"
        },
        {
          "text": "But thou wilt not, nor he will not be free,",
          "ja": "私は我が身を差し出し、友を解放しようと願ったのだ"
        },
        {
          "text": "For thou art covetous, and he is kind;",
          "ja": "彼が再び、自らの自由を取り戻せるようにと。"
        },
        {
          "text": "He learn’d but surety-like to write for me,",
          "ja": "だが君はそれを許さず、彼もまた自由になることを望まない"
        },
        {
          "text": "Under that bond that him as fast doth bind.",
          "ja": "君は強欲であり、彼は優しく親切すぎるのだから。"
        },
        {
          "text": "The statute of thy beauty thou wilt take,",
          "ja": "彼は私の借金の連帯保証人として名乗りを上げ"
        },
        {
          "text": "Thou usurer, that putt’st forth all to use,",
          "ja": "その厳格な契約の罠に、自らの足で飛び込んでしまったのだ。"
        },
        {
          "text": "And sue a friend came debtor for my sake;",
          "ja": "君の美しさという無慈悲な高利貸しは、持てる権利を余すところなく行使し"
        },
        {
          "text": "So him I lose through my unkind abuse.",
          "ja": "私のために助け舟を出した哀れな友までも、負債者として捕らえてしまった。"
        },
        {
          "text": "Him have I lost; thou hast both him and me:",
          "ja": "こうして私は友を失い、君は彼と私の両方を手に入れ"
        },
        {
          "text": "He pays the whole, and yet am I not free.",
          "ja": "彼は全額を支払ったというのに、私は少しも借金から解放されないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 135,
      "title_ja": "君の意のまま（Will）にならぬ愛があるだろうか",
      "lines": [
        {
          "text": "Whoever hath her wish, thou hast thy ‘Will,’",
          "ja": "君の望み（Will）が叶うなら、君にはすでに君自身の意志（Will）があり"
        },
        {
          "text": "And ‘Will’ to boot, and ‘Will’ in over-plus;",
          "ja": "その上、君にはこの私というウィル（Will）があり、さらに余るほどの富がある。"
        },
        {
          "text": "More than enough am I that vex’d thee still,",
          "ja": "私は君の欲望を満たすために、自らを惜しみなく差し出しているというのに"
        },
        {
          "text": "To thy sweet will making addition thus.",
          "ja": "君の巨大な欲望（Will）は、まだ満たされずに飢え渇いている。"
        },
        {
          "text": "Wilt thou, whose will is large and spacious,",
          "ja": "君の意志はあまりに広大で寛大であるというのに"
        },
        {
          "text": "Not once vouchsafe to hide my will in thine?",
          "ja": "なぜこの哀れな私の意志（Will）だけを、君の愛の中に受け入れてくれないのか。"
        },
        {
          "text": "Shall will in others seem right gracious,",
          "ja": "他のあらゆる人々の願いを優しく受け入れる君が"
        },
        {
          "text": "And in my will no fair acceptance shine?",
          "ja": "私の真実の愛の願いだけを、冷たく拒絶することが許されようか。"
        },
        {
          "text": "The sea, all water, yet receives rain still,",
          "ja": "広大なる大海原は、あらゆる雨の滴を受け入れながらも"
        },
        {
          "text": "And in abundance addeth to his store;",
          "ja": "その巨大な胃袋に、さらに多くの水を注ぎ込ませるではないか。"
        },
        {
          "text": "So thou, being rich in ‘Will,’ add to thy ‘Will’",
          "ja": "君もまた欲望（Will）に満ちあふれているのだから"
        },
        {
          "text": "One will of mine, to make thy large will more.",
          "ja": "その大いなる愛の中に、我が名ウィル（Will）の愛をも加えておくれ。"
        },
        {
          "text": "Let no unkind ‘No’ fair beseechers kill;",
          "ja": "他の愛を求める者を拒まない君であるならば"
        },
        {
          "text": "Think all but one, and me in that one ‘Will.’",
          "ja": "すべての意志（Will）をひとつに溶け合わせ、私を受け入れておくれ。"
        }
      ],
      "audio": null
    },
    {
      "no": 136,
      "title_ja": "大いなる愛の中に我が名ウィルを加えておくれ",
      "lines": [
        {
          "text": "If thy soul check thee that I come so near,",
          "ja": "もし君の魂が、私の近づくのを咎めようとするなら"
        },
        {
          "text": "Swear to thy blind soul that I was thy ‘Will’,",
          "ja": "君の盲目の魂に優しく囁いてやるがよい"
        },
        {
          "text": "And will, thy soul knows, is admitted there;",
          "ja": "「彼は私の意志（Will）なのだ」と。"
        },
        {
          "text": "Thus far for love, my love-suit, sweet, fulfil.",
          "ja": "そうすれば愛の魂は許してくれるだろう、我が愛の訴えを。"
        },
        {
          "text": "‘Will’, will fulfil the treasure of thy love,",
          "ja": "君の甘美な欲望の宝庫を満たすために"
        },
        {
          "text": "Ay, fill it full with wills, and my will one.",
          "ja": "私の愛を役立たせておくれ。"
        },
        {
          "text": "In things of great receipt with ease we prove",
          "ja": "大いなる宝庫の中にあっては、小さな品など数えられもせず"
        },
        {
          "text": "Among a number one is reckon’d none:",
          "ja": "ただ全体の一部として、ひとつに溶け合ってしまうものだ。"
        },
        {
          "text": "Then in the number let me pass untold,",
          "ja": "だから君の無数の愛人たちの中に、私の存在をも数えておくれ"
        },
        {
          "text": "Though in thy store’s account I one must be;",
          "ja": "数としては数えられぬ、ただの無価値な存在としてであっても。"
        },
        {
          "text": "For nothing hold me, so it please thee hold",
          "ja": "私を「無」として数えておくれ、ただ君がその「無」を愛してくれるならば。"
        },
        {
          "text": "That nothing me, a something sweet to thee:",
          "ja": "君の持てる豊かな宝の中に、この私の命をも加えておくれ。"
        },
        {
          "text": "Make but my name thy love, and love that still,",
          "ja": "ただ私の名前（ウィル）を愛しておくれ、そうすれば君は私を愛することになる"
        },
        {
          "text": "And then thou lov’st me for my name is ‘Will.’",
          "ja": "なぜなら、私の名は「ウィル（意志・欲望）」であり、君を愛し続けることこそが我が命なのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 137,
      "title_ja": "盲目の愛よ、なぜ我が目を欺くのか",
      "lines": [
        {
          "text": "Thou blind fool, Love, what dost thou to mine eyes,",
          "ja": "愚かなる盲目の愛よ、お前は私の瞳に一体何をしたのか"
        },
        {
          "text": "That they behold, and see not what they see?",
          "ja": "見つめながら"
        },
        {
          "text": "They know what beauty is, see where it lies,",
          "ja": "物事のありのままの真実を見失わせてしまうとは！"
        },
        {
          "text": "Yet what the best is take the worst to be.",
          "ja": "美しさが何であるかを知り、最高の美がどこにあるかを知りながら"
        },
        {
          "text": "If eyes, corrupt by over-partial looks,",
          "ja": "なぜ最も醜く歪んだものを、至高の美として見つめさせてしまうのか。"
        },
        {
          "text": "Be anchor’d in the bay where all men ride,",
          "ja": "もし私の瞳が、万人の停泊地であるあの女の魅力に毒され"
        },
        {
          "text": "Why of eyes’ falsehood hast thou forged hooks,",
          "ja": "誰にでも開かれた共通の港を、私だけの秘密の入江と錯覚しているのだとしたら"
        },
        {
          "text": "Whereto the judgement of my heart is tied?",
          "ja": "なぜ愛の神よ、お前は私の瞳の前に偽りの眼鏡を掛けさせ"
        },
        {
          "text": "Why should my heart think that a several plot,",
          "ja": "我が心を、公の共有地へと縛りつけてしまったのか。"
        },
        {
          "text": "Which my heart knows the wide world’s common place?",
          "ja": "なぜ私の心は、世界中の男たちが共有する場所を"
        },
        {
          "text": "Or mine eyes, seeing this, say this is not,",
          "ja": "自分ひとりだけの私有地であると信じ込んでしまったのか。"
        },
        {
          "text": "To put fair truth upon so foul a face?",
          "ja": "瞳も心も共に騙され、真実の判断をすっかり狂わされてしまったのだ。"
        },
        {
          "text": "In things right true my heart and eyes have err’d,",
          "ja": "私の瞳も心も、ありのままの真実を正しく見つめることを拒み"
        },
        {
          "text": "And to this false plague are they now transferr’d.",
          "ja": "明らかな嘘を、美しい真実として抱きしめてしまっているのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 138,
      "title_ja": "君の嘘を真実と知りながら信じる愛",
      "lines": [
        {
          "text": "When my love swears that she is made of truth,",
          "ja": "我が愛する人が「私は真実の女です」と誓うとき、私は彼女を信じる"
        },
        {
          "text": "I do believe her though I know she lies,",
          "ja": "彼女が嘘をついていることを、私が百も承知している時であっても。"
        },
        {
          "text": "That she might think me some untutor’d youth,",
          "ja": "世の偽りを知らぬ無垢な若者として、彼女に思われたいと願うあまりに"
        },
        {
          "text": "Unlearned in the world’s false subtleties.",
          "ja": "世慣れぬ純朴な男のふりをして、彼女の言葉に頷いてみせるのだ。"
        },
        {
          "text": "Thus vainly thinking that she thinks me young,",
          "ja": "彼女が私のことを若い男だと思い込んでいると、空しく自惚れながら"
        },
        {
          "text": "Although she knows my days are past the best,",
          "ja": "私の青春の盛りなどとうの昔に過ぎ去っていることを、彼女がよく知っていると知りながら。"
        },
        {
          "text": "Simply I credit her false-speaking tongue:",
          "ja": "こうして彼女の偽りの言葉を、私もまた偽りの笑顔で受け入れ"
        },
        {
          "text": "On both sides thus is simple truth suppressed:",
          "ja": "互いに真実を隠し合いながら、嘘の上に愛を築き上げているのだ。"
        },
        {
          "text": "But wherefore says she not she is unjust?",
          "ja": "だがなぜ彼女は、自らが不誠実な嘘つきであることを白状しないのか？"
        },
        {
          "text": "And wherefore say not I that I am old?",
          "ja": "そしてなぜ私は、自分がすっかり年老いていることを告白しないのか？"
        },
        {
          "text": "O! love’s best habit is in seeming trust,",
          "ja": "ああ、愛の神にとって、最も甘美な装いとは「信頼の見せかけ」であり"
        },
        {
          "text": "And age in love, loves not to have years told:",
          "ja": "老いた愛人にとって、年齢を数え上げられることほど辛いことはないからだ。"
        },
        {
          "text": "Therefore I lie with her, and she with me,",
          "ja": "だから私たちは、互いに嘘をつき合い、嘘の中で愛を交わし合う"
        },
        {
          "text": "And in our faults by lies we flatter’d be.",
          "ja": "互いの欠点を甘美な嘘で覆い隠しながら、ベッドの上で眠りにつくのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 139,
      "title_ja": "別の男に目を向けるなら正面から私を殺しておくれ",
      "lines": [
        {
          "text": "O! call not me to justify the wrong",
          "ja": "ああ"
        },
        {
          "text": "That thy unkindness lays upon my heart;",
          "ja": "私に命じないでおくれ"
        },
        {
          "text": "Wound me not with thine eye, but with thy tongue:",
          "ja": "君の残酷な不正を正当化せよなどとは！"
        },
        {
          "text": "Use power with power, and slay me not by art,",
          "ja": "君の瞳の力で私を殺すなら、正面から堂々と私を殺すがよい"
        },
        {
          "text": "Tell me thou lov’st elsewhere; but in my sight,",
          "ja": "陰険な横目で他者を見つめ、私を間接的に刺し殺そうとするな。"
        },
        {
          "text": "Dear heart, forbear to glance thine eye aside:",
          "ja": "私を愛していないのなら、言葉で「愛していない」と告げておくれ"
        },
        {
          "text": "What need’st thou wound with cunning, when thy might",
          "ja": "だが私の目の前で、他の男たちにあの魅力的な視線を投げかけるな。"
        },
        {
          "text": "Is more than my o’erpress’d defence can bide?",
          "ja": "なぜそんな策略を使うのか、君の美しさはあまりに強大であり"
        },
        {
          "text": "Let me excuse thee: ah! my love well knows",
          "ja": "その視線ひとつで、私を瞬時に息絶えさせることができるというのに。"
        },
        {
          "text": "Her pretty looks have been mine enemies;",
          "ja": "君の瞳をそらし、別の場所へと光を投げかける君を、私はこう庇おうとする、"
        },
        {
          "text": "And therefore from my face she turns my foes,",
          "ja": "「君は知っているのだ、自らの瞳の光があまりに激しく私を焼き尽くすことを"
        },
        {
          "text": "That they elsewhere might dart their injuries:",
          "ja": "だから慈悲深くも視線をそらし、他の男たちへと光を分散させているのだ」と。"
        },
        {
          "text": "Yet do not so; but since I am near slain,",
          "ja": "ああ、だがそうしないでほしい！君の殺傷の視線で私を直視しておくれ"
        },
        {
          "text": "Kill me outright with looks, and rid my pain.",
          "ja": "君の瞳に射抜かれて死ぬことこそが、私の苦痛を終わらせる唯一の救いなのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 140,
      "title_ja": "私を愛さずとも愛していると言っておくれ",
      "lines": [
        {
          "text": "Be wise as thou art cruel; do not press",
          "ja": "残酷であるなら、賢明であっておくれ。私の忍耐を"
        },
        {
          "text": "My tongue-tied patience with too much disdain;",
          "ja": "あまりに冷酷な沈黙によって試しすぎてはならない。"
        },
        {
          "text": "Lest sorrow lend me words, and words express",
          "ja": "絶望に狂った私の舌が、君の悪名の数々を"
        },
        {
          "text": "The manner of my pity-wanting pain.",
          "ja": "世の人々の前に暴露してしまうことのないように。"
        },
        {
          "text": "If I might teach thee wit, better it were,",
          "ja": "もし君が知恵を持っているなら、私にこう教えてくれるはずだ"
        },
        {
          "text": "Though not to love, yet love to tell me so,",
          "ja": "「私は君を愛していないけれど、愛しているふりをしてあげよう」と。"
        },
        {
          "text": "As testy sick men, when their deaths be near,",
          "ja": "瀕死の病人を前にした賢明な医者が"
        },
        {
          "text": "No news but health from their physicians know.",
          "ja": "死が目前に迫っていながら、「治りますよ」と優しく嘘をつくように。"
        },
        {
          "text": "For, if I should despair, I should grow mad,",
          "ja": "もし私が絶望のあまり正気を失って狂人となってしまったなら"
        },
        {
          "text": "And in my madness might speak ill of thee;",
          "ja": "私は君の不名誉の数々を、世界中に大声で言いふらしてしまうかもしれない。"
        },
        {
          "text": "Now this ill-wresting world is grown so bad,",
          "ja": "そしてこの狂った世の中は、あまりに邪悪に満ちているがゆえに"
        },
        {
          "text": "Mad slanderers by mad ears believed be.",
          "ja": "狂人の告発を喜んで信じ、君の名声を地に堕としてしまうだろう。"
        },
        {
          "text": "That I may not be so, nor thou belied,",
          "ja": "だから君よ、たとえ心が別の男に向いていようとも"
        },
        {
          "text": "Bear thine eyes straight, though thy proud heart go wide.",
          "ja": "私の前ではただ、「愛している」と優しい嘘の微笑みを浮かべておくれ。"
        }
      ],
      "audio": null
    },
    {
      "no": 141,
      "title_ja": "目や耳は君を拒んでも心は君の奴隷",
      "lines": [
        {
          "text": "In faith I do not love thee with mine eyes,",
          "ja": "私の五感の瞳は、決して君を愛してはいない"
        },
        {
          "text": "For they in thee a thousand errors note;",
          "ja": "なぜなら私の瞳は"
        },
        {
          "text": "But ’tis my heart that loves what they despise,",
          "ja": "君の中に千の欠点をはっきりと見出しているのだから。"
        },
        {
          "text": "Who, in despite of view, is pleased to dote.",
          "ja": "だが私の心は、瞳が見下すその欠点さえも熱狂的に愛し"
        },
        {
          "text": "Nor are mine ears with thy tongue’s tune delighted;",
          "ja": "瞳の正しい判断に逆らって、君への情熱に溺れ続けている。"
        },
        {
          "text": "Nor tender feeling, to base touches prone,",
          "ja": "私の耳は、君の甲高い声の響きに喜びを感じることはなく"
        },
        {
          "text": "Nor taste, nor smell, desire to be invited",
          "ja": "私の指先は、君の冷たい肌の感触に快楽を覚えることもない。"
        },
        {
          "text": "To any sensual feast with thee alone:",
          "ja": "私の味覚も嗅覚も、君の肉体から何の甘美な祝宴をも引き出すことはできない。"
        },
        {
          "text": "But my five wits nor my five senses can",
          "ja": "私の五感の知性のすべては、君への愛を拒絶しているというのに"
        },
        {
          "text": "Dissuade one foolish heart from serving thee,",
          "ja": "私の心という唯一の狂った君主だけが、五感の反乱を抑えつけ"
        },
        {
          "text": "Who leaves unsway’d the likeness of a man,",
          "ja": "自ら進んで君の奴隷となり、君の足元にひれ伏しているのだ。"
        },
        {
          "text": "Thy proud heart’s slave and vassal wretch to be:",
          "ja": "私の理性は無力化され、ただ君の冷酷な支配に従うだけだ。"
        },
        {
          "text": "Only my plague thus far I count my gain,",
          "ja": "だがこの地獄の苦痛の中に、私はたった一つの報酬を見出している"
        },
        {
          "text": "That she that makes me sin awards me pain.",
          "ja": "君という罪が私を傷つけることによって、私の魂の罪もまた贖われているのだから。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc178_1804_librivox/spc178_sonnet141_ps.mp3",
        "reader": "Phil Schempf",
        "duration": "1:08"
      }
    },
    {
      "no": 142,
      "title_ja": "罪深き愛を互いに咎める資格はない",
      "lines": [
        {
          "text": "Love is my sin, and thy dear virtue hate,",
          "ja": "愛こそが私の罪であり、そして君の罪深き憎しみこそが"
        },
        {
          "text": "Hate of my sin, grounded on sinful loving:",
          "ja": "我が罪深い愛に対する、君の冷酷な報いなのだ。"
        },
        {
          "text": "O! but with mine compare thou thine own state,",
          "ja": "ああ、だが君自身の行いと、私の行いとを見比べてみるがよい"
        },
        {
          "text": "And thou shalt find it merits not reproving;",
          "ja": "そうすれば君は、私の罪を責める言葉を失ってしまうはずだ。"
        },
        {
          "text": "Or, if it do, not from those lips of thine,",
          "ja": "もし責めるとしても、君のその美しい唇で責めてはならない"
        },
        {
          "text": "That have profan’d their scarlet ornaments",
          "ja": "君の唇もまた、数々の不実な誓いを破ることでその美しさを汚し"
        },
        {
          "text": "And seal’d false bonds of love as oft as mine,",
          "ja": "結婚の神聖なるベッドの契約を、幾度となく裏切ってきたのだから。"
        },
        {
          "text": "Robb’d others’ beds’ revenues of their rents.",
          "ja": "君が他の男たちを奪い去ったように、私もまた君を奪おうとしているだけだ。"
        },
        {
          "text": "Be it lawful I love thee, as thou lov’st those",
          "ja": "私が君を愛する権利を、君が認めてくれることを私は願う"
        },
        {
          "text": "Whom thine eyes woo as mine importune thee:",
          "ja": "君が他の男たちに愛を求めて、視線を投げかけているのと同じように。"
        },
        {
          "text": "Root pity in thy heart, that, when it grows,",
          "ja": "君の胸の中に、憐れみの心を育てなさい。そうすれば君自身もまた"
        },
        {
          "text": "Thy pity may deserve to pitied be.",
          "ja": "いつの日か誰かから、憐れみを受け取ることができるかもしれないのだから。"
        },
        {
          "text": "If thou dost seek to have what thou dost hide,",
          "ja": "もし君が、憐れみを求める者を冷たく拒み続けるならば"
        },
        {
          "text": "By self-example mayst thou be denied!",
          "ja": "君自身が憐れみを乞うその日に、誰も君を憐れんではくれないだろう。"
        }
      ],
      "audio": null
    },
    {
      "no": 143,
      "title_ja": "逃げる雌鶏を追う農婦のように君を追う",
      "lines": [
        {
          "text": "Lo, as a careful housewife runs to catch",
          "ja": "見よ、注意深い農婦が、庭の片隅へと走り去る雌鶏を見つけて"
        },
        {
          "text": "One of her feather’d creatures broke away,",
          "ja": "慌てて腕の中の赤ん坊を地面に下ろし、逃げる鳥を追いかけてゆく姿を。"
        },
        {
          "text": "Sets down her babe, and makes all swift dispatch",
          "ja": "彼女は逃げ去る鳥を捕まえようと必死に駆け回り"
        },
        {
          "text": "In pursuit of the thing she would have stay;",
          "ja": "足元で泣き叫ぶ我が子の悲哀など、すっかり忘れて鳥を追い続ける。"
        },
        {
          "text": "Whilst her neglected child holds her in chase,",
          "ja": "見捨てられた哀れな赤子は、埃の中に座り込んで泣き叫び"
        },
        {
          "text": "Cries to catch her whose busy care is bent",
          "ja": "ただ母親の背中を見つめながら、その帰りを待ち侘びている。"
        },
        {
          "text": "To follow that which flies before her face,",
          "ja": "君もまた同じだ。"
        },
        {
          "text": "Not prizing her poor infant’s discontent;",
          "ja": "君は逃げ去る男（友）の後を必死に追いかけ"
        },
        {
          "text": "So runn’st thou after that which flies from thee,",
          "ja": "君の足元で泣き叫ぶこの私（赤子）を、埃の中に置き去りにしている。"
        },
        {
          "text": "Whilst I thy babe chase thee afar behind;",
          "ja": "だが、もし君が望む獲物を無事に捕まえることができたなら"
        },
        {
          "text": "But if thou catch thy hope, turn back to me,",
          "ja": "どうか愛する母のように、泣き叫ぶ私の元へと戻ってきておくれ。"
        },
        {
          "text": "And play the mother’s part, kiss me, be kind;",
          "ja": "私を君の胸に抱き上げ、優しい口づけを与えておくれ。"
        },
        {
          "text": "So will I pray that thou mayst have thy ‘Will,’",
          "ja": "私は祈ろう、君が追い求める男を君が手に入れることができるようにと"
        },
        {
          "text": "If thou turn back and my loud crying still.",
          "ja": "ただその後に、君が私の元へと帰ってきて、私の涙を拭ってくれるならば。"
        }
      ],
      "audio": null
    },
    {
      "no": 144,
      "title_ja": "二つの愛が私を導き、一つは天使、一つは悪魔",
      "lines": [
        {
          "text": "Two loves I have of comfort and despair,",
          "ja": "二つの愛が、私の魂を導く精霊として寄り添っている"
        },
        {
          "text": "Which like two spirits do suggest me still:",
          "ja": "二つの霊が、私の行く手を絶えず誘い続けているのだ。"
        },
        {
          "text": "The better angel is a man right fair,",
          "ja": "より良き天使は、至高の美しさを持つ男の姿をしており"
        },
        {
          "text": "The worser spirit a woman colour’d ill.",
          "ja": "悪しき悪魔は、黒い肌と黒い瞳を持つ女の姿をしている。"
        },
        {
          "text": "To win me soon to hell, my female evil,",
          "ja": "私を早く地獄へと引きずり落とそうと、あの邪悪な女は"
        },
        {
          "text": "Tempteth my better angel from my side,",
          "ja": "私のより良き天使（美しき友）を、私のそばから誘惑して奪い去り"
        },
        {
          "text": "And would corrupt my saint to be a devil,",
          "ja": "純白の天使を、自らの悪魔の巣窟へと引きずり込もうとしている。"
        },
        {
          "text": "Wooing his purity with her foul pride.",
          "ja": "私の天使が、すでに悪魔の毒に染まってしまったのかどうか"
        },
        {
          "text": "And whether that my angel be turn’d fiend,",
          "ja": "私には正確に知ることはできない、ただ疑いにおののくことしか。"
        },
        {
          "text": "Suspect I may, yet not directly tell;",
          "ja": "だが二人は今や互いに親しく交わり、互いに愛し合っているのだから"
        },
        {
          "text": "But being both from me, both to each friend,",
          "ja": "私の天使は、すでにあの女の地獄の炎の中に囚われているに違いない。"
        },
        {
          "text": "I guess one angel in another’s hell:",
          "ja": "だが私は、確かな真実を知ることは決してできないだろう"
        },
        {
          "text": "Yet this shall I ne’er know, but live in doubt,",
          "ja": "私の悪しき悪魔（女）が、私の善き天使（友）を焼き尽くし"
        },
        {
          "text": "Till my bad angel fire my good one out.",
          "ja": "彼を病気の炎の中に投げ出して、追い出すその瞬間までは。"
        }
      ],
      "audio": null
    },
    {
      "no": 145,
      "title_ja": "「憎みます」の後に「あなたではない」と足した唇",
      "lines": [
        {
          "text": "Those lips that Love’s own hand did make,",
          "ja": "愛の手によって創られた彼女の美しい唇は"
        },
        {
          "text": "Breathed forth the sound that said ‘I hate’,",
          "ja": "かつて私に向かって"
        },
        {
          "text": "To me that languish’d for her sake:",
          "ja": "「私は憎みます」という残酷な言葉を吐き出した。"
        },
        {
          "text": "But when she saw my woeful state,",
          "ja": "彼女のために愛に飢え"
        },
        {
          "text": "Straight in her heart did mercy come,",
          "ja": "息絶えそうになっていたこの私に対して。"
        },
        {
          "text": "Chiding that tongue that ever sweet",
          "ja": "だが彼女は、私の哀れな姿を見つめ、私の青ざめた顔に浮かぶ絶望を見て"
        },
        {
          "text": "Was us’d in giving gentle doom;",
          "ja": "その甘美な心の中に、優しい憐れみの情を宿してくれたのだ。"
        },
        {
          "text": "And taught it thus anew to greet;",
          "ja": "彼女は自らの舌を優しく戒め、かつて死を宣告したあの唇で"
        },
        {
          "text": "‘I hate’ she alter’d with an end,",
          "ja": "言葉の終わりに、新しい救いの言葉を付け足してくれた。"
        },
        {
          "text": "That followed it as gentle day,",
          "ja": "黒い夜が空を覆い尽くそうとするとき、慈悲深き朝の光が空を裂いて"
        },
        {
          "text": "Doth follow night, who like a fiend",
          "ja": "夜の闇を地獄へと追い払ってくれるように。"
        },
        {
          "text": "From heaven to hell is flown away.",
          "ja": "彼女は「憎みます」と言ったその直後に、甘やかな救いの言葉を付け足し"
        },
        {
          "text": "‘I hate’, from hate away she threw,",
          "ja": "私の命を死の淵から救い出してくれたのだ、"
        },
        {
          "text": "And sav’d my life, saying ‘not you’.",
          "ja": "「憎みます――あなたを、ではなく」と微笑みながら。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc227_2205_librivox/spc227_sonnet145_wt.mp3",
        "reader": "Winston Tharp",
        "duration": "1:10"
      }
    },
    {
      "no": 146,
      "title_ja": "哀れなる魂よ、朽ちゆく肉体の館に囚われるな",
      "lines": [
        {
          "text": "Poor soul, the centre of my sinful earth,",
          "ja": "私の罪深き大地（肉体）の中心に宿る、哀れなる魂よ"
        },
        {
          "text": "My sinful earth these rebel powers array,",
          "ja": "お前を反乱の軍勢のように取り囲む、肉欲の衝動に惑わされるな。"
        },
        {
          "text": "Why dost thou pine within and suffer dearth,",
          "ja": "なぜお前は、自らの内面で飢え渇き、貧しさに苦しみながら"
        },
        {
          "text": "Painting thy outward walls so costly gay?",
          "ja": "外側の朽ちゆく肉体の館ばかりを、豪華に飾り立てようとするのか。"
        },
        {
          "text": "Why so large cost, having so short a lease,",
          "ja": "なぜこれほど莫大な費用をかけて、短き借家契約の肉体のために"
        },
        {
          "text": "Dost thou upon thy fading mansion spend?",
          "ja": "豪華な装飾を施そうとするのか。"
        },
        {
          "text": "Shall worms, inheritors of this excess,",
          "ja": "その館はやがて遠からず崩壊し"
        },
        {
          "text": "Eat up thy charge? Is this thy body’s end?",
          "ja": "虫たちの餌食となって、土へと還る運命にあるというのに。"
        },
        {
          "text": "Then soul, live thou upon thy servant’s loss,",
          "ja": "肉体に費やす富を、魂自身の永遠の富へと変えなさい"
        },
        {
          "text": "And let that pine to aggravate thy store;",
          "ja": "肉体を飢えさせ、その代償として魂を豊かに太らせなさい。"
        },
        {
          "text": "Buy terms divine in selling hours of dross;",
          "ja": "外側の虚栄を売り払い、内なる神聖なる永遠の命を買い取りなさい。"
        },
        {
          "text": "Within be fed, without be rich no more:",
          "ja": "内面を豊かに養い、外面のみすぼらしさを誇りとしなさい。"
        },
        {
          "text": "So shall thou feed on Death, that feeds on men,",
          "ja": "そうしてこそ、お前は人間を食らう死神そのものを食い尽くすことができるのだ"
        },
        {
          "text": "And Death once dead, there’s no more dying then.",
          "ja": "死神が死に絶えたとき、もはや死は存在せず、お前は永遠に生き続けるのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 147,
      "title_ja": "我が愛は理性をも焼き尽くす高熱の病",
      "lines": [
        {
          "text": "My love is as a fever longing still,",
          "ja": "私の愛は熱病の病気そのものだ。"
        },
        {
          "text": "For that which longer nurseth the disease;",
          "ja": "病をいっそう悪化させる"
        },
        {
          "text": "Feeding on that which doth preserve the ill,",
          "ja": "あの有害な毒の食事ばかりを、激しく渇望し続けている。"
        },
        {
          "text": "The uncertain sickly appetite to please.",
          "ja": "病気を長引かせるものばかりを口にして、自らの命を縮め"
        },
        {
          "text": "My reason, the physician to my love,",
          "ja": "狂おしい欲望の熱を、絶えず燃え上がらせているのだから。"
        },
        {
          "text": "Angry that his prescriptions are not kept,",
          "ja": "私の愛の医師であるべき理性は、私の狂気に愛想を尽かし"
        },
        {
          "text": "Hath left me, and I desperate now approve",
          "ja": "自らの処方箋が守られないことに怒って"
        },
        {
          "text": "Desire is death, which physic did except.",
          "ja": "私の元を立ち去ってしまった。"
        },
        {
          "text": "Past cure I am, now Reason is past care,",
          "ja": "理性に見放された私は今や絶望し、身をもって知るのだ"
        },
        {
          "text": "And frantic-mad with evermore unrest;",
          "ja": "理性の薬を拒絶した欲望の結末は、ただ死あるのみだと。"
        },
        {
          "text": "My thoughts and my discourse as madmen’s are,",
          "ja": "私にはもはや治療の施しようがない、理性を完全に失ってしまったのだから"
        },
        {
          "text": "At random from the truth vainly express’d;",
          "ja": "狂乱の嵐の中で、私の思考と発言は狂人の妄想と化してしまった。"
        },
        {
          "text": "For I have sworn thee fair, and thought thee bright,",
          "ja": "私は誓った、君は輝くほど美しく、天使のように清らかであると。"
        },
        {
          "text": "Who art as black as hell, as dark as night.",
          "ja": "だが君は、地獄のように真っ黒であり、漆黒の夜のように醜い女だったのだ。"
        }
      ],
      "audio": {
        "url": "https://archive.org/download/spc144_1506_librivox/spc144_sonnet147_wt.mp3",
        "reader": "Winston Tharp",
        "duration": "1:16"
      }
    },
    {
      "no": 148,
      "title_ja": "愛が我が目を曇らせ正しく見えぬのか",
      "lines": [
        {
          "text": "O me! what eyes hath Love put in my head,",
          "ja": "おお"
        },
        {
          "text": "Which have no correspondence with true sight;",
          "ja": "愛の神よ、お前は私の頭にどんな歪んだ瞳を嵌め込んだのか"
        },
        {
          "text": "Or, if they have, where is my judgement fled,",
          "ja": "物事のありのままの真実を、正しく見つめることができない瞳を！"
        },
        {
          "text": "That censures falsely what they see aright?",
          "ja": "あるいは、もし私の瞳が正しく見つめているのだとしたら"
        },
        {
          "text": "If that be fair whereon my false eyes dote,",
          "ja": "なぜ私の理性は、瞳が見つめる真実を偽りだと決めつけてしまうのか。"
        },
        {
          "text": "What means the world to say it is not so?",
          "ja": "もし世界中の誰もが「美しくない」と嘲笑うあの女を"
        },
        {
          "text": "If it be not, then love doth well denote",
          "ja": "私の心だけが「美しい」と信じ込んでいるのだとしたら、"
        },
        {
          "text": "Love’s eye is not so true as all men’s: no,",
          "ja": "愛の盲目の狂気が、私の判断を完全に狂わせてしまっているのだ。"
        },
        {
          "text": "How can it? O! how can Love’s eye be true,",
          "ja": "愛の神よ、お前が正しく見つめることなど、どうしてできようか"
        },
        {
          "text": "That is so vexed with watching and with tears?",
          "ja": "お前の瞳は絶え間なき涙によって曇らされ、前さえ見えないというのに。"
        },
        {
          "text": "No marvel then, though I mistake my view;",
          "ja": "だから私の瞳が真実を見誤ったとしても、何の不思議があろうか"
        },
        {
          "text": "The sun itself sees not, till heaven clears.",
          "ja": "太陽そのものでさえ、天の雲の涙に覆われれば前が見えなくなるのだから。"
        },
        {
          "text": "O cunning Love! with tears thou keep’st me blind,",
          "ja": "愛の神よ、お前は狡猾にも私の目を涙で盲目にし"
        },
        {
          "text": "Lest eyes well-seeing thy foul faults should find.",
          "ja": "彼女の醜い過ちの数々を、私がはっきりと見破ることができないようにしているのだ。"
        }
      ],
      "audio": null
    },
    {
      "no": 149,
      "title_ja": "君を憎む者を憎み君のためにすべてを捨てた",
      "lines": [
        {
          "text": "Canst thou, O cruel! say I love thee not,",
          "ja": "残酷な君よ"
        },
        {
          "text": "When I against myself with thee partake?",
          "ja": "君は本当に言えるのか、「私が君を愛していない」などと"
        },
        {
          "text": "Do I not think on thee, when I forgot",
          "ja": "私が君の側に立って"
        },
        {
          "text": "Am of my self, all tyrant, for thy sake?",
          "ja": "自分自身に対して戦いを挑んでいるというのに。"
        },
        {
          "text": "Who hateth thee that I do call my friend,",
          "ja": "君を憎む者を、私もまた憎まずにいられようか"
        },
        {
          "text": "On whom frown’st thou that I do fawn upon,",
          "ja": "君が眉をひそめる相手に、私が優しい言葉をかけることなどあり得ようか。"
        },
        {
          "text": "Nay, if thou lour’st on me, do I not spend",
          "ja": "君が私を軽蔑するとき、私は自らの身を責め、自らを罰しはしなかったか"
        },
        {
          "text": "Revenge upon myself with present moan?",
          "ja": "君の怒りの理由を、すべて私自身の罪として受け止めはしなかったか。"
        },
        {
          "text": "What merit do I in my self respect,",
          "ja": "私の中にあるどんな美徳であっても、もしそれが君の意に染まぬなら"
        },
        {
          "text": "That is so proud thy service to despise,",
          "ja": "私はそれを自らの手で引き裂き、踏みにじってきたではないか。"
        },
        {
          "text": "When all my best doth worship thy defect,",
          "ja": "私の身体の最良の力は、君のわずかな指図に従って仕え"
        },
        {
          "text": "Commanded by the motion of thine eyes?",
          "ja": "君のひとつの視線のために、私自身の幸福をすべて投げ出してきたのだ。"
        },
        {
          "text": "But, love, hate on, for now I know thy mind;",
          "ja": "だが君よ、君は私を憎み、私を嘲笑い続ける"
        },
        {
          "text": "Those that can see thou lov’st, and I am blind.",
          "ja": "君の欠点を見破れぬ盲目の私を捨てて、君の欠点を知り尽くす者たちばかりを愛しながら。"
        }
      ],
      "audio": null
    },
    {
      "no": 150,
      "title_ja": "なぜ欠点だらけの君がこれほど心を惹きつけるのか",
      "lines": [
        {
          "text": "O! from what power hast thou this powerful might,",
          "ja": "おお"
        },
        {
          "text": "With insufficiency my heart to sway?",
          "ja": "君はいかなる魔の手によって、これほど強大な権力を手に入れたのか"
        },
        {
          "text": "To make me give the lie to my true sight,",
          "ja": "自らの数々の不完全さと欠点をもって、私の魂を完全に支配する力を！"
        },
        {
          "text": "And swear that brightness doth not grace the day?",
          "ja": "私の瞳に真実の光を疑わせ、白を黒と言いくるめ"
        },
        {
          "text": "Whence hast thou this becoming of things ill,",
          "ja": "君の醜い過ちの数々さえも、至高の美徳として拝ませる魔力を！"
        },
        {
          "text": "That in the very refuse of thy deeds",
          "ja": "どこから君は、その不吉な魅力を手に入れてきたのか"
        },
        {
          "text": "There is such strength and warrantise of skill,",
          "ja": "君の最悪の行いにおいてさえ、他のあらゆる女たちの最善の行いよりも"
        },
        {
          "text": "That, in my mind, thy worst all best exceeds?",
          "ja": "はるかに激しく私の胸を焦がし、私を狂乱へと駆り立てるその力を！"
        },
        {
          "text": "Who taught thee how to make me love thee more,",
          "ja": "なぜ私は、憎むべき君の欠点のすべてを愛してやまないのか？"
        },
        {
          "text": "The more I hear and see just cause of hate?",
          "ja": "世の人々が君を軽蔑し、君の汚れを嫌悪する中で"
        },
        {
          "text": "O! though I love what others do abhor,",
          "ja": "なぜ私ひとりだけが、君の不名誉を熱烈に愛してしまうのか？"
        },
        {
          "text": "With others thou shouldst not abhor my state:",
          "ja": "ああ、だが君よ、もし私が誰も愛さぬ君を愛したのだとしたら"
        },
        {
          "text": "If thy unworthiness rais’d love in me,",
          "ja": "君こそが、この私を誰よりも深く愛すべきではないのか！"
        },
        {
          "text": "More worthy I to be belov’d of thee.",
          "ja": "君の価値のなさを愛する私を、君が愛さずに誰が愛するというのか。"
        }
      ],
      "audio": null
    },
    {
      "no": 151,
      "title_ja": "愛は若く良心を知らぬ肉の衝動",
      "lines": [
        {
          "text": "Love is too young to know what conscience is,",
          "ja": "愛の神はあまりに若く"
        },
        {
          "text": "Yet who knows not conscience is born of love?",
          "ja": "良心というものの重さをまだ知らない。"
        },
        {
          "text": "Then, gentle cheater, urge not my amiss,",
          "ja": "だが誰であっても知っているはずだ"
        },
        {
          "text": "Lest guilty of my faults thy sweet self prove:",
          "ja": "良心とは愛の情熱から生まれるものだと。"
        },
        {
          "text": "For, thou betraying me, I do betray",
          "ja": "だから優しい詐欺師よ"
        },
        {
          "text": "My nobler part to my gross body’s treason;",
          "ja": "私の過ちをあまり厳しく責めないでおくれ"
        },
        {
          "text": "My soul doth tell my body that he may",
          "ja": "君の犯した過ちの罪が、私の胸の中に飛び火しただけなのだから。"
        },
        {
          "text": "Triumph in love; flesh stays no farther reason,",
          "ja": "君が私を裏切るとき、私の高貴な魂は肉体の反乱を許してしまう"
        },
        {
          "text": "But rising at thy name doth point out thee,",
          "ja": "私の理性の忠告を無視して、私の肉体は君への熱い欲望に火をつけるのだ。"
        },
        {
          "text": "As his triumphant prize. Proud of this pride,",
          "ja": "肉体は君の名を叫びながら、傲慢にも立ち上がり"
        },
        {
          "text": "He is contented thy poor drudge to be,",
          "ja": "君という甘美な獲物を我がものとするために、誇らしげに戦いを挑む。"
        },
        {
          "text": "To stand in thy affairs, fall by thy side.",
          "ja": "肉体は君の僕となり、君の足元に倒れ伏し、君の意のままに仕えるのだ。"
        },
        {
          "text": "No want of conscience hold it that I call",
          "ja": "だから私に良心がないなどと責めないでおくれ"
        },
        {
          "text": "Her ‘love,’ for whose dear love I rise and fall.",
          "ja": "私が愛する君を「我が愛」と呼び、君の肉体の奴隷として生きることを誇りとしているのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 152,
      "title_ja": "誓いを破りし君を責める我が身も誓いを破る者",
      "lines": [
        {
          "text": "In loving thee thou know’st I am forsworn,",
          "ja": "君を愛することにおいて"
        },
        {
          "text": "But thou art twice forsworn, to me love swearing;",
          "ja": "私が誓いを破った不義の者であることは知っている"
        },
        {
          "text": "In act thy bed-vow broke, and new faith torn,",
          "ja": "だが君は、二重に誓いを破った大罪人ではないか。"
        },
        {
          "text": "In vowing new hate after new love bearing:",
          "ja": "君はかつて夫に捧げたベッドの神聖なる誓いを破り"
        },
        {
          "text": "But why of two oaths’ breach do I accuse thee,",
          "ja": "そして私に新しく誓った愛の約束を、無残にも破り捨てて別の男へと去ったのだから。"
        },
        {
          "text": "When I break twenty? I am perjur’d most;",
          "ja": "だが私に、君の二重の誓いの破棄を責める権利などあろうか"
        },
        {
          "text": "For all my vows are oaths but to misuse thee,",
          "ja": "私自身は、君のために二十もの誓いを破り捨てた大罪人であるというのに！"
        },
        {
          "text": "And all my honest faith in thee is lost:",
          "ja": "私の誓いはすべて偽りであり、私の言葉はすべて嘘であった。"
        },
        {
          "text": "For I have sworn deep oaths of thy deep kindness,",
          "ja": "君を愛するために、私はあらゆる誠実さを投げ捨ててしまったのだから。"
        },
        {
          "text": "Oaths of thy love, thy truth, thy constancy;",
          "ja": "私は誓った、君は優しく美しいのだと、君は誠実なのだと。"
        },
        {
          "text": "And, to enlighten thee, gave eyes to blindness,",
          "ja": "私は我が瞳に嘘をつかせ、君の黒い肌を白く眩しいと信じ込ませた。"
        },
        {
          "text": "Or made them swear against the thing they see;",
          "ja": "君を美化するために、私は天と神と自然に対して嘘をつき続けたのだ。"
        },
        {
          "text": "For I have sworn thee fair; more perjured I,",
          "ja": "ああ、私はなんと恐ろしい誓いの破壊者であったことか"
        },
        {
          "text": "To swear against the truth so foul a lie.",
          "ja": "君を美しいと誓ったこと、その誓いこそが私の生涯最大の偽りであったというのに！"
        }
      ],
      "audio": null
    },
    {
      "no": 153,
      "title_ja": "キューピッドの松明が泉を熱く沸かしたように",
      "lines": [
        {
          "text": "Cupid laid by his brand and fell asleep:",
          "ja": "愛の神キューピッドが"
        },
        {
          "text": "A maid of Dian’s this advantage found,",
          "ja": "自らの燃える松明を傍らに置いて眠り込んだとき"
        },
        {
          "text": "And his love-kindling fire did quickly steep",
          "ja": "純潔の女神ダイアナに仕える処女の妖精が、忍び足で近づき"
        },
        {
          "text": "In a cold valley-fountain of that ground;",
          "ja": "その冷たい手で、愛の激しい炎の松明を奪い去った。"
        },
        {
          "text": "Which borrow’d from this holy fire of Love,",
          "ja": "妖精は、その燃える火を冷たい泉の水の中へと投げ込み、消そうとしたのだ。"
        },
        {
          "text": "A dateless lively heat, still to endure,",
          "ja": "だが愛の炎はあまりに熱く、冷たい泉の水を沸騰させ"
        },
        {
          "text": "And grew a seething bath, which yet men prove",
          "ja": "泉は永遠に冷めない熱い薬湯の温泉へと姿を変えてしまった。"
        },
        {
          "text": "Against strange maladies a sovereign cure.",
          "ja": "今もその温泉は、病に苦しむ多くの人々を癒やす治癒の泉となっている。"
        },
        {
          "text": "But at my mistress’ eye Love’s brand new-fired,",
          "ja": "だが我が愛する女性の瞳から、愛の神は再び松明に火を灯し"
        },
        {
          "text": "The boy for trial needs would touch my breast;",
          "ja": "その燃える矢を、私の哀れな胸へと突き刺したのだ。"
        },
        {
          "text": "I, sick withal, the help of bath desired,",
          "ja": "恋の熱病に苦しむ私は、あの癒やしの温泉へと助けを求めて駆けつけたが"
        },
        {
          "text": "And thither hied, a sad distemper’d guest,",
          "ja": "温泉の湯でさえも、我が胸の熱病を癒やすことはできなかった。"
        },
        {
          "text": "But found no cure, the bath for my help lies",
          "ja": "私の病を癒やすことができる唯一の泉とは"
        },
        {
          "text": "Where Cupid got new fire; my mistress’ eyes.",
          "ja": "我が愛する人の二つの瞳から湧き出る、愛の涙の雫以外にはないのだから。"
        }
      ],
      "audio": null
    },
    {
      "no": 154,
      "title_ja": "愛の火を消そうと泉に沈めた松明",
      "lines": [
        {
          "text": "The little Love-god lying once asleep,",
          "ja": "小さき愛の神（キューピッド）が"
        },
        {
          "text": "Laid by his side his heart-inflaming brand,",
          "ja": "ある日草むらの上で眠り込んでいた"
        },
        {
          "text": "Whilst many nymphs that vow’d chaste life to keep",
          "ja": "心を射抜く愛の炎の松明を、その枕元に置いたままで。"
        },
        {
          "text": "Came tripping by; but in her maiden hand",
          "ja": "純潔を誓った多くの美しい処女のニンフたちが"
        },
        {
          "text": "The fairest votary took up that fire",
          "ja": "その傍らを通り過ぎ"
        },
        {
          "text": "Which many legions of true hearts had warm’d;",
          "ja": "その中の一番美しい処女が、大胆にもその松明を取り上げたのだ。"
        },
        {
          "text": "And so the general of hot desire",
          "ja": "無数の胸を激しい恋の炎で焼き尽くしてきた、あの恐ろしい松明を。"
        },
        {
          "text": "Was, sleeping, by a virgin hand disarm’d.",
          "ja": "ニンフはその火を、冷たい谷間の泉の底へと沈めて消そうとした。"
        },
        {
          "text": "This brand she quenched in a cool well by,",
          "ja": "だが松明の熱は、泉の水を激しく沸騰させ、永遠の熱湯へと変えてしまい"
        },
        {
          "text": "Which from Love’s fire took heat perpetual,",
          "ja": "今も病める人々の肉体を癒やす、名高き温泉となったのだ。"
        },
        {
          "text": "Growing a bath and healthful remedy,",
          "ja": "だが私の恋の病は、いかなる温泉の力をもってしても癒やすことはできない。"
        },
        {
          "text": "For men diseased; but I, my mistress’ thrall,",
          "ja": "この愛の炎を沈めることができる場所など、この地上のどこにもないのだ。"
        },
        {
          "text": "Came there for cure and this by that I prove,",
          "ja": "恋の炎は、冷たい水を熱湯に変えてしまうことはできても"
        },
        {
          "text": "Love’s fire heats water, water cools not love.",
          "ja": "冷たい水は、燃え盛る真実の愛の炎を消すことは決してできないのだから。"
        }
      ],
      "audio": null
    }
  ]
}
];
