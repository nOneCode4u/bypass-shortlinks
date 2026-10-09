// ==UserScript==
// @name       Bypass Shortlinks (Original AIO)
// @name:id    Bypass Semua Shortlink
// @name:ug    Bypass بارلىق قىسقا ئۇلىنىشلار
// @name:ar    تجاوز الجميع الروابط المختصرة
// @name:ja    バイパス 全て ショートリンク
// @name:he    לַעֲקוֹף את כל קישורים קצרים
// @name:hi    सभी शॉर्टलिंक को बायपास करें
// @name:ko    모든 짧은 링크 우회
// @name:th    บายพาส ทั้งหมด ลิงค์สั้น
// @name:nb    Omgå Alle Kortlenker
// @name:sv    Förbigå alla kortlänkar
// @name:sr    Zaobići Sve Kratke veze
// @name:sk    Obísť Všetky Krátke odkazy
// @name:hu    Bypass Összes Rövid linkek
// @name:ro    Bypass Toate Linkuri scurte
// @name:fi    Ohittaa Kaikki Lyhyet linkit
// @name:el    Παράκαμψη Ολα Σύντομοι σύνδεσμοι
// @name:eo    Pretervojo Ĉiuj Mallongaj ligiloj
// @name:it    Bypassare Tutto Collegamenti brevi
// @name:bg    Заобикаляне на всички кратки връзки
// @name:es    Saltarse Todos los Enlaces Acortados
// @name:cs    Obcházeč všech zkracovačů odkazů
// @name:vi    Bỏ qua Tất cả Các liên kết ngắn
// @name:pl    Bypass Wszystkie Krótkie linki
// @name:uk    Обхід всі Короткі посилання
// @name:ru    Обход Все Короткие ссылки
// @name:tr    Bypass Tüm Kısa Linkler
// @name:fr    Bypass Tout Lien courts
// @name:nl    Bypass Alle Korte links
// @name:da    Bypass Alle Shortlinks
// @name:de    Bypass Alle Kurzlinks
// @name:zh-cn 旁路 全部 短链接
// @name:zh-tw 旁路 全部 短鏈接
// @name:pt-br Bypass Todos Links curtos
// @name:fr-ca Bypass Tout Lien courts
// @namespace  https://github.com/nOneCode4u/bypass-shortlinks/variant2
// @run-at     document-start
// @author     nOneCode4u
// @license    Unlicense
// @noframes
// @version    96.8.20261008.b1
// @match      *://*/*
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_addStyle
// @grant      GM_openInTab
// @grant      GM_setClipboard
// @grant      GM_xmlhttpRequest
// @grant      window.onurlchange
// @grant      GM_registerMenuCommand
// @icon       https://cdn-icons-png.flaticon.com/512/14025/14025295.png
// @require    https://github.com/nOneCode4u/bypass-shortlinks/raw/main/MonkeyConfig-Mod.js
// @description    Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners, Go Directly to Your Destination , Skip AdFly , Skip Annoying Ads, Block Adblock Detection , Block Annoying Popup And Prompts , Automatically Downloading Files , Flickr Images And Youtube Video And Much More
// @description:id Bypass Semua Situs Shortlink Secara Otomatis Melewati Pemendek Tautan yang Mengganggu, Langsung Menuju Tujuan Anda, Melewati AdFly, Melewati Iklan yang Mengganggu, Memblokir Deteksi Adblock, Memblokir Popup dan Prompt yang Mengganggu, Mengunduh File dan Video YouTube Secara Otomatis, dan Banyak Lagi
// @description:ug بارلىق قىسقا ئۇلىنىش تور بېكەتلىرىنى ئايلىنىپ ئۆتۈپ ، كىشىنى بىزار قىلىدىغان ئۇلىنىش قىسقارتقۇچلىرىنى ئاپتوماتىك ئاتلاڭ ، بىۋاسىتە مەنزىلىڭىزگە بېرىڭ ، AdFly دىن ئاتلاڭ ، كىشىنى بىزار قىلىدىغان ئېلانلارنى ئاتلاڭ ، توسۇشنى بايقاشنى چەكلەڭ ، كىشىنى بىزار قىلىدىغان كۆزنەك ۋە تەشۋىقاتلارنى توسىمىز ، ھۆججەت ۋە Youtube سىنلىرىنى ئاپتوماتىك چۈشۈرۈڭ.
// @description:ar تجاوز جميع مواقع الروابط المختصرة تلقائيًا وتخطي اختصارات الروابط المزعجة والانتقال مباشرة إلى وجهتك وتخطي AdFly وتخطي الإعلانات المزعجة وحظر اكتشاف Adblock وحظر النوافذ المنبثقة والمطالبات المزعجة وتنزيل الملفات ومقاطع فيديو YouTube تلقائيًا وغير ذلك الكثير
// @description:he עקיפת כל אתרי הקישורים הקצרים מדלגת אוטומטית על מקצרי קישורים מעצבנים, גולשת ישירות ליעד שלך, דלגת על AdFly, דלגת על פרסומות מעצבנות, חסימה של זיהוי חסימות פרסום, חסימה של חלונות קופצים והנחיות מעצבנות, הורדה אוטומטית של קבצים וסרטוני יוטיוב ועוד ועוד.
// @description:hi सभी शॉर्टलिंक साइटों को बायपास करें, स्वचालित रूप से कष्टप्रद लिंक शॉर्टनर्स को छोड़ दें, सीधे अपने गंतव्य पर जाएं, एडफ्लाई को छोड़ें, कष्टप्रद विज्ञापनों को छोड़ें, एडब्लॉक डिटेक्शन को ब्लॉक करें, कष्टप्रद पॉपअप और संकेतों को ब्लॉक करें, स्वचालित रूप से फ़ाइलें और यूट्यूब वीडियो डाउनलोड करना और बहुत कुछ
// @description:ja すべての短縮リンクサイトをバイパスし、迷惑なリンク短縮サービスを自動的にスキップし、目的地に直接移動し、AdFlyをスキップし、迷惑な広告をスキップし、Adblock検出をブロックし、迷惑なポップアップとプロンプトをブロックし、ファイルとYoutubeビデオを自動的にダウンロードし、その他多数
// @description:ko 모든 단축 링크 사이트를 자동으로 우회하고 귀찮은 링크 단축기를 건너뛰고 목적지로 바로 이동하고 AdFly를 건너뛰고 귀찮은 광고를 건너뛰고 광고 차단 감지를 차단하고 귀찮은 팝업 및 프롬프트를 차단하고 파일과 YouTube 비디오를 자동으로 다운로드하고 훨씬 더 많은 기능을 제공합니다.
// @description:th ข้ามไซต์ Shortlinks ทั้งหมด ข้ามตัวย่อลิงก์ที่น่ารำคาญโดยอัตโนมัติ ไปที่ปลายทางของคุณโดยตรง ข้าม AdFly ข้ามโฆษณาที่น่ารำคาญ บล็อกการตรวจจับการบล็อกโฆษณา บล็อกป๊อปอัปและคำเตือนที่น่ารำคาญ ดาวน์โหลดไฟล์และวิดีโอ YouTube โดยอัตโนมัติ และอื่น ๆ อีกมากมาย
// @description:eo Preteriri Ĉiujn Mallongigajn Retejojn Aŭtomate Preterlasas Ĝenajn Ligilo-Mallongigilojn, Iru Rekte al Via Celloko, Preterlasi AdFly, Preterlasi Ĝenajn Reklamojn, Bloki Reklamblokan Detekton, Bloki Ĝenajn Ŝprucfenestrojn kaj Promesojn, Aŭtomate Elŝuti Dosierojn kaj Youtube-Videojn kaj Multe Pli
// @description:de Umgehen Sie alle Shortlinks-Sites, überspringen Sie automatisch lästige Link-Verkürzer, gehen Sie direkt zu Ihrem Ziel, überspringen Sie AdFly, überspringen Sie lästige Anzeigen, blockieren Sie die Adblock-Erkennung, blockieren Sie lästige Popups und Eingabeaufforderungen, laden Sie automatisch Dateien und YouTube-Videos herunter und vieles mehr
// @description:tr Tüm Kısa Bağlantı Sitelerini Otomatik Olarak Atla Rahatsız Edici Bağlantı Kısaltıcılarını Atla, Doğrudan Hedefine Git, AdFly'ı Atla, Rahatsız Edici Reklamları Atla, Reklam Engelleme Algılamasını Engelle, Rahatsız Edici Açılır Pencereleri ve İstemleri Engelle, Dosyaları ve Youtube Videolarını Otomatik Olarak İndir ve Daha Fazlası
// @description:da Omgå alle shortlinks-sider. Springer automatisk irriterende linkforkortere over, gå direkte til din destination, spring AdFly over, spring irriterende annoncer over, blokerer Adblock-detektion, blokerer irriterende pop op-vinduer og prompts, downloader automatisk filer og YouTube-videoer og meget mere.
// @description:fr Contournez tous les sites de liens courts, ignorez automatiquement les raccourcisseurs de liens gênants, accédez directement à votre destination, ignorez AdFly, ignorez les publicités gênantes, bloquez la détection Adblock, bloquez les fenêtres contextuelles et les invites gênantes, téléchargez automatiquement des fichiers et des vidéos YouTube et bien plus encore
// @description:bg Заобикаля всички сайтове с кратки връзки. Автоматично пропуска досадни съкращаващи връзки, отива директно до вашата дестинация, пропуска AdFly, пропуска досадни реклами, блокира откриването на Adblock, блокира досадни изскачащи прозорци и подкани, автоматично изтегляне на файлове и YouTube видео и много други.
// @description:ro Omiteți toate site-urile cu linkuri scurte, omite automat scurtătoarele de linkuri enervante, mergeți direct la destinație, omiteți AdFly, omiteți reclamele enervante, blocați detectarea blocajelor de reclame, blocați ferestrele pop-up și solicitările enervante, descărcați automat fișiere și videoclipuri YouTube și multe altele
// @description:fi Ohita kaikki pikalinkkisivustot, ohita automaattisesti ärsyttävät linkkien lyhentäjät, siirry suoraan määränpäähäsi, ohita AdFly, ohita ärsyttävät mainokset, estä mainosten estäjän havaitsemisen, estä ärsyttävät ponnahdusikkunat ja kehotteet, lataa tiedostot ja YouTube-videot automaattisesti ja paljon muuta
// @description:it Bypass All Shortlinks Sites salta automaticamente i fastidiosi accorciatori di link, vai direttamente alla tua destinazione, salta AdFly, salta le pubblicità fastidiose, blocca il rilevamento di Adblock, blocca i fastidiosi popup e prompt, scarica automaticamente file e video di YouTube e molto altro
// @description:el Παράκαμψη όλων των ιστότοπων με σύντομες συνδέσεις, παρακάμπτει αυτόματα ενοχλητικούς συντομευτές συνδέσμων, πηγαίνει απευθείας στον προορισμό σας, παρακάμπτει το AdFly, παρακάμπτει ενοχλητικές διαφημίσεις, αποκλείει την ανίχνευση αποκλεισμού διαφημίσεων, αποκλείει ενοχλητικά αναδυόμενα παράθυρα και μηνύματα, κάνει αυτόματη λήψη αρχείων και βίντεο Youtube και πολλά άλλα
// @description:es Omite todos los sitios de enlaces cortos: omite automáticamente los acortadores de enlaces molestos, va directamente a su destino, omite AdFly, omite anuncios molestos, bloquea la detección de bloqueadores de anuncios, bloquea las ventanas emergentes y los avisos molestos, descarga automáticamente archivos y videos de YouTube y mucho más.
// @description:hu Megkerüli az összes rövid linkeket tartalmazó webhelyet, automatikusan kihagyja a bosszantó linkrövidítőket, közvetlenül a célállomásra ugrik, kihagyja az AdFly-t, kihagyja a bosszantó hirdetéseket, blokkolja az Adblock észlelését, blokkolja a bosszantó felugró ablakokat és üzeneteket, automatikusan letölti a fájlokat és a YouTube-videókat, és még sok mást.
// @description:nb Omgå alle nettsteder med korte lenker. Hopper automatisk over irriterende lenkeforkortere, gå direkte til destinasjonen din, hopp over AdFly, hopp over irriterende annonser, blokker annonseblokkeringsdeteksjon, blokker irriterende popup-vinduer og spørsmål, last ned filer og YouTube-videoer automatisk og mye mer.
// @description:sk Obíďte všetky stránky s krátkymi odkazmi, automaticky preskočí otravné skracovače odkazov, prejdite priamo na miesto určenia, preskočte AdFly, preskočte otravné reklamy, blokujte detekciu blokovania reklám, blokujte otravné vyskakovacie okná a výzvy, automaticky sťahujte súbory a videá z YouTube a oveľa viac.
// @description:sv Hoppa över alla korta länkar, hoppar automatiskt över irriterande länkförkortare, går direkt till din destination, hoppar över AdFly, hoppar över irriterande annonser, blockerar annonsblockeringsdetektering, blockerar irriterande popup-fönster och uppmaningar, laddar automatiskt ner filer och YouTube-videor och mycket mer.
// @description:sr Zaobiđi sve stranice s kratkim poveznicama, automatski preskače dosadne skraćivače poveznica, idi izravno na svoje odredište, preskoči AdFly, preskoči dosadne oglase, blokiraj otkrivanje blokatora oglasa, blokiraj dosadne skočne prozore i upite, automatski preuzima datoteke i YouTube videozapise i još mnogo toga
// @description:pl Omiń wszystkie witryny z krótkimi linkami, automatycznie pomijaj irytujące skracacze linków, przejdź bezpośrednio do celu, pomiń AdFly, pomiń irytujące reklamy, zablokuj wykrywanie Adblocka, zablokuj irytujące wyskakujące okienka i monity, automatycznie pobieraj pliki i filmy z YouTube i wiele więcej
// @description:nl Omzeil alle shortlinks Sites Sla automatisch vervelende linkverkorters over, Ga direct naar uw bestemming, Sla AdFly over, Sla vervelende advertenties over, Blokkeer Adblock-detectie, Blokkeer vervelende pop-ups en prompts, Download automatisch bestanden en YouTube-video's en nog veel meer
// @description:cs Obejde všechny stránky s krátkými odkazy, automaticky přeskakuje otravné zkracovače odkazů, přejde přímo k cíli, přeskakuje AdFly, přeskakuje otravné reklamy, blokuje detekci blokování reklam, blokuje otravná vyskakovací okna a výzvy, automaticky stahuje soubory a videa z YouTube a mnohem více.
// @description:uk Обхід усіх сайтів із короткими посиланнями: автоматично пропускає надокучливі скорочувачі посилань, переходить безпосередньо до місця призначення, пропускає AdFly, пропускає надокучливу рекламу, блокує виявлення блокувальників реклами, блокує надокучливі спливаючі вікна та підказки, автоматично завантажує файли та відео з Youtube та багато іншого.
// @description:ru Обход всех сайтов с короткими ссылками. Автоматически пропускает раздражающие сокращатели ссылок, переходит сразу к месту назначения, пропускает AdFly, пропускает раздражающую рекламу, блокирует обнаружение AdBlock, блокирует раздражающие всплывающие окна и подсказки, автоматически загружает файлы и видео с YouTube и многое другое.
// @description:vi Bỏ qua tất cả các trang web liên kết ngắn tự động bỏ qua các trình rút gọn liên kết gây phiền nhiễu, đi thẳng đến đích của bạn, bỏ qua AdFly, bỏ qua quảng cáo gây phiền nhiễu, chặn phát hiện Adblock, chặn cửa sổ bật lên và lời nhắc gây phiền nhiễu, tự động tải xuống tệp và video YouTube và nhiều hơn nữa
// @description:zh-cn 绕过所有短链接网站自动跳过烦人的链接缩短器，直接转到您的目的地，跳过 AdFly，跳过烦人的广告，阻止 Adblock 检测，阻止烦人的弹出窗口和提示，自动下载文件和 Youtube 视频等等
// @description:zh-tw 繞過所有短鏈接網站自動跳過煩人的鏈接縮短器，直接轉到您的目的地，跳過 AdFly，跳過煩人的廣告，阻止 Adblock 檢測，阻止煩人的彈出窗口和提示，自動下載文件和 Youtube 視頻等等
// @description:pt-br Ignore todos os sites Shortlinks automaticamente, ignore encurtadores de links irritantes, vá diretamente para o seu destino, ignore o AdFly, ignore anúncios irritantes, bloqueie a detecção de bloqueadores de anúncios, bloqueie pop-ups e prompts irritantes, baixe arquivos e vídeos do YouTube automaticamente e muito mais
// @description:fr-ca Contournez tous les sites de liens courts, ignorez automatiquement les raccourcisseurs de liens gênants, accédez directement à votre destination, ignorez AdFly, ignorez les publicités gênantes, bloquez la détection Adblock, bloquez les fenêtres contextuelles et les invites gênantes, téléchargez automatiquement des fichiers et des vidéos YouTube et bien plus encore
// @exclude /^(https?:\/\/)([^\/]+\.)?((cloudflare|github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|stripecdn|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|(accounts|studio).youtube|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|proton.me|stripe.network|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/(?!(www\.google\.com\/(recaptcha\/|url)|docs\.google\.com\/|drive\.google\.com\/)).*google\..*/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
// @downloadURL https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks_Original.user.js
// @updateURL https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks_Original.meta.js
// @homepageURL    https://github.com/nOneCode4u/bypass-shortlinks
// @supportURL     https://github.com/nOneCode4u/bypass-shortlinks/issues
// ==/UserScript==

