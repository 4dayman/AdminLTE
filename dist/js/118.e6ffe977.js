"use strict";(self["webpackChunkadminlte"]=self["webpackChunkadminlte"]||[]).push([[118],{7805:function(e,t,s){s.d(t,{Z:function(){return L}});var l=s(6252);const a=e=>((0,l.dD)("data-v-1458f210"),e=e(),(0,l.Cn)(),e),n={class:"lds-spinner"},i=a((()=>(0,l._)("div",null,null,-1))),r=a((()=>(0,l._)("div",null,null,-1))),o=a((()=>(0,l._)("div",null,null,-1))),d=a((()=>(0,l._)("div",null,null,-1))),c=a((()=>(0,l._)("div",null,null,-1))),u=a((()=>(0,l._)("div",null,null,-1))),w=a((()=>(0,l._)("div",null,null,-1))),g=a((()=>(0,l._)("div",null,null,-1))),h=a((()=>(0,l._)("div",null,null,-1))),m=a((()=>(0,l._)("div",null,null,-1))),_=a((()=>(0,l._)("div",null,null,-1))),v=a((()=>(0,l._)("div",null,null,-1))),p=[i,r,o,d,c,u,w,g,h,m,_,v];function f(e,t,s,a,i,r){return(0,l.wg)(),(0,l.iD)("div",n,p)}var b={name:"Loader"},y=s(3744);const $=(0,y.Z)(b,[["render",f],["__scopeId","data-v-1458f210"]]);var L=$},7118:function(e,t,s){s.r(t),s.d(t,{default:function(){return M}});var l=s(6252);const a={class:"row"},n={class:"col"},i={class:"card"},r={class:"card-header"},o=(0,l._)("h3",{class:"card-title"},"Список Новостей",-1),d=(0,l._)("i",{class:"fas fa-plus"},null,-1),c={class:"card-body"},u={class:"film-card-wrap"},w=(0,l._)("div",{class:"card-footer"}," Footer ",-1);function g(e,t,s,g,h,m){const _=(0,l.up)("content-header"),v=(0,l.up)("NewsList"),p=(0,l.up)("loader"),f=(0,l.up)("content");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(_,{title:"Новости"}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l._)("div",a,[(0,l._)("div",n,[(0,l._)("div",i,[(0,l._)("div",r,[o,(0,l._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>m.addNews&&m.addNews(...e))},[d,(0,l.Uk)(" Создать новость")])]),(0,l._)("div",c,[(0,l._)("div",u,[(0,l.Wm)(v),this.$store.state.news.loader?((0,l.wg)(),(0,l.j4)(p,{key:0})):(0,l.kq)("",!0)])]),w])])])])),_:1})],64)}s(7658);var h=s(3247),m=s(2392),_=s(7805),v=s(3577);const p=e=>((0,l.dD)("data-v-caf8ee76"),e=e(),(0,l.Cn)(),e),f={class:"table table-bordered"},b=p((()=>(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"table__item"},"Название"),(0,l._)("th",{class:"table__item"},"Дата создания"),(0,l._)("th",{class:"table__item"},"Статус"),(0,l._)("th",{class:"table__item"}),(0,l._)("th",{class:"table__item"})])],-1))),y={class:"table__item"},$={class:"table__item"},L={class:"table__item"},k={key:0},D={key:1},C={class:"table__item"},N=p((()=>(0,l._)("i",{class:"fas fa-pencil-alt"},null,-1))),S={class:"table__item"},q=["onClick"],H={key:0,class:"modal-wrap"},I={class:"card p-2 modal-body"},O=p((()=>(0,l._)("h3",null,"Действительно хотите удалить",-1))),Z={class:"actions"},W=["onClick"],F=["onClick"];function T(e,t,s,a,n,i){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("table",f,[b,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.newsList,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("th",y,(0,v.zw)(e.data[0].title),1),(0,l._)("th",$,(0,v.zw)(e.creationDate),1),(0,l._)("th",L,[e.toggle?((0,l.wg)(),(0,l.iD)("p",k,"ВКЛ")):((0,l.wg)(),(0,l.iD)("p",D,"ВЫКЛ"))]),(0,l._)("th",C,[(0,l.Wm)(r,{to:`newsOne/${e.id}`,class:"input-group"},{default:(0,l.w5)((()=>[N])),_:2},1032,["to"])]),(0,l._)("th",S,[(0,l._)("i",{class:"far fa-trash-alt pointer",onClick:t=>e.modal=!e.modal},null,8,q)]),e.modal?((0,l.wg)(),(0,l.iD)("div",H,[(0,l._)("div",I,[O,(0,l._)("div",Z,[(0,l._)("button",{class:"btn btn-primary float-right",onClick:t=>i.deleteFilm(e.id)},"Удалить",8,W),(0,l._)("button",{class:"btn btn-primary float-right",onClick:t=>e.modal=!e.modal},"Отменить",8,F)])])])):(0,l.kq)("",!0)])))),128))])])}var z=s(6650),E={components:{},computed:{newsList(){return this.$store.state.news.newsList}},data(){return{}},methods:{async deleteFilm(e){if(this.$store.state.news.newsModal=!1,this.$store.state.news.loader=!0,this.$store.state.news.newsList[e].uploaded){await(0,h.oe)((0,h.JU)(m.db,"news",this.$store.state.news.newsList[e].name));for(let t=0;t<this.$store.state.news.newsList[e].images.length;t++){const s=(0,z.iH)(m.t,"news/cover/"+this.$store.state.news.newsList[e].name);if(await(0,z.oq)(s).catch((e=>{console.log(e)})),0!==this.$store.state.news.newsList[e].images[t].gallery.length)for(let l=0;l<this.$store.state.news.newsList[e].images[t].gallery.length;l++){const s=(0,z.iH)(m.t,"news/gallery/"+this.$store.state.news.newsList[e].images[t].gallery[l].name);await(0,z.oq)(s).catch((e=>{console.log(e)}))}if(0!==this.$store.state.news.newsList[e].images[t].deleted.length)for(let l=0;l<this.$store.state.news.newsList[e].images[t].deleted.length;l++){const s=(0,z.iH)(m.t,"news/gallery/"+this.$store.state.news.newsList[e].images[t].deleted[l].name);await(0,z.oq)(s).catch((e=>{console.log(e)}))}}}this.$store.state.news.newsList.splice(e,1);for(let t=0;t<this.$store.state.news.newsList.length;t++)this.$store.state.news.newsList[t].id!==t&&(this.$store.state.news.newsList[t].id=t);this.$store.state.news.loader=!1}}},J=s(3744);const U=(0,J.Z)(E,[["render",T],["__scopeId","data-v-caf8ee76"]]);var Y=U,j={components:{Loader:_.Z,NewsList:Y},created(){this.getNews()},methods:{addNews(){this.$store.state.news.newsList.push({id:this.$store.state.news.newsList.length,name:"new-"+Date.now(),creationDate:(new Date).toISOString().split("T")[0],uploaded:!1,modal:!1,lang:0,toggle:!0,data:[{title:"",publicDate:(new Date).toISOString().split("T")[0],desc:"",trailer:"",cover:{name:null,url:null},gallery:[],seo:{url:"",title:"",keywords:"",desc:""}},{title:"",publicDate:(new Date).toISOString().split("T")[0],desc:"",trailer:"",cover:{name:null,url:null},gallery:[],seo:{url:"",title:"",keywords:"",desc:""}}],images:[{cover:{name:null,image:null,url:null,uploaded:!1},gallery:[],deleted:[]},{cover:{name:null,image:null,url:null,uploaded:!1},gallery:[],deleted:[]}]}),this.$router.push({name:"newsOne",params:{id:this.$store.state.news.newsList.length-1}})},async getNews(){this.$store.state.news.loader=!0,this.$store.state.news.newsList=[];const e=await(0,h.PL)((0,h.hJ)(m.db,"news"));e.forEach((e=>{this.$store.state.news.newsList.push({id:this.$store.state.news.newsList.length,name:e.id,uploaded:!0,lang:e.data().lang,data:e.data().data,creationDate:e.data().creationDate,toggle:e.data().toggle,images:[{cover:{name:e.data().data[0].cover.name,image:null,url:e.data().data[0].cover.url},gallery:[],deleted:[]},{cover:{name:e.data().data[1].cover.name,image:null,url:e.data().data[1].cover.url},gallery:[],deleted:[]}]})})),this.$store.state.news.newsList.forEach((e=>{for(let t=0;t<e.data.length;t++)for(let s=0;s<e.data[t].gallery.length;s++)e.images[t].gallery.push({id:e.images[t].gallery.length,name:e.data[t].gallery[s].name,uploaded:!0,image:null,url:e.data[t].gallery[s].url})})),this.$store.state.news.loader=!1}}};const K=(0,J.Z)(j,[["render",g]]);var M=K}}]);
//# sourceMappingURL=118.e6ffe977.js.map