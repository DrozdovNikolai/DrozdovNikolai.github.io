"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[831],{8831:function(e,a,t){t.r(a),t.d(a,{default:function(){return E}});var s=t(3396),o=t(7139),l=t(9242);const r=e=>((0,s.dD)("data-v-f6f1d92e"),e=e(),(0,s.Cn)(),e),d={class:"list"},n={key:0},i=(0,s.uE)('<div class="form-group" data-v-f6f1d92e><label class="form-control skeleton-text skeleton-animate" data-v-f6f1d92e></label><input type="text" class="form-control skeleton skeleton-animate" data-v-f6f1d92e></div><div class="form-group" data-v-f6f1d92e><label class="form-control skeleton-text skeleton-animate" data-v-f6f1d92e></label><input type="text" class="form-control skeleton skeleton-animate" data-v-f6f1d92e></div>',2),c=[i],m={key:1,class:"col-md-12"},u={class:"form-group"},f=r((()=>(0,s._)("label",{for:"prof_dir_id"},"Направление",-1))),p=["value"],_={class:"form-group"},v=r((()=>(0,s._)("label",{for:"prof_name"},"Название профиля",-1))),g={class:"form-group mt-3"},h=["disabled"],b={class:"spinner-border spinner-border-sm"};function k(e,a,t,r,i,k){const y=(0,s.up)("Select2"),w=(0,s.up)("Field"),D=(0,s.up)("ErrorMessage"),V=(0,s.up)("router-link"),x=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)("div",d,[i.dataLoading?((0,s.wg)(),(0,s.iD)("div",n,c)):((0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(x,{onSubmit:k.addProfile,"validation-schema":i.schema},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",null,[(0,s._)("div",u,[f,(0,s.Wm)(y,{class:(0,o.C_)({"form-control is-invalid":e.prof_dir_id}),modelValue:i.myValue,"onUpdate:modelValue":a[0]||(a[0]=e=>i.myValue=e),options:i.directions,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,s.Wm)(w,{name:"prof_dir_id",as:"select",modelValue:i.myValue,"onUpdate:modelValue":a[1]||(a[1]=e=>i.myValue=e),hidden:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.directions,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.id},(0,o.zw)(e.text),9,p)))),128))])),_:1},8,["modelValue"]),(0,s.Wm)(D,{name:"prof_dir_id",class:"error-feedback"})]),(0,s._)("div",_,[v,(0,s.Wm)(w,{name:"prof_name",type:"text",class:(0,o.C_)(["form-control",{"is-invalid":e.prof_name}])},null,8,["class"]),(0,s.Wm)(D,{name:"prof_name",class:"error-feedback"})]),(0,s._)("div",g,[(0,s._)("button",{class:"btn btn-primary btn-block",disabled:i.loading},[(0,s.wy)((0,s._)("span",b,null,512),[[l.F8,i.loading]]),(0,s.Uk)(" Добавить профиль ")],8,h),(0,s.Wm)(V,{to:"/profiles",class:"btn btn-secondary ml-2 float-end"},{default:(0,s.w5)((()=>[(0,s.Uk)("Отмена")])),_:1})])])])),_:1},8,["onSubmit","validation-schema"]),i.message?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,o.C_)(["alert",i.successful?"alert-success":"alert-danger"])},(0,o.zw)(i.message),3)):(0,s.kq)("",!0)]))])}var y=t(5708),w=t(7629),D=t(5124),V=t(4677),x={setup(){const e=(0,V.pm)();return{toast:e}},name:"AddProfile",components:{Form:y.l0,Field:y.gN,ErrorMessage:y.Bc},data(){const e=w.Ry().shape({});return{successful:!1,loading:!1,dataLoading:!0,message:"",schema:e,directions:null,myValue:""}},computed:{},mounted(){},methods:{async addProfile(e){try{this.loading=!0;const a=await D.Z.addProfile(e.prof_dir_id,e.prof_name);a.data,this.loading=!1,this.successful=!0,this.toast.success("Успешно добавили профиль!")}catch(a){this.message="Ошибка",this.toast.error("Ошибка добавления профиль"),console.error("Error:",a)}},async loadDirectionsData(){try{const e=await D.Z.getDirectionsAsIdText();this.directions=Array.isArray(e.data)?e.data:[e.data],this.dataLoading=!1}catch(e){console.error("Error:",e)}}},created(){this.loadDirectionsData()}},W=t(89);const C=(0,W.Z)(x,[["render",k],["__scopeId","data-v-f6f1d92e"]]);var E=C}}]);
//# sourceMappingURL=831.88806560.js.map