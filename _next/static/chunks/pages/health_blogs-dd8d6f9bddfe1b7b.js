(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{1115:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/health_blogs",function(){return l(9766)}])},4308:function(e,i,l){"use strict";var a=l(5893);l(7294),i.Z=function(e){let{name:i}=e;return(0,a.jsxs)("div",{className:"w-40 h-10 border flex justify-center items-center uppercase text-sm group hover:drop-shadow-md hover:border-slate-950",children:[(0,a.jsx)("div",{className:"w-3 h-3 bg-red-500 dark:bg-red-500 mr-5 group-hover:bg-green-500 group-hover:rounded-full duration-300"}),(0,a.jsx)("div",{className:"group-hover:text-red-900 dark:group-hover:text-slate-200",children:i})]})}},4030:function(e,i,l){"use strict";l.d(i,{Z:function(){return j}});var a=l(5893),t=l(7633),d=l(491),n=l(5121);let o=async()=>(await n.Z.get("".concat(d.g.url,"/jsonapi/node/article"),{headers:{Accept:"application/vnd.api+json"}})).data;var r=l(4638),s=l(5675),u=l.n(s),c=function(e){let{object:i}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(u(),{className:"md:w-64 w-full h-64  object-cover shadow-md",src:"".concat(d.g.uri).concat(i.url),width:i.width,height:i.height,alt:i.alt})})},v=l(1664),m=l.n(v),h=function(e){let{dt:i}=e,l=new Date(i);return(0,a.jsxs)("div",{className:"uppercase text-sm",children:[["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][l.getMonth()]," ",l.getDate(),", ",l.getFullYear()]})},p=l(4308),g=function(e){let{item:i}=e;return(0,a.jsxs)("div",{className:"relative body-font min-h-72",children:[(0,a.jsx)("div",{children:(0,a.jsx)(h,{dt:i.attributes.changed})}),(0,a.jsx)("h1",{className:"my-5",children:i.attributes.title}),(0,a.jsx)("div",{className:"pb-20 md:pb-5",dangerouslySetInnerHTML:{__html:i.attributes.body.summary}}),(0,a.jsx)("div",{className:"absolute bottom-0",children:(0,a.jsx)(m(),{href:"/health_blogs/".concat(i.id),children:(0,a.jsx)(p.Z,{name:"Read more"})})})]})},f=l(6446),_=l(6265),j=function(){var e;let{mediaImage:i}=(0,r.C)(),{data:l,isLoading:d,isError:n}=function(){let{data:e,isLoading:i,isError:l}=(0,t.a)({queryKey:["blogs"],queryFn:o});return{data:e,isLoading:i,isError:l}}();return d?(0,a.jsx)(f.Z,{}):n?(0,a.jsx)(_.Z,{}):(0,a.jsx)("div",{className:"py-10 grid  grid-cols-1",children:l&&(null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.map(e=>{let l=i.find(i=>i.id===e.relationships.field_image_media.data.id);return(0,a.jsxs)("div",{className:"grid gap-10 md:grid-cols-4 my-5 p-3 md:p-8 drop-shadow-sm border border-slate-400",children:[(0,a.jsx)("div",{className:"lg:col-span-1 md:col-span-2",children:l&&(0,a.jsx)(c,{object:l})}),(0,a.jsx)("div",{className:"lg:col-span-3 md:col-span-2",children:(0,a.jsx)(g,{item:e})})]},e.id)}))})}},7383:function(e,i,l){"use strict";l.d(i,{Z:function(){return c}});var a=l(5893),t=l(1059),d=l.n(t),n=l(7633),o=l(491),r=l(5121),s=l(6446),u=l(6265),c=function(e){var i,l;let{title:t}=e,{data:c,isError:v,isLoading:m}=function(e){let i=async()=>(await r.Z.get("".concat(o.g.url,"/jsonapi/node/page_title/").concat(e),{headers:{Accept:"application/vnd.api+json"}})).data,{data:l,isLoading:a,isError:t}=(0,n.a)({queryKey:["pagetitle"],queryFn:i});return{data:l,isLoading:a,isError:t}}(t);return m?(0,a.jsx)(s.Z,{}):v?(0,a.jsx)(u.Z,{}):(0,a.jsx)("div",{className:"w-full text-center my-14 ".concat(d().className),children:(0,a.jsx)("h1",{className:"uppercase",children:c&&(null==c?void 0:null===(l=c.data)||void 0===l?void 0:null===(i=l.attributes)||void 0===i?void 0:i.field_page_title)})})}},4638:function(e,i,l){"use strict";l.d(i,{C:function(){return r}});var a=l(7294),t=l(7633),d=l(491),n=l(5121);let o=async()=>(await n.Z.get("".concat(d.g.url,"/jsonapi/media/image?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data;function r(){let[e,i]=(0,a.useState)([]),{data:l,isLoading:d,isError:n}=(0,t.a)({queryKey:["media_image"],queryFn:o});return console.log("media image data",l),(0,a.useEffect)(()=>{var e;let a=(e,i)=>{var l,a;let t=e.find(e=>e.id===i);return null==t?void 0:null===(a=t.attributes)||void 0===a?void 0:null===(l=a.uri)||void 0===l?void 0:l.url},t=[];l&&(null==l||null===(e=l.data)||void 0===e||e.map(e=>{var i,d,n,o,r,s,u,c,v,m,h,p,g,f,_,j,x,b,y,N;return t.push({id:null==e?void 0:e.id,imageId:null==e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(d=n.field_media_image)||void 0===d?void 0:null===(i=d.data)||void 0===i?void 0:i.id,alt:null==e?void 0:null===(u=e.relationships)||void 0===u?void 0:null===(s=u.field_media_image)||void 0===s?void 0:null===(r=s.data)||void 0===r?void 0:null===(o=r.meta)||void 0===o?void 0:o.alt,width:null==e?void 0:null===(m=e.relationships)||void 0===m?void 0:null===(v=m.field_media_image)||void 0===v?void 0:null===(c=v.data.meta)||void 0===c?void 0:c.width,height:null==e?void 0:null===(g=e.relationships)||void 0===g?void 0:null===(p=g.field_media_image)||void 0===p?void 0:null===(h=p.data.meta)||void 0===h?void 0:h.height,imageTitle:null==e?void 0:null===(x=e.relationships)||void 0===x?void 0:null===(j=x.field_media_image)||void 0===j?void 0:null===(_=j.data)||void 0===_?void 0:null===(f=_.meta)||void 0===f?void 0:f.title,url:a(null==l?void 0:l.included,null==e?void 0:null===(N=e.relationships)||void 0===N?void 0:null===(y=N.field_media_image)||void 0===y?void 0:null===(b=y.data)||void 0===b?void 0:b.id)})})),i(t)},[l]),{mediaImage:e,isLoading:d,isError:n}}},9766:function(e,i,l){"use strict";l.r(i);var a=l(5893),t=l(4030),d=l(7383);i.default=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(d.Z,{title:"4018928b-b153-421d-a646-afd02db33694"}),(0,a.jsx)(t.Z,{})]})}},1059:function(e){e.exports={style:{fontFamily:"'__Julius_Sans_One_10341e', '__Julius_Sans_One_Fallback_10341e'",fontWeight:400,fontStyle:"normal"},className:"__className_10341e"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1115)}),_N_E=e.O()}]);