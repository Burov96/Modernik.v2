"use strict";(()=>{var e={};e.id=8749,e.ids=[8749],e.modules={46517:e=>{e.exports=require("lodash")},11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},12781:e=>{e.exports=require("stream")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},45129:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>x,originalPathname:()=>b,patchFetch:()=>P,requestAsyncStorage:()=>q,routeModule:()=>f,serverHooks:()=>v,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>S});var s={};t.r(s),t.d(s,{POST:()=>y,dynamic:()=>g});var i=t(95419),o=t(69108),a=t(99678),n=t(82338),u=t(48967),d=t(2440),c=t(68619),p=t.n(c),l=t(78070);let m=p().object({name:p().string().required(),description:p().string().required(),price:p().number().required(),category:p().string().required(),sizes:p().array().required(),deliveryInfo:p().string().required(),onSale:p().string().required(),priceDrop:p().number().required(),imageUrl:p().string().required()}),g="force-dynamic";async function y(e){try{await (0,n.Z)();let r=await (0,u.Z)(e);if(r?.role!=="admin")return l.Z.json({success:!1,message:"Не сте удостоверени!"});{let r=await e.json(),{name:t,description:s,price:i,imageUrl:o,category:a,sizes:n,deliveryInfo:u,onSale:c,priceDrop:p}=r,{error:g}=m.validate({name:t,description:s,price:i,imageUrl:o,category:a,sizes:n,deliveryInfo:u,onSale:c,priceDrop:p});if(g)return l.Z.json({success:!1,message:g.details[0].message});if(await d.Z.create(r))return l.Z.json({success:!0,message:"Продукта е добавен успешно!"});return l.Z.json({success:!1,message:"Не успяхте да добавите този продукт!"})}}catch(e){return console.log(e),l.Z.json({success:!1,message:"Нещо се обърка, опитайте отново по-късно!"})}}let f=new i.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/admin/add-product/route",pathname:"/api/admin/add-product",filename:"route",bundlePath:"app/api/admin/add-product/route"},resolvedPagePath:"D:\\Programming\\E-commerce App w NextJS\\ecommerce - Copy\\src\\app\\api\\admin\\add-product\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:q,staticGenerationAsyncStorage:h,serverHooks:v,headerHooks:x,staticGenerationBailout:S}=f,b="/api/admin/add-product/route";function P(){return(0,a.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:h})}},82338:(e,r,t)=>{t.d(r,{Z:()=>a});var s=t(11185),i=t.n(s);let o={useNewUrlParser:!0,useUnifiedTopology:!0},a=async()=>{i().connect("mongodb+srv://burov96:123456782023@cluster0.p1f5hzv.mongodb.net/",o).then(()=>console.log("Успешна връзка с база данни!")).catch(e=>console.log(`Получихте следното съобщение от база данни : ${e.message}`))}},48967:(e,r,t)=>{t.d(r,{Z:()=>o});var s=t(46082),i=t.n(s);let o=async e=>{let r=e.headers.get("Authorization")?.split(" ")[1];if(!r)return!1;try{let e=i().verify(r,"default_secret_key");if(e)return e}catch(e){return console.log(e),!1}}},2440:(e,r,t)=>{t.d(r,{Z:()=>a});var s=t(11185),i=t.n(s);let o=new(i()).Schema({name:String,description:String,price:Number,category:String,sizes:Array,deliveryInfo:String,onSale:String,priceDrop:Number,imageUrl:String},{timestamps:!0}),a=i().models.Products||i().model("Products",o)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1638,6206,6082,734],()=>t(45129));module.exports=s})();