// ==UserScript==
// @name       Bypass Shortlinks
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     nOneCode4u
// @license    Unlicense
// @noframes
// @version    96.5-patch0.1.3
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
// @description    Automatically bypass many link shorteners. Originally by BloggerPemula.
// @include /^(?:https?:\/\/)?(?:www\.)?(?:google\.com|recaptcha\.net)\/recaptcha\/api2\/.*$/
// @match *://*/recaptcha/api2/*

// @match *://*.gocmod.com/*
// @match *://*.api.gplinks.com/*
// @match *://*.rfaucet.com/*
// @match *://*.maloma3arbi.blogspot.com/*
// @match *://*.financenuz.com/*
// @include /^(https?:\/\/)(.+)?((inshort|youlinks|adrinolinks).in|(linkcents|nitro-link).com|clk.sh)(\/.*)/
// @match *://*.thepragatishilclasses.com/*
// @include /^(https?:\/\/)(.+)?((cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech|retrocove|vaultfind|geotides|renovatehub|playallgames|countriesguide).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly|teknoasian|lifeprovy|chownest|mythnest|homesteadfeast|gizmoera|tastywhiz|speakzyo).com|(bubblix|dailytech-news).eu|(biit|carfocus).site|coinscap.info|insurancegold.in|wii.si)(\/.*)/
// @include /^(https?:\/\/)(.+)?((on-scroll|diudemy|maqal360).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(headlinerpost.com|posterify.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly).site|coinscap.info|insurancegold.in|wii.si)(\/.*)/
// @match *://*.coinilium.net/*
// @match *://*.blog.klublog.com/*
// @match *://*.dutchycorp.space/*
// @match *://*.financedoze.com/*
// @match *://*.shortfaster.net/*
// @match *://*.triggeredplay.com/*
// @match *://*.ouo.io/*
// @match *://*.adbtc.top/*
// @match *://*.linkbox.to/*
// @match *://*.modsfire.com/*
// @match *://*.the2.link/*
// @match *://*.keeplinks.org/*
// @match *://*.forex-22.com/*
// @match *://*.1shortlink.com/*
// @match *://*.1short.io/*
// @match *://*.disheye.com/*
// @match *://*.aysodamag.com/*
// @match *://*.cryptonewssite.rf.gd/*
// @match *://*.1bitspace.com/*
// @match *://*.cshort.org/*
// @match *://*.revlink.pro/*
// @match *://*.panyhealth.com/*
// @match *://*.minhapostagem.top/*
// @match *://*.playpaste.com/*
// @match *://*.sfl.gl/*
// @match *://*.lanza.me/*
// @match *://*.jioupload.icu/*
// @match *://*.lolinez.com/*
// @match *://*.shortlinks2btc.somee.com/*
// @match *://*.kisalt.digital/*
// @match *://*.linksly.co/*
// @match *://*.lksfy.com/*
// @match *://*.almontsf.com/*
// @match *://*.rotizer.net/*
// @match *://*.render-state.to/*
// @match *://*.linkforearn.com/*
// @match *://*.downfile.site/*
// @match *://*.enlacito.com/*
// @match *://*.adtival.network/*
// @match *://*.imagereviser.com/*
// @match *://*.amanguides.com/*
// @match *://*.stockmarg.com/*
// @match *://*.8tm.net/*
// @match *://*.bestfonts.pro/*
// @match *://*.cpmlink.net/*
// @match *://*.noodlemagazine.com/*
// @match *://*.paycut.pro/*
// @match *://*.forex-trnd.com/*
// @match *://*.mohtawaa.com/*
// @match *://*.knowiz0.blogspot.com/*
// @match *://*.sharetext.me/*
// @match *://*.apkw.ru/*
// @match *://*.comohoy.com/*
// @match *://*.4fnet.org/*
// @match *://*.alorra.com/*
// @match *://*.adoc.pub/*
// @match *://*.programasvirtualespc.net/*
// @match *://*.pdfcoffee.com/*
// @match *://*.boost.ink/*
// @match *://*.fansonlinehub.com/*
// @match *://*.mirrored.to/*
// @match *://*.mboost.me/*
// @match *://*.karyawan.co.id/*
// @match *://*.slink.bid/*
// @match *://*.blog.yurasu.xyz/*
// @match *://*.creditsgoal.com/*
// @match *://*.adfoc.us/*
// @match *://*.zegtrends.com/*
// @match *://*.ac.totsugeki.com/*
// @match *://*.newassets.hcaptcha.com/*
// @match *://*.bigbtc.win/*
// @match *://*.linkspy.cc/*
// @match *://*.dinheiromoney.com/*
// @match *://*.flamebook.eu.org/*
// @match *://*.rekonise.com/*
// @match *://*.vosan.co/*
// @match *://*.exblog.jp/*
// @match *://*.modcombo.com/*
// @match *://*.sub2get.com/*
// @match *://*.o-pro.online/*
// @match *://*.jobzhub.store/*
// @match *://*.curto.win/*
// @match *://*.infonerd.org/*
// @match *://*.yitarx.com/*
// @match *://*.videolyrics.in/*
// @match *://*.f2h.io/*
// @match *://*.dbree.me/*
// @match *://*.upload.ee/*
// @match *://*.gofile.io/*
// @match *://*.dddrive.me/*
// @match *://*.1fichier.com/*
// @match *://*.mp4upload.com/*
// @match *://*.takefile.link/*
// @match *://*.drop.download/*
// @match *://*.easyupload.io/*
// @match *://*.rapidgator.net/*
// @match *://*.coinsrev.com/*
// @match *://*.dropgalaxy.com/*
// @match *://*.dayuploads.com/*
// @match *://*.workupload.com/*
// @match *://*.freepreset.net/*
// @match *://*.krakenfiles.com/*
// @match *://*.file-upload.net/*
// @match *://*.uploadhaven.com/*
// @match *://*.fileresources.net/*
// @match *://*.indobo.com/*
// @match *://*.techxploitz.eu.org/*
// @match *://*.jobinmeghalaya.in/*
// @match *://*.playnano.online/*
// @match *://*.2linkes.com/*
// @match *://*.mazen-ve3.com/*
// @match *://*.apkadmin.com/*
// @match *://*.filemoon.sx/*
// @match *://*.files.fm/*
// @match *://*.k2s.cc/*
// @match *://*.katfile.com/*
// @match *://*.udrop.com/*
// @match *://*.megaupto.com/*
// @match *://*.karanpc.com/*
// @match *://*.douploads.net/*
// @match *://*.send.now/*
// @match *://*.dataupload.net/*
// @match *://*.buzzheavier.com/*
// @match *://*.bowfile.com/*
// @match *://*.dailyuploads.net/*
// @match *://*.uploadev.org/*
// @match *://*.megaup.net/*
// @match *://*.gdflix.dad/*
// @match *://*.mega4upload.net/*
// @match *://*.filespayouts.com/*
// @match *://*.uploady.io/*
// @match *://*.file-upload.org/*
// @match *://*.mexa.sh/*
// @match *://*.up-4ever.net/*
// @match *://*.hitfile.net/*
// @match *://*.servicemassar.ma/*
// @match *://*.upfion.com/*
// @match *://*.m.flyad.vip/*
// @match *://*.easylink.gamingwithtr.com/*
// @match *://*.mediafire.com/*
// @match *://*.downloader.tips/*
// @match *://*.modsbase.com/*
// @match *://*.filedm.com/*
// @match *://*.anonym.ninja/*
// @match *://*.oydir.com/*
// @match *://*.doodrive.com/*
// @match *://*.firefaucet.win/*
// @match *://*.cryptorotator.website/*
// @match *://*.qiwi.gg/*
// @match *://*.turbobit.net/*
// @match *://*.sharemods.com/*
// @match *://*.onlinetechsolution.link/*
// @match *://*.desiupload.co/*
// @match *://*.tempatwisata.pro/*
// @match *://*.bewbin.com/*
// @match *://*.lajangspot.web.id/*
// @match *://*.inshortnote.com/*
// @match *://*.jioupload.com/*
// @match *://*.teknoasian.com/*
// @match *://*.socialwolvez.com/*
// @match *://*.bitcotasks.com/*
// @match *://*.shortit.pw/*
// @match *://*.newsminer.uno/*
// @match *://*.autofaucet.dutchycorp.space/*
// @match *://*.flickr.com/*
// @include /^(https?:\/\/)(.+)?((g34new|dlgamingvn|v34down|phimsubmoi|almontsf).com|(nashib|timbertales).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(earnbee.xyz|zippynest.online|getunic.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(1ink.cc|cuturl.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fc-lc|thotpacks).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(offerwall.me|ewall.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(surl.li|surl.gd)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dogefury.com|thanks.tinygo.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogsward|coinjest).com|coinsimulator.(io|online))(\/.*)/
// @include /^(https?:\/\/)(.+)?(michaelemad.com|7misr4day.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((dramaticqueen|emubliss).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((grtjobs|jksb).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bnbfree|freeth|freebitco).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ouo.io|ouo.press)(\/.*)/
// @include /^(https?:\/\/)(.+)?(askpaccosi.com|cryptomonitor.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((kongutoday|proappapk|hipsonyc).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((viralxns|uploadsoon).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((techleets|bonloan).xyz|sharphindi.in|nyushuemu.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((jobmatric|carjankaari).com|techsl.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(usersdrive.com|ddownload.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((devnote|formshelp|rcccn).in|djbassking.live)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cutnet.net|(cutyion|cutynow|cuttlinks).com|(exego|cety).app|(jixo|jizo|gamco).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(xonnews.net|toilaquantri.com|share4u.men|camnangvay.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(oxy\.*)(\/.*)/
// @include /^(https?:\/\/)(.+)?(largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((zygina|jansamparks).com|(loanifyt|getknldgg).site|topshare.in|btcon.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financewada|utkarshonlinetest).com|financenova.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(setroom.biz.id|travelinian.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(wp.thunder-appz.eu.org|blog.adscryp.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com|sarkarins).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financenube|mixrootmods|pastescript|trimorspacks).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store|dsmusic.in|vi-music.app)(\/.*)/
// @include /^(https?:\/\/)(.+)?((aduzz|tutorialsaya|baristakesehatan|merekrut|indobo|educorp).com|deltabtc.xyz|bit4me.info)(\/.*)/
// @include /^(https?:\/\/)(.+)?(yoshare.net|olhonagrana.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coincroco.com|surflink.tech|cointox.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(solidcoins.net|fishingbreeze.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((superheromaniac|spatsify|mastkhabre|ukrupdate).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bestloansoffers|worldzc).com|earningtime.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((exeo|exego).app|(falpus|exe-urls|exnion|exe-links|exeygo|exeylink).com|4ace.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(writedroid.eu.org|modmania.eu.org|writedroid.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techkhulasha.com|itijobalert.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lakhisarainews|vahanmitra24).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(autodime.com|cryptorex.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((bchlink|usdlink).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(pubghighdamage.com|anmolbetiyojana.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(aylink.co|cpmlink.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(nishankhatri.xyz|(bebkub|owoanime|hyperkhabar).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((blogmado|kredilerim|insuranceleadsinfo).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(litecoin.host|cekip.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere|masrawytrend).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tmail|labgame).io|(gamezizo|fitdynamos).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(ify.ac|go.linkify.ru)(\/.*)/
// @include /^(https?:\/\/)(.+)?((financedoze|topjanakri|stockbhoomi).com|techhype.in|getpdf.net|cryptly.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?((importantclass|hamroguide).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(up-load.io|downloadani.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?((forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tejtime24|drinkspartner|sportswordz|newspute).com|(raftarsamachar|gadialert|jobinmeghalaya|raftarwords|sharclub|jankaritak).in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn)(\/.*)/
// @include /^(https?:\/\/)(.+)?(anonymfile.com|sharefile.co|gofile.to)(\/.*)/
// @include /^(https?:\/\/)(.+)?((carbikesupdate|carbikenation).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((uploadrar|fingau|getpczone|wokaz).com|uptomega.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ez4mods|game5s|sharedp|fastcars1|carbikenation).com|tech5s.co|a4a.site|rcccn.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(4hi.in|(10short|animerigel|encurt4|encurtacash).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs|zippynest.online|faucetsatoshi.site|tfly.link|oii.si)(\/.*)/
// @include /^(https?:\/\/)(.+)?((ecryptly|equickle).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((down.fast-down|down.mdiaload).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top)(\/.*)/
// @include /^(https?:\/\/)(.+)?(revly.click|(clikern|kiddyshort|adsssy).com|mitly.us|link.whf.bz|shortex.in|(easyshort|shorturlearn).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((wellness4live|akash.classicoder).com|2the.space|inicerita.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps|healthylifez|insurancemyst).com|clk.kim|dekhe.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(exactpay.online|neverdims.com|sproutworkers.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?((fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea|financenuz|pagalworldsong).com|(ddieta|lmktec).net|(bankshiksha|odiadjremix).in|vbnmx.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?((tinybc|phimne).com|(mgame|sportweb|bitcrypto).info)(\/.*)/
// @include /^(https?:\/\/)(.+)?((marketrook|governmentjobvacancies|swachataparnibandh|goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub|arkarinaukrinetwork|topgeninsurance).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp|dvjobs|techawaaz).in|(biharhelp|biharkhabar).co|wastenews.xyz|biharkhabar.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((admediaflex|cdrab|financekita|jobydt|foodxor|mealcold|newsobjective|gkvstudy|mukhyamantriyojanadoot|thepragatishilclasses|indobo|pdfvale|templeshelp).com|(ecq|cooklike).info|(wpcheap|bitwidgets|newsamp|coinilium).net|atomicatlas.xyz|gadifeed.in|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store|mbantul.my.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(tutwuri.id|(besargaji|link2unlock).com|app.khaddavi.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((lyricsbaazaar|ezeviral).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm|qrixpe).com|(loopmyhub|thepopxp).shop|(cryptoblast|powergam).online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(short.croclix.me|adz7short.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(dutchycorp.ovh|(encurt4|10short).com|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|beinglink.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?((remixsounds|helpdeep|thinksrace).com|(techforu|studywithsanjeet).in|uprwssp.org|gkfun.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adshnk.com|adshrink.it)(\/.*)/
// @include /^(https?:\/\/)(.+)?((suaurl|lixapk|reidoplacar|lapviral|minhamoto).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(stly.link|(snaplessons|atravan|airevue|carribo|amalot|techetta|biovetro).net|(stfly|shrtlk|srtslug).biz|(veroan|technons|tournguide|yrtourguide).com)(\/.*)/
// @include /^(https?:\/\/)(.+)?((playonpc|yolasblog|playarcade).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews|jobvox|gfcg).xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?((sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|(ai|go).tempatwisata.pro)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte|technofreez|pagalworldlyrics|poorhindi|paisasutra|dhanyogi|thedeorianews|bgmiobb).com|(allnotes|sewdamp3.com|motahone|mukhyasamachar|techrain).in|(pisple|cirdro|panscu).xyz|taiyxd.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?((cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|(cegen|thunder-appz.eu).org|zaku.pro|veganab.co|skyfreecoins.top|manga4nx.site)(\/.*)/
// @match *://*.go.paylinks.cloud/*
// @match *://*.multiup.io/*
// @match *://*.social-unlock.com/*
// @match *://*.gamezigg.com/*
// @match *://*.shrs.link/*
// @match *://*.shareus.io/*
// @homepageURL    https://github.com/nOneCode4u/bypass-shortlinks
// @supportURL     https://github.com/nOneCode4u/bypass-shortlinks/issues
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       unsafeWindow
// @match        https://acortalink.me/*
// @match         *://linkvertise.com/*
// @match        *://bstlar.com/*
// @match        https://bypass.city/bypass?bypass=*
// @match        https://adbypass.org/bypass?bypass=*
// @match        https://paster.so/*
// @include       /^https:\/\/((bleleadersto|tonordersitye|daughablelea|mdlinkshub).com)\/s\?(?!.*f933e7ff).*$/
// @include       /^(https?:\/\/)(loot-link.com|loot-links.com|lootlink.org|lootlinks.co|lootdest.(info|org|com)|links-loot.com|linksloot.net)\/s\?.*$/
// @include /^(https?:\/\/)(.+)?((actualpost|americanstylo|beautifulfashionnailart|dadinthemaking|glowandglamcorner|listofthis|lobirtech|travelperi|vepiv|seydisehirmansethaber|turkiyertg|tophotelsukraine|balatroltd|tenorminiuk|icryptowin|chronoat|ecoinfotec|bcsclass|mainitbd|newselab|dizok|uzaay|tophistoryview|9sblog|ubnem|techavash|6harfli|professionaley|playghub|apkvmod|apkallworld|techoflix|toplistee|games2mobile|nivtu|bflig|jplna|bilgilendirici|zoninews|smoplay|m-womenstyle|bnirfinance|fuyde|infoguidebd|worthtester|4kphotoediting|befinja).com|(makego|sakazi|momge|englishgrammarpro|arab-plus).net|askerlikforum.com.tr|misterio.ro|(forp|bevery|fanuze|twogamehup|muskokay|zingif).xyz|gamcabd.org|gamerking.shop|nidbd.me)(\/.*)/
// @include     /^(https?:\/\/)(.+)?((mega-enlace|acortados).com|tulink.org)/
// @include     /^https:\/\/(.*\.|)(playonpc.online|(quins|megahosting).us|(tradeshowrating|historyofyesterday|retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|ngebike).com|gally.shop|(qanin|ivnlnews|jobvox|gfcg).xyz|evegor.net|freeat30.org|droplink.co)\/.*/
// @include     /softurl\.in/
// @include     /(gplinks\.(co|in|io)|api\.gplinks\.com)/
// @include     /shrinkme\.(io|us|site|cc|vip|dev|ink|click)/
// @include     /shrinkforearn\.in/
// @include     /droplink\.co/
// @include     /lksfy\.(in|com)/
// @include     /linkshortify\.(in|com)/
// @include     /vplink\.in/
// @include     /count\.vipurl\.in/
// @include     /jrlinks\.in/
// @include     /rocklinks\.in/
// @include     /go\.tnshort\.net/
// @include     /indianshortner\.com/
// @include     /4hi\.in/
// @include     /(btcut|linkslice|zshort)\.io/
// @include     /easy4skip\.com/
// @include     /lkfms\.pro/
// @include     /shrinkearn\.com/
// @include     /clk\.(wiki|kim|sh|asia)/
// @include     /dekhe\.click/
// @include     /freemodsapp\.in/
// @include     /(set|go)\.seturl\.in/
// @include     /beinglink\.in/
// @include     /go\.moonlinks\.in/
// @include     /learnmany\.in/
// @include     /upshrink\.com/
// @include     /techarmor\.xyz/
// @include     /lnks\.primarchweb\.in/
// @include     /skillheadlines\.in/
// @include     /golink\.bloggerishyt\.in/
// @include     /techkhulasha\.com/
// @include     /itijobalert\.in/
// @include     /udlinks\.com/
// @include     /psccapk\.in/
// @include     /earnbox\.sattakingcharts\.in/
// @include     /rg\.sattakingcharts\.in/
// @include     /money\.hustlershub\.in/
// @include     /(shramikcard|pmkisanlists|techishant|cinedesi|thevouz|sharclub)\.in/
// @include     /(newshuta|5ghindi|gujaratalert|mahitimanch|gujmitra)\.in/
// @include     /mobilenagari\.com/
// @include     /defencewallah\.in/
// @include     /(bgmiupdatehub|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime|careersides)\.com/
// @include     /(sabarpratham|pubprofit|sarkariyojnaa|reliablesp)\.in/
// @include     /dear-lottery\.org/
// @include     /(bgmiaimassist|infytips|remixodiadj)\.in/
// @include     /(technorozen|bestadvise4u|newztalkies|aiotechnical|cryptonewzhub|techvybes|wizitales|101desires|gamerxyt|betsatta|stockwallah|gtxhosty|anyrojgar)\.com/
// @include     /mphealth\.online/
// @include     /hubdrive\.me/
// @include     /(theapknews|trendzguruji)\.shop/
// @include     /speedynews\.xyz/
// @include     /offerboom\.top/
// @include     /kvkparbhani\.org/
// @include     /(mdsuuniversity|instander|jameen|dhamakamusic)\.in/
// @include     /(foreverhealth|nhmgujarat|jobkijankari|jobwaala|learnwithsaif|lyricsx|smartsetkari|theringtonesworld|recruitmentrasta|mediniweb|pmyojanasarkari|netflixvip|mghindinews|gentletrail|w3hindi|ryzenmusic)\.in/
// @include     /(anumin|awolio|cgbsesupport|gptproguide|iplquotes|kaisekareblog|minijankari|news36tech|newsloti|odiamusicsong|sugargliderfaqs|picassoappk|geniuseducares|ndlifestylego|raidersixgameapk|sarkariexam365|potter-world|jankari4u|trancebazar|taazaalerts)\.com/
// @include     /aipebel\.com/
// @include     /(do|fast)\.rtilinks\.com/
// @include     /raretoonsindia\.rtilinks\.com/
// @include     /gyanigurus\.net/
// @include     /mkvmoviespoint\.casa/
// @include     /w\.linkspoint\.net/
// @include     /financeyogi\.net/
// @include     /kingshortener\.com/
// @include     /gdslink\.xyz/
// @include     /(cgsonglyricz|techhubcap)\.in/
// @include     /cryptings\.in/
// @include     /techyblogs\.in/
// @include     /readytechflip\.com/
// @include     /ontechhindi\.com/
// @include     /thegadgetking\.in/
// @include     /bookszone\.in/
// @include     /tech5s\.co/
// @include     /ez4mods\.com/
// @include     /(ez4short|zshort)\.io/
// @include     /(loanoffering|djmp3world)\.in/
// @include     /moonplusnews\.com/
// @include     /bangclinic\.life/
// @include     /woowebtools\.com/
// @include     /pallabmobile\.in/
// @include     /(sarkariexam365|jobmatric|carjankaari)\.com/
// @include     /(devnote|formshelp|rcccn)\.in/
// @include     /djbassking\.live/
// @include     /djstar\.in/
// @include     /dsmusic\.app/
// @include     /(bankshiksha|odiadjremix|techrain|motahone|mukhyasamachar|allnotes)\.in/
// @include     /earningtime\.in/
// @include     /(mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte|technofreez|pagalworldlyrics|poorhindi|paisasutra|dhanyogi|thedeorianews|bgmiobb)\.com/
// @include     /(pisple|cirdro|panscu)\.xyz/
// @include     /taiyxd\.net/
// @include     /mega4upload\.net/
// @include     /uploady\.io/
// @include     /(upfilesgo|upfiles)\.com/
// @include     /upfiles\.app/
// @include     /modsfire\.com/
// @include     /dailyuploads\.net/
// @include     /(jioupload\.(link|com|icu)|totoly\.monster)/
// @include     /(cloudfam\.io|get\.cloudfam\.io)/
// @include     /(frdl\.io|freedl\.ink|fredl\.ru|frdl\.is)/
// @include     /rapidgator\.net/
// @include     /quickeemail.com/
// @exclude /^(https?:\/\/)([^\/]+\.)?((cloudflare|github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|stripecdn|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|(accounts|studio).youtube|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|proton.me|stripe.network|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/(?!(www\.google\.com\/(recaptcha\/|url)|docs\.google\.com\/|drive\.google\.com\/)).*google\..*/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
// @downloadURL https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.user.js
// @updateURL https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.meta.js
// ==/UserScript==

(function() {
'use strict';

  const cfg = new MonkeyConfig({title: 'Bypass All Shortlinks Version 96.5 Settings',menuCommand: 'Open Bypass Settings',shadowWidth: '630px',shadowHeight: '450px',iframeWidth: '600px',iframeHeight: '400px',
  params: {
    BlogDelay: {label: 'Auto Delay in My Blog', type: 'checkbox', default: false,column: 'right&top'},
    SetDelay: {label: '=', type: 'number', default: 5,column: 'right&top', inputWidth: '40px'},
    TimerFC: {label: 'Enable Fast Timer', type: 'checkbox', fontColor: "#008080", default: false, column: 'left&top'},
    TDelay: {label: '=', type: 'number', fontColor: "#008080", default: 1000, column: 'left&top'},
    RightFC: {label: 'Enable Context Menu',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    BlockFC: {label: 'Enable Always Ready',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    BlockPop: {label: 'Enable Popup Blocker',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    AntiDebug: {label: 'Enable Anti Debug & Log Cleared',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    Audio: {label: 'Auto Solve Recaptcha Audio Mode',type: 'checkbox',fontColor: "#008080",default: false,column: 'left'},
    YTShort: {label: 'Disable Youtube Short',type: 'checkbox',default: false,column: 'left&bottom', fontColor: "#008080"},
    Adblock: {label: 'Disable Adblock Detections',type: 'checkbox',default: false,column: 'right&bottom', fontColor: "#008080"},
    Prompt: {label: 'Disable Prompts & Notifications',type: 'checkbox',default: false,column: 'right&bottom', fontColor: "#008080"},
    Anima: {label: 'Disable All Animations',type: 'checkbox',default: false,column: 'left&bottom', fontColor: "#008080"},
    hCaptcha: {label: 'Auto Open Hcaptcha',type: 'checkbox',default: false,column: 'right'},
    SameTab: {label: 'Auto Open Links Same Tabs',type: 'checkbox',default: false,column: 'right'},
    Flickr: {label: 'Auto Save Images From Flickr',type: 'checkbox',default: false,column: 'right'},
    AutoDL: {label: 'Auto Download For Supported Sites',type: 'checkbox',default: false,column: 'right'}}});
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
  function redirect(url, blog = false) {location = blog && cfg.get('BlogDelay') ? '' + url : url;}
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
  function CloudPS(checkFrames = false, captchaSite = false, checkFlare = true) {if (checkFrames && window.self !== window.top) {BpNote('Bypass Function Canceled Because Iframe Detected ', 'info');return true;}if (checkFlare && document.title === 'Just a moment...' || elementExists(['.sp','ace','r-','to','p.s','pac','er.','cor','e-','msg'].join(''))) {BpNote("Bypass Function Canceled on Cloudflare Page ", 'info');return true;}
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
    const checkCaptcha = () => {try {if (elementExists(['.ic','onca','pt','cha','-m','odal','__b','od','y-ch','ec','kmar','k'].join(''))) {clearInterval(intervalId);callback();return;}
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
    try {element[action]();BpNote(`Action "${action}" was successfully executed on element "${query}".`);} catch (error) {console.error(`Action "${action}" failed on element "${query}":`, error);}}, time * 1000);} else if (timerFuncName === 'setInterval') {const intervalId = timerFunc(() => {try {if (elementExists(query)) {const currentElement = bp(query);currentElement[action]();BpNote(`Action "${action}" was successfully executed on element "${query}".`);} else {BpNote(`Element "${query}" not found.`,'error');
    clearInterval(intervalId);}} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);clearInterval(intervalId);}}, time * 1000);BpNote(`Interval ID: ${intervalId}`);}} else {BpNote(`Timer tidak valid. Gunakan "setTimeout" atau "setInterval".`,'error');}} else {BpNote(`Elemen "${query}" tidak memiliki metode "${action}".`,'error');}} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');}}
  function BypassedByBloggerPemula(match, exclude, data, url = '', blog = false, all = false) {if (CloudPS()) return;if (typeof exclude === 'function') {data = exclude;exclude = null;url = '';blog = false;all = false;}if (!new RegExp(match).test(location.host)) return;if (exclude && new RegExp(exclude).test(location.host)) {BpNote(`Domain ${location.host} Excluded`, 'info');return;}if (typeof data === 'function') {try {data();} catch (e) {BpNote(`Error executing function data: ${e.message}`, 'error');}return;}
    if (typeof data === 'string') {const params = data.split(',');if (params.every(p => BpParams.has(p.replace(/\+[0-9]+/, '')))) {const use = params[0];let value = all ? BpParams.getAll(use.replace(/\+[0-9]+/, '')).find(u => new RegExp(match).test(u)) : BpParams.get(use.replace(/\+[0-9]+/, ''));if (!value || value.includes('st?')) {value = extractFlexibleUrl(use);}if (value) redirect(url + value, blog);} else {const value = extractFlexibleUrl(data);if (value) redirect(url + value, blog);}return;}let dataObj = data;
    if (Array.isArray(data)) {dataObj = {'/': data};}if (typeof dataObj !== 'object' || dataObj === null) {BpNote('Invalid data type: data must be a function, string, array, or object', 'error');return;}if (!(location.pathname in dataObj)) {BpNote(`Pathname ${location.pathname} not found in data`, 'info');return;}const [key, value] = dataObj[location.pathname];let finalValue = '';if (typeof key === 'object' && key.test(location.search)) {finalValue = value + RegExp.$1;} else if (BpParams.has(key)) {finalValue = value + BpParams.get(key);} else {finalValue = extractFlexibleUrl('url');}
    if (finalValue) redirect(url + finalValue, blog);function extractFlexibleUrl(dataString) {const currentUrl = window.location.href;const urlParams = currentUrl.split('&url=');if (urlParams.length < 2) {BpNote('Not enough URL parameters to extract', 'warn');return null;}let partsToTake = 1;if (dataString.match(/url\+(\d+)/)) {partsToTake = parseInt(dataString.match(/url\+(\d+)/)[1]);}if (partsToTake > urlParams.length - 1) {BpNote(`Requested parts (${partsToTake}) exceed available URL parameters (${urlParams.length - 1})`, 'warn');partsToTake = urlParams.length - 1;}let extractedUrl = '';
    if (partsToTake === 1) {extractedUrl = urlParams[urlParams.length - 1];} else {const startIndex = urlParams.length - partsToTake;extractedUrl = urlParams.slice(startIndex).join('&url=');}try {extractedUrl = decodeURIComponent(extractedUrl);} catch (e) {BpNote('Error decoding extracted URL: ' + e, 'error');}return extractedUrl;}}
  function BlockPopup() {const window = unsafeWindow;const originalOpen = window.open;function createNotification(url, callback) {const div = document.createElement('div');div.className = 'popup-notification';const shadow = div.attachShadow({mode: 'open'});
      shadow.innerHTML = `<style>:host { position: fixed; top: 15px; right: 15px; z-index: 9999; font-family: Arial, sans-serif; }.popup { background: #fff; border: 2px solid #333; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); max-width: 350px; border-radius: 5px; }.title { font: bold 16px Arial; color: #000; margin-bottom: 10px; padding-right: 20px; position: relative; }.url { font-size: 14px; color: #222; word-break: break-all; background: #f5f5f5; padding: 8px; border-radius: 3px; margin-bottom: 15px; }.buttons { display: flex; gap: 10px; }
      button { font: bold 14px Arial; padding: 8px 15px; cursor: pointer; border: none; border-radius: 3px; transition: background 0.2s; }.allow { background: #4CAF50; color: #fff; } .allow:hover { background: #45a049; }.block { background: #f44336; color: #fff; } .block:hover { background: #da190b; }.whitelist { background: #2196F3; color: #fff; opacity: 0.6; cursor: not-allowed; }.reload { background: #FFC107; color: #000; } .reload:hover { background: #FFB300; }.close { position: absolute; top: 0; right: 0; background: none; border: none; font-size: 16px; cursor: pointer; color: #333; }.close:hover { color: #f44336; }
      </style><div class="popup"><div class="title">Popup Request<button class="close">✕</button></div><div class="url">${url || 'about:blank'}</div><div class="buttons"><button class="allow">Open</button><button class="whitelist" title="Sementara Belum Bisa di Gunakan">Whitelist</button><button class="block">Block</button><button class="reload">Reload</button></div></div>`;const remove = () => div.remove();shadow.querySelector(['.al','lo','w'].join('')).onclick = () => {callback(true);remove();};shadow.querySelector(['.bl','oc','k'].join('')).onclick = () => {callback(false);remove();};shadow.querySelector(['.rel','oad'].join('')).onclick = () => {window.location.reload();remove();};
      shadow.querySelector(['.cl','os','e'].join('')).onclick = () => {callback(false);remove();};bp(['.po','pup','-no','ti','fica','ti','on'].join(''))?.remove();document.body.appendChild(div);}window.open = (url, name, features) => new Promise(resolve => createNotification(url, shouldOpen => resolve(shouldOpen ? originalOpen(url, name, features) : (BpNote(`Blocked popup to: ${url}`), null))));document.addEventListener('click', e => {const target = e.target;if (target.tagName === 'A' && target.target === '_blank' && target.href) {e.preventDefault();createNotification(target.href, shouldOpen => shouldOpen ? originalOpen(target.href) : BpNote(`Blocked onclick popup to: ${target.href}`));}}, true);
      document.addEventListener('submit', e => {const form = e.target;if (form.target === '_blank' && form.action) {e.preventDefault();createNotification(form.action, shouldOpen => shouldOpen ? originalOpen(form.action) : BpNote(`Blocked form popup to: ${form.action}`));}}, true);}

  BypassedByBloggerPemula(['go','cmo','d.c','om'].join(''), null, 'urls', '');
  BypassedByBloggerPemula('api.gplinks.com', null, 'url', '');
  BypassedByBloggerPemula(['rfa','ucet','.co','m'].join(''), null, 'linkAlias', '');
  BypassedByBloggerPemula('maloma3arbi.blogspot.com', null, 'link', '');
  BypassedByBloggerPemula(['fina','ncen','uz.c','om'].join(''), null, 'url', 'https:
  BypassedByBloggerPemula(/coinilium.net/, () => {if (BpParams.has('id')) {location = atob(BpParams.get('id'));}});
  BypassedByBloggerPemula('(inshort|youlinks|adrinolinks).in|(linkcents|nitro-link).com|clk.sh', null, 'url+2', '');
  BypassedByBloggerPemula(['thep','ra','ga','tis','hi','lcl','as','ses.','com'].join(''), null, 'url', 'https:
  BypassedByBloggerPemula(/blog.klublog.com/, () => {if (BpParams.has('safe')) {location = atob(BpParams.get('safe'));}});
  BypassedByBloggerPemula(/t.me/, () => {if (BpParams.has('url')) {location = decodeURIComponent(BpParams.get('url'));}});
  BypassedByBloggerPemula(/dutchycorp.space/, () => {if (BpParams.has('code')) {location = BpParams.getAll('code') + '?verif=0';}});

  BypassedByBloggerPemula(/financedoze.com/, () => {if (BpParams.has('id')) {location = 'https:
  BypassedByBloggerPemula(/vk.com/, () => {if (BpParams.has('to') && location.href.includes('/away.php')) {location = decodeURIComponent(BpParams.get('to'));}});
  BypassedByBloggerPemula(/shortfaster.net/, () => {const twoMinutesAgo = Date.now() - 2 * 60 * 1000;localStorage.setItem('lastRedirectTime_site1', twoMinutesAgo.toString());});
  BypassedByBloggerPemula(/(g34new|dlgamingvn|v34down|phimsubmoi|almontsf).com|(nashib|timbertales).xyz/, () => waitForElm("#wpsafegenerate > #wpsafe-link > a[href]", safe => redirect(safe.href,false)));
  BypassedByBloggerPemula(/earnbee.xyz|zippynest.online|getunic.info/, () => {localStorage.setItem('earnbee_visit_data', JSON.stringify({firstUrl: window.location.href,timestamp: Date.now() - 180000}));});
  BypassedByBloggerPemula(/triggeredplay.com/, () => {if (location.href.includes('#')) {let trigger = new URLSearchParams(window.location.hash.substring(1));
      let redplay = trigger.get('url');if (redplay) {let decodedUrl = DecodeBase64(redplay);window.location.href = decodedUrl;}}});
  BypassedByBloggerPemula(/ouo.io/, () => {if (BpParams.has('s') && location.href.includes('link.nevcoins.club')) {location = 'https:
  BypassedByBloggerPemula(/adbtc.top/, () => {if (CloudPS(true, true, true)) return;CaptchaDone(() => {DoIfExists("input[class^=btn]");});let count = 0; setInterval(function() {if (bp("div.col.s4> a") && !bp("div.col.s4> a").className.includes("hide")) {count = 0;
    bp("div.col.s4> a").click();} else {count = count + 1;}}, 5000); window.onbeforeunload = function() {if (unsafeWindow.myWindow) {unsafeWindow.myWindow.close();}if (unsafeWindow.coinwin) {let popc = unsafeWindow.coinwin; unsafeWindow.coinwin = {}; popc.close();}};});
  BypassedByBloggerPemula(/linkbox.to/, () => {Listener(function(object) {if (object.url.includes('api/file/detail?itemId')) {BpNote(object.responseText);const {data: {itemInfo}} = JSON.parse(object.responseText);BpNote(itemInfo); redirect(itemInfo.url, false);}});});
  BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;const features = [{key: 'Adblock',action: () => AIORemover('noAdb', /adblock|AdbModel|AdblockReg|AntiAdblock|blockAdBlock|checkAdBlock|detectAnyAdb|detectAdBlock|justDetectAdb|FuckAdBlock|TestAdBlock|DisableDevtool|devtools/),log: 'Adblock Feature'}, {
    key: 'Anima',action: StopAnima,log: 'Disable All Animations'}, {key: 'Prompt',action: () => {const runNoPrompts = () => NoPrompts();if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', runNoPrompts, {once: true});} else {runNoPrompts();}new MutationObserver(runNoPrompts).observe(document, {childList: true,subtree: true});},
    log: 'Disable Prompts & Notifications'}, {key: 'SameTab',action: SameTab,log: 'SameTab'},{key: 'TimerFC',action: () => BoostTimers(cfg.get('TDelay')),log: 'Fast Timer'}, {key: 'AntiDebug',action: DebugLog,log: 'Anti-Debug'}, {key: 'BlockFC',action: NoFocus,log: 'Focus Control'}, {key: 'RightFC',action: EnableRCF,log: 'Right Click Control'}, {key: 'BlockPop',
    action: BlockPopup,log: 'Popup Blocker'}];const activated = features.filter(({key}) => cfg.get(key)).map(({action,log}) => {action();return log;});if (activated.length) {BpNote(`Activated Features: ${activated.join(', ')}`, 'info');}});
  BypassedByBloggerPemula(/(youtube|youtube-nocookie).com/, () => {Object.defineProperty(document, 'hidden', {value: false,writable: false});Object.defineProperty(document, 'visibilityState', {value: 'visible',writable: false});document.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);const waitForEl = (sel, cb, t = 1e4) => {const start = Date.now();const check = () => {const elm = bp(sel);if (elm) return cb(elm);if (Date.now() - start > t) BpNote(`Timeout: ${sel}`, 'warn'); else setTimeout(check, 500);}; setTimeout(check, 1e3);};
    if (cfg.get('YTShort')) {const bypassShorts = () => {if (!location.pathname.startsWith('/shorts')) return;const vidId = location.pathname.split('/')[2];if (vidId) window.location.replace(`https:
  BypassedByBloggerPemula('(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech|retrocove|vaultfind|geotides|renovatehub|playallgames|countriesguide).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly|teknoasian|lifeprovy|chownest|mythnest|homesteadfeast|gizmoera|tastywhiz|speakzyo).com|(bubblix|dailytech-news).eu|(biit|carfocus).site|coinscap.info|insurancegold.in|wii.si', TrustMe);
  BypassedByBloggerPemula(/modsfire.com/, () => { if (!location.pathname.startsWith('/download')) { console.log("ONLY solve Cloudflare captcha and DO NOT click anything else!!!"); CaptchaDone(() => { modsfireDownload(); }); } else { modsfireDownload(); } });
  function modsfireDownload() { DoIfExists('a.download-button', 3); waitForElm("a.download-button[href]", safe => { redirect(safe.href, false); DoIfExists("a[href*='/d/']", safe => { fetch(safe.href).then(response => { if (!response.ok) throw new Error('Network response was not ok'); return response.text(); }).then(data => {}).catch(error => {}); }); }); }

  const sl = (h => {switch (h.host) {case 'go.paylinks.cloud': if (/^\/([a-zA-Z0-9]{10,12})$/.test(h.pathname)) {return 'https:
      case 'www.google.com': if (h.pathname === '/url' && h.searchParams.has('q')) {return h.searchParams.get('q');} else if (h.pathname === '/url' && h.searchParams.has('url')) {return h.searchParams.get('url');}break;default: break;}})(new URL(location.href));if (sl) {location.href = sl;}

  if (['interactive', 'complete'].includes(document.readyState)) {onHtmlLoaded();} else {document.addEventListener('DOMContentLoaded', onHtmlLoaded);}
  function onHtmlLoaded() {
    const bas = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const result = {isNotifyNeeded: false,redirectDelay: 0,link: undefined};
    switch (h.host) {case ['gam','ezi','gg.c','om'].join(''): if (b) {meta('https:

      if (isNotifyNeeded) {notify(`Redirecting...`);}setTimeout(() => {location.href = link;}, redirectDelay * 1000);}

    BypassedByBloggerPemula(/the2.link/, () => {DoIfExists(['#get','-l','ink-','bt','n'].join(''),3);});
    BypassedByBloggerPemula(/keeplinks.org/, () => {DoIfExists(['#b','tnch','ange'].join(''), 2);});
    BypassedByBloggerPemula(/forex-22.com/, () => {DoIfExists(['#c','on','ti','nueb','utto','n'].join(''),3);});
    BypassedByBloggerPemula(/1shortlink.com/, () => {DoIfExists(['#re','di','re','ct','-l','ink'].join(''), 3);});
    BypassedByBloggerPemula(/1ink.cc|cuturl.cc/, () => {DoIfExists(['#cou','ntin','gbtn'].join(''), 1);});
    BypassedByBloggerPemula(/1short.io/, () => {DoIfExists(['#cou','ntD','own','For','m'].join(''), 'submit', 7);});
    BypassedByBloggerPemula(/disheye.com/, () => {DoIfExists(['#r','ed','irec','tFor','m'].join(''), 'submit', 3);});
    BypassedByBloggerPemula(/aysodamag.com/, () => {DoIfExists(['#li','nk','1s-f','or','m'].join(''), 'submit',3);});
    BypassedByBloggerPemula(/cryptonewssite.rf.gd/, () => {DoIfExists('#dynamic-button a', 2);});
    BypassedByBloggerPemula(/1bitspace.com/, () => {DoIfExists(['.bu','tton','-el','eme','nt-v','eri','fic','at','ion'].join(''),3);});
    BypassedByBloggerPemula(/cshort.org/, () => {DoIfExists(['.tim','er.r','ed','ir','ect'].join(''), 3, 'setInterval');});
    BypassedByBloggerPemula(/revlink.pro/, () => {DoIfExists('#main-content-wrapper > button',2);});
    BypassedByBloggerPemula(/panyhealth.com/, () => {DoIfExists("form[method='get']", 'submit',3);});
    BypassedByBloggerPemula(/minhapostagem.top/, () => {ReadytoClick(['#a','lf_c','ont','inue','.al','f_','butt','on'].join(''), 3);});
    BypassedByBloggerPemula(/playpaste.com/, () => {CaptchaDone(() => {DoIfExists('button.btn');});});
    BypassedByBloggerPemula(/sfl.gl/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}; DoIfExists('button:innerText("OPEN LINK")', 2);});
    BypassedByBloggerPemula(/lanza.me/, () => waitForElm('a#botonGo', lz => redirect(lz.href, false)));
    BypassedByBloggerPemula(/jioupload.icu/, () => {CaptchaDone(() => {DoIfExists(['#con','ti','nu','eBtn'].join(''));});});
    BypassedByBloggerPemula(/lolinez.com/, () => waitForElm('p#url a', lol => redirect(lol.href, false)));
    BypassedByBloggerPemula(/(fc-lc|thotpacks).xyz/, () => {DoIfExists(['#in','visi','bl','eCa','ptch','aS','hort','lin','k'].join(''), 3);});
    BypassedByBloggerPemula(/offerwall.me|ewall.biz/, () => {CaptchaDone(() => {DoIfExists(['#su','bmit','Btn'].join(''));});});
    BypassedByBloggerPemula(/shortlinks2btc.somee.com/, () => {CaptchaDone(() => {DoIfExists(['#btL','ogin'].join(''));});});
    BypassedByBloggerPemula(/kisalt.digital/, () => {if (BpParams.has('u')) {meta(atob(BpParams.get('u')));}});
    BypassedByBloggerPemula(/linksly.co/, () => waitForElm('div.col-md-12 a', lsl => redirect(lsl.href, false)));
    BypassedByBloggerPemula(/surl.li|surl.gd/, () => waitForElm(['#re','dir','ec','t-b','ut','ton'].join(''), surl => redirect(surl.href)));
    BypassedByBloggerPemula(/dogefury.com|thanks.tinygo.co/, () => {DoIfExists(['#f','orm-','co','nti','nu','e'].join(''), 'submit', 2);});
    BypassedByBloggerPemula(/lksfy.com/, () => {CaptchaDone(() => {DoIfExists(['.g','et-l','ink','.btn','-pri','mar','y.bt','n'].join(''),1);});});
    BypassedByBloggerPemula(/almontsf.com/, () => {ReadytoClick(['#ne','xtBt','n'].join(''),2);ReadytoClick('a.btn-moobiedat', 3);});
    BypassedByBloggerPemula(/rotizer.net/, () => {CaptchaDone(() => {DoIfExists('button:innerText("Confirm")');});});
    BypassedByBloggerPemula(/(blogsward|coinjest).com|coinsimulator.(io|online)/, () => {waitForElm(['#c','ont','inue','Btn'].join(''), afBtn => afBtn.click());});
    BypassedByBloggerPemula(/render-state.to/, () => {SameTab();if (BpParams.has('link')) {unsafeWindow.goToLink();}});
    BypassedByBloggerPemula(/linkforearn.com/, () => waitForElm('#shortLinkSection a', linkf => redirect(linkf.href)));
    BypassedByBloggerPemula(/downfile.site/, () => {DoIfExists('button.h-captcha', 2);DoIfExists(['#me','ga','url','-s','ubmi','t'].join(''), 3);});
    BypassedByBloggerPemula(/enlacito.com/, () => {setTimeout(() => {redirect(unsafeWindow.DYykkzwP,false);}, 2 * 1000);});
    BypassedByBloggerPemula(/adtival.network/, () => {if (BpParams.has('shortid')) {meta(atob(BpParams.get('shortid')));}});
    BypassedByBloggerPemula(/imagereviser.com/, () => {CheckVisibility(['.tic','k.','wgi','con'].join(''), () => {DoIfExists(['.bo','tt','om','_bt','n'].join(''));});});
    BypassedByBloggerPemula(/amanguides.com/, () => waitForElm('#wpsafe-link > .bt-success', ag => redirect(ag.href, false)));
    BypassedByBloggerPemula(/stockmarg.com/, () => {DoIfExists(['#co','de','xa'].join(''), 'submit', 3);DoIfExists(['#o','pen','-c','ont','inue','-btn'].join(''), 4);});
    BypassedByBloggerPemula(/michaelemad.com|7misr4day.com/, () => waitForElm('a.s-btn-f', mld => redirect(mld.href, false)));
    BypassedByBloggerPemula(/(dramaticqueen|emubliss).com/, () => {DoIfExists(['#no','ta','ro','bot','.bu','tton'].join(''),3);DoIfExists(['#btn','7'].join(''),4);});
    BypassedByBloggerPemula(/(grtjobs|jksb).in/, () => {CheckVisibility(['.st','ep'].join(''), () => {unsafeWindow.handleContinueClick();});});
    BypassedByBloggerPemula(/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/, () => {CaptchaDone(() => {DoIfExists(['#c','on','tin','ue'].join(''));});});
    BypassedByBloggerPemula(/(bnbfree|freeth|freebitco).in/, () => {CaptchaDone(() => {DoIfExists(['#f','re','e_','play','_fo','rm','_but','ton'].join(''));});});
    BypassedByBloggerPemula(/8tm.net/, () => waitForElm('a.btn.btn-secondary.btn-block.redirect', tm => redirect(tm.href, false)));
    BypassedByBloggerPemula(/bestfonts.pro/, () => waitForElm('.download-font-button > a:nth-child(1)', pro => redirect(pro.href)));
    BypassedByBloggerPemula(/ouo.io|ouo.press/, async function() {await sleep(4000);ReadytoClick('button#btn-main.btn.btn-main');});
    BypassedByBloggerPemula(/cpmlink.net/, () => waitForElm('a#btn-main.btn.btn-warning.btn-lg', cpm => redirect(cpm.href, false)));
    BypassedByBloggerPemula(/noodlemagazine.com/, () => waitForElm('a#downloadLink.downloadBtn', mag => redirect(mag.href, false)));
    BypassedByBloggerPemula(/paycut.pro/, () => {if (location.href.includes('/ad/')) {location = location.href.replace('ad/', '');}});
    BypassedByBloggerPemula(/askpaccosi.com|cryptomonitor.in/, () => {CaptchaDone(() => {DoIfExists('form[name="dsb"]', 'submit');});});
    BypassedByBloggerPemula(/forex-trnd.com/, () => {elementReady(['#exf','oa','ry-','snp'].join('')).then(() => DoIfExists(['#exf','oary','-for','m'].join(''), 'submit', 3));});
    BypassedByBloggerPemula(/(kongutoday|proappapk|hipsonyc).com/, () => {if (BpParams.has('safe')) {meta(atob(BpParams.get('safe')));}});
    BypassedByBloggerPemula(/mohtawaa.com/, () => waitForElm('a.btn.btn-success.btn-lg.get-link.enabled', moht => redirect(moht.href, false)));
    BypassedByBloggerPemula(/knowiz0.blogspot.com/, () => {CheckVisibility(['.po','st','Bo','dy.p','os','t-','body','.pS'].join(''), () => {DoIfExists('button#nextBtn',2);});});

    BypassedByBloggerPemula(/(viralxns|uploadsoon).com/, function(){DoIfExists(['#tp','-s','np','2.tp','-bl','ue.t','p-bt','n'].join(''), 2);DoIfExists(['.tp','-w','hite','.tp-','bt','n'].join(''), 3);});
    BypassedByBloggerPemula(/(techleets|bonloan).xyz|sharphindi.in|nyushuemu.com/, () => waitForElm('a#tp-snp2', tle => redirect(tle.href, false)));
    BypassedByBloggerPemula(/(jobmatric|carjankaari).com|techsl.online/, () => {DoIfExists("form[name='rtg']", 'submit', 3);DoIfExists(['#b','tn','6'].join(''), 4);});
    BypassedByBloggerPemula(/sharetext.me/, () => {if (location.href.includes('/redirect') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/usersdrive.com|ddownload.com/, () => {CaptchaDone(() => {DoIfExists(['#do','wnlo','adbt','n'].join(''));});DoIfExists(['.btn','-dow','nlo','ad','.b','tn'].join(''), 1);});
    BypassedByBloggerPemula(/apkw.ru/, () => {if (location.href.includes('/away')) {let apkw = location.href.split('/').slice(-1);redirect(atob(apkw));}});
    BypassedByBloggerPemula(/(devnote|formshelp|rcccn).in|djbassking.live/, () => {CheckVisibility(['.t','op.s','tep'].join(''), () => {DoIfExists(['#ge','tli','nk','s.bt','n'].join(''), 2);});});
    BypassedByBloggerPemula(/comohoy.com/, () => {if (location.href.includes('/view/out.html') && BpParams.has('url')) {meta(atob(BpParams.get('url')));}});
    BypassedByBloggerPemula(/cutnet.net|(cutyion|cutynow|cuttlinks).com|(exego|cety).app|(jixo|jizo|gamco).online/, () => {ReadytoClick("#submit-button:not([disabled])",2);});
    BypassedByBloggerPemula(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, () => waitForElm('div#traffic_result a', xon => redirect(xon.href, false)));
    BypassedByBloggerPemula(/4fnet.org/, () => {if (location.href.includes('/goto')) {let fnet = location.href.split('/').slice(-1);redirect(atob(fnet),false);}});
    BypassedByBloggerPemula(/oxy\.*/, () => {if (elementExists(['#div','down','load'].join(''))) {let oxy = bp(['.o','cds','f2','33'].join('')).getAttribute('data-source_url');redirect(oxy, false);}});
    BypassedByBloggerPemula(/alorra.com/, () => {CheckVisibility('.ast-post-format- > button', () => {DoIfExists('.single-layout-1.ast-post-format- > button');});});
    BypassedByBloggerPemula(/largestpanel.in|(djremixganna|financebolo|emubliss).com|(earnme|usanewstoday).club|earningtime.in/, () => {DoIfExists(['#tp-','snp2'].join(''), 1);});
    BypassedByBloggerPemula(/adoc.pub/, () => {DoIfExists(['.bt','n-b','loc','k.bt','n-s','ucc','ess','.b','tn'].join(''), 2);CaptchaDone(() => {DoIfExists(['.m','t-15','.b','tn','-b','lo','ck','.b','tn-s','ucc','es','s.b','tn-l','g.','bt','n'].join(''));});});
    BypassedByBloggerPemula(/programasvirtualespc.net/, () => {if (location.href.includes('out/')) {const pvc = location.href.split('?')[1]; redirect(atob(pvc),false);}});
    BypassedByBloggerPemula(/pdfcoffee.com/, () => {DoIfExists(['.btn','-bl','ock','.btn','-suc','ces','s.bt','n'].join(''), 2);CaptchaDone(() => {DoIfExists(['.my','-2.','btn-','blo','ck.','btn','-pr','im','ar','y.','bt','n-lg','.bt','n'].join(''));});});
    BypassedByBloggerPemula(/(zygina|jansamparks).com|(loanifyt|getknldgg).site|topshare.in|btcon.online/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists(['#b','tn','6'].join(''), 4);});
    BypassedByBloggerPemula(/(financewada|utkarshonlinetest).com|financenova.online/, () => {DoIfExists('.get_btn.step_box > .btn', 2);ReadytoClick('.get_btn a[href]', 3);});
    BypassedByBloggerPemula(/boost.ink/, () => fetch(location.href).then(bo => bo.text()).then(html => redirect(atob(html.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0]))));
    BypassedByBloggerPemula(/setroom.biz.id|travelinian.com/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm(' a:nth-child(1) > button', setr => setr.click());});
    BypassedByBloggerPemula(/fansonlinehub.com/, async function() {setInterval(() => {window.scrollBy(0, 1);window.scrollTo(0,-1);ReadytoClick('.active.btn > span');}, 3 * 1000);});
    BypassedByBloggerPemula(/wp.thunder-appz.eu.org|blog.adscryp.com/, () => {DoIfExists("form[name='dsb']", 'submit', 3);waitForElm('#button3 > a', thun => redirect(thun.href, false));});
    BypassedByBloggerPemula(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst|webhostsec).com|ss7.info|sololevelingmanga.pics/, () => {DoIfExists(['#ge','tli','nk'].join(''), 3);});
    BypassedByBloggerPemula(/mirrored.to/, () => {waitForElm('div.col-sm.centered.extra-top a', mirr => redirect(mirr.href, false)); waitForElm('div.centerd > a', mir => redirect(mir.href, false));});
    BypassedByBloggerPemula(/(fourlinez|newsonnline|phonesparrow|creditcarred|stockmarg).com|(alljntuworld|updatewallah|vyaapaarguru|viralmp3.com|sarkarins).in/, () => {ReadytoClick(['#c','ont','in','ue-','sho','w'].join(''), 3);});
    BypassedByBloggerPemula(/(financenube|mixrootmods|pastescript|trimorspacks).com/, () => {waitForElm('#wpsafe-link a', cdr => redirect(strBetween(cdr.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/(keedabankingnews|aceforce2apk).com|themezon.net|healthvainsure.site|rokni.xyz|bloggingwow.store|dsmusic.in|vi-music.app/, () => {DoIfExists("form[name='tp']", 'submit', 3);DoIfExists(['#tp-','sn','p2'].join(''),4);});
    BypassedByBloggerPemula(/mboost.me/, () => {if (elementExists(['#fi','rs','tsec','tio','n'].join(''))){let mbo = bp('#__NEXT_DATA__');let mbm = JSON.parse(mbo.textContent).props.pageProps.data.targeturl;setTimeout(() => {redirect(mbm,false);}, 2 * 1000);}});
    BypassedByBloggerPemula(/(aduzz|tutorialsaya|baristakesehatan|merekrut|indobo|educorp).com|deltabtc.xyz|bit4me.info/, () => {waitForElm("div[id^=wpsafe] > a[rel=nofollow]", tiny => redirect(strBetween(tiny.onclick.toString(), `window.open('`, `', '_self')`), false));});
    BypassedByBloggerPemula(/karyawan.co.id/, () => {
      DoIfExists('button#btn.bg-blue-100.text-blue-600', 3);});
    BypassedByBloggerPemula(/yoshare.net|olhonagrana.com/, () => {
      DoIfExists(['#yu','id','ea'].join(''), 'submit', 2);DoIfExists(['#btn','6'].join(''), 2);});
    BypassedByBloggerPemula(/slink.bid/, () => {
      DoIfExists(['#btn','-ge','nera','te'].join(''), 1);DoIfExists(['.btn','-suc','ce','ss.','btn'].join(''), 5);});
    BypassedByBloggerPemula(/blog.yurasu.xyz/, () => {
      DoIfExists(['#wc','Get','Li','nk'].join(''), 2);DoIfExists(['#got','oli','nk'].join(''), 3);});
    BypassedByBloggerPemula(/coincroco.com|surflink.tech|cointox.net/, () => {
      waitForElm(['.mb','-s','m-0','.mt','-3.b','tn','BgR','ed'].join(''), ccBtn => ccBtn.click());});
    BypassedByBloggerPemula(/solidcoins.net|fishingbreeze.com/, () => {
      CaptchaDone(() => {DoIfExists('form[action]', 'submit');});
      if (!elementExists(['.g-','reca','ptc','ha'].join(''))) {DoIfExists('mdn', 'submit', 17);}});
    BypassedByBloggerPemula(/creditsgoal.com/, () => {
      DoIfExists(['#tp-','snp','2'].join(''), 3);DoIfExists('button:innerText("Continue")', 4);});
    BypassedByBloggerPemula(/adfoc.us/, () => {
      if (elementExists(['#ski','p'].join(''))) {let adf = bp(['.ski','p'].join('')).href; redirect(adf);}});
    BypassedByBloggerPemula(/zegtrends.com/, () => {DoIfExists('#cln', 'submit', 5);
      DoIfExists('#bt1', 5);DoIfExists('#go', 5);});
    BypassedByBloggerPemula(/ac.totsugeki.com/, () => {let $ = unsafeWindow.jQuery;
      $("a[target='_blank']").removeAttr("target");DoIfExists(['.bt','n-','lg.','bt','n-','suc','cess','.btn'].join(''), 2);});
    BypassedByBloggerPemula(/newassets.hcaptcha.com/, async function() {
      if (!cfg.get('hCaptcha')) return;await sleep(2000);ReadytoClick(['#che','ckbo','x'].join(''));});
    BypassedByBloggerPemula(/bigbtc.win/, () => {CaptchaDone(() => {DoIfExists(['#c','lai','mbu','tn'].join(''));});
      if (location.href.includes('/bonus')) {DoIfExists(['#c','lic','khe','re'].join(''), 2);}});
    BypassedByBloggerPemula(/linkspy.cc/, () => {
      if (elementExists(['.ski','pBu','tton'].join(''))) {let lsp = bp(['.s','kip','Bu','tto','n'].join('')).href;redirect(lsp, false);}});
    BypassedByBloggerPemula(/(superheromaniac|spatsify|mastkhabre|ukrupdate).com/, () => {
      DoIfExists(['#tp','98'].join(''), 10);DoIfExists(['#b','tn','6'].join(''), 12);DoIfExists("form[name='tp']", 'submit', 11);});
    BypassedByBloggerPemula(/(bestloansoffers|worldzc).com|earningtime.in/, () => {
      DoIfExists('#rtg', 'submit', 2);DoIfExists(['#rt','g-fo','rm'].join(''), 'submit', 3);
      DoIfExists(['.r','tg','-b','lu','e.r','tg','-bt','n'].join(''), 4);DoIfExists('#rtg-snp21 > button', 5);});
    BypassedByBloggerPemula(/(exeo|exego).app|(falpus|exe-urls|exnion|exe-links|exeygo|exeylink).com|4ace.online/, () => {
      DoIfExists(['#inv','isi','ble','Ca','ptc','ha','Sho','rtl','ink'].join(''), 2);DoIfExists(['#bef','ore-','cap','tcha'].join(''), 'submit', 3);});
    BypassedByBloggerPemula(/dinheiromoney.com/, () => {DoIfExists("div[id^='button'] form", 'submit', 3);
      waitForElm("div[id^='button'] center a", postazap => redirect(postazap.href, false));});
    BypassedByBloggerPemula(/writedroid.eu.org|modmania.eu.org|writedroid.in/, () => {
      DoIfExists(['#s','hor','tP','os','tLin','k'].join(''), 3);waitForElm("#shortGoToLink", dro => redirect(dro.href, false));});
    BypassedByBloggerPemula(/flamebook.eu.org/, async () => {const flame = [['#bu','tton','1'].join(''), ['#b','utto','n2'].join(''), ['#bu','tton','3'].join('')];
      for (const fbook of flame) {await sleep(3000);ReadytoClick(fbook);}});
    BypassedByBloggerPemula(/techkhulasha.com|itijobalert.in/, () => {
      ReadytoClick('#waiting > div > .bt-success', 2);DoIfExists('button:innerText("Open-Continue")', 3);});
    BypassedByBloggerPemula(/(lakhisarainews|vahanmitra24).in/, () => {DoIfExists("form[name='dsb']", 'submit', 3);
      waitForElm('a#btn7', earn4 => redirect(earn4.href));});
    BypassedByBloggerPemula(/rekonise.com/, () => {let xhr = new XMLHttpRequest();
      xhr.onload = () => redirect(JSON.parse(xhr.responseText).url);
      xhr.open("GET", "https:
    BypassedByBloggerPemula(/vosan.co/, () => {bp(['.e','le','men','to','r-','siz','e-lg'].join('')).removeAttribute('target');
      DoIfExists(['.e','leme','nto','r-','siz','e-l','g'].join(''), 2);DoIfExists(['.w','pdm','-dow','nl','oa','d-','lin','k'].join(''), 2);});
    BypassedByBloggerPemula(/exblog.jp/, () => {AIORemover('removeAttr', 'div.post-main div a', 'target');
      DoIfExists('a:innerText("NEST ARTICLE")', 3);DoIfExists('a:innerText("Continue To")', 4);});
    BypassedByBloggerPemula(/modcombo.com/, () => {
      if (location.href.includes('download/')) {waitForElm('div.item.item-apk a', mc => redirect(mc.href, false));
        DoIfExists('a.btn.btn-submit', 6);} else {DoIfExists('a.btn.btn-red.btn-icon.btn-download.br-50', 2);}});
    BypassedByBloggerPemula(/autodime.com|cryptorex.net/, () => {CaptchaDone(() => {DoIfExists(['#bu','tton','1'].join(''));});
      elementReady(['#fe','xko','min','hid','den2'].join('')).then(() => ReadytoClick(['.mb-','sm-0','.mt','-3.','bt','nBgR','ed'].join(''), 2));});
    BypassedByBloggerPemula(/(bchlink|usdlink).xyz/, () => {AIORemover('removeAttr', ['#a','nt','iBot','Bt','nB','eta'].join(''), 'onclick');
      DoIfExists('#antiBotBtnBeta > strong', 2);CaptchaDone(() => {DoIfExists(['#i','nvi','si','ble','Ca','pt','ch','aS','ho','rt','li','nk'].join(''));});});
    BypassedByBloggerPemula(/pubghighdamage.com|anmolbetiyojana.in/, () => {SameTab();
      DoIfExists(['#r','obo','t'].join(''), 2);DoIfExists(['#n','ot','arob','ot.','but','ton'].join(''), 2);ReadytoClick(['#got','oli','nk.b','t-','suc','ce','ss.b','tn'].join(''), 3);});
    BypassedByBloggerPemula(/aylink.co|cpmlink.pro/, () => {DoIfExists(['.bt','n.','btn','-g','o'].join(''), 2);ReadytoClick(['.btn','-g','o'].join(''), 3);
      waitForElm("#main", Aylink => redirect(strBetween(Aylink.onclick.toString(), 'window.open("', '"'), false));});
    BypassedByBloggerPemula(/sub2get.com/, () => {
      if (elementExists(['#b','ut','unl','ock'].join(''))) {let subt = bp('#butunlock > a:nth-child(1)').href;redirect(subt);}});
    BypassedByBloggerPemula(/o-pro.online/, () => {waitForElm('#newbutton > a', opo => redirect(opo.href, false));
      waitForElm('a.btn.btn-default.btn-sm', opo2 => redirect(opo2.href, false));});
    BypassedByBloggerPemula(/jobzhub.store/, () => {DoIfExists(['#sur','l'].join(''), 5);
      if (elementExists(['#nex','t'].join(''))) {unsafeWindow.startCountdown();DoIfExists('form.text-center', 'submit', 15);}});
    BypassedByBloggerPemula(/curto.win/, () => {DoIfExists(['#ge','t-li','nk'].join(''), 2);
      CheckVisibility('span:contains("Your link is ready")', () => {let curto = bp(['#ge','t-li','nk'].join('')).href;redirect(curto);});});
    BypassedByBloggerPemula(/nishankhatri.xyz|(bebkub|owoanime|hyperkhabar).com/, () => {
      DoIfExists(['#pr','o-co','nt','inue'].join(''), 3);waitForElm('a#pro-btn', vnshort => redirect(vnshort.href));DoIfExists(['#m','y-b','tn'].join(''), 5);});
    BypassedByBloggerPemula(/infonerd.org/, () => {EnableRCF();
      CheckVisibility(['#r','edi','rec','tBu','tton'].join(''), '||', "bp(['#co','untd','own'].join('')).innerText == '0'", () => {unsafeWindow.redirectToUrl();});});
    BypassedByBloggerPemula(/(blogmado|kredilerim|insuranceleadsinfo).com/, () => {
      CaptchaDone(() => {DoIfExists('button.btn');});waitForElm('a.get-link.disabled a', cho => redirect(cho.href, false));});
    BypassedByBloggerPemula(/litecoin.host|cekip.site/, () => {CaptchaDone(() => {DoIfExists(['#ibt','n'].join(''));});
      if (elementExists(['.pt-','5.ca','rd-','hea','der'].join(''))) {CheckVisibility(['.b','tn','-p','rima','ry','.btn'].join(''), () => {DoIfExists(['.bt','n-p','rim','ary.','btn'].join(''));});}});
    BypassedByBloggerPemula(/gocmod.com/, () => {
      if (elementExists(['.vi','ew-a','pp'].join(''))) {bp(['#no-','link'].join('')).removeAttribute('target');DoIfExists(['.d','own','lo','ad','-lin','e-','ti','tle'].join(''), 2);}});
    BypassedByBloggerPemula(/yitarx.com/, () => {if (location.href.includes('enlace/')) {let yitar = location.href.split('#!')[1];
      let arxUrl = DecodeBase64(yitar,3);redirect(arxUrl);}});
    BypassedByBloggerPemula(/(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere|masrawytrend).com/, () => {
      CaptchaDone(() => {DoIfExists('#lview > form', 'submit');});waitForElm('.get-link > a', tig => redirect(tig.href, false));});
    BypassedByBloggerPemula(/videolyrics.in/, () => {ReadytoClick('a:contains("Continue")', 3);
      CheckVisibility("button[class^='py-2 px-4 font-semibold']", () => {DoIfExists('div[x-html="isTCompleted"] button');});});
    BypassedByBloggerPemula(/(tmail|labgame).io|(gamezizo|fitdynamos).com/, () => {DoIfExists(['#su','rl'].join(''), 5);
      if (elementExists(['#nex','t'].join(''))) {DoIfExists('form.text-center', 'submit', 3);DoIfExists(['#n','ext'].join(''), 2);DoIfExists(['#g','lin','k'].join(''), 15);}});
    BypassedByBloggerPemula(/f2h.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['.do','wnl','oa','d-','bu','tt','on'].join(''))) {DoIfExists(['.b','tn-s','ucce','ss'].join(''), 2);}});
    BypassedByBloggerPemula(/dbree.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.cen','te','r-b','lo','ck','.btn','-de','faul','t.b','tn'].join(''), 2);});
    BypassedByBloggerPemula(/upload.ee/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#d_l', 2);});
    BypassedByBloggerPemula(/gofile.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      elementReady(['#fil','em','anag','er'].join('')).then(() => ReadytoClick('button.item_download', 2));});
    BypassedByBloggerPemula(/dddrive.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.btn','-out','line','-p','rim','ary'].join(''), 2);});
    BypassedByBloggerPemula(/1fichier.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#p','as','s'].join(''))) {} else {DoIfExists(['.btn','-ora','ng','e.b','tn','-ge','nera','l.','ok'].join(''), 1);DoIfExists('.alc', 'submit', 1);}});
    BypassedByBloggerPemula(/mp4upload.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['#to','dl'].join(''), 2);DoIfExists("form[name='F1']", 'submit', 1);});
    BypassedByBloggerPemula(/takefile.link/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists('#F1')) {DoIfExists('div.no-gutter:nth-child(2) > form:nth-child(1)', 'submit', 1);}});
    BypassedByBloggerPemula(/drop.download/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['#me','th','od_f','ree'].join(''), 2);DoIfExists(['.btn','-dow','nloa','d'].join(''), 2);});
    BypassedByBloggerPemula(/easyupload.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#dow','nloa','d-b','ox'].join(''))) {DoIfExists(['.s','tart','-d','own','load','.d','iv'].join(''), 2);}});
    BypassedByBloggerPemula(/rapidgator.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.btn','-fr','ee.a','ct-l','ink.','lin','k'].join(''), 2);});
    BypassedByBloggerPemula(/coinsrev.com/, () => {parent.open = BpBlock();CaptchaDone(() => {DoIfExists('#wpsafelinkhuman > input');});
      DoIfExists('#wpsafe-generate > a > img', 3);DoIfExists('input#image3', 13);});
    BypassedByBloggerPemula(/dropgalaxy.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("button[id^='method_fre']", 2);});
    BypassedByBloggerPemula(/dayuploads.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['#ad','-l','in','k2'].join(''), 2);});
    BypassedByBloggerPemula(/workupload.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#d','own','load'].join(''))) {DoIfExists(['.bt','n-pr','io','.b','tn'].join(''), 2);}});
    BypassedByBloggerPemula(/freepreset.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#bu','tt','on_','dow','nloa','d'].join(''))) {waitForElm('a#button_download', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/krakenfiles.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.d','ow','nloa','d-n','ow','-t','ext'].join(''), 2);});
    BypassedByBloggerPemula(/file-upload.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['#dow','nb','il','d.','g-','reca','pt','ch','a'].join(''), 2);});
    BypassedByBloggerPemula(/docs.google.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#uc-','dl','-ico','n'].join(''))) {DoIfExists(['#do','wnl','oad','For','m'].join(''), 'submit', 1);}});
    BypassedByBloggerPemula(/uploadhaven.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('.alert > a:nth-child(1)', 2);DoIfExists(['#for','m-','do','wnlo','ad'].join(''), 'submit', 1);});
    BypassedByBloggerPemula(/fileresources.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['.dow','nloa','d-ti','mer'].join(''))) {waitForElm('a.btn.btn-default', fpr => redirect(fpr.href, false));}});
    BypassedByBloggerPemula(/indobo.com/, () => {const scriptElement = bp('#wpsafegenerate > script:nth-child(4)');if (scriptElement) {
      const scriptContent = scriptElement.textContent;const url = strBetween(scriptContent, 'window.location.href = "', '";', true);
        if (url && url.startsWith('https:
    BypassedByBloggerPemula(/techxploitz.eu.org/, () => {CheckVisibility(['#h','mV','rfy'].join(''), () => {DoIfExists(['.ps','tL.b','ut','to','n'].join(''), 2);});
      CheckVisibility(['#aSl','Cnt'].join(''), () => {DoIfExists(['.pst','L.bu','tto','n'].join(''), 2);ReadytoClick(['.s','afeG','oL.b','utto','n'].join(''), 3);});});
    BypassedByBloggerPemula(/jobinmeghalaya.in/, () => {DoIfExists(['#bot','tom','Bu','tton'].join(''),2);DoIfExists('a#btn7', 3);
      DoIfExists(['#wps','afel','ink','-la','nd','in','g'].join(''), 'submit', 2);ReadytoClick('#open-link > .pro_btn',3);DoIfExists('#wpsafe-link > .bt-success', 3);});
    BypassedByBloggerPemula(/playnano.online/, () => {DoIfExists(['#w','atc','h-l','in','k'].join(''), 2);
      DoIfExists(['.wat','ch','-ne','xt-','btn','.b','tn-','pri','ma','ry.b','utto','n'].join(''), 2);DoIfExists('button.button.btn-primary.watch-next-btn', 5, 'setInterval');});
    BypassedByBloggerPemula(/2linkes.com/, () => {if (elementExists(['#lin','k-vi','ew'].join(''))) {CaptchaDone(() => {DoIfExists(['#li','nk-','vi','ew'].join(''), 'submit');});}
      else if (elementExists('button.btn.btn-primary')) {DoIfExists('.box-body > form:nth-child(2)', 'submit', 2);}});
    BypassedByBloggerPemula(/ify.ac|go.linkify.ru/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      unsafeWindow.open_href();});
    BypassedByBloggerPemula(/(financedoze|topjanakri|stockbhoomi).com|techhype.in|getpdf.net|cryptly.site/, () => {
      CheckVisibility('p:contains("Step")', () => {DoIfExists('#rtg', 'submit', 3);DoIfExists('button:innerText("Open-Continue")', 4);});});
    BypassedByBloggerPemula(/(importantclass|hamroguide).com/, () => {DoIfExists(['#pr','o-c','ont','in','ue'].join(''), 4);
      CheckVisibility(['#pr','o-bt','n'].join(''), () => {DoIfExists('#pro-link a', 2);});waitForElm(['#my-','btn.','pro_','bt','n'].join(''), vnshor => redirect(vnshor.href));});
    BypassedByBloggerPemula(/mazen-ve3.com/, () => {EnableRCF();let maze = setInterval(() => {
        if (bp(['.fi','lle','r'].join('')).innerText == 'Wait 0 s') {clearInterval(maze);ReadytoClick(['#b','tn6'].join(''));ReadytoClick(['.bt','n-s','ucce','ss','.btn'].join(''), 1);}}, 2 * 1000);});
    BypassedByBloggerPemula(/apkadmin.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('div.text.text-center a', apk => redirect(apk.href));});
    BypassedByBloggerPemula(/filemoon.sx/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('div.download2 a.button', fm => redirect(fm.href));});
    BypassedByBloggerPemula(/files.fm/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('#head_download__all-files > div > div > a:nth-child(1)', flBtn => flBtn.click());});
    BypassedByBloggerPemula(/k2s.cc/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.b','ut','to','n-','do','wnlo','ad','-s','lo','w'].join(''), 2);waitForElm('a.link-to-file', k2s => redirect(k2s.href));});
    BypassedByBloggerPemula(/katfile.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists(['#dow','nl','oadb','tn'].join(''));});DoIfExists(['#f','bt','n1'].join(''), 2);waitForElm(['#dli','nk'].join(''), katf => redirect(katf.href));});
    BypassedByBloggerPemula(/udrop.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('.responsiveMobileMargin > button:nth-child(1)', udr => redirect(strBetween(udr.onclick.toString(), `openUrl('`, `')`)));});
    BypassedByBloggerPemula(/megaupto.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#direct_link > a:nth-child(1)', 2);});
    BypassedByBloggerPemula(/karanpc.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists('#downloadButton > form', 'submit', 2);});
    BypassedByBloggerPemula(/douploads.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.b','tn-p','rim','ary.','bt','n-l','g.b','tn-b','lo','ck.','bt','n'].join(''), 2);});
    BypassedByBloggerPemula(/send.now/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['#d','ow','nlo','adbt','n'].join(''), 2);});
    BypassedByBloggerPemula(/dataupload.net/, async () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      await sleep(5000);ReadytoClick(['.d','ow','nloa','db','tn'].join(''));});
    BypassedByBloggerPemula(/buzzheavier.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm(['#d','own','load','-li','nk'].join(''), bhvBtn => bhvBtn.click());});
    BypassedByBloggerPemula(/bowfile.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      ReadytoClick('.download-timer > .btn--primary.btn > .btn__text', 2);});
    BypassedByBloggerPemula(/dailyuploads.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists(['#dow','nloa','dbt','n'].join(''));});DoIfExists(['#fb','tn1'].join(''), 2);});
    BypassedByBloggerPemula(/uploadev.org/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists(['#d','ow','nlo','adbt','n'].join(''));});DoIfExists('#direct_link > a', 2);});
    BypassedByBloggerPemula(/megaup.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      waitForElm('a.btn.btn-default', muBtn => muBtn.click());DoIfExists(['#bt','ndow','nlo','ad'].join(''), 7);});
    BypassedByBloggerPemula(/gdflix.dad/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      elementReady(['#c','f_','capt','cha','.car','d'].join('')).then(() => ReadytoClick('a.btn.btn-outline-success', 2));});
    BypassedByBloggerPemula(/mega4upload.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name=mega_free]", 2);CaptchaDone(() => {DoIfExists(['#d','ow','nlo','adbt','n'].join(''));});});
    BypassedByBloggerPemula(/filespayouts.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name='method_free']", 2);CaptchaDone(() => {ReadytoClick(['#do','wn','loa','dbt','n'].join(''));});});
    BypassedByBloggerPemula(/uploady.io/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists(['#do','wnlo','adb','tn'].join(''));});DoIfExists(['#fr','ee','_dwn'].join(''), 2);DoIfExists(['.ro','un','ded.','bt','n-pr','ima','ry.b','tn'].join(''), 2);});
    BypassedByBloggerPemula(/file-upload.org/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("button[name='method_free']", 2);DoIfExists(['.d','ownl','oad','-b','tn'].join(''), 2);CaptchaDone(() => {DoIfExists(['#d','ow','nloa','dbt','n'].join(''));});});
    BypassedByBloggerPemula(/mexa.sh/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['#D','own','lo','adf','re'].join(''), 2);DoIfExists(['#dir','ect','_li','nk'].join(''), 2);CaptchaDone(() => {DoIfExists(['#dow','nl','oadb','tn'].join(''));});});
    BypassedByBloggerPemula(/up-4ever.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name='method_free']", 2);DoIfExists(['#d','own','Lo','ad','Li','nkBu','tto','n'].join(''), 5);CaptchaDone(() => {DoIfExists(['#dow','nlo','ad','btn'].join(''));});});
    BypassedByBloggerPemula(/up-load.io|downloadani.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists("input[name='method_free']", 2);DoIfExists(['.btn','-d','ow.','bt','n'].join(''), 1);CaptchaDone(() => {DoIfExists(['#dow','nl','oadb','tn'].join(''));});});
    BypassedByBloggerPemula(/hitfile.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      CaptchaDone(() => {DoIfExists(['#sub','mit'].join(''));});DoIfExists(['.n','opay','-btn','.bt','n-gr','ey'].join(''), 2);waitForElm(['#po','pu','nd','er2'].join(''), hfl2 => redirect(hfl2.href), 37);});
    BypassedByBloggerPemula(/servicemassar.ma/, () => {CaptchaDone(() => {unsafeWindow.linromatic();});
      CheckVisibility('button:contains("Click here")', () => {DoIfExists('button:innerText("Next")', 2);DoIfExists('button:innerText("Redirect")', 2);});});
    BypassedByBloggerPemula(/upfion.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['.f','il','e-ma','in','.f','orm-','ma','in'].join(''))) {DoIfExists('.my-2.text-center > .btn-primary.btn', 2);CaptchaDone(() => {DoIfExists(['#li','nk-b','utto','n'].join(''));});}});
    BypassedByBloggerPemula(/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|(offeergames|todogame).online|whatgame.xyz|gold-24.net/, () => {
      DoIfExists('.oto > a:nth-child(1)', 1); waitForElm('.oto > a', linkjust => redirect(linkjust.href, false));});
    BypassedByBloggerPemula(/m.flyad.vip/, () => {
      waitForElm(['#cap','tc','haDi','sp','lay'].join(''), (display) => {const number = display.textContent.trim();waitForElm(['#c','ap','tch','aIn','put'].join(''), (input) => {input.value = number;
      waitForElm('button[onclick="validateCaptcha()"]', (button) => {sleep(1000).then(() => button.click());}, 15, 1);}, 15, 1);}, 15, 1);});
    BypassedByBloggerPemula(/easylink.gamingwithtr.com/, () => {DoIfExists(['#c','ount','do','wn'].join(''), 2);
      waitForElm('a#pagelinkhref.btn.btn-lg.btn-success.my-4.px-3.text-center', gtr => redirect(gtr.href, false));});
    BypassedByBloggerPemula(/mediafire.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (location.href.includes('file/')) {let mf = bp('.download_link .input').getAttribute('href');BpNote(mf);location.replace(mf);}});
    BypassedByBloggerPemula(/(tejtime24|drinkspartner|sportswordz|newspute).com|(raftarsamachar|gadialert|jobinmeghalaya|raftarwords|sharclub|jankaritak).in/, () => {
      window.scrollTo(0, 9999);DoIfExists(['#t','opB','ut','ton.','pro_','bt','n'].join(''), 2);DoIfExists(['#b','otto','mBut','ton'].join(''),3);ReadytoClick('#open-link > .pro_btn', 4);});
    BypassedByBloggerPemula(/downloader.tips/, () => {CaptchaDone(() => {DoIfExists('button.btn.btn-primary');});
      let downloader = setInterval(() => {if (bp(['#c','ount'].join('')).innerText == '0') {clearInterval(downloader);DoIfExists(['.bt','n-','pr','ima','ry','.b','tn'].join(''));}}, 1 * 1000);});
    BypassedByBloggerPemula(/modsbase.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['.f','ile','-p','ane','l'].join(''))) {DoIfExists(['.do','wnlo','ad','-fil','e-','bt','n'].join(''), 2);waitForElm('#downloadbtn > a', mba => redirect(mba.href, false));}});
    BypassedByBloggerPemula(/trangchu.news|downfile.site|(techacode|expertvn|ziggame|gamezigg).com|azmath.info|aztravels.net|handydecor.com.vn/, () => {
      AIORemover('removeAttr', ['#m','onet','iza'].join(''), 'onclick');CheckVisibility(['#mo','net','iza'].join(''), () => {ReadytoClick(['#mo','neti','za','.b','tn-','pr','ima','ry','.btn'].join(''));});
      elementReady(['#m','one','tiz','a-ge','ner','at','e'].join('')).then(() => setTimeout(() => {unsafeWindow.monetizago();}, 3 * 1000));});
    BypassedByBloggerPemula(/filedm.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#dl','bu','tton'].join(''))) {waitForElm(['#d','lbut','ton'].join(''), fdm => redirect('http:
    BypassedByBloggerPemula(/anonymfile.com|sharefile.co|gofile.to/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#d','ownl','oad'].join(''))) {waitForElm('a.btn-info', anon => redirect(anon.href),8,3);}});
    BypassedByBloggerPemula(/anonym.ninja/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (location.href.includes('download/')) {var fd = window.location.href.split('/').slice(-1)[0];redirect(`https:
    BypassedByBloggerPemula(/(carbikesupdate|carbikenation).com/, () => {parent.open = BpBlock();CheckVisibility(['#ve','rif','yBtn'].join(''), () => {DoIfExists(['#ge','tLi','nkBt','n'].join(''), 2);});
      CheckVisibility(['.top','.st','ep'].join(''), () => {DoIfExists(['#g','et','li','nk','s.bt','n'].join(''), 2);});});
    BypassedByBloggerPemula(/oydir.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['.d','ownl','oad','-no','w'].join(''))) {unsafeWindow.triggerFreeDownload();waitForElm('.text-center.download-now > .w-100.btn-blue.btn', oydir => redirect(oydir.href));}});
    BypassedByBloggerPemula(/doodrive.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.t','m-b','utto','n-do','wnl','oa','d.uk','-b','utt','on','-pri','mar','y.uk','-but','to','n'].join(''), 3);waitForElm('.uk-container > div > .uk-button-primary.uk-button', ddr => redirect(ddr.href));});
    BypassedByBloggerPemula(/(uploadrar|fingau|getpczone|wokaz).com|uptomega.me/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.m','nge','z-fr','ee','-d','own','loa','d'].join(''), 2);let $ = unsafeWindow.jQuery;DoIfExists('#direct_link > a:nth-child(1)', 2);$(['#dow','nlo','ad','btn'].join('')).click();});
    BypassedByBloggerPemula(/(ez4mods|game5s|sharedp|fastcars1|carbikenation).com|tech5s.co|a4a.site|rcccn.in/, () => {DoIfExists('div.text-center form', 'submit', 2);
      ReadytoClick(['#g','o_','d'].join(''), 1);waitForElm('a#go_d.submitBtn.btn.btn-primary', ez => redirect(ez.href));waitForElm('a#go_d2.submitBtn.btn.btn-primary', ez2 => redirect(ez2.href));});
    BypassedByBloggerPemula(/firefaucet.win/, () => {ReadytoClick('button:innerText("Continue")', 2);ReadytoClick('button:innerText("Go Home")', 2);
      CaptchaDone(() => {waitForElm('button[type=submit]:not([disabled]):innerText("Get Reward")', (element) => {ReadytoClick('button[type=submit]:not([disabled])',1);},10,1);});});
    BypassedByBloggerPemula(/drive.google.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}var dg = window.location.href.split('/').slice(-2)[0];
      if (window.location.href.includes('drive.google.com/file/d/')) {redirect(`https:
      } else if (window.location.href.includes('drive.google.com/u/0/uc?id')) {DoIfExists(['#d','ow','nloa','d-fo','rm'].join(''), 'submit', 1);}});
    BypassedByBloggerPemula(/4hi.in|(10short|animerigel|encurt4|encurtacash).com|finish.wlink.us|passivecryptos.xyz|fbol.top|kut.li|shortie.sbs|zippynest.online|faucetsatoshi.site|tfly.link|oii.si/, () => {
      DoIfExists(['#f','orm','-co','nt','inu','e'].join(''), 'submit', 2);CaptchaDone(() => {DoIfExists(['#lin','k-v','iew'].join(''), 'submit');});});
    BypassedByBloggerPemula(/cryptorotator.website/, () => {DoIfExists('div.btn:contains("Click here to unlock")', 2);
      CheckVisibility(['#a','lf_','co','ntin','ue'].join(''), () => {ReadytoClick("#alf_continue:not([disabled])");});CaptchaDone(() => {DoIfExists(['#in','visi','bleC','aptc','ha','Sho','rtli','nk'].join(''));});});
    BypassedByBloggerPemula(/qiwi.gg/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists("div [class^='page_DownloadPage']")) {DoIfExists("button[class^='DownloadButton_ButtonSoScraperCanTakeThisName']", 2);
      let qiwi = bp("a[class^='DownloadButton_DownloadButton']");setTimeout(() => {redirect(qiwi.href);}, 3 * 1000);}});
    BypassedByBloggerPemula(/turbobit.net/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      if (elementExists(['#tur','bo-t','ab','le'].join(''))) {let tb = bp(['#n','op','ay','-b','tn'].join('')).href;redirect(tb);}CaptchaDone(() => {DoIfExists(['#su','bm','it'].join(''));});
      waitForElm(['#fre','e-','do','wn','load','-f','il','e-l','ink'].join(''), tur => redirect(tur.href));});
    BypassedByBloggerPemula(/sharemods.com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['#d','Form'].join(''), 'submit', 2);if (elementExists(['.do','wnl','oa','d-fi','le-h','ol','de','r'].join(''))) {waitForElm('a#downloadbtn.btn.btn-primary', smd => redirect(smd.href));}});
    BypassedByBloggerPemula('(on-scroll|diudemy|maqal360).com', () => {
      if (elementExists(['.a','lert','Ad'].join(''))) {notify('BloggerPemula : Try to viewing another tab if the countdown does not work');}
      ReadytoClick('#append a', 2);ReadytoClick('#_append a', 3);elementReady(['.ale','rtA','d'].join('')).then(function() {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});
    BypassedByBloggerPemula(/onlinetechsolution.link/, () => {let Thunder = bp("input[name=newwpsafelink]");setTimeout(() => {redirect(JSON.parse(atob(Thunder.value)).linkr);}, 5 * 1000);});
    BypassedByBloggerPemula(/(ecryptly|equickle).com/, () => {if (BpParams.has('id')) {meta(atob(BpParams.get('id')));}waitForElm('#open-continue-form > input:nth-child(3)', Chain => redirect(atob(Chain.value)));
      elementReady(['#o','pen-','co','nt','inu','e-bt','n'].join('')).then(button => {sleep(3000).then(() => {window.location.href = strBetween(button.getAttribute('onclick'), "window.location.href='", "';", false);});});DoIfExists(['#rt','g-sn','p2'].join(''), 2);});
    BypassedByBloggerPemula(/(down.fast-down|down.mdiaload).com/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      elementReady('input.btn-info.btn').then(() => DoIfExists("input[name='method_free']", 2));elementReady(['.lf','t.f','ilep','anel'].join('')).then(() => ReadytoClick('a:innerText("Download")', 2));
      const captchaCode = BpAnswer(null, 'captcha');if (captchaCode) {const captchaInput = bp('input.captcha_code');if (captchaInput) {captchaInput.value = captchaCode;ReadytoClick('button:innerText("Create Download")', 30);}}});
    BypassedByBloggerPemula(/(horoscop|videoclip|newscrypto).info|article24.online|writeprofit.org|docadvice.eu|trendzilla.club|worldwallpaper.top/, () => {CaptchaDone(() => {unsafeWindow.wpsafehuman();});
      CheckVisibility('center > .wpsafelink-button', () => {DoIfExists('center > .wpsafelink-button', 1);});CheckVisibility('#wpsafe-generate > a', '||', "bp(['.bas','e-t','im','er'].join('')).innerText == '0:00'", () => {unsafeWindow.wpsafegenerate();
        if (location.href.includes(['ar','ticl','e24.','onli','ne'].join(''))) {DoIfExists('#wpsafelink-landing > .wpsafelink-button', 1);} else {DoIfExists('#wpsafelink-landing2 > .wpsafelink-button', 1);}});});
    BypassedByBloggerPemula(/revly.click|(clikern|kiddyshort|adsssy).com|mitly.us|link.whf.bz|shortex.in|(easyshort|shorturlearn).xyz/, () => {
      if (elementExists(['#l','in','k-vi','ew'].join(''))) {CaptchaDone(() => {DoIfExists(['#lin','k-','vie','w'].join(''), 'submit');});} else if (elementExists('button.btn.btn-primary')){DoIfExists('div.col-md-12 form', 'submit', 2);}});
    BypassedByBloggerPemula(/(wellness4live|akash.classicoder).com|2the.space|inicerita.online/, () => {
      var tform = bp(['#l','andi','ng'].join('')); redirect(JSON.parse(atob(tform.newwpsafelink.value)).linkr, false);});
    BypassedByBloggerPemula(/(hosttbuzz|policiesreview|blogmystt|wp2hostt|advertisingcamps|healthylifez|insurancemyst).com|clk.kim|dekhe.click/, () => {DoIfExists('button.btn.btn-primary', 2);
      AIORemover('removeAttr', ['.b','tn-','capt','cha.','bt','n-pr','imar','y.bt','n'].join(''), 'onclick');DoIfExists(['#ne','xtpa','ge'].join(''), 'submit', 2);DoIfExists(['#ge','tmy','link'].join(''), 'submit', 3);CaptchaDone(() => {DoIfExists(['.btn','-c','apt','cha','.b','tn-','pri','mary','.b','tn'].join(''));});});
    BypassedByBloggerPemula(/desiupload.co/, () => {if (!cfg.get('AutoDL')) {BpNote('Auto Download Feature Not Yet Activated!');return;}
      DoIfExists(['.do','wn','load','btn.','btn-','bl','oc','k.bt','n-p','rima','ry.b','tn'].join(''), 2);waitForElm('a.btn.btn-primary.btn-block.mb-4', rex => redirect(rex.href, false));});
    BypassedByBloggerPemula(/exactpay.online|neverdims.com|sproutworkers.co/, () => {let $ = unsafeWindow.jQuery;window.onscroll = BpBlock();unsafeWindow.check2();if (elementExists(['#ver','ify'].join(''))) {
        $(['.b','log-','det','ails'].join('')).text('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually');
        elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', unsafeWindow.check3);});}});
    BypassedByBloggerPemula(/(fitnesswifi|earnmoneyyt|thardekho|dinoogaming|pokoarcade|hnablog|orbitlo|finquizy|indids|redfea|financenuz|pagalworldsong).com|(ddieta|lmktec).net|(bankshiksha|odiadjremix).in|vbnmx.online/, () => {
      waitForElm("div[id^='rtg-'] > a:nth-child(1)", Linkpays => redirect(Linkpays.href, false));DoIfExists('#rtg', 'submit', 2);
      DoIfExists('#rtg-snp21 .rtg_btn', 3);DoIfExists(['#rtg','-s','np2'].join(''), 3);DoIfExists('#rtg-snp21 > button', 4);});
    BypassedByBloggerPemula(/tempatwisata.pro/, async () => {
      const buttons = ['button:innerText("Generate Link")', 'button:innerText("Continue")', 'button span:innerText("Continue")', 'button:innerText("Get Link")', 'button span:innerText("Get Link")', 'button:innerText("Next")'];
      for (const selector of buttons) {await sleep(2000);ReadytoClick(selector);}});
    BypassedByBloggerPemula(/(tinybc|phimne).com|(mgame|sportweb|bitcrypto).info/, () => {
      elementReady('#wpsafe-link a[onclick*="handleClick"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/handleClick\('([^']+)'\)/);
        if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/bewbin.com/, () => {elementReady('.wpsafe-top > script:nth-child(4)').then((script) => sleep(3000).then(() =>
      redirect('https:
    BypassedByBloggerPemula(/lajangspot.web.id/, () => {elementReady('#wpsafe-link > script:nth-child(2)').then((script) => sleep(3000).then(() =>
      redirect('https:
    BypassedByBloggerPemula(/(marketrook|governmentjobvacancies|swachataparnibandh|goodmorningimg|odiadance|newkhabar24|aiperceiver|kaomojihub|arkarinaukrinetwork|topgeninsurance).com|(winezones|kabilnews|myscheme.org|mpsarkarihelp|dvjobs|techawaaz).in|(biharhelp|biharkhabar).co|wastenews.xyz|biharkhabar.net/, () => {
      elementReady('a#btn7').then(() => DoIfExists('a#btn7', 3));ReadytoClick('#open-link > .pro_btn',3);DoIfExists("form[name='dsb']", 'submit', 3);DoIfExists('button:innerText("Continue")', 4);});
    BypassedByBloggerPemula(/inshortnote.com/, () => {let clickCount = 0;const maxClicks = 7;function clickElement() {if (clickCount >= maxClicks) {BpNote("I'm tired of clicking, I need a break");return;}let element = bp('#htag > [style="left: 0px;"]') || bp('#ftag > [style="left: 0px;"]');
      if (element) {element.click();clickCount++;return;}for (let el of bp('.gaama [style*="left:"]', true)) {if (/^[a-zA-Z0-9]{5,6}$/.test(el.textContent.trim())) {el.click();clickCount++;return;}}}const intervalId = setInterval(() => {clickElement();if (clickCount >= maxClicks) clearInterval(intervalId);}, 3000);});
    BypassedByBloggerPemula(/(admediaflex|cdrab|financekita|jobydt|foodxor|mealcold|newsobjective|gkvstudy|mukhyamantriyojanadoot|thepragatishilclasses|indobo|pdfvale|templeshelp).com|(ecq|cooklike).info|(wpcheap|bitwidgets|newsamp|coinilium).net|atomicatlas.xyz|gadifeed.in|thecryptoworld.site|skyfreecoins.top|petly.lat|techreviewhub.store|mbantul.my.id/, () => {
      elementReady('#wpsafe-link a[onclick*="window.open"]').then((link) => {const onclick = link.getAttribute('onclick');const urlMatch = onclick.match(/window\.open\('([^']+)'/);if (urlMatch && urlMatch[1]) {const targetUrl = urlMatch[1];sleep(5000).then(() => redirect(targetUrl));}});});
    BypassedByBloggerPemula(/jioupload.com/, () => {function calculateAnswer(text) {const parts = text.replace("Solve:", "").replace(/[=?]/g, "").trim().split(/\s+/);const [num1, op, num2] = [parseInt(parts[0]), parts[1], parseInt(parts[2])];return op === "+" ? num1 + num2 : num1 - num2;}
try{void(Object.keys&&Object.keys({}).length===0);}catch(_x){}
      elementReady(['.fil','e-de','ta','ils'].join('')).then(() => {DoIfExists('form button.btn-secondary', 'click', 2);waitForElm('a.btn.btn-secondary[href*="/file/"]', (jiou) => redirect(jiou.href, false));});
      elementReady("#challenge").then((challenge) => {const answer = calculateAnswer(challenge.textContent);BpNote(`Solved captcha: ${challenge.textContent} Answer: ${answer}`);elementReady("#captcha").then((input) => {input.value = answer;elementReady("button[type='submit']").then((button) => sleep(3000).then(() => button.click()));});});});
    BypassedByBloggerPemula(/teknoasian.com/, () => {CheckVisibility('h4 > b', () => {DoIfExists('button:innerText("Continue")', 1);});CheckVisibility('.Skipper > h4 > b', () => {DoIfExists('button:innerText("Get Link")', 1);});
      CheckVisibility('.humanVerify button', '||', "bp('.humanVerify button').innerText == 'Click To'", () => {DoIfExists('button:innerText("Click To Verify")', 1);DoIfExists('button:innerText("Generate Link")', 2);});});
    BypassedByBloggerPemula(/tutwuri.id|(besargaji|link2unlock).com|app.khaddavi.net/, () => {ReadytoClick(['#sub','mit','-but','ton'].join(''),2);ReadytoClick(['#b','tn-2'].join(''), 3);ReadytoClick('#verify > a ', 2);ReadytoClick('#verify > a ', 2);ReadytoClick('#second_open_placeholder > a ', 2);ReadytoClick('#verify > a ', 2);ReadytoClick('a:innerText("Go to Link")', 2);});
    BypassedByBloggerPemula(/(lyricsbaazaar|ezeviral).com/, () => {CaptchaDone(() => {DoIfExists(['#bt','n6'].join(''));});
      waitForElm('div.modal-content a', lyri => redirect(lyri.href, false));});
    BypassedByBloggerPemula(/(mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm|qrixpe).com|(loopmyhub|thepopxp).shop|(cryptoblast|powergam).online/, () => {const GPlinks = 2 / (24 * 60);RSCookie('set', 'adexp', '1', GPlinks);
      CheckVisibility(['.V','eri','fyB','tn'].join(''), () => {DoIfExists(['#V','er','if','yB','tn'].join(''), 2);ReadytoClick(['#Ne','xtBt','n'].join(''), 3);});if (elementExists(['#S','mi','le','yB','an','ner'].join(''))) {setActiveElement('[id="div-gpt-ad"]');fakeHidden();}});
    BypassedByBloggerPemula(/socialwolvez.com/, () => {let xhr = new XMLHttpRequest();xhr.onload = () => redirect(JSON.parse(xhr.responseText).link.url);
      xhr.open("GET", "https:
    BypassedByBloggerPemula(/bitcotasks.com/, () => {if (location.href.includes('/firewall')) {CheckVisibility(['#cap','tcha','-con','tai','ner'].join(''), '&&', "bp(['.mb-','2'].join('')).innerText == 'Verified'", () => {DoIfExists('button:contains("Validate")');});}
      if (location.href.includes('/lead')) {CheckVisibility('#status .btn', () => {DoIfExists('button:contains("Start View")');});}CheckVisibility(['#cap','tc','ha-','cont','aine','r'].join(''), '&&', "bp(['.m','b-2'].join('')).innerText == 'Verified'", () => {unsafeWindow.continueClicked();});
      CheckVisibility(['.al','ert-','succ','ess.','al','er','t'].join(''), '||', "bp(['.ale','rt-','su','cc','ess'].join('')).innerText == 'This offer was successfully'", () => {unsafeWindow.close();});});
    BypassedByBloggerPemula(/shortit.pw/, () => {if (elementExists(['#cap','tch','abo','x'].join(''))) {
        notify('IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards...');}
      DoIfExists(['.p','uls','e.b','tn','-pri','mary','.bt','n'].join(''), 3);CaptchaDone(() => {DoIfExists(['#btn','2'].join(''));});});
    BypassedByBloggerPemula(/short.croclix.me|adz7short.space/, () => {let $ = unsafeWindow.jQuery;setInterval(() => {if ($("#link").length > 0) {ReadytoClick("#link");}}, 500);
      setInterval(() => {if ($("input#continue").length > 0) {ReadytoClick("input#continue");} if ($("a#continue.button").length > 0) {ReadytoClick("a#continue.button");}}, 9000);
      setTimeout(() => {if ($("#btn-main").length < 0) return;ReadytoClick("#btn-main");}, 5000);});
    BypassedByBloggerPemula(/crypto-fi.net|claimcrypto.cc|xtrabits.click|(web9academy|bioinflu|bico8).com|(ourcoincash|studyis).xyz/, () => {
      var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false);});
    BypassedByBloggerPemula(/dutchycorp.ovh|(encurt4|10short).com|seulink.digital|oii.io|hamody.pro|metasafelink.site|wordcounter.icu|pwrpa.cc|flyad.vip|seulink.online|pahe.plus|beinglink.in/, () => {if (cfg.get('Audio') && !/dutchycorp.ovh|encurt4.com/.test(window.location.host)) return;
      if (elementExists(['.gr','ecap','tc','ha-b','adge'].join('')) || elementExists(['#c','ap','tc','haSh','or','tli','nk'].join(''))) {var ticker = setInterval(() => {try {clearInterval(ticker);unsafeWindow.grecaptcha.execute();} catch (e) {BpNote(`reCAPTCHA execution failed: ${e.message}`, 'error');}}, 3000);}});
    BypassedByBloggerPemula(/(remixsounds|helpdeep|thinksrace).com|(techforu|studywithsanjeet).in|uprwssp.org|gkfun.xyz/, () => {DoIfExists(['.m','-2','.b','tn-','ca','pt','cha','.b','tn-o','utl','ine-','pr','ima','ry.','btn'].join(''), 2);DoIfExists(['.t','pdev','-btn'].join(''), 3);DoIfExists("#tp98 button[class^='bt']", 3);DoIfExists("form[name='tp']", 'submit', 3);
      DoIfExists(['#btn','6'].join(''), 4);var wssp = bp('body > center:nth-child(6) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > center:nth-child(3) > center:nth-child(4) > center:nth-child(2) > center:nth-child(4) > script:nth-child(5)');
      if (wssp) {var scriptContent = wssp.textContent;var Linkc = scriptContent.match(/var\s+currentLink\s*=\s*["'](.*?)["']/);if (Linkc && Linkc[1]) {var CLink = Linkc[1];redirect(CLink);} else {BpNote("currentLink Not Found.");}} else {BpNote("Element Not Found.");}});
    BypassedByBloggerPemula(/adshnk.com|adshrink.it/, () => {const window = unsafeWindow;let adsh = setInterval(() => {if (typeof window._sharedData == "object" && 0 in window._sharedData && "destination" in window._sharedData[0]) {clearInterval(adsh);document.write(window._sharedData[0].destination);
      redirect(document.body.textContent);} else if (typeof window.___reactjsD != "undefined" && typeof window[window.___reactjsD.o] == "object" && typeof window[window.___reactjsD.o].dest == "string") {clearInterval(adsh);redirect(window[window.___reactjsD.o].dest);}});});
    BypassedByBloggerPemula(/newsminer.uno/, () => {const window = unsafeWindow;CheckVisibility(['#c','lic','kMe','ssa','ge'].join(''), '&&', "bp(['#c','li','ckMe','ssag','e'].join('')).innerText == 'Click any ad'", () => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});
      if (elementExists('input.form-control')) {notify('Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually', false, true);window.onscroll = BpBlock();window.check2();elementReady('[name="answer"]').then(function(element) {element.addEventListener('change', window.check3);});}});
    BypassedByBloggerPemula(/(suaurl|lixapk|reidoplacar|lapviral|minhamoto).com/, () => {if (!cfg.get('SameTab')) {SameTab();BpNote('SameTab activated to prevent new tabs');}waitForElm('button[type="submit"]:contains("FETCH LINK")', Btn1 => Btn1.click(), 10, 2);
      waitForElm('button:contains("START")', Btn2 => Btn2.click(), 10, 2);waitForElm('button:contains("PULAR CAPTCHA")', Btn3 => Btn3.click(), 10, 3);waitForElm('button:contains("FINAL LINK")', Btn4 => Btn4.click(), 10, 2);CheckVisibility('button:contains("CONTINUAR")', () => {ReadytoClick('button:contains("CONTINUAR")');});
      CheckVisibility('button:contains("DESBLOQUEAR")', () => {ReadytoClick('button:contains("DESBLOQUEAR")');});CheckVisibility('button[type="submit"]:contains("DESBLOQUEAR")', () => {ReadytoClick('button[type="submit"]:contains("DESBLOQUEAR")');});});
    BypassedByBloggerPemula(/autofaucet.dutchycorp.space/, function () {let autoRoll = false;if (window.location.href.includes('/roll_game.php')) {window.scrollTo(0, 9999);
    if (!bp(['#tim','er'].join(''))) {CaptchaDone(() => {if (bp(['.b','oo','st-b','tn.u','nlo','ck','butt','on'].join('')) && autoRoll === false) {bp(['.boo','st-b','tn.','unl','ockb','utt','on'].join('')).click();autoRoll = true;}CheckVisibility(['#cla','im','_b','oost','ed'].join(''), () => {bp(['#c','la','im_b','oos','ted'].join('')).click();});});} else {
      setTimeout(() => {window.location.replace('https:
    if (!bp("#timer")) {CaptchaDone(() => {if (bp(['.b','oos','t-bt','n.','unlo','ckbu','tton'].join('')) && autoRoll === false) {bp(['.boo','st-','bt','n.u','nloc','kbut','to','n'].join('')).click();autoRoll = true;}CheckVisibility(['#cl','ai','m_bo','ost','ed'].join(''), () => {bp(['#c','lai','m_b','oo','ste','d'].join('')).click();});});} else {setTimeout(() => {window.location.replace('https:
    if (window.location.href.includes('/ptc/wall.php')) {var ptcwall = bp(".col.s10.m6.l4 a[name='claim']", true);if (ptcwall.length >= 1) {ptcwall[0].style.backgroundColor = 'red';let match = ptcwall[0].onmousedown.toString().match(/'href', '(.+)'/);let hrefValue = match[1];
      setTimeout(() => {window.location.replace('https:
    if (location.href.includes('autofaucet.dutchycorp.space/ptc/')) {BpNote('Viewing Available Ads');if (elementExists(['.fa','-ch','eck','-d','oub','le'].join(''))) {BpNote('All Available Ads Watched');
      setTimeout(() => {window.location.replace('https:
    BypassedByBloggerPemula(/stly.link|(snaplessons|atravan|airevue|carribo|amalot|techetta|biovetro).net|(stfly|shrtlk|srtslug).biz|(veroan|technons|tournguide|yrtourguide).com/,() => {
      unsafeWindow.abwn=function(){};unsafeWindow.s026c20f179593697e6f1a533e1e9f50b_10e94202bec82e9eee6fb30f38b53efb=function(e,n,a){try{if(typeof n==='function')n()}catch(_){}};unsafeWindow.justDetectAdblock={detectAnyAdblocker(){return Promise.resolve(!1)}};
      unsafeWindow.start_true = true;CaptchaDone(() => {ReadytoClick('button[class^=mt-4]');DoIfExists('button.mt-4:nth-child(2)', 3);});CheckVisibility('button[class^=rounded]', () => {if (!bp(['.g-r','ec','ap','tcha'].join('')) || !bp(['.c','f-t','urns','ti','le'].join(''))) {DoIfExists('button[class^=rounded]', 2);}});
      CheckVisibility('button[class^=mt-4]', '&&', "bp(['.pro','gr','ess','-do','ne'].join('')).innerText == '100'", () => {ReadytoClick('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 4);});CheckVisibility('button[class^=mt-4]', '&&', "bp(['#cou','ntdo','wn-n','umb','er'].join('')).innerText == '✓'", () => {DoIfExists('button[class^=mt-4]', 2);ReadytoClick('button.mt-4:nth-child(2)', 3);});});
    BypassedByBloggerPemula(/(playonpc|yolasblog|playarcade).online|(quins|megahosting).us|(retrotechreborn|insurelean|ecosolardigest|finance240|2wheelslife|historyofyesterday|tradeshowrating).com|gally.shop|evegor.net|freeat30.org|(qanin|ivnlnews|jobvox|gfcg).xyz/, () => {CaptchaDone(() => {DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);});
      let playonpc = setInterval(() => {if (!elementExists(['.h-','cap','tcha'].join('')) && !elementExists(['.co','re-','msg.','sp','ac','er','.spa','cer-','top'].join('')) && bp(['#for','mBu','tto','mM','es','sage'].join('')).textContent == "Well done! You're ready to continue!" && !bp('#cbt').hasAttribute('disabled')) {clearInterval(playonpc);DoIfExists('button#cbt.pfbutton-primary', 1);ReadytoClick('button#cbt.pfbutton-primary', 2);}}, 3 * 1000);});
    BypassedByBloggerPemula(/(sekilastekno|miuiku|vebma|majalahhewan).com|crm.cekresi.me|(ai|go).tempatwisata.pro/, async function() {const window = unsafeWindow;const executor = async () => {let El = window?.livewire?.components?.components()[0];while (!El) {await sleep(100);BpNote(1);El = window?.livewire?.components?.components()[0];}
      const payload = {fingerprint: El.fingerprint,serverMemo: El.serverMemo,updates: [{payload: {event: 'getData',id: 'whathappen',params: [],},type: 'fireEvent',}, ],};const response = await fetch(location.origin + '/livewire/message/pages.show', {headers: {'Content-Type': 'application/json','X-Livewire': 'true','X-CSRF-TOKEN': window.livewire_token,},method: 'POST',body: JSON.stringify(payload),});
      const json = await response.json();const url = new URL(json.effects.emits[0].params[0]);redirect(url.href);};if (location.host === 'wp.sekilastekno.com') {if (elementExists("form[method='post']")) {const a = bp("form[method='post']");BpNote('addRecord...');const input = document.createElement('input');input.value = window.livewire_token;input.name = '_token';input.hidden = true;a.appendChild(input);a.submit();}
      if (elementExists("button[x-text]")) {BpNote('getLink..');executor();}return;}if (elementExists("div[class='max-w-5xl mx-auto']")) {BpNote('Executing..');executor();}});

    BypassedByBloggerPemula(/coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net/, () => {let $ = unsafeWindow.jQuery;const url = window.location.href;if (url.includes('go/')) {notify('Reload the Page , if the Copied Key is Different', false, true);sleep(1000).then(() => {const link = bp('.mb-2:nth-child(2) > strong > a');
      const key = bp('p.mb-2:nth-child(3) > kbd > code') || bp('p.mb-2:nth-child(4) > kbd > code');if (link && key) {const keyText = key.textContent.trim();GM_setClipboard(keyText);GM_setValue('lastKey', keyText);GM_openInTab(link.href, false);} else {const p = Array.from(BpT('p')).find(p => p.textContent.toLowerCase().includes('step 1') && p.textContent.toLowerCase().includes('google'));
      if (p) sleep(1000).then(() => {const t = p.textContent.toLowerCase();GM_openInTab(t.includes('geekgrove') ? 'https:
      if ([['gee','kgr','ov','e.','ne','t'].join(''), ['vita','lit','yvi','sta.','net'].join(''), 'coinhub.wiki'].some(site => url.includes(site))) {ReadytoClick('a.btn:has(.mdi-check)', 2);DoIfExists(['#bt','nLi','nk','Sta','rt'].join(''), 2);CaptchaDone(() => {DoIfExists(['#bt','nLin','kCo','ntin','ue'].join(''));});CheckVisibility(['#bt','nLin','kCo','nt','inue'].join(''), () => {if (!elementExists(['.i','conc','ap','tc','ha-','moda','l'].join(''))) {DoIfExists(['#btn','Link','Cont','inue'].join(''));} else {DoIfExists(['.i','co','nc','ap','tcha','-mod','al__','bod','y'].join(''));}});
      CheckVisibility(['.a','ler','t-su','cc','ess','.ale','rt-i','nli','ne','.a','lert'].join(''), () => {DoIfExists(['#b','tnL','pco','nt'].join(''));});sleep(1000).then(() => {const input = bp(['#li','nk','Inpu','t'].join(''));if (input) {input.value = GM_getValue('lastKey', '');sleep(1000).then(() => bp(['.bt','n-pr','ima','ry.b','tn','-r','ippl','e'].join(''))?.click());}const observer = new MutationObserver((mutations, obs) => {const codeEl = bp(['.l','ink_','co','de'].join(''));
      if (codeEl) {const code = codeEl.textContent.trim();GM_setClipboard(code);$('#link_result_footer > div > div').text(`The Copied Code is / Kode yang tersalin adalah: ${code} , Please Paste the Code on the coinclix.co Site Manually / Silahkan Paste Kodenya di Situs coinclix.co secara manual`);obs.disconnect();}});observer.observe(document.body, {childList: true,subtree: true});});}});
    BypassedByBloggerPemula(/.*/, () => {if (CloudPS(true, true, true)) return;let List = [['lo','ptea','pi.','com'].join(''), '3link.co', ['web1','s.','co','m'].join(''), 'vuotlink.vip'], $ = unsafeWindow.jQuery;if (elementExists('form[id=go-link]') && List.includes(location.host)) {ReadytoClick("a.btn.btn-success.btn-lg.get-link:not([disabled])", 3);} else if (elementExists('form[id=go-link]')){$('form[id=go-link]').off('submit').on('submit', function(e) {e.preventDefault();
      let form = $(this),url = form.attr('action'),pesan = form.find('button'),notforsale = $(".navbar-collapse.collapse"),blogger = $(".main-header"),pemula = $(".col-sm-6.hidden-xs");$.ajax({type: "POST",url: url,data: form.serialize(),dataType: 'json',beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join('')).text('Shortlink Bypassed');
      let btn = '<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Bypass All Shortlinks Debloated</b></button>';notforsale.replaceWith(btn);blogger.replaceWith(btn);pemula.replaceWith(btn);},success: function(result, status, xhr) {let finalUrl = result.url;if (finalUrl.includes(['sw','if','tcut','.xy','z'].join(''))) {
      finalUrl = finalUrl.replace(/[?&]i=[^&]*/g, '').replace(/[?]&/, '?').replace(/&&/, '&').replace(/[?&]$/, '');location.href = finalUrl;} else if (xhr.responseText.match(/(a-s-cracks.top|mdiskshortner.link|exashorts.fun|bigbtc.win|slink.bid|clockads.in)/)) {location.href = finalUrl;} else {redirect(finalUrl);}},error: function(xhr, status, error) {BpNote(`AJAX request failed: ${status} - ${error}`, 'error');}});});}});
    BypassedByBloggerPemula('headlinerpost.com|posterify.net', () => {let dataValue = '';for (let script of bp('script', true)) {if (script.textContent.includes('data:')) {dataValue = strBetween(script.textContent, "data: '", "'", true); break;}}let stepValue = '', planValue = '';try {const plan = JSON.parse(RSCookie('read', 'plan') || '{}');stepValue = plan.lid || '';planValue = plan.page || '';} catch {}if (!dataValue || !stepValue) return;
      const postData = {data: dataValue};const sid = RSCookie('read', 'sid');postData[sid ? 'step_2' : 'step_1'] = stepValue;if (sid) postData.id = sid;const isHeadliner = location.host === ['head','li','ne','rpo','st.','co','m'].join('');const headers = {'Content-Type': 'application/x-www-form-urlencoded','Referer': isHeadliner ? 'https:
      GM_xmlhttpRequest({method: 'POST',url: 'https:
      if ((result.inserted_data?.id || result.updated_data) && (sid || result.inserted_data?.id)) {const ShrinkUrl = isHeadliner ? `https:
    BypassedByBloggerPemula(/flickr.com/, () => {if (!cfg.get('Flickr')) return;function createDownloadLinks() {const finalizeContainer = (container, sizesLink) => {if (!container.children.length) return;const parent = sizesLink.parentElement;if (parent) {parent.insertBefore(container, sizesLink);} else {document.body.appendChild(container);}BpNote('The Image is Ready to Save', 'info');};
      waitForElm('a[href*="/sizes/"]', sizesLink => {if (!sizesLink) return BpNote('View all sizes link not found', 'error');GM_xmlhttpRequest({method: 'GET',url: sizesLink.href,onload: response => {try {const sizesDoc = new DOMParser().parseFromString(response.responseText, 'text/html');const sizeItems = sizesDoc.querySelectorAll('.sizes-list li ol li');if (!sizeItems.length) return BpNote('No size items found', 'warn');
      const container = document.createElement('div');container.style.cssText = 'background:white;border:1px solid #ccc;padding:10px;z-index:1000;margin-bottom:5px;position:relative';const header = document.createElement('div');header.textContent = 'Bloggerpemula Script';header.style.cssText = 'text-align:center;font-weight:bold;margin-bottom:0px;color:#333';container.appendChild(header);
      const closeButton = document.createElement('button');closeButton.textContent = 'X';closeButton.style.cssText = 'position:absolute;top:0px;right:0px;background:none;border:none;font-size:14px;cursor:pointer;color:#333';closeButton.onclick = () => container.remove();container.appendChild(closeButton);let processed = 0;sizeItems.forEach(item => {const sizeLink = item.querySelector('a');
      const sizeText = sizeLink ? sizeLink.textContent.trim() : item.textContent.trim();const sizeName = `${sizeText} ${item.querySelector('small')?.textContent.trim() || ''}`;const sizeUrl = sizeLink?.href;if (!sizeUrl) {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);return;}GM_xmlhttpRequest({method: 'GET',url: sizeUrl,onload: sizeResponse => {try {const sizeDoc = new DOMParser().parseFromString(sizeResponse.responseText, 'text/html');
      const img = sizeDoc.querySelector('#allsizes-photo img[src]');if (!img) return;const saveLink = document.createElement('a');saveLink.href = img.src;saveLink.textContent = `Save ${sizeName}`;saveLink.style.cssText = 'display:block;margin:5px 0';saveLink.onclick = e => {e.preventDefault();GM_openInTab(img.src, {active: true});};container.appendChild(saveLink);} catch (e) {}processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);},
      onerror: () => {processed++;if (processed === sizeItems.length) finalizeContainer(container, sizesLink);}});});} catch (e) {BpNote(`Error processing sizes page: ${e.message}`, 'error');}},onerror: () => BpNote('Failed to fetch sizes page', 'error')});});}if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', createDownloadLinks, {once: true});} else {createDownloadLinks();}});
    BypassedByBloggerPemula(/(mdseotools|sealanebio|bihartown|tessofficial|latestjobupdate|hypicc|niveshskill|carbikeswale|eduprothink|glimmerbyte|technofreez|pagalworldlyrics|poorhindi|paisasutra|dhanyogi|thedeorianews|bgmiobb).com|(allnotes|sewdamp3.com|motahone|mukhyasamachar|techrain).in|(pisple|cirdro|panscu).xyz|taiyxd.net/, async () => {ReadytoClick(['#ag','e.p','rog','ress','-but','ton'].join(''), 2);ReadytoClick(['#get','-l','ink'].join(''), 3);ReadytoClick(['#c','on','fi','rmY','es'].join(''), 4);
      async function handleQuiz() {const questionEl = bp(['#q','ues','tio','n'].join(''));if (!questionEl) return;const { result: answer, op, a, b } = BpAnswer(questionEl.textContent.trim());if (answer === null) return;let radioSelector = `input[type="radio"][name="option"][value="${answer}"]`;let radio = bp(radioSelector);if (!radio && op === '/') {const altAnswer = Math.round(a / b);radioSelector = `input[type="radio"][name="option"][value="${altAnswer}"]`;radio = bp(radioSelector);}
      if (!radio) {const options = Array.from(bp('input[type="radio"][name="option"]', true)).map(r => parseInt(r.value));const closest = options.reduce((p, c) => Math.abs(c - answer) < Math.abs(p - answer) ? c : p);radioSelector = `input[type="radio"][name="option"][value="${closest}"]`;radio = bp(radioSelector);}if (!radio) {BpNote('Tidak ada opsi yang valid untuk dipilih', 'error');return;}ReadytoClick(radioSelector);await sleep(3000);ReadytoClick(['#ne','xt','-p','age-','bt','n.','pro','gr','ess-','butt','on'].join(''));}await handleQuiz();});
    BypassedByBloggerPemula(/(cryptosparatodos|placementsmela|howtoconcepts|tuasy|skyrimer|yodharealty|mobcupring|aiimsopd|advupdates|camdigest|heygirlish|blog4nx|todayheadliners|jobqwe|cryptonews.faucetbin|mobileflashtools).com|(paidinsurance|djstar|sevayojana|bjp.org).in|(sastainsurance|nashib).xyz|(cialisstrong|loanforuniversity).online|(cegen|thunder-appz.eu).org|zaku.pro|veganab.co|skyfreecoins.top|manga4nx.site/, () => waitForElm('#wpsafe-link a', bti => redirect(strBetween(bti.onclick.toString(), `window.open('`, `', '_self')`), false)));
    BypassedByBloggerPemula('(cryptowidgets|melodyspot|carsmania|cookinguide|tvseriescentral|cinemascene|hobbymania|plantsguide|furtnitureplanet|petsguide|gputrends|gamestopia|ountriesguide|carstopia|makeupguide|gadgetbuzz|coinsvalue|coinstrend|coinsrise|webfreetools|wanderjourney|languagefluency|giftmagic|bitwidgets|virtuous-tech).net|(freeoseocheck|insurancexguide|funplayarcade|origamiarthub|fitbodygenius|illustrationmaster|selfcareinsights|constructorspro|ecofriendlyz|virtualrealitieshub|wiki-topia|techiephone|brewmasterly).com|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly).site|coinscap.info|insurancegold.in|wii.si', () => {
      CheckVisibility(['#c','ap','tc','ha-c','on','ta','in','er'].join(''), '&&', "bp(['.m','b-2'].join('')).innerText == 'Verified'", () => ReadytoClick('button:contains("Verify")',2));const tano = window.location.href;if (['dailytech-news.eu','wii.si', 'bubblix.eu', ['bitw','id','gets','.n','et'].join(''), 'virtuous-tech.net', ['carf','oc','us','.sit','e'].join(''), ['bi','it.','site'].join('')].some(tino => tano.includes(tino))) {elementReady('#loadingDiv[style*="display:block"] button, #loadingDiv[style*="display: block"] button').then(ReadytoClick.bind(this, 'button', 2));} else {CheckVisibility('#loadingDiv[style^="display"] > span', () => {const buttonText = strBetween(bp('#loadingDiv[style^="display"] > span').textContent, "Click", "To Start", false);elementReady(`#loadingDiv[style^="display"] .btn.btn-primary:contains("${buttonText}")`).then(buttonElement => {
      const buttons = Array.from(bp('#loadingDiv[style^="display"] .btn.btn-primary', true));const index = buttons.indexOf(buttonElement);if (index === -1) return;const selectorOptions = ['button.btn:nth-child(2)', 'button.btn:nth-child(3)', 'button.btn:nth-child(4)', 'button.btn:nth-child(5)', 'button.btn:nth-child(6)'];const chosenSelector = selectorOptions[index];if (chosenSelector) sleep(2000).then(() => ReadytoClick(`#loadingDiv[style^="display"] ${chosenSelector}`));});});}elementReady('#clickMessage[style*="display: block"], clickMessage[style*="display:block"]').then(() => {setActiveElement('[data-placement-id="revbid-leaderboard"]');fakeHidden();});});

    }})();

(function() {
    'use strict';

    if (/acortalink.me/.test(window.location.href)) {

        window.addEventListener('load', function() {
            const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
            popupsToRedirects();

            let button = document.querySelector(['#co','ntad','or'].join(''));
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

    /

    /empebau.eu\/s/.test(url) ? afterDOMLoaded(function() {
        redirect(document.documentElement.innerHTML.match(/let url = "(https?:\/\/[^"]+)";/)[1]);
    }) : null;

    /epicload.com\/files/.test(url) ? afterDOMLoaded(function() {
        modifyScript('var timer = 15', 'var timer = 0');
        redirectIfExists(['.bt','n-p','rima','ry'].join(''));
        clickIfNotDisabled(['.bt','n-','ge','tli','nk'].join(''));
    }) : null;

    /woowebtools.com|pallabmobile.in/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('.hv-grid > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > button:nth-child(2)')}) : null;
    /woowebtools.com|pallabmobile.in/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > p:nth-child(4) > button:nth-child(1)')}) : null;
    /doodrive.com\/f/.test(url) ? window.addEventListener("load", function(event) {setTimeout(function() { clickIfExists('button.uk-button-primary:nth-child(1)')}, 1000) }) : null;

    /ipamod.com\/redirect-to/.test(url) && url.includes('?s=') ? redirect(decodeURIComponent(url.split('?s=')[1])) : null;

    /9xflix\.(\w+)\/m\/goto/.test(url) ? redirect(url.split('/goto/')[1]) : null;

    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#tp','98'].join(''))}) : null;
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#bt','n6'].join(''))}) : null;
    /earnmoneyyt.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['.t','p-bl','ue'].join(''))}) : null;
    /sheralinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;
    /go.bloggingaro.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;
    /land.povathemes.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    /(bgmiupdatehub|novelquote|superheromaniac|jkssbalerts|taazaloans|spatsify|sikhehindime|careersides).com|(sabarpratham|pubprofit|sarkariyojnaa|reliablesp).in|dear-lottery.org/.test(url) ? afterDOMLoaded(function() {
        window.count = 0;
        clickWithDelay(['#tp','98'].join(''), 2000);
        clickWithDelay(['#b','tn6'].join(''), 2000);
    }) : null;
    /www.udlinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    /thelatintwistcafe.com/.test(url) ? afterDOMLoaded(function() {
        count = 0;
        setTimeout(function() {document.querySelector(['#tp9','8'].join('')).click();}, 3000);
        setTimeout(function() {document.querySelector(['#b','tn','6'].join('')).click();}, 3000);
        setTimeout(function() {document.querySelector('#.tp-blue').click();}, 3000);
    }) : null;

    /techkhulasha.com|blog.bloggerishyt.in/.test(url) ? afterDOMLoaded(function() {
        modifyScript(/9000|30000|1000/gm, '100');
        clickIfExists(['#po','pup','-but','to','n'].join(''));
        clickIfExists(['#go','toli','nk'].join(''));
        clickIfExists([97,46,98,116,45,115,117,99,99,101,115,115].map(function(_c){return String.fromCharCode(_c)}).join(''));
        if (document.querySelector('#ad-top > h4:nth-child(2)').innerHTML.includes('step 2')) {clickIfExists(['#go','toli','nk'].join(''))};
    }) : null;
    /golink.bloggerishyt.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;


    /tech.itijobalert.in\/\?token\=/.test(url) ? redirect("https:
    /golink.(gyanitheme.com|bloggerishyt.in)/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    /veganab.co/.test(url) ? popupsToRedirects() : null;
    /veganab.co/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.btn-hover:nth-child(2)')}) : null;
    const extractLinkFromButtonOnclick = buttonElement => buttonElement.getAttribute("onclick").match(/window\.open\('([^']+)'/)[1];
    const redirectToOnclickIfExists = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); redirect(extractLinkFromButtonOnclick(button)) } }, 500); };
    /camdigest.com/.test(url) ? afterDOMLoaded(function() {redirectToOnclickIfExists('#wpsafe-link > a')}) : null;
    /pastebin.com\/raw/.test(url) ? afterDOMLoaded(function() { const rawContent = document.body.textContent.trim(); isValidUrl(rawContent) ? setTimeout(() => {redirect(rawContent)}, 1500) : null; }) : null;
    /pastebin.com\/raw/.test(url) ? !function() {const rawContent = document.body.textContent.trim(); isValidUrl(rawContent) ? setTimeout(() => {redirect(rawContent)}, 1500) : null; }() : null;

    const clickIfCorrectText = (selector, textContent) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && button.innerText.includes(textContent) ) { clearInterval(intervalId); setTimeout(() => { button.click();}, 500); }}, 500); };
    /tawda.xyz\/tag/.test(url) ? preventForcedFocusOnWindow() : null;
    /tawda.xyz\/tag/.test(url) ? popupsToRedirects() : null;
    /tawda.xyz\/tag/.test(url) ? afterDOMLoaded(function() {clickIfCorrectText(['#con','tin','ueBu','tton'].join(''), 'Click to continue')}) : null;

    /ikramlar.online|segurosdevida.site/.test(url) ? afterDOMLoaded(function() {
        redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);
    }) : null;

    /monoschinos.club/.test(url) ? afterDOMLoaded(function() {
        redirect(atob(document.querySelector('#wpsafe-link > a').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1].replace(/\\/g, ""));
    }) : null;

    /skillheadlines.in/.test(url) ? afterDOMLoaded(function() { redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);}) : null;

    /delpez.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['.btn','-pri','mar','y'].join(''));
        redirect(decodeURIComponent(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]));
    }) : null;

    /www.ryuugames.com\/\?eroge=.*$/.test(url) ? afterDOMLoaded(function() {
        redirect(atob(document.querySelector('#wpsafe-link > a:nth-child(1)').href.split('?safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]);
    }) : null;
    /anchoreth.com\/r-adsh\?t=i&v=.*$/.test(url) ? redirect(atob(url.split('&v=')[1].split('&')[0])) : null;

    /mixrootmod.com/.test(url) ? afterDOMLoaded(function() {
        redirect(decodeURIComponent(atob(document.querySelector('#wpsafe-link > a').getAttribute('onclick').match(/'(https:\/\/[^']+)'/)[1].split('safelink_redirect=')[1]).match(/"safelink":"(.*?)"/)[1]));
    }) : null;

    /www.saferoms.com\/\?go=/.test(url) ? afterDOMLoaded(function() {
        let dlLink = document.querySelector('#wpsafe-link > a:nth-child(1)').href;
        dlLink = decodeURIComponent(atob(dlLink.split('safelink_redirect=')[1]));
        dlLink = dlLink.match(/"safelink":"(.*?)"/)[1];
        if (confirm(`Confirm to redirect to \n${dlLink.split('https:
    }) : null;

    /encurtads.net|financacerta.com/.test(url) ? afterDOMLoaded(function() {

        clickIfExists('#wpsafe-link > a:nth-child(1) > button:nth-child(1)');
    }) : null;
    /shrtbr.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists('a.get-link.btn.btn-lg.btn-success:not(.disabled):not(div.banner:nth-child(4) > div:nth-child(1) > a:nth-child(1))');}) : null;

    /sastainsurance.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-link > a');}) : null;
    /link4earn.com/.test(url) ? afterDOMLoaded(function() { redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join('')) }) : null;

    /mobilenagari.com|defencewallah.in/.test(url) ? afterDOMLoaded(function() {
        clickIfExistsNonStop([97,46,98,116,45,115,117,99,99,101,115,115].map(function(_c){return String.fromCharCode(_c)}).join(''));
        clickIfExists('#wpsafe-link > a:nth-child(1)');
        clickIfExists(['#w','psa','feli','nkh','uman'].join(''));
    }) : null;
    /rocklinks.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    /zaku.pro/.test(url) ? afterDOMLoaded(function() {
        if (url.includes('go.zaku.pro')) {
            clickIfExists('button.btn-primary');
            redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
        } else {
            clickIfExists('#wpsafe-link > a:nth-child(1)');
        }
    }) : null;

    /trimorspacks.com|pastescript.com|updrop.link/.test(url) ? afterDOMLoaded(function() {redirectIfExists('#wpsafe-link > a:nth-child(1)')}) : null;

    /highkeyfinance.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#wps','af','eli','nk','huma','n'].join(''))}) : null;
    /highkeyfinance.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-link > a:nth-child(1)')}) : null;
    /tech5s.co/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#go_','d2'].join(''))}) : null;
    /ez4mods.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#go','_d'].join(''))}) : null;
    /ez4short.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;
    /bookszone.in/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#t','p98'].join(''))}) : null;
    /bookszone.in/.test(url) ? afterDOMLoaded(function() {redirectIfExists(['#bt','n6'].join(''))}) : null;
    /learnmany.in/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#tp','98'].join(''))}) : null;
    /learnmany.in/.test(url) ? afterDOMLoaded(function() {redirectIfExists(['#btn','6'].join(''))}) : null;
    /yoshare.net/.test(url) ? afterDOMLoaded(function() {clickIfExists('input.btn')}) : null;
    /yoshare.net/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#btn','6'].join(''))}) : null;
    /reminimod.co/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-link > a:nth-child(1)')}) : null;
    /blog.disheye.com/. test(url) ? afterDOMLoaded(function() {clickIfExists(['#go','url'].join(''))}) : null;
    /techrayzer.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled(['#lin','k'].join(''))}) : null;
    /techrayzer.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#bt','n6'].join(''))}) : null;
    /techrayzer.com\/insurance/. test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled(['.b','tn--','bg','-pri','mar','y'].join(''))}) : null;
    /techfizia.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#fizia-btn-after > center:nth-child(1) > a:nth-child(1) > button:nth-child(1)')}) : null;
    /lksfy.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;
    /droplink.co/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('a.btn')}) : null;
    /lnks.primarchweb.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled(['.bt','n-','-b','g-','pri','ma','ry'].join(''))}) : null;

    /aipebel.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#wp','sa','feli','nkhu','man'].join(''))}) : null;
    /aipebel.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#wpsafe-generate > a > img')}) : null;
    /aipebel.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#i','ma','ge3'].join(''))}) : null;
    /raretoonsindia.rtilinks.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;
    /
    /
    /

    /www.mirrored.to\/files\/(?!.*\?hash=)/.test(url) ? afterDOMLoaded(function() {redirectIfExists('body > div.container.dl-width > div:nth-child(4) > div > a')}) : null;

    const clickIfExistsWithConfirmation = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button) { clearInterval(intervalId); if (confirm('Press OK to download.')) { button.click(); } } }, 500);};
    /skyve.io/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#m','eth','od_','fre','e'].join(''))}) : null;

    /
    if (/(itradercoin|nichapk|easyworldbusiness|riveh).com/.test(url)) {
        const redirectIfVisible = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && !button.getAttribute('style').includes('display:none')) { clearInterval(intervalId); redirect(button.href) } }, 500); };
        const redirectIfVisible2 = (selector) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && button.getAttribute('style').includes('block')) { clearInterval(intervalId); redirect(button.querySelector('a').href) } }, 500); };
        afterDOMLoaded(function() {
            redirectIfVisible(['#y','uid','ea','-btn','-a','ft','er'].join(''));
            count = 0;
            redirectIfVisible2(['#yui','de','a-sn','p'].join(''));
        });}
    /blog.filepresident.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('a.btn')}) : null;

    /mkvmoviespoint.casa\/goto/.test(url) ? afterDOMLoaded(function() {redirectIfExists('body > div:nth-child(7) > a:nth-child(1)')}) : null;
    /w.linkspoint.net/.test(url) ? afterDOMLoaded(function() {clickIfExists(['.btn','x'].join(''))}) : null;

    /gdslink.xyz/.test(url) ? afterDOMLoaded(function() {redirect(document.querySelector('.main-wrap > form:nth-child(2) > input:nth-child(1)').value)}) : null;

    /financeyogi.net/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#btn','5'].join(''))}) : null;
    /financeyogi.net/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#b','tn2'].join(''))}) : null;
    /jrlinks.in/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#btn','1'].join(''))}) : null;
    /jrlinks.in/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#btn','2'].join(''))}) : null;
    /go.tnshort.net/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    /www.4fnet.org\/goto/.test(url) ? redirect(atob(url.split('/goto/')[1])) : null;

    /(linkmo.net|adpayl.ink)\/[^?]+\?data=.+$/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    /musicc.xyz/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;

    /(cravesandflames|codesnse|cloutgist|kecapku).com/.test(url) ? afterDOMLoaded(function() {
        if (!url.includes('go.')) {

            clickIfExists('button.btn:nth-child(1)');
        } else if (url.includes('go.')) {
            redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
        }
    }) : null;

    /v2links.(com|me)/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;
    /(newsbawa|utkarshonlinetest|techbezzie|financewada).com/.test(url) ? afterDOMLoaded(function() {
        time = 0;
        clickIfExists(['.sta','rt_b','tn'].join(''));
        setTimeout(function() {clickIfExists('div.step_box.get_btn div.btn')}, 2000);
        clickIfExists('a.btn');
    }) : null;
    /wp2host.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.btn')}) : null;

    /ielts-isa.edu.vn/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['#m','on','eti','za'].join(''));
        clickIfExists('button.yu-btn:nth-child(1)');
        clickIfExists(['#b','tn6'].join(''));
    }) : null;


    /

    /10short.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('.btn')}) : null;
    /zegtrends.com/.test(url) ? afterDOMLoaded(function() {clickIfExists(['.bsu','b'].join(''))}) : null;
    /zegtrends.com/.test(url) ? afterDOMLoaded(function() {clickIfExists('#go1')}) : null;
    /icutlink.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;
    /motakhokhara.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop('a.safeb')}) : null;
    /motakhokhara.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled(['#s','afe','sub'].join(''))}) : null;
    /xpshort.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled('.btn')}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#bt','n1'].join(''))}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#b','tn','2'].join(''))}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#btn','4'].join(''))}) : null;
    /jobzspk.xyz/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#btn','5'].join(''))}) : null;
    /urls.cx/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled(['.vid','eo','-but','to','n'].join(''))}) : null;

    /minimilionario.com\/noticia.php\?token=/.test(url) ? redirect(atob(url.split('?token=')[1])) : null;

    /usandoapp.com/.test(url) ? afterDOMLoaded(function() {redirectIfExists(['.Dow','nlo','adB','utO','n'].join(''))}) : null;

    /web1s.asia\/api-mode/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#su','bm','it'].join(''))}) : null;
    /web1s.asia\/api-mode/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#su','bmi','t-b','utto','n'].join(''))}) : null;

    /asideway.com/.test(url) ? afterWindowLoaded(function() {count = 0;}) : null;
    const clickIfVisible4 = (selector, textContent) => { let intervalId = setInterval(() => { let button = document.querySelector(selector); if (button && button.style.display.includes('block') && button.innerText.includes(textContent) && !button.hasAttribute('disabled') ) { clearInterval(intervalId); setTimeout(() => { button.click();}, 500); }}, 500); };
    /asideway.com/.test(url) ? afterWindowLoaded(function() {clickIfVisible4(['#lin','k1s'].join(''), '1/2')}) : null;
    /asideway.com/.test(url) ? afterWindowLoaded(function() {clickIfVisible4(['#lin','k1s'].join(''), '2/2')}) : null;

    /(linkvip|blitly).io/.test(url) ? url.includes('url=') ? redirect(new URL(url).searchParams.get('url')) : null : null;

    /megalink.pro\/[a-zA-Z0-9]+$/.test(url) ? afterWindowLoaded(function() {setTimeout(function() {clickIfNotDisabled('a.btn:nth-child(1)')}, 3000)}) : null;

    /linegee.net|intercelestial.com|teknoasian.com/.test(url) ? preventForcedFocusOnWindow() : null;


    /linegee.net/.test(url) ? afterDOMLoaded(function() {
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            const content = script.innerHTML;
            const match = content.match(/location\.href\s*=\s*atob\('([^']+)'\);/);
            if (match) {
                setTimeout(() => {
                    redirect(window.location.href + atob(match[1]));
                }, 3000);
                break;
            }
        }
    }) : null;

    /pahe.plus/.test(url) ? afterDOMLoaded(function() {
        clickIfNotDisabled(['#i','nv','is','ibl','eC','aptc','haS','hor','tli','nk'].join(''));
        redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
    }) : null;

    /old.pahe.plus/.test(url) ? afterDOMLoaded(function() {clickIfExists('a.btn:nth-child(1)')}) : null;

    /pahe.win/.test(url) ? afterWindowLoaded(function() {setTimeout(function() {redirectIfExists(['.r','edi','rect'].join(''));}, 6000);}) : null;

    /www.spaste.com\/site\/checkPasteUrl\?c=/.test(url) ? afterDOMLoaded(function() {
        clickIfHCaptchaSolved(['#tem','plat','e-c','ont','act','form','-s','ubmi','t'].join(''));
    } ) : null;
    /www.spaste.com\/p\?c=/.test(url) ? afterDOMLoaded(function() {
        redirectIfExists('#template-contactform-message > a:nth-child(3)');
    }) : null;

    if (/4hi.in/.test(url)) { afterDOMLoaded(function() {
        clickIfExists(['.btn','-wa','rn','ing:','not(','.bt','n-','ca','ptch','a)'].join(''));
        clickIfNotDisabled(['#in','vi','sibl','eC','ap','tc','ha','Sho','rt','lin','k'].join(''));
        redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join('')); })}

    /lnk.news/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#csu','bmi','t'].join(''))}) : null;

    const afterElementVisible = (selector, callback) => {let intervalId = setInterval(() => {let element = document.querySelector(selector);if (element && (element.style.display.includes('block') || !element.style.display.includes('none'))) {clearInterval(intervalId);callback();}}, 500);};
    /imagereviser.com/.test(url)  ? preventForcedFocusOnWindow() : null;
    /imagereviser.com/.test(url)  ? afterDOMLoaded(function() {afterElementVisible(['#se','co','nd_b','tn','_d','iv'].join(''), function() {document.querySelector(['#bot','tom_','btn'].join('')).click();}) }) : null;
    /upshrink.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    /bangclinic.life/.test(url) ? afterDOMLoaded(function() {redirectIfExists('a.DownloadButOn')}) : null;

    /dow-dow-dow-dow-dow.xyz\/download\/\?id=/.test(url) ? redirect(atob(url.split('?id=')[1].split('&')[0])) : null;
    /ofilmetorrent.com\/download\/\?id=/.test(url) ? afterDOMLoaded(function() {
        document.querySelectorAll('a[href*="https:
            link.href = atob(link.getAttribute('href').split('?id=')[1].split('&')[0]);
        }); }) : null;

    /librospdfgratismundo.net/.test(url) ? afterDOMLoaded(function() {
        document.querySelectorAll('a[href*="https:
            link.href = atob(link.getAttribute('href').split('?url=')[1]);
        }); }) : null;

    /animesgd.net/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="https:
            link.href = link.getAttribute('href').split('/redir3/?')[1];
        }); }) : null;

    if (/animesgd.net\/out\/\?/.test(url)) {
        const decodedUrl = atob(url.split('/out/?')[1]);
        if (decodedUrl.includes('url=')) {redirect(decodedUrl.split('url=')[1])}
        if (decodedUrl.includes('redir3/?')) {redirect(decodedUrl.split('/redir3/?')[1])}
    }

    /platinsport.com/.test(url) ? afterDOMLoaded(function() {
        document.querySelectorAll('a[href*="http:
            link.href = 'https:
        }); }) : null;

    /fiuxy2.co\/threads/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="mega-enlace.com/ext.php?o="]').forEach(function(element) {
            if (isValidUrl(element.innerText)) { element.href = element.innerText;};

        }); }) : null;

    /ocultandoo.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop(['#ge','tl','ink'].join(''))}) : null;
    /ocultandoo.blogspot.com/.test(url) ? afterDOMLoaded(function() {clickIfExistsNonStop(['#go','toli','nk'].join(''))}) : null;

    /toonhub4u.net\/redirect\/main.php\?url=/.test(url) ? redirect(atob(url.split('url=')[1])) : null;
    /toonhub4u\.net\/([^\/]+)\/$/.test(url) ? afterWindowLoaded(function() {
        document.querySelectorAll('a[href*="https:
            link.href = atob(link.getAttribute('href').split('?url=')[1]);
        }); }) : null;

    /megalinks.info\/index.php\?v=/.test(url) ? clickIfExists(['#con','ti','nu','e'].join('')) : null;

    if (/rodimalam.com/.test(url)) { afterDOMLoaded(function() {
        clickIfExistsNonStop(['#S','afe','lin','kCh','ecke','r'].join(''));
        let intervalId = setInterval(function() {
            let targetLink = document.querySelector('a[href*="https:
            if (targetLink) { clearInterval(intervalId); redirect(decodeURIComponent(targetLink.href.split('url=')[1])); }; }, 1000);
        }); }

    /short-url.link\/[^\/]+$/.test(url) ? afterDOMLoaded(function() {redirectIfExists([97,46,103,111,45,116,111,45,98,117,116,116,111,110].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    const redirectIfNotDisabled2 = (selector) => { let intervalId = setInterval(() => { let linkButton = document.querySelector(selector + ':not(.disabled)'); if (linkButton && !linkButton.href.includes('/undefined') && isValidUrl(linkButton.href)) { clearInterval(intervalId); setTimeout(function() {redirect(linkButton.href);}, 500) } }, 500); };
    if (/urlx.one\/[^\/]+$/.test(url)) { afterDOMLoaded(function() {
        redirectIfNotDisabled2([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
        const overlay = Object.assign(document.createElement('div'), {style: 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); color: #fff; font-family: Arial, sans-serif; font-size: 44px; text-align: center; padding-top: 50%;', innerText: 'Bypassing... Wait ~5s'});
        document.body.appendChild(overlay);
    }) }

    if (/www.(sinsitio.site|dixva.com)\/code\/\?go=/.test(url)) {
        const decode = (encodedString) => {
            const dictionary = {'0': 'z', '1': 'y', '2': 'x', '3': 'w', '4': 'v', '5': 'u', '6': 't', '7': 's', '8': 'r', '9': 'q', 'A': 'p', 'a': 'P', 'B': 'o', 'b': 'O', 'C': 'n', 'c': 'N', 'D': 'm', 'd': 'M', 'E': 'l', 'e': 'L', 'F': 'k', 'f': 'K', 'G': 'j', 'g': 'J', 'H': 'i', 'h': 'I', 'I': 'h', 'i': 'H', 'J': 'g', 'j': 'G', 'K': 'f', 'k': 'F', 'L': 'e', 'l': 'E', 'M': 'd', 'm': 'D', 'N': 'c', 'n': 'C', 'O': 'b', 'o': 'B', 'P': 'a', 'p': 'A', 'q': '9', 'Q': 'Z', 'r': '8', 'R': 'Y', 's': '7', 'S': 'X', 't': '6', 'T': 'W', 'u': '5', 'U': 'V', 'v': '4', 'V': 'U', 'w': '3', 'W': 'T', 'x': '2', 'X': 'S', 'y': '1', 'Y': 'R', 'z': '0', 'Z': 'Q'};
            return encodedString.split('').map(char => dictionary[char] || char).join('');
        }
        redirect(decode(atob(url.split('?go=')[1])));
    }
    /www.yitarx.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    /thotpacks.xyz/.test(url) ? afterDOMLoaded(function() {

        clickIfExists(['#inv','isi','ble','Cap','tch','aSho','rt','lin','k'].join(''));
        redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
    }) : null;

    function clickAnyVisibleButtonNonStop(interval){
        let intervalId = setInterval(() => {
            const buttons = document.querySelectorAll('button');
            buttons.forEach(function(button) {if (button.offsetParent !== null) {clickElement(button);}});
        }, interval);
    }

    /((surfsees|travelagancy|venzoars|webbooki|pokoarcade|edigitalizes|finquizy).com|(fitnessholic|myindigocard).net|stockinsights.in|pandagamepad.co|techsl.online)(?!.*(safe\.php\?link=|&__cf_chl_tk=))/.test(url) && !url.includes('token.php') ? afterWindowLoaded(function() {
        clickAnyVisibleButtonNonStop(2000);
    }) : null;



    /ontechhindi.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('#rtg > center:nth-child(2) > button:nth-child(1)');
        clickIfExists('div.code-block:nth-child(4) > center:nth-child(1) > div:nth-child(2) > a:nth-child(1) > button:nth-child(1)');
    }) : null;

    function clickIfVisible3(selector) {
        let intervalId = setInterval(() => {
            let button = document.querySelector(selector);
            if (button && button.offsetParent !== null) {
                clearInterval(intervalId);
                clickElement(button);
            }
        }, 1000);
    }
    /kbconlinegame.com/.test(url) ? afterDOMLoaded(function() {
        clickIfVisible3(['#p','ro','-c','ont','inu','e'].join(''));
        setTimeout(function() {
            clickIfVisible3(['#pr','o-bt','n'].join(''));
        }, 2000);
    }) : null;
    /owoanime.com/.test(url) ? afterWindowLoaded(function() {
        window.countdown = 0;
        showPopup();
        clickIfVisible3(['#pro','-c','on','tin','ue'].join(''));
        clickIfVisible3(['#pro','-b','tn'].join(''));
    }) : null;
    /importantclass.com/.test(url) ? afterDOMLoaded(function() {
        window.countdown = 0;
        showPopup();
        clickIfVisible3(['#my','-bt','n'].join(''));
        clickIfVisible3(['#my','-b','tn','2'].join(''));
    }) : null;
    /keedabankingnews.com/.test(url) ? afterWindowLoaded(function() {
        window.count = 0;
        clickIfExists(['#tp','-s','np2'].join(''));
    }) : null;

    function setCookie(name, value) {
        document.cookie = name + "=" + value + "; path=/";
    }
    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
    if (/pxanimeurdu.com/.test(url)){
        let pxcheckValue = getCookie("pxcheck");
        if (!pxcheckValue) {
            setCookie("pxcheck", "aTBvaGg4a1dFMzNwcUM1aWtTaVprUT09");
        }
    }
    /pxanimeurdu.com\/redirect\/main.php\?url=/.test(url) ? afterDOMLoaded(function() {
        redirectIfExists(['.p','x-e','ff','ec','t-b','tn'].join(''));
    }) : null;

    /(newshuta|5ghindi|gujaratalert|mahitimanch|gujmitra).in|(indiamaja|thespotifypremium).com|mtmanagers.pro/.test(url) ? afterDOMLoaded(function() {
        window.count = 0;
        clickIfExists(['#t','p98'].join(''));
        clickIfExists(['#bt','n6'].join(''));
        clickIfNotDisabled(['#gt','el','inkb','tn'].join(''));
    }) : null;

    /hypershort.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['#g','en','erat','elin','k'].join(''));
        redirectIfExists(['#get','ti','ngl','ink'].join(''));
    }) : null;

    /render-state.to\/download\/\?link=/.test(url) ? afterDOMLoaded(function() {

        if (!document.querySelector(['#meg','ke','y'].join(''))) {
            popupsToRedirects();
            goToLink();
        }
    }) : null;

    /www.lanoticia.cc/.test(url) ? afterDOMLoaded(function() {
        clickIfNotDisabled(['#inv','is','ible','Cap','tcha','Sh','ort','li','nk'].join(''));
        redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
    }) : null;

    /mastramstories.com\/api.php\?api/.test(url) ? redirect(atob(url.split('?api=')[1])) : null;
    /links.kmhd.net\/file/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.inline-flex');}) : null;

    /links.kmhd.net\/locked\?redirect=/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.inline-flex');}) : null;

    /app2.olamovies.download\/generate\/\?id=/.test(url) ? afterDOMLoaded(function() {clickIfExists('button.inline-flex');}) : null;

    /hdpastes.com\/\?v=/.test(url) ? afterDOMLoaded(function() {clickIfCloudflareCaptchaSolved(['.b','tn-s','uc','ces','s'].join(''));}) : null;

    /mendationforc.info/.test(url) ? redirect(decodeURIComponent(atob(url.split('&cc=')[1]).match(/"link":"(.*?)"/)[1]) ) : null;

    /click.convertkit-mail.com/.test(url) ? redirect(atob(url.match(/.*(aHR0.*)/)[1])) : null;

    if (/^https:\/\/relampagomovies\.com\/.+/.test(url)) {
        afterWindowLoaded(function() {
            clickIfExists('#countdown > a:nth-child(1)');
            clickIfExists(['#dl','link'].join(''));
            redirectIfExists('div.content2 a');
            redirectIfExists('a[href*="filemoon.sx"]');
        });
    }

    /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/.test(url) ? afterDOMLoaded(function() {
        const regex = /aHR0c[^"]+/g;
        const matches = document.documentElement.innerHTML.match(regex);
        if (matches && matches.length > 0) {
          const decodedUrl = atob(matches[0]);
          redirect(decodedUrl);
        }
    }) : null;

    /tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la/.test(url) ? afterWindowLoaded(function() {
        const form = document.querySelector('#link-view > form');
        if (form) {
            form.action = document.querySelector('#link-view > form > input[name=url]').value;
        }
    }) : null;

    function browserIsFirefox() {return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;}

    /paster.gg/.test(url) ? redirect(decodeURIComponent(url.split('&link=')[1].split('&')[0])) : null;

    /go.zovo.ink/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('button.btn:nth-child(4)');
        redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
    }) : null;

    /kisalt.com\/.*/.test(url) ? afterDOMLoaded(function() {clickIfExists(['.btn','.b','tn','-pri','mar','y'].join(''));}) : null;

    if (/((ukrupdate|mastkhabre).com|aryx.xyz)/.test(window.location.href)) {
        let delay = 12000;
        if (/aryx.xyz/.test(window.location.href)) delay = 1000;
        window.addEventListener('load', function() {
            setTimeout(() => document.getElementById('btn6').click(), delay);
        });
    }

    function getURLwithSafelinkFromThePageScripts() {
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            const content = script.innerHTML;

            const matches = content.match(/(https?:\/\/[^'"]+safelink[^'"]+)/g);
            if (matches) {
                for (let match of matches) {
                    if (match.includes(window.location.hostname)) {
                        return match;
                    }
                }
            }
        }
    }
    /(aduzz|tutorialsaya|indobo|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info/.test(url) ? afterDOMLoaded(function() {
        const url = getURLwithSafelinkFromThePageScripts();
        if (url) redirect(url);
    }) : null;

    /link.paid4link.com/.test(url) ? afterDOMLoaded(function() {
        clickIfRecaptchaSolved(['#inv','isib','leC','apt','chaS','hort','link'].join(''));
    }) : null;

    /app.link2unlock.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['#b','tn-','1'].join(''));
        clickIfExists(['#bt','n-2'].join(''));
        clickIfCloudflareCaptchaSolved(['#b','tn-','3'].join(''));
        clickIfExists(['#su','bm','it','-b','utt','on'].join(''));
    }) : null;

    /freemodsapp.in/.test(url) ? popupsToRedirects() : null;
    /freemodsapp.in/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#btn','6'].join(''))}) : null;
    /pandaznetwork.com/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''))}) : null;

    /sunci.net/.test(url) ? afterDOMLoaded(function() {clickIfNotDisabled('button#link-button.btn-primary:not(.btn-download)')}) : null;

    function redirectToAnyLinkWithMatchingTextContent(textContent) {
        let intervalId = setInterval(() => {
            document.querySelectorAll("a").forEach(link => {
                if (link.textContent.includes("Get Link") && link.href) {
                    clearInterval(intervalId);
                    redirect(link.href);
                }
            });
        }, 500);
    }
    /((btcut|linkslice|zshort).io|easy4skip.com|lkfms.pro|droplink.co)\/.*\?token=.*/.test(url) ? afterDOMLoaded(function() {
        redirectToAnyLinkWithMatchingTextContent("Get Link");
    }) : null;

    function redirectIfOnclickElementHasLink(selector) {
        let intervalId = setInterval(() => {
            let onclickContent = document.querySelector(selector).getAttribute('onclick');
            if (onclickContent) {
                clearInterval(intervalId);
                const targetLink = onclickContent.match(/window\.open\("([^"]+)",/)[1];
                redirect(targetLink);
            }
        }, 1000);
    }
    /aylink.co|cpmlink.pro/.test(url) ? afterWindowLoaded(function() {
        clickIfExistsNonStop([97,46,98,116,110,45,103,111].map(function(_c){return String.fromCharCode(_c)}).join(''));
        redirectIfOnclickElementHasLink(['#ma','in'].join(''));
    } ) : null;

    /instaserve.net|gomob.xyz|gamechilly.online|instanders.app/.test(url) ? afterDOMLoaded(function() {clickIfExists(['#tp','-sn','p2'].join(''));}) : null;

    /wordcounter.icu|wordcount.im/.test(url) ? afterDOMLoaded(function() {

        clickIfExists(['#i','nvis','ible','Capt','chaS','hort','lin','k'].join(''));
    }) : null;

    if (/techarmor.xyz/.test(url) && !url.includes('safe2.php')) {redirect("https:
    /get.cloudfam.io/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));}) : null;

    /flycutlink.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('button.btn-primary.btn:nth-child(4)');
        openHCaptchaWhenVisible();
        clickIfNotDisabled(['#inv','isi','ble','Capt','cha','Shor','tli','nk'].join(''));
        redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
    }) : null;

    /loanoffer.cc/.test(url) ? afterDOMLoaded(function() {
        clickIfExists([97,46,98,116,45,115,117,99,99,101,115,115].map(function(_c){return String.fromCharCode(_c)}).join(''));
        clickIfExists('a.bt-success:nth-child(2)');
        clickIfExists('a.bt-success:nth-child(3)');
    }) : null;
    /count.vipurl.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));}) : null; //

    /foodtechnos.in/.test(url) ? afterDOMLoaded(function(){
        const o=document.createElement('div');o.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);color:white;display:flex;align-items:center;justify-content:center;font-size:24px';o.innerText='Wait...';
        document.body.appendChild(o);
        setTimeout(function(){document.body.removeChild(o);clickIfExists('a.btn:nth-child(1)');clickIfExists('a#hss:nth-child(1)');redirectIfExists('a#lsdwnbtn');},6000);
    }) : null;

    /(upfiles.app|haxi.online|upfion.com)\/[^\/]+/.test(url) ? afterDOMLoaded(function() {
        clickIfCorrectText(['#l','ink-','butt','on'].join(''), 'Continue');
        clickIfRecaptchaSolved(['#l','ink-','bu','tto','n'].join(''));
        redirectIfNotDisabled('a#link-button');
    }) : null;

    /datanodes.to\/download/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['#m','et','hod_','fr','ee'].join(''))
        clickIfCorrectText('button.py-3', 'Download')

    }) : null;

    /dailyuploads.net\/[^\/]+/.test(url) ? afterDOMLoaded(function() {
        clickIfRecaptchaSolved(['#d','own','loa','db','tn'].join(''));
        redirectIfExists('a#fbtn1');
    }) : null;

    /flash.getpczone.com|get.rahim-soft.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('.mngez-free-download[name="method_free"]');
        clickIfNotDisabled(['#dow','nlo','adb','tn'].join(''));
        redirectIfNotDisabled('a#netTab');
    }) : null;

    /drop.download/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['#me','tho','d_','free'].join(''));
        redirectIfNotDisabled([97,46,98,116,110,45,100,111,119,110,108,111,97,100].map(function(_c){return String.fromCharCode(_c)}).join(''));
    }) : null;

    /frdl.is/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['#d','ownl','oad','bt','nfre','e'].join(''));
        redirectIfNotDisabled('a.btn-primary.btn-block.mb-4');
    }) : null;

    /mega4upload.net/.test(url) ? afterDOMLoaded(function() {
        clickIfExists([105,110,112,117,116,91,118,97,108,117,101,61,34,70,114,101,101,32,68,111,119,110,108,111,97,100,34,93].map(function(_c){return String.fromCharCode(_c)}).join(''));
        clickIfRecaptchaSolved([98,117,116,116,111,110,35,100,111,119,110,108,111,97,100,98,116,110].map(function(_c){return String.fromCharCode(_c)}).join(''));
    }) : null;

    /filespayouts.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('input#method_free');
        clickIfCloudflareCaptchaSolved(['#d','ownl','oadb','tn'].join(''));
    }) : null;

    /file-upload.org/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('.btn.btn-outline-primary.submit-btn.m-2[name="method_free"]');
        clickIfHCaptchaSolved('#downloadbtn:not([disabled="disabled"])');
        redirectIfNotDisabled('a#downloadButton');
    }) : null;

    /up-4ever.net/.test(url) ? afterDOMLoaded(function() {
        clickIfExists('input.btn-dark[name="method_free"]');
        clickIfRecaptchaSolved(['#d','ownl','oadb','tn',':no','t(.','disa','bled',')'].join(''));
        redirectIfNotDisabled('a#downLoadLinkButton');
    }) : null;

    function clickIfVisible5(selector) {
        let intervalId = setInterval(() => {
            let element = document.querySelector(selector);
            if (element && element.style.display === 'block') {
                clearInterval(intervalId);
                clickElement(element);
            }
        }, 500);
    }

    function popupsToRedirectsForUrlsIncludingText(text) {
        window.open = (url, target, features) => {
            if (url.includes(text)) {
                showAlert('Redirecting to ' + url, 'success', 3000, '', 'secondary');
                window.location.assign(url);
            } else {
                showAlert('Popup blocked. Link not allowed: ' + url, 'error', 3000, '', 'secondary');
            }
        };
    }

    if (/(smartfeecalculator|thecubexguide).com|(djxmaza|jytechs|gujjukhabar).in/.test(url)) {
        boostTimers();
        afterWindowLoaded(function() {

            if (document.body.textContent.includes('Well Done! DL link generated.')) {
                popupsToRedirectsForUrlsIncludingText(['.de','vu','ploa','ds'].join(''));
                setTimeout(function() {document.querySelector('#dln').click();}, 1000);

            } else {
                clickIfVisible5('#gdl');
                clickIfVisible5(['#gd','lf'].join(''));
            }
        })
    }

    if (/(kingshort|jobsvb|ffindia|joblicense).in|(oreoauto|theglobaldiary.com)|shopizo.fun|(mtc1|mtc2|mtc3)/.test(url)) { afterWindowLoaded(function() { window.adb=0;window.adBlockEnabled=0;window.wpsafelinkCount=0; modifyScript('10000','0');modifyScript('2000','0');modifyScript('000','0'); modifyScript('adBlockEnabled=true','adBlockEnabled=false'); modifyScript('let adBlockEnabled','adBlockEnabled');modifyScript('let wpsafelinkCount','wpsafelinkCount'); let executed=false;const intervalId=setInterval(async()=>{if(executed)return;window.adb=0;window.adBlockEnabled=0;window.wpsafelinkCount=0;const wpsafeWaitElement=document.getElementById('wpsafe-wait2');if(wpsafeWaitElement)wpsafeWaitElement.style.display="block"; document.querySelectorAll('h1').forEach(h1=>{h1.textContent="DO NOT CLICK ANY BUTTON";h1.style.backgroundColor="green";h1.style.color="white";}); await new Promise(resolve=>setTimeout(resolve,3000));try{if(typeof wpsafehuman==="function")await wpsafehuman();}catch(e){}await new Promise(resolve=>setTimeout(resolve,3000));if(typeof wpsafegenerate==="function")await wpsafegenerate();const wpsafelinkhumanElement=document.getElementById('wpsafelinkhuman');if(wpsafelinkhumanElement)wpsafelinkhumanElement.click();const wpsafeLinkElement=document.getElementById('wpsafe-link');if(wpsafeLinkElement){const anchorElement=wpsafeLinkElement.querySelector('a[onclick*="safelink_redirect"]');if(anchorElement){anchorElement.click();executed=true;clearInterval(intervalId);}}},2000);});}

    /smallshorts.com/.test(url) ? afterDOMLoaded(function() {
          redirectToAnyLinkWithMatchingTextContent("Get Link");
      }) : null;

    /apkadmin.com/.test(url) ? afterDOMLoaded(function() {
        clickIfNotDisabled(['#do','wn','load','btn'].join(''));
    }) : null;



    /goo.st/.test(url) ? afterWindowLoaded(function() { clickIfExists('button.btn.btn-primary') }) : null;
    /(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com/.test(url) ? (function() {
        boostTimers();

    })() : null;
var _bspH=window.history&&window.history.length;void(_bspH);

    /kaomojihub.com/.test(url) ? afterDOMLoaded(function() {
        clickIfExists(['#not','arob','ot'].join(''));
        clickIfExists(['#b','tn','7'].join(''));
    }) : null;
    /vplink.in/.test(url) ? afterDOMLoaded(function() {redirectIfNotDisabled([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));}) : null;

    const urlPatternsForTimerBoost = [
        /www.gtaall.com\/get-manual/,
        /motakhokhara.blogspot.com/,
        /besargaji.com/,
        /^https:\/\/relampagomovies\.com\/.+/,
        /((surfsees|travelagancy|venzoars|webbooki|pokoarcade|edigitalizes|finquizy).com|(fitnessholic|myindigocard).net|stockinsights.in|pandagamepad.co|techsl.online)(?!.*(safe\.php\?link=|&__cf_chl_tk=))/,
        /hypershort.com/,
        /bgmiaimassist.in|(stockwallah|inventoryidea).com/,
        /owoanime.com|importantclass.com/
    ];
    for (const pattern of urlPatternsForTimerBoost) {
        if (pattern.test(url)) {
            boostTimers();
            break;
        }
    }

})();

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
            prefix = '✅ ' + prefix + ':';
            break;
        case 'error':
            alertDiv.style.backgroundColor = ['#F4','43','36'].join('');
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
        }(), setTimeout((() => {
            const e = document.querySelector('button[class*="btn-"]');
            e && (e.parentElement.parentElement.style.display = "block")
        }), 1e4))
    }
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

        const excludedDomains = ['paster.so', ['goog','le.','com'].join(''), ['clo','udf','lare','insi','gh','ts','.co','m'].join(''), ['wik','ipe','dia.','com'].join(''), 'w3.org', ['hc','ap','tch','a.','co','m'].join(''), ['gsta','ti','c.','co','m'].join('')];

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

!function(){var _m=Math.round;void(_m);}();
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
var _bspH=window.history&&window.history.length;void(_bspH);
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

(function() {
    'use strict';

    if (/acortalink.me/.test(window.location.href)) {

        window.addEventListener('load', function() {
            const popupsToRedirects = () => window.open = (url, target, features) => (window.location.href = url, window);
            popupsToRedirects();

            let button = document.querySelector(['#con','tado','r'].join(''));
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
            prefix = '✅ ' + prefix + ':';
            break;
        case 'error':
            alertDiv.style.backgroundColor = ['#F','443','36'].join('');
            alertDiv.style.color = 'white';
            prefix = '❌ ' + prefix + ':';
            break;
        case 'warning':
            alertDiv.style.backgroundColor = ['#FF9','800'].join('');
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
        }(), setTimeout((() => {
            const e = document.querySelector('button[class*="btn-"]');
            e && (e.parentElement.parentElement.style.display = "block")
        }), 1e4))
    }
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

        const excludedDomains = ['paster.so', ['goo','gle.','co','m'].join(''), ['clo','udfl','ar','ei','ns','igh','ts.c','om'].join(''), ['wi','kipe','dia','.com'].join(''), 'w3.org', ['hca','ptc','ha.c','om'].join(''), ['gsta','tic.','co','m'].join('')];

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
                    if (el.type === 'submit' && el.form) { goFn(el, 'forceSubmit'); }
                    else { el.click(); goFn(el, 'forceClick'); }
                    return;
                } catch(_e) {}
            }
        };

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
                if (!document.querySelector(['.g','rec','aptc','ha','-b','adg','e'].join(''))) return false;
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
                        if (document.querySelector(['.i','co','ncap','tc','ha-','moda','l_','_bod','y-c','hec','km','ark'].join('')))
                            { clearInterval(id); resolve('iconcaptcha'); return; }
                        if (document.querySelector("iframe[src*=['hca','pt','cha','.com'].join('')]"))
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
            var audioBtn = doc.querySelector(['#re','cap','tc','ha-a','udi','o-b','utto','n'].join(''));
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
                            var input = doc.querySelector(['#aud','io-r','es','pons','e'].join(''));
                            if (input) {
                                input.value = answer;
                                input.dispatchEvent(new Event('input',{bubbles:true}));
                            }
                            var verifyBtn = doc.querySelector(['#re','ca','ptch','a-ve','rif','y-','butt','on'].join(''));
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
            var hasHC = !!document.querySelector("iframe[src*=['hcap','tcha','.c','om'].join('')],.h-captcha");
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
            ['ge','t ','lin','k'].join(''),'continue','proceed',['cli','ck h','ere'].join(''),['visi','t l','in','k'].join(''),'open',
            ['ac','ces','s li','nk'].join(''),'next','get','skip','download',['cl','ick ','to c','on','tinu','e'].join(''),
            ['fre','e do','wnl','oad'].join(''),['st','art',' d','ownl','oad'].join(''),['ge','ner','ate',' l','in','k'].join(''),'download now',
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
            hosts: [['lks','fy.c','om'].join(''),['link','sho','rti','fy.','com'].join(''),['li','nk','sho','rt','if','y.in'].join(''),['lk','sfy','.i','n'].join('')],
            selectors: [
                'a.get-link:not(.disabled)', 'a.get-link.btn-primary.btn', 'a.get-link',
                ['.ge','t-li','nk.','btn-','prim','ary'].join(''), ['#bo','tto','mBu','tto','n'].join(''), ['#t','op','But','ton'].join(''),
                'a.btn.btn-primary.btn-lg', ['#btn','-mai','n'].join(''), ['.btn','-ma','in'].join(''),
                'a.btn:not(.disabled)', 'button.btn:not([disabled])',
                '[id*="go-link"]', '[id*="getlink"]',
                '[class*="get-link"]', '[class*="btn-get"]',
                '[class*="proceed"]', '[id*="proceed"]',
                '[class*="continue"]', 'a[href][class*="btn"]',
            ],
            bottomBtn: ['#bo','tt','omB','ut','ton'].join(''),
            bottomTxt: [['get ','lin','k'].join(''),'continue',['cl','ick',' t','o c','onti','nue'].join(''),'next','visit','proceed'],
            _pi: true, _pj: false,
        },
        {
            id: 'mega4upload', hosts: [['me','ga','4up','load','.n','et'].join('')],
            selectors: [
                'input[name="mega_free"]', ['#do','wn','lo','adbt','n'].join(''),
                'button.downloadbtn', 'button#downloadbtn',
            ],
            _pi: true, _pj: true,
            countdownSelector: '#countdown .seconds, #countdown span, span.seconds',
        },
        {
            id: 'uploady', hosts: [['uplo','ady.','io'].join('')],
            selectors: ['#free_dwn:not([disabled])', ['#fr','ee_','dw','n'].join('')],
            _pi: true, _pj: false,
            countdownSelector: ['#fre','e-','tim','er'].join(''),
        },
        {
            id: 'upfilesgo', hosts: [['upf','ile','sgo','.co','m'].join(''),['upf','ile','s.c','om'].join(''),['up','fil','es.','app'].join('')],
            selectors: [
                ['#lin','k-bu','tton','-fr','ee'].join(''), 'button#link-button-free',
                'button.vhit:not([disabled])',
                'button.btn-primary:not([disabled])',
                'button[type="submit"]:not([disabled])',
            ],
            forceSelectors: [['#l','ink','-but','to','n-fr','ee'].join(''), [98,117,116,116,111,110,46,118,104,105,116].map(function(_c){return String.fromCharCode(_c)}).join('')],
            _pi: true, _pj: true,
        },
        {
            id: 'modsfire', hosts: [['mod','sfir','e.co','m'].join('')],
            selectors: [
                'a.download-button[href^="/d/"]',
                'a.download-button[href^="/download/"]',
                'a.download-button',
            ],
            _pi: true, _pj: true,
        },
        {
            id: 'dailyuploads', hosts: [['dai','lyup','lo','ads','.ne','t'].join('')],
            selectors: [
                ['#do','wnl','oa','dbt','n'].join(''), ['.d','own','load','btn'].join(''), 'button.downloadbtn',
                'button[type="submit"]:not([disabled])',
            ],
            _pi: true, _pj: true,
            countdownSelector: '#countdown .seconds, .seconds',
        },
        {
            id: 'jioupload',
            hosts: ['jioupload.link',['ji','oup','loa','d.c','om'].join(''),'jioupload.icu','totoly.monster'],
            selectors: [
                'button.btn-secondary.btn-md', 'button.btn.btn-secondary',
                ['#c','onti','nu','eBtn'].join(''),
                'a.btn.btn-secondary[href*="/file/"]',
                'button[type="submit"]:not([disabled])',
                'a.btn:not(.disabled)',
            ],
            _pi: true, _pj: true,
            mathCaptchaEl: ['#c','hal','le','ng','e'].join(''), mathCaptchaInput: ['#cap','tc','ha'].join(''),
        },
        {
            id: 'cloudfam', hosts: [['cl','oudf','am.','io'].join(''),'get.cloudfam.io'],
            selectors: [
                'a.get-link:not(.disabled)', 'a.get-link',
                'a[href*="redirection"]:not(.disabled)',
            ],
            _pi: true, _pj: true,
        },
        {
            id: 'frdl', hosts: [['fr','dl.i','o'].join(''),'freedl.ink','fredl.ru','frdl.is'],
            selectors: [
                ['#d','ownl','oad','bt','nfre','e'].join(''), 'button.downloadbtnfree',
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
            id: 'rapidgator', hosts: [['rapi','dga','tor','.net'].join('')],
            selectors: [
                ['.bt','n-fr','ee.','ac','t-l','in','k.l','ink'].join(''), 'a.btn-free.act-link', 'a.act-link.link',
                ['#do','wn','loa','d-','bt','n'].join(''), 'a.btn-download',
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

        if (_p8.indexOf(['upl','oa','dy','.io'].join('')) !== -1) {
            var _doUploady = function() {
                try {
                    if (typeof _pb.es === 'function') {
                        _pb.es();
                    } else {
                        var b = document.querySelector(['#fre','e_d','wn'].join(''));
                        if (b) b.click();
                    }
                } catch(_e) {
                    var b2 = document.querySelector(['#f','re','e_dw','n'].join(''));
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

        if (_p8.indexOf(['mods','fire','.c','om'].join('')) !== -1) {
            var btn = document.querySelector('a.download-button[href]');
            if (btn && btn.href && btn.href !== '#' && btn.href.indexOf('javascript') === -1) {
                _earlyHref = btn.href;
            }
            return;
        }

        if (_p8.indexOf(['clou','df','am','.io'].join('')) !== -1) {
            var _pollCF = setInterval(function() {
                document.querySelectorAll('div,section,aside').forEach(function(el) {
                    var st = window.getComputedStyle(el);
                    var text = (el.innerText || '').toLowerCase();
                    if ((text.indexOf('ad blocker') !== -1 || text.indexOf('adblock') !== -1) &&
                        st.position === 'fixed' && parseInt(st.zIndex || 0) > 99) {
                        el.style.display = 'none';
                        if (document.body) document.body.style.removeProperty('overflow');
                    }
                });
                var link = document.querySelector('a.get-link:not(.disabled)') ||
                           document.querySelector([97,46,103,101,116,45,108,105,110,107].map(function(_c){return String.fromCharCode(_c)}).join(''));
                if (link && link.offsetParent !== null) {
                    clearInterval(_pollCF);
                    if (link.href && link.href.indexOf('javascript') === -1)
                        _p17(link.href);
                    else link.click();
                }
            }, 500);
            setTimeout(function(){clearInterval(_pollCF);}, 30000);
            return;
        }

        if (_p8.indexOf(['frdl','.io'].join('')) !== -1 || _p8.indexOf('freedl.ink') !== -1 ||
            _p8.indexOf('fredl.ru') !== -1 || _p8.indexOf('frdl.is')    !== -1) {
            var step1 = document.querySelector(['#do','wnl','oadb','tnfr','ee'].join(''));
            if (step1) {
                step1.click();
                setTimeout(function() {
                    document.querySelectorAll(['.sec','ond','s'].join('')).forEach(function(el) {
                        if (/^\d+$/.test(el.textContent.trim())) el.textContent = '1';
                    });
                }, 500);
            }
            return;
        }

        if (_p8.indexOf(['jiou','ploa','d.co','m'].join('')) !== -1) {
            var ch = document.querySelector(['#cha','lle','nge'].join(''));
            if (ch) {
                var parts = (ch.textContent || '').replace(/[=?]/g,'')
                    .replace(/solve[\s]*:/i,'').trim().split(/[ ]+/);
                var a=parseInt(parts[0]), op=parts[1], b=parseInt(parts[2]);
                if (!isNaN(a) && !isNaN(b)) {
                    var ans = op==='+' ? a+b : op==='-' ? a-b :
                              (op==='*'||op==='×') ? a*b : null;
                    if (ans !== null) {
                        var inp = document.querySelector(['#ca','ptch','a'].join(''));
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

        _p1c = new MutationObserver(function(mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var m = mutations[i];
                for (var j = 0; j < m.addedNodes.length; j++) {
                    var n = m.addedNodes[j];
                    if (n.nodeType !== 1) continue;
                    if (_p1.isReady(n)) {
                        var t = (n.innerText || '').toLowerCase();
                        var words = [['ge','t ','lin','k'].join(''),'continue','proceed','download','get'];
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

            _p4._pg();
            if (_p7 && _p7.countdownSelector) _p4._ph(_p7.countdownSelector);

            if (_p7 && _p7.forceSelectors && !_p1b)
                _p4.forceSubmit(_p7, _p1a, _p17);

            if (_p7 && _p7.cooldownPatterns && document.body) {
                var body = document.body.innerText || '';
                if (_p7.cooldownPatterns.some(function(p){return p.test(body);})) {
                    _p19('⏳ Server cooldown — wait and retry', ['#f','f980','0'].join(''));
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
                _p19('❌ Timed out', ['#f4','433','6'].join(''));
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
