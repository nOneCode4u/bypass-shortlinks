// ==UserScript==
// @name        Indian Shortlinks + File Hosters Bypass
// @description Bypasses softurl.in, Indian link shorteners, and file hosting sites.
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
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       unsafeWindow
// @run-at      document-start
// ==/UserScript==

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
                'a.get-link:not(.disabled)', 'a.get-link',
                'a[href*="redirection"]:not(.disabled)',
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

        // cloudfam.io: poll for wall dismissal then click get-link
        if (_HOST.indexOf('cloudfam.io') !== -1) {
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
                           document.querySelector('a.get-link');
                if (link && link.offsetParent !== null) {
                    clearInterval(_pollCF);
                    if (link.href && link.href.indexOf('javascript') === -1)
                        _proceed(link.href);
                    else link.click();
                }
            }, 500);
            setTimeout(function(){clearInterval(_pollCF);}, 30000);
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
