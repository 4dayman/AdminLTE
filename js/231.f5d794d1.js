"use strict";(self["webpackChunkadminlte"]=self["webpackChunkadminlte"]||[]).push([[231],{2422:function(t,s,i){i.d(s,{Z:function(){return w}});var e=i(6252);const a=t=>((0,e.dD)("data-v-6fce9f6a"),t=t(),(0,e.Cn)(),t),l={class:"lds-spinner"},r=a((()=>(0,e._)("div",null,null,-1))),n=a((()=>(0,e._)("div",null,null,-1))),o=a((()=>(0,e._)("div",null,null,-1))),m=a((()=>(0,e._)("div",null,null,-1))),c=a((()=>(0,e._)("div",null,null,-1))),u=a((()=>(0,e._)("div",null,null,-1))),d=a((()=>(0,e._)("div",null,null,-1))),h=a((()=>(0,e._)("div",null,null,-1))),f=a((()=>(0,e._)("div",null,null,-1))),g=a((()=>(0,e._)("div",null,null,-1))),v=a((()=>(0,e._)("div",null,null,-1))),p=a((()=>(0,e._)("div",null,null,-1))),_=[r,n,o,m,c,u,d,h,f,g,v,p];function L(t,s,i,a,r,n){return(0,e.wg)(),(0,e.iD)("div",l,_)}var $={name:"Loader"},b=i(3744);const y=(0,b.Z)($,[["render",L],["__scopeId","data-v-6fce9f6a"]]);var w=y},4231:function(t,s,i){i.r(s),i.d(s,{default:function(){return I}});var e=i(6252),a=i(9963);const l=t=>((0,e.dD)("data-v-ac8a88c4"),t=t(),(0,e.Cn)(),t),r={class:"row"},n={class:"col"},o={class:"card"},m=l((()=>(0,e._)("div",{class:"card-header"},[(0,e._)("h3",{class:"card-title"},"Страница фильма")],-1))),c={class:"card-body"},u={class:"film_name"},d={class:"input-group mb-3"},h=l((()=>(0,e._)("p",null,"Название фильма:",-1))),f={class:"film_desc"},g={class:"input-group mb-3"},v=l((()=>(0,e._)("p",null,"Описание:",-1))),p={class:"film_banner"},_=l((()=>(0,e._)("p",null,"Главная картинка:",-1))),L={class:"film_image_body ml-2"},$={key:0,class:"film_image"},b=["src"],y={class:"banners_add"},w=l((()=>(0,e._)("i",{class:"fas fa-plus"},null,-1))),k=l((()=>(0,e._)("i",{class:"fas fa-minus"},null,-1))),D={class:"card-footer"},C={class:"custom-control custom-switch custom-switch-lg"},U={key:0,class:"custom-control-label",for:"mainBannersSwitch"},F={key:1,class:"custom-control-label",for:"mainBannersSwitch"};function S(t,s,i,l,S,q){const x=(0,e.up)("content-header"),V=(0,e.up)("content");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(x,{title:"Страница фильма",icon:"fas fa-info-circle"}),(0,e.Wm)(V,null,{default:(0,e.w5)((()=>[(0,e._)("div",r,[(0,e._)("div",n,[(0,e._)("div",o,[m,(0,e._)("div",c,[(0,e._)("div",u,[(0,e._)("div",d,[h,(0,e.wy)((0,e._)("input",{class:"form-control ml-1",type:"text",placeholder:"Название фильма","onUpdate:modelValue":s[0]||(s[0]=t=>this.$store.state.films.currentList[this.$route.params.id].data[0].title=t)},null,512),[[a.nr,this.$store.state.films.currentList[this.$route.params.id].data[0].title]])])]),(0,e._)("div",f,[(0,e._)("div",g,[v,(0,e.wy)((0,e._)("textarea",{class:"form-control ml-1",type:"text",placeholder:"Text","onUpdate:modelValue":s[1]||(s[1]=t=>this.$store.state.films.currentList[this.$route.params.id].data[0].desc=t)},null,512),[[a.nr,this.$store.state.films.currentList[this.$route.params.id].data[0].desc]])])]),(0,e._)("div",p,[_,(0,e._)("div",L,[this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url?((0,e.wg)(),(0,e.iD)("div",$,[(0,e._)("img",{src:this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url},null,8,b)])):(0,e.kq)("",!0),(0,e._)("label",y,[(0,e._)("button",{class:"btn btn-primary square",onClick:s[2]||(s[2]=t=>this.$refs.bannerSelect.click())},[w,(0,e.Uk)(" Добавить фото")]),(0,e._)("input",{class:"banner_input",ref:"bannerSelect",type:"file",accept:"image/*",onChange:s[3]||(s[3]=t=>q.bannerSelect(t))},null,544)]),(0,e._)("button",{class:"btn btn-primary square",onClick:s[4]||(s[4]=t=>this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url="")},[k,(0,e.Uk)(" Удалить фото")])])])]),(0,e._)("div",D,[(0,e._)("div",C,[(0,e.wy)((0,e._)("input",{type:"checkbox",class:"custom-control-input",id:"mainBannersSwitch","onUpdate:modelValue":s[5]||(s[5]=t=>this.$store.state.films.currentList[this.$route.params.id].data[0].toggle=t)},null,512),[[a.e8,this.$store.state.films.currentList[this.$route.params.id].data[0].toggle]]),this.$store.state.films.currentList[this.$route.params.id].data[0].toggle?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("label",U," now ")),this.$store.state.films.currentList[this.$route.params.id].data[0].toggle?((0,e.wg)(),(0,e.iD)("label",F," upcom ")):(0,e.kq)("",!0)]),(0,e._)("button",{class:"btn btn-primary float-right",onClick:s[6]||(s[6]=t=>q.uploadFilm(this.$route.params.id))},"Сохранить"),(0,e._)("button",{class:"btn btn-primary float-right",onClick:s[7]||(s[7]=t=>q.resetFilm())},"Вернуть базовую версию")])])])])])),_:1})],64)}i(7658);var q=i(2392),x=i(6650),V=i(3247),Z=i(2422),B={components:{Loader:Z.Z},created(){this.id=this.$route.params.id},data(){return{file:null}},methods:{bannerSelect(){this.file=this.$refs.bannerSelect.files[0],this.$store.state.films.currentList[this.$route.params.id].images[0].cover.image=this.file,this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url=URL.createObjectURL(this.file)},async uploadFilm(t){for(let i=0;i<this.$store.state.films.currentList[t].images.length;i++){if(null!==this.$store.state.films.currentList[t].images[0].cover.image)try{const s=(0,x.iH)(q.t,"films/cover/"+this.$store.state.films.currentList[t].name);await(0,x.KV)(s,this.$store.state.films.currentList[t].images[0].cover.image).then((async()=>{await(0,x.Jt)(s).then((s=>{this.$store.state.films.currentList[t].data[0].cover.url=s,this.uploadFilmData(t)}))}))}catch(s){console.log(s)}else this.uploadFilmData(t);if(0!==this.$store.state.films.currentList[t].images[0].deleted.length)for(let s=0;s<this.$store.state.films.currentList[t].images[0].deleted.length;s++){const i=(0,x.iH)(q.t,"films/gallery/"+this.$store.state.films.currentList[t].images[0].deleted[s]);await(0,x.oq)(i).then((()=>{this.$store.state.films.currentList[t].images[0].deleted.splice(s,1)})).catch((t=>{console.log(t)}))}this.uploadFilmData(t)}this.$router.push({name:"films"})},async uploadFilmData(t){const s={data:this.$store.state.films.currentList[t].data};await(0,V.pl)((0,V.JU)(q.db,"films",this.$store.state.films.currentList[t].name),s).then((()=>{this.uploaded=!0}))},async resetFilm(t){if(this.loading=!0,this.movieList[t].uploaded){for(let e=0;e<this.movieList[t].images.length;e++)this.movieList[t].images[e].main.name=null,this.movieList[t].images[e].main.image=null,this.movieList[t].images[e].main.url=null,this.movieList[t].images[e].gallery=[],this.movieList[t].images[e].deleted=[];const s=(0,V.JU)(q.db,"movies",this.movieList[t].name),i=await(0,V.QT)(s);if(i.exists()){this.movieList[t].data=i.data().data;for(let s=0;s<this.movieList[t].data.length;s++){this.movieList[t].images[s].main.name=this.movieList[t].data[s].main.name,this.movieList[t].images[s].main.url=this.movieList[t].data[s].main.url;for(let i=0;i<this.movieList[t].data[s].gallery.length;i++)this.movieList[t].images[s].gallery.push({id:this.movieList[t].data[s].gallery.length,name:this.movieList[t].data[s].gallery[i].name,uploaded:!0,image:null,url:this.movieList[t].data[s].gallery[i].url})}}}this.loading=!1}}},H=i(3744);const J=(0,H.Z)(B,[["render",S],["__scopeId","data-v-ac8a88c4"]]);var I=J}}]);
//# sourceMappingURL=231.f5d794d1.js.map