"use strict";(self["webpackChunkadminlte"]=self["webpackChunkadminlte"]||[]).push([[846],{5846:function(t,s,e){e.r(s),e.d(s,{default:function(){return V}});var a=e(6252);const i={class:"row"},l={class:"col"},r={class:"card"},n={class:"card-header"},c=(0,a._)("h3",{class:"card-title"},"Список фильмов текущих",-1),o=(0,a._)("i",{class:"fas fa-plus"},null,-1),d={class:"card-body"},m={class:"film-card-wrap"},u={class:"card"},h=(0,a._)("div",{class:"card-header"},[(0,a._)("h3",{class:"card-title"},"Список фильмов которые покажут скоро")],-1),f={class:"card-body"},g={class:"film-card-wrap"};function p(t,s,e,p,v,_){const L=(0,a.up)("content-header"),k=(0,a.up)("FilmsList"),b=(0,a.up)("FilmsUpcomList"),w=(0,a.up)("content");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(L,{title:"Фильмы",icon:"fas fa-info-circle"}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",l,[(0,a._)("div",r,[(0,a._)("div",n,[c,(0,a._)("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=(...t)=>_.addFilm&&_.addFilm(...t))},[o,(0,a.Uk)(" Добавить фильм")])]),(0,a._)("div",d,[(0,a._)("div",m,[(0,a.Wm)(k)])])]),(0,a._)("div",u,[h,(0,a._)("div",f,[(0,a._)("div",g,[(0,a.Wm)(b)])])])])])])),_:1})],64)}e(7658);var v=e(3577),_=e(9963);const L=t=>((0,a.dD)("data-v-5a32ce10"),t=t(),(0,a.Cn)(),t),k={class:"card p-2"},b=["onClick"],w=["src"],$={key:0,class:"modal-wrap"},y={class:"card p-2 modal-body"},C=L((()=>(0,a._)("h3",null,"Действительно хотите удалить",-1))),F={class:"actions"},D=["onClick"],q=["onClick"];function W(t,s,e,i,l,r){const n=(0,a.up)("router-link");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.currentList,((t,s)=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{class:"banner",key:s},[(0,a._)("div",k,[r.currentList.length>1?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"badge bg-danger poa",onClick:s=>t.modal=!t.modal},"X",8,b)):(0,a.kq)("",!0),(0,a.Wm)(n,{to:`filmsOne/${t.id}`,class:"input-group"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:t.images[0].cover.url},null,8,w),(0,a._)("h5",null,(0,v.zw)(t.data[0].title),1)])),_:2},1032,["to"])]),t.modal?((0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",y,[C,(0,a._)("div",F,[(0,a._)("button",{class:"btn btn-primary float-right",onClick:s=>r.deleteFilm(t.id)},"Удалить",8,D),(0,a._)("button",{class:"btn btn-primary float-right",onClick:s=>t.modal=!t.modal},"Отменить",8,q)])])])):(0,a.kq)("",!0)])),[[_.F8,!t.data[0].toggle]]))),128)}var H=e(3247),U=e(2392),J=e(6650),O={components:{},computed:{currentList(){return this.$store.state.films.currentList}},data(){return{}},methods:{async deleteFilm(t){if(this.$store.state.films.currentModal=!1,this.loading=!0,this.$store.state.films.currentList[t].uploaded){await(0,H.oe)((0,H.JU)(U.db,"films",this.$store.state.films.currentList[t].name));const s=(0,J.iH)(U.t,"films/cover/"+this.$store.state.films.currentList[t].name);await(0,J.oq)(s).catch((t=>{console.log(t)}))}this.$store.state.films.currentList.splice(t,1);for(let s=0;s<this.$store.state.films.currentList.length;s++)this.$store.state.films.currentList[s].id!==s&&(this.$store.state.films.currentList[s].id=s);this.loading=!1}}},Y=e(3744);const Z=(0,Y.Z)(O,[["render",W],["__scopeId","data-v-5a32ce10"]]);var z=Z;const I=t=>((0,a.dD)("data-v-5e1446c1"),t=t(),(0,a.Cn)(),t),K={class:"card p-2"},M=["onClick"],X=["src"],E={key:0,class:"modal-wrap"},P={class:"card p-2 modal-body"},j=I((()=>(0,a._)("h3",null,"Действительно хотите удалить",-1))),x={class:"actions"},A=["onClick"],B=["onClick"];function G(t,s,e,i,l,r){const n=(0,a.up)("router-link");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.currentList,((t,s)=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{class:"banner",key:s},[(0,a._)("div",K,[r.currentList.length>1?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"badge bg-danger poa",onClick:s=>t.modal=!t.modal},"X",8,M)):(0,a.kq)("",!0),(0,a.Wm)(n,{to:`filmsOne/${t.id}`,class:"input-group"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:t.images[0].cover.url},null,8,X),(0,a._)("h5",null,(0,v.zw)(t.data[0].title),1)])),_:2},1032,["to"])]),t.modal?((0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",P,[j,(0,a._)("div",x,[(0,a._)("button",{class:"btn btn-primary float-right",onClick:s=>r.deleteFilm(t.id)},"Удалить",8,A),(0,a._)("button",{class:"btn btn-primary float-right",onClick:s=>t.modal=!t.modal},"Отменить",8,B)])])])):(0,a.kq)("",!0)])),[[_.F8,t.data[0].toggle]]))),128)}var N={components:{},computed:{currentList(){return this.$store.state.films.currentList}},data(){return{}},methods:{async deleteFilm(t){if(this.$store.state.films.currentModal=!1,this.loading=!0,this.$store.state.films.currentList[t].uploaded){await(0,H.oe)((0,H.JU)(U.db,"films",this.$store.state.films.currentList[t].name));const s=(0,J.iH)(U.t,"films/cover/"+this.$store.state.films.currentList[t].name);await(0,J.oq)(s).catch((t=>{console.log(t)}))}this.$store.state.films.currentList.splice(t,1);for(let s=0;s<this.$store.state.films.currentList.length;s++)this.$store.state.films.currentList[s].id!==s&&(this.$store.state.films.currentList[s].id=s);this.loading=!1}}};const Q=(0,Y.Z)(N,[["render",G],["__scopeId","data-v-5e1446c1"]]);var R=Q,S={components:{FilmsList:z,FilmsUpcomList:R},created(){this.getFilms()},methods:{addFilm(){this.$store.state.films.currentList.push({id:this.$store.state.films.currentList.length,name:"film-"+Date.now(),uploaded:!1,modal:!1,data:[{title:"",desc:"",trailer:"",type:[],cover:{name:null,url:null},gallery:[],seo:{url:"",title:"",keywords:"",desc:""},toggle:null}],images:[{cover:{name:null,image:null,url:null,uploaded:!1},gallery:[],deleted:[]}]}),this.$router.push({name:"filmsOne",params:{id:this.$store.state.films.currentList.length-1}})},async getFilms(){this.$store.state.films.currentList=[];const t=await(0,H.PL)((0,H.hJ)(U.db,"films"));t.forEach((t=>{this.$store.state.films.currentList.push({id:this.$store.state.films.currentList.length,name:t.id,uploaded:!0,data:t.data().data,images:[{cover:{name:t.data().data[0].cover.name,image:null,url:t.data().data[0].cover.url},gallery:[],deleted:[]}]})}))}}};const T=(0,Y.Z)(S,[["render",p]]);var V=T}}]);
//# sourceMappingURL=846.a9e0d917.js.map