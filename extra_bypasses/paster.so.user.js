// ==UserScript==
// @name         Paster.so URL Extractor
// @description  Extracts URLs from paste.so and displays them in an overlay.
// @match        https://paster.so/*
// ==/UserScript==

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
