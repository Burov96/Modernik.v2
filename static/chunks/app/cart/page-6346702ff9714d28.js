(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{9131:function(e,t,s){Promise.resolve().then(s.bind(s,659))},659:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var a=s(7437),c=s(4033),n=s(2329);function l(e){let{cartItems:t=[],handleDeleteCartItem:s,componentLevelLoader:l}=e,i=(0,c.useRouter)();return(0,a.jsx)("section",{className:"h-screen bg-gray-100",children:(0,a.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"bg-white shadow",children:(0,a.jsxs)("div",{className:"px-4 py-6 sm:px-8 sm:py-10",children:[(0,a.jsx)("div",{className:"flow-root",children:t&&t.length?(0,a.jsx)("ul",{className:"-my-8",children:t.map(e=>(0,a.jsxs)("li",{className:"flex-col flex space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0",children:[(0,a.jsx)("div",{className:"shrink-0",children:(0,a.jsx)("img",{src:e&&e.productID&&e.productID.imageUrl,alt:"Product image",className:"h-24 w-25 max-w-full rounded-lg object-cover"})}),(0,a.jsx)("div",{className:"flex flex-1 flex-col justify-between",children:(0,a.jsxs)("div",{className:"sm:col-gap-5 sm:grid sm:grid-cols-2",children:[(0,a.jsx)("div",{className:"pr-8 sm:pr-4",children:(0,a.jsx)("p",{className:"text-base font-semibold text-gray-900",children:e&&e.productID&&e.productID.name})}),(0,a.jsxs)("div",{className:"mt-4 flex gap-3 items-end justify-between sm:mt-0 sm:items-start sm:justify-end",children:[(0,a.jsxs)("p",{className:"shrink-0 w-20 text-base font-semibold text-gray-950 sm:order-1 sm:ml-8 sm:text-right",children:["$",e&&e.productID&&e.productID.price]}),(0,a.jsx)("button",{type:"button",className:"font-medium text-yellow-700 sm:order-2",onClick:()=>s(e._id),children:l&&l.loading&&l.id===e._id?(0,a.jsx)(n.Z,{text:"Премахване",color:"#0000000",loading:l&&l.loading}):"Премахни"})]})]})})]},e.id))}):(0,a.jsx)("h1",{className:"font-bold text-lg",children:"Количката е празна"})}),(0,a.jsxs)("div",{className:"mt-6 border-t border-b py-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"text-sm text-gray-400",children:"Междинна сума"}),(0,a.jsxs)("p",{className:"text-lg text-black font-semibold",children:["$",t&&t.length?t.reduce((e,t)=>t.productID.price+e,0):"0"]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"text-sm text-gray-400",children:"Доставка"}),(0,a.jsx)("p",{className:"text-lg text-black font-semibold",children:"$0"})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"text-sm text-gray-400",children:"Обща сума"}),(0,a.jsxs)("p",{className:"text-lg text-black font-semibold",children:["$",t&&t.length?t.reduce((e,t)=>t.productID.price+e,0):"0"]})]}),(0,a.jsx)("div",{className:"mt-5 text-center",children:(0,a.jsx)("button",{onClick:()=>i.push("/checkout"),disabled:t&&0===t.length,className:"disabled:opacity-50 group inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide",children:"Плащане"})})]})]})})})})})}var i=s(9166),r=s(7746),o=s(2265),d=s(6535),u=s(171);function m(){let{user:e,setCartItems:t,cartItems:s,pageLevelLoader:c,setPageLevelLoader:n,setComponentLevelLoader:m,componentLevelLoader:x}=(0,o.useContext)(i.GlobalContext);async function p(){n(!0);let s=await (0,r.tQ)(null==e?void 0:e._id);if(s.success){let e=s.data&&s.data.length?s.data.map(e=>({...e,productID:{...e.productID,price:"yes"===e.productID.onSale?parseInt((e.productID.price-e.productID.price*(e.productID.priceDrop/100)).toFixed(2)):e.productID.price}})):[];t(e),n(!1),localStorage.setItem("cartItems",JSON.stringify(e))}console.log(s)}async function h(e){m({loading:!0,id:e});let t=await (0,r.EI)(e);t.success?(m({loading:!1,id:""}),u.Am.success(t.message,{position:u.Am.POSITION.TOP_RIGHT}),p()):(u.Am.error(t.message,{position:u.Am.POSITION.TOP_RIGHT}),m({loading:!1,id:e}))}return((0,o.useEffect)(()=>{null!==e&&p()},[e]),c)?(0,a.jsx)("div",{className:"w-full min-h-screen flex justify-center items-center",children:(0,a.jsx)(d.Z,{color:"#000000",loading:c,size:30,"data-testid":"loader"})}):(0,a.jsx)(l,{componentLevelLoader:x,handleDeleteCartItem:h,cartItems:s})}},2329:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(7437),c=s(6535);function n(e){let{text:t,color:s,loading:n,size:l}=e;return(0,a.jsxs)("span",{className:"flex gap-1 items-center",children:[t,(0,a.jsx)(c.Z,{color:s,loading:n,size:l||10,"data-testid":"loader"})]})}},9166:function(e,t,s){"use strict";s.r(t),s.d(t,{GlobalContext:function(){return i},default:function(){return u},initialCheckoutFormData:function(){return r}});var a=s(7437),c=s(1490),n=s(4033),l=s(2265);let i=(0,l.createContext)(null),r={shippingAddress:{},paymentMethod:"",totalPrice:0,isPaid:!1,paidAt:new Date,isProcessing:!0},o=["cart","checkout","account","orders","admin-view"],d=["/admin-view","/admin-view/add-product","/admin-view/all-products"];function u(e){let{children:t}=e,[s,u]=(0,l.useState)(!1),[m,x]=(0,l.useState)(!0),[p,h]=(0,l.useState)({loading:!1,id:""}),[f,g]=(0,l.useState)(null),[j,y]=(0,l.useState)(null),[N,b]=(0,l.useState)(null),[v,w]=(0,l.useState)(!1),[I,S]=(0,l.useState)([]),[k,D]=(0,l.useState)([]),[O,E]=(0,l.useState)({fullName:"",city:"",country:"",postalCode:"",address:""}),[P,C]=(0,l.useState)(r),[_,A]=(0,l.useState)([]),[T,Z]=(0,l.useState)(null),[z,G]=(0,l.useState)([]),J=(0,n.useRouter)(),R=(0,n.usePathname)();return(0,l.useEffect)(()=>{if(void 0!==c.Z.get("token")){g(!0);let e=JSON.parse(localStorage.getItem("user"))||{},t=JSON.parse(localStorage.getItem("cartItems"))||[];y(e),S(t)}else g(!1),y({})},[c.Z]),(0,l.useEffect)(()=>{"/register"!==R&&!R.includes("product")&&"/"!==R&&j&&0===Object.keys(j).length&&o.includes(R)>-1&&J.push("/login")},[j,R]),(0,l.useEffect)(()=>{null!==j&&j&&Object.keys(j).length>0&&(null==j?void 0:j.role)!=="admin"&&d.indexOf(R)>-1&&J.push("/unauthorized-page")},[j,R]),(0,a.jsx)(i.Provider,{value:{showNavmodel:s,setShowNavmodel:u,pageLevelLoader:m,setPageLevelLoader:x,isAuthUser:f,setIsAuthUser:g,user:j,setUser:y,componentLevelLoader:p,setComponentLevelLoader:h,currentUpdatedProduct:N,setCurrentUpdatedProduct:b,showCartModel:v,setShowCartModel:w,cartItems:I,setCartItems:S,addresses:k,setAddresses:D,addressFormData:O,setAddressFormData:E,checkoutFormData:P,setCheckoutFormData:C,allOrdersForUser:_,setAllOrdersForUser:A,orderDetails:T,setOrderDetails:Z,allOrdersForAllUsers:z,setAllOrdersForAllUsers:G},children:t})}},7746:function(e,t,s){"use strict";s.d(t,{EI:function(){return l},Xq:function(){return c},tQ:function(){return n}});var a=s(1490);let c=async e=>{try{let t=await fetch("/api/cart/add-to-cart",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(a.Z.get("token"))},body:JSON.stringify(e)});return await t.json()}catch(e){console.log(e)}},n=async e=>{try{let t=await fetch("/api/cart/all-cart-items?id=".concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(a.Z.get("token"))}});return await t.json()}catch(e){console.log(e)}},l=async e=>{try{let t=await fetch("/api/cart/delete-from-cart?id=".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a.Z.get("token"))}});return await t.json()}catch(e){console.log(e)}}}},function(e){e.O(0,[788,971,938,744],function(){return e(e.s=9131)}),_N_E=e.O()}]);