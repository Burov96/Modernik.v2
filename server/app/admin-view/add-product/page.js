(()=>{var e={};e.id=633,e.ids=[633],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},75831:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=r(50482),s=r(69108),n=r(62563),i=r.n(n),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["admin-view",{children:["add-product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,42854)),"D:\\Programming\\E-commerce App w NextJS\\ecommerce - Copy\\src\\app\\admin-view\\add-product\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,89374)),"D:\\Programming\\E-commerce App w NextJS\\ecommerce - Copy\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Programming\\E-commerce App w NextJS\\ecommerce - Copy\\src\\app\\admin-view\\add-product\\page.js"],p="/admin-view/add-product/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin-view/add-product/page",pathname:"/admin-view/add-product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},79394:(e,t,r)=>{Promise.resolve().then(r.bind(r,99189))},99189:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var a=r(95344),s=r(54433),n=r(34729);function i({data:e,selected:t=[],onClick:r}){return e&&e.length?a.jsx("div",{className:"mt-3 flex flex-wrap items-center gap-1",children:e.map(e=>a.jsx("label",{onClick:()=>r(e),className:`cursor-pointer ${t&&t.length&&-1!==t.map(e=>e.id).indexOf(e.id)?"bg-black":""}`,children:a.jsx("span",{className:`rounded-lg border border-black px-6 py-2 font-bold ${t&&t.length&&-1!==t.map(e=>e.id).indexOf(e.id)?"text-white":""}`,children:e.label})},e.id))}):null}var o=r(97027),l=r(79510),c=r(46859),d=r(49926),p=r(78379),u=r(76041),m=r(69149),g=r(22254),x=r(3729),h=r(1208);let f=(0,u.ZF)(p.qe),b=(0,m.cF)(f,p.mO),y=e=>{let t=Date.now(),r=Math.random().toString(36).substring(2,12);return`${e.name}-${t}-${r}`};async function v(e){let t=y(e),r=(0,m.iH)(b,`ecommerce/${t}`),a=(0,m.B0)(r,e);return new Promise((e,t)=>{a.on("state_changed",e=>{},e=>{console.log(e),t(e)},()=>{(0,m.Jt)(a.snapshot.ref).then(t=>e(t)).catch(e=>t(e))})})}let w={name:"",price:0,description:"",category:"men",sizes:[],deliveryInfo:"",onSale:"no",imageUrl:"",priceDrop:0};function j(){let[e,t]=(0,x.useState)(w),{componentLevelLoader:r,setComponentLevelLoader:u,currentUpdatedProduct:m,setCurrentUpdatedProduct:f}=(0,x.useContext)(c.GlobalContext);console.log(m);let b=(0,g.useRouter)();async function y(r){let a=await v(r.target.files[0]);""!==a&&t({...e,imageUrl:a})}async function j(){u({loading:!0,id:""});let r=null!==m?await (0,d.Tw)(e):await (0,d.xg)(e);console.log(r),r.success?(u({loading:!1,id:""}),h.Am.success(r.message,{position:h.Am.POSITION.TOP_RIGHT}),t(w),f(null),setTimeout(()=>{b.push("/admin-view/all-products")},1e3)):(h.Am.error(r.message,{position:h.Am.POSITION.TOP_RIGHT}),u({loading:!1,id:""}),t(w))}return(0,x.useEffect)(()=>{null!==m&&t(m)},[m]),console.log(e),(0,a.jsxs)("div",{className:"w-full mt-5 mr-0 mb-0 ml-0 relative",children:[a.jsx("div",{className:"flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative",children:(0,a.jsxs)("div",{className:"w-full mt-6 mr-0 mb-0 ml-0 space-y-8",children:[a.jsx("input",{accept:"image/*",max:"1000000",type:"file",onChange:y}),(0,a.jsxs)("div",{className:"flex gap-2 flex-col",children:[a.jsx("label",{children:"Налични размери"}),a.jsx(i,{selected:e.sizes,onClick:function(r){let a=[...e.sizes];-1===a.findIndex(e=>e.id===r.id)?a.push(r):a=a.filter(e=>e.id!==r.id),t({...e,sizes:a})},data:p.jJ})]}),p.d2.map(r=>"input"===r.componentType?a.jsx(s.Z,{type:r.type,placeholder:r.placeholder,label:r.label,value:e[r.id],onChange:a=>{t({...e,[r.id]:a.target.value})}}):"select"===r.componentType?a.jsx(n.Z,{label:r.label,options:r.options,value:e[r.id],onChange:a=>{t({...e,[r.id]:a.target.value})}}):null),a.jsx("button",{onClick:j,className:"inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide",children:r&&r.loading?a.jsx(o.Z,{text:null!==m?"Обновяване на продукта":"Добавяне на продукта",color:"#ffffff",loading:r&&r.loading}):null!==m?"Обнови продукт":"Добави продукт"})]})}),a.jsx(l.Z,{})]})}},54433:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(95344);function s({label:e,placeholder:t,onChange:r,value:s,type:n}){return(0,a.jsxs)("div",{className:"relative",children:[a.jsx("p",{className:" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white",children:e}),a.jsx("input",{placeholder:t,type:n||"text",value:s,onChange:r,className:"border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"})]})}},34729:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(95344);function s({label:e,value:t,onChange:r,options:s=[]}){return(0,a.jsxs)("div",{className:"relative",children:[a.jsx("p",{className:" pt-0 pr-2 absolute pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white",children:e}),a.jsx("select",{value:t,onChange:r,className:"border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md",children:s&&s.length?s.map(e=>a.jsx("option",{id:e.id,value:e.id,children:e.label},e.id)):a.jsx("option",{id:"",value:"",children:"Избери"})})]})}},79510:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(95344),s=r(1208);function n(){return a.jsx(s.Ix,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",rtl:!1})}r(45996)},49926:(e,t,r)=>{"use strict";r.d(t,{Tw:()=>o,ak:()=>l,c0:()=>i,xg:()=>s});var a=r(8014);let s=async e=>{try{let t=await fetch("/api/admin/add-product",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${a.Z.get("token")}`},body:JSON.stringify(e)});return await t.json()}catch(e){console.log(e)}},n=process.env.NEXT_PUBLIC_API_URL||"http://localhost:3000",i=async()=>{try{let e=await fetch(`${n}/api/admin/all-products`,{method:"GET",cache:"no-store"});return await e.json()}catch(e){console.log(e)}},o=async e=>{try{let t=await fetch("/api/admin/update-product",{method:"PUT",headers:{"content-type":"application/json",Authorization:`Bearer ${a.Z.get("token")}`},cache:"no-store",body:JSON.stringify(e)});return await t.json()}catch(e){console.log(e)}},l=async e=>{try{let t=await fetch(`/api/admin/delete-product?id=${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${a.Z.get("token")}`}});return await t.json()}catch(e){console.log(e)}}},42854:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>i});let a=(0,r(86843).createProxy)(String.raw`D:\Programming\E-commerce App w NextJS\ecommerce - Copy\src\app\admin-view\add-product\page.js`),{__esModule:s,$$typeof:n}=a,i=a.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},45996:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,5872,337,5075],()=>r(75831));module.exports=a})();