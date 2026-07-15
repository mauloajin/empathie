const reserve = "https://res-reserve.com/ja/restaurants/empathie";
const map = "https://maps.app.goo.gl/GoCAX9eLfcU1zZxD9";
const instagram = "https://www.instagram.com/empathie2025/";

const jpKeywords = ["Empathie", "エンパティ", "大阪 フレンチ", "西天満 フレンチ", "北新地 フレンチ", "淀屋橋 フレンチ", "東梅田 フレンチ", "大阪市北区 レストラン", "西天満 レストラン", "北新地 レストラン", "大阪 ミシュラン", "大阪 ミシュラン一つ星", "ミシュランガイド京都大阪2026", "西天満 ミシュラン", "フランス料理 大阪", "フレンチコース 大阪", "季節のおまかせコース", "日本食材 フレンチ", "伝統的フレンチ", "カウンターフレンチ", "北新地駅 徒歩5分", "淀屋橋駅 徒歩8分", "東梅田駅 徒歩8分", "大阪 ディナー", "西天満 ディナー", "北新地 ディナー", "大阪 フレンチ予約", "エンパティ 予約", "Empathie 予約", "大阪 ワインペアリング", "大阪 ティーペアリング", "アペリティフ", "穴子 フォアグラ", "旬の食材 フレンチ", "国産食材 フレンチ", "大阪 記念日 フレンチ", "大阪 会食 フレンチ", "西天満 コース料理", "大阪 オーナーシェフ", "辻裕司 シェフ"];
const enKeywords = ["Empathie Osaka", "Empathie restaurant", "French restaurant Osaka", "Michelin star Osaka", "Michelin Guide Kyoto Osaka 2026", "Nishi Tenma restaurant", "Kitashinchi French restaurant", "Yodoyabashi restaurant", "Higashi Umeda restaurant", "fine dining Osaka", "French course Osaka", "omakase French Osaka", "Japanese ingredients French cuisine", "wine pairing Osaka", "tea pairing Osaka", "restaurant reservation Osaka", "French restaurant near Kitashinchi Station", "restaurant near Yodoyabashi Station", "restaurant near Higashi Umeda Station", "counter dining Osaka"];

