(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{8916:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact_us",function(){return s(3740)}])},7383:function(t,e,s){"use strict";s.d(e,{Z:function(){return d}});var n=s(5893),i=s(1059),a=s.n(i),r=s(777),l=s(491),o=s(5121),u=s(6446),c=s(6265),d=function(t){var e,s;let{title:i}=t,{data:d,isError:h,isLoading:p}=function(t){let e=async()=>(await o.Z.get("".concat(l.g.url,"/jsonapi/node/page_title/").concat(t),{headers:{Accept:"application/vnd.api+json"}})).data,{data:s,isLoading:n,isError:i}=(0,r.a)({queryKey:["pagetitle"],queryFn:e});return{data:s,isLoading:n,isError:i}}(i);return p?(0,n.jsx)(u.Z,{}):h?(0,n.jsx)(c.Z,{}):(0,n.jsx)("div",{className:"w-full text-center my-14 ".concat(a().className),children:(0,n.jsx)("h1",{className:"uppercase",children:d&&(null==d?void 0:null===(s=d.data)||void 0===s?void 0:null===(e=s.attributes)||void 0===e?void 0:e.field_page_title)})})}},3010:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return b}});var n=s(5893),i=s(7294),a=s(777),r=s(9289),l=s(7037),o=s(7506),u=s(4139),c=class extends o.l{#t;#e=void 0;#s;#n;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,u.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,u.Ym)(e.mutationKey)!==(0,u.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#a(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#a()}mutate(t,e){return this.#n=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#i(){let t=this.#s?.state??(0,r.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#a(t){l.V.batch(()=>{if(this.#n&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,e,s),this.#n.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#n.onError?.(t.error,e,s),this.#n.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},d=s(202),h=s(6290),p=s(491),m=s(5121);let v="md:w-96 w-64 border-b border-slate-500 px-2 py-3 my-2 outline-0  placeholder:font-thin bg-transparent placeholder:tracking-widest",f=async()=>(await m.Z.get("".concat(p.g.url,"/session/token"),{headers:{Accept:"application/vnd.api+json"}})).data;var b=function(){let[t,e]=(0,i.useState)(""),[s,r]=(0,i.useState)(""),[o,u]=(0,i.useState)(""),[m,b]=(0,i.useState)(""),{data:x,isLoading:g}=(0,a.a)({queryKey:["session_token"],queryFn:f});console.log("Session Token: ",x);let{mutate:y,isPending:j,isError:_,isSuccess:N}=function(t,e){let s=(0,d.NL)(void 0),[n]=i.useState(()=>new c(s,t));i.useEffect(()=>{n.setOptions(t)},[n,t]);let a=i.useSyncExternalStore(i.useCallback(t=>n.subscribe(l.V.batchCalls(t)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),r=i.useCallback((t,e)=>{n.mutate(t,e).catch(h.Z)},[n]);if(a.error&&(0,h.L)(n.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:r,mutateAsync:a.mutate}}({mutationFn:t=>fetch("".concat(p.g.url,"/webform_rest/submit"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json","x-csrf-token":x}}).then(t=>t.json())});return j?(0,n.jsx)("div",{children:"Pending"}):_?(0,n.jsx)("div",{children:"Error"}):N?(0,n.jsx)("div",{children:"Success sumitsson"}):(0,n.jsx)("div",{className:"relative w-full py-10 flex justify-center",children:(0,n.jsxs)("form",{className:"relative z-50 flex flex-col md:px-0 px-4",onSubmit:e=>(e.preventDefault(),y({webform_id:"contact_us",name:t,email:s,subject:o,message:m})),children:[(0,n.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,n.jsx)("input",{className:v,type:"text",name:"name",placeholder:"Name",onChange:t=>e(t.target.value),value:t,required:!0}),(0,n.jsx)("input",{className:v,type:"email",name:"email",placeholder:"Email*",onChange:t=>r(t.target.value),value:s,required:!0})]}),(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("input",{className:"w-full border-b border-slate-500 px-2 py-3 outline-0  placeholder:font-thin bg-transparent placeholder:tracking-widest",type:"text",name:"subject",placeholder:"Subject",onChange:t=>u(t.target.value),value:o})}),(0,n.jsx)("textarea",{className:"w-full h-40 border border-slate-500 px-4 py-3 outline-0 bg-transparent placeholder:font-thin placeholder:tracking-widest my-6",name:"message",placeholder:"Message*",onChange:t=>b(t.target.value),value:m,required:!0}),(0,n.jsx)("button",{className:"w-40 border py-2 cursor-pointer uppercase font-light tracking-wider border-slate-500 bg-slate-200 hover:bg-slate-800 hover:text-slate-200 duration-700",type:"submit",children:"Send"})]})})}},3740:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}});var n=s(5893),i=s(7383),a=s(3010),r=s(777),l=s(491),o=s(5121);let u=async()=>(await o.Z.get("".concat(l.g.url,"/jsonapi/node/contact_address"),{headers:{Accept:"application/vnd.api+json"}})).data;var c=function(){var t,e,s,i,a,l;let{data:o,isLoading:c,isError:d}=function(){let{data:t,isLoading:e,isError:s}=(0,r.a)({queryKey:["contact-address"],queryFn:u});return console.log("Contacta address: ",t),{data:t,isLoading:e,isError:s}}();return console.log(o),(0,n.jsx)("div",{className:"w-full flex justify-center pt-10",children:o&&(0,n.jsxs)("div",{className:"grid md:grid-cols-2 md:gap-20 gap-10",children:[(0,n.jsxs)("div",{className:"border w-72 p-10",children:[(0,n.jsx)("div",{className:"uppercase",children:null==o?void 0:null===(t=o.data[0])||void 0===t?void 0:t.attributes.title}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==o?void 0:null===(e=o.data[0])||void 0===e?void 0:e.attributes.body.value}})})]}),(0,n.jsxs)("div",{className:"border w-72 p-10",children:[(0,n.jsx)("div",{className:"uppercase",children:null==o?void 0:null===(s=o.data[1])||void 0===s?void 0:s.attributes.title}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==o?void 0:null===(i=o.data[1])||void 0===i?void 0:i.attributes.body.value}})})]}),(0,n.jsxs)("div",{className:"md:col-span-2 border h-40 flex flex-col justify-center items-center",children:[(0,n.jsx)("div",{className:"uppercase",children:null==o?void 0:null===(a=o.data[2])||void 0===a?void 0:a.attributes.title}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("div",{className:"text-2xl",dangerouslySetInnerHTML:{__html:null==o?void 0:null===(l=o.data[2])||void 0===l?void 0:l.attributes.body.value}})})]})]})})},d=function(){return(0,n.jsxs)("div",{className:"flex flex-col w-full min-h-screen",children:[(0,n.jsx)(i.Z,{title:"2b3170be-f369-4731-a11d-d002e91c793e"}),(0,n.jsx)(a.default,{}),(0,n.jsx)(c,{})]})}},1059:function(t){t.exports={style:{fontFamily:"'__Julius_Sans_One_10341e', '__Julius_Sans_One_Fallback_10341e'",fontWeight:400,fontStyle:"normal"},className:"__className_10341e"}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=8916)}),_N_E=t.O()}]);