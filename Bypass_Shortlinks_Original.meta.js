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
