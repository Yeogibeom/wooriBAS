(function(){"use strict";var e={207:function(e,r,n){var o=n(751),t=n(641);const s={id:"app"};function i(e,r,n,o,i,a){const c=(0,t.g2)("UserLogin");return(0,t.uX)(),(0,t.CE)("div",s,[(0,t.bF)(c)])}var a=n(33);const c={class:"d-flex justify-content-center align-items-center vh-100 bg-light"},u={class:"card shadow",style:{width:"400px"}},l={class:"card-body"},d={class:"form-group"},f={class:"form-group"},p={key:0,class:"text-danger small mb-3"};function b(e,r,n,s,i,b){return(0,t.uX)(),(0,t.CE)("div",c,[(0,t.Lk)("div",u,[(0,t.Lk)("div",l,[r[7]||(r[7]=(0,t.Lk)("h2",{class:"text-center mb-4"},"Woori BAS",-1)),(0,t.Lk)("form",{onSubmit:r[2]||(r[2]=(0,o.D$)(((...e)=>b.handleLogin&&b.handleLogin(...e)),["prevent"]))},[(0,t.Lk)("div",d,[r[3]||(r[3]=(0,t.Lk)("label",{for:"userid"},"아이디",-1)),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>i.userid=e),id:"userid",class:"form-control",placeholder:"아이디 입력",required:""},null,512),[[o.Jo,i.userid]])]),(0,t.Lk)("div",f,[r[4]||(r[4]=(0,t.Lk)("label",{for:"password"},"비밀번호",-1)),(0,t.bo)((0,t.Lk)("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=e=>i.password=e),id:"password",class:"form-control",placeholder:"비밀번호 입력",required:""},null,512),[[o.Jo,i.password]])]),i.errorMessage?((0,t.uX)(),(0,t.CE)("div",p,(0,a.v_)(i.errorMessage),1)):(0,t.Q3)("",!0),r[5]||(r[5]=(0,t.Lk)("div",{class:"form-check mb-3"},[(0,t.Lk)("input",{type:"checkbox",id:"rememberMe",class:"form-check-input"}),(0,t.Lk)("label",{class:"form-check-label",for:"rememberMe"},"아이디 저장")],-1)),r[6]||(r[6]=(0,t.Lk)("button",{type:"submit",class:"btn btn-primary btn-block"},"로그인",-1))],32)])])])}var v=n(335),h={name:"UserLogin",data(){return{userid:"",password:"",errorMessage:null}},methods:{async handleLogin(){try{const e=await v.A.post("http://localhost:8080/login",{userid:this.userid,password:this.password});alert(e.data)}catch(e){this.errorMessage="아이디 또는 비밀번호가 잘못되었습니다.",console.error(e)}}}},m=n(262);const g=(0,m.A)(h,[["render",b],["__scopeId","data-v-42bc059b"]]);var k=g,y={name:"App",components:{UserLogin:k}};const L=(0,m.A)(y,[["render",i]]);var w=L;(0,o.Ef)(w).mount("#app")}},r={};function n(o){var t=r[o];if(void 0!==t)return t.exports;var s=r[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(r,o,t,s){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],t=e[l][1],s=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(l--,1);var u=t();void 0!==u&&(r=u)}}return r}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,t,s]}}(),function(){n.d=function(e,r){for(var o in r)n.o(r,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(r){return 0===e[r]};var r=function(r,o){var t,s,i=o[0],a=o[1],c=o[2],u=0;if(i.some((function(r){return 0!==e[r]}))){for(t in a)n.o(a,t)&&(n.m[t]=a[t]);if(c)var l=c(n)}for(r&&r(o);u<i.length;u++)s=i[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(207)}));o=n.O(o)})();
//# sourceMappingURL=app.678bd50f.js.map