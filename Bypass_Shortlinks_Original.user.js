// ==UserScript==
// @name       Bypass All Shortlinks
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
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     nOneCode4u
// @license    Unlicense
// @noframes
// @version    96.8.20261005.b1
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
// [Bypass Shortlinks - Variant 2: Original AIO Base]

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
    SafeForm: {label: 'Anti-Clickjacking Form Protection',type: 'checkbox',default: true,column: 'left'}}});
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
  function CloudPS(checkFrames = false, captchaSite = false, checkFlare = true) {if (checkFrames && window.self !== window.top) {BpNote('Bypass Function Canceled Because Iframe Detected ', 'info');return true;}if (checkFlare && document.title === 'Just a moment...' || elementExists('.spacer-top.spacer.core-msg')) {BpNote("Bypass Function Canceled on Cloudflare Page ", 'info');return true;}
    if (captchaSite) {const captchaDomains = [/\.google\.com$/,/\.recaptcha\.net$/,/\.hcaptcha\.com$/,/\.cloudflare\.com$/];const host = location.host.toLowerCase();if (captchaDomains.some(regex => regex.test(host))) {BpNote(`Bypass Function Canceled on This Sites`, 'info');return true;}}return false;}
  function notify(txt, clicktocopy = false, clicktoclose = false, duration = cfg.get('SetDelay')) {const m = document.createElement('div');m.style.padding = '10px 20px';m.style.zIndex = 10000;m.style.position = 'fixed';m.style.width = `970px`;m.style.top = '10px';m.style.transform = 'translateX(-50%)';
    m.style.left = '50%';m.style.fontFamily = 'Arial, sans-serif';m.style.fontSize = '16px';m.style.color = 'white';m.style.textAlign = 'center';m.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';m.style.boxSizing = 'border-box';m.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';m.style.cursor = 'pointer';
    const mainText = document.createElement('div');mainText.innerText = txt.replace('@', duration);m.appendChild(mainText);const actionText = document.createElement('span');actionText.style.position = 'absolute';actionText.style.right = '10px';actionText.style.bottom = '5px';actionText.style.fontSize = '12px';actionText.style.color = 'white';actionText.style.userSelect = 'none';
    if (clicktocopy) {actionText.innerText = 'Click to Copy';} else if (clicktoclose) {actionText.innerText = 'Click to Close';}m.appendChild(actionText);document.body.appendChild(m);m.addEventListener('click', () => {if (clicktocopy) {navigator.clipboard.writeText(txt.replace('@', duration)).then(() => {mainText.innerText = 'Copied to clipboard!';
    setTimeout(() => {document.body.removeChild(m);clearInterval(timerId);}, 1000);}).catch(err => {console.error('Failed to copy text: ', err);});}if (clicktoclose) {document.body.removeChild(m);clearInterval(timerId);}});const timerId = setInterval(() => {duration -= 1;if (duration <= 0) {clearInterval(timerId);} else {mainText.innerText = txt.replace('@', duration);}}, 1000);}
  function NoFocus() {if (CloudPS(true, true, false)) return;window.mouseleave = true;window.onmouseover = true;document.hasFocus = () => true;if (!Object.getOwnPropertyDescriptor(document, 'webkitVisibilityState')?.get) {Object.defineProperty(document, 'webkitVisibilityState', {get: () => 'visible',configurable: true});}
    if (!Object.getOwnPropertyDescriptor(document, 'visibilityState')?.get) {Object.defineProperty(document, 'visibilityState', {get: () => 'visible',configurable: true});}if (!Object.getOwnPropertyDescriptor(document, 'hidden')?.get) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}
    const eventOptions = {capture: true,passive: true};const ensureVisibility = () => {if (document.hidden !== false) {Object.defineProperty(document, 'hidden', {get: () => false,configurable: true});}};ensureVisibility();window.addEventListener('focus', e => e.stopImmediatePropagation(), eventOptions);window.addEventListener('blur', e => e.stopImmediatePropagation(), eventOptions);}
  function CaptchaDone(callback, checkInterval = 1000) {if (CloudPS()) return;const window = unsafeWindow;if (typeof callback !== 'function') {BpNote('Callback harus berupa fungsi', 'error');return;}let intervalId;
    const checkCaptcha = () => {try {if (elementExists('.iconcaptcha-modal__body-checkmark')) {clearInterval(intervalId);callback();return;}
    if (elementExists("iframe[src^='https://newassets.hcaptcha.com']")) {if (window.hcaptcha && typeof window.hcaptcha.getResponse === 'function') {const response = window.hcaptcha.getResponse();if (response && response.length > 0) {clearInterval(intervalId);callback();return;}}}
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
      </style><div class="popup"><div class="title">Popup Request<button class="close">✕</button></div><div class="url">${url || 'about:blank'}</div><div class="buttons"><button class="allow">Open</button><button class="whitelist" title="Sementara Belum Bisa di Gunakan">Whitelist</button><button class="block">Block</button><button class="reload">Reload</button></div></div>`;const remove = () => div.remove();shadow.querySelector('.allow').onclick = () => {callback(true);remove();};shadow.querySelector('.block').onclick = () => {callback(false);remove();};shadow.querySelector('.reload').onclick = () => {window.location.reload();remove();};
      shadow.querySelector('.close').onclick = () => {callback(false);remove();};bp('.popup-notification')?.remove();document.body.appendChild(div);}window.open = (url, name, features) => new Promise(resolve => createNotification(url, shouldOpen => resolve(shouldOpen ? originalOpen(url, name, features) : (BpNote(`Blocked popup to: ${url}`), null))));document.addEventListener('click', e => {const target = e.target;if (target.tagName === 'A' && target.target === '_blank' && target.href) {e.preventDefault();createNotification(target.href, shouldOpen => shouldOpen ? originalOpen(target.href) : BpNote(`Blocked onclick popup to: ${target.href}`));}}, true);
      document.addEventListener('submit', e => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();createNotification(form.action, shouldOpen => shouldOpen ? originalOpen(form.action) : BpNote(`Blocked form popup to: ${form.action}`));}}, true);}

  BypassedByBloggerPemula(/(bitwidgets|virtuous-tech|coinilium|adwarden).net|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly|multimix).site|(newsminer|adwyn|coderun).uno|wii.si|(cryptics|uiio|kiit|liln|dailynewshub|nanolink).fun|cryptorealm.online/, () => {
    TrustMe();const OriginalMutationObserver = window.MutationObserver;window.MutationObserver = function(callback) {const stack = new Error().stack;if (/monitorSuspiciousAttributes/.test(stack)) {return { observe: () => {}, disconnect: () => {} };} return new OriginalMutationObserver(callback);};window.MutationObserver.prototype = OriginalMutationObserver.prototype;});
  BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, () => {Object.defineProperty(document, 'hidden', {value: false,writable: false});Object.defineProperty(document, 'visibilityState', {value: 'visible',writable: false});document.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);const waitForEl = (sel, cb, t = 1e4) => {const start = Date.now();const check = () => {const elm = bp(sel);if (elm) return cb(elm);if (Date.now() - start > t) BpNote(`Timeout: ${sel}`, 'warn'); else setTimeout(check, 500);}; setTimeout(check, 1e3);};
    const addDownloadButton = () => waitForEl('ytd-subscribe-button-renderer', elm => {if (bp('#dl-bp-button')) return;elm.parentElement.style.cssText = 'display: flex; align-items: center; gap: 8px';elm.insertAdjacentHTML('afterend', '<button id="dl-bp-button" style="background: #ff0000; color: white; border: none; padding: 8px 12px; border-radius: 2px; cursor: pointer; font-size: 13px; line-height: 18px;">DL BP</button>');bp('#dl-bp-button').addEventListener('click', showDownloadDialog);});const showDownloadDialog = () => {if (bp('#dl-bp-dialog')) return;
    const dialog = document.createElement('div');dialog.id = 'dl-bp-dialog';const shadow = dialog.attachShadow({mode: 'open'});shadow.innerHTML = `<style>.dialog { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.3); z-index: 1000; width: 90%; max-width: 400px; text-align: center; }.input { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; }.btns { display: flex; gap: 10px; justify-content: center; }
    .btn { background: #ff0000; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px; }.btn:hover { background: #cc0000; }.close { position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 20px; }</style><div class="dialog"><span class="close">X</span><h3>Download YouTube Video or Audio</h3><input class="input" type="text" value="${location.href}"><div class="btns"><button class="btn" id="video-btn">Video</button><button class="btn" id="audio-btn">Audio</button></div></div>`;
    document.body.appendChild(dialog);shadow.querySelector('.close').addEventListener('click', () => dialog.remove());shadow.querySelector('#video-btn').addEventListener('click', () => startDownload(shadow.querySelector('.input').value, 'video') && dialog.remove());shadow.querySelector('#audio-btn').addEventListener('click', () => startDownload(shadow.querySelector('.input').value, 'audio') && dialog.remove());};const startDownload = (url, type) => {const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/shorts/')[1]?.split('?')[0];
    if (!videoId) return BpNote('Invalid video ID', 'warn');const downloadUrl = type === 'video' ? `https://bloggerpemula.pythonanywhere.com/youtube/video/${videoId}` : `https://bloggerpemula.pythonanywhere.com/youtube/audio/${videoId}`;const a = document.createElement('a');a.href = downloadUrl;a.target = '_blank';a.click();};if (cfg.get('YTDown')) {addDownloadButton();document.addEventListener('yt-navigate-finish', addDownloadButton);document.addEventListener('yt-page-data-updated', addDownloadButton);}
    if (cfg.get('YTShort')) {const bypassShorts = () => {if (!location.pathname.startsWith('/shorts')) return;const vidId = location.pathname.split('/')[2];if (vidId) window.location.replace(`https://www.youtube.com/watch?v=${vidId}`);};bypassShorts();document.addEventListener('yt-navigate-start', bypassShorts);}});
  BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;const features = [{key: 'Adblock',action: () => AIORemover('noAdb', /adblock|AdbModel|AdblockReg|AntiAdblock|blockAdBlock|checkAdBlock|detectAnyAdb|detectAdBlock|justDetectAdb|FuckAdBlock|TestAdBlock|DisableDevtool|devtools/),log: 'Adblock Feature'}, {
    key: 'Prompt',action: () => {const runNoPrompts = () => NoPrompts();if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', runNoPrompts, {once: true});} else {runNoPrompts();}new MutationObserver(runNoPrompts).observe(document, {childList: true,subtree: true});},
    log: 'Disable Prompts & Notifications'}, {key: 'SameTab',action: SameTab,log: 'SameTab'},{key: 'TimerFC',action: () => BoostTimers(cfg.get('TDelay')),log: 'Fast Timer'}, {key: 'AntiDebug',action: DebugLog,log: 'Anti-Debug'}, {key: 'BlockFC',action: NoFocus,log: 'Focus Control'}, {key: 'RightFC',action: EnableRCF,log: 'Right Click Control'}, {key: 'BlockPop',
    action: BlockPopup,log: 'Popup Blocker'}];const activated = features.filter(({key}) => cfg.get(key)).map(({action,log}) => {action();return log;});if (activated.length) {BpNote(`Activated Features: ${activated.join(', ')}`, 'info');}});
  
    // Issue #1: vplink.in & techmint.in multi-step flow
    BypassedByBloggerPemula(/vplink\.in|techmint\.in/, () => {
      if (location.host.includes('techmint.in')) {
        const btn = bp('#btn-main') || bp('#gotolink') || bp('a.get-link') || bp('button.btn-primary');
        if (btn) btn.click();
        const next = bp('a[href*="techmint.in/studyinsurances/"]');
        if (next && next.href) redirect(next.href);
      } else {
        const l = bp('a.get-link:not([disabled])') || bp('a.get-link');
        if (l && l.href && !l.href.includes('javascript')) redirect(l.href);
        else DoIfExists('a.get-link');
      }
    });
    
  
    // Issue #2: cloudfam.io download flow & adblock queue bypass
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
        const dl = bp('a[href*="redirection0.php"]') || bp('a[href*="redirection"]') || bp('a.get-link');
        if (dl && dl.href && !dl.href.includes('javascript')) {
          redirect(dl.href);
        }
      }, 500);
    });
    
  
    // Issue #3: psa.wf stealth anti-adblock and auto-submit
    BypassedByBloggerPemula(/psa\.wf/, () => {
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
    
  // Injecting code from start and the end of document coded by @Konf
  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
    switch (h.host) {// tracking redirect handler removeddefault: break;}})(new URL(location.href)); if (bas) {const {isNotifyNeeded, redirectDelay, link} = bas;
      if (isNotifyNeeded) {notify(`Redirecting...`);}setTimeout(() => {location.href = link;}, redirectDelay * 1000);}
    BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {let $ = unsafeWindow.jQuery;const url = window.location.href;if (url.includes('go/')) {notify('Reload the Page , if the Copied Key is Different', false, true);sleep(1000).then(() => {const link = bp('p.mb-2:nth-child(2) > strong > a');
      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(document.getElementsByTagName('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));
      if (p) sleep(1000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https://www.google.com/url?q=https://geekgrove.net' : t.includes('vitalityvista') ? 'https://www.google.com/url?q=https://vitalityvista.net' : t.includes('coinhub') ? 'https://www.google.com/url?q=https://coinhub.wiki' : 'https://www.google.com/url?q=https://geekgrove.net', false);});}});}
      if (['geekgrove.net', 'vitalityvista.net', 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);ReadytoClick('#btnLinkStart', 2);CaptchaDone(() => {ReadytoClick('#btnLinkContinue');});CheckVisibility('#btnLinkContinue', () => {if (!elementExists('.iconcaptcha-modal')) {ReadytoClick('#btnLinkContinue');} else {ReadytoClick('.iconcaptcha-modal__body');}});
      CheckVisibility('.alert-success.alert-inline.alert', () => {ReadytoClick('#btnLpcont');});sleep(1000).then(() => {const input = bp('#linkInput.form-control');if (input) {input.value = GM_getValue('lastKey', '');sleep(1000).then(() => bp('.btn-primary.btn-ripple')?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp('.link_code');
      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});
    BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;let List = ['lopteapi.com', '3link.co', 'exeygo.com', 'vuotlink.vip'], $ = unsafeWindow.jQuery;if (elementExists('form[id=go-link]') && List.includes(location.host)) {ReadytoClick("a.btn.btn-success.btn-lg.get-link:not([disabled])", 3);} else if (elementExists('form[id=go-link]')){$('form[id=go-link]').off('submit').on('submit', function(e) {e.preventDefault();
      let form = $(this),url = form.attr('action'),pesan = form.find('button'),notforsale = $(".navbar-collapse.collapse"),blogger = $(".main-header"),pemula = $(".col-sm-6.hidden-xs");$.ajax({type: "POST",url: url,data: form.serialize(),dataType: 'json',beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Link Bypassed');
      let btn = '<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Bypass Shortlinks</b></button>';notforsale.replaceWith(btn);blogger.replaceWith(btn);pemula.replaceWith(btn);},success: function(result, status, xhr) {let finalUrl = result.url;if (finalUrl.includes('swiftcut.xyz')) {
      finalUrl = finalUrl.replace(/[?&]i=[^&]*/g, '').replace(/[?]&/, '?').replace(/&&/, '&').replace(/[?&]$/, '');location.href = finalUrl;} else if (xhr.responseText.match(/(a-s-cracks.top|mdiskshortner.link|exashorts.fun|bigbtc.win|slink.bid|clockads.in)/)) {location.href = finalUrl;} else {redirect(finalUrl);}},error: function(xhr, status, error) {BpNote(`AJAX request failed: ${status} - ${error}`, 'error');}});});}});
    BypassedByBloggerPemula(/flickr.com/, () => {if (!cfg.get('Flickr')) return;function createDownloadLinks() {const finalizeContainer = (container, sizesLink) => {if (!container.children.length) return;const parent = sizesLink.parentElement;if (parent) {parent.insertBefore(container, sizesLink);} else {document.body.appendChild(container);}BpNote('The Image is Ready to Save', 'info');};
      waitForElm('a[href*="/sizes/"]', sizesLink => {if (!sizesLink) return BpNote('View all sizes link not found', 'error');GM_xmlhttpRequest({method: 'GET',url: sizesLink.href,onload: response => {try {const sizesDoc = new DOMParser().parseFromString(response.responseText, 'text/html');const sizeItems = sizesDoc.querySelectorAll('.sizes-list li ol li');if (!sizeItems.length) return BpNote('No size items found', 'warn');
      const container = document.createElement('div');container.style.cssText = 'background:white;border:1px solid #ccc;padding:10px;z-index:1000;margin-bottom:5px;position:relative';const header = document.createElement('div');header.textContent = 'Bloggerpemula Script';header.style.cssText = 'text-align:center;font-weight:bold;margin-bottom:0px;color:#333';container.appendChild(header);
      const closeButton = document.createElement('button');closeButton.textContent = 'X';closeButton.style.cssText = 'position:absolute;top:0px;right:0px;background:none;border:none;font-size:14px;cursor:pointer;color:#333';closeButton.onclick = () => container.remove();container.appendChild(closeButton);let processed = 0;sizeItems.forEach(item => {const sizeLink = item.querySelector('a');
      const sizeText = sizeLink ? sizeLink.textContent.trim() : item.textContent.trim();const sizeName = `${sizeText} ${item.querySelector('small')?.textContent.trim() || ''}`;const sizeUrl = sizeLink?.href;if (!sizeUrl) {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);return;}GM_xmlhttpRequest({method: 'GET',url: sizeUrl,onload: sizeResponse => {try {const sizeDoc = new DOMParser().parseFromString(sizeResponse.responseText, 'text/html');
      const img = sizeDoc.querySelector('#allsizes-photo img[src]');if (!img) return;const saveLink = document.createElement('a');saveLink.href = img.src;saveLink.textContent = `Save ${sizeName}`;saveLink.style.cssText = 'display:block;margin:5px 0';saveLink.onclick = e => {e.preventDefault();GM_openInTab(img.src, {active: true});};container.appendChild(saveLink);} catch (e) {}processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);},
      onerror: () => {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);}});});} catch (e) {BpNote(`Error processing sizes page: ${e.message}`, 'error');}},onerror: () => BpNote('Failed to fetch sizes page', 'error')});});}if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', createDownloadLinks, {once: true});} else {createDownloadLinks();}});
    BypassedByBloggerPemula(/bigbtc.win/, () => {CaptchaDone(() => {DoIfExists('#claimbutn');});
      if (location.href.includes('/bonus')) {DoIfExists('#clickhere', 3);}});
    BypassedByBloggerPemula('(bitwidgets|virtuous-tech|coinilium|adwarden).net|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly|multimix).site|(newsminer|adwyn|coderun).uno|wii.si|(cryptics|uiio|kiit|liln|dailynewshub|nanolink).fun|cryptorealm.online', () => {
      CheckVisibility('*:contains("Failed! Please reload")', () => {sleep(1000).then(() => {window.location.reload();});});let $ = unsafeWindow.jQuery;elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {fakeHidden();});CheckVisibility('*:contains("Verified")', () => {const findVerify = () => Array.from(bp('*',true)).find(el => el.textContent.trim() === 'Continue' || 'Verify');const verifyElement = findVerify();if (verifyElement) {setTimeout(() => {$('*[type="button"]:contains("Continue")').click();$('*[type="button"]:contains("Verify")').click();}, 1000);}});const tano = window.location.href;if (['dailytech-news.eu', 'wii.si', 'bubblix.eu', 'bitwidgets.net', 'virtuous-tech.net', 'carfocus.site', 'multimix.site', 'coderun.uno', 'newsminer.uno', 'cryptics.fun','coinilium.net','uiio.fun','nanolink.fun','adwarden.net','adwyn.uno','biit.site','cryptorealm.online','dailynewshub.fun','kiit.fun','liln.fun'].some(tino => tano.includes(tino))) {
      CheckVisibility('#captcha-container', '&&', "bp('.mb-2').innerText == 'Verified'", () => ReadytoClick('button:contains("Verify")', 2));elementReady('#loadingDiv[style*="display:block"] button, #loadingDiv[style*="display: block"] button').then(ReadytoClick.bind(this, 'button', 2));elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});} else {CheckVisibility('text:contains("To Start")', () => {const textElement = bp('text:contains("To Start")');const buttonText = textElement.textContent.match(/Click\s+(\w+)\s+To Start/i)?.[1];if (!buttonText) return;const findButton = () => {const elements = bp('*',true);
      for (const el of elements) {if (el.textContent.trim() === buttonText) return el;}return null;};let buttonElement = findButton();if (buttonElement) {setTimeout(() => {$(buttonElement).click();}, 2000);}});}});

    }})();

// ===== EXTRA BYPASSES (MERGED) =====

// ----- Bypass Acortalink.me ( Taken from AdGuard https://github.com/AdguardTeam/AdguardFilters/commit/61d9949022b428939b5be4243b0e5331ea64afcb) -----
// used in: hackstore.fo
(function() {
    'use strict';

    if (/acortalink.me/.test(window.location.href)) {

        //Try to click the button after the page is fully loaded
        window.addEventListener('load', function() {
            const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
            popupsToRedirects();

            let button = document.querySelector('#contador');
            if (button) {
                button.click();
            }
        })

        //Bypass logic by Adguard Team - https://github.com/AdguardTeam/AdguardFilters/commit/61d9949022b428939b5be4243b0e5331ea64afcb
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
// ----- ----- -----

// ----- bypass.vip and bypass.city APIs------
(function() {
    'use strict';
    const admavenRegex = /^https:\/\/((bleleadersto|tonordersitye|daughablelea|mdlinkshub).com)\/s\?(?!.*f933e7ff).*$/;
    const linkvertiseRegex = /^https:\/\/linkvertise\.com\/.+$/;
    const lootlinkRegex = /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/

    const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : window.location.assign(finalUrl);

    // Linkvertise easy case
    if (linkvertiseRegex.test(window.location.href) && window.location.search.includes('r=')) {
        const rParam = new URLSearchParams(window.location.search).get('r');
        if (rParam) {redirect(atob(rParam));};

    // Linkvertise hard case and Admaven using bypass.city
    } else if (admavenRegex.test(window.location.href) || linkvertiseRegex.test(window.location.href) || lootlinkRegex.test(window.location.href)) {
        redirect(`https://adbypass.org/bypass?bypass=${encodeURIComponent(window.location.href)}`);
    }
})();
// ----- ------ ----------


// ----- Bypass bstlar ------
// adapted to userscript from code by harryitz for FastForward
// https://github.com/FastForwardTeam/FastForward/commit/89fb43ce12718b3d83edb0eb5abec4c683c16925
(function() {
    'use strict';

    if (/bstlar.com/.test(window.location.href)) {

        function getCookie(name) {
            let value = '; ' + document.cookie;
            let parts = value.split('; ' + name + '=');
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
                const task_request = await fetch('https://bstlar.com/api/link-completed', {
                    method: 'POST',
                    headers: {
                        accept: 'application/json, text/plain, */*',
                        authorization: 'null',
                        cookie: `XSRF-TOKEN=${XSRF_TOKEN}; boostellar_session=${boostellar_session}; PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud=${PfufeQwMeP6og9Poi7DmjbGJCcYhyXKQhlPnQ4Ud}; cf_clearance=${cf_clearance}`,
                        origin: 'https://bstlar.com',
                        pragma: 'no-cache',
                        priority: 'u=1, i',
                        referer: 'https://bstlar.com/hV/krampus',
                        'user-agent': userAgent,
                        'x-xsrf-token': XSRF_TOKEN,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        link_id: response['link']['id']
                    })
                });

                if (task_request.status !== 200) return;
                const task_response = await task_request.text();

                const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : window.location.assign(finalUrl);
                redirect(task_response);
            }
        }

        function interceptXHR() {
            const open = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function() {
                this.addEventListener("load", function(data) {
                    handleRedirect(data);
                });
                open.apply(this, arguments);
            };
        }

        interceptXHR();
    }

})();
// ----- ------ ----------

//---Bypass.city clickable result----
(function() {
    'use strict';
    if (/^https:\/\/(bypass\.city|adbypass\.org)\/bypass\?bypass=.*$/.test(window.location.href)) {
        function checkForResolvedUrl() {
            const xpath = '/html/body/div[1]/main/div/main/div[1]/div/div[2]/div/p';
            const pElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (pElement && pElement.innerText.includes('The resolved url is: ')) {
                const resolvedUrl = pElement.innerText.split('The resolved url is: ')[1];
                if (resolvedUrl && !resolvedUrl.endsWith('...')) {
                    const clickableLink = document.createElement('a');
                    clickableLink.href = `https://${resolvedUrl}`;
                    clickableLink.innerText = `The resolved url is: ${resolvedUrl}`;
                    clickableLink.style.color = '#3366CC';
                    clickableLink.style.display = 'block';
                    pElement.innerHTML = ''; // Clear the original text
                    pElement.appendChild(clickableLink);
                }
                clearInterval(intervalId);
            }
        }
        const intervalId = setInterval(checkForResolvedUrl, 2000);
    }
})();
//-------


//---Feedback for users---------------------------------------------------------------------
/**
 * Shows a styled alert popup with customizable type, duration and position
 * @param {string} message - The message to display
 * @param {string} type - Alert type: 'info', 'success', 'error', or 'warning'
 * @param {number} duration - How long to show the alert in milliseconds
 * @param {string} prefix - Text prefix before the message
 * @param {string} position - Position of alert: 'primary' (top) or 'secondary' (below primary)
 */
function showAlert(message, type = 'info', duration = 1000, prefix = 'Bypass script: ', position = 'primary') {
    // Create alert element
    const alertDiv = document.createElement('div');
    
    // Set positioning styles
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
    
    // Set position based on parameter
    if (position === 'secondary') {
        alertDiv.style.top = '60px'; // Position below the primary alert
        alertDiv.dataset.position = 'secondary';
    } else {
        alertDiv.style.top = '10px'; // Default primary position
        alertDiv.dataset.position = 'primary';
    }
    
    // Set colors based on alert type
    switch(type) {
        case 'success':
            alertDiv.style.backgroundColor = '#4CAF50';
            alertDiv.style.color = 'white';
            prefix = '✅ ' + prefix + ':';
            break;
        case 'error':
            alertDiv.style.backgroundColor = '#F44336';
            alertDiv.style.color = 'white';
            prefix = '❌ ' + prefix + ':';
            break;
        case 'warning':
            alertDiv.style.backgroundColor = '#FF9800';
            alertDiv.style.color = 'white';
            prefix = '⚠️ ' + prefix + ':';
            break;
        default: // info
            alertDiv.style.backgroundColor = '#2196F3';
            alertDiv.style.color = 'white';
            prefix = 'ℹ️ ' + prefix + ':';
    }
    
    alertDiv.textContent = prefix + ' ' + message;
    
    // Check if any existing alerts would conflict
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
    
    // Check if body exists, if not wait for it
    if (document.body) {
        clearExistingAlert();
        document.body.appendChild(alertDiv);
        
        // Remove after duration
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.parentNode.removeChild(alertDiv);
                }
            }, 500);
        }, duration);
    } else {
        // Wait for body to be available
        document.addEventListener('DOMContentLoaded', () => {
            clearExistingAlert();
            document.body.appendChild(alertDiv);
            
            // Remove after duration
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
    
    // Also log to console for debugging
    console.log(`[${prefix}] ${message}`);
}

showAlert("running...");

function redirectWithMessage(url) {
    showAlert("Redirecting to " + url, 'success', 3000, '', 'secondary');
    setTimeout(function() {window.location.assign(url);}, 1000);
}

//-------------------------------------------------------------------------------------

// ----- Bypass Fly Inc (rinku.me .pro, 7mb.io, ...) ------
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/165
(function() {
    "use strict";

    const domainRegex = /(actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja|djbassking|telefonzilsesi|csyildizi|verli|thejessiek|fabriksite|mealold|nameortho|ebanglapro|gyoblog|zulgame|arabe-tech|mclox|anlikgb|yogatrick|barlianta|desimonthdate|jobpagol|cararabic|esladvice).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop|nidbd.me|postalcode.com.pk|teknoventure|stellar\.|echo\.|halo\./
    if (domainRegex.test(window.location.href)) {
        const e = unsafeWindow.location.href.includes("/posts/"),
            t = [...document.querySelectorAll("style")].some((e => e.textContent.includes("card-container"))),
            s = [...document.scripts].some((e => e.src.startsWith("https://static.cloudflareinsights.com/beacon.min.js")));
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
        }(), setTimeout((() => {
            const e = document.querySelector('button[class*="btn-"]');
            e && (e.parentElement.parentElement.style.display = "block")
        }), 1e4))
    }
})();
// ----- End Bypass Rinku -----

