// ==UserScript==
// @name         BSTLAR Bypass
// @match        *://bstlar.com/*
// @run-at       document-start
// ==/UserScript==

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
