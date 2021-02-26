(()=>{"use strict";const t=[{title:"pic1",src:"./dist/images/1.jpg",src2:"./dist/images/2.jpg",src3:"./dist/images/3.jpg",src4:"./dist/images/4.jpg",price:"999",featured:!1,id:1},{title:"pic2",src:"./dist/images/2.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!0,id:2},{title:"pic3",src:"./dist/images/3.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!0,id:3},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!0,id:4},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:5},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:6},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:7},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:8},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:9},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:10},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:11},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:12},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:13},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:14}];function e(t){const e=document.querySelector(t);if(e)return e;throw new Error(`Please check ${t} your selection`)}const c=t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format((t/100).toFixed(2)),i=t=>{let e=localStorage.getItem(t);return e=e?JSON.parse(localStorage.getItem(t)):[],e},s=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},r=e(".cart-items"),a=function({id:t,title:s,price:a,src:n,amount:o}){const d=document.createElement("article");d.classList.add("cart-item"),d.setAttribute("data-id",t),d.innerHTML=`\n  <div class="left-cart-item">\n  <h4 class="cart-item-name">${s}</h4>\n    <img src="${n}"\n              class="cart-item-img"\n              alt="${s}"\n            />  \n            <p class="cart-item-price">${c(a)}</p>\n            <button class="cart-item-remove-btn" data-id="${t}">remove</button>\n            </div>\n            <div>\n              \n            </div>\n          \n            <div>\n              <button class="cart-item-increase-btn" data-id="${t}">\n                <i data-id="${t}" class="fas fa-chevron-up"></i>\n              </button>\n              <p class="cart-item-amount" data-id="${t}">${o}</p>\n              <button class="cart-item-decrease-btn" data-id="${t}">\n                <i data-id="${t}" class="fas fa-chevron-down"></i>\n              </button>\n            </div>\n  `,r.appendChild(d),function(){const t=e(".cart-total");let s=i("cart").reduce(((t,e)=>t+e.price*e.amount),0);t.textContent=`Total : ${c(s)} `}()},n=e(".cart-overlay"),o=e(".cart-close"),d=e(".cartButton"),l=e(".hamburgerButton"),m=e(".sidebar-container");l.addEventListener("click",(function(){m.classList.toggle("show")})),d.addEventListener("click",(()=>{console.log("test"),n.classList.add("show")})),o.addEventListener("click",(()=>{n.classList.remove("show")}));e(".darkModeBtn").addEventListener("click",(function(){const t=e(".hero-container");console.log(t),t.classList.toggle("dark")})),e(".cart-item-count");const u=e(".cart-items");function g(){const t=e(".cart-total");let s=i("cart").reduce(((t,e)=>t+e.price*e.amount),0);t.textContent=`Total : ${c(s)} `}function p(){let t=i("cart");const c=e(".cart-item-count"),s=t.reduce(((t,e)=>t+e.amount),0);c.textContent=s}e(".cart-total"),u.addEventListener("click",(function(t){const e=t.target.dataset.id;if(t.target.classList.contains("cart-item-remove-btn")){let t=document.querySelectorAll(".cart-item");t=[...t],t.forEach((t=>{if(t.dataset.id==e){let c=i("cart");for(let t=0;t<c.length;t++)c[t].id==e&&(c.splice(t,1),s("cart",c));t.remove()}}))}if(t.target.classList.contains("cart-item-increase-btn")||t.target.classList.contains("fa-chevron-up")){let t=document.querySelectorAll(".cart-item-amount");t=[...t],t.forEach((t=>{let c=i("cart");if(t.dataset.id==e){for(let i=0;i<c.length;i++)c[i].id==e&&(c[i].amount=c[i].amount+1,t.textContent=c[i].amount,console.log("cart+++",c));s("cart",c)}}))}if(t.target.classList.contains("cart-item-decrease-btn")||t.target.classList.contains("fa-chevron-down")){let t=document.querySelectorAll(".cart-item-amount");t=[...t],t.forEach((t=>{let c=i("cart");if(t.dataset.id==e){for(let i=0;i<c.length;i++)c[i].id==e&&(console.log("cartIII",c[i]),console.log("???",c[i].amount),console.log("cart+++",c),c[i].amount-1==0?(console.log("cart",c),console.log("i",i),c.splice(i,1),console.log("after",c),s("cart",c),t.parentElement.parentElement.remove()):(c[i].amount=c[i].amount-1,t.textContent=c[i].amount));s("cart",c)}}))}g(),p()}));const f=function(t,r){t.innerHTML=r.map((t=>`<article class="product">\n        <div class="product-container">\n          \n      <a href="singleProduct.html?${t.id} class="product-icon" >\n      <img src="${t.src}" class="product-img img" data-id="${t.id}" alt="${t.title}" />    \n    </a>\n    \n          <div class="product-icons">           \n            <button id="tes" class="product-cart-btn product-icon" data-id="${t.id}">\n              Add to Cart\n            </button>\n          </div>\n        </div>\n        <footer>\n          <p class="product-name">${t.title}</p>\n          <h4 class="product-price">${c(t.price)}</h4>\n        </footer>\n      </article> `)).join(""),document.querySelectorAll("#tes").forEach((t=>{t.addEventListener("click",(function(){console.log("cartElement",t),(t=>{e(".cart-overlay").classList.add("show");let c=i("cart"),r=i("store"),n=c.find((e=>e.id==t));if(console.log("cart",c,"item",n),!n){let e=r.find((e=>e.id==t));console.log("first",e),e={...e,amount:1},c.push(e),console.log("pp",e,"newCart",c),a(e),s("cart",c)}g(),p()})(t.dataset.id)}))}));const n=document.querySelectorAll(".product-img");n.forEach((t=>{t.addEventListener("mouseover",(function(){let e=i("store").find((e=>e.id==parseInt(t.dataset.id)));t.src=e.src2}))})),n.forEach((t=>{t.addEventListener("mouseout",(function(){let e=i("store").find((e=>e.id==parseInt(t.dataset.id)));t.src=e.src}))}))};let j=i("store");i("cart"),i("store"),function(){j=t.map((t=>{const{id:e,featured:c,name:i,price:s,src:r,title:a,src2:n,src3:o,src4:d}=t;return{id:e,featured:c,name:i,price:s,src:r,title:a,src2:n,src3:o,src4:d}})),s("store",j);let c=i("cart");const r=i("store").filter((t=>!0===t.featured)),n=e(".featured-center");f(n,r),c.forEach((t=>{a(t)})),s("cart",c)}()})();