(()=>{"use strict";(()=>{function e(e,t){var r=document.querySelectorAll(e);r.length&&r.forEach((function(e){t(e)}))}var t=document.querySelector(".page-header__toggler"),r=document.querySelector(".main-nav"),n=r.querySelectorAll(".main-nav__link");function c(){var e="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!e),t.classList.toggle("page-header__toggler--opened"),r.classList.toggle("main-nav--hide"),document.body.classList.toggle("scroll-lock")}t.addEventListener("click",c),n.forEach((function(e){e.addEventListener("click",(function(){c();var t=e.getAttribute("href");"#"===t[0]&&document.querySelector(t).scrollIntoView()}))})),e(".slider",(function(e){var t=e.querySelector(".slider__wrapper"),r=e.querySelectorAll(".slider__slide"),n=0,c=function(){var e=[],n=t.getBoundingClientRect().x,c=t.scrollWidth-t.offsetWidth;return r.forEach((function(t){var r=t.getBoundingClientRect().x-n;r<c&&e.push(r)})),e.push(c),e}(),l=e.querySelectorAll(".slider__tab"),i=Boolean(l.length),o=e.querySelectorAll(".slider__button");function a(e){t.scrollLeft=c[e],s(e)}function s(e){i&&(l[n].removeAttribute("aria-selected"),l[n].classList.remove("slider__tab--active"),l[n].blur()),n=e,i&&(l[n].classList.add("slider__tab--active"),l[n].setAttribute("aria-selected","true"),l[n].focus())}Boolean(o.length)&&o.forEach((function(e){e.addEventListener("click",(function(t){switch(t.preventDefault(),e.dataset.direction){case"prev":a(0===n?c.length-1:n-1);break;case"next":n===c.length-1?a(0):a(n+1)}}))})),a(0),i&&l.forEach((function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),a(t)}))})),t.addEventListener("scroll",(function(){if(c.includes(t.scrollLeft)){var e=c.indexOf(t.scrollLeft);e!==n&&s(e)}}))})),e(".tablist",(function(e){var t=e.querySelectorAll(".tablist__tab"),r=0;t.forEach((function(e,n){e.addEventListener("click",(function(c){c.preventDefault();var l=document.querySelector(t[r].getAttribute("href"));t[r].removeAttribute("aria-selected"),t[r].classList.remove("tablist__tab--active"),l.hidden=!0,document.querySelector(e.getAttribute("href")).hidden=!1,e.classList.add("tablist__tab--active"),e.setAttribute("aria-selected","true"),r=n}))}))})),document.addEventListener("scroll",(function(){var e=window.scrollY/10,t=document.querySelector("#classes-row-first"),r=document.querySelector("#classes-row-second");t.style.left="".concat(e-700,"px"),r.style.left="".concat(-e-700,"px")}))})()})();