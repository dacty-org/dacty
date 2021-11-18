# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
SAMPLE_CONTENT = [
  {
    title:  '【ラクスル×LayerX】SaaSの失注率は「MSP開発」で激変する！『LayerX インボイス』に学ぶ、SaaS立上げのストーリー',
    description: '2021年10月、あのラクスルがLayerXを招き、SaaSプロダクト立ち上げの勉強会を開いた。話を聞いたFastGrow編集部は同席取材を申し込み、その一部始終を記録した。ラクスルは、LayerXのSaaSプロダクト導入を一度見送っている。だが2021年1月の『LayerX インボイス』本格リリース後に改めて説明を受け、5月に二度目のトライアルを実施、8月からの導入を決めたという。勉強会の進行を務めたラクスルの平佐賢宗氏は、ビフォーアフターを受けてLayerXのプロダクト開発への本気度の高さ、PDCAサイクルの速さを実感。今後の発展にも期待しているという。こうした経緯から勉強会にLayerXを招き、プロダクト開発の背景を聞く機会を設けた。ラクスルが導入を一度見送ったように、『LayerX インボイス』は初めから順調な歩みで進んできたわけではない。プレゼンを行ったLayerXの執行役員、牧迫寛之氏が、LayerX インボイスの立ち上げストーリーを通して示したのは大きく4点。「実開発に入る前にインセプションデッキを作ること」「MVPとMSPの差分を意識すること」「営業やCSとプロダクトチームとの距離の近さ」「導入はゴールではなく始まりであり、運用に乗るプロセスをCSを含めて取っていくこと」だ。では、詳しく見てみよう。',
    content_thumbnail: '',
    account: 'FastGrow',
    account_thumbnail: '',
    date: '2021/11/15',
    href: 'https://www.fastgrow.jp/articles/raksul-layerx-makisako',
  },
  {
    title:  'コミュ障の営業戦略',
    description: '※このアイキャッチ画像はSnapmartで購入可能です。 営業が苦手だ。 文系出身で特殊技能がないと「新卒一括採用」で営業職に回されることが多いと聞いて、新卒での就職を諦めたほどだ。そのくらい営業という仕事には前々から恐怖心があり、電話一本するのも緊張する自分には絶対できないと思っていた。 だから、「外でお客さんと話してないと逆にストレスが溜まるんですよねぇ」と言うような生粋の営業マン気質の人を見ると、もうそれだけで仰ぎ見てしまう。ほんとに心底尊敬する。 ただ、今みた',
    content_thumbnail: 'https://assets.st-note.com/production/uploads/images/4047251/rectangle_large_29fddab13682d390e5ab7ff6e769904b.jpg?width=800',
    account: 'えとみほ（江藤美帆）',
    account_thumbnail: '',
    date: '2017/1/21',
    href: 'https://note.com/etomiho/n/n65f207452687',
  },
  {
    title:  '営業DXに不可欠！MA（マーケティングオートメーション）とは何か？',
    description: 'Marketing-Robotics（マーケロボ）の田中亮大です。 当社は、MA（マーケティングオートメーション）ツールの開発をしていますが、このMA市場自体が数年しか経っていないこともあり、 MAって、、、企業買収？と思われることが未だに多々あります。 ここ数ヶ月の騒動で営業のデジタル変革（DX：デジタルトランスフォーメーション）を迫られている企業も多い。営業DXに不可欠なMAですが、 MAを知っている人でも、そもそもMAって何ができるんですか？とよく分かっていない',
    content_thumbnail: 'https://assets.st-note.com/production/uploads/images/20587503/rectangle_large_type_2_273f39743af1aa51a734d1102a3e0c0d.png?width=800',
    account: '田中亮大「i : Sales」（アイセ…',
    account_thumbnail: 'https://assets.st-note.com/production/uploads/images/9230459/profile_e825146087e1d6a079b653ebf183cace.jpeg?width=60',
    date: '2020/3/12',
    href: 'https://note.com/marke_robo/n/n387f91be7831',
  }
]

SAMPLE_CONTENT.each do |content|
  Content.create(content)
end