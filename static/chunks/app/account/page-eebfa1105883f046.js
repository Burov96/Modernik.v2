(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346,727,213,434,142,858],{6562:function(e,t,n){Promise.resolve().then(n.bind(n,353))},353:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var l=n(7437),a=n(9893),i=n(2329),o=n(3151),s=n(9166),c=n(4215),d=n(7121),r=n(4033),p=n(2265),u=n(6535),m=n(171);function h(){let{user:e,addresses:t,setAddresses:n,addressFormData:h,setAddressFormData:f,componentLevelLoader:x,setComponentLevelLoader:y,pageLevelLoader:b,setPageLevelLoader:g}=(0,p.useContext)(s.GlobalContext),[j,w]=(0,p.useState)(!1),[v,k]=(0,p.useState)(null),N=(0,r.useRouter)();async function T(){g(!0);let t=await (0,c.ar)(null==e?void 0:e._id);t.success&&(g(!1),n(t.data))}async function S(){y({loading:!0,id:""});let t=null!==v?await (0,c.y3)({...h,_id:v}):await (0,c.AF)({...h,userID:null==e?void 0:e._id});console.log(t),t.success?(y({loading:!1,id:""}),m.Am.success(t.message,{position:m.Am.POSITION.TOP_RIGHT}),f({fullName:"",city:"",country:"",postalCode:"",address:""}),T(),k(null)):(y({loading:!1,id:""}),m.Am.error(t.message,{position:m.Am.POSITION.TOP_RIGHT}),f({fullName:"",city:"",country:"",postalCode:"",address:""}))}async function O(e){y({loading:!0,id:e});let t=await (0,c._N)(e);t.success?(y({loading:!1,id:""}),m.Am.success(t.message,{position:m.Am.POSITION.TOP_RIGHT}),T()):(y({loading:!1,id:""}),m.Am.error(t.message,{position:m.Am.POSITION.TOP_RIGHT}))}return(0,p.useEffect)(()=>{null!==e&&T()},[e]),(0,l.jsxs)("section",{children:[(0,l.jsx)("div",{className:"mx-auto bg-gray-100 px-4 sm:px-6 lg:px-8",children:(0,l.jsx)("div",{className:"bg-white shadow",children:(0,l.jsxs)("div",{className:"p-6 sm:p-12",children:[(0,l.jsx)("div",{className:"flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row"}),(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,l.jsx)("h4",{className:"text-lg font-semibold text-center md:text-left",children:null==e?void 0:e.name}),(0,l.jsx)("p",{children:null==e?void 0:e.email}),(0,l.jsx)("p",{children:null==e?void 0:e.role})]}),(0,l.jsx)("button",{onClick:()=>N.push("/orders"),className:"mt-5  inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide",children:"Вашите поръчки"}),(0,l.jsxs)("div",{className:"mt-6",children:[(0,l.jsx)("h1",{className:"font-bold text-lg",children:"Вашите адреси:"}),b?(0,l.jsx)(u.Z,{color:"#000000",loading:b,size:15,"data-testid":"loader"}):(0,l.jsx)("div",{className:"mt-4 flex flex-col gap-4",children:t&&t.length?t.map(e=>(0,l.jsxs)("div",{className:"border p-6",children:[(0,l.jsxs)("p",{children:["Име : ",e.fullName]}),(0,l.jsxs)("p",{children:["Адрес : ",e.address]}),(0,l.jsxs)("p",{children:["Град : ",e.city]}),(0,l.jsxs)("p",{children:["Държава : ",e.country]}),(0,l.jsxs)("p",{children:["Пощенски код : ",e.postalCode]}),(0,l.jsx)("button",{onClick:()=>{w(!0),f({fullName:e.fullName,city:e.city,country:e.country,postalCode:e.postalCode,address:e.address}),k(e._id)},className:"mt-5 mr-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide",children:"Обнови"}),(0,l.jsx)("button",{onClick:()=>O(e._id),className:"mt-5  inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide",children:x&&x.loading&&x.id===e._id?(0,l.jsx)(i.Z,{text:"Изтриване",color:"#ffffff",loading:x&&x.loading}):"Изтрий"})]},e._id)):(0,l.jsx)("p",{children:"Все още нямате добавен адрес."})})]}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)("button",{onClick:()=>w(!j),className:"mt-5  inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide",children:j?"Скрий полето за адреси":"Добавяне на нов адрес"})}),j?(0,l.jsxs)("div",{className:"flex flex-col mt-5 justify-center pt-4 items-center",children:[(0,l.jsx)("div",{className:"w-full mt-6 mr-0 mb-0 ml-0 space-y-8",children:d.GP.map(e=>(0,l.jsx)(a.Z,{type:e.type,placeholder:e.placeholder,label:e.label,value:h[e.id],onChange:t=>f({...h,[e.id]:t.target.value})}))}),(0,l.jsx)("button",{onClick:S,className:"mt-5  inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide",children:x&&x.loading?(0,l.jsx)(i.Z,{text:"Запазване",color:"#ffffff",loading:x&&x.loading}):"Запази"})]}):null]})})}),(0,l.jsx)(o.Z,{})]})}},9893:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var l=n(7437);function a(e){let{label:t,placeholder:n,onChange:a,value:i,type:o}=e;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("p",{className:" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white",children:t}),(0,l.jsx)("input",{placeholder:n,type:o||"text",value:i,onChange:a,className:"border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"})]})}},2329:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(7437),a=n(6535);function i(e){let{text:t,color:n,loading:i,size:o}=e;return(0,l.jsxs)("span",{className:"flex gap-1 items-center",children:[t,(0,l.jsx)(a.Z,{color:n,loading:i,size:o||10,"data-testid":"loader"})]})}},3151:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(7437),a=n(171);function i(){return(0,l.jsx)(a.Ix,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",rtl:!1})}n(8062)},9166:function(e,t,n){"use strict";n.r(t),n.d(t,{GlobalContext:function(){return s},default:function(){return p},initialCheckoutFormData:function(){return c}});var l=n(7437),a=n(1490),i=n(4033),o=n(2265);let s=(0,o.createContext)(null),c={shippingAddress:{},paymentMethod:"",totalPrice:0,isPaid:!1,paidAt:new Date,isProcessing:!0},d=["cart","checkout","account","orders","admin-view"],r=["/admin-view","/admin-view/add-product","/admin-view/all-products"];function p(e){let{children:t}=e,[n,p]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!0),[h,f]=(0,o.useState)({loading:!1,id:""}),[x,y]=(0,o.useState)(null),[b,g]=(0,o.useState)(null),[j,w]=(0,o.useState)(null),[v,k]=(0,o.useState)(!1),[N,T]=(0,o.useState)([]),[S,O]=(0,o.useState)([]),[C,I]=(0,o.useState)({fullName:"",city:"",country:"",postalCode:"",address:""}),[P,A]=(0,o.useState)(c),[_,Z]=(0,o.useState)([]),[E,G]=(0,o.useState)(null),[R,z]=(0,o.useState)([]),D=(0,i.useRouter)(),H=(0,i.usePathname)();return(0,o.useEffect)(()=>{if(void 0!==a.Z.get("token")){y(!0);let e=JSON.parse(localStorage.getItem("user"))||{},t=JSON.parse(localStorage.getItem("cartItems"))||[];g(e),T(t)}else y(!1),g({})},[a.Z]),(0,o.useEffect)(()=>{"/register"!==H&&!H.includes("product")&&"/"!==H&&b&&0===Object.keys(b).length&&d.includes(H)>-1&&D.push("/login")},[b,H]),(0,o.useEffect)(()=>{null!==b&&b&&Object.keys(b).length>0&&(null==b?void 0:b.role)!=="admin"&&r.indexOf(H)>-1&&D.push("/unauthorized-page")},[b,H]),(0,l.jsx)(s.Provider,{value:{showNavmodel:n,setShowNavmodel:p,pageLevelLoader:u,setPageLevelLoader:m,isAuthUser:x,setIsAuthUser:y,user:b,setUser:g,componentLevelLoader:h,setComponentLevelLoader:f,currentUpdatedProduct:j,setCurrentUpdatedProduct:w,showCartModel:v,setShowCartModel:k,cartItems:N,setCartItems:T,addresses:S,setAddresses:O,addressFormData:C,setAddressFormData:I,checkoutFormData:P,setCheckoutFormData:A,allOrdersForUser:_,setAllOrdersForUser:Z,orderDetails:E,setOrderDetails:G,allOrdersForAllUsers:R,setAllOrdersForAllUsers:z},children:t})}},4215:function(e,t,n){"use strict";n.d(t,{AF:function(){return a},_N:function(){return s},ar:function(){return i},y3:function(){return o}});var l=n(1490);let a=async e=>{try{let t=await fetch("/api/address/add-new-address",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("token"))},body:JSON.stringify(e)});return await t.json()}catch(e){console.log(e)}},i=async e=>{try{let t=await fetch("/api/address/get-all-address?id=".concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(l.Z.get("token"))}});return await t.json()}catch(e){console.log(e)}},o=async e=>{try{let t=await fetch("/api/address/update-address",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("token"))},body:JSON.stringify(e)});return await t.json()}catch(e){console.log(e)}},s=async e=>{try{let t=await fetch("/api/address/delete-address?id=".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(l.Z.get("token"))}});return await t.json()}catch(e){console.log(e)}}},7121:function(e,t,n){"use strict";n.d(t,{GP:function(){return d},GU:function(){return a},Hp:function(){return i},d2:function(){return s},jJ:function(){return c},mO:function(){return p},p8:function(){return l},qe:function(){return r},vV:function(){return o}}),n(994),n(9584);let l=[{id:"home",label:"Home",path:"/"},{id:"listing",label:"Всички продукти",path:"/product/listing/all-products"},{id:"listingMen",label:"Мъже",path:"/product/listing/men"},{id:"listingWomen",label:"Жени",path:"/product/listing/women"},{id:"listingKids",label:"Деца",path:"/product/listing/kids"}],a=[{id:"adminListing",label:"Обновяване на продукт",path:"/admin-view/all-products"},{id:"adminNewProduct",label:"Добавяне на продукти",path:"/admin-view/add-product"},{id:"orders",label:"Поръчки",path:"/admin-view/orders"}],i=[{id:"name",type:"text",placeholder:"Въведете вашето име",label:"Име",componentType:"input"},{id:"email",type:"email",placeholder:"Въведете email адрес",label:"Email адрес",componentType:"input"},{id:"password",type:"password",placeholder:"Въведете парола",label:"Парола",componentType:"input"},{id:"role",type:"",placeholder:"",label:"Role",componentType:"select",options:[{id:"admin",label:"Admin"},{id:"customer",label:"customer"}]}],o=[{id:"email",type:"email",placeholder:"Въведете email адрес",label:"Email",componentType:"input"},{id:"password",type:"password",placeholder:"Въведете парола",label:"Парола",componentType:"input"}],s=[{id:"name",type:"text",placeholder:"Enter name",label:"Име",componentType:"input"},{id:"price",type:"number",placeholder:"Въведете цена",label:"Цена",componentType:"input"},{id:"description",type:"text",placeholder:"Въведете описание",label:"Описание",componentType:"input"},{id:"category",type:"",placeholder:"",label:"Категория",componentType:"select",options:[{id:"men",label:"Мъже"},{id:"women",label:"Жени"},{id:"kids",label:"Деца"}]},{id:"deliveryInfo",type:"text",placeholder:"Въведете адрес",label:"Адрес",componentType:"input"},{id:"onSale",type:"",placeholder:"",label:"Промоция",componentType:"select",options:[{id:"yes",label:"Да"},{id:"no",label:"Не"}]},{id:"priceDrop",type:"number",placeholder:"Въведете намалението в %",label:"Намаление",componentType:"input"}],c=[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}],d=[{id:"fullName",type:"input",placeholder:"Въведете вашите имена",label:"Три имена",componentType:"input"},{id:"address",type:"input",placeholder:"Въведете адрес",label:"Адрес",componentType:"input"},{id:"city",type:"input",placeholder:"Въведете град",label:"Град",componentType:"input"},{id:"country",type:"input",placeholder:"Въведете държава",label:"Държава",componentType:"input"},{id:"postalCode",type:"input",placeholder:"Въведете пощенски код",label:"Пощенски код",componentType:"input"}],r={apiKey:"AIzaSyD5Alvae8H3a2To1DRjvweJVUuUwYTiF9I",authDomain:"modernik.firebaseapp.com",projectId:"modernik",storageBucket:"modernik.appspot.com",messagingSenderId:"626955762261",appId:"1:626955762261:web:02f40e7c046a9e779372dc",measurementId:"G-BZL21K1RQM"},p="gs://modernik.appspot.com"},8062:function(){}},function(e){e.O(0,[788,226,971,938,744],function(){return e(e.s=6562)}),_N_E=e.O()}]);