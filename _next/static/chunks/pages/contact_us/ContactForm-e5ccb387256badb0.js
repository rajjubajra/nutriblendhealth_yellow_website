(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{1155:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact_us/ContactForm",function(){return s(3010)}])},3010:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return g}});var n=s(5893),r=s(7294),i=s(777),a=s(9289),o=s(7037),u=s(7506),l=s(4139),c=class extends u.l{#t;#e=void 0;#s;#n;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,l.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,l.Ym)(e.mutationKey)!==(0,l.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#r(),this.#i(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#r(),this.#i()}mutate(t,e){return this.#n=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#r(){let t=this.#s?.state??(0,a.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#i(t){o.V.batch(()=>{if(this.#n&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#n.onSuccess?.(t.data,e,s),this.#n.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#n.onError?.(t.error,e,s),this.#n.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}},h=s(202),d=s(6290),p=s(491),m=s(5121),f=s(8530);let b="md:w-96 w-64 border-b border-slate-500 px-2 py-3 my-2 outline-0  placeholder:font-thin bg-transparent placeholder:tracking-widest",v=async()=>(await m.Z.get("".concat(p.g.url,"/session/token"),{headers:{Accept:"application/vnd.api+json"}})).data;var g=function(){let[t,e]=(0,r.useState)(""),[s,a]=(0,r.useState)(""),[u,l]=(0,r.useState)(""),[m,g]=(0,r.useState)(""),{data:y,isLoading:x}=(0,i.a)({queryKey:["session_token"],queryFn:v});console.log("Session Token: ",y);let{mutate:w,isPending:j,isError:O,isSuccess:_}=function(t,e){let s=(0,h.NL)(void 0),[n]=r.useState(()=>new c(s,t));r.useEffect(()=>{n.setOptions(t)},[n,t]);let i=r.useSyncExternalStore(r.useCallback(t=>n.subscribe(o.V.batchCalls(t)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),a=r.useCallback((t,e)=>{n.mutate(t,e).catch(d.Z)},[n]);if(i.error&&(0,d.L)(n.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:a,mutateAsync:i.mutate}}({mutationFn:t=>fetch("".concat(p.g.url,"/webform_rest/submit"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json","x-csrf-token":y}}).then(t=>t.json())});return j?(0,n.jsx)("div",{className:"text-center body-font",children:"Pending"}):O?(0,n.jsx)("div",{className:"text-center body-font",children:"Error"}):_?(0,n.jsx)(f.default,{}):(0,n.jsx)("div",{className:"relative w-full py-10 flex justify-center",children:(0,n.jsxs)("form",{className:"relative z-50 flex flex-col md:px-0 px-4",onSubmit:e=>(e.preventDefault(),w({webform_id:"contact_us",name:t,email:s,subject:u,message:m})),children:[(0,n.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,n.jsx)("input",{className:b,type:"text",name:"name",placeholder:"Name",onChange:t=>e(t.target.value),value:t,required:!0}),(0,n.jsx)("input",{className:b,type:"email",name:"email",placeholder:"Email*",onChange:t=>a(t.target.value),value:s,required:!0})]}),(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("input",{className:"w-full border-b border-slate-500 px-2 py-3 outline-0  placeholder:font-thin bg-transparent placeholder:tracking-widest",type:"text",name:"subject",placeholder:"Subject",onChange:t=>l(t.target.value),value:u})}),(0,n.jsx)("textarea",{className:"w-full h-40 border border-slate-500 px-4 py-3 outline-0 bg-transparent placeholder:font-thin placeholder:tracking-widest my-6",name:"message",placeholder:"Message*",onChange:t=>g(t.target.value),value:m,required:!0}),(0,n.jsx)("button",{className:"w-40 border py-2 cursor-pointer uppercase font-light tracking-wider border-slate-500 bg-slate-200 hover:bg-slate-800 hover:text-slate-200 duration-700",type:"submit",children:"Send"})]})})}},8530:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return u}});var n=s(5893),r=s(777),i=s(491),a=s(5121);let o=async()=>(await a.Z.get("".concat(i.g.url,"/jsonapi/node/form_confirmation_message"),{headers:{Accept:"application/vnd.api+json"}})).data;var u=function(){var t;let{data:e,isError:s}=function(){let{data:t,isLoading:e,isError:s}=(0,r.a)({queryKey:["form-confirmation"],queryFn:o});return{data:t,isLoading:e,isError:s}}();return s?null:(0,n.jsx)("div",{className:"w-full text-center body-font",children:e&&(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.map(t=>(0,n.jsx)("div",{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:t.attributes.body.value}})},t.id)))})}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=1155)}),_N_E=t.O()}]);