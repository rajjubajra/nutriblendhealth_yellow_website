(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{8198:function(i,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/health_blogs/[id]",function(){return l(2760)}])},4999:function(i,e,l){"use strict";l.d(e,{Z:function(){return r}});var a=l(5893),d=l(7294),t=l(777),n=l(491),o=l(5121),u=l(6446),r=function(i){var e,l,r;let{children:s}=i,{backgroundImage:v,bgLoading:c,bgError:f}=function(){let i="".concat(n.g.url,"/jsonapi/node/background_image"),e=async()=>(await o.Z.get(i,{headers:{Accept:"application/vnd.api+json"}})).data,[l,a]=(0,d.useState)(),{data:u,isLoading:r,isError:s}=(0,t.a)({queryKey:["bg-blog"],queryFn:e});(0,d.useEffect)(()=>{var i,e,l,d;let t=null==u?void 0:null===(i=u.data)||void 0===i?void 0:i.find(i=>{var e,l,a,d;return(null===(d=i.relationships)||void 0===d?void 0:null===(a=d.field_page_tag)||void 0===a?void 0:null===(l=a.data)||void 0===l?void 0:null===(e=l.meta)||void 0===e?void 0:e.drupal_internal__target_id)===3});a(null==t?void 0:null===(d=t.relationships)||void 0===d?void 0:null===(l=d.field_image_media)||void 0===l?void 0:null===(e=l.data)||void 0===e?void 0:e.id)},[u]);let v=async()=>(await o.Z.get("".concat(n.g.url,"/jsonapi/media/image/").concat(l,"?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data,{data:c,isError:f,isLoading:m}=(0,t.a)({queryKey:["bg_mediaimage"],queryFn:v});return{backgroundImage:c,bgLoading:m,bgError:f}}();return c?(0,a.jsx)(u.Z,{}):(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{backgroundImage:"url(".concat(n.g.uri).concat(null==v?void 0:null===(r=v.included[0])||void 0===r?void 0:null===(l=r.attributes)||void 0===l?void 0:null===(e=l.uri)||void 0===e?void 0:e.url,")")},className:"dark:hidden triangle-left-corner z-0 absolute top-0 left-0 bg-cover bg-center opacity-20"}),s]})}},4308:function(i,e,l){"use strict";var a=l(5893);l(7294),e.Z=function(i){let{name:e}=i;return(0,a.jsxs)("div",{className:"w-40 h-10 border flex justify-center items-center uppercase text-sm group hover:drop-shadow-md hover:border-slate-950",children:[(0,a.jsx)("div",{className:"w-3 h-3 bg-red-500 dark:bg-red-500 mr-5 group-hover:bg-green-500 group-hover:rounded-full duration-300"}),(0,a.jsx)("div",{className:"group-hover:text-red-900 dark:group-hover:text-slate-200",children:e})]})}},7383:function(i,e,l){"use strict";l.d(e,{Z:function(){return v}});var a=l(5893),d=l(1059),t=l.n(d),n=l(777),o=l(491),u=l(5121),r=l(6446),s=l(6265),v=function(i){var e,l;let{title:d}=i,{data:v,isError:c,isLoading:f}=function(i){let e=async()=>(await u.Z.get("".concat(o.g.url,"/jsonapi/node/page_title/").concat(i),{headers:{Accept:"application/vnd.api+json"}})).data,{data:l,isLoading:a,isError:d}=(0,n.a)({queryKey:["pagetitle"],queryFn:e});return{data:l,isLoading:a,isError:d}}(d);return f?(0,a.jsx)(r.Z,{}):c?(0,a.jsx)(s.Z,{}):(0,a.jsx)("div",{className:"w-full text-center my-14 ".concat(t().className),children:(0,a.jsx)("h1",{className:"uppercase",children:v&&(null==v?void 0:null===(l=v.data)||void 0===l?void 0:null===(e=l.attributes)||void 0===e?void 0:e.field_page_title)})})}},4638:function(i,e,l){"use strict";l.d(e,{C:function(){return u}});var a=l(7294),d=l(777),t=l(491),n=l(5121);let o=async()=>(await n.Z.get("".concat(t.g.url,"/jsonapi/media/image?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data;function u(){let[i,e]=(0,a.useState)([]),{data:l,isLoading:t,isError:n}=(0,d.a)({queryKey:["media_image"],queryFn:o});return(0,a.useEffect)(()=>{var i;let a=(i,e)=>{var l,a;let d=i.find(i=>i.id===e);return null==d?void 0:null===(a=d.attributes)||void 0===a?void 0:null===(l=a.uri)||void 0===l?void 0:l.url},d=[];l&&(null==l||null===(i=l.data)||void 0===i||i.map(i=>{var e,t,n,o,u,r,s,v,c,f,m,g,p,h,_,j,x,y,b,N;return d.push({id:null==i?void 0:i.id,imageId:null==i?void 0:null===(n=i.relationships)||void 0===n?void 0:null===(t=n.field_media_image)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.id,alt:null==i?void 0:null===(s=i.relationships)||void 0===s?void 0:null===(r=s.field_media_image)||void 0===r?void 0:null===(u=r.data)||void 0===u?void 0:null===(o=u.meta)||void 0===o?void 0:o.alt,width:null==i?void 0:null===(f=i.relationships)||void 0===f?void 0:null===(c=f.field_media_image)||void 0===c?void 0:null===(v=c.data.meta)||void 0===v?void 0:v.width,height:null==i?void 0:null===(p=i.relationships)||void 0===p?void 0:null===(g=p.field_media_image)||void 0===g?void 0:null===(m=g.data.meta)||void 0===m?void 0:m.height,imageTitle:null==i?void 0:null===(x=i.relationships)||void 0===x?void 0:null===(j=x.field_media_image)||void 0===j?void 0:null===(_=j.data)||void 0===_?void 0:null===(h=_.meta)||void 0===h?void 0:h.title,url:a(null==l?void 0:l.included,null==i?void 0:null===(N=i.relationships)||void 0===N?void 0:null===(b=N.field_media_image)||void 0===b?void 0:null===(y=b.data)||void 0===y?void 0:y.id)})})),e(d)},[l]),{mediaImage:i,isLoading:t,isError:n}}},2760:function(i,e,l){"use strict";l.r(e);var a=l(5893),d=l(7294),t=l(1163),n=l(777),o=l(5121),u=l(491),r=l(6446),s=l(6265),v=l(5675),c=l.n(v),f=l(4638),m=l(7383),g=l(4999),p=l(4308);e.default=function(){var i,e,l,v,h;let _=(0,t.useRouter)(),j=_.query.id,{mediaImage:x}=(0,f.C)(),y=async()=>(await o.Z.get("".concat(u.g.url,"/jsonapi/node/article/").concat(j),{headers:{Accept:"application/vnd.api+json"}})).data,{data:b,isLoading:N,isError:w}=(0,n.a)({queryKey:["read_blog"],queryFn:y}),[Z,k]=(0,d.useState)();return(console.log("Image Properties",Z),(0,d.useEffect)(()=>{let i=x.find(i=>{var e;return i.id===(null==b?void 0:null===(e=b.data)||void 0===e?void 0:e.relationships.field_image_media.data.id)});i&&k(i)},[b,x]),N)?(0,a.jsx)(r.Z,{}):w?(0,a.jsx)(s.Z,{}):(0,a.jsx)(g.Z,{children:(0,a.jsxs)("div",{className:"py-10",children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 triangle2"}),(0,a.jsx)("div",{className:"relative z-10",children:(0,a.jsx)(m.Z,{title:"4018928b-b153-421d-a646-afd02db33694"})}),b&&Z&&(0,a.jsxs)("div",{className:"body-font relative z-10",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("h3",{children:null==b?void 0:null===(e=b.data)||void 0===e?void 0:null===(i=e.attributes)||void 0===i?void 0:i.title}),(0,a.jsx)("div",{onClick:()=>{_.back()},className:"cursor-pointer",children:(0,a.jsx)(p.Z,{name:"Back"})})]}),(0,a.jsx)("div",{children:(0,a.jsx)(c(),{className:"w-full h-80 object-cover py-5",src:"".concat(u.g.uri).concat(Z.url),width:Z.width,height:Z.height,alt:Z.alt})}),(0,a.jsx)("div",{className:"mt-4 relative z-10",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==b?void 0:null===(h=b.data)||void 0===h?void 0:null===(v=h.attributes)||void 0===v?void 0:null===(l=v.body)||void 0===l?void 0:l.value}})})]})]})})}},1059:function(i){i.exports={style:{fontFamily:"'__Julius_Sans_One_10341e', '__Julius_Sans_One_Fallback_10341e'",fontWeight:400,fontStyle:"normal"},className:"__className_10341e"}},1163:function(i,e,l){i.exports=l(3035)}},function(i){i.O(0,[888,774,179],function(){return i(i.s=8198)}),_N_E=i.O()}]);