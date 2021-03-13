/*!
  * focustype v0.1.0 (https://ryanberliner.com/focustype/)
  * Copyright 2019 Ryan Berliner
  * Licensed under MIT (https://github.com/RyanBerliner/focustype/blob/master/LICENSE)
  */
!function(e,t,n){var o,u,i,s,r,c,d,a,v,f,m;e!==n&&t!==n&&(o="data-focustype",r=!(u="focustype-activated"),c=s=i=null,d=function(e){i=e.target,null!==s&&s.removeAttribute(o),0===e.button&&0<=i.tabIndex&&i.setAttribute(o,"mouse")},a=function(e){s=i,i=null},v=function(e){var t="unknown";i===e.target||e.target.contains(i)?t="mouse":r&&(t="key"),e.target.setAttribute(o,t),(i=null)!==s&&s.removeAttribute(o)},f=function(e){e.target.removeAttribute(o),s=null},m=function(e){null!=c&&clearTimeout(c),r=!0,c=setTimeout(function(){r=!1},10)},(n=function(){t.body.classList.add(u),t.addEventListener("mousedown",d),t.addEventListener("mouseup",a),t.addEventListener("focusin",v),t.addEventListener("focusout",f),t.addEventListener("keydown",m)})(),e.FocusType={on:n,isOn:function(){return t.body.classList.contains(u)},off:function(){t.body.classList.remove(u),t.removeEventListener("mousedown",d),t.removeEventListener("mouseup",a),t.removeEventListener("focusin",v),t.removeEventListener("focusout",f),t.removeEventListener("keydown",m)}})}(window,document,void 0);