(function () {
    'use strict';

    var _HOST = window.location.hostname;
    var _URL  = window.location.href;
    var _PATH = window.location.pathname;
    var _uw   = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

    // ── JSON helper ──────────────────────────────────────────────────────────
    var _json = function(s) { try { return JSON.parse(s); } catch (_e) { return null; } };

    // ── URL extractor from API response objects ───────────────────────────────
    var _extractUrl = function(obj, excl) {
        if (!obj || typeof obj !== 'object') return null;
        var keys = ['url','destination','dest','redirect','link','target',
                    'href','data','result','response','goto','final','location','to','out'];
        for (var i = 0; i < keys.length; i++) {
            var v = obj[keys[i]];
            if (typeof v === 'string' && v.indexOf('http') === 0) {
                if (!excl || !excl.some(function(h){return v.indexOf(h) !== -1;})) return v;
            }
            if (v && typeof v === 'object') {
                var inner = _extractUrl(v, excl);
                if (inner) return inner;
            }
        }
        return null;
    };

    // ─── SETTINGS (Auto / Manual mode) ───────────────────────────────────────
    var _SETTINGS = (function() {
        var _get = function(k,d){try{return GM_getValue(k,d);}catch(_e){return d;}};
        var _set = function(k,v){try{GM_setValue(k,v);}catch(_e){}};
        var _auto = _get('bsp_auto', false);
        var _mid;

        var _toast = function(msg) {
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
                        _toast(_auto ? '⚡ Auto' : '🖐 Manual');
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

    // ─── ANTI-ADBLOCK ────────────────────────────────────────────────────────
    var _AAB = (function() {
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

        var _spoofGlobals = function() {
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

        // Inject fake FuckAdBlock/BlockAdBlock into page scope via <script>.
        // FuckAdBlock checks window in page scope — must be overridden there.
        var _spoofFAB = function() {
            _inject([
                'var _F=function(){var self=this,_nd=null;',
                'this.onDetected=function(){return this;};',
                'this.onNotDetected=function(cb){_nd=cb;try{setTimeout(cb,1);}catch(_){}return this;};',
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

        // Bait element geometry spoofing — defeats size-based adblock detection.
        var _spoofBaitGeometry = function() {
            var BAIT = ['adsbygoogle','adsbox','doubleclick','ad-placement',
                        'ad-slot','banner-ads','ad-banner','advertisement',
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

        // Block known anti-adblock detector scripts.
        var _blockAABScripts = function() {
            var PAT = [/blockadblock/i,/fuckadblock/i,/detectadblock/i,/antiblock/i];
            var _orig = Element.prototype.setAttribute;
            Element.prototype.setAttribute = function(n,v) {
                if (n==='src' && this.tagName==='SCRIPT' && PAT.some(function(p){return p.test(v);}))
                    return _orig.call(this, n, 'data:text/javascript,');
                return _orig.call(this, n, v);
            };
        };

        // Block anti-adblock beacon XHR/fetch.
        var _blockAABRequests = function() {
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

        // Block popunder window.open calls.
        var _blockPopunders = function() {
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

        var _isWall = function(el) {
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

        var _dismiss = function(el) {
            if (!_isWall(el)) return;
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

        var _scanDOM = function() {
            document.querySelectorAll('div,section,aside,dialog').forEach(_dismiss);
            if (document.body)
                [].slice.call(document.body.classList)
                    .filter(function(c){return _ATTR.test(c);})
                    .forEach(function(c){document.body.classList.remove(c);});
        };

        var _watching = false;
        var _watchDOM = function() {
            if (_watching || !document.body) return;
            _watching = true;
            var obs = new MutationObserver(function(muts) {
                muts.forEach(function(m) {
                    m.addedNodes.forEach(function(n){if(n.nodeType===1)_dismiss(n);});
                    if (m.type==='attributes' && m.target) {
                        _dismiss(m.target);
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
                _spoofGlobals();
                _spoofFAB();
                _spoofBaitGeometry();
                _blockAABScripts();
                _blockAABRequests();
                _blockPopunders();
            },
            active: function() { _scanDOM(); _watchDOM(); },
        };
    })();

    // ─── COUNTDOWN MODULE ─────────────────────────────────────────────────────
    var _CNTDN = (function() {
        var _VARS = ['counter','count','countdown','timer','seconds','time','sec',
                     'remaining','timeLeft','timerCount','timeRemaining','waitTime',
                     'waitSeconds','countSec','secs','timeleft','counter_time',
                     'counterTime','cooldown','cooldownSeconds'];

        var varZero = function() {
            _VARS.forEach(function(k) {
                if (typeof _uw[k] === 'number' && _uw[k] > 0) {
                    try { _uw[k] = 0; } catch(_e) {}
                }
            });
            try {
                Object.keys(_uw).forEach(function(k) {
                    if (typeof _uw[k] === 'number' && _uw[k] > 0 && _uw[k] < 180 &&
                        /time|count|sec|tick|remain|wait|cool/i.test(k))
                        try { _uw[k] = 0; } catch(_e) {}
                });
            } catch(_e) {}
        };

        var domZero = function(sel) {
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

        // 3-tier timer hook: unsafeWindow → <script> injection → sandbox
        var _timerHooked = false;
        var hookTimers = function() {
            if (_timerHooked) return;
            _timerHooked = true;
            var _collapse = function(d) {
                var n = Number(d) || 0;
                return (n > 200 && n <= 90000) ? Math.max(50, Math.floor(n * 0.05)) : n;
            };
            // Tier 1: unsafeWindow (direct page-scope replacement)
            try {
                if (_uw) {
                    var _oST = _uw.setTimeout.bind(_uw);
                    var _oSI = _uw.setInterval.bind(_uw);
                    _uw.setTimeout = function(fn,d){
                        return _oST.apply(_uw, [fn,_collapse(d)].concat([].slice.call(arguments,2)));
                    };
                    _uw.setInterval = function(fn,d){
                        return _oSI.apply(_uw, [fn,_collapse(d)].concat([].slice.call(arguments,2)));
                    };
                    return;
                }
            } catch(_e) {}
            // Tier 2: <script> injection (page scope via DOM)
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
            // Tier 3: sandbox fallback
            try {
                var _oST2 = window.setTimeout.bind(window);
                var _oSI2 = window.setInterval.bind(window);
                window.setTimeout  = function(fn,d){return _oST2(fn,_collapse(d));};
                window.setInterval = function(fn,d){return _oSI2(fn,_collapse(d));};
            } catch(_e) {}
        };

        // Date.now() spoofing — advances by 35s so time-check conditions pass.
        var _dateHooked = false;
        var hookDate = function(advanceMs) {
            advanceMs = advanceMs || 35000;
            if (_dateHooked) return;
            _dateHooked = true;
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

        // Force-submit: force-enables disabled buttons after captcha is solved.
        var _forceSubmitDone = false;
        var forceSubmit = function(cfg, badge, goFn) {
            if (_forceSubmitDone || !cfg.forceSelectors) return;
            // Only proceed if captcha is solved (or absent)
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
                (_uw.grecaptcha && (function(){
                    try{return _uw.grecaptcha.getResponse().length>0;}catch(_e){return false;}
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
                    if (el.type === 'submit' && el.form) { goFn(el, 'forceSubmit'); }
                    else { el.click(); goFn(el, 'forceClick'); }
                    return;
                } catch(_e) {}
            }
        };

        return { varZero:varZero, domZero:domZero, hookTimers:hookTimers,
                 hookDate:hookDate, forceSubmit:forceSubmit };
    })();

    // ─── NETWORK INTERCEPT ────────────────────────────────────────────────────
    // Hooks fetch() and XHR to capture destination URL from API responses.
    var _NET = (function() {
        var _destUrl = null;
        var _noise = ['google','facebook','twitter','analytics','pixel',
                      'beacon','cdn','static','ajax','font','jquery'];

        var _isExternal = function(url, excl) {
            if (!url || url.indexOf('http') !== 0) return false;
            if (excl && excl.some(function(h){return url.indexOf(h)!==-1;})) return false;
            if (_noise.some(function(n){return url.indexOf(n)!==-1;})) return false;
            return true;
        };

        var _parse = function(body, excl) {
            if (!body || _destUrl) return;
            var j = _json(body);
            if (j) {
                var u = _extractUrl(j, excl);
                if (u && _isExternal(u, excl)) { _destUrl = u; }
            }
        };

        var _hooked = false;
        var init = function(excl) {
            excl = excl || [];
            if (_hooked) return;
            _hooked = true;
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
        return { init:init, getDestUrl:function(){return _destUrl;}, clear:function(){_destUrl=null;} };
    })();

    // ─── CAPTCHA MODULE ───────────────────────────────────────────────────────
    var _CAPTCHA = (function() {

        // Tier 1A: math captcha auto-solve
        var _solveMath = function(text) {
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

        // Tier 1B: digit-order captcha (padding-left sort trick)
        var _solveDigitOrder = function() {
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

        // Tier 1C: visible math expression near captcha input
        var _solveVisibleMath = function() {
            var inputs = document.querySelectorAll(
                'input[name*="captcha"],input[id*="captcha"],' +
                'input[placeholder*="answer" i],input[placeholder*="result" i]');
            for (var i = 0; i < inputs.length; i++) {
                var inp = inputs[i];
                if (inp.value) continue;
                var container = inp.closest('form,.captcha,[class*="captcha"],[id*="captcha"]')
                    || inp.parentElement;
                var question = container ? (container.innerText || container.textContent) : '';
                var answer = _solveMath(question);
                if (answer !== null) {
                    inp.value = String(answer);
                    inp.dispatchEvent(new Event('input', {bubbles:true}));
                    inp.dispatchEvent(new Event('change', {bubbles:true}));
                    return true;
                }
            }
            return _solveDigitOrder();
        };

        // Tier 2: invisible reCAPTCHA direct execute
        var _tryInvisible = function() {
            try {
                if (!document.querySelector('.grecaptcha-badge')) return false;
                if (_uw.grecaptcha && typeof _uw.grecaptcha.execute === 'function') {
                    _uw.grecaptcha.execute();
                    return true;
                }
            } catch(_e) {}
            return false;
        };

        // Tier 3: completion detection promise
        var waitForSolution = function(timeoutMs) {
            timeoutMs = timeoutMs || 120000;
            return new Promise(function(resolve, reject) {
                var start = Date.now();
                var id = setInterval(function() {
                    try {
                        if (document.querySelector('.iconcaptcha-modal__body-checkmark'))
                            { clearInterval(id); resolve('iconcaptcha'); return; }
                        if (document.querySelector("iframe[src*='hcaptcha.com']"))
                            if (_uw.hcaptcha && _uw.hcaptcha.getResponse().length > 0)
                                { clearInterval(id); resolve('hcaptcha'); return; }
                        if (document.querySelector("input[name='cf-turnstile-response']"))
                            if (_uw.turnstile && _uw.turnstile.getResponse().length > 0)
                                { clearInterval(id); resolve('turnstile'); return; }
                        if (document.querySelector("iframe[title='reCAPTCHA']"))
                            if (_uw.grecaptcha && _uw.grecaptcha.getResponse().length > 0)
                                { clearInterval(id); resolve('recaptcha'); return; }
                    } catch(_e) {}
                    if (Date.now() - start > timeoutMs) {
                        clearInterval(id);
                        reject(new Error('timeout'));
                    }
                }, 800);
            });
        };

        // Tier 4: audio assist overlay for reCAPTCHA v2
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
            var audioBtn = doc.querySelector('#recaptcha-audio-button');
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
                            var input = doc.querySelector('#audio-response');
                            if (input) {
                                input.value = answer;
                                input.dispatchEvent(new Event('input',{bubbles:true}));
                            }
                            var verifyBtn = doc.querySelector('#recaptcha-verify-button');
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

            if (_solveVisibleMath()) { if (onSolved) onSolved('math'); return Promise.resolve('math'); }
            if (_tryInvisible()) {
                return waitForSolution(15000)
                    .then(function(t){if(onSolved)onSolved(t);return t;})
                    .catch(function(){return 'unknown';});
            }
            var hasRC = !!document.querySelector("iframe[title='reCAPTCHA'],.g-recaptcha");
            var hasHC = !!document.querySelector("iframe[src*='hcaptcha.com'],.h-captcha");
            var hasCF = !!document.querySelector("input[name='cf-turnstile-response'],.cf-turnstile");
            if (!hasRC && !hasHC && !hasCF) return Promise.resolve('none');
            if (hasRC && enableAudio) setTimeout(_tryAudioAssist, 1200);
            return waitForSolution(waitTimeout)
                .then(function(t){if(onSolved)onSolved(t);return t;})
                .catch(function(){return 'timeout';});
        };

        var watchForCaptcha = function(opts) {
            opts = opts || {};
            if (_CAPTCHA._cw) return;
            _CAPTCHA._cw = true;
            var _check = function(){
                if(_solveVisibleMath() && opts.onSolved) opts.onSolved('math');
            };
            if (document.body) {
                var obs = new MutationObserver(_check);
                obs.observe(document.body, {childList:true, subtree:true});
            }
            _check();
        };

        var _CAPTCHA = { run:run, waitForSolution:waitForSolution,
                         solveMath:_solveMath, watchForCaptcha:watchForCaptcha };
        return _CAPTCHA;
    })();

    // ─── BUTTON DETECTOR ─────────────────────────────────────────────────────
    var _BTN = (function() {
        var _SKIP = ['wait','please','loading','verif','second','processing','generating'];
        var _wasDisabled = new WeakSet();

        var _isReady = function(el) {
            if (!el) return false;
            if (el.disabled) { _wasDisabled.add(el); return false; }
            if (el.classList && el.classList.contains('disabled')) { _wasDisabled.add(el); return false; }
            if (el.offsetParent === null) return false;
            var st = window.getComputedStyle(el);
            if (st.display === 'none' || st.visibility === 'hidden') return false;
            if (parseFloat(st.opacity) < 0.1) return false;
            var text = (el.innerText || el.value || el.textContent || '').toLowerCase().trim();
            if (_SKIP.some(function(w){return text.indexOf(w)!==-1;})) return false;
            return true;
        };

        var seedDisabled = function() {
            document.querySelectorAll('a,button,input[type=submit],input[type=button]')
                .forEach(function(el){ if (!_isReady(el)) _wasDisabled.add(el); });
        };

        var checkTransition = function(el) {
            if (!el || (el.tagName === 'INPUT' && el.type === 'hidden')) return null;
            if (_wasDisabled.has(el) && _isReady(el)) return el;
            if (!_isReady(el)) _wasDisabled.add(el);
            return null;
        };

        var PROCEED_WORDS = [
            'get link','continue','proceed','click here','visit link','open',
            'access link','next','get','skip','download','click to continue',
            'free download','start download','generate link','download now',
        ];

        var findByText = function() {
            var els = document.querySelectorAll('a,button,input[type=submit],[role=button]');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                if (!_isReady(el)) continue;
                var text = (el.innerText || el.value || el.textContent || '').toLowerCase();
                if (PROCEED_WORDS.some(function(w){return text.indexOf(w)!==-1;})) return el;
            }
            return null;
        };

        var findBySelector = function(selectors) {
            if (!selectors) return null;
            for (var i = 0; i < selectors.length; i++) {
                try {
                    var el = document.querySelector(selectors[i]);
                    if (el && _isReady(el)) return el;
                } catch(_e) {}
            }
            return null;
        };

        // Structural heuristic: largest visible clickable element near page center.
        var findByHeuristic = function() {
            var best = null, bestScore = 0;
            var els = document.querySelectorAll('a[href],button');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                if (!_isReady(el)) continue;
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

        var _captchaSolved = function() {
            var cf = document.querySelector("input[name='cf-turnstile-response'][value]:not([value=''])");
            if (cf && cf.value) return true;
            var hc = document.querySelector("textarea[name='h-captcha-response'],textarea[name='g-recaptcha-response']");
            if (hc && hc.value) return true;
            if (_uw.grecaptcha) {
                try { if (_uw.grecaptcha.getResponse().length > 0) return true; } catch(_e) {}
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
            return _captchaSolved() ? find(selectors) : null;
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
                 checkTransition:checkTransition, isReady:_isReady, seedDisabled:seedDisabled };
    })();

    // ─── BYPASS API ───────────────────────────────────────────────────────────
    var _BAPI = (function() {
        var _SUPPORTED = [
            /linkvertise\.com/i, /link-to\.net/i,
            /loot-link\.com/i,   /loot-links\.com/i,   /lootlink\.org/i,
            /lootlinks\.co/i,    /lootdest\.(info|org|com)/i,
            /links-loot\.com/i,  /linksloot\.net/i,
            /bleleadersto\.com/i,/tonordersitye\.com/i, /daughablelea\.com/i,
            /mdlinkshub\.com/i,  /best-links\.org\/s\?/i,
        ];
        var _API = 'https://adbypass.org/bypass?bypass=';
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

    // ─── SITE REGISTRY ────────────────────────────────────────────────────────
    var SITES = [
        {
            id: 'linkshortify',
            hosts: ['lksfy.com','linkshortify.com','linkshortify.in','lksfy.in'],
            selectors: [
                'a.get-link:not(.disabled)', 'a.get-link.btn-primary.btn', 'a.get-link',
                '.get-link.btn-primary', '#bottomButton', '#topButton',
                'a.btn.btn-primary.btn-lg', '#btn-main', '.btn-main',
                'a.btn:not(.disabled)', 'button.btn:not([disabled])',
                '[id*="go-link"]', '[id*="getlink"]',
                '[class*="get-link"]', '[class*="btn-get"]',
                '[class*="proceed"]', '[id*="proceed"]',
                '[class*="continue"]', 'a[href][class*="btn"]',
            ],
            bottomBtn: '#bottomButton',
            bottomTxt: ['get link','continue','click to continue','next','visit','proceed'],
            hookTimers: true, hookDate: false,
        },
        {
            id: 'mega4upload', hosts: ['mega4upload.net'],
            selectors: [
                'input[name="mega_free"]', '#downloadbtn',
                'button.downloadbtn', 'button#downloadbtn',
            ],
            hookTimers: true, hookDate: true,
            countdownSelector: '#countdown .seconds, #countdown span, span.seconds',
        },
        {
            id: 'uploady', hosts: ['uploady.io'],
            selectors: ['#free_dwn:not([disabled])', '#free_dwn'],
            hookTimers: true, hookDate: false,
            countdownSelector: '#free-timer',
        },
        {
            id: 'upfilesgo', hosts: ['upfilesgo.com','upfiles.com','upfiles.app'],
            selectors: [
                '#link-button-free', 'button#link-button-free',
                'button.vhit:not([disabled])',
                'button.btn-primary:not([disabled])',
                'button[type="submit"]:not([disabled])',
            ],
            forceSelectors: ['#link-button-free', 'button.vhit'],
            hookTimers: true, hookDate: true,
        },
        {
            id: 'modsfire', hosts: ['modsfire.com'],
            selectors: [
                'a.download-button[href^="/d/"]',
                'a.download-button[href^="/download/"]',
                'a.download-button',
            ],
            hookTimers: true, hookDate: true,
        },
        {
            id: 'dailyuploads', hosts: ['dailyuploads.net'],
            selectors: [
                '#downloadbtn', '.downloadbtn', 'button.downloadbtn',
                'button[type="submit"]:not([disabled])',
            ],
            hookTimers: true, hookDate: true,
            countdownSelector: '#countdown .seconds, .seconds',
        },
        {
            id: 'jioupload',
            hosts: ['jioupload.link','jioupload.com','jioupload.icu','totoly.monster'],
            selectors: [
                'button.btn-secondary.btn-md', 'button.btn.btn-secondary',
                '#continueBtn',
                'a.btn.btn-secondary[href*="/file/"]',
                'button[type="submit"]:not([disabled])',
                'a.btn:not(.disabled)',
            ],
            hookTimers: true, hookDate: true,
            mathCaptchaEl: '#challenge', mathCaptchaInput: '#captcha',
        },
        {
            id: 'cloudfam', hosts: ['cloudfam.io','get.cloudfam.io'],
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
            hookTimers: true, hookDate: true,
        },
        {
            id: 'frdl', hosts: ['frdl.io','freedl.ink','fredl.ru','frdl.is'],
            selectors: [
                '#downloadbtnfree', 'button.downloadbtnfree',
                'a.btn-primary.btn-block.mb-4[href]:not([href=""])',
                'a.btn-primary.btn-block',
                'button#downloadbtnfree:not([disabled])',
                'button.btn-outline-primary:not([disabled])',
                'button[type="submit"]:not([disabled])',
            ],
            hookTimers: true, hookDate: true,
            countdownSelector: '#countdown .seconds, .seconds',
            cooldownPatterns: [
                /you have to wait/i,
                /wait.*minutes.*seconds.*next download/i,
                /wait.*till.*next download/i,
            ],
        },
        {
            id: 'rapidgator', hosts: ['rapidgator.net'],
            selectors: [
                '.btn-free.act-link.link', 'a.btn-free.act-link', 'a.act-link.link',
                '#download-btn', 'a.btn-download',
                'a[href*="/download/"]:not(.disabled)', 'a.btn:not(.disabled)',
            ],
            hookTimers: true, hookDate: true,
            cooldownPatterns: [
                /didn.t wait specified time/i,
                /try again or contact.*administrator/i,
                /wait.*before.*next.*download/i,
            ],
        },
    ];

    var _cfg = SITES.find(function(s) {
        return s.hosts.some(function(h) { return _HOST.indexOf(h) !== -1; });
    });

    // ─── ENGINE ────────────────────────────────────────────────────────────────
    // Run stealth immediately at document-start
    _AAB.stealth();

    // Hook timers for sites that need it — must be before any page JS runs
    if (_cfg && _cfg.hookTimers) { _CNTDN.hookTimers(); }
    if (_cfg && _cfg.hookDate)   { _CNTDN.hookDate(35000); }

    // Network intercept — capture destination from API responses
    _NET.init(_cfg ? _cfg.hosts : []);

    // ── Per-site early init (runs at document-start or domReady) ──────────────
    var _earlyHref = null;

    var _siteEarlyInit = function() {
        if (!_cfg) return;

        // uploady.io: call es() directly, submit F1 after rand token is ready
        if (_HOST.indexOf('uploady.io') !== -1) {
            var _doUploady = function() {
                try {
                    if (typeof _uw.es === 'function') {
                        _uw.es();
                    } else {
                        var b = document.querySelector('#free_dwn');
                        if (b) b.click();
                    }
                } catch(_e) {
                    var b2 = document.querySelector('#free_dwn');
                    if (b2) b2.click();
                }
                setTimeout(function() {
                    var f1 = document.getElementById('F1');
                    if (!f1) return;
                    var rand = f1.querySelector('input[name="rand"]');
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

        // modsfire.com: grab href before JS strips it, store in _earlyHref
        if (_HOST.indexOf('modsfire.com') !== -1) {
            var btn = document.querySelector('a.download-button[href]');
            if (btn && btn.href && btn.href !== '#' && btn.href.indexOf('javascript') === -1) {
                _earlyHref = btn.href;
            }
            return;
        }

        // cloudfam.io: poll for wall dismissal, skip queue/cooldown, then click download link
        if (_HOST.indexOf('cloudfam.io') !== -1) {
            var _pollCF = setInterval(function() {
                // Dismiss adblock modals and queue overlays
                document.querySelectorAll('div,section,aside,dialog').forEach(function(el) {
                    var st = window.getComputedStyle(el);
                    var text = (el.innerText || '').toLowerCase();
                    if ((text.indexOf('ad blocker') !== -1 || text.indexOf('adblock') !== -1 || text.indexOf('verification queue') !== -1) &&
                        st.position === 'fixed' && parseInt(st.zIndex || 0) > 99) {
                        el.style.setProperty('display', 'none', 'important');
                        if (document.body) document.body.style.removeProperty('overflow');
                    }
                });
                // Click intermediate "Wait 60s for Free Download" or "I agree" options if present
                var freeOpt = Array.from(document.querySelectorAll('button, a')).find(function(b) {
                    var txt = (b.textContent || '').trim().toLowerCase();
                    return txt.indexOf('free download') !== -1 || txt.indexOf('agree to download') !== -1;
                });
                if (freeOpt && freeOpt.offsetParent !== null) {
                    try { freeOpt.click(); } catch(_e) {}
                }
                // Zero any countdown timer elements
                document.querySelectorAll('#countdown, .seconds, [id*="timer"]').forEach(function(el) {
                    if (/^\d+$/.test(el.textContent.trim())) el.textContent = '0';
                });
                // Find primary destination / download link
                var link = document.querySelector('a[href*="redirection0.php"]') ||
                           document.querySelector('a[href*="redirection"]') ||
                           document.querySelector('a.get-link:not(.disabled)') ||
                           document.querySelector('a.get-link');
                if (link && link.offsetParent !== null) {
                    clearInterval(_pollCF);
                    if (link.href && link.href.indexOf('javascript') === -1)
                        _proceed(link.href);
                    else link.click();
                }
            }, 400);
            setTimeout(function(){clearInterval(_pollCF);}, 30000);
            return;
        }

        // vplink.in & intermediate landing networks (techmint.in, etc.)
        if (_HOST.indexOf('vplink.in') !== -1 || _HOST.indexOf('techmint.in') !== -1) {
            var _pollVP = setInterval(function() {
                // If on techmint.in landing step, auto-advance
                if (_HOST.indexOf('techmint.in') !== -1) {
                    var btn = document.querySelector('#btn-main') ||
                              document.querySelector('#gotolink') ||
                              document.querySelector('a.get-link') ||
                              document.querySelector('button.btn-primary');
                    if (btn && btn.offsetParent !== null) {
                        clearInterval(_pollVP);
                        btn.click();
                        return;
                    }
                    var landingLink = document.querySelector('a[href*="techmint.in/studyinsurances/"]');
                    if (landingLink && landingLink.offsetParent !== null) {
                        clearInterval(_pollVP);
                        _proceed(landingLink.href);
                        return;
                    }
                }
                // On vplink.in itself
                var vplink = document.querySelector('a.get-link:not(.disabled)') ||
                             document.querySelector('a.get-link') ||
                             document.querySelector('#btn-main');
                if (vplink && vplink.offsetParent !== null) {
                    clearInterval(_pollVP);
                    if (vplink.href && vplink.href.indexOf('javascript') === -1) _proceed(vplink.href);
                    else vplink.click();
                }
            }, 500);
            setTimeout(function(){clearInterval(_pollVP);}, 30000);
            return;
        }

        // tpi.li / srnky.com: handle Turnstile & continue
        if (_HOST.indexOf('tpi.li') !== -1 || _HOST.indexOf('srnky.com') !== -1 || _HOST.indexOf('oii.la') !== -1) {
            var _pollTpi = setInterval(function() {
                // Look for base64 encoded destination in page
                var m = document.documentElement.innerHTML.match(/aHR0c[a-zA-Z0-9+/=]+(?<!=)/);
                if (m) {
                    try {
                        var d = atob(m[0]);
                        if (d.indexOf('http') === 0 && d.indexOf(location.hostname) === -1) {
                            clearInterval(_pollTpi);
                            _proceed(d);
                            return;
                        }
                    } catch(_e) {}
                }
                var c = document.querySelector('input[name="cf-turnstile-response"]');
                var b = document.querySelector('#continue') || document.querySelector('button[type="submit"]') || document.querySelector('a.btn-primary');
                if (c && c.value && b && b.offsetParent !== null) {
                    clearInterval(_pollTpi);
                    b.click();
                }
            }, 500);
            setTimeout(function(){clearInterval(_pollTpi);}, 30000);
            return;
        }

        // psa.wf: bypass adblock detection & auto-submit redirect form
        if (_HOST.indexOf('psa.wf') !== -1) {
            // Spoof adblock absence
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

        // frdl: click step-1 button, zero the timer text
        if (_HOST.indexOf('frdl.io') !== -1 || _HOST.indexOf('freedl.ink') !== -1 ||
            _HOST.indexOf('fredl.ru') !== -1 || _HOST.indexOf('frdl.is')    !== -1) {
            var step1 = document.querySelector('#downloadbtnfree');
            if (step1) {
                step1.click();
                setTimeout(function() {
                    document.querySelectorAll('.seconds').forEach(function(el) {
                        if (/^\d+$/.test(el.textContent.trim())) el.textContent = '1';
                    });
                }, 500);
            }
            return;
        }

        // jioupload.com: solve math captcha
        if (_HOST.indexOf('jioupload.com') !== -1) {
            var ch = document.querySelector('#challenge');
            if (ch) {
                var parts = (ch.textContent || '').replace(/[=?]/g,'')
                    .replace(/solve[\s]*:/i,'').trim().split(/[ ]+/);
                var a=parseInt(parts[0]), op=parts[1], b=parseInt(parts[2]);
                if (!isNaN(a) && !isNaN(b)) {
                    var ans = op==='+' ? a+b : op==='-' ? a-b :
                              (op==='*'||op==='×') ? a*b : null;
                    if (ans !== null) {
                        var inp = document.querySelector('#captcha');
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
    };

    // ── DOM READY handler ─────────────────────────────────────────────────────
    var _done    = false;
    var _obs     = null;
    var _poll    = null;

    var _goUrl = function(url) {
        if (!url || typeof url !== 'string') return;
        if (url.indexOf('http') !== 0 || url.indexOf('javascript:') !== -1) return;
        window.location.assign(url);
    };

    var _proceed = function(dest) {
        if (_done) return;
        _done = true;
        if (_obs) { try{_obs.disconnect();}catch(_e){} }
        if (_poll) clearInterval(_poll);

        if (_SETTINGS.autoMode()) {
            _toast('✅ Redirecting...', '#4caf50');
            setTimeout(function(){_badge.style.opacity='0';}, 2500);
            if (typeof dest === 'string') _goUrl(dest);
            else _BTN.click(dest);
        } else {
            _toast('✅ Ready!', '#4caf50');
            _SETTINGS.showProceedBtn(_badge, function() {
                _badge.style.opacity = '0';
                if (typeof dest === 'string') _goUrl(dest);
                else _BTN.click(dest);
            });
        }
    };

    var _badge = null;
    var _toast = function(msg, color) {
        if (!_badge) return;
        _badge.textContent = msg;
        if (color) _badge.style.color = color;
    };

    // Try bypass.city API fallback for hardened sites
    var _tryApi = function() {
        if (_BAPI.canHandle(_URL)) {
            _BAPI.redirect(_URL);
            return true;
        }
        return false;
    };

    var _domReady = function() {
        _AAB.active();
        _BTN.seedDisabled();
        _CAPTCHA.watchForCaptcha();
        _siteEarlyInit();

        // Status badge
        _badge = document.createElement('div');
        _badge.style.cssText = 'position:fixed;bottom:20px;left:50%;' +
            'transform:translateX(-50%);background:#1a1a2e;color:#e0e0e0;' +
            'padding:9px 20px;border-radius:20px;font:13px/1.4 sans-serif;' +
            'z-index:2147483647;box-shadow:0 4px 18px rgba(0,0,0,.55);' +
            'border:1px solid #2e2e4e;pointer-events:none;transition:opacity .4s;white-space:nowrap;';
        _badge.textContent = '⏳ Bypass active...';
        document.body.appendChild(_badge);

        // Try API immediately for known hardened sites
        if (_tryApi()) return;

        // MutationObserver: catches disabled→enabled transitions and new nodes
        _obs = new MutationObserver(function(mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var m = mutations[i];
                for (var j = 0; j < m.addedNodes.length; j++) {
                    var n = m.addedNodes[j];
                    if (n.nodeType !== 1) continue;
                    if (_BTN.isReady(n)) {
                        var t = (n.innerText || '').toLowerCase();
                        var words = ['get link','continue','proceed','download','get'];
                        if (words.some(function(w){return t.indexOf(w)!==-1;})) {
                            _proceed(n); return;
                        }
                    }
                }
                if (m.type === 'attributes') {
                    var el = _BTN.checkTransition(m.target);
                    if (el) { _proceed(el); return; }
                }
            }
            var btn = _BTN.findGated(_cfg ? _cfg.selectors : null);
            if (btn) _proceed(btn);
        });
        if (document.body)
            _obs.observe(document.body, {
                childList:true, subtree:true, attributes:true,
                attributeFilter:['disabled','class','style'],
            });

        // Poll loop: countdown zeroing, network intercept check, button scan
        var _elapsed = 0;
        _poll = setInterval(function() {
            _elapsed += 300;

            // Best case: destination captured from network intercept
            var destUrl = _NET.getDestUrl();
            if (destUrl && !_done) { _proceed(destUrl); return; }

            // Countdown zeroing
            _CNTDN.varZero();
            if (_cfg && _cfg.countdownSelector) _CNTDN.domZero(_cfg.countdownSelector);

            // Force-submit disabled buttons after captcha
            if (_cfg && _cfg.forceSelectors && !_done)
                _CNTDN.forceSubmit(_cfg, _badge, _proceed);

            // Cooldown detection
            if (_cfg && _cfg.cooldownPatterns && document.body) {
                var body = document.body.innerText || '';
                if (_cfg.cooldownPatterns.some(function(p){return p.test(body);})) {
                    _toast('⏳ Server cooldown — wait and retry', '#ff9800');
                    setTimeout(function(){_badge.style.opacity='0';}, 10000);
                    if (_obs) _obs.disconnect();
                    clearInterval(_poll);
                    return;
                }
            }

            // Button detection (captcha-gated)
            var btn = _BTN.findGated(_cfg ? _cfg.selectors : null);
            if (btn && !_done) {
                // Use _earlyHref if available (e.g. modsfire pre-captured href)
                if (_earlyHref && btn.tagName === 'A') { _proceed(_earlyHref); return; }
                _proceed(btn); return;
            }

            // Generic go-link AJAX for Indian shortlinks
            if (!_done && !_cfg) {
                var form = document.querySelector('form#go-link');
                if (form && _uw.jQuery) {
                    var $ = _uw.jQuery;
                    var $form = $(form);
                    $.ajax({
                        type:'POST', url:$form.attr('action'),
                        data:$form.serialize(), dataType:'json',
                        success:function(res){if(res&&res.url&&!_done)_proceed(res.url);}
                    });
                }
            }

            _toast('⏳ Waiting... (' + Math.round(_elapsed / 1000) + 's)');

            var maxWait = (_cfg && (_cfg.hookTimers || _cfg.hookDate)) ? 120000 : 60000;
            if (_elapsed >= maxWait) {
                _toast('❌ Timed out', '#f44336');
                setTimeout(function(){_badge.style.opacity='0';}, 7000);
                if (_obs) _obs.disconnect();
                clearInterval(_poll);
            }
        }, 300);
    };

    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', _domReady, {once:true});
    else _domReady();

})();

// ----- Bypass mega-enlace ( Taken from AdGuard https://github.com/AdguardTeam/AdguardFilters/blob/b1622e8b387148509ca355e8070ffa5cdcf87525/SpanishFilter/sections/general_extensions.txt#L108 / https://github.com/AdguardTeam/AdguardFilters/issues/174863#issuecomment-1996735239) -----
// used in: pelisenhd.org latinomegahd.net gatonplayseries.com peliculasgd.net tododvdfull.com cinemaniahdd.net programasvirtualespc.net compucalitv.pro
(function() {
    if (/(mega-enlace|acortados).com|tulink.org/.test(window.location.href)) {
        const window = unsafeWindow; //Added so it works in ViolentMonkey instead of AdGuard

        //Adguard snippet expanded and modified
        ! function() {
            const e = e => { // The e function: It sends a POST request to the link shortener's server and performs some string replacements to modify the form data and action URL. Finally, it sends another POST request with the modified form data to the action URL.
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
                o = { // The o object: This object is a proxy that intercepts function calls. It checks if the function call includes the api_key parameter and performs additional modifications to the function's code. If the necessary conditions are met, it tries to bypass the link shortener by calling the e function.
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
                                    //Check if there is already access permission before launching the POST requests for the bypass
                                    let button = document.querySelector('input[type="button"][id="contador"][value="IR AL ENLACE"]');
                                    if (!button){
                                        e(c); //Launch the POST requests
                                        // Check periodically if access is granted to click the button
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
// ----- ----- -----


// ----- Bypass paster.so ------
(function() {
    'use strict';

    if (/^https:\/\/paster\.so\/\w+/.test(window.location.href)) {

        // List of excluded domains
        const excludedDomains = ['paster.so', 'google.com', 'cloudflareinsights.com', 'wikipedia.com', 'w3.org', 'hcaptcha.com', 'gstatic.com'];

        let overlayCreated = false;

        // Function to extract URLs from the page source code and remove duplicates
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

        // Function to create the overlay element and add clickable URLs to it
        function addURLsToOverlay(urls) {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '50%';
            overlay.style.right = '20px'; // Adjusted to appear in the middle right corner
            overlay.style.transform = 'translateY(-50%)';
            overlay.style.padding = '10px';
            overlay.style.borderRadius = '5px';
            overlay.style.zIndex = '9999';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            overlay.style.color = '#fff';

            // Add title
            const title = document.createElement('h3');
            title.textContent = 'URLs found:';
            overlay.appendChild(title);

            const urlList = document.createElement('ul');
            urls.forEach(url => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = url;
                link.href = url;
                link.target = '_blank'; // Open link in a new tab
                listItem.appendChild(link);
                urlList.appendChild(listItem);
            });

            overlay.appendChild(urlList);
            document.body.appendChild(overlay);
        }

        // Wait for the window to be fully loaded
        window.addEventListener('load', () => {
            if (!overlayCreated) {
                const extractedURLs = extractURLsFromPage();
                const redirect = (finalUrl) => typeof redirectWithMessage === 'function' ? redirectWithMessage(finalUrl) : redirect(finalUrl);
                if (extractedURLs.length === 1) {
                    redirect(extractedURLs[0]); // Redirect to the URL if only one URL is found
                } else if (extractedURLs.length > 1) {
                    addURLsToOverlay(extractedURLs); // Add URLs to overlay if more than one URL is found
                    overlayCreated = true;
                } else {
                    redirect(`https://adbypass.org/bypass?bypass=${encodeURIComponent(window.location.href)}`);
                }
            }
        });
    }
})();
// ---------

//---profitsfly reload helper----
(function() {
    "use strict";

    const domainRegex = /^https:\/\/(.*\.|)(playonpc.online|(quins|megahosting).us|(tradeshowrating|historyofyesterday|retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|ngebike).com|gally.shop|(qanin|ivnlnews|jobvox|gfcg).xyz|evegor.net|freeat30.org|droplink.co)\/.*/;
    if (domainRegex.test(window.location.href)) {

        // ---RELOAD DEAD-END PAGES---
        if (document.readyState === "complete") {
            onWindowLoad();
        } else {
            window.addEventListener('load', onWindowLoad);
        }

        function onWindowLoad() {

            // Continue immediately on the "Shortened link (Waiting)" page
            if (document.title === "Shortened link (Waiting)" && !window.location.href.includes("continue=true")) {
                // add continue=true to the URL
                window.location.href = window.location.href + '&continue=true';
            }

            // Function to check for messages like "Click any ad & keep it open for 15 seconds to continue" and reload the page if one exists
            let reloading = false;
            function checkForMessage() {

                // "Click on ad to continue" can be ignored for now
                // const paragraphs = document.getElementsByTagName("p");
                // for (let p of paragraphs) {
                //     if (/.*click.+ad.*to.+continue.*/is.test(p.textContent) && isElementVisibleAndEnabled(p)) {
                //         if (!reloading) location.reload(); // Reload the page
                //         reloading = true;
                //         return; // Exit the function after reloading
                //     }
                // }

                if (/Less than.+passed between actions.+try again/.test(document.body.textContent)) {
                    if (!reloading) location.reload(); // Reload the page
                    reloading = true;
                    return; // Exit the function after reloading
                }
            }

            // Helper function to determine if an element is visible and enabled
            function isElementVisibleAndEnabled(el) {
                // Check if the element and all its parents are visible
                let currentElement = el;
                while (currentElement) {
                    const style = getComputedStyle(currentElement);
                    if (style.display === "none" || style.visibility === "hidden") {
                        return false; // Element or parent is not visible
                    }
                    currentElement = currentElement.parentElement; // Move up the DOM tree
                }
                // Check if the button is enabled
                return !el.disabled;
            }

            setInterval(checkForMessage, 1000);
        }

        // -- Open captchas
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

        // ---After DOM loaded---
        document.addEventListener('DOMContentLoaded', function() {

            // Set auxiliary variables
            window.assDidCkeDone = true;

            // Hide adblock detection; alternative with uBO: historyofyesterday.com##.unblocker-container
            setInterval(() => {
                const unblockerContainer = document.querySelector(".unblocker-container");
                if (unblockerContainer) {unblockerContainer.style.display = "none";}
            }, 1000);

            // ---Remove YouTube modal and banner--- 
            // (alternative with uBO : https://github.com/uBlockOrigin/uAssets/discussions/17361#discussioncomment-11864776)
            if (unsafeWindow.youtubeVideoStepProceed) { unsafeWindow.youtubeVideoStepProceed();}
            const stickyBanner = document.querySelector(".mg-sticky-banner");
            if (stickyBanner) {stickyBanner.style.display = "none";}

            // ---Skip timers---
            const forcedTimerInitialValue = 7;
            function setTimer() {
                if (window.wT9882 > forcedTimerInitialValue) {
                    window.wT9882 = 1;
                }
            }
            window.wT9882 = forcedTimerInitialValue;
            setInterval(setTimer, 1000); //This function exists because if the site detects an adblocker, it switches the timer to 30, and that only happens in the last second or so

            /* ------------ Protect buttons from being removed ------------ */
            // Protect all buttons currently in the DOM
            function protectButtons() {
                const buttons = document.querySelectorAll("button");
                buttons.forEach((button) => protectElement(button));
            }

            // Protect a specific button by overriding its removal methods
            function protectElement(element) {
                if (element.__protected) return; // Avoid double protection

                // Override remove()
                const originalRemove = element.remove;
                element.remove = () => {};

                // Flag element as protected
                element.__protected = true;
            }

            // Monitor the DOM for dynamically added buttons
            const observer = new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.tagName === "BUTTON") {
                            // Protect new button
                            protectElement(node);
                        }
                    });

                    mutation.removedNodes.forEach((node) => {
                        if (node.tagName === "BUTTON") {
                            // A button was removed. Re-add it:
                            mutation.target.appendChild(node); // Re-add the button
                            protectElement(node); // Re-protect it
                        }
                    });
                });
            });

            // Start observing the document for changes
            observer.observe(document.body, { childList: true, subtree: true });

            // Protect buttons already in the DOM
            protectButtons();
        });

    }
})();
//-------

// ----- partial autoclicker for soractrl used by moviesnipipay.me,... ------
// sites with similar pages not autoclicked for now: ssrmovies.promo, mkvcinemas.phd, freecoursesite.com
// source: https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues/14#issuecomment-2588262
// optional uBO filter for easier clicking: quickeemail.com###landing, .soractrl:others()

(function() {
    const domainRegex = /quickeemail.com/
    if (domainRegex.test(window.location.href)) {

      const fakeEvent = {isTrusted: true, originalEvent: {isTrusted: true}};

      // Wait for jQuery to load
      const waitForJQuery = setInterval(() => {
          if (typeof jQuery !== "undefined") {
              clearInterval(waitForJQuery);

              // Override jQuery's `.on` method
              const originalOn = unsafeWindow.jQuery.fn.on;

              unsafeWindow.jQuery.fn.on = function(eventType, selector, handler, ...args) {
                  // Check if it's a "click" event on #soralink-human-verif-main
                  if (eventType === "click" && (this.is("#soralink-human-verif-main") || this.is(selector === "#generater") || this.is("#showlink"))) {
                      // Call the function immediately if handler is directly passed
                      if (typeof selector === "function") {
                          selector(fakeEvent); // Call the function
                      } else if (typeof handler === "function") {
                          handler(fakeEvent); // Call the handler
                      }
                  }

                  // Call the original .on method
                  return originalOn.call(this, eventType, selector, handler, ...args);
              };

              // Check if the element #soralink-human-verif-main exists
              if (!document.getElementById("soralink-human-verif-main")) {
                  // This is the second and third step with #generater and #showlink
                  setInterval(() => {
                      unsafeWindow.jQuery("#pleasewaits").hide();
                      unsafeWindow.jQuery("#showlink").show();
                  }, 1000);
              }
          }
      }, 10); // Check every 10ms
    }
})();
// ----- -----
