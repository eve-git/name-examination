import{h as n,i as c,k as p}from"./entry.ad7a1130.js";import h from"./ContentQuery.f33cc23f.js";import"./query.0e9b4b8c.js";import"./utils.5293a625.js";import"./preview.0b7aae2e.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),q=n({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=c(),{path:f,query:a}=r,m={...a||{},path:f||(a==null?void 0:a.path)||"/"};return p(h,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):u("not-found",e==null?void 0:e.data)}})}});export{q as default};
