(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[1],{127:function(e,a,t){e.exports={form_container:"Register_form_container__1fV2i",form:"Register_form__3L7pm",input:"Register_input__3dTDj",label:"Register_label__3sQNe",btn:"Register_btn__3WiAh"}},129:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(44),r=t(30),l=t(47),i=t(46),c=t(0),o=t(127),m=t.n(o),b=t(12),p=t(34),h=t(2),u=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.currentTarget,s=t.name,r=t.value;e.setState(Object(n.a)({},s,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.reset()},e.reset=function(){return e.setState({name:"",email:"",password:""})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return console.log("re-render"),Object(h.jsx)("div",{className:m.a.form_container,children:Object(h.jsxs)("form",{className:m.a.form,onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(h.jsxs)("label",{className:m.a.label,children:[Object(h.jsx)("span",{className:m.a.span,children:"Name"}),Object(h.jsx)("input",{className:m.a.input,type:"text",name:"name",value:a,onChange:this.handleChange})]}),Object(h.jsxs)("label",{className:m.a.label,children:["Email",Object(h.jsx)("input",{className:m.a.input,type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(h.jsxs)("label",{className:m.a.label,children:[Object(h.jsx)("span",{className:m.a.span,children:"Password"}),Object(h.jsx)("input",{className:m.a.input,type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(h.jsx)("button",{type:"submit",className:m.a.btn,children:"Sign Up"})]})})}}]),t}(c.Component),j={onRegister:p.d};a.default=Object(b.b)(null,j)(u)}}]);
//# sourceMappingURL=Register.3fb9059c.chunk.js.map