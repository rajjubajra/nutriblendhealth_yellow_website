(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{1115:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/health_blogs",function(){return l(9766)}])},2654:function(e,i,l){"use strict";var t=l(5893);i.Z=function(e){let{children:i}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"dark:hidden triangle-left-corner z-0 absolute top-0 left-0"}),i]})}},4308:function(e,i,l){"use strict";var t=l(5893);l(7294),i.Z=function(e){let{name:i}=e;return(0,t.jsxs)("div",{className:"w-40 h-10 border flex justify-center items-center uppercase text-sm group hover:drop-shadow-md hover:border-slate-950",children:[(0,t.jsx)("div",{className:"w-3 h-3 bg-red-500 dark:bg-red-500 mr-5 group-hover:bg-green-500 group-hover:rounded-full duration-300"}),(0,t.jsx)("div",{className:"group-hover:text-red-900 dark:group-hover:text-slate-200",children:i})]})}},4030:function(e,i,l){"use strict";l.d(i,{Z:function(){return j}});var t=l(5893),a=l(777),d=l(491),n=l(5121);let o=async()=>(await n.Z.get("".concat(d.g.url,"/jsonapi/node/article"),{headers:{Accept:"application/vnd.api+json"}})).data;var r=l(4638),s=l(5675),u=l.n(s),c=function(e){let{object:i}=e;return(0,t.jsx)("div",{children:(0,t.jsx)(u(),{className:"md:w-64 w-full h-64  object-cover shadow-md",src:"".concat(d.g.uri).concat(i.url),width:i.width,height:i.height,alt:i.alt})})},v=l(1664),m=l.n(v),h=function(e){let{dt:i}=e,l=new Date(i);return(0,t.jsxs)("div",{className:"uppercase text-sm",children:[["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][l.getMonth()]," ",l.getDate(),", ",l.getFullYear()]})},p=l(4308),f=function(e){let{item:i}=e;return(0,t.jsxs)("div",{className:"relative body-font min-h-72",children:[(0,t.jsx)("div",{children:(0,t.jsx)(h,{dt:i.attributes.changed})}),(0,t.jsx)("h1",{className:"my-5",children:i.attributes.title}),(0,t.jsx)("div",{className:"pb-20 md:pb-5",dangerouslySetInnerHTML:{__html:i.attributes.body.summary}}),(0,t.jsx)("div",{className:"absolute bottom-0",children:(0,t.jsx)(m(),{href:"/health_blogs/".concat(i.id),children:(0,t.jsx)(p.Z,{name:"Read more"})})})]})},g=l(6446),_=l(6265),j=function(){var e;let{mediaImage:i}=(0,r.C)(),{data:l,isLoading:d,isError:n}=function(){let{data:e,isLoading:i,isError:l}=(0,a.a)({queryKey:["blogs"],queryFn:o});return{data:e,isLoading:i,isError:l}}();return d?(0,t.jsx)(g.Z,{}):n?(0,t.jsx)(_.Z,{}):(0,t.jsx)("div",{className:"py-10 grid  grid-cols-1",children:l&&(null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.map(e=>{let l=i.find(i=>i.id===e.relationships.field_image_media.data.id);return(0,t.jsxs)("div",{className:"grid gap-10 md:grid-cols-4 my-5 p-3 md:p-8 drop-shadow-sm border border-slate-400",children:[(0,t.jsx)("div",{className:"lg:col-span-1 md:col-span-2",children:l&&(0,t.jsx)(c,{object:l})}),(0,t.jsx)("div",{className:"lg:col-span-3 md:col-span-2",children:(0,t.jsx)(f,{item:e})})]},e.id)}))})}},7383:function(e,i,l){"use strict";l.d(i,{Z:function(){return c}});var t=l(5893),a=l(1059),d=l.n(a),n=l(777),o=l(491),r=l(5121),s=l(6446),u=l(6265),c=function(e){var i,l;let{title:a}=e,{data:c,isError:v,isLoading:m}=function(e){let i=async()=>(await r.Z.get("".concat(o.g.url,"/jsonapi/node/page_title/").concat(e),{headers:{Accept:"application/vnd.api+json"}})).data,{data:l,isLoading:t,isError:a}=(0,n.a)({queryKey:["pagetitle"],queryFn:i});return{data:l,isLoading:t,isError:a}}(a);return m?(0,t.jsx)(s.Z,{}):v?(0,t.jsx)(u.Z,{}):(0,t.jsx)("div",{className:"w-full text-center my-14 ".concat(d().className),children:(0,t.jsx)("h1",{className:"uppercase",children:c&&(null==c?void 0:null===(l=c.data)||void 0===l?void 0:null===(i=l.attributes)||void 0===i?void 0:i.field_page_title)})})}},4638:function(e,i,l){"use strict";l.d(i,{C:function(){return r}});var t=l(7294),a=l(777),d=l(491),n=l(5121);let o=async()=>(await n.Z.get("".concat(d.g.url,"/jsonapi/media/image?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data;function r(){let[e,i]=(0,t.useState)([]),{data:l,isLoading:d,isError:n}=(0,a.a)({queryKey:["media_image"],queryFn:o});return console.log("media image data",l),(0,t.useEffect)(()=>{var e;let t=(e,i)=>{var l,t;let a=e.find(e=>e.id===i);return null==a?void 0:null===(t=a.attributes)||void 0===t?void 0:null===(l=t.uri)||void 0===l?void 0:l.url},a=[];l&&(null==l||null===(e=l.data)||void 0===e||e.map(e=>{var i,d,n,o,r,s,u,c,v,m,h,p,f,g,_,j,x,b,y,N;return a.push({id:null==e?void 0:e.id,imageId:null==e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(d=n.field_media_image)||void 0===d?void 0:null===(i=d.data)||void 0===i?void 0:i.id,alt:null==e?void 0:null===(u=e.relationships)||void 0===u?void 0:null===(s=u.field_media_image)||void 0===s?void 0:null===(r=s.data)||void 0===r?void 0:null===(o=r.meta)||void 0===o?void 0:o.alt,width:null==e?void 0:null===(m=e.relationships)||void 0===m?void 0:null===(v=m.field_media_image)||void 0===v?void 0:null===(c=v.data.meta)||void 0===c?void 0:c.width,height:null==e?void 0:null===(f=e.relationships)||void 0===f?void 0:null===(p=f.field_media_image)||void 0===p?void 0:null===(h=p.data.meta)||void 0===h?void 0:h.height,imageTitle:null==e?void 0:null===(x=e.relationships)||void 0===x?void 0:null===(j=x.field_media_image)||void 0===j?void 0:null===(_=j.data)||void 0===_?void 0:null===(g=_.meta)||void 0===g?void 0:g.title,url:t(null==l?void 0:l.included,null==e?void 0:null===(N=e.relationships)||void 0===N?void 0:null===(y=N.field_media_image)||void 0===y?void 0:null===(b=y.data)||void 0===b?void 0:b.id)})})),i(a)},[l]),{mediaImage:e,isLoading:d,isError:n}}},9766:function(e,i,l){"use strict";l.r(i);var t=l(5893),a=l(4030),d=l(7383),n=l(2654);i.default=function(){return(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(d.Z,{title:"4018928b-b153-421d-a646-afd02db33694"}),(0,t.jsx)(a.Z,{})]})}},1059:function(e){e.exports={style:{fontFamily:"'__Julius_Sans_One_10341e', '__Julius_Sans_One_Fallback_10341e'",fontWeight:400,fontStyle:"normal"},className:"__className_10341e"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1115)}),_N_E=e.O()}]);