import{i as c,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const u={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list")};function d(s){const t=s.hits.map(r=>`<li class="images-list-item">
  <a class="img-link" href=${r.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${r.webformatURL} alt=${r.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${r.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${r.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${r.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${r.downloads}</p>
      </li>
    </ul>
   </li>`).join("");u.imageList.innerHTML=t}function p(s){const t="https://pixabay.com",r="/api/",n=new URLSearchParams({key:"44477511-7934322deb574a4a64d25451d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${r}?${n}`;return console.log(e),fetch(e,{options:{headers:{"Content-Type":"application/json"}}}).then(i=>{if(i.ok)return i.json();throw new Error(i.status)})}const o={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader")};o.loader.style.display="none";let l;o.imageSearchForm.addEventListener("submit",s=>{s.preventDefault(),l=s.target.elements.userData.value,console.log(l),l.trim()===""&&(o.imageList.innerHTML="",c.error({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"bottomRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"})),o.loader.style.display="block",p(l).then(t=>{if(t.hits.length===0)return o.imageList.innerHTML="",c.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"});d(t),new m(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).then(()=>o.loader.style.display="none").catch(t=>{console.log(t),o.loader.style.display="none"}),s.target.reset()});
//# sourceMappingURL=index.js.map
