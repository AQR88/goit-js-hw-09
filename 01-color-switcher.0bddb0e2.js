const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),timer=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(timer)}));
//# sourceMappingURL=01-color-switcher.0bddb0e2.js.map
