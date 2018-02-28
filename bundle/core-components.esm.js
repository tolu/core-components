import React from"react";var version="1.0.0";function registerElements(t,e){return"string"==typeof e?registerElements(t,document.querySelectorAll(e)):e.length?[].map.call(e,function(e){return(e[t]=1)&&e}):e.nodeType?(e[t]=1)&&[e]:[]}function getUUID(t,e){var n="core-components-uuid";return n+"-"+(window[n]=(window[n]||0)+1)}function ariaConnect(t,e,n){return void 0===e&&(e=t.nextElementSibling),void 0===n&&(n="controls"),t.setAttribute("aria-"+n,e.id=e.id||getUUID()),e.setAttribute("aria-labelledby",t.id=t.id||getUUID()),e}function registerEvent(t,e,n){if("undefined"!=typeof window){var i=window[t]=window[t]||{};!i[e]&&(i[e]=1)&&document.addEventListener(e,function(e){for(var i=e.target;i;i=i.parentElement)i[t]&&n(i,e)},!0)}}function assign(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return e.filter(Boolean).forEach(function(e){Object.keys(e).forEach(function(n){return t[n]=e[n]})}),t}var CustomEvent=function(){if("undefined"!=typeof window)return"function"==typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t);function t(t,e){void 0===e&&(e={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,Boolean(e.bubbles),Boolean(e.cancelable),e.detail),n}}();function dispatchEvent$1(t,e,n){return void 0===n&&(n={}),t.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,cancelable:!0}))}if("undefined"!=typeof window&&"function"!=typeof window.CustomEvent){function CustomEvent$1(t,e){void 0===e&&(e={bubbles:!1,cancelable:!1,detail:void 0});var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}CustomEvent$1.prototype=window.Event.prototype,window.CustomEvent=CustomEvent$1}var KEY="core-datepicker";function datepicker(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return new(Function.prototype.bind.apply(Datepicker,[null].concat(t)))}var Datepicker=function(t){this.elements=registerElements(t,KEY)};function Datepicker$1(){}Datepicker.prototype.open=function(t){void 0===t&&(t=!0)},Datepicker.prototype.close=function(t){void 0===t&&(t=!1)};var KEY$1="core-toggle";function ariaExpanded(t,e,n){t.setAttribute("aria-expanded",n),e[n?"removeAttribute":"setAttribute"]("hidden","")}function toggle(t,e){return void 0===e&&(e=null),registerElements(KEY$1,t).map(function(t){var n=ariaConnect(t),i="true"===t.getAttribute("aria-expanded"),o=null===e?i:Boolean(e);return ariaExpanded(t,n,i),ariaExpanded(t,n,i!==o&&dispatchEvent$1(t,"toggle")?o:i),t})}registerEvent(KEY$1,"click",function(t){toggle(t,"true"!==t.getAttribute("aria-expanded"))});var Toggle=function(t){function e(e){t.call(this,e),this.getElement=this.getElement.bind(this),this.toggle=this.toggle.bind(this),this.state={open:this.props.open}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(t){this.element=t},e.prototype.toggle=function(){var t=this;this.setState(function(e){var n={open:!e.open};return dispatchEvent(t.element,"toggle",n)?n:e})},e.prototype.render=function(){return console.log("hei",this.props),React.createElement("button",assign({"aria-expanded":this.state.open,onClick:this.toggle,ref:toggle},this.props))},e}(React.PureComponent),SPEAKER="undefined"!=typeof document&&document.createElement("span");function dropdown(t){return toggle(t).map(function(t){return t.setAttribute("aria-haspopup",!0),t})}SPEAKER&&(SPEAKER.setAttribute("aria-live","assertive"),document.documentElement.appendChild(SPEAKER));var ARIA_LIVE_EL,Toggle$2=function(t){function e(e){t.call(this,e),this.getElement=this.getElement.bind(this),this.toggle=this.toggle.bind(this),this.state={open:this.props.open}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(t){this.element=t},e.prototype.toggle=function(){},e.prototype.render=function(){return React.createElement("button")},e}(React.PureComponent),KEY$2="core-input";function input(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return new(Function.prototype.bind.apply(Input,[null].concat(t)))}var Input=function(t,e){void 0===e&&(e={}),this.elements=registerElements(KEY$2,t),this.elements.forEach(function(t){var n=t.nextElementSibling||t.insertAdjacentElement("afterend",document.createElement("ul")),i=e.mode||t.getAttribute("aria-autocomplete")||"list",o=t.getAttribute("aria-owns")||getUUID(),r=t.getAttribute("id")||getUUID();t.setAttribute("role","combobox"),t.setAttribute("autocomplete",!1),t.setAttribute("aria-haspopup",!0),t.setAttribute("aria-autocomplete",i),t.setAttribute("aria-owns",o),t.setAttribute("id",r),n.setAttribute("id",o),n.setAttribute("aria-labelledby",r),n.setAttribute("role","listbox"),n.setAttribute("hidden",""),hide(t)})};function evaluate(t){t.value.trim().toLowerCase();var e=t.nextElementSibling;ARIA_LIVE_EL.setAttribute("aria-hidden",!1),ARIA_LIVE_EL.textContent=hits.length+" treff",t.setAttribute("aria-expanded",!0),e.removeAttribute("hidden"),e.style.width=t.offsetWidth+"px",e.innerHTML=hits.map(function(t,e){return'<li role="option" aria-selected="'+(0===e)+'">'+t.value+"</li>"}).join("")}function show(t){var e=t.nextElementSibling,n=ARIA_LIVE_EL;t.setAttribute("aria-expanded",!0),n.setAttribute("aria-hidden",!1),e.removeAttribute("hidden"),e.style.width=t.offsetWidth+"px"}function hide(t){var e=t.nextElementSibling,n=ARIA_LIVE_EL;t.setAttribute("aria-expanded",!1),n.setAttribute("aria-hidden",!0),e.setAttribute("hidden","")}function onKey(t,e){if(27===e.keyCode&&hide(t),38===e.keyCode||40===e.keyCode){e.preventDefault();var n=40===e.keyCode,i=t.nextElementSibling,o=t.getAttribute("aria-owns"),r=t.getAttribute("aria-autocomplete"),a=document.getElementById(t.getAttribute("aria-activedescendant")),u=a&&(n?a.nextElementSibling:a.previousElementSibling)||(n?i.firstElementChild:i.lastElementChild);if([].forEach.call(i.children,function(t,e){t.setAttribute("role","option"),t.setAttribute("id",o+"-"+e),t.setAttribute("aria-selected",t===u)}),!u)return;t.setAttribute("aria-activedescendant",u.id),"list"===r?ARIA_LIVE_EL.textContent=u.textContent||"Tomt tekstfelt":t.value=u.textContent}}function Input$1(){return React.createElement("div",null,"Testing input")}Input.prototype.show=function(){this.elements.forEach(show)},Input.prototype.hide=function(){this.elements.forEach(hide)},Input.prototype.value=function(){},"undefined"!=typeof document&&((ARIA_LIVE_EL=document.createElement("span")).setAttribute("aria-hidden",!0),ARIA_LIVE_EL.setAttribute("aria-live","assertive"),document.documentElement.appendChild(ARIA_LIVE_EL)),registerEvent(KEY$2,"keydown",onKey),registerEvent(KEY$2,"input",evaluate),registerEvent(KEY$2,"focus",show),registerEvent(KEY$2,"blur",hide);export{version,datepicker,Datepicker$1 as Datepicker,toggle,Toggle,dropdown,Toggle$2 as Dropdown,input,Input$1 as Input};