const schema = {
  "@context": "https://schema.org", "@type": "Restaurant", name: "Empathie（エンパティ）", alternateName: "Empathie",
  url: "https://empathie-ten.vercel.app", telephone: "070-1469-7378", priceRange: "¥¥¥¥", servesCuisine: ["フランス料理", "French"],
  address: { "@type": "PostalAddress", postalCode: "530-0047", addressRegion: "大阪府", addressLocality: "大阪市北区", streetAddress: "西天満4-12-10 NISHITENMA-Y’s village101", addressCountry: "JP" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "18:00", closes: "22:00" }
  ], sameAs: ["https://www.empathie2025.com/", instagram], acceptsReservations: reserve
};

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="nav"><a className="wordmark" href="#top">Empathie</a><nav><a href="#concept">特徴</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English</a></nav><a className="reserve small" href={reserve}>ご予約</a></header>

    <section className="hero" id="top"><div className="heroInner"><p className="eyebrow">MICHELIN GUIDE KYOTO OSAKA 2026</p><h1>Empathie</h1><p className="kana">エンパティ</p><div className="star"><span>★</span> MICHELIN ONE STAR</div><p className="lead">フレンチの伝統と、<br/>日本の恵みを一皿に。</p><p className="area">NISHI-TENMA · KITASHINCHI · OSAKA</p><div className="actions"><a className="reserve" href={reserve}>WEB予約</a><a className="ghost" href={map}>Google マップ</a></div></div><div className="orb" aria-hidden="true"><i></i></div></section>

    <section className="intro" id="concept"><div><p className="sectionNo">01 — PHILOSOPHY</p><h2>Empathie＝共感</h2></div><div><p className="largeCopy">食材の背景にある物語や、生産者の想いを、お客様と分かち合う。</p><p>Empathie（エンパティ）は、大阪・西天満に店を構えるフレンチレストランです。伝統的なフランス料理の技法と、日本各地の旬の食材を融合。シェフが生産者と直接向き合い、素材の旨味を引き出した季節のコースを、カウンター10席の空間で提供しています。</p><p>2025年の開業後、「ミシュランガイド京都・大阪2026」で一つ星を獲得しました。</p></div></section>

    <section className="features"><article><b>01</b><h3>French Tradition</h3><p>クラシカルな思想と技法を大切に、フランス料理の揺るぎない味わいを。</p></article><article><b>02</b><h3>Japanese Ingredients</h3><p>日本各地の生産者と築いた関係から届く、四季折々の食材を積極的に使用。</p></article><article><b>03</b><h3>Counter Experience</h3><p>目の前で一皿が生まれ、料理の背景を言葉でも共有できるカウンター10席。</p></article></section>

    <section className="menu"><div><p className="sectionNo">02 — MENU</p><h2>Seasonal<br/>Omakase</h2></div><div className="menuCard"><p>季節のおまかせコース</p><div><span>コースのみ</span><strong>¥21,780</strong></div><div><span>ワインペアリング付</span><strong>¥36,300</strong></div><small>税込・サービス料10%を含みます。内容は季節により変わります。</small><ul><li>4種のアペリティフ</li><li>3種の前菜</li><li>魚料理・肉料理</li><li>アヴァンデセール・グランデセール</li><li>小菓子・食後のお飲み物</li></ul><a href="https://www.empathie2025.com/course.html">公式サイトでコースを見る →</a></div></section>

    <section className="info" id="info"><p className="sectionNo">03 — INFORMATION</p><h2>店舗基本情報</h2><dl><div><dt>店名</dt><dd>Empathie（エンパティ）</dd></div><div><dt>業態</dt><dd>フレンチレストラン</dd></div><div><dt>住所</dt><dd>〒530-0047<br/>大阪府大阪市北区西天満4-12-10<br/>NISHITENMA-Y’s village101</dd></div><div><dt>電話番号</dt><dd><a href="tel:07014697378">070-1469-7378</a></dd></div><div><dt>営業時間</dt><dd>ランチ　金・土・日 12:00〜<br/>ディナー　18:00〜22:00<br/><small>ランチは12:00一斉スタート。ディナーは18:00または19:00からの予約。</small></dd></div><div><dt>定休日</dt><dd>月曜日</dd></div><div><dt>席数</dt><dd>カウンター10席</dd></div><div><dt>公式リンク</dt><dd><a href="https://www.empathie2025.com/">公式サイト</a>　<a href={instagram}>Instagram</a>　<a href={reserve}>WEB予約</a></dd></div></dl></section>

    <section className="access" id="access"><div><p className="sectionNo">04 — ACCESS</p><h2>大阪・西天満へ</h2><p>北新地、淀屋橋、東梅田の各駅から徒歩圏内。西天満4丁目、NISHITENMA-Y’s villageの1階です。</p><a className="ghost light" href={map}>Google マップで開く</a></div><ul><li><b>北新地駅</b><span>JR東西線 F-92出口より徒歩5分</span></li><li><b>淀屋橋駅</b><span>京阪本線・御堂筋線 2番出口より徒歩8分</span></li><li><b>東梅田駅</b><span>谷町線 8番出口より徒歩8分</span></li></ul></section>

    <section className="faq" id="faq"><p className="sectionNo">05 — FAQ</p><h2>よくあるご質問</h2><details><summary>予約はどこからできますか？</summary><p>公式WEB予約をご利用ください。電話でも問い合わせできます。アレルギーや苦手な食材は来店当日では対応できない場合があるため、予約時にお伝えください。</p></details><details><summary>ランチ営業はありますか？</summary><p>金・土・日の12:00から、一斉スタートで営業しています。</p></details><details><summary>最寄り駅はどこですか？</summary><p>北新地駅から徒歩5分、淀屋橋駅と東梅田駅から徒歩8分です。</p></details><details><summary>子どもは利用できますか？</summary><p>10歳以上で、大人と同じコースを召し上がれる方が利用できます。貸切の場合は店舗へご相談ください。</p></details><details><summary>服装に決まりはありますか？</summary><p>短パン、サンダル、スウェットなど、カジュアルすぎる服装はご遠慮ください。</p></details></section>

    <section className="english" id="english"><p className="sectionNo">06 — ENGLISH GUIDE</p><h2>Empathie,<br/>French Dining in Osaka</h2><div className="enGrid"><p>Empathie is a Michelin one-star French restaurant in Nishi-Tenma, Osaka. Chef Yuji Tsuji combines traditional French techniques with seasonal ingredients sourced from producers across Japan. The intimate dining room has ten counter seats.</p><dl><div><dt>Address</dt><dd>NISHITENMA-Y’s village 101, 4-12-10 Nishi-Tenma, Kita-ku, Osaka 530-0047</dd></div><div><dt>Hours</dt><dd>Lunch: Fri–Sun, 12:00<br/>Dinner: Tue–Sun, 18:00–22:00</dd></div><div><dt>Closed</dt><dd>Monday</dd></div><div><dt>Reservation</dt><dd><a href={reserve}>Online reservation</a></dd></div></dl></div></section>

    <section className="keywords"><h2>Related searches</h2><p>{[...jpKeywords, ...enKeywords].join(" · ")}</p></section>
    <footer><a className="wordmark" href="#top">Empathie</a><p>〒530-0047 大阪府大阪市北区西天満4-12-10<br/>NISHITENMA-Y’s village101<br/><a href="tel:07014697378">070-1469-7378</a></p><p className="note">掲載情報は店舗公式サイトをもとに構成しています。最新情報は公式サイト・予約ページでご確認ください。</p></footer>
  </main>;
}