(function() {
'use strict';
  const cfg = new MonkeyConfig({title: 'Additional AIO Bypass Settings',menuCommand: 'Open Bypass Settings',shadowWidth: '550px',shadowHeight: '275px',iframeWidth: '450px',iframeHeight: '200px',
  params: {
    BlogDelay: {label: 'Delay in My Blog', type: 'checkbox', default: false,column: 'right&top'},
    SetDelay: {label: '=', type: 'number', default: 5,column: 'right&top', inputWidth: '40px'},
    TimerFC: {label: 'Fast Timer', type: 'checkbox', default: false, column: 'left&top'},
    TDelay: {label: '=', type: 'number', default: 1000, column: 'left&top'},
    SameTab: {label: 'Open Links Same Tabs',type: 'checkbox',default: false,column: 'left'},
    RightFC: {label: 'Enable Context Menu',type: 'checkbox',default: false,column: 'left'},
    BlockFC: {label: 'Enable Always Ready',type: 'checkbox',default: false,column: 'left'},
    BlockPop: {label: 'Enable Popup Blocker',type: 'checkbox',default: false,column: 'left'},
    AntiDebug: {label: 'Enable Anti Debug & Log Cleared',type: 'checkbox',default: false,column: 'left'},
    YTShort: {label: 'Disable Youtube Short',type: 'checkbox',default: false,column: 'right'},
    Adblock: {label: 'Disable Adblock Detections',type: 'checkbox',default: false,column: 'right'},
    Prompt: {label: 'Disable Prompts & Notifications',type: 'checkbox',default: false,column: 'right'},
    Flickr: {label: 'Auto Save Images From Flickr',type: 'checkbox',default: false,column: 'right'},
    YTDown: {label: 'Auto Download Youtube Video',type: 'checkbox',default: false,column: 'right'},
    AutoTurnstile: {label: 'Auto Solve Turnstile / Cloudflare',type: 'checkbox',default: true,column: 'left'},
    SkipQueue: {label: 'Fast-Track Filehost Queues',type: 'checkbox',default: true,column: 'right'},
    SafeForm: {label: 'Anti-Clickjacking Form Protection',type: 'checkbox',default: true,column: 'left'},
    DomainMode: {label: 'Bypass Only Known Shorteners',type: 'checkbox',fontColor: "#FF0000",default: false,column: 'right'}}});

  if (cfg && cfg.get && cfg.get('DomainMode')) {
      const knownDomains = [['go','cmo','d.co','m'].join(''), 'api.gplinks.com', ['rf','auc','et','.co','m'].join(''), 'maloma3arbi.blogspot.com', ['fin','ance','nu','z.c','om'].join(''), '(inshort|youlinks|adrinolinks).in|(linkcents|nitro-link).com|clk.sh', ['thep','ra','gati','shi','lc','las','ses.','com'].join(''), '(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech|retrocove|vaultfind|geotides|renovatehub|playallgames|countriesguide).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly|teknoasian|lifeprovy|chownest|mythnest|homesteadfeast|gizmoera|tastywhiz|speakzyo).com|(bubblix|dailytech-news).eu|(biit|carfocus).site|coinscap.info|insurancegold.in|wii.si', '(on-scroll|diudemy|maqal360).com', 'headlinerpost.com|posterify.net', '(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly).site|coinscap.info|insurancegold.in|wii.si', ['co','inil','ium','.ne','t'].join(''), 'blog.klublog.com', 'dutchycorp.space', ['fina','nce','doz','e.c','om'].join(''), ['shor','tfas','ter.','ne','t'].join(''), ['tri','gge','red','pla','y.co','m'].join(''), ['ouo','.io'].join(''), 'adbtc.top', 'linkbox.to', ['mods','fir','e.c','om'].join(''), 'the2.link', ['kee','plin','ks.o','rg'].join(''), 'forex-22.com', '1shortlink.com', '1short.io', ['dis','he','ye','.co','m'].join(''), ['ay','soda','mag.','co','m'].join(''), 'cryptonewssite.rf.gd', '1bitspace.com', ['csho','rt','.o','rg'].join(''), 'revlink.pro', ['pany','heal','th','.com'].join(''), 'minhapostagem.top', ['play','pa','st','e.co','m'].join(''), 'sfl.gl', 'lanza.me', 'jioupload.icu', ['lol','in','ez.c','om'].join(''), 'shortlinks2btc.somee.com', 'kisalt.digital', 'linksly.co', ['lk','sfy.','com'].join(''), ['alm','onts','f.co','m'].join(''), ['roti','ze','r.n','et'].join(''), 'render-state.to', ['li','nkf','ore','arn','.c','om'].join(''), ['dow','nfi','le.','si','te'].join(''), ['en','laci','to.','com'].join(''), 'adtival.network', ['imag','erev','iser','.com'].join(''), ['ama','ngui','de','s.','co','m'].join(''), ['stoc','km','arg.','com'].join(''), '8tm.net', 'bestfonts.pro', ['cpml','ink','.net'].join(''), ['no','odle','maga','zine','.co','m'].join(''), 'paycut.pro', 'forex-trnd.com', ['moh','taw','aa','.c','om'].join(''), 'knowiz0.blogspot.com', 'sharetext.me', 'apkw.ru', ['com','ohoy','.com'].join(''), '4fnet.org', ['al','orra','.co','m'].join(''), 'adoc.pub', ['pr','ogr','ama','sv','ir','tual','es','pc','.net'].join(''), ['pd','fcof','fee.','com'].join(''), 'boost.ink', ['fan','son','lin','ehub','.com'].join(''), 'mirrored.to', 'mboost.me', 'karyawan.co.id', 'slink.bid', 'blog.yurasu.xyz', ['cr','edit','sgo','al.','com'].join(''), 'adfoc.us', ['ze','gtr','en','ds.c','om'].join(''), 'ac.totsugeki.com', 'newassets.hcaptcha.com', 'bigbtc.win', 'linkspy.cc', ['di','nhei','romo','ney.','co','m'].join(''), 'flamebook.eu.org', ['re','ko','nis','e.','com'].join(''), 'vosan.co', 'exblog.jp', ['mod','com','bo.c','om'].join(''), ['sub2','ge','t.','com'].join(''), 'o-pro.online', 'jobzhub.store', 'curto.win', ['inf','oner','d.or','g'].join(''), ['yi','tarx','.c','om'].join(''), ['vide','olyr','ics','.i','n'].join(''), ['f2h.','io'].join(''), 'dbree.me', 'upload.ee', ['gof','il','e.i','o'].join(''), 'dddrive.me', '1fichier.com', ['mp4','upl','oa','d.co','m'].join(''), 'takefile.link', 'drop.download', ['ea','syup','lo','ad.i','o'].join(''), ['rap','id','ga','tor.','ne','t'].join(''), ['coin','sr','ev.c','om'].join(''), ['dro','pg','alax','y.co','m'].join(''), ['da','yup','lo','ad','s.c','om'].join(''), ['work','uplo','ad','.co','m'].join(''), ['fre','ep','res','et.','net'].join(''), ['kra','ke','nf','iles','.co','m'].join(''), 'file-upload.net', ['upl','oad','hav','en.','com'].join(''), ['file','res','ourc','es','.ne','t'].join(''), ['indo','bo.','co','m'].join(''), 'techxploitz.eu.org', ['jo','bin','megh','alay','a.','in'].join(''), ['play','nan','o.','onli','ne'].join(''), '2linkes.com', 'mazen-ve3.com', ['apk','admi','n.','com'].join(''), 'filemoon.sx', 'files.fm', 'k2s.cc', ['katf','ile.','com'].join(''), ['ud','rop','.c','om'].join(''), ['mega','upto','.com'].join(''), ['kar','anp','c.co','m'].join(''), ['doup','loa','ds.n','et'].join(''), 'send.now', ['dat','au','ploa','d.','ne','t'].join(''), ['buzz','hea','vi','er.c','om'].join(''), ['bowf','ile','.c','om'].join(''), ['dail','yupl','oads','.net'].join(''), ['uplo','ad','ev.o','rg'].join(''), ['meg','au','p.n','et'].join(''), 'gdflix.dad', ['meg','a4u','plo','ad.','net'].join(''), ['fi','lesp','ayou','ts.c','om'].join(''), ['up','loa','dy.','io'].join(''), 'file-upload.org', 'mexa.sh', 'up-4ever.net', ['hit','file','.n','et'].join(''), 'servicemassar.ma', ['upfi','on.','co','m'].join(''), 'm.flyad.vip', 'easylink.gamingwithtr.com', ['me','di','afi','re.c','om'].join(''), 'downloader.tips', ['mod','sbas','e.c','om'].join(''), ['fi','le','dm','.com'].join(''), 'anonym.ninja', ['oyd','ir','.co','m'].join(''), ['doo','dr','iv','e.co','m'].join(''), 'firefaucet.win', 'cryptorotator.website', 'qiwi.gg', ['tu','rbo','bi','t.ne','t'].join(''), ['sh','are','mo','ds','.c','om'].join(''), 'onlinetechsolution.link', 'desiupload.co', 'tempatwisata.pro', ['bew','bin','.c','om'].join(''), 'lajangspot.web.id', ['in','sho','rtn','ote','.co','m'].join(''), ['jiou','ploa','d.c','om'].join(''), ['tekn','oasi','an','.c','om'].join(''), ['so','ci','al','wolv','ez','.c','om'].join(''), ['bi','tco','ta','sks.','co','m'].join(''), 'shortit.pw', 'newsminer.uno', 'autofaucet.dutchycorp.space', ['flic','kr.c','om'].join(''), '(g34new|dlgamingvn|v34down|phimsubmoi|almontsf).com|(nashib|timbertales).xyz', 'earnbee.xyz|zippynest.online|getunic.info', '1ink.cc|cuturl.cc', '(fc-lc|thotpacks).xyz', 'offerwall.me|ewall.biz', 'surl.li|surl.gd', 'dogefury.com|thanks.tinygo.co', '(blogsward|coinjest).com|coinsimulator.(io|online)', 'michaelemad.com|7misr4day.com', '(dramaticqueen|emubliss).com', '(grtjobs|jksb).in', 'tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la|srnky.com|srnky.com', '(bnbfree|freeth|freebitco).in', 'ouo.io|ouo.press', 'askpaccosi.com|cryptomonitor.in', '(kongutoday|proappapk|hipsonyc).com', '(viralxns|uploadsoon).com', '(techleets|bonloan).xyz|sharphindi.in|nyushuemu.com', '(jobmatric|carjankaari).com|techsl.online', 'usersdrive.com|ddownload.com', '(devnote|formshelp|rcccn).in|djbassking.live', 'cutnet.net|(cutyion|cutynow|cuttlinks|cuttty).com|(exego|cety).app|(jixo|jizo|gamco).online', 'xonnews.net|toilaquantri.com|share4u.men|camnangvay.com', 'oxy\\.*', 'largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in', '(zygina|jansamparks).com|(loanifyt|getknldgg).site|topshare.in|btcon.online', '(financewada|utkarshonlinetest).com|financenova.online', 'setroom.biz.id|travelinian.com', 'wp.thunder-appz.eu.org|blog.adscryp.com', '(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics', '(fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com|sarkarins).in', '(financenube|mixrootmods|pastescript|trimorspacks).com', '(keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store|dsmusic.in|vi-music.app', '(aduzz|tutorialsaya|baristakesehatan|merekrut|indobo|educorp).com|deltabtc.xyz|bit4me.info', 'yoshare.net|olhonagrana.com', 'coincroco.com|surflink.tech|cointox.net', 'solidcoins.net|fishingbreeze.com', '(superheromaniac|spatsify|mastkhabre|ukrupdate).com', '(bestloansoffers|worldzc).com|earningtime.in', '(exeo|exego).app|(falpus|exe-urls|exnion|exe-links|exeygo|exeylink).com|4ace.online', 'writedroid.eu.org|modmania.eu.org|writedroid.in', 'techkhulasha.com|itijobalert.in', '(lakhisarainews|vahanmitra24).in', 'autodime.com|cryptorex.net', '(bchlink|usdlink).xyz', 'pubghighdamage.com|anmolbetiyojana.in', 'aylink.co|cpmlink.pro', 'nishankhatri.xyz|(bebkub|owoanime|hyperkhabar).com', '(blogmado|kredilerim|insuranceleadsinfo).com', 'litecoin.host|cekip.site', '(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere|masrawytrend).com', '(tmail|labgame).io|(gamezizo|fitdynamos).com', 'ify.ac|go.linkify.ru', '(financedoze|topjanakri|stockbhoomi).com|techhype.in|getpdf.net|cryptly.site', '(importantclass|hamroguide).com', 'up-load.io|downloadani.me', '(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net', '(tejtime24|drinkspartner|sportswordz|newspute).com|(raftarsamachar|gadialert|jobinmeghalaya|raftarwords|sharclub|jankaritak).in', 'trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn', 'anonymfile.com|sharefile.co|gofile.to', '(carbikesupdate|carbikenation).com', '(uploadrar|fingau|getpczone|wokaz).com|uptomega.me', '(ez4mods|game5s|sharedp|fastcars1|carbikenation).com|tech5s.co|a4a.site|rcccn.in', '4hi.in|(10short|animerigel|encurt4|encurtacash).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs|zippynest.online|faucetsatoshi.site|tfly.link|oii.si', '(ecryptly|equickle).com', '(down.fast-down|down.mdiaload).com', '(horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top', 'revly.click|(clikern|kiddyshort|adsssy).com|mitly.us|link.whf.bz|shortex.in|(easyshort|shorturlearn).xyz', '(wellness4live|akash.classicoder).com|2the.space|inicerita.online', '(hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps|healthylifez|insurancemyst).com|clk.kim|dekhe.click', 'exactpay.online|neverdims.com|sproutworkers.co', '(fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea|financenuz|pagalworldsong).com|(ddieta|lmktec).net|(bankshiksha|odiadjremix).in|vbnmx.online', '(tinybc|phimne).com|(mgame|sportweb|bitcrypto).info', '(marketrook|governmentjobvacancies|swachataparnibandh|goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub|arkarinaukrinetwork|topgeninsurance).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp|dvjobs|techawaaz).in|(biharhelp|biharkhabar).co|wastenews.xyz|biharkhabar.net', '(admediaflex|cdrab|financekita|jobydt|foodxor|mealcold|newsobjective|gkvstudy|mukhyamantriyojanadoot|thepragatishilclasses|indobo|pdfvale|templeshelp).com|(ecq|cooklike).info|(wpcheap|bitwidgets|newsamp|coinilium).net|atomicatlas.xyz|gadifeed.in|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store|mbantul.my.id', 'tutwuri.id|(besargaji|link2unlock).com|app.khaddavi.net', '(lyricsbaazaar|ezeviral).com', '(mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm|qrixpe).com|(loopmyhub|thepopxp).shop|(cryptoblast|powergam).online', 'short.croclix.me|adz7short.space', 'crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz', 'dutchycorp.ovh|(encurt4|10short).com|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|beinglink.in', '(remixsounds|helpdeep|thinksrace).com|(techforu|studywithsanjeet).in|uprwssp.org|gkfun.xyz', 'adshnk.com|adshrink.it', '(suaurl|lixapk|reidoplacar|lapviral|minhamoto).com', 'stly.link|(snaplessons|atravan|airevue|carribo|amalot|techetta|biovetro).net|(stfly|shrtlk|srtslug).biz|(veroan|technons|tournguide|yrtourguide).com', '(playonpc|yolasblog|playarcade).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews|jobvox|gfcg).xyz', '(sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|(ai|go).tempatwisata.pro', 'coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net', '(lopteapi|3link|web1s|vuotlinkvip).com', '(mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte|technofreez|pagalworldlyrics|poorhindi|paisasutra|dhanyogi|thedeorianews|bgmiobb).com|(allnotes|sewdamp3.com|motahone|mukhyasamachar|techrain).in|(pisple|cirdro|panscu).xyz|taiyxd.net', '(cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|(cegen|thunder-appz.eu).org|zaku.pro|veganab.co|skyfreecoins.top|manga4nx.site', 'go.paylinks.cloud', ['mu','lti','up.','io'].join(''), 'social-unlock.com', ['ga','mezi','gg.c','om'].join(''), 'shrs.link', ['sha','reus','.i','o'].join(''), 'bloggerpemula.pythonanywhere.com', 'https:
      const currentHost = location.hostname.replace(/^www\./, '');
      const isKnown = knownDomains.some(pattern => {
          if (pattern.includes('|') || pattern.includes('(') || pattern.includes('[')) {
              try { return new RegExp(pattern).test(currentHost); } catch(e) { return false; }
          }
          return currentHost === pattern || currentHost.endsWith('.' + pattern);
      });
      if (!isKnown) return;
  }
  const bp = function(query, all = false) {const containsMatch = query.match(/:contains\("([^"]+)"\)$/);const innerTextMatch = query.match(/:innerText\("([^"]+)"\)$/);const hasMatch = query.match(/:has\(([^)]+)\)$/);let baseQuery, text, childSelector, useInnerText;
    if (containsMatch) {baseQuery = query.replace(/:contains\("[^"]+"\)$/, '');text = containsMatch[1];useInnerText = false;} else if (innerTextMatch) {baseQuery = query.replace(/:innerText\("[^"]+"\)$/, '');text = innerTextMatch[1];useInnerText = true;} else if (hasMatch) {
    baseQuery = query.replace(/:has\([^)]+\)$/, '');childSelector = hasMatch[1];text = null;useInnerText = false;} else {baseQuery = query;text = null;useInnerText = false;}const elements = document.querySelectorAll(baseQuery);if (!text && !childSelector && !all) return document.querySelector(baseQuery);
    if (all && !text && !childSelector) return elements;if (hasMatch) {const filtered = Array.from(elements).filter(el => el.querySelector(childSelector));return all ? filtered : filtered[0] || null;}
    if (text) {const filtered = Array.from(elements).filter(el => {const content = (useInnerText ? el.innerText : el.textContent).trim();return content.toLowerCase().includes(text.toLowerCase());});return all ? filtered : filtered[0] || null;}return all ? elements : elements[0] || null;};
  const BpParams = new URLSearchParams(location.search);const elementExists = query => bp(query) !== null;const BpT = query => document.getElementsByTagName(query);
  function BpBlock() {return 1;}
  function sleep(ms) {return new Promise((resolve) => setTimeout(resolve, ms));}
  function fakeHidden() {Object.defineProperty(document, "hidden", {get: () => true,configurable: true});}
  function meta(href) {document.head.appendChild(Object.assign(document.createElement('meta'), {name: 'referrer',content: 'origin'}));
    Object.assign(document.createElement('a'), {href}).click();}
  function redirect(url, blog = false) {location = url;}
  function setActiveElement(selector) {elementReady(selector).then(element => {const temp = element.tabIndex;element.tabIndex = 0;element.focus();element.tabIndex = temp;});}
  function elementReady(selector) {return new Promise(function(resolve, reject) {let element = bp(selector);
      if (element) {resolve(element); return;} new MutationObserver(function(_, observer) {element = bp(selector);
      if (element) {resolve(element); observer.disconnect();}}).observe(document.documentElement, {childList: true, subtree: true});});}
  function DecodeBase64(string, times = 1) {let decodedString = string;for (let i = 0; i < times; i++) {decodedString = atob(decodedString);}return decodedString;}
  function Decrypter(string, shift = 13) {return string.replace(/[a-z]/gi, c => {const base = c <= 'Z' ? 90 : 122;return String.fromCharCode(base >= (c = c.charCodeAt(0) + shift) ? c : c - 26);});}
  function waitForElm(query, callback, maxWaitTime = 15, initialDelay = 5) {const startTime = Date.now();const maxWaitTimeMs = maxWaitTime * 1000;const initialDelayMs = initialDelay * 1000;
    setTimeout(() => {const observer = new MutationObserver(() => {if (elementExists(query)) {observer.disconnect();callback(bp(query));} else if (Date.now() - startTime >= maxWaitTimeMs + initialDelayMs) {
          observer.disconnect();BpNote(`Element ${query} not found within ${maxWaitTime + initialDelay} seconds`, 'warn');}});observer.observe(document.body, {childList: true,subtree: true});
      if (elementExists(query)) {observer.disconnect();callback(bp(query));}}, initialDelayMs);}
  function SameTab() {Object.defineProperty(unsafeWindow, 'open', {value: function(url) {if (url) {location.href = url;BpNote(`Forced window.open to same tab: ${url}`);}return null;},writable: false,configurable: false});
    document.addEventListener('click', (e) => {const target = e.target.closest('a[target="_blank"]');if (target && target.href) {e.preventDefault();location.href = target.href;BpNote(`Redirected target="_blank" to same tab: ${target.href}`);}}, true);
    document.addEventListener('submit', (e) => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();location.href = form.action;BpNote(`Redirected form target="_blank" to same tab: ${form.action}`);}}, true);}
  function BlockRead(SearchString, nameFunc) {if (CloudPS(true, true, false)) return;try {if (typeof window[nameFunc] !== 'function') {BpNote(`Function ${nameFunc} not found or not a function`, 'warn');return;}const target = window[nameFunc];
    window[nameFunc] = function(...args) {try {const callback = args[0];const stringFunc = callback && typeof callback === 'function' ? callback.toString() : '';const regex = new RegExp(SearchString, 'i');if (regex.test(stringFunc)) {args[0] = function() {};}
    return target.call(this, ...args);} catch (err) {console.error(`Error in overridden ${nameFunc}:`, err);return target.call(this, ...args);}};} catch (err) {console.error('Error in BlockRead:', err);}}
  function strBetween(s, front, back, trim = false) {if (typeof s !== 'string' || s.indexOf(front) === -1 || s.indexOf(back) === -1) return '';const start = s.indexOf(front) + front.length;const end = s.indexOf(back, start);
    if (start >= end) return '';let result = s.slice(start, end);if (trim) {result = result.replaceAll(' ', '');result = result.trim();result = result.replaceAll('\n', ' ');} else {result = result.trim();}return result.replace(/['"]/g, '');}
  function ReadytoClick(selector, sleepTime = 0) {const events = ["mouseover", "mousedown", "mouseup", "click"];const userEvents = ["mousemove", "touchstart"];const selectors = selector.split(', ');if (selectors.length > 1) {return selectors.forEach(ReadytoClick);}
!function(){var _n=navigator.userAgent.length;void(_n);}();
    if (sleepTime > 0) {return sleep(sleepTime * 1000).then(function() {ReadytoClick(selector, 0);});}userEvents.forEach(eventName => {const eventObject = new Event(eventName, {bubbles: true});document.dispatchEvent(eventObject);});
    elementReady(selector).then(function(element) {element.removeAttribute('disabled');element.removeAttribute('target');events.forEach(eventName => {const eventObject = new MouseEvent(eventName, {bubbles: true,cancelable: true,});element.dispatchEvent(eventObject);});});}
  function StopAnima() {const addStyles = () => {const style = document.createElement('style');style.textContent = '* { animation: none !important; transition: none !important; }';(document.head || document.documentElement).appendChild(style);};
    const removeAnimationClasses = () => {bp('[class*="animate"], [class*="fade"], [class*="slide"], [class*="particles-js"], [class*="background"], [id*="animate"], [id*="fade"], [id*="slide"], [id*="particles-js"], [id="canvas"], [id="background"]',true).forEach(el => {
    el.classList.remove(...Array.from(el.classList).filter(cls => cls.includes('animate') || cls.includes('fade') || cls.includes('slide') || cls.includes('particles-js') || cls.includes('background')));if (el.classList.contains('particles-js-canvas-el') ||
    el.id === 'particles-js' || el.id === 'canvas' || el.id === 'background' || el.tagName.toLowerCase() === 'canvas') {el.remove();}});};const disableParticleEngines = () => {if (unsafeWindow.particlesJS) {unsafeWindow.particlesJS = () => {BpNote('Particles.js initialization blocked');};}
    if (unsafeWindow.tsParticles) {unsafeWindow.tsParticles.load = () => {BpNote('tsParticles initialization blocked');return Promise.resolve();};unsafeWindow.tsParticles.domItem = () => null;}};const execute = () => {addStyles();removeAnimationClasses();disableParticleEngines();};
    if (document.readyState !== 'loading' && document.head && document.body) {execute();} else {document.addEventListener('DOMContentLoaded', execute, { once: true });}new MutationObserver(removeAnimationClasses).observe(document, { childList: true, subtree: true });}
  function BpNote(message, level = 'info', caller = 'BloggerPemula') {const timestamp = new Date().toLocaleTimeString();const context = window.self === window.top ? 'top' : 'iframe';
    const BpMessage = `[BASS V96.5] ${timestamp} [${context}] - ${level.toUpperCase()} From ${caller}: ${message}`;switch (level) {case 'warn':console.warn(BpMessage);break;case 'error':console.error(BpMessage);break;case 'debug':console.log(BpMessage);break;default:console.log(BpMessage);}}
  function EnableRCF() {if (CloudPS(true, true, false)) return;var events = ['contextmenu', 'copy', 'cut', 'paste', 'select', 'selectstart','dragstart', 'drop'];function preventDefaultActions(event) {event.stopPropagation();}events.forEach(function(eventName) {document.addEventListener(eventName, preventDefaultActions, true);});}
  function Request(url, options = {}) {return new Promise(function(resolve, reject) {GM_xmlhttpRequest({ method: options.method ?? "GET", url, responseType: options.responseType ?? "json", headers: options.headers, data: options.data, onload: function(response) {resolve(response.response);}});});}
  function Listener(callback) {if (CloudPS(true, true, true)) return;const originalOpen = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(method, url) {this.addEventListener("load", () => { this.method = method;this.url = url;callback(this);}); originalOpen.apply(this, arguments);};}
  function RSCookie(action, name, value = null, days = null) {if (action === 'set') {if (!name || value === null) {BpNote('Nama cookie dan nilai harus disediakan untuk mode "set".', 'error');return;}const date = new Date();date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = days ? `; expires=${date.toUTCString()}` : '';document.cookie = `${name}=${value}${expires}; path=/`;BpNote(`Cookie "${name}" telah diatur dengan nilai "${value}".`);} else if (action === 'read') {
    if (!name) {BpNote('Nama cookie harus disediakan untuk mode "read".', 'error');return;}const cookieName = name + "=";const decodedCookie = decodeURIComponent(document.cookie);const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {let cookie = cookieArray[i];while (cookie.charAt(0) === ' ') {cookie = cookie.substring(1);}if (cookie.indexOf(cookieName) === 0) {return cookie.substring(cookieName.length, cookie.length);}}return "";} else {BpNote('Mode tidak valid. Gunakan "set" atau "read".', 'error');}}
  function CloudPS(checkFrames = false, captchaSite = false, checkFlare = true) {if (checkFrames && window.self !== window.top) {BpNote('Bypass Function Canceled Because Iframe Detected ', 'info');return true;}if (checkFlare && document.title === 'Just a moment...' || elementExists(['.spa','ce','r-to','p.','spa','ce','r.','cor','e-','ms','g'].join(''))) {BpNote("Bypass Function Canceled on Cloudflare Page ", 'info');return true;}
    if (captchaSite) {const captchaDomains = [/\.google\.com$/,/\.recaptcha\.net$/,/\.hcaptcha\.com$/,/\.cloudflare\.com$/];const host = location.host.toLowerCase();if (captchaDomains.some(regex => regex.test(host))) {BpNote(`Bypass Function Canceled on This Sites`, 'info');return true;}}return false;}
  function notify(txt, clicktocopy = false, clicktoclose = false, duration = cfg.get('SetDelay')) {const m = document.createElement('div');m.style.padding = '10px 20px';m.style.zIndex = 10000;m.style.position = 'fixed';m.style.width = `970px`;m.style.top = '10px';m.style.transform = 'translateX(-50%)';
    m.style.left = '50%';m.style.fontFamily = 'Arial, sans-serif';m.style.fontSize = '16px';m.style.color = 'white';m.style.textAlign = 'center';m.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';m.style.boxSizing = 'border-box';m.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';m.style.cursor = 'pointer';
    const mainText = document.createElement('div');mainText.innerText = txt.replace('@', duration);m.appendChild(mainText);const actionText = document.createElement('span');actionText.style.position = 'absolute';actionText.style.right = '10px';actionText.style.bottom = '5px';actionText.style.fontSize = '12px';actionText.style.color = 'white';actionText.style.userSelect = 'none';
    if (clicktocopy) {actionText.innerText = 'Click to Copy';} else if (clicktoclose) {actionText.innerText = 'Click to Close';}m.appendChild(actionText);document.body.appendChild(m);m.addEventListener('click', () => {if (clicktocopy) {navigator.clipboard.writeText(txt.replace('@', duration)).then(() => {mainText.innerText = 'Copied to clipboard!';
    setTimeout(() => {document.body.removeChild(m);clearInterval(timerId);}, 1000);}).catch(err => {console.error('Failed to copy text: ', err);});}if (clicktoclose) {document.body.removeChild(m);clearInterval(timerId);}});const timerId = setInterval(() => {duration -= 1;if (duration <= 0) {clearInterval(timerId);} else {mainText.innerText = txt.replace('@', duration);}}, 1000);}
  function NoFocus() {if (CloudPS(true, true, false)) return;window.mouseleave = true;window.onmouseover = true;document.hasFocus = () => true;if (!Object.getOwnPropertyDescriptor(document, 'webkitVisibilityState')?.get) {Object.defineProperty(document, 'webkitVisibilityState', {get: () => 'visible',configurable: true});}
!function(){var _m=Math.round;void(_m);}();
    if (!Object.getOwnPropertyDescriptor(document, 'visibilityState')?.get) {Object.defineProperty(document, 'visibilityState', {get: () => 'visible',configurable: true});}if (!Object.getOwnPropertyDescriptor(document, 'hidden')?.get) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}
    const eventOptions = {capture: true,passive: true};const ensureVisibility = () => {if (document.hidden !== false) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}};ensureVisibility();window.addEventListener('focus', e => e.stopImmediatePropagation(), eventOptions);window.addEventListener('blur', e => e.stopImmediatePropagation(), eventOptions);}
  function CaptchaDone(callback, checkInterval = 1000) {if (CloudPS()) return;const window = unsafeWindow;if (typeof callback !== 'function') {BpNote('Callback harus berupa fungsi', 'error');return;}let intervalId;
    const checkCaptcha = () => {try {if (elementExists(['.i','conc','apt','cha','-mod','al__','bod','y-','chec','kma','rk'].join(''))) {clearInterval(intervalId);callback();return;}
    if (elementExists("iframe[src^='https:
    if (elementExists("input[name='cf-turnstile-response']")) {if (window.turnstile && typeof window.turnstile.getResponse === 'function') {const response = window.turnstile.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
    if (elementExists("iframe[title='reCAPTCHA']")) {if (window.grecaptcha && typeof window.grecaptcha.getResponse === 'function') {const response = window.grecaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}} catch (error) {console.error('Error checking captcha:', error);}};intervalId = setInterval(checkCaptcha, checkInterval);}
  function BpAnswer(input, mode = 'math') {if (mode === 'math') {let text = input.replace(/^(Solve:|What is)\s*/i, '').replace(/[=?]/g, '').trim();text = text.replace(/[x×]/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');if (text.startsWith('sqrt(')) {const num = parseFloat(text.match(/sqrt\((\d+\.?\d*)\)/)?.[1]);return { result: num ? Math.floor(Math.sqrt(num)) : null, op: null, a: null, b: null };}
    const match = text.match(/(\d+\.?\d*)\s*([+\-*/%^])\s*(\d+\.?\d*)/);if (!match) return { result: null, op: null, a: null, b: null };const [, n1, op, n2] = match, a = parseFloat(n1), b = parseFloat(n2);const isRounded = text.includes('rounded to integer');let result;switch (op) {case '+': result = a + b; break;case '-': result = a - b; break;case '*': result = a * b; break;case '/': result = isRounded ? Math.floor(a / b) : a / b; break;
    case '%': result = a % b; break;case '**': result = Math.pow(a, b); break;default:BpNote('Operator tidak dikenal: ' + op, 'error');result = null;}return { result, op, a, b };} else if (mode === 'sum') {const numbers = input.replace(/\s/g, '').match(/[+\-]?(\d+\.?\d*)/g) || [];return numbers.reduce((sum, val) => parseFloat(sum) + parseFloat(val), 0);} else if (mode === 'captcha') {const numcode = bp('input.captcha_code');
    if (!numcode) return null;const digits = numcode.parentElement.previousElementSibling.children[0].children;return Array.from(digits).sort((d1, d2) => parseInt(d1.style.paddingLeft) - parseInt(d2.style.paddingLeft)).map(d => d.textContent).join('');}return null;}
  function DebugLog() {if (CloudPS(true, true, true)) return;const STORAGE_KEY = 'protection_tracker';let attemptCount = GM_getValue(STORAGE_KEY, 0);if (attemptCount > 0) setTimeout(() => GM_setValue(STORAGE_KEY, 0), 60000);const SavedMethods = {
    output: BpNote,trace: typeof console.debug === 'function' ? console.debug : BpNote,alert: console.warn,notice: console.info,issue: console.error,grid: typeof console.table === 'function' ? console.table : BpNote,wipe: console.clear,funcBuilder: Function.prototype.constructor,makeElement: document.createElement};
    const limits = {grid: { max: 5, timeframe: 5000 },wipe: { max: 5, timeframe: 5000 },filteredOutput: { max: 5, timeframe: 5000 },blocker: { max: 1, timeframe: 15000, count: 0, timestamp: 0 }};function canReport(category) {const restriction = limits[category] || {count: 0};if (restriction.stopped) return false;
    const currentTime = Date.now();restriction.timestamp = restriction.timestamp || currentTime;if (currentTime - restriction.timestamp > restriction.timeframe) {restriction.count = 0;restriction.timestamp = currentTime;}if (++restriction.count > restriction.max) {restriction.stopped = true;SavedMethods.alert(`Max limit hit for ${category}`);return false;}return true;}
    Object.defineProperty(window, 'onbeforeunload', { configurable: false, writable: false, value: null });['output', 'trace', 'alert', 'notice', 'issue', 'grid'].forEach(method => {if (typeof SavedMethods[method] === 'function') {console[method] = new Proxy(SavedMethods[method], {apply: (target, context, params) => {const adjustedParams = params.map(item => {if (typeof item === 'function') return "Hidden Function";
    if (typeof item !== 'object' || !item) return item;const attributes = Object.getOwnPropertyDescriptors(item);if (attributes.toString || 'get' in attributes) return "Hidden Accessor";if (Array.isArray(item) && item.length === 50 && typeof item[0] === "object") return "Hidden BigArray";return item;});if (params.length - adjustedParams.filter(x => x === params[params.indexOf(x)]).length >= Math.max(params.length - 1, 1)) {
    if (!canReport("filteredOutput")) return;}return SavedMethods[method].apply(context, adjustedParams);}});}});['wipe'].forEach(method => {console[method] = () => canReport(method) && SavedMethods.alert(`Blocked ${method}`);});window.Function.prototype.constructor = new Proxy(SavedMethods.funcBuilder, {apply: (target, context, inputs) => {const codeText = inputs[0];if (codeText?.includes('debugger')) {attemptCount++;
    GM_setValue(STORAGE_KEY, attemptCount);if (canReport("blocker")) SavedMethods.alert(`Blocked debugger (count: ${attemptCount})`);if (attemptCount > 100) {GM_setValue(STORAGE_KEY, 0);throw new Error("Debugger overload detected");}setTimeout(() => GM_setValue(STORAGE_KEY, Math.max(0, attemptCount - 1)), 1);inputs[0] = codeText.replaceAll("debugger", "");}return target.apply(context, inputs);}});
    document.createElement = new Proxy(SavedMethods.makeElement, {apply: (target, context, args) => {const newNode = target.apply(context, args);if (args[0].toLowerCase() === "iframe") {newNode.addEventListener("load", () => {try {newNode.contentWindow.console = { ...console };newNode.contentWindow.Function.prototype.constructor = window.Function.prototype.constructor;} catch (err) {}});}return newNode;}});
    Object.keys(SavedMethods).forEach(method => {if (method in console) Object.defineProperty(console, method, { configurable: false, writable: false });});if (cfg.get('AntiDebug')) {const baseTiming = performance.now;BpNote("Performance Modified For Anti-Debug Protection");performance.now = () => baseTiming() + Math.random() * 2;}}
  function CheckVisibility(selector, operatorOrCallback, textCondition, callback, actionOnVisible = true) {if (CloudPS()) return;function isElementVisible(elem) {if (!elem) return false;if (!elem.offsetHeight && !elem.offsetWidth) return false;if (getComputedStyle(elem).visibility === 'hidden') return false;return true;}
    function checkTextCondition(textCondition) {try {const conditionParts = textCondition.split(/(==|!=)/);if (conditionParts.length !== 3) {console.error('Invalid text condition format:', textCondition);return false;}const selectorPart = conditionParts[0].trim();const selector = selectorPart.replace("bp('", "").replace("').innerText", "").trim();
    const expectedValue = conditionParts[2].trim().replace(/['"]/g, '');const elem = bp(selector);if (!elem) return false;const actualValue = elem.innerText.trim();if (conditionParts[1].trim() === '==') {return actualValue.includes(expectedValue);} else if (conditionParts[1].trim() === '!=') {return !actualValue.includes(expectedValue);}return false;} catch (error) {
    console.error('Error evaluating text condition:', error);return false;}}if (typeof operatorOrCallback === 'function') {const callbackFn = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);if ((actionOnVisible && isVisible) || (!actionOnVisible && !isVisible)) {clearInterval(intervalId);callbackFn();}} catch (error) {
    console.error('Error checking visibility:', error);}}, checkInterval);} else if (typeof operatorOrCallback === 'string' && (operatorOrCallback === '&&' || operatorOrCallback === '||')) {const operator = operatorOrCallback;const checkInterval = 1000;const intervalId = setInterval(() => {try {const elem = bp(selector);const isVisible = isElementVisible(elem);const isTextConditionMet = checkTextCondition(textCondition);
    if ((operator === '&&' && isVisible && isTextConditionMet) || (operator === '||' && (isVisible || isTextConditionMet))) {clearInterval(intervalId);callback();}} catch (error) {console.error('Error checking visibility and text condition:', error);}}, checkInterval);} else {console.error('Parameter tidak valid.');}}
  function TrustMe() {if (CloudPS(true, true, true)) return;const sandbox = new Proxy(window, {get(target, key) {if (key === 'Object') {return new Proxy(Object, {get(objTarget, objKey) {if (objKey === 'freeze') {return function(obj) {BpNote("Object.freeze disabled in sandbox.", 'warn');return obj;};}return Reflect.get(objTarget, objKey);}});}return Reflect.get(target, key);}});
    const originalAddEventListener = EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener = function(type, listener, options) {if (type === 'message' || typeof listener !== 'function') {return originalAddEventListener.call(this, type, listener, options);}const wrappedListener = function(event) {let clonedEvent;try {if (event instanceof MessageEvent) {
    clonedEvent = new MessageEvent(event.type, {data: event.data,origin: event.origin,source: event.source,lastEventId: event.lastEventId,ports: event.ports,bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed});} else if (event instanceof MouseEvent) {clonedEvent = new MouseEvent(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed,clientX: event.clientX,
    clientY: event.clientY,button: event.button,buttons: event.buttons,target: event.target,currentTarget: event.currentTarget,relatedTarget: event.relatedTarget});} else if (event instanceof KeyboardEvent) {clonedEvent = new KeyboardEvent(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed,key: event.key,code: event.code,ctrlKey: event.ctrlKey,shiftKey: event.shiftKey,altKey: event.altKey,
    metaKey: event.metaKey});} else {clonedEvent = new Event(event.type, {bubbles: event.bubbles,cancelable: event.cancelable,composed: event.composed});['target', 'currentTarget', 'eventPhase', 'timeStamp'].forEach(prop => {if (event[prop] !== undefined) {Object.defineProperty(clonedEvent, prop, {value: event[prop],writable: true,configurable: true});}});}clonedEvent = new Proxy(clonedEvent, {
    get(target, prop) {if (prop === 'isTrusted') {return true;}return Reflect.get(target, prop);}});} catch (e) {BpNote(`Failed to clone event: ${e.message}`, 'error');return listener.call(this, event);}return listener.call(this, clonedEvent);};return originalAddEventListener.call(this, type, wrappedListener, options);};return sandbox;}
  function NoPrompts() {let timeoutInterval = 1000;unsafeWindow.onbeforeunload = null;timeoutInterval = (timeoutInterval + timeoutInterval) || 1000;setTimeout(NoPrompts, timeoutInterval);window.alert = () => {};window.confirm = () => true;window.prompt = () => null;if (window.Notification) {Notification.requestPermission = () => Promise.resolve('denied');Object.defineProperty(window, 'Notification', {value: null,writable: false});}if (document.readyState !== 'loading' && document.body) {
    bp('[class*="cookie"], [id*="cookie"], [class*="consent"], [id*="consent"], [class*="banner"], [id*="banner"], [class*="gdpr"], [id*="gdpr"], [class*="privacy"], [id*="privacy"], [role="dialog"], [aria-label*="cookie"], [aria-label*="consent"], [aria-label*="privacy"], [class*="notice"], [id*="notice"]',true).forEach(banner => {if (banner.textContent.match(/cookie|consent|tracking|gdpr|privacy|accept|agree|decline|manage|preferences/i)) {banner.style.display = 'none';banner.remove();}});}}
  function BoostTimers(targetDelay) {if (CloudPS(true, true, true)) return;const limits = {setTimeout: { max: 1, timeframe: 5000, count: 0, timestamp: 0 },setInterval: { max: 1, timeframe: 5000, count: 0, timestamp: 0 }};function canLog(type) {const restriction = limits[type];const currentTime = Date.now();
    if (currentTime - restriction.timestamp > restriction.timeframe) {restriction.count = 0;restriction.timestamp = currentTime;}if (++restriction.count <= restriction.max) {return true;}return false;}const wrapTimer = (orig, type) => (func, delay, ...args) => orig(func, (typeof delay === 'number' && delay >= targetDelay) ? (canLog(type) && BpNote(`[BoostTimers] Accelerated ${type} from ${delay}ms to ${targetDelay}ms`), 50) : delay, ...args);
    try {Object.defineProperties(unsafeWindow, {setTimeout: { value: wrapTimer(unsafeWindow.setTimeout, 'setTimeout'), writable: true, configurable: true },setInterval: { value: wrapTimer(unsafeWindow.setInterval, 'setInterval'), writable: true, configurable: true }});} catch (e) {const proxyTimer = (orig, type) => new Proxy(orig, {
            apply: (t, _, a) => t(a[0], (typeof a[1] === 'number' && a[1] >= targetDelay) ? (canLog(type) && BpNote(`[BoostTimers] Accelerated ${type} from ${a[1]}ms to ${targetDelay}ms`), 50) : a[1], ...a.slice(2))});unsafeWindow.setTimeout = proxyTimer(unsafeWindow.setTimeout, 'setTimeout');unsafeWindow.setInterval = proxyTimer(unsafeWindow.setInterval, 'setInterval');}}
  function AIORemover(action, target = null, attributes = null) {switch (action) {case 'removeRef':delete document.referrer;document.__defineGetter__('referrer', () => target || '');BpNote('Referrer removed or set to:', target || 'empty');break;case 'removeBp':if (!target) {BpNote('Selector is required for removeBp action.', 'error');return;}var elements = bp(target, true);elements.forEach(element => element.remove());BpNote(`Elements with selector "${target}" removed.`);break;
    case 'delCookie':if (!target) {BpNote('Cookie name is required for delCookie action.', 'error');return;}document.cookie = `${target}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;BpNote(`Cookie "${target}" deleted.`);break;case 'removeAttr':if (!target || !attributes) {BpNote('Selector and attributes are required for removeAttr action.', 'error');return;}var attrs = Array.isArray(attributes) ? attributes : [attributes];var validAttrs = ['onclick', 'class', 'target', 'id'];var invalidAttrs = attrs.filter(a => !validAttrs.includes(a));
    if (invalidAttrs.length) {BpNote(`Invalid attributes: ${invalidAttrs.join(', ')}`, 'error');return;}var attrElements = bp(target, true);if (!attrElements.length) {BpNote(`No elements found for selector "${target}"`, 'error');return;}attrElements.forEach(element => {attrs.forEach(attr => element.removeAttribute(attr));});BpNote(`Attributes ${attrs.join(', ')} Removed`);break;case 'noAdb':var blockPattern, allowedDomains = null;if (target instanceof RegExp) {blockPattern = target;} else if (target && target.blockPattern) {
    blockPattern = target.blockPattern;allowedDomains = target.allowedDomains || null;} else {BpNote('blockPattern is required for noAdb action.', 'error');return;}var currentDomain = window.location.hostname;if (allowedDomains && !allowedDomains.test(currentDomain)) {BpNote(`NoAdb: Domain ${currentDomain} not allowed.`, 'info');return;}var regAdb = new RegExp(blockPattern);new MutationObserver(mutations => {mutations.forEach(mutation => {mutation.addedNodes.forEach(node => {
    if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {const source = node.src || node.textContent || '';if (regAdb.test(source)) {node.remove();}}});});}).observe(document, {childList: true,subtree: true});bp('script, iframe', true).forEach(element => {const source = element.src || element.textContent || '';if (regAdb.test(source)) {element.remove();}});BpNote(`NoAdb: Initialized blocking for pattern "${blockPattern}".`);break;default: BpNote('Invalid action. Use Existing Cases', 'error');}}
  function DoIfExists(query, actionOrTime = 'click', timeInSecOrFuncName = 1, funcName = 'setTimeout') {let action = 'click';let time = 1;let timerFuncName = 'setTimeout';if (typeof actionOrTime === 'number') {time = actionOrTime;timerFuncName = typeof timeInSecOrFuncName === 'string' ? timeInSecOrFuncName : 'setTimeout';} else if (typeof actionOrTime === 'string') {action = actionOrTime;time = typeof timeInSecOrFuncName === 'number' ? timeInSecOrFuncName : 1;timerFuncName = typeof funcName === 'string' ? funcName : 'setTimeout';}
    function GetForm(FormName) {const forms = document.forms;for (let i = 0; i < forms.length; i++) {if (FormName === 'mdn') {const form = forms[i].innerHTML;if (form.includes('Step')) {return forms[i];}} else if (FormName === 'Allin1') {const bait = forms[i].action;if (/bypass.html|adblock.html/.test(bait)) continue;return forms[i];}}return null;}
    let element;if (query === 'mdn' || query === 'Allin1') {element = GetForm(query);} else {element = bp(query);}if (element) {if (typeof element[action] === 'function') {if (timerFuncName === 'setTimeout' || timerFuncName === 'setInterval') {const timerFunc = window[timerFuncName];if (timerFuncName === 'setTimeout') {timerFunc(() => {
    try {element[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);}}, time * 1000);} else if (timerFuncName === 'setInterval') {const intervalId = timerFunc(() => {try {if (elementExists(query)) {const currentElement = bp(query);currentElement[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');
    clearInterval(intervalId);}} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);clearInterval(intervalId);}}, time * 1000);BpNote(`Interval ID: ${intervalId}`);}} else {BpNote(`Timer tidak valid. Gunakan "setTimeout" atau "setInterval".`,'error');}} else {BpNote(`Elemen "${query}" tidak memiliki metode "${action}".`,'error');}} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');}}
  function BypassedByBloggerPemula(match, exclude, data, url = '', blog = false, all = false) {if (CloudPS()) return;if (typeof exclude === 'function') {data = exclude;exclude = null;url = '';blog = false;all = false;}if (!new RegExp(match).test(location.host)) return;if (exclude && new RegExp(exclude).test(location.host)) {BpNote(`Domain ${location.host} Excluded`, 'info');return;}if (typeof data === 'function') {try {data();} catch (e) {BpNote(`Error executing function data: ${e.message}`, 'error');}return;}
    if (typeof data === 'string') {const params = data.split(',');if (params.every(p => BpParams.has(p.replace(/\+[0-9]+/, '')))) {const use = params[0];let value = all ? BpParams.getAll(use.replace(/\+[0-9]+/, '')).find(u => new RegExp(match).test(u)) : BpParams.get(use.replace(/\+[0-9]+/, ''));if (!value || value.includes('st?')) {value = extractFlexibleUrl(use);}if (value) redirect(url + value, blog);} else {const value = extractFlexibleUrl(data);if (value) redirect(url + value, blog);}return;}let dataObj = data;
    if (Array.isArray(data)) {dataObj = {'/': data};}if (typeof dataObj !== 'object' || dataObj === null) {BpNote('Invalid data type: data must be a function, string, array, or object', 'error');return;}if (!(location.pathname in dataObj)) {BpNote(`Pathname ${location.pathname} not found in data`, 'info');return;}const [key, value] = dataObj[location.pathname];let finalValue = '';if (typeof key === 'object' && key.test(location.search)) {finalValue = value + RegExp.$1;} else if (BpParams.has(key)) {finalValue = value + BpParams.get(key);} else {finalValue = extractFlexibleUrl('url');}
    if (finalValue) redirect(url + finalValue, blog);function extractFlexibleUrl(dataString) {const currentUrl = window.location.href;const urlParams = currentUrl.split('&url=');if (urlParams.length < 2) {BpNote('Not enough URL parameters to extract', 'warn');return null;}let partsToTake = 1;if (dataString.match(/url\+(\d+)/)) {partsToTake = parseInt(dataString.match(/url\+(\d+)/)[1]);}if (partsToTake > urlParams.length - 1) {BpNote(`Requested parts (${partsToTake}) exceed available URL parameters (${urlParams.length - 1})`, 'warn');partsToTake = urlParams.length - 1;}let extractedUrl = '';
    if (partsToTake === 1) {extractedUrl = urlParams[urlParams.length - 1];} else {const startIndex = urlParams.length - partsToTake;extractedUrl = urlParams.slice(startIndex).join('&url=');}try {extractedUrl = decodeURIComponent(extractedUrl);} catch (e) {BpNote('Error decoding extracted URL: ' + e, 'error');}return extractedUrl;}}
  function BlockPopup() {const window = unsafeWindow;const originalOpen = window.open;function createNotification(url, callback) {const div = document.createElement('div');div.className = 'popup-notification';const shadow = div.attachShadow({mode: 'open'});
      shadow.innerHTML = `<style>:host { position: fixed; top: 15px; right: 15px; z-index: 9999; font-family: Arial, sans-serif; }.popup { background: #fff; border: 2px solid #333; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); max-width: 350px; border-radius: 5px; }.title { font: bold 16px Arial; color: #000; margin-bottom: 10px; padding-right: 20px; position: relative; }.url { font-size: 14px; color: #222; word-break: break-all; background: #f5f5f5; padding: 8px; border-radius: 3px; margin-bottom: 15px; }.buttons { display: flex; gap: 10px; }
      button { font: bold 14px Arial; padding: 8px 15px; cursor: pointer; border: none; border-radius: 3px; transition: background 0.2s; }.allow { background: #4CAF50; color: #fff; } .allow:hover { background: #45a049; }.block { background: #f44336; color: #fff; } .block:hover { background: #da190b; }.whitelist { background: #2196F3; color: #fff; opacity: 0.6; cursor: not-allowed; }.reload { background: #FFC107; color: #000; } .reload:hover { background: #FFB300; }.close { position: absolute; top: 0; right: 0; background: none; border: none; font-size: 16px; cursor: pointer; color: #333; }.close:hover { color: #f44336; }
      </style><div class="popup"><div class="title">Popup Request<button class="close">✕</button></div><div class="url">${url || 'about:blank'}</div><div class="buttons"><button class="allow">Open</button><button class="whitelist" title="Sementara Belum Bisa di Gunakan">Whitelist</button><button class="block">Block</button><button class="reload">Reload</button></div></div>`;const remove = () => div.remove();shadow.querySelector(['.al','low'].join('')).onclick = () => {callback(true);remove();};shadow.querySelector(['.blo','ck'].join('')).onclick = () => {callback(false);remove();};shadow.querySelector(['.rel','oad'].join('')).onclick = () => {window.location.reload();remove();};
      shadow.querySelector(['.cl','ose'].join('')).onclick = () => {callback(false);remove();};bp(['.p','opup','-no','ti','fica','tion'].join(''))?.remove();document.body.appendChild(div);}window.open = (url, name, features) => new Promise(resolve => createNotification(url, shouldOpen => resolve(shouldOpen ? originalOpen(url, name, features) : (BpNote(`Blocked popup to: ${url}`), null))));document.addEventListener('click', e => {const target = e.target;if (target.tagName === 'A' && target.target === '_blank' && target.href) {e.preventDefault();createNotification(target.href, shouldOpen => shouldOpen ? originalOpen(target.href) : BpNote(`Blocked onclick popup to: ${target.href}`));}}, true);
      document.addEventListener('submit', e => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();createNotification(form.action, shouldOpen => shouldOpen ? originalOpen(form.action) : BpNote(`Blocked form popup to: ${form.action}`));}}, true);}

  BypassedByBloggerPemula(/(bitwidgets|virtuous-tech|coinilium|adwarden).net|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly|multimix).site|(newsminer|adwyn|coderun).uno|wii.si|(cryptics|uiio|kiit|liln|dailynewshub|nanolink).fun|cryptorealm.online/, () => {
    TrustMe();const OriginalMutationObserver = window.MutationObserver;window.MutationObserver = function(callback) {const stack = new Error().stack;if (/monitorSuspiciousAttributes/.test(stack)) {return { observe: () => {}, disconnect: () => {} };} return new OriginalMutationObserver(callback);};window.MutationObserver.prototype = OriginalMutationObserver.prototype;});
  BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, () => {Object.defineProperty(document, 'hidden', {value: false,writable: false});Object.defineProperty(document, 'visibilityState', {value: 'visible',writable: false});document.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);const waitForEl = (sel, cb, t = 1e4) => {const start = Date.now();const check = () => {const elm = bp(sel);if (elm) return cb(elm);if (Date.now() - start > t) BpNote(`Timeout: ${sel}`, 'warn'); else setTimeout(check, 500);}; setTimeout(check, 1e3);};
    const addDownloadButton = () => waitForEl('ytd-subscribe-button-renderer', elm => {if (bp(['#dl-','bp-b','utt','on'].join(''))) return;elm.parentElement.style.cssText = 'display: flex; align-items: center; gap: 8px';elm.insertAdjacentHTML('afterend', '<button id="dl-bp-button" style="background: #ff0000; color: white; border: none; padding: 8px 12px; border-radius: 2px; cursor: pointer; font-size: 13px; line-height: 18px;">DL BP</button>');bp(['#dl','-bp','-but','to','n'].join('')).addEventListener('click', showDownloadDialog);});const showDownloadDialog = () => {if (bp(['#dl-','bp','-di','al','og'].join(''))) return;
    const dialog = document.createElement('div');dialog.id = 'dl-bp-dialog';const shadow = dialog.attachShadow({mode: 'open'});shadow.innerHTML = `<style>.dialog { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.3); z-index: 1000; width: 90%; max-width: 400px; text-align: center; }.input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; }.btns { display: flex; gap: 10px; justify-content: center; }
    .btn { background: #ff0000; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px; }.btn:hover { background: #cc0000; }.close { position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 20px; }</style><div class="dialog"><span class="close">X</span><h3>Download YouTube Video or Audio</h3><input class="input" type="text" value="${location.href}"><div class="btns"><button class="btn" id="video-btn">Video</button><button class="btn" id="audio-btn">Audio</button></div></div>`;
    document.body.appendChild(dialog);shadow.querySelector(['.c','lose'].join('')).addEventListener('click', () => dialog.remove());shadow.querySelector(['#v','ide','o-b','tn'].join('')).addEventListener('click', () => startDownload(shadow.querySelector(['.i','nput'].join('')).value, 'video') && dialog.remove());shadow.querySelector(['#aud','io','-b','tn'].join('')).addEventListener('click', () => startDownload(shadow.querySelector(['.inp','ut'].join('')).value, 'audio') && dialog.remove());};const startDownload = (url, type) => {const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/shorts/')[1]?.split('?')[0];
    if (!videoId) return BpNote('Invalid video ID', 'warn');const downloadUrl = type === 'video' ? `https:
    if (cfg.get('YTShort')) {const bypassShorts = () => {if (!location.pathname.startsWith('/shorts')) return;const vidId = location.pathname.split('/')[2];if (vidId) window.location.replace(`https:
  BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;const features = [{key: 'Adblock',action: () => AIORemover('noAdb', /adblock|AdbModel|AdblockReg|AntiAdblock|blockAdBlock|checkAdBlock|detectAnyAdb|detectAdBlock|justDetectAdb|FuckAdBlock|TestAdBlock|DisableDevtool|devtools/),log: 'Adblock Feature'}, {
    key: 'Prompt',action: () => {const runNoPrompts = () => NoPrompts();if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', runNoPrompts, {once: true});} else {runNoPrompts();}new MutationObserver(runNoPrompts).observe(document, {childList: true,subtree: true});},
    log: 'Disable Prompts & Notifications'}, {key: 'SameTab',action: SameTab,log: 'SameTab'},{key: 'TimerFC',action: () => BoostTimers(cfg.get('TDelay')),log: 'Fast Timer'}, {key: 'AntiDebug',action: DebugLog,log: 'Anti-Debug'}, {key: 'BlockFC',action: NoFocus,log: 'Focus Control'}, {key: 'RightFC',action: EnableRCF,log: 'Right Click Control'}, {key: 'BlockPop',
    action: BlockPopup,log: 'Popup Blocker'}];const activated = features.filter(({key}) => cfg.get(key)).map(({action,log}) => {action();return log;});if (activated.length) {BpNote(`Activated Features: ${activated.join(', ')}`, 'info');}});

    BypassedByBloggerPemula(/vplink\.in|techmint\.in/, () => {
      if (location.host.includes(['tec','hmin','t.in'].join(''))) {
        const btn = bp(['#bt','n-m','ai','n'].join('')) || bp(['#go','tol','ink'].join('')) || bp([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join('')) || bp('button.btn-primary');
        if (btn) btn.click();
        const next = bp('a[href*="techmint.in/studyinsurances/"]');
        if (next && next.href) redirect(next.href);
      } else {
        const l = bp('a.get-link:not([disabled])') || bp([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
        if (l && l.href && !l.href.includes('javascript')) redirect(l.href);
        else DoIfExists([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
      }
    });

    BypassedByBloggerPemula(/cloudfam\.io|get\.cloudfam\.io/, () => {
      setInterval(() => {
        bp('div,section,aside,dialog', true).forEach(el => {
          const st = window.getComputedStyle(el);
          const txt = (el.innerText || '').toLowerCase();
          if ((txt.includes('ad blocker') || txt.includes('adblock') || txt.includes('verification queue')) &&
              st.position === 'fixed' && (parseInt(st.zIndex) || 0) > 99) {
            el.style.setProperty('display', 'none', 'important');
            if (document.body) document.body.style.removeProperty('overflow');
          }
        });
        bp('#countdown, .seconds, [id*="timer"]', true).forEach(el => {
          if (/^\d+$/.test(el.textContent.trim())) el.textContent = '0';
        });
        const dl = bp('a[href*="redirection0.php"]') || bp('a[href*="redirection"]') || bp([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
        if (dl && dl.href && !dl.href.includes('javascript')) {
          redirect(dl.href);
        }
      }, 500);
    });

    BypassedByBloggerPemula(/psa\.wf/, () => {
try{void(window.performance&&window.performance.now());}catch(_x){}
      try { window.adblock = false; window.isAdBlocked = false; window.adBlockDetected = false; } catch(e) {}
      if (location.pathname.startsWith('/goto/')) {
        const doForm = () => {
          const f = document.forms?.redirect || document.forms?.[0];
          if (f) { try { f.submit(); return true; } catch(e) {} }
          return false;
        };
        if (!doForm()) {
          document.addEventListener('DOMContentLoaded', doForm, { once: true });
          setTimeout(doForm, 800);
        }
      }
    });

  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
    switch (h.host) {
      if (isNotifyNeeded) {notify(`Redirecting...`);}setTimeout(() => {location.href = link;}, redirectDelay * 1000);}
    BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {let $ = unsafeWindow.jQuery;const url = window.location.href;if (url.includes('go/')) {notify('Reload the Page , if the Copied Key is Different', false, true);sleep(1000).then(() => {const link = bp('p.mb-2:nth-child(2) > strong > a');
      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(document.getElementsByTagName('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));
      if (p) sleep(1000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https:
      if ([['gee','kgro','ve.','net'].join(''), ['vit','alit','yv','is','ta.','ne','t'].join(''), 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);ReadytoClick(['#b','tnL','in','kS','tar','t'].join(''), 2);CaptchaDone(() => {ReadytoClick(['#btn','Link','Con','tin','ue'].join(''));});CheckVisibility(['#btn','Lin','kCo','nt','in','ue'].join(''), () => {if (!elementExists(['.ic','on','cap','tc','ha-m','od','al'].join(''))) {ReadytoClick(['#bt','nL','inkC','onti','nue'].join(''));} else {ReadytoClick(['.i','conc','ap','tcha','-mo','dal','__','bod','y'].join(''));}});
      CheckVisibility(['.al','er','t-s','ucc','ess','.ale','rt-','in','li','ne.a','lert'].join(''), () => {ReadytoClick(['#btn','Lp','cont'].join(''));});sleep(1000).then(() => {const input = bp(['#li','nkI','npu','t.fo','rm-','con','tr','ol'].join(''));if (input) {input.value = GM_getValue('lastKey', '');sleep(1000).then(() => bp(['.bt','n-pr','ima','ry.b','tn-','rip','pl','e'].join(''))?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp(['.lin','k_','cod','e'].join(''));
      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});
    BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;let List = [['lo','ptea','pi.','com'].join(''), '3link.co', ['ex','eyg','o.','co','m'].join(''), 'vuotlink.vip'], $ = unsafeWindow.jQuery;if (elementExists('form[id=go-link]') && List.includes(location.host)) {ReadytoClick("a.btn.btn-success.btn-lg.get-link:not([disabled])", 3);} else if (elementExists('form[id=go-link]')){$('form[id=go-link]').off('submit').on('submit', function(e) {e.preventDefault();
      let form = $(this),url = form.attr('action'),pesan = form.find('button'),notforsale = $(".navbar-collapse.collapse"),blogger = $(".main-header"),pemula = $(".col-sm-6.hidden-xs");$.ajax({type: "POST",url: url,data: form.serialize(),dataType: 'json',beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join('')).text('Link Bypassed');
      let btn = '<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Bypass Shortlinks</b></button>';notforsale.replaceWith(btn);blogger.replaceWith(btn);pemula.replaceWith(btn);},success: function(result, status, xhr) {let finalUrl = result.url;if (finalUrl.includes(['sw','ift','cu','t.','xyz'].join(''))) {
      finalUrl = finalUrl.replace(/[?&]i=[^&]*/g, '').replace(/[?]&/, '?').replace(/&&/, '&').replace(/[?&]$/, '');location.href = finalUrl;} else if (xhr.responseText.match(/(a-s-cracks.top|mdiskshortner.link|exashorts.fun|bigbtc.win|slink.bid|clockads.in)/)) {location.href = finalUrl;} else {redirect(finalUrl);}},error: function(xhr, status, error) {BpNote(`AJAX request failed: ${status} - ${error}`, 'error');}});});}});
    BypassedByBloggerPemula(/flickr.com/, () => {if (!cfg.get('Flickr')) return;function createDownloadLinks() {const finalizeContainer = (container, sizesLink) => {if (!container.children.length) return;const parent = sizesLink.parentElement;if (parent) {parent.insertBefore(container, sizesLink);} else {document.body.appendChild(container);}BpNote('The Image is Ready to Save', 'info');};
      waitForElm('a[href*="/sizes/"]', sizesLink => {if (!sizesLink) return BpNote('View all sizes link not found', 'error');GM_xmlhttpRequest({method: 'GET',url: sizesLink.href,onload: response => {try {const sizesDoc = new DOMParser().parseFromString(response.responseText, 'text/html');const sizeItems = sizesDoc.querySelectorAll('.sizes-list li ol li');if (!sizeItems.length) return BpNote('No size items found', 'warn');
      const container = document.createElement('div');container.style.cssText = 'background:white;border:1px solid #ccc;padding:10px;z-index:1000;margin-bottom:5px;position:relative';const header = document.createElement('div');header.textContent = 'Bloggerpemula Script';header.style.cssText = 'text-align:center;font-weight:bold;margin-bottom:0px;color:#333';container.appendChild(header);
      const closeButton = document.createElement('button');closeButton.textContent = 'X';closeButton.style.cssText = 'position:absolute;top:0px;right:0px;background:none;border:none;font-size:14px;cursor:pointer;color:#333';closeButton.onclick = () => container.remove();container.appendChild(closeButton);let processed = 0;sizeItems.forEach(item => {const sizeLink = item.querySelector('a');
      const sizeText = sizeLink ? sizeLink.textContent.trim() : item.textContent.trim();const sizeName = `${sizeText} ${item.querySelector('small')?.textContent.trim() || ''}`;const sizeUrl = sizeLink?.href;if (!sizeUrl) {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);return;}GM_xmlhttpRequest({method: 'GET',url: sizeUrl,onload: sizeResponse => {try {const sizeDoc = new DOMParser().parseFromString(sizeResponse.responseText, 'text/html');
      const img = sizeDoc.querySelector('#allsizes-photo img[src]');if (!img) return;const saveLink = document.createElement('a');saveLink.href = img.src;saveLink.textContent = `Save ${sizeName}`;saveLink.style.cssText = 'display:block;margin:5px 0';saveLink.onclick = e => {e.preventDefault();GM_openInTab(img.src, {active: true});};container.appendChild(saveLink);} catch (e) {}processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);},
      onerror: () => {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);}});});} catch (e) {BpNote(`Error processing sizes page: ${e.message}`, 'error');}},onerror: () => BpNote('Failed to fetch sizes page', 'error')});});}if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', createDownloadLinks, {once: true});} else {createDownloadLinks();}});
    BypassedByBloggerPemula(/bigbtc.win/, () => {CaptchaDone(() => {DoIfExists(['#cl','aim','butn'].join(''));});
      if (location.href.includes('/bonus')) {DoIfExists(['#cli','ckhe','re'].join(''), 3);}});
    BypassedByBloggerPemula('(bitwidgets|virtuous-tech|coinilium|adwarden).net|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly|multimix).site|(newsminer|adwyn|coderun).uno|wii.si|(cryptics|uiio|kiit|liln|dailynewshub|nanolink).fun|cryptorealm.online', () => {
      CheckVisibility('*:contains("Failed! Please reload")', () => {sleep(1000).then(() => {window.location.reload();});});let $ = unsafeWindow.jQuery;elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {fakeHidden();});CheckVisibility('*:contains("Verified")', () => {const findVerify = () => Array.from(bp('*',true)).find(el => el.textContent.trim() === 'Continue' || 'Verify');const verifyElement = findVerify();if (verifyElement) {setTimeout(() => {$('*[type="button"]:contains("Continue")').click();$('*[type="button"]:contains("Verify")').click();}, 1000);}});const tano = window.location.href;if (['dailytech-news.eu', 'wii.si', 'bubblix.eu', ['bit','wi','dge','ts','.n','et'].join(''), 'virtuous-tech.net', ['ca','rfo','cus.','sit','e'].join(''), ['mu','lti','mi','x.s','ite'].join(''), 'coderun.uno', 'newsminer.uno', 'cryptics.fun',['coin','iliu','m.','net'].join(''),'uiio.fun','nanolink.fun',['adw','ard','en.','net'].join(''),'adwyn.uno',['bi','it.s','ite'].join(''),['cryp','tore','alm','.onl','in','e'].join(''),'dailynewshub.fun','kiit.fun','liln.fun'].some(tino => tano.includes(tino))) {
      CheckVisibility(['#cap','tcha','-con','tain','er'].join(''), '&&', "bp(['.mb-','2'].join('')).innerText == 'Verified'", () => ReadytoClick('button:contains("Verify")', 2));elementReady('#loadingDiv[style*="display:block"] button, #loadingDiv[style*="display: block"] button').then(ReadytoClick.bind(this, 'button', 2));elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});} else {CheckVisibility('text:contains("To Start")', () => {const textElement = bp('text:contains("To Start")');const buttonText = textElement.textContent.match(/Click\s+(\w+)\s+To Start/i)?.[1];if (!buttonText) return;const findButton = () => {const elements = bp('*',true);
      for (const el of elements) {if (el.textContent.trim() === buttonText) return el;}return null;};let buttonElement = findButton();if (buttonElement) {setTimeout(() => {$(buttonElement).click();}, 2000);}});}});

    }})();

(function() {
    'use strict';

    if (/acortalink.me/.test(window.location.href)) {

        window.addEventListener('load', function() {
            const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
            popupsToRedirects();

            let button = document.querySelector(['#con','tad','or'].join(''));
            if (button) {
                button.click();
            }
        })

        window.addEventListener("message", (e => {
            e?.data?.includes("__done__") && e?.data?.length < 9 && Object.defineProperty(e, "source", {
                value: ""
            })
        }), !0);
        const e = new MutationObserver((() => {
            document.querySelector("a.button#contador") && (e.disconnect(), setTimeout((() => {
                postMessage("__done__")
            }), 100))
        }));
        e.observe(document, {
            childList: !0,
            subtree: !0
        })

    }

})();

(function() {
    'use strict';
    const admavenRegex = /^https:\/\/((bleleadersto|tonordersitye|daughablelea|mdlinkshub).com)\/s\?(?!.*f933e7ff).*$/;
    const linkvertiseRegex = /^https:\/\/linkvertise\.com\/.+$/;
    const lootlinkRegex = /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/

    const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : window.location.assign(finalUrl);

    if (linkvertiseRegex.test(window.location.href) && window.location.search.includes('r=')) {
        const rParam = new URLSearchParams(window.location.search).get('r');
        if (rParam) {redirect(atob(rParam));};

    } else if (admavenRegex.test(window.location.href) || linkvertiseRegex.test(window.location.href) || lootlinkRegex.test(window.location.href)) {
        redirect(`https:
    }
})();

(function() {
    'use strict';

    if (/bstlar.com/.test(window.location.href)) {

        function getCookie(name) {
            let value = '; ' + document.cookie;
            let parts = value.split('; ' + name + '=');
try{void(window.location&&window.location.protocol);}catch(_x){}
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        async function handleRedirect(data) {
            if (data.currentTarget?.responseText?.includes('tasks')) {
                const response = JSON.parse(data.currentTarget.responseText);
                const userAgent = navigator.userAgent;
                const XSRF_TOKEN = getCookie('XSRF-TOKEN');
                const boostellar_session = getCookie('boostellar_session');
                const PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud = getCookie('PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud');
                const cf_clearance = getCookie('cf_clearance');
                const task_request = await fetch('https:
                    method: 'POST',
                    headers: {
                        accept: 'application/json, text/plain, *
!function(){var _n=navigator.userAgent.length;void(_n);}();
function showAlert(message, type = 'info', duration = 1000, prefix = 'Bypass script: ', position = 'primary') {

    const alertDiv = document.createElement('div');

    alertDiv.style.position = 'fixed';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.zIndex = '9999';
    alertDiv.style.padding = '10px 20px';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.fontFamily = 'Arial, sans-serif';
    alertDiv.style.fontSize = '14px';
    alertDiv.style.maxWidth = '80%';
    alertDiv.style.transition = 'opacity 0.5s';

    if (position === 'secondary') {
        alertDiv.style.top = '60px';
        alertDiv.dataset.position = 'secondary';
    } else {
        alertDiv.style.top = '10px';
        alertDiv.dataset.position = 'primary';
    }

    switch(type) {
        case 'success':
            alertDiv.style.backgroundColor = '#4CAF50';
            alertDiv.style.color = 'white';
var _bspT=Date.now();void(_bspT>0);
            prefix = '✅ ' + prefix + ':';
            break;
        case 'error':
            alertDiv.style.backgroundColor = ['#F44','336'].join('');
            alertDiv.style.color = 'white';
            prefix = '❌ ' + prefix + ':';
            break;
        case 'warning':
            alertDiv.style.backgroundColor = ['#F','F980','0'].join('');
            alertDiv.style.color = 'white';
            prefix = '⚠️ ' + prefix + ':';
            break;
        default:
            alertDiv.style.backgroundColor = '#2196F3';
            alertDiv.style.color = 'white';
            prefix = 'ℹ️ ' + prefix + ':';
    }

    alertDiv.textContent = prefix + ' ' + message;

    const clearExistingAlert = () => {
        const existingAlerts = document.querySelectorAll(`div[data-position="${position}"]`);
        existingAlerts.forEach(alert => {
            if (alert.parentNode) {
                alert.style.opacity = '0';
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.parentNode.removeChild(alert);
                    }
                }, 300);
            }
        });
    };

    if (document.body) {
        clearExistingAlert();
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.parentNode.removeChild(alertDiv);
                }
            }, 500);
        }, duration);
    } else {

        document.addEventListener('DOMContentLoaded', () => {
            clearExistingAlert();
            document.body.appendChild(alertDiv);

            setTimeout(() => {
                alertDiv.style.opacity = '0';
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.parentNode.removeChild(alertDiv);
                    }
                }, 500);
            }, duration);
        });
    }

}

showAlert("running...");

function redirectWithMessage(url) {
    showAlert("Redirecting to " + url, 'success', 3000, '', 'secondary');
    setTimeout(function() {window.location.assign(url);}, 1000);
}

(function() {
    "use strict";

    const domainRegex = /(actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja|djbassking|telefonzilsesi|csyildizi|verli|thejessiek|fabriksite|mealold|nameortho|ebanglapro|gyoblog|zulgame|arabe-tech|mclox|anlikgb|yogatrick|barlianta|desimonthdate|jobpagol|cararabic|esladvice).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop|nidbd.me|postalcode.com.pk|teknoventure|stellar\.|echo\.|halo\./
    if (domainRegex.test(window.location.href)) {
        const e = unsafeWindow.location.href.includes("/posts/"),
            t = [...document.querySelectorAll("style")].some((e => e.textContent.includes("card-container"))),
            s = [...document.scripts].some((e => e.src.startsWith("https:
        e && t && s && (! function() {
            const e = new MutationObserver((() => {
                const t = document.getElementById("delulu-overlay");
                t && (t.style.display = "none", e.disconnect())
            }));
            e.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }(), function() {
            const e = [...document.querySelectorAll(['[class^="btn-"]', '[src*="/recaptcha/"]', "#captcha-container", "#click", "#redirect-link", "#switchCaptcha", "#debugStatus"].join(","))],
                t = new Set;
            e.forEach((e => {
                t.add(e);
                let n = e.parentElement;
                for (; n;) t.add(n), n = n.parentElement;
                e.querySelectorAll("*").forEach((e => t.add(e)))
            })), [...document.querySelectorAll("*")].forEach((e => {
                t.has(e) || (e.style.display = "none")
            }))
        }(), unsafeWindow.dispatchEvent(new Event("scroll")), function() {
            const e = document.querySelector('button[class*="btn-"]'),
                t = new MutationObserver((() => {
                    if (!e) return;
                    const n = getComputedStyle(e.parentElement.parentElement).display;
                    e.disabled || "none" === n || (e.click(), t.disconnect())
                }));
            t.observe(document.body, {
                childList: !0,
                subtree: !0
            }), e && t.observe(e, {
                attributes: !0,
                attributeFilter: ["disabled"]
            })
        }(), function() {
            for (let e = 0; e < 3; e++) {
                const t = "mustClickAd" + e;
                "1" === sessionStorage.getItem(t) && (sessionStorage.setItem(t, "0"), unsafeWindow.location.replace(unsafeWindow.location.href)), sessionStorage.setItem(t, "0")
            }
!function(){var _m=Math.round;void(_m);}();
        }(), setTimeout((() => {
            const e = document.querySelector('button[class*="btn-"]');
            e && (e.parentElement.parentElement.style.display = "block")
        }), 1e4))
    }
})();

(function () {
    'use strict';

    var _p8 = window.location.hostname;
    var _p9  = window.location.href;
    var _pa = window.location.pathname;
    var _pb   = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

    var _json = function(s) { try { return JSON.parse(s); } catch (_e) { return null; } };

    var _pm = function(obj, excl) {
        if (!obj || typeof obj !== 'object') return null;
        var keys = ['url','destination','dest','redirect','link','target',
                    'href','data','result','response','goto','final','location','to','out'];
        for (var i = 0; i < keys.length; i++) {
            var v = obj[keys[i]];
            if (typeof v === 'string' && v.indexOf('http') === 0) {
                if (!excl || !excl.some(function(h){return v.indexOf(h) !== -1;})) return v;
            }
            if (v && typeof v === 'object') {
                var inner = _pm(v, excl);
                if (inner) return inner;
            }
        }
        return null;
    };

    var _p0 = (function() {
        var _get = function(k,d){try{return GM_getValue(k,d);}catch(_e){return d;}};
        var _set = function(k,v){try{GM_setValue(k,v);}catch(_e){}};
        var _auto = _get('bsp_auto', false);
        var _mid;

        var _p19 = function(msg) {
            var t = document.createElement('div');
            t.style.cssText = 'position:fixed;bottom:60px;left:50%;transform:translateX(-50%);' +
                'background:#1a1a2e;color:#e0e0e0;padding:9px 20px;border-radius:20px;' +
                'font:13px/1.4 sans-serif;z-index:2147483647;pointer-events:none;' +
                'box-shadow:0 4px 18px rgba(0,0,0,.55);white-space:nowrap;transition:opacity .4s;';
            t.textContent = msg;
            if (document.body) document.body.appendChild(t);
            setTimeout(function(){t.style.opacity='0';}, 1800);
            setTimeout(function(){try{t.remove();}catch(_e){}}, 2300);
        };

        var _updateMenu = function() {
            if (_mid !== undefined) { try{GM_unregisterMenuCommand(_mid);}catch(_e){} }
            try {
                _mid = GM_registerMenuCommand(
                    _auto ? '🟢 Auto-Redirect: ON  — click to disable'
                          : '🔴 Auto-Redirect: OFF — click to enable',
                    function() {
                        _auto = !_auto;
                        _set('bsp_auto', _auto);
                        _updateMenu();
                        _p19(_auto ? '⚡ Auto' : '🖐 Manual');
                    }
                );
            } catch(_e) {}
        };

        var showProceedBtn = function(badge, onGo) {
            if (!badge) return;
            var btn = document.createElement('button');
            btn.textContent = 'Proceed →';
            btn.style.cssText = 'background:#4caf50;color:#fff;border:none;padding:5px 14px;' +
                'border-radius:14px;font:600 13px/1 sans-serif;cursor:pointer;' +
                'pointer-events:all;margin-left:10px;vertical-align:middle;';
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                btn.remove();
                if (onGo) onGo();
            });
            badge.style.pointerEvents = 'none';
            btn.style.pointerEvents   = 'all';
            badge.appendChild(btn);
        };

        _updateMenu();
        return { autoMode: function(){return _auto;}, showProceedBtn: showProceedBtn };
    })();

    var _p3 = (function() {
        var _setRO = function(name, value) {
            try {
                Object.defineProperty(window, name,
                    {value:value, configurable:false, writable:false, enumerable:false});
            } catch(_e) { try{window[name]=value;}catch(_e2){} }
        };

        var _inject = function(code) {
            var s = document.createElement('script');
            s.textContent = '(function(){"use strict";' + code + '})();';
            (document.head || document.documentElement || document.body).appendChild(s);
            try{s.remove();}catch(_e){}
        };

        var _pr = function() {
            ['adBlockActive','AdBlockActive','adblock','isAdBlocked','adBlockDetected',
             'AdBlockDetected','adbDetected','hasAdBlocker','adBlockEnabled','blockAdBlock',
             'ab_detected','ad_block_detected','adblock_detected']
            .forEach(function(k){_setRO(k,false);});
            ['canRunAds','adsAllowed','adAllowed','adsEnabled','killads','canRun',
             'RunAds','adsLoaded','allowads','OAS_rdl']
            .forEach(function(k){_setRO(k,true);});
            if (typeof window.adsbygoogle === 'undefined')
                window.adsbygoogle = {loaded:true, push:function(o){return o;}};
        };

        var _ps = function() {
            _inject([
                'var _F=function(){var self=this,_nd=null;',
                'this.onDetected=function(){return this;};',
                'this.onNotDetected=function(cb){_nd=cb;try{setTimeout(cb,1);}catch(_){}return this;};',
try{void(Object.keys&&Object.keys({}).length===0);}catch(_x){}
                'this.on=function(det,cb){if(!det&&cb){try{setTimeout(cb,1);}catch(_){}}return this;};',
                'this.check=function(){if(_nd){try{_nd();}catch(_){}}return this;};',
                'this.setOption=function(){return this;};',
                'this.emitEvent=function(){return this;};',
                'this.clearEvent=function(){return this;};',
                'this.debug={set:function(){return self;},get:function(){return false;}};',
                'this.options={set:function(){return this;},get:function(){return this;}};};',
                '["FuckAdBlock","BlockAdBlock","SniffAdBlock","AdBlockHelper","AdBlockDetector",',
                '"AAB","AdBlockerDetector","betteradBlocker"].forEach(function(n){',
                'try{Object.defineProperty(window,n,{value:new _F(),writable:false,',
                'configurable:false,enumerable:false});}catch(_){try{window[n]=new _F();}catch(_){}}',
                '});try{window.fuckAdBlock=new _F();}catch(_){}'
            ].join(''));
        };

        var _pt = function() {
            var BAIT = ['adsbygoogle','adsbox','doubleclick','ad-placement',
                        'ad-slot','banner-ads','ad-banner','advertisement',
try{void(window.location&&window.location.protocol);}catch(_x){}
                        'ads-container','ads-box','afs_ads'];
            var _isBait = function(el) {
                var s = ((el.className||'')+' '+(el.id||'')).toLowerCase();
                return BAIT.some(function(t){return s.indexOf(t)!==-1;});
            };
            var _origGBCR = Element.prototype.getBoundingClientRect;
            Element.prototype.getBoundingClientRect = function() {
                var r = _origGBCR.call(this);
                if ((r.height===0||r.width===0) && _isBait(this))
                    return Object.assign({},r,{height:1,width:1,bottom:1,right:1});
                return r;
            };
            var _d = Object.getOwnPropertyDescriptor(HTMLElement.prototype,'offsetHeight');
            if (_d && _d.get) {
                Object.defineProperty(HTMLElement.prototype,'offsetHeight',{
                    get:function(){var v=_d.get.call(this);return(v===0&&_isBait(this))?1:v;},
                    configurable:true,
                });
            }
        };

        var _pu = function() {
            var PAT = [/blockadblock/i,/fuckadblock/i,/detectadblock/i,/antiblock/i];
            var _orig = Element.prototype.setAttribute;
            Element.prototype.setAttribute = function(n,v) {
                if (n==='src' && this.tagName==='SCRIPT' && PAT.some(function(p){return p.test(v);}))
                    return _orig.call(this, n, 'data:text/javascript,');
                return _orig.call(this, n, v);
            };
        };

        var _pv = function() {
            var PAT = [/blockadblock/i,/fuckadblock/i,/detectadblock/i,/adblockdetect/i];
            var _bad = function(url){return url && PAT.some(function(p){return p.test(String(url));});};
            var _oF = window.fetch;
            window.fetch = function() {
                if (_bad(arguments[0])) return Promise.resolve(new Response('',{status:200}));
                return _oF.apply(this, arguments);
            };
            var _oO = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(m, url) {
                if (_bad(url)) this._aabBlocked = true;
                this._reqUrl = url;
                return _oO.apply(this, arguments);
            };
            var _oS = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = function() {
                if (this._aabBlocked) return;
                return _oS.apply(this, arguments);
            };
        };

        var _pw = function() {
            var _oWO = window.open;
            window.open = function(url) {
                if (!url || url === '' || url === 'about:blank') return null;
                if (!url.startsWith(window.location.origin)) return null;
                return _oWO.apply(this, arguments);
            };
        };

        var _TEXT = [/ad.?block/i,/disable.*ad/i,/turn off.*ad/i,/please.*whitelist/i,
                     /disable your blocker/i,/detected.*block/i,/blocker.*detected/i,
                     /your adblocker/i,/adblock.*detected/i];
        var _ATTR = /adblock|ad.block|ad_block|no.?ads|blocker|anti.?ad/i;

        var _p10 = function(el) {
            if (!el || el.nodeType !== 1) return false;
            var id = el.id||'', cls = typeof el.className === 'string' ? el.className : '';
            if (_ATTR.test(id) || _ATTR.test(cls)) {
                var st = window.getComputedStyle(el);
                if (/(fixed|absolute)/.test(st.position) && (parseInt(st.zIndex)||0) > 99) return true;
            }
            var text = (el.innerText||'').trim();
            if (text.length > 0 && text.length < 800 && _TEXT.some(function(p){return p.test(text);})) {
                var st2 = window.getComputedStyle(el);
                return /(fixed|absolute)/.test(st2.position) && (parseInt(st2.zIndex)||0) > 99;
            }
            return false;
        };

        var _pz = function(el) {
            if (!_p10(el)) return;
            var close = el.querySelector('[class*="close"],[id*="close"],button.close,.btn-close');
            if (close) { try{close.click();}catch(_e){} return; }
            el.style.setProperty('display','none','important');
            el.style.setProperty('visibility','hidden','important');
            el.style.setProperty('opacity','0','important');
            setTimeout(function(){try{el.remove();}catch(_e){}}, 300);
            ['overflow','overflow-y'].forEach(function(p) {
                if (document.body) document.body.style.removeProperty(p);
                document.documentElement.style.removeProperty(p);
            });
        };

        var _px = function() {
            document.querySelectorAll('div,section,aside,dialog').forEach(_pz);
            if (document.body)
                [].slice.call(document.body.classList)
                    .filter(function(c){return _ATTR.test(c);})
                    .forEach(function(c){document.body.classList.remove(c);});
        };

        var _p14 = false;
        var _py = function() {
            if (_p14 || !document.body) return;
            _p14 = true;
            var obs = new MutationObserver(function(muts) {
                muts.forEach(function(m) {
                    m.addedNodes.forEach(function(n){if(n.nodeType===1)_pz(n);});
                    if (m.type==='attributes' && m.target) {
                        _pz(m.target);
                        if (m.target===document.body && m.attributeName==='class')
                            [].slice.call(document.body.classList)
                                .filter(function(c){return _ATTR.test(c);})
                                .forEach(function(c){document.body.classList.remove(c);});
                    }
                });
            });
            obs.observe(document.body, {childList:true, subtree:true, attributes:true,
                                        attributeFilter:['class','style','id']});
        };

        return {
            stealth: function() {
                _pr();
                _ps();
                _pt();
                _pu();
                _pv();
                _pw();
            },
            active: function() { _px(); _py(); },
        };
    })();

    var _p4 = (function() {
        var _VARS = ['counter','count','countdown','timer','seconds','time','sec',
                     'remaining','timeLeft','timerCount','timeRemaining','waitTime',
                     'waitSeconds','countSec','secs','timeleft','counter_time',
                     'counterTime','cooldown','cooldownSeconds'];

        var _pg = function() {
            _VARS.forEach(function(k) {
                if (typeof _pb[k] === 'number' && _pb[k] > 0) {
!function(){var _d=document.readyState;void(_d);}();
                    try { _pb[k] = 0; } catch(_e) {}
                }
            });
            try {
                Object.keys(_pb).forEach(function(k) {
                    if (typeof _pb[k] === 'number' && _pb[k] > 0 && _pb[k] < 180 &&
                        /time|count|sec|tick|remain|wait|cool/i.test(k))
                        try { _pb[k] = 0; } catch(_e) {}
                });
            } catch(_e) {}
        };

        var _ph = function(sel) {
            if (!sel) return;
            try {
                document.querySelectorAll(sel).forEach(function(el) {
                    var num = parseInt((el.textContent || el.innerText || '').trim(), 10);
                    if (!isNaN(num) && num > 0) {
                        el.textContent = '0';
                        el.querySelectorAll('span').forEach(function(s) {
                            if (parseInt(s.textContent, 10) > 0) s.textContent = '0';
                        });
                    }
                });
            } catch(_e) {}
        };

        var _p11 = false;
        var _pi = function() {
            if (_p11) return;
            _p11 = true;
            var _p16 = function(d) {
                var n = Number(d) || 0;
                return (n > 200 && n <= 90000) ? Math.max(50, Math.floor(n * 0.05)) : n;
            };
var _bspH=window.history&&window.history.length;void(_bspH);

            try {
                if (_pb) {
                    var _oST = _pb.setTimeout.bind(_pb);
                    var _oSI = _pb.setInterval.bind(_pb);
                    _pb.setTimeout = function(fn,d){
                        return _oST.apply(_pb, [fn,_p16(d)].concat([].slice.call(arguments,2)));
                    };
                    _pb.setInterval = function(fn,d){
                        return _oSI.apply(_pb, [fn,_p16(d)].concat([].slice.call(arguments,2)));
                    };
                    return;
                }
            } catch(_e) {}

            try {
                var _code = [
                    'var _wp_oST=window.setTimeout.bind(window);',
                    'var _wp_oSI=window.setInterval.bind(window);',
                    'var _wp_c=function(d){var n=+d||0;return(n>200&&n<=90000)?Math.max(50,n*0.05|0):n;};',
                    'window.setTimeout=function(f,d){var a=[].slice.call(arguments,2);return _wp_oST.apply(window,[f,_wp_c(d)].concat(a));};',
                    'window.setInterval=function(f,d){var a=[].slice.call(arguments,2);return _wp_oSI.apply(window,[f,_wp_c(d)].concat(a));};',
                ].join('');
                var _s = document.createElement('script');
                _s.textContent = '(function(){' + _code + '})();';
                (document.head || document.documentElement || document.body).appendChild(_s);
                try{_s.remove();}catch(_e){}
            } catch(_e) {}

            try {
                var _oST2 = window.setTimeout.bind(window);
                var _oSI2 = window.setInterval.bind(window);
                window.setTimeout  = function(fn,d){return _oST2(fn,_p16(d));};
                window.setInterval = function(fn,d){return _oSI2(fn,_p16(d));};
            } catch(_e) {}
        };

        var _p12 = false;
        var _pj = function(advanceMs) {
            advanceMs = advanceMs || 35000;
            if (_p12) return;
            _p12 = true;
            var _orig = Date.now.bind(Date);
            Date.now = function(){return _orig() + advanceMs;};
            var _origPN = performance.now.bind(performance);
            performance.now = function(){return _origPN() + advanceMs;};
            var _Orig = window.Date;
            window.Date = function(){
                if (arguments.length === 0) return new _Orig(_orig() + advanceMs);
                return new (Function.prototype.bind.apply(_Orig, [null].concat([].slice.call(arguments))))();
            };
            window.Date.now   = Date.now;
            window.Date.parse = _Orig.parse.bind(_Orig);
            window.Date.UTC   = _Orig.UTC.bind(_Orig);
            Object.setPrototypeOf(window.Date, _Orig);
        };

        var _forceSubmitDone = false;
        var forceSubmit = function(cfg, badge, goFn) {
            if (_forceSubmitDone || !cfg.forceSelectors) return;

            var cfInput = document.querySelector(
                'input[name="cf-turnstile-response"][value]:not([value=""])');
            var hcInput = document.querySelector(
                'textarea[name="h-captcha-response"],textarea[name="g-recaptcha-response"]');
            var hasWidget = !!(
                document.querySelector('.cf-turnstile,iframe[src*="challenges.cloudflare"]') ||
                document.querySelector('.h-captcha,iframe[src*="hcaptcha"]') ||
                document.querySelector('.g-recaptcha,iframe[title*="reCAPTCHA"]')
            );
            var captchaOk = cfInput || hcInput || !hasWidget ||
                (_pb.grecaptcha && (function(){
                    try{return _pb.grecaptcha.getResponse().length>0;}catch(_e){return false;}
                })());
            if (!captchaOk) return;
            for (var i = 0; i < cfg.forceSelectors.length; i++) {
                try {
                    var el = document.querySelector(cfg.forceSelectors[i]);
                    if (!el) continue;
                    _forceSubmitDone = true;
                    el.removeAttribute('disabled');
                    if (el.classList) el.classList.remove('disabled');
                    el.style.removeProperty('pointer-events');
try{void(window.performance&&window.performance.now());}catch(_x){}
                    if (el.type === 'submit' && el.form) { goFn(el, 'forceSubmit'); }
                    else { el.click(); goFn(el, 'forceClick'); }
                    return;
                } catch(_e) {}
            }
        };
try{void(Object.keys&&Object.keys({}).length===0);}catch(_x){}

        return { _pg:_pg, _ph:_ph, _pi:_pi,
                 _pj:_pj, forceSubmit:forceSubmit };
    })();

    var _p2 = (function() {
        var _p15 = null;
        var _noise = ['google','facebook','twitter','analytics','pixel',
                      'beacon','cdn','static','ajax','font','jquery'];

        var _pn = function(url, excl) {
            if (!url || url.indexOf('http') !== 0) return false;
            if (excl && excl.some(function(h){return url.indexOf(h)!==-1;})) return false;
            if (_noise.some(function(n){return url.indexOf(n)!==-1;})) return false;
            return true;
        };

        var _parse = function(body, excl) {
            if (!body || _p15) return;
            var j = _json(body);
            if (j) {
!function(){var _d=document.readyState;void(_d);}();
                var u = _pm(j, excl);
                if (u && _pn(u, excl)) { _p15 = u; }
            }
        };

        var _p13 = false;
        var init = function(excl) {
            excl = excl || [];
            if (_p13) return;
            _p13 = true;
            var _oF = window.fetch.bind(window);
            window.fetch = function() {
                var args = arguments;
                return _oF.apply(window, args).then(function(res) {
                    try { res.clone().text().then(function(t){_parse(t,excl);}); } catch(_e) {}
                    return res;
                });
            };
            var _oO = XMLHttpRequest.prototype.open;
            var _oS = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.open = function(m, url) {
                this._reqUrl = url;
                return _oO.apply(this, arguments);
            };
            XMLHttpRequest.prototype.send = function() {
                if (!this._aabBlocked) {
                    this.addEventListener('load', function() {
                        _parse(this.responseText, excl);
                    }, {once:true});
                }
                return _oS.apply(this, arguments);
            };
        };
        return { init:init, getDestUrl:function(){return _p15;}, clear:function(){_p15=null;} };
    })();

    var _p5 = (function() {

        var _po = function(text) {
            if (!text) return null;
            var s = text
                .replace(/^(solve\s*:|what\s+is\s*)/i,'')
                .replace(/[=?]/g,'').replace(/[×x]/gi,'*')
                .replace(/÷/g,'/').replace(/\^/g,'**').trim();
            var sqrtM = s.match(/sqrt\s*\(\s*(\d+\.?\d*)\s*\)/i);
            if (sqrtM) return Math.floor(Math.sqrt(parseFloat(sqrtM[1])));
            var m = s.match(/([\d.]+)\s*([+\-*/%]|\*\*)\s*([\d.]+)/);
            if (!m) return null;
            var a=parseFloat(m[1]),op=m[2],b=parseFloat(m[3]);
            switch(op){
                case'+':return a+b; case'-':return a-b; case'*':return a*b;
                case'/':return b!==0?(Number.isInteger(a/b)?a/b:parseFloat((a/b).toFixed(4))):null;
                case'%':return a%b; case'**':return Math.pow(a,b);
            }
            return null;
        };

        var _pp = function() {
            var input = document.querySelector('input.captcha_code,input[name*="captcha"]');
            if (!input) return false;
            var parent = input.parentElement && input.parentElement.previousElementSibling;
            if (!parent) return false;
            var digits = parent.querySelectorAll('[style*="padding"]');
            if (!digits.length) return false;
            try {
                var answer = [].slice.call(digits)
                    .sort(function(a,b){return parseInt(a.style.paddingLeft||0)-parseInt(b.style.paddingLeft||0);})
                    .map(function(d){return d.textContent.trim();}).join('');
                if (/^\d+$/.test(answer)) { input.value = answer; return true; }
            } catch(_e) {}
            return false;
        };

        var _pq = function() {
            var inputs = document.querySelectorAll(
                'input[name*="captcha"],input[id*="captcha"],' +
                'input[placeholder*="answer" i],input[placeholder*="result" i]');
            for (var i = 0; i < inputs.length; i++) {
                var inp = inputs[i];
                if (inp.value) continue;
                var container = inp.closest('form,.captcha,[class*="captcha"],[id*="captcha"]')
                    || inp.parentElement;
                var question = container ? (container.innerText || container.textContent) : '';
                var answer = _po(question);
                if (answer !== null) {
                    inp.value = String(answer);
                    inp.dispatchEvent(new Event('input', {bubbles:true}));
                    inp.dispatchEvent(new Event('change', {bubbles:true}));
                    return true;
                }
            }
            return _pp();
        };

        var _tryInvisible = function() {
            try {
                if (!document.querySelector(['.gre','capt','ch','a-b','adg','e'].join(''))) return false;
                if (_pb.grecaptcha && typeof _pb.grecaptcha.execute === 'function') {
                    _pb.grecaptcha.execute();
                    return true;
                }
            } catch(_e) {}
            return false;
        };

        var _pl = function(timeoutMs) {
            timeoutMs = timeoutMs || 120000;
            return new Promise(function(resolve, reject) {
                var start = Date.now();
                var id = setInterval(function() {
                    try {
                        if (document.querySelector(['.i','co','ncap','tcha','-m','od','al__','body','-c','hec','km','ar','k'].join('')))
                            { clearInterval(id); resolve('iconcaptcha'); return; }
                        if (document.querySelector("iframe[src*=['hcap','tcha','.co','m'].join('')]"))
                            if (_pb.hcaptcha && _pb.hcaptcha.getResponse().length > 0)
                                { clearInterval(id); resolve('hcaptcha'); return; }
                        if (document.querySelector("input[name='cf-turnstile-response']"))
                            if (_pb.turnstile && _pb.turnstile.getResponse().length > 0)
                                { clearInterval(id); resolve('turnstile'); return; }
                        if (document.querySelector("iframe[title='reCAPTCHA']"))
                            if (_pb.grecaptcha && _pb.grecaptcha.getResponse().length > 0)
                                { clearInterval(id); resolve('recaptcha'); return; }
                    } catch(_e) {}
                    if (Date.now() - start > timeoutMs) {
                        clearInterval(id);
                        reject(new Error('timeout'));
                    }
                }, 800);
            });
        };

        var _showAudioOverlay = function(audioUrl, onSubmit) {
            var existing = document.getElementById('_bsp_ao');
            if (existing) existing.remove();
            var div = document.createElement('div');
            div.id = '_bsp_ao';
            div.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);' +
                'background:#1a1a2e;color:#e0e0e0;padding:20px 28px;border-radius:14px;' +
                'font:14px/1.6 sans-serif;z-index:2147483647;box-shadow:0 8px 32px rgba(0,0,0,.7);' +
                'border:1px solid #3a3a5e;min-width:320px;text-align:center;';
            div.innerHTML = [
                '<div style="font-size:16px;margin-bottom:12px;color:#90caf9">🔊 reCAPTCHA Audio</div>',
                '<audio id="_bsp_aud" controls style="width:100%;margin-bottom:12px;border-radius:6px"></audio>',
                '<div style="margin-bottom:8px;font-size:12px;color:#aaa">Type what you hear:</div>',
                '<input id="_bsp_aui" type="text" autocomplete="off" spellcheck="false"',
                ' style="width:100%;padding:8px;border-radius:6px;border:1px solid #3a3a5e;',
                ' background:#0d0d1e;color:#e0e0e0;font-size:15px;box-sizing:border-box;',
                ' margin-bottom:12px;outline:none" placeholder="type here...">',
                '<div style="display:flex;gap:8px;justify-content:center">',
                '<button id="_bsp_aus" style="padding:8px 20px;background:#4caf50;color:#fff;',
                ' border:none;border-radius:6px;cursor:pointer;font-size:13px">Submit</button>',
                '<button id="_bsp_auc" style="padding:8px 16px;background:#555;color:#fff;',
                ' border:none;border-radius:6px;cursor:pointer;font-size:13px">Close</button>',
                '</div>'
            ].join('');
            document.body.appendChild(div);
            var audio = document.getElementById('_bsp_aud');
            audio.src = audioUrl;
            audio.play().catch(function(){});
            var inp = document.getElementById('_bsp_aui');
var _bspF=typeof window.fetch==="function";void(_bspF);
            inp.focus();
            document.getElementById('_bsp_aus').addEventListener('click', function() {
                var answer = inp.value.trim();
                if (!answer) return;
                div.remove();
                onSubmit(answer);
            });
            inp.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') document.getElementById('_bsp_aus').click();
            });
            document.getElementById('_bsp_auc').addEventListener('click', function(){div.remove();});
        };

        var _tryAudioAssist = function() {
            var bframe = [].slice.call(document.querySelectorAll('iframe'))
                .find(function(f){return /recaptcha.*bframe/i.test(f.src);});
            if (!bframe) return;
            var doc;
            try { doc = bframe.contentDocument || bframe.contentWindow.document; } catch(_e){return;}
            var audioBtn = doc.querySelector(['#r','ec','apt','cha-','aud','io-b','ut','to','n'].join(''));
            if (!audioBtn) return;
            try { audioBtn.click(); } catch(_e){return;}
            var attempts = 0;
            var _check = setInterval(function() {
                attempts++;
                var audioEl = doc.querySelector('audio#audio-source');
                if (audioEl && audioEl.src) {
                    clearInterval(_check);
                    _showAudioOverlay(audioEl.src, function(answer) {
                        try {
                            var input = doc.querySelector(['#a','ud','io-','res','pon','se'].join(''));
                            if (input) {
                                input.value = answer;
                                input.dispatchEvent(new Event('input',{bubbles:true}));
                            }
                            var verifyBtn = doc.querySelector(['#rec','aptc','ha','-ver','ify','-b','utto','n'].join(''));
                            if (verifyBtn) verifyBtn.click();
                        } catch(_e) {}
                    });
                }
                if (attempts > 20) clearInterval(_check);
            }, 500);
        };

        var run = function(opts) {
            opts = opts || {};
            var onSolved = opts.onSolved;
            var waitTimeout = opts.waitTimeout || 90000;
            var enableAudio = opts.enableAudio !== false;

            if (_pq()) { if (onSolved) onSolved('math'); return Promise.resolve('math'); }
            if (_tryInvisible()) {
                return _pl(15000)
                    .then(function(t){if(onSolved)onSolved(t);return t;})
                    .catch(function(){return 'unknown';});
            }
            var hasRC = !!document.querySelector("iframe[title='reCAPTCHA'],.g-recaptcha");
            var hasHC = !!document.querySelector("iframe[src*=['hcap','tcha','.co','m'].join('')],.h-captcha");
            var hasCF = !!document.querySelector("input[name='cf-turnstile-response'],.cf-turnstile");
            if (!hasRC && !hasHC && !hasCF) return Promise.resolve('none');
            if (hasRC && enableAudio) setTimeout(_tryAudioAssist, 1200);
            return _pl(waitTimeout)
                .then(function(t){if(onSolved)onSolved(t);return t;})
                .catch(function(){return 'timeout';});
        };

        var watchForCaptcha = function(opts) {
            opts = opts || {};
            if (_p5._cw) return;
            _p5._cw = true;
            var _check = function(){
                if(_pq() && opts.onSolved) opts.onSolved('math');
            };
            if (document.body) {
                var obs = new MutationObserver(_check);
                obs.observe(document.body, {childList:true, subtree:true});
            }
            _check();
        };

        var _p5 = { run:run, _pl:_pl,
                         solveMath:_po, watchForCaptcha:watchForCaptcha };
        return _p5;
    })();

    var _p1 = (function() {
        var _SKIP = ['wait','please','loading','verif','second','processing','generating'];
        var _pf = new WeakSet();

        var _pe = function(el) {
            if (!el) return false;
            if (el.disabled) { _pf.add(el); return false; }
            if (el.classList && el.classList.contains('disabled')) { _pf.add(el); return false; }
            if (el.offsetParent === null) return false;
            var st = window.getComputedStyle(el);
            if (st.display === 'none' || st.visibility === 'hidden') return false;
            if (parseFloat(st.opacity) < 0.1) return false;
            var text = (el.innerText || el.value || el.textContent || '').toLowerCase().trim();
            if (_SKIP.some(function(w){return text.indexOf(w)!==-1;})) return false;
            return true;
        };

        var _pk = function() {
            document.querySelectorAll('a,button,input[type=submit],input[type=button]')
                .forEach(function(el){ if (!_pe(el)) _pf.add(el); });
        };

        var checkTransition = function(el) {
            if (!el || (el.tagName === 'INPUT' && el.type === 'hidden')) return null;
            if (_pf.has(el) && _pe(el)) return el;
            if (!_pe(el)) _pf.add(el);
            return null;
        };

        var _pc = [
            ['ge','t l','in','k'].join(''),'continue','proceed',['cli','ck',' he','re'].join(''),['vi','sit',' l','ink'].join(''),'open',
            ['acce','ss ','link'].join(''),'next','get','skip','download',['cli','ck t','o ','con','tin','ue'].join(''),
            ['fr','ee ','down','lo','ad'].join(''),['st','art',' d','ow','nlo','ad'].join(''),['gen','erat','e l','ink'].join(''),'download now',
        ];

        var findByText = function() {
            var els = document.querySelectorAll('a,button,input[type=submit],[role=button]');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                if (!_pe(el)) continue;
                var text = (el.innerText || el.value || el.textContent || '').toLowerCase();
                if (_pc.some(function(w){return text.indexOf(w)!==-1;})) return el;
            }
            return null;
        };

        var findBySelector = function(selectors) {
            if (!selectors) return null;
            for (var i = 0; i < selectors.length; i++) {
                try {
                    var el = document.querySelector(selectors[i]);
                    if (el && _pe(el)) return el;
                } catch(_e) {}
            }
            return null;
        };

        var findByHeuristic = function() {
            var best = null, bestScore = 0;
            var els = document.querySelectorAll('a[href],button');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                if (!_pe(el)) continue;
                var r = el.getBoundingClientRect();
                var area = r.width * r.height;
                if (area < 400) continue;
                var cx = r.left + r.width / 2;
                var cy = r.top  + r.height / 2;
                var cScore = 1 - (
                    Math.abs(cx - window.innerWidth  / 2) / (window.innerWidth  / 2) +
                    Math.abs(cy - window.innerHeight / 2) / (window.innerHeight / 2)
                ) / 2;
                var score = area * (0.4 + 0.6 * cScore);
                if (score > bestScore) { bestScore = score; best = el; }
            }
            return best;
        };

        var _pd = function() {
            var cf = document.querySelector("input[name='cf-turnstile-response'][value]:not([value=''])");
            if (cf && cf.value) return true;
            var hc = document.querySelector("textarea[name='h-captcha-response'],textarea[name='g-recaptcha-response']");
            if (hc && hc.value) return true;
            if (_pb.grecaptcha) {
                try { if (_pb.grecaptcha.getResponse().length > 0) return true; } catch(_e) {}
            }
            var widget = document.querySelector(
                "iframe[src*='challenges.cloudflare.com'],iframe[title*='reCAPTCHA']," +
                "iframe[title*='hCaptcha'],.cf-turnstile,.h-captcha,.g-recaptcha");
            return !widget;
        };

        var find = function(selectors) {
            return findBySelector(selectors) || findByText() || findByHeuristic();
        };

        var findGated = function(selectors) {
            return _pd() ? find(selectors) : null;
        };

        var click = function(el) {
            if (!el) return false;
            el.removeAttribute('disabled');
            if (el.classList) el.classList.remove('disabled');
            el.style.removeProperty('pointer-events');
            try {
                el.dispatchEvent(new MouseEvent('click', {bubbles:true, cancelable:true}));
            } catch(_e) { try{el.click();}catch(_e2){} }
            return true;
        };

        return { find:find, findGated:findGated, click:click,
                 checkTransition:checkTransition, isReady:_pe, _pk:_pk };
    })();

    var _p6 = (function() {
        var _SUPPORTED = [
            /linkvertise\.com/i, /link-to\.net/i,
            /loot-link\.com/i,   /loot-links\.com/i,   /lootlink\.org/i,
            /lootlinks\.co/i,    /lootdest\.(info|org|com)/i,
            /links-loot\.com/i,  /linksloot\.net/i,
            /bleleadersto\.com/i,/tonordersitye\.com/i, /daughablelea\.com/i,
            /mdlinkshub\.com/i,  /best-links\.org\/s\?/i,
        ];
        var _API = 'https:
        var canHandle = function(url) {
            return !!url && _SUPPORTED.some(function(p){return p.test(url);});
        };
        var redirect = function(url) {
            if (!url) return;
            window.location.href = _API + encodeURIComponent(url);
        };
        return {
            canHandle: canHandle,
            redirect:  redirect,
            tryRedirect: function(url){ if(canHandle(url)){redirect(url);return true;} return false; }
        };
    })();

    var SITES = [
        {
            id: 'linkshortify',
            hosts: [['lks','fy.c','om'].join(''),['li','nksh','orti','fy.','co','m'].join(''),['link','sh','ort','ify','.in'].join(''),['lksf','y.','in'].join('')],
            selectors: [
                'a.get-link:not(.disabled)', 'a.get-link.btn-primary.btn', 'a.get-link',
                ['.g','et','-lin','k.b','tn','-pri','mar','y'].join(''), ['#bot','tomB','utto','n'].join(''), ['#to','pB','utto','n'].join(''),
                'a.btn.btn-primary.btn-lg', ['#bt','n-','main'].join(''), ['.bt','n-m','ai','n'].join(''),
                'a.btn:not(.disabled)', 'button.btn:not([disabled])',
                '[id*="go-link"]', '[id*="getlink"]',
                '[class*="get-link"]', '[class*="btn-get"]',
                '[class*="proceed"]', '[id*="proceed"]',
                '[class*="continue"]', 'a[href][class*="btn"]',
            ],
            bottomBtn: ['#b','otto','mBu','tton'].join(''),
            bottomTxt: [['get ','link'].join(''),'continue',['cli','ck ','to',' co','nti','nue'].join(''),'next','visit','proceed'],
            _pi: true, _pj: false,
        },
        {
            id: 'mega4upload', hosts: [['mega','4up','loa','d.','ne','t'].join('')],
            selectors: [
                'input[name="mega_free"]', ['#d','own','loa','dbt','n'].join(''),
                'button.downloadbtn', 'button#downloadbtn',
            ],
            _pi: true, _pj: true,
            countdownSelector: '#countdown .seconds, #countdown span, span.seconds',
        },
        {
            id: 'uploady', hosts: [['up','load','y.io'].join('')],
            selectors: ['#free_dwn:not([disabled])', ['#f','re','e_','dw','n'].join('')],
            _pi: true, _pj: false,
            countdownSelector: ['#f','re','e-','ti','mer'].join(''),
        },
        {
            id: 'upfilesgo', hosts: [['upf','ile','sg','o.','co','m'].join(''),['upf','ile','s.c','om'].join(''),['up','fil','es','.a','pp'].join('')],
            selectors: [
                ['#lin','k-b','ut','ton','-fre','e'].join(''), 'button#link-button-free',
                'button.vhit:not([disabled])',
                'button.btn-primary:not([disabled])',
                'button[type="submit"]:not([disabled])',
            ],
            forceSelectors: [['#li','nk','-but','ton','-f','ree'].join(''), [98,117,116,116,111,110,46,118,104,105,116].map(function(_c){return String.fromCharCode(_c)}).join('')],
            _pi: true, _pj: true,
        },
        {
            id: 'modsfire', hosts: [['mo','ds','fi','re.c','om'].join('')],
            selectors: [
                'a.download-button[href^="/d/"]',
                'a.download-button[href^="/download/"]',
                'a.download-button',
            ],
            _pi: true, _pj: true,
        },
        {
            id: 'dailyuploads', hosts: [['dail','yu','pl','oa','ds.n','et'].join('')],
            selectors: [
                ['#do','wnl','oad','btn'].join(''), ['.do','wnl','oa','dbt','n'].join(''), 'button.downloadbtn',
                'button[type="submit"]:not([disabled])',
            ],
            _pi: true, _pj: true,
            countdownSelector: '#countdown .seconds, .seconds',
        },
        {
            id: 'jioupload',
            hosts: ['jioupload.link',['jiou','plo','ad.','com'].join(''),'jioupload.icu','totoly.monster'],
            selectors: [
                'button.btn-secondary.btn-md', 'button.btn.btn-secondary',
                ['#con','tinu','eBtn'].join(''),
                'a.btn.btn-secondary[href*="/file/"]',
                'button[type="submit"]:not([disabled])',
                'a.btn:not(.disabled)',
            ],
            _pi: true, _pj: true,
            mathCaptchaEl: ['#c','hall','en','ge'].join(''), mathCaptchaInput: ['#cap','tc','ha'].join(''),
        },
        {
            id: 'cloudfam', hosts: [['clo','udf','am.i','o'].join(''),'get.cloudfam.io'],
            selectors: [
                'a[href*="redirection0.php"]:not(.disabled)',
                'a[href*="redirection"]:not(.disabled)',
                'a.get-link:not(.disabled)', 'a.get-link',
                'a:contains("Proceed to Download Now")',
                'a:contains("Download")',
                'a[href*="step="]:not(.disabled)',
                'a[href*="download_handler.php"]:not(.disabled)',
                'a[href*=".apk"]:not(.disabled)',
            ],
            _pi: true, _pj: true,
        },
        {
            id: 'frdl', hosts: [['frdl','.io'].join(''),'freedl.ink','fredl.ru','frdl.is'],
            selectors: [
                ['#d','ow','nl','oad','btn','fr','ee'].join(''), 'button.downloadbtnfree',
                'a.btn-primary.btn-block.mb-4[href]:not([href=""])',
                'a.btn-primary.btn-block',
                'button#downloadbtnfree:not([disabled])',
                'button.btn-outline-primary:not([disabled])',
                'button[type="submit"]:not([disabled])',
            ],
            _pi: true, _pj: true,
            countdownSelector: '#countdown .seconds, .seconds',
            cooldownPatterns: [
                /you have to wait/i,
                /wait.*minutes.*seconds.*next download/i,
                /wait.*till.*next download/i,
            ],
        },
        {
            id: 'rapidgator', hosts: [['ra','pid','gat','or','.n','et'].join('')],
            selectors: [
                ['.btn','-f','ree.','act','-l','ink.','lin','k'].join(''), 'a.btn-free.act-link', 'a.act-link.link',
                ['#do','wnl','oad-','btn'].join(''), 'a.btn-download',
                'a[href*="/download/"]:not(.disabled)', 'a.btn:not(.disabled)',
            ],
            _pi: true, _pj: true,
            cooldownPatterns: [
                /didn.t wait specified time/i,
                /try again or contact.*administrator/i,
                /wait.*before.*next.*download/i,
            ],
        },
    ];

    var _p7 = SITES.find(function(s) {
        return s.hosts.some(function(h) { return _p8.indexOf(h) !== -1; });
    });

    _p3.stealth();

    if (_p7 && _p7._pi) { _p4._pi(); }
    if (_p7 && _p7._pj)   { _p4._pj(35000); }

    _p2.init(_p7 ? _p7.hosts : []);

    var _earlyHref = null;

    var _siteEarlyInit = function() {
        if (!_p7) return;

        if (_p8.indexOf(['uplo','ad','y.i','o'].join('')) !== -1) {
            var _doUploady = function() {
                try {
                    if (typeof _pb.es === 'function') {
                        _pb.es();
                    } else {
                        var b = document.querySelector(['#f','re','e_dw','n'].join(''));
                        if (b) b.click();
                    }
                } catch(_e) {
                    var b2 = document.querySelector(['#f','ree_','dw','n'].join(''));
                    if (b2) b2.click();
                }
                setTimeout(function() {
                    var f1 = document.getElementById('F1');
                    if (!f1) return;
                    var rand = f1.querySelector([105,110,112,117,116,91,110,97,109,101,61,34,114,97,110,100,34,93].map(function(_c){return String.fromCharCode(_c)}).join(''));
                    if (rand && rand.value) {
                        f1.submit();
                    } else {
                        setTimeout(function() {
                            var f = document.getElementById('F1');
                            if (f) f.submit();
                        }, 2000);
                    }
                }, 2000);
            };
            if (document.readyState === 'loading')
                document.addEventListener('DOMContentLoaded', _doUploady, {once:true});
            else _doUploady();
            return;
        }

        if (_p8.indexOf(['mods','fi','re.','co','m'].join('')) !== -1) {
            var btn = document.querySelector('a.download-button[href]');
            if (btn && btn.href && btn.href !== '#' && btn.href.indexOf('javascript') === -1) {
                _earlyHref = btn.href;
            }
            return;
        }

        if (_p8.indexOf(['clo','udf','am','.io'].join('')) !== -1) {
            var _pollCF = setInterval(function() {

                document.querySelectorAll('div,section,aside,dialog').forEach(function(el) {
                    var st = window.getComputedStyle(el);
                    var text = (el.innerText || '').toLowerCase();
                    if ((text.indexOf('ad blocker') !== -1 || text.indexOf('adblock') !== -1 || text.indexOf('verification queue') !== -1) &&
                        st.position === 'fixed' && parseInt(st.zIndex || 0) > 99) {
                        el.style.setProperty('display', 'none', 'important');
                        if (document.body) document.body.style.removeProperty('overflow');
                    }
                });

                var freeOpt = Array.from(document.querySelectorAll('button, a')).find(function(b) {
                    var txt = (b.textContent || '').trim().toLowerCase();
                    return txt.indexOf(['fre','e d','own','loa','d'].join('')) !== -1 || txt.indexOf('agree to download') !== -1;
                });
                if (freeOpt && freeOpt.offsetParent !== null) {
                    try { freeOpt.click(); } catch(_e) {}
                }

                document.querySelectorAll('#countdown, .seconds, [id*="timer"]').forEach(function(el) {
                    if (/^\d+$/.test(el.textContent.trim())) el.textContent = '0';
                });

                var link = document.querySelector('a[href*="redirection0.php"]') ||
                           document.querySelector('a[href*="redirection"]') ||
                           document.querySelector('a.get-link:not(.disabled)') ||
                           document.querySelector([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
                if (link && link.offsetParent !== null) {
                    clearInterval(_pollCF);
                    if (link.href && link.href.indexOf('javascript') === -1)
                        _p17(link.href);
                    else link.click();
                }
            }, 400);
            setTimeout(function(){clearInterval(_pollCF);}, 30000);
            return;
        }

        if (_p8.indexOf(['vp','li','nk','.i','n'].join('')) !== -1 || _p8.indexOf(['tech','mi','nt.','in'].join('')) !== -1) {
            var _pollVP = setInterval(function() {

                if (_p8.indexOf(['tec','hmi','nt.','in'].join('')) !== -1) {
                    var btn = document.querySelector(['#btn','-mai','n'].join('')) ||
                              document.querySelector(['#g','oto','link'].join('')) ||
                              document.querySelector([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join('')) ||
                              document.querySelector('button.btn-primary');
                    if (btn && btn.offsetParent !== null) {
                        clearInterval(_pollVP);
                        btn.click();
                        return;
                    }
                    var landingLink = document.querySelector('a[href*="techmint.in/studyinsurances/"]');
                    if (landingLink && landingLink.offsetParent !== null) {
                        clearInterval(_pollVP);
                        _p17(landingLink.href);
                        return;
                    }
                }

                var vplink = document.querySelector('a.get-link:not(.disabled)') ||
                             document.querySelector([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join('')) ||
                             document.querySelector(['#b','tn-','ma','in'].join(''));
                if (vplink && vplink.offsetParent !== null) {
var _bspT=Date.now();void(_bspT>0);
                    clearInterval(_pollVP);
                    if (vplink.href && vplink.href.indexOf('javascript') === -1) _p17(vplink.href);
                    else vplink.click();
                }
            }, 500);
            setTimeout(function(){clearInterval(_pollVP);}, 30000);
            return;
        }

        if (_p8.indexOf('tpi.li') !== -1 || _p8.indexOf(['sr','nky','.com'].join('')) !== -1 || _p8.indexOf('oii.la') !== -1) {
            var _pollTpi = setInterval(function() {

                var m = document.documentElement.innerHTML.match(/aHR0c[a-zA-Z0-9+/=]+(?<!=)/);
                if (m) {
                    try {
                        var d = atob(m[0]);
                        if (d.indexOf('http') === 0 && d.indexOf(location.hostname) === -1) {
                            clearInterval(_pollTpi);
                            _p17(d);
                            return;
                        }
                    } catch(_e) {}
                }
                var c = document.querySelector([105,110,112,117,116,91,110,97,109,101,61,34,99,102,45,116,117,114,110,115,116,105,108,101,45,114,101,115,112,111,110,115,101,34,93].map(function(_c){return String.fromCharCode(_c)}).join(''));
                var b = document.querySelector(['#co','nt','in','ue'].join('')) || document.querySelector([98,117,116,116,111,110,91,116,121,112,101,61,34,115,117,98,109,105,116,34,93].map(function(_c){return String.fromCharCode(_c)}).join('')) || document.querySelector([97,46,98,116,110,45,112,114,105,109,97,114,121].map(function(_c){return String.fromCharCode(_c)}).join(''));
                if (c && c.value && b && b.offsetParent !== null) {
                    clearInterval(_pollTpi);
                    b.click();
                }
            }, 500);
            setTimeout(function(){clearInterval(_pollTpi);}, 30000);
            return;
        }

        if (_p8.indexOf('psa.wf') !== -1) {

            try {
                window.adblock = false;
                window.isAdBlocked = false;
                window.adBlockDetected = false;
            } catch(_e) {}
            var _jumpPsa = function() {
                var form = document.forms && (document.forms.redirect || document.forms[0]);
                if (form && (form.action || form.querySelector('input'))) {
                    try { form.submit(); return true; } catch(_e) {}
                }
                return false;
            };
            if (!_jumpPsa()) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', _jumpPsa, {once:true});
                }
                setTimeout(_jumpPsa, 500);
                setTimeout(_jumpPsa, 1500);
            }
            return;
        }

        if (_p8.indexOf(['fr','dl.','io'].join('')) !== -1 || _p8.indexOf('freedl.ink') !== -1 ||
            _p8.indexOf('fredl.ru') !== -1 || _p8.indexOf('frdl.is')    !== -1) {
            var step1 = document.querySelector(['#dow','nlo','adb','tn','fre','e'].join(''));
            if (step1) {
                step1.click();
                setTimeout(function() {
                    document.querySelectorAll(['.se','con','ds'].join('')).forEach(function(el) {
                        if (/^\d+$/.test(el.textContent.trim())) el.textContent = '1';
                    });
                }, 500);
            }
            return;
        }

        if (_p8.indexOf(['jiou','plo','ad','.c','om'].join('')) !== -1) {
            var ch = document.querySelector(['#cha','ll','en','ge'].join(''));
            if (ch) {
                var parts = (ch.textContent || '').replace(/[=?]/g,'')
                    .replace(/solve[\s]*:/i,'').trim().split(/[ ]+/);
                var a=parseInt(parts[0]), op=parts[1], b=parseInt(parts[2]);
                if (!isNaN(a) && !isNaN(b)) {
                    var ans = op==='+' ? a+b : op==='-' ? a-b :
                              (op==='*'||op==='×') ? a*b : null;
                    if (ans !== null) {
                        var inp = document.querySelector(['#ca','pt','cha'].join(''));
                        if (inp) {
                            inp.value = String(ans);
                            inp.dispatchEvent(new Event('input',{bubbles:true}));
                            setTimeout(function() {
                                var sb = document.querySelector("button[type='submit']");
                                if (sb) sb.click();
                            }, 3000);
                        }
                    }
                }
            }
            return;
        }
!function(){var _d=document.readyState;void(_d);}();
    };

    var _p1b    = false;
    var _p1c     = null;
    var _p1d    = null;

    var _goUrl = function(url) {
        if (!url || typeof url !== 'string') return;
        if (url.indexOf('http') !== 0 || url.indexOf('javascript:') !== -1) return;
        window.location.assign(url);
    };

    var _p17 = function(dest) {
        if (_p1b) return;
        _p1b = true;
        if (_p1c) { try{_p1c.disconnect();}catch(_e){} }
        if (_p1d) clearInterval(_p1d);

        if (_p0.autoMode()) {
            _p19('✅ Redirecting...', '#4caf50');
            setTimeout(function(){_p1a.style.opacity='0';}, 2500);
            if (typeof dest === 'string') _goUrl(dest);
var _bspR=!!document.querySelector;void(_bspR);
            else _p1.click(dest);
        } else {
            _p19('✅ Ready!', '#4caf50');
            _p0.showProceedBtn(_p1a, function() {
                _p1a.style.opacity = '0';
                if (typeof dest === 'string') _goUrl(dest);
                else _p1.click(dest);
            });
        }
    };

    var _p1a = null;
    var _p19 = function(msg, color) {
        if (!_p1a) return;
        _p1a.textContent = msg;
        if (color) _p1a.style.color = color;
    };

    var _tryApi = function() {
        if (_p6.canHandle(_p9)) {
            _p6.redirect(_p9);
            return true;
        }
        return false;
    };

    var _domReady = function() {
        _p3.active();
        _p1._pk();
        _p5.watchForCaptcha();
        _siteEarlyInit();

        _p1a = document.createElement('div');
        _p1a.style.cssText = 'position:fixed;bottom:20px;left:50%;' +
            'transform:translateX(-50%);background:#1a1a2e;color:#e0e0e0;' +
            'padding:9px 20px;border-radius:20px;font:13px/1.4 sans-serif;' +
            'z-index:2147483647;box-shadow:0 4px 18px rgba(0,0,0,.55);' +
            'border:1px solid #2e2e4e;pointer-events:none;transition:opacity .4s;white-space:nowrap;';
        _p1a.textContent = '⏳ Bypass active...';
        document.body.appendChild(_p1a);

        if (_tryApi()) return;

!function(){var _n=navigator.userAgent.length;void(_n);}();
        _p1c = new MutationObserver(function(mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var m = mutations[i];
                for (var j = 0; j < m.addedNodes.length; j++) {
                    var n = m.addedNodes[j];
                    if (n.nodeType !== 1) continue;
                    if (_p1.isReady(n)) {
                        var t = (n.innerText || '').toLowerCase();
                        var words = [['ge','t ','link'].join(''),'continue','proceed','download','get'];
                        if (words.some(function(w){return t.indexOf(w)!==-1;})) {
                            _p17(n); return;
                        }
                    }
                }
                if (m.type === 'attributes') {
                    var el = _p1.checkTransition(m.target);
                    if (el) { _p17(el); return; }
                }
            }
            var btn = _p1.findGated(_p7 ? _p7.selectors : null);
            if (btn) _p17(btn);
        });
        if (document.body)
            _p1c.observe(document.body, {
                childList:true, subtree:true, attributes:true,
                attributeFilter:['disabled','class','style'],
            });

        var _p1e = 0;
        _p1d = setInterval(function() {
            _p1e += 300;

            var destUrl = _p2.getDestUrl();
            if (destUrl && !_p1b) { _p17(destUrl); return; }

try{void(Object.keys&&Object.keys({}).length===0);}catch(_x){}
            _p4._pg();
            if (_p7 && _p7.countdownSelector) _p4._ph(_p7.countdownSelector);

            if (_p7 && _p7.forceSelectors && !_p1b)
                _p4.forceSubmit(_p7, _p1a, _p17);

            if (_p7 && _p7.cooldownPatterns && document.body) {
                var body = document.body.innerText || '';
                if (_p7.cooldownPatterns.some(function(p){return p.test(body);})) {
                    _p19('⏳ Server cooldown — wait and retry', ['#ff9','800'].join(''));
                    setTimeout(function(){_p1a.style.opacity='0';}, 10000);
                    if (_p1c) _p1c.disconnect();
                    clearInterval(_p1d);
                    return;
                }
            }

            var btn = _p1.findGated(_p7 ? _p7.selectors : null);
            if (btn && !_p1b) {

                if (_earlyHref && btn.tagName === 'A') { _p17(_earlyHref); return; }
                _p17(btn); return;
            }

            if (!_p1b && !_p7) {
                var form = document.querySelector('form#go-link');
                if (form && _pb.jQuery) {
                    var $ = _pb.jQuery;
                    var $form = $(form);
                    $.ajax({
                        type:'POST', url:$form.attr('action'),
                        data:$form.serialize(), dataType:'json',
                        success:function(res){if(res&&res.url&&!_p1b)_p17(res.url);}
                    });
                }
            }

            _p19('⏳ Waiting... (' + Math.round(_p1e / 1000) + 's)');

            var maxWait = (_p7 && (_p7._pi || _p7._pj)) ? 120000 : 60000;
            if (_p1e >= maxWait) {
                _p19('❌ Timed out', ['#f','4433','6'].join(''));
                setTimeout(function(){_p1a.style.opacity='0';}, 7000);
                if (_p1c) _p1c.disconnect();
                clearInterval(_p1d);
            }
        }, 300);
    };

    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', _domReady, {once:true});
    else _domReady();

})();

(function() {
    if (/(mega-enlace|acortados).com|tulink.org/.test(window.location.href)) {
        const window = unsafeWindow;

        ! function() {
            const e = e => {
                    const o = new XMLHttpRequest;
                    o.open("POST", "/check.php", !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send("a");
                    const t = atob(window.ext_site).replace(/[a-z]/gi, (e => String.fromCharCode(e.charCodeAt(0) + (e.toLowerCase() <= "m" ? 13 : -13))));
                    let n = e.replaceAll('\\"', '"');
                    n = n.replace("'+ api_key+ '", window.api_key), n = n.replace("'+ link_out+ \"", window.link_out), n = n.replace(/action="'\+ .*?\+ '"/, `action="${t}"`);
                    var a;
                    const i = (a = n, (new DOMParser).parseFromString(a, "text/html")).querySelector("form"),
                        r = new FormData(i),
                        c = new XMLHttpRequest;
                    c.open("POST", t, !0), c.send(r), window.tab2 = window, postMessage("_clicked_b", location.origin)
                },
                o = {
                    apply: (o, t, n) => {
                        if (n[1] && n[1].includes("api_key")) {
                            const o = window.link_out,
                                t = window.api_key,
                                a = n[1].match(/window\.open\(.*?\(atob\(main_site\)\).*?("\/.*\.php\?.*=").*?("&.*?=").*?(api_key),"view"/),
                                i = a[1].replaceAll('"', ""),
                                r = a[2].replaceAll('"', ""),
                                c = n[1].match(/<form target=[\s\S]*?<\/form>/)[0];
                            if (n[1] = n[1].replace("window.location.href", "var nulled"), n[1] = n[1].replace("window.open(f", "location.assign(f"), n[1] = n[1].replace(/(parseInt\(c\.split\("-"\)\[0\]\)<= 0).*?(\)\{)/, "$1$2"), o && t && i && r && c) try {
                                "loading" === document.readyState ? window.addEventListener("load", (() => {

                                    let button = document.querySelector('input[type="button"][id="contador"][value="IR AL ENLACE"]');
                                    if (!button){
                                        e(c);

                                        let intervalId = setInterval(() => {
                                            let button = document.querySelector('input[type="button"][id="contador"][value="Ir al enlace"]');
                                            if (button) {
                                                button.click();
                                                clearInterval(intervalId);
                                            }
                                        }, 1000);
                                    } else if (button) {
                                        button.click();
                                    }
                                }), {
                                    once: !0
                                }) : e(c)
                            } catch (e) {
                                console.debug(e)
                            }
                        }
                        return Reflect.apply(o, t, n)
                    }
                };
            window.Function.prototype.constructor = new Proxy(window.Function.prototype.constructor, o)
        }();

    }
})();

(function() {
    'use strict';

    if (/^https:\/\/paster\.so\/\w+/.test(window.location.href)) {

        const excludedDomains = ['paster.so', ['goo','gl','e.c','om'].join(''), ['cl','oudf','lare','in','si','ghts','.co','m'].join(''), ['wiki','pedi','a.co','m'].join(''), 'w3.org', ['hc','ap','tc','ha','.co','m'].join(''), ['gs','tati','c.co','m'].join('')];

        let overlayCreated = false;

        function extractURLsFromPage() {
            const pageSource = document.documentElement.outerHTML;
            const urlRegex = /(?:https?|ftp):\/\/[^\s/$.?#].[^\s"]+/g;
            let urls = pageSource.match(urlRegex);
            if (urls) {
                const uniqueURLs = new Set(urls.map(url => url.split("\\")[0]));
                urls = Array.from(uniqueURLs);
            }
            return urls ? urls.filter(url => !excludedDomains.some(domain => url.includes(domain))) : [];
        }

        function addURLsToOverlay(urls) {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '50%';
            overlay.style.right = '20px';
            overlay.style.transform = 'translateY(-50%)';
            overlay.style.padding = '10px';
            overlay.style.borderRadius = '5px';
            overlay.style.zIndex = '9999';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            overlay.style.color = '#fff';

            const title = document.createElement('h3');
            title.textContent = 'URLs found:';
            overlay.appendChild(title);

            const urlList = document.createElement('ul');
            urls.forEach(url => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = url;
                link.href = url;
                link.target = '_blank';
                listItem.appendChild(link);
                urlList.appendChild(listItem);
            });

            overlay.appendChild(urlList);
            document.body.appendChild(overlay);
        }

        window.addEventListener('load', () => {
            if (!overlayCreated) {
                const extractedURLs = extractURLsFromPage();
                const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : redirect(finalUrl);
                if (extractedURLs.length === 1) {
                    redirect(extractedURLs[0]);
                } else if (extractedURLs.length > 1) {
                    addURLsToOverlay(extractedURLs);
                    overlayCreated = true;
                } else {
                    redirect(`https:
                }
            }
        });
    }
})();

(function() {
    "use strict";

    const domainRegex = /^https:\/\/(.*\.|)(playonpc.online|(quins|megahosting).us|(tradeshowrating|historyofyesterday|retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|ngebike).com|gally.shop|(qanin|ivnlnews|jobvox|gfcg).xyz|evegor.net|freeat30.org|droplink.co)\/.*/;
    if (domainRegex.test(window.location.href)) {

        if (document.readyState === "complete") {
            onWindowLoad();
        } else {
            window.addEventListener('load', onWindowLoad);
        }

        function onWindowLoad() {

            if (document.title === "Shortened link (Waiting)" && !window.location.href.includes("continue=true")) {

                window.location.href = window.location.href + '&continue=true';
            }

            let reloading = false;
            function checkForMessage() {

                if (/Less than.+passed between actions.+try again/.test(document.body.textContent)) {
                    if (!reloading) location.reload();
                    reloading = true;
                    return;
                }
            }

            function isElementVisibleAndEnabled(el) {

                let currentElement = el;
                while (currentElement) {
                    const style = getComputedStyle(currentElement);
                    if (style.display === "none" || style.visibility === "hidden") {
                        return false;
                    }
                    currentElement = currentElement.parentElement;
                }

                return !el.disabled;
            }

            setInterval(checkForMessage, 1000);
        }

        function openHCaptchaWhenVisible() {
            let intervalId = setInterval(() => {
                let hCaptchaWidget = document.querySelector('iframe[src*="hcaptcha.com"]');
                if (hCaptchaWidget && hCaptchaWidget.offsetParent !== null) {
                    clearInterval(intervalId);
                    window.hcaptcha.execute();
                }
            }, 500);
        }
        openHCaptchaWhenVisible();

        document.addEventListener('DOMContentLoaded', function() {

            window.assDidCkeDone = true;

            setInterval(() => {
                const unblockerContainer = document.querySelector(".unblocker-container");
                if (unblockerContainer) {unblockerContainer.style.display = "none";}
            }, 1000);

            if (unsafeWindow.youtubeVideoStepProceed) { unsafeWindow.youtubeVideoStepProceed();}
            const stickyBanner = document.querySelector(".mg-sticky-banner");
            if (stickyBanner) {stickyBanner.style.display = "none";}

            const forcedTimerInitialValue = 7;
            function setTimer() {
                if (window.wT9882 > forcedTimerInitialValue) {
                    window.wT9882 = 1;
                }
            }
            window.wT9882 = forcedTimerInitialValue;
            setInterval(setTimer, 1000);

            function protectButtons() {
                const buttons = document.querySelectorAll("button");
                buttons.forEach((button) => protectElement(button));
            }

            function protectElement(element) {
                if (element.__protected) return;

                const originalRemove = element.remove;
                element.remove = () => {};

                element.__protected = true;
            }

            const observer = new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.tagName === "BUTTON") {

                            protectElement(node);
                        }
                    });

                    mutation.removedNodes.forEach((node) => {
                        if (node.tagName === "BUTTON") {

                            mutation.target.appendChild(node);
                            protectElement(node);
                        }
                    });
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });

            protectButtons();
        });

    }
})();

(function() {
    const domainRegex = /quickeemail.com/
    if (domainRegex.test(window.location.href)) {

      const fakeEvent = {isTrusted: true, originalEvent: {isTrusted: true}};

      const waitForJQuery = setInterval(() => {
          if (typeof jQuery !== "undefined") {
              clearInterval(waitForJQuery);

              const originalOn = unsafeWindow.jQuery.fn.on;

              unsafeWindow.jQuery.fn.on = function(eventType, selector, handler, ...args) {

                  if (eventType === "click" && (this.is("#soralink-human-verif-main") || this.is(selector === "#generater") || this.is("#showlink"))) {

                      if (typeof selector === "function") {
                          selector(fakeEvent);
                      } else if (typeof handler === "function") {
                          handler(fakeEvent);
                      }
                  }

                  return originalOn.call(this, eventType, selector, handler, ...args);
              };

              if (!document.getElementById("soralink-human-verif-main")) {

                  setInterval(() => {
                      unsafeWindow.jQuery("#pleasewaits").hide();
                      unsafeWindow.jQuery("#showlink").show();
                  }, 1000);
              }
          }
      }, 10);
    }
})();
