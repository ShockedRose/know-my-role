/*!
* reveal.js 4.4.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/
Array.from(document.querySelectorAll(".section__button")).forEach((t=>{t.addEventListener("click",(t=>{!function(t){const e=Array.from(document.querySelectorAll(`.section__textbox--${t}`));Array.from(document.querySelectorAll(".section__textbox:not(.section__textbox--inactive)")).forEach((t=>{t.classList.toggle("section__textbox--inactive")})),e.forEach((t=>{t.classList.toggle("section__textbox--inactive")}))}(t.target.classList[2].match(/--(\w+)/)[1])}))}));
