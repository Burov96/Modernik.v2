"use strict";(()=>{var e={};e.id=5958,e.ids=[5958],e.modules={46517:e=>{e.exports=require("lodash")},11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},12781:e=>{e.exports=require("stream")},73837:e=>{e.exports=require("util")},22689:(e,r,s)=>{s.r(r),s.d(r,{headerHooks:()=>y,originalPathname:()=>x,patchFetch:()=>w,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>h,staticGenerationAsyncStorage:()=>f,staticGenerationBailout:()=>v});var t={};s.r(t),s.d(t,{PUT:()=>l,dynamic:()=>p});var a=s(95419),o=s(69108),n=s(99678),d=s(82338),i=s(48967),u=s(7185),c=s(78070);let p="force-dynamic";async function l(e){try{if(await (0,d.Z)(),!await (0,i.Z)(e))return c.Z.json({success:!1,message:"Не сте удостоверени!"});{let{_id:r,fullName:s,city:t,address:a,country:o,postalCode:n}=await e.json();if(await u.Z.findOneAndUpdate({_id:r},{fullName:s,city:t,address:a,country:o,postalCode:n},{new:!0}))return c.Z.json({success:!0,message:"Адресът бе обновен успешно!"});return c.Z.json({success:!1,message:"Не успяхте да добавите адреса!"})}}catch(e){return console.log(e),c.Z.json({success:!1,message:"Нещо се обърка, опитайте отново по-късно!"})}}let m=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/address/update-address/route",pathname:"/api/address/update-address",filename:"route",bundlePath:"app/api/address/update-address/route"},resolvedPagePath:"D:\\Programming\\E-commerce App w NextJS\\ecommerce - Copy\\src\\app\\api\\address\\update-address\\route.js",nextConfigOutput:"",userland:t}),{requestAsyncStorage:g,staticGenerationAsyncStorage:f,serverHooks:h,headerHooks:y,staticGenerationBailout:v}=m,x="/api/address/update-address/route";function w(){return(0,n.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:f})}},82338:(e,r,s)=>{s.d(r,{Z:()=>n});var t=s(11185),a=s.n(t);let o={useNewUrlParser:!0,useUnifiedTopology:!0},n=async()=>{a().connect("mongodb+srv://burov96:123456782023@cluster0.p1f5hzv.mongodb.net/",o).then(()=>console.log("Успешна връзка с база данни!")).catch(e=>console.log(`Получихте следното съобщение от база данни : ${e.message}`))}},48967:(e,r,s)=>{s.d(r,{Z:()=>o});var t=s(46082),a=s.n(t);let o=async e=>{let r=e.headers.get("Authorization")?.split(" ")[1];if(!r)return!1;try{let e=a().verify(r,"default_secret_key");if(e)return e}catch(e){return console.log(e),!1}}},7185:(e,r,s)=>{s.d(r,{Z:()=>n});var t=s(11185),a=s.n(t);let o=new(a()).Schema({userID:{type:a().Schema.Types.ObjectId,ref:"User"},fullName:String,address:String,city:String,country:String,postalCode:String},{timestamps:!0}),n=a().models.Address||a().model("Address",o)}};var r=require("../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[1638,6206,6082],()=>s(22689));module.exports=t})();