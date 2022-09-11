// ==UserScript==
// @name         WA: Expand Complex Mapping Plots
// @version      0.1.0
// @namespace    https://github.com/oasislandscape/
// @license	     GNU3
// @author       Drew <drewday@gmail.com>
// @description  Always request the larger version of any complex map. (this will cause errors if you download it subsequently)
// @run-at	     document-idle
// @include      /^https?://wolframalpha\.com//
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @updateURL    https://raw.githubusercontent.com/d-day/wa-explorer/main/wa-expand-complex-maps.user.js
// @downloadURL  https://raw.githubusercontent.com/d-day/wa-explorer/main/wa-expand-complex-maps.user.js
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */

function doSomething(jNode) {
    var button = jNode.find('i.job-section-toggle');
    button.click();
}
waitForKeyElements("div.toggle-section.section-custom-inputs:not([aria-expanded])", doSomething);
