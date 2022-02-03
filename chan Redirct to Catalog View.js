// ==UserScript==
// @name         4chan Redirect to Catalog View
// @version      1.0
// @match        *boards.4chan.org/*/
// @match        *boards.4channel.org/*/
// @run-at       document-start

// ==/UserScript==

window.location.replace(window.location.href + "catalog");
