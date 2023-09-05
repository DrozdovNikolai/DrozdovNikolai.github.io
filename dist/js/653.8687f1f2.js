"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[653],{7653:function(e,t,s){s.r(t),s.d(t,{default:function(){return U}});var a=s(3396),n=s(9242),r=s(7139);const l=e=>((0,a.dD)("data-v-7e11c7e9"),e=e(),(0,a.Cn)(),e),i={class:"col col-xs-9 col-lg-12 mt-4 list"},c={class:"col col-12"},o={class:"mb-3 col col-12"},u=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),h={class:"col col-3 float-end"},g={key:0,class:"table"},d=l((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),_=l((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),p=l((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),m=l((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),P=l((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),b=l((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),y=[d,_,p,m,P,b],k={key:1,class:"table"},v=l((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"ФИО"),(0,a._)("th",null,"Телефон"),(0,a._)("th",null,"Email")])],-1))),w=["onClick"],f=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1))),C={class:"float-start"},L={class:"pagination"},D=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"chevron_left",-1))),Q=[D],$=["onClick"],x=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"chevron_right",-1))),A=[x],q={class:"float-end"};function R(e,t,s,l,d,_){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",c,[(0,a._)("div",o,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>_.navigateToAddListener&&_.navigateToAddListener(...e)),class:"btn btn-primary float-start",type:"button"},[u,(0,a.Uk)("Добавить Слушателя")]),(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>d.searchQuery=e),onInput:t[2]||(t[2]=(...e)=>_.updateSearchQuery&&_.updateSearchQuery(...e)),placeholder:"Поиск..."},null,544),[[n.nr,d.searchQuery]])])]),d.loading?((0,a.wg)(),(0,a.iD)("table",g,[(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.listenersPerPage,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e},y)))),128))])])):((0,a.wg)(),(0,a.iD)("table",k,[v,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.paginatedListeners,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.listener_id},[(0,a._)("td",null,(0,r.zw)(e.full_name),1),(0,a._)("td",null,(0,r.zw)(e.phone_number),1),(0,a._)("td",null,(0,r.zw)(e.email),1),(0,a._)("td",null,[(0,a._)("button",{onClick:t=>_.viewListenerDetail(e.id),class:"btn btn-primary btn-sm"},[f,(0,a.Uk)("Детали")],8,w)])])))),128))])])),(0,a._)("nav",C,[(0,a._)("ul",L,[(0,a._)("li",{class:(0,r.C_)(["page-item",{disabled:1===d.currentPage}])},[(0,a._)("button",{onClick:t[3]||(t[3]=(...e)=>_.prevPage&&_.prevPage(...e)),class:"btn page-link btn-sm"},Q)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.pageRange,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,r.C_)(["page-item",{active:e==d.currentPage}]),key:e},[(0,a._)("button",{onClick:t=>_.changePage(e),class:"btn page-link nmbr btn-sm"},(0,r.zw)(e),9,$)],2)))),128)),(0,a._)("li",{class:(0,r.C_)(["page-item",{disabled:d.currentPage===_.totalPages}])},[(0,a._)("button",{onClick:t[4]||(t[4]=(...e)=>_.nextPage&&_.nextPage(...e)),class:"btn page-link btn-sm"},A)],2)])]),(0,a._)("div",q,[(0,a._)("button",{onClick:t[5]||(t[5]=e=>_.viewRightsDetail()),class:"btn btn-primary btn-sm"},"Права ролей")])])])}s(7658);var S=s(5124),z={data(){return{listeners:[],currentPage:1,listenersPerPage:10,maxPageButtons:3,loading:!0,searchQuery:""}},computed:{totalPages(){const e=this.filterListeners();return Math.ceil(e.length/this.listenersPerPage)},paginatedListeners(){const e=(this.currentPage-1)*this.listenersPerPage,t=e+this.listenersPerPage,s=this.filterListeners();return s.slice(e,t)},pageRange(){const e=this.totalPages,t=this.currentPage,s=this.maxPageButtons,a="...";if(e<=s)return Array.from({length:e},((e,t)=>t+1));const n=Math.floor(s/2);let r=Math.max(1,t-n),l=Math.min(e,r+s-1);l-r+1<s&&(r=l-s+1);const i=[];r>1&&i.push(1,a);for(let c=r;c<=l;c++)i.push(c);return l<e&&i.push(a,e),i}},methods:{filterListeners(){const e=this.searchQuery.toLowerCase();return this.listeners.filter((t=>String(t.full_name).toLowerCase().includes(e)||String(t.phone_number).toLowerCase().includes(e)||String(t.email).includes(e)))},async loadListenersData(){try{const e=await S.Z.getAllListeners();this.listeners=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading listeners data:",e)}},updateSearchQuery(){const e={page:1};""!==this.searchQuery.trim()&&(e.search=this.searchQuery),this.currentPage=1,this.$router.replace({query:e})},changePage(e){const t={...this.$route.query,page:e};""!==this.searchQuery.trim()&&(t.search=this.searchQuery),this.$router.replace({query:t})},prevPage(){this.currentPage>1&&this.changePage(this.currentPage-1)},nextPage(){this.currentPage<this.totalPages&&this.changePage(this.currentPage+1)},viewListenerDetail(e){this.$router.push(`/listeners/${e}`)},viewRightsDetail(){this.$router.push("/Rights/listeners")},navigateToAddListener(){this.$router.push("/addListener")}},beforeRouteUpdate(e,t,s){this.searchQuery=e.query.search||"",this.currentPage=parseInt(e.query.page)||1,s()},created(){const e=this.$route.query;this.currentPage=parseInt(e.page)||1,this.searchQuery=e.search||"",this.loadListenersData()}},I=s(89);const M=(0,I.Z)(z,[["render",R],["__scopeId","data-v-7e11c7e9"]]);var U=M}}]);
//# sourceMappingURL=653.8687f1f2.js.map