"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[540],{3540:function(a,e,t){t.r(e),t.d(e,{default:function(){return z}});var o=t(3396),l=t(7139),s=t(9242);const d=a=>((0,o.dD)("data-v-da8ae7fa"),a=a(),(0,o.Cn)(),a),n={class:"col-md-12 list"},r={key:0},i={class:"form-group"},c=d((()=>(0,o._)("label",{for:"listener_id"},"Слушатели",-1))),m=["value"],u={class:"form-group"},p=d((()=>(0,o._)("label",{for:"payer_id"},"Плательщики",-1))),f=["value"],v={class:"form-group"},_=d((()=>(0,o._)("label",{for:"required_amount"},"Требуемая сумма",-1))),k={class:"form-group"},y=d((()=>(0,o._)("label",{for:"deposited_amount"},"Внесённая сумма",-1))),b={class:"form-group"},g=d((()=>(0,o._)("label",{for:"expiration_date"},"Дата окончания срока ожидания выплаты",-1))),h={class:"form-group mt-3"},C=["disabled"],x={class:"spinner-border spinner-border-sm"},w={key:1},V=(0,o.uE)('<div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div><div class="form-group" data-v-da8ae7fa><label class="form-control skeleton-text skeleton-animate" data-v-da8ae7fa></label><input type="text" class="form-control skeleton skeleton-animate" data-v-da8ae7fa></div>',11),D=[V];function W(a,e,t,d,V,W){const U=(0,o.up)("Select2"),q=(0,o.up)("Field"),A=(0,o.up)("ErrorMessage"),I=(0,o.up)("router-link"),F=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)("div",n,[V.contract?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(F,{onSubmit:W.updateContract,"validation-schema":V.schema},{default:(0,o.w5)((({errors:a})=>[(0,o._)("div",null,[(0,o._)("div",i,[c,(0,o.Wm)(U,{class:(0,l.C_)({"form-control is-invalid":a.listener_id}),modelValue:V.editedContract.listener_id,"onUpdate:modelValue":e[0]||(e[0]=a=>V.editedContract.listener_id=a),options:V.listeners,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,o.Wm)(q,{name:"listener_id",as:"select",modelValue:V.editedContract.listener_id,"onUpdate:modelValue":e[1]||(e[1]=a=>V.editedContract.listener_id=a),hidden:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(V.listeners,(a=>((0,o.wg)(),(0,o.iD)("option",{key:a.id,value:a.id},(0,l.zw)(a.text),9,m)))),128))])),_:1},8,["modelValue"]),(0,o.Wm)(A,{name:"listener_id",class:"error-feedback"})]),(0,o._)("div",u,[p,(0,o.Wm)(U,{class:(0,l.C_)({"form-control is-invalid":a.payer_id}),modelValue:V.editedContract.payer_id,"onUpdate:modelValue":e[2]||(e[2]=a=>V.editedContract.payer_id=a),options:V.payers,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,o.Wm)(q,{name:"payer_id",as:"select",modelValue:V.editedContract.payer_id,"onUpdate:modelValue":e[3]||(e[3]=a=>V.editedContract.payer_id=a),hidden:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(V.payers,(a=>((0,o.wg)(),(0,o.iD)("option",{key:a.id,value:a.id},(0,l.zw)(a.text),9,f)))),128))])),_:1},8,["modelValue"]),(0,o.Wm)(A,{name:"payer_id",class:"error-feedback"})]),(0,o._)("div",v,[_,(0,o.Wm)(q,{name:"required_amount",type:"text",value:"",class:(0,l.C_)(["form-control",{"is-invalid":a.required_amount}]),modelValue:V.editedContract.required_amount,"onUpdate:modelValue":e[4]||(e[4]=a=>V.editedContract.required_amount=a)},null,8,["class","modelValue"]),(0,o.Wm)(A,{name:"required_amount",class:"error-feedback"})]),(0,o._)("div",k,[y,(0,o.Wm)(q,{name:"deposited_amount",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":a.deposited_amount}]),value:"",modelValue:V.editedContract.deposited_amount,"onUpdate:modelValue":e[5]||(e[5]=a=>V.editedContract.deposited_amount=a)},null,8,["class","modelValue"]),(0,o.Wm)(A,{name:"deposited_amount",class:"error-feedback"})]),(0,o._)("div",b,[g,(0,o.Wm)(q,{name:"expiration_date",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":a.expiration_date}]),value:"",modelValue:V.editedContract.expiration_date,"onUpdate:modelValue":e[6]||(e[6]=a=>V.editedContract.expiration_date=a)},null,8,["class","modelValue"]),(0,o.Wm)(A,{name:"expiration_date",class:"error-feedback"})]),(0,o._)("div",h,[(0,o._)("button",{class:"btn btn-primary btn-block float-start",disabled:V.loading},[(0,o.wy)((0,o._)("span",x,null,512),[[s.F8,V.loading]]),(0,o.Uk)(" Обновить контракт ")],8,C),(0,o.Wm)(I,{to:"/contracts",class:"btn btn-secondary ml-2 float-end"},{default:(0,o.w5)((()=>[(0,o.Uk)("Отмена")])),_:1})])])])),_:1},8,["onSubmit","validation-schema"])])):((0,o.wg)(),(0,o.iD)("div",w,D)),a.message?((0,o.wg)(),(0,o.iD)("div",{key:2,class:(0,l.C_)(["alert",a.successful?"alert-success":"alert-danger"])},(0,l.zw)(a.message),3)):(0,o.kq)("",!0)])}var U=t(5708),q=t(7629),A=t(5124),I=t(4677),F={setup(){const a=(0,I.pm)();return{toast:a}},components:{Form:U.l0,Field:U.gN,ErrorMessage:U.Bc},data(){const a=q.Ry().shape({});return{schema:a,loading:!1,contract:null,editedContract:null,listeners:null,payers:null}},methods:{async loadContractDetail(){const a=this.$route.params.contractId;try{const e=await A.Z.getContractById(a);this.contract=e.data,this.editedContract={...e.data}}catch(e){console.error("Error loading contract details:",e)}},async updateContract(){try{this.loading=!0;const a=await A.Z.updateContractById(this.contract.id,this.editedContract.listener_id,this.editedContract.payer_id,this.editedContract.required_amount,this.editedContract.deposited_amount,this.editedContract.expiration_date);a.data,this.contract={...this.editedContract},this.loading=!1,this.toast.success("Успешно обновили!")}catch(a){console.error("Ошибка загрузки данных:",a)}},async loadListenersData(){try{const a=await A.Z.getListenersAsIdText();this.listeners=Array.isArray(a.data)?a.data:[a.data]}catch(a){console.error("Ошибка загрузки данных:",a)}},async loadPayersData(){try{const a=await A.Z.getPayersAsIdText();this.payers=Array.isArray(a.data)?a.data:[a.data]}catch(a){console.error("Ошибка загрузки данных:",a)}}},created(){this.loadListenersData(),this.loadPayersData(),this.loadContractDetail()}},Z=t(89);const E=(0,Z.Z)(F,[["render",W],["__scopeId","data-v-da8ae7fa"]]);var z=E}}]);
//# sourceMappingURL=540.97859f6a.js.map