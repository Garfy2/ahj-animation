!function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);class i{constructor(){this.units=[]}init(){this.renderContainer()}renderContainer(){document.body.append(function(){const e=document.createElement("div");return e.classList.add("wrapper"),e.innerHTML='\n  <div class="container">\n    <div class="container__header">\n      <a href="#collapsible" class="btn btn-toggler" id="toggler">Collapse</a>\n    </div>\n    <div class="collapsible-container" id="collapsible-container">\n      <div class="collapsible" id="collapsible">\n        <span class="collapsible__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>\n      </div>\n    </div>\n    <div class="sub-action"><span class="sub-action__btn">Copy</span></div>\n  </div>\n  ',e}()),this.collapsible=document.querySelector(".collapsible"),document.querySelector(".btn").addEventListener("click",e=>{e.preventDefault(),this.toggleElement(this.collapsible)},!1),document.addEventListener("click",e=>{if(e.preventDefault(),e.target!==document.querySelector(".btn"))try{this.closeElement()}catch(e){}},!1)}toggleElement(e){e.style.height&&"0px"!==e.style.height?e.style.height="0px":e.style.height=Array.prototype.reduce.call(e.childNodes,(e,t)=>e+(t.offsetHeight||0),0)+"px"}closeElement(){this.collapsible.style.height="0px"}}(new i).init()}]);
//# sourceMappingURL=app.js.map