(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{4918:function(i,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return l(5153)}])},2696:function(i,e,l){"use strict";l.d(e,{Z:function(){return u}});var d=l(5893),a=l(7294),n=l(777),t=l(491),o=l(5121),r=l(6446),u=function(i){var e,l,u;let{children:s}=i,{backgroundImage:v,bgLoading:c,bgError:f}=function(){let i="".concat(t.g.url,"/jsonapi/node/background_image"),e=async()=>(await o.Z.get(i,{headers:{Accept:"application/vnd.api+json"}})).data,[l,d]=(0,a.useState)(),{data:r,isLoading:u,isError:s}=(0,n.a)({queryKey:["bg-product"],queryFn:e});(0,a.useEffect)(()=>{var i,e,l,a;let n=null==r?void 0:null===(i=r.data)||void 0===i?void 0:i.find(i=>{var e,l,d,a;return(null===(a=i.relationships)||void 0===a?void 0:null===(d=a.field_page_tag)||void 0===d?void 0:null===(l=d.data)||void 0===l?void 0:null===(e=l.meta)||void 0===e?void 0:e.drupal_internal__target_id)===4});d(null==n?void 0:null===(a=n.relationships)||void 0===a?void 0:null===(l=a.field_image_media)||void 0===l?void 0:null===(e=l.data)||void 0===e?void 0:e.id)},[r]);let v=async()=>(await o.Z.get("".concat(t.g.url,"/jsonapi/media/image/").concat(l,"?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data,{data:c,isError:f,isLoading:m}=(0,n.a)({queryKey:["bg_mediaimage"],queryFn:v});return{backgroundImage:c,bgLoading:m,bgError:f}}();return c?(0,d.jsx)(r.Z,{}):(0,d.jsxs)("div",{className:"md:px-10 px-2 ",children:[(0,d.jsx)("div",{style:{backgroundImage:"url(".concat(t.g.uri).concat(null==v?void 0:null===(u=v.included[0])||void 0===u?void 0:null===(l=u.attributes)||void 0===l?void 0:null===(e=l.uri)||void 0===e?void 0:e.url,")")},className:"fixed h-screen left-0 right-0 top-0 z-0 bg-cover bg-center bg-no-repeat w-full opacity-20"}),s]})}},7383:function(i,e,l){"use strict";l.d(e,{Z:function(){return v}});var d=l(5893),a=l(1059),n=l.n(a),t=l(777),o=l(491),r=l(5121),u=l(6446),s=l(6265),v=function(i){var e,l;let{title:a}=i,{data:v,isError:c,isLoading:f}=function(i){let e=async()=>(await r.Z.get("".concat(o.g.url,"/jsonapi/node/page_title/").concat(i),{headers:{Accept:"application/vnd.api+json"}})).data,{data:l,isLoading:d,isError:a}=(0,t.a)({queryKey:["pagetitle"],queryFn:e});return{data:l,isLoading:d,isError:a}}(a);return f?(0,d.jsx)(u.Z,{}):c?(0,d.jsx)(s.Z,{}):(0,d.jsx)("div",{className:"relative z-30 my-14 ".concat(n().className),children:(0,d.jsx)("h1",{className:"uppercase font-bold text-orange-700 md:text-4xl",children:v&&(null==v?void 0:null===(l=v.data)||void 0===l?void 0:null===(e=l.attributes)||void 0===e?void 0:e.field_page_title)})})}},4638:function(i,e,l){"use strict";l.d(e,{C:function(){return r}});var d=l(7294),a=l(777),n=l(491),t=l(5121);let o=async()=>(await t.Z.get("".concat(n.g.url,"/jsonapi/media/image?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data;function r(){let[i,e]=(0,d.useState)([]),{data:l,isLoading:n,isError:t}=(0,a.a)({queryKey:["media_image"],queryFn:o});return(0,d.useEffect)(()=>{var i;let d=(i,e)=>{var l,d;let a=i.find(i=>i.id===e);return null==a?void 0:null===(d=a.attributes)||void 0===d?void 0:null===(l=d.uri)||void 0===l?void 0:l.url},a=[];l&&(null==l||null===(i=l.data)||void 0===i||i.map(i=>{var e,n,t,o,r,u,s,v,c,f,m,g,p,_,h,b,j,x,y,w;return a.push({id:null==i?void 0:i.id,imageId:null==i?void 0:null===(t=i.relationships)||void 0===t?void 0:null===(n=t.field_media_image)||void 0===n?void 0:null===(e=n.data)||void 0===e?void 0:e.id,alt:null==i?void 0:null===(s=i.relationships)||void 0===s?void 0:null===(u=s.field_media_image)||void 0===u?void 0:null===(r=u.data)||void 0===r?void 0:null===(o=r.meta)||void 0===o?void 0:o.alt,width:null==i?void 0:null===(f=i.relationships)||void 0===f?void 0:null===(c=f.field_media_image)||void 0===c?void 0:null===(v=c.data.meta)||void 0===v?void 0:v.width,height:null==i?void 0:null===(p=i.relationships)||void 0===p?void 0:null===(g=p.field_media_image)||void 0===g?void 0:null===(m=g.data.meta)||void 0===m?void 0:m.height,imageTitle:null==i?void 0:null===(j=i.relationships)||void 0===j?void 0:null===(b=j.field_media_image)||void 0===b?void 0:null===(h=b.data)||void 0===h?void 0:null===(_=h.meta)||void 0===_?void 0:_.title,url:d(null==l?void 0:l.included,null==i?void 0:null===(w=i.relationships)||void 0===w?void 0:null===(y=w.field_media_image)||void 0===y?void 0:null===(x=y.data)||void 0===x?void 0:x.id)})})),e(a)},[l]),{mediaImage:i,isLoading:n,isError:t}}},1445:function(i,e,l){"use strict";l.r(e);var d=l(5893);e.default=function(i){let{children:e}=i;return(0,d.jsx)("div",{className:"relative border border-orange-400 md:h-[35rem] h-[38rem] dark:border-slate-600/50 px-4 py-6 bg-white dark:bg-slate-800 shadow-md before:content[''] before:absolute before:w-2 before:h-8 before:top-8 before:left-9 before:bg-orange-500",children:e})}},5153:function(i,e,l){"use strict";l.r(e),l.d(e,{default:function(){return h}});var d=l(5893),a=l(777),n=l(491),t=l(5121);let o=async()=>(await t.Z.get("".concat(n.g.url,"/jsonapi/node/products"),{headers:{Accept:"application/vnd.api+json"}})).data;var r=l(4638),u=l(6265),s=l(6446),v=l(5675),c=l.n(v),f=l(7383),m=l(2696),g=l(1445),p=l(1664),_=l.n(p),h=function(){var i;let{mediaImage:e}=(0,r.C)(),{data:l,isLoading:t,isError:v}=function(){let{data:i,isLoading:e,isError:l}=(0,a.a)({queryKey:["products"],queryFn:o});return{data:i,isLoading:e,isError:l}}();return v?(0,d.jsx)(u.Z,{}):t?(0,d.jsx)(s.Z,{}):(0,d.jsx)(m.Z,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"w-full flex justify-center",children:(0,d.jsx)(f.Z,{title:"6a97d0c2-1928-43a4-bf75-c20c1044ef35"})}),(0,d.jsx)("div",{className:"relative z-20 pt-6 grid lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-6",children:l&&(null==l?void 0:null===(i=l.data)||void 0===i?void 0:i.map(i=>{var l,a,t,o,r,u;return(0,d.jsx)(_(),{href:"/products/".concat(i.id),children:(0,d.jsxs)(g.default,{children:[(0,d.jsx)("h3",{className:"ml-10 text-orange-800",children:(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:null==i?void 0:null===(l=i.attributes)||void 0===l?void 0:l.title}})}),(0,d.jsx)("div",{children:null==i?void 0:null===(o=i.relationships)||void 0===o?void 0:null===(t=o.field_product_image)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.map(i=>{let l=null==e?void 0:e.find(e=>(null==e?void 0:e.id)===(null==i?void 0:i.id));return l&&(0,d.jsx)(c(),{className:"relative w-full h-96 object-cover border-green-600  my-2 border md:scale-90 md:hover:scale-100 duration-500",src:"".concat(null===n.g||void 0===n.g?void 0:n.g.uri).concat(null==l?void 0:l.url),width:null==l?void 0:l.width,height:null==l?void 0:l.height,alt:null==l?void 0:l.alt},null==i?void 0:i.id)})}),(0,d.jsx)("div",{className:"relative after:content[''] after:absolute after:w-4 after:h-4 after:bg-green-600 after:rounded-lg after:top-1",children:(0,d.jsx)("div",{className:"ml-6 text-sm",dangerouslySetInnerHTML:{__html:null==i?void 0:null===(u=i.attributes)||void 0===u?void 0:null===(r=u.body)||void 0===r?void 0:r.summary}})})]})},i.id)}))})]})})}},1059:function(i){i.exports={style:{fontFamily:"'__Julius_Sans_One_10341e', '__Julius_Sans_One_Fallback_10341e'",fontWeight:400,fontStyle:"normal"},className:"__className_10341e"}}},function(i){i.O(0,[888,774,179],function(){return i(i.s=4918)}),_N_E=i.O()}]);