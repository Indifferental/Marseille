// ==UserScript==
// @name         Marseille
// @namespace    http://tampermonkey.net/
// @version      updated
// @description  Tanki Online supplies clicker
// @author       Indifferental
// @match        https://*.tankionline.com/*
// @icon         https://raw.githubusercontent.com/Indifferental/Marseille/refs/heads/main/assets/logo.webp
// @grant        GM_xmlhttpRequest
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/Indifferental/Marseille/refs/heads/main/scripts/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
