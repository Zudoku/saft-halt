(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),u=t(14),i=t(15),l=t(2),m=t(3),s=t.n(m),f=function(){return s.a.get("".concat("/api","/persons")).then((function(e){return e.data}))},d=function(e){return s.a.post("".concat("/api","/persons"),e).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat("/api","/persons/").concat(e))},v=function(e,n){return s.a.put("".concat("/api","/persons/").concat(e),n).then((function(e){return e.data}))},h=function(e){var n=e.message;if(null===n)return null;var t=n.isError?{background:"#DC143C",padding:"10px",margin:"5px"}:{background:"#7FFF00",padding:"10px",margin:"5px"};return o.a.createElement("div",{style:t},n.text)},b=function(e){var n=e.persons,t=e.onRemove;return o.a.createElement("div",null,n.map((function(e){return o.a.createElement("div",{key:e.name},function(e,n){return o.a.createElement("div",null,e.name,"  ",e.number," ",o.a.createElement("button",{onClick:function(t){return n(e.id,e.name,t)}},"Remove from contacts"))}(e,t))})))},E=function(e){var n=e.newName,t=e.newNumber,a=e.onSubmit,r=e.onNameChanged,c=e.onNumberChanged;return o.a.createElement("form",{onSubmit:a},o.a.createElement("div",null,"name:",o.a.createElement("input",{onChange:r,value:n})),o.a.createElement("div",null,"number:",o.a.createElement("input",{onChange:c,value:t})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.onChange;return o.a.createElement("div",null,o.a.createElement("div",null,"Filter contacts with phone number or name:"),o.a.createElement("input",{type:"text",onChange:n}))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),s=m[0],w=m[1],C=Object(a.useState)(""),j=Object(l.a)(C,2),x=j[0],O=j[1],k=Object(a.useState)(""),y=Object(l.a)(k,2),F=y[0],N=y[1],S=Object(a.useState)(null),T=Object(l.a)(S,2),D=T[0],L=T[1],R=t.filter((function(e){var n=e.name.toLowerCase(),t=e.number.toLowerCase(),a=F.toLowerCase();return n.includes(a)||t.includes(a)}));return Object(a.useEffect)((function(){f().then((function(e){r(e)}))}),[]),o.a.createElement("div",null,o.a.createElement("h2",null,"Add a contact"),o.a.createElement(h,{message:D}),o.a.createElement(E,{newName:s,newNumber:x,onSubmit:function(e){var n=t.find((function(e){return e.name.toLowerCase()===s.toLowerCase()}));if(void 0===n){if(""===s||""===x)return alert("Please fill out the form completely."),void e.preventDefault();var a={name:s,number:x};d(a).then((function(e){var n=[].concat(Object(u.a)(t),[e]);r(n),L({isError:!1,text:"Added ".concat(e.name)}),setTimeout((function(){L(null)}),3e3)})).catch((function(e){L({isError:!0,text:"Failed to create ".concat(a.name,"!")}),setTimeout((function(){L(null)}),3e3)})),w(""),O(""),e.preventDefault()}else{if(window.confirm("".concat(s," can already be found from the phonebook. Do you want to replace the old phone number (").concat(n.number,") with a new one (").concat(x,")?"))){var o=Object(i.a)({},n,{number:x});console.log(o),v(n.id,o).then((function(e){var n=t.map((function(n){return n.id===e.id?e:n}));r(n),L({isError:!1,text:"Updated ".concat(e.name,"'s phone number to ").concat(e.number)}),setTimeout((function(){L(null)}),3e3),w(""),O("")})).catch((function(e){L({isError:!0,text:"Failed to update ".concat(n.name,"'s information!")}),setTimeout((function(){L(null)}),3e3)}))}e.preventDefault()}},onNameChanged:function(e){w(e.target.value)},onNumberChanged:function(e){O(e.target.value)}}),o.a.createElement("hr",null),o.a.createElement("h2",null,"Filter contacts"),o.a.createElement(g,{onChange:function(e){return N(e.target.value)}}),o.a.createElement("h2",null,"Contacts"),o.a.createElement(b,{persons:R,onRemove:function(e,n,a){window.confirm("Remove ".concat(n," from contacts?"))&&p(e).then((function(a){var o=t.filter((function(n){return n.id!==e}));r(o),L({isError:!1,text:"Removed ".concat(n)}),setTimeout((function(){L(null)}),3e3)})).catch((function(e){L({isError:!0,text:"Failed to remove ".concat(n," from contacts!")}),setTimeout((function(){L(null)}),3e3)}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.21035748.chunk.js.map