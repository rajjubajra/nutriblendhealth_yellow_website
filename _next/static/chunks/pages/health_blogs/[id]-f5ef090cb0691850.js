(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{8198:function(i,l,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/health_blogs/[id]",function(){return d(2760)}])},4638:function(i,l,d){"use strict";d.d(l,{C:function(){return u}});var e=d(7294),a=d(7633),n=d(491),o=d(5121);let t=async()=>(await o.Z.get("".concat(n.g.url,"/jsonapi/media/image?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data;function u(){let[i,l]=(0,e.useState)([]),{data:d,isLoading:n,isError:o}=(0,a.a)({queryKey:["media_image"],queryFn:t});return(0,e.useEffect)(()=>{var i;let e=(i,l)=>{var d,e;let a=i.find(i=>i.id===l);return null==a?void 0:null===(e=a.attributes)||void 0===e?void 0:null===(d=e.uri)||void 0===d?void 0:d.url},a=[];d&&(null==d||null===(i=d.data)||void 0===i||i.map(i=>{var l,n,o,t,u,v,r,s,c,h,m,_,f,g,p,j,w,y,x,b;return a.push({id:null==i?void 0:i.id,imageId:null==i?void 0:null===(o=i.relationships)||void 0===o?void 0:null===(n=o.field_media_image)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.id,alt:null==i?void 0:null===(r=i.relationships)||void 0===r?void 0:null===(v=r.field_media_image)||void 0===v?void 0:null===(u=v.data)||void 0===u?void 0:null===(t=u.meta)||void 0===t?void 0:t.alt,width:null==i?void 0:null===(h=i.relationships)||void 0===h?void 0:null===(c=h.field_media_image)||void 0===c?void 0:null===(s=c.data.meta)||void 0===s?void 0:s.width,height:null==i?void 0:null===(f=i.relationships)||void 0===f?void 0:null===(_=f.field_media_image)||void 0===_?void 0:null===(m=_.data.meta)||void 0===m?void 0:m.height,imageTitle:null==i?void 0:null===(w=i.relationships)||void 0===w?void 0:null===(j=w.field_media_image)||void 0===j?void 0:null===(p=j.data)||void 0===p?void 0:null===(g=p.meta)||void 0===g?void 0:g.title,url:e(null==d?void 0:d.included,null==i?void 0:null===(b=i.relationships)||void 0===b?void 0:null===(x=b.field_media_image)||void 0===x?void 0:null===(y=x.data)||void 0===y?void 0:y.id)})})),l(a)},[d]),{mediaImage:i,isLoading:n,isError:o}}},2760:function(i,l,d){"use strict";d.r(l);var e=d(5893),a=d(7294),n=d(1163),o=d(7633),t=d(5121),u=d(491),v=d(6446),r=d(6265),s=d(5675),c=d.n(s),h=d(4638);l.default=function(){var i,l,d,s,m;let _=(0,n.useRouter)().query.id,{mediaImage:f}=(0,h.C)(),g=async()=>(await t.Z.get("".concat(u.g.url,"/jsonapi/node/article/").concat(_),{headers:{Accept:"application/vnd.api+json"}})).data,{data:p,isLoading:j,isError:w}=(0,o.a)({queryKey:["read_blog"],queryFn:g}),[y,x]=(0,a.useState)();return(console.log("Image Properties",y),(0,a.useEffect)(()=>{let i=f.find(i=>{var l;return i.id===(null==p?void 0:null===(l=p.data)||void 0===l?void 0:l.relationships.field_image_media.data.id)});i&&x(i)},[p,f]),console.log("Read Blog: ",p,j,w),j)?(0,e.jsx)(v.Z,{}):w?(0,e.jsx)(r.Z,{}):(0,e.jsx)("div",{className:"mx-10",children:p&&y&&(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:null==p?void 0:null===(l=p.data)||void 0===l?void 0:null===(i=l.attributes)||void 0===i?void 0:i.title}),(0,e.jsx)("div",{children:(0,e.jsx)(c(),{className:"w-80 py-5",src:"".concat(u.g.uri).concat(y.url),width:y.width,height:y.height,alt:y.alt})}),(0,e.jsx)("div",{className:"mt-4",children:(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:null==p?void 0:null===(m=p.data)||void 0===m?void 0:null===(s=m.attributes)||void 0===s?void 0:null===(d=s.body)||void 0===d?void 0:d.value}})})]})})}},1163:function(i,l,d){i.exports=d(3035)}},function(i){i.O(0,[888,774,179],function(){return i(i.s=8198)}),_N_E=i.O()}]);