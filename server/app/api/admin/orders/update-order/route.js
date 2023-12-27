"use strict";(()=>{var e={};e.id=4514,e.ids=[4514],e.modules={46517:e=>{e.exports=require("lodash")},11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},12781:e=>{e.exports=require("stream")},73837:e=>{e.exports=require("util")},35014:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>h,originalPathname:()=>q,patchFetch:()=>v,requestAsyncStorage:()=>g,routeModule:()=>l,serverHooks:()=>S,staticGenerationAsyncStorage:()=>y,staticGenerationBailout:()=>f});var o={};t.r(o),t.d(o,{PUT:()=>m,dynamic:()=>c});var s=t(95419),i=t(69108),a=t(99678),n=t(82338),d=t(48967),u=t(2068),p=t(78070);let c="force-dynamic";async function m(e){try{await (0,n.Z)();let r=await (0,d.Z)(e),t=await e.json();if(r?.role!=="admin")return p.Z.json({success:!1,message:"Не сте удостоверени!"});{let{_id:e,shippingAddress:r,orderItems:o,paymentMethod:s,isPaid:i,paidAt:a,isProcessing:n}=t;if(await u.Z.findOneAndUpdate({_id:e},{shippingAddress:r,orderItems:o,paymentMethod:s,isPaid:i,paidAt:a,isProcessing:n},{new:!0}))return p.Z.json({success:!0,message:"Статуса на поръчката бе обновен успешно!"});return p.Z.json({success:!0,message:"Не успяхте да обновите статуса на поръчката!"})}}catch(e){return console.log(e),p.Z.json({success:!1,message:"Нещо се обърка, опитайте отново по-късно!"})}}let l=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/admin/orders/update-order/route",pathname:"/api/admin/orders/update-order",filename:"route",bundlePath:"app/api/admin/orders/update-order/route"},resolvedPagePath:"D:\\Programming\\E-commerce App w NextJS\\ecommerce - Copy\\src\\app\\api\\admin\\orders\\update-order\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:g,staticGenerationAsyncStorage:y,serverHooks:S,headerHooks:h,staticGenerationBailout:f}=l,q="/api/admin/orders/update-order/route";function v(){return(0,a.patchFetch)({serverHooks:S,staticGenerationAsyncStorage:y})}},82338:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(11185),s=t.n(o);let i={useNewUrlParser:!0,useUnifiedTopology:!0},a=async()=>{s().connect("mongodb+srv://burov96:123456782023@cluster0.p1f5hzv.mongodb.net/",i).then(()=>console.log("Успешна връзка с база данни!")).catch(e=>console.log(`Получихте следното съобщение от база данни : ${e.message}`))}},48967:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(46082),s=t.n(o);let i=async e=>{let r=e.headers.get("Authorization")?.split(" ")[1];if(!r)return!1;try{let e=s().verify(r,"default_secret_key");if(e)return e}catch(e){return console.log(e),!1}}},2068:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(11185),s=t.n(o);t(2440),t(88582);let i=new(s()).Schema({user:{type:s().Schema.Types.ObjectId,ref:"User",required:!0},orderItems:[{qty:{type:Number,required:!0},product:{type:s().Schema.Types.ObjectId,ref:"Products"}}],shippingAddress:{fullName:{type:String,required:!0},address:{type:String,required:!0},city:{type:String,required:!0},country:{type:String,required:!0},postalCode:{type:String,required:!0}},paymentMethod:{type:String,required:!0,default:"Stripe"},totalPrice:{type:Number,required:!0},isPaid:{type:Boolean,required:!0},paidAt:{type:Date,required:!0},isProcessing:{type:Boolean,required:!0}},{timestamps:!0}),a=s().models.Order||s().model("Order",i)},2440:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(11185),s=t.n(o);let i=new(s()).Schema({name:String,description:String,price:Number,category:String,sizes:Array,deliveryInfo:String,onSale:String,priceDrop:Number,imageUrl:String},{timestamps:!0}),a=s().models.Products||s().model("Products",i)},88582:(e,r,t)=>{t.d(r,{Z:()=>a});var o=t(11185),s=t.n(o);let i=new(s()).Schema({name:String,email:String,password:String,role:String}),a=s().models.User||s().model("User",i)}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[1638,6206,6082],()=>t(35014));module.exports=o})();