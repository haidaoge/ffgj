(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b30ebea"],{"0c73":function(n,t,e){},"2eda":function(n,t,e){},a122:function(n,t,e){"use strict";var o=e("0c73"),i=e.n(o);i.a},d081:function(n,t,e){"use strict";var o=e("2eda"),i=e.n(o);i.a},d9c9:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginFrom",staticClass:"login-form",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules}},[e("h3",{staticClass:"title"},[n._v("飞防管家")]),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"fontcontainer"},[e("span",{staticClass:"iconfont icon-yonghu"})]),e("el-input",{attrs:{name:"usernane",type:"text",autoComplete:"on",placeholder:"用户名"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"fontcontainer"},[e("span",{staticClass:"iconfont icon-mima"})]),e("el-input",{attrs:{name:"password",type:n.pwdType,autoComplete:"on",placeholder:"密码"},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.handleLogin(t):null}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),e("span",{staticClass:"show-pwd iconfont icon-yanjing",on:{click:n.showPwd}})],1),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v("登录")])],1)],1)],1)},i=[];function a(n){var t=["admin","editor"];return t.indexOf(n.trim())>=0}var r={name:"ligin",data:function(){var n=function(n,t,e){a(t)?e():e(new Error("请输入正确的用户名"))},t=function(n,t,e){t.length<6?e(new Error("密码不能小于6位")):e()};return{loginForm:{username:"admin",password:"123456"},loginRules:{username:[{required:!0,trigger:"blur",validetor:n}],paddword:[{required:!0,trigger:"blur",validetor:t}]},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$res.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("Login",n.loginForm).then(function(){n.loading=!1,n.router.push({path:"/"})}).catch(function(){n.loading=!1})})}}},s=r,l=(e("a122"),e("d081"),e("2877")),c=Object(l["a"])(s,o,i,!1,null,"c16abfae",null);c.options.__file="index.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5b30ebea.58f89d4c.js.map