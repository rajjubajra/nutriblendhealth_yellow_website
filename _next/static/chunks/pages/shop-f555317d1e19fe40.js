(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{1463:function(e,i,l){let t=l(6411);e.exports=function(e){if("string"!=typeof e)return;let i=e.toUpperCase();if(Object.prototype.hasOwnProperty.call(t,i))return t[i]},e.exports.currencySymbolMap=t},6411:function(e){e.exports={AED:"د.إ",AFN:"؋",ALL:"L",AMD:"֏",ANG:"ƒ",AOA:"Kz",ARS:"$",AUD:"$",AWG:"ƒ",AZN:"₼",BAM:"KM",BBD:"$",BDT:"৳",BGN:"лв",BHD:".د.ب",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"₿",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNH:"\xa5",CNY:"\xa5",COP:"$",COU:"COU",CRC:"₡",CUC:"$",CUP:"₱",CVE:"$",CZK:"Kč",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"دج",EEK:"kr",EGP:"\xa3",ERN:"Nfk",ETB:"Br",ETH:"Ξ",EUR:"€",FJD:"$",FKP:"\xa3",GBP:"\xa3",GEL:"₾",GGP:"\xa3",GHC:"₵",GHS:"GH₵",GIP:"\xa3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"₪",IMP:"\xa3",INR:"₹",IQD:"ع.د",IRR:"﷼",ISK:"kr",JEP:"\xa3",JMD:"J$",JOD:"JD",JPY:"\xa5",KES:"KSh",KGS:"лв",KHR:"៛",KMF:"CF",KPW:"₩",KRW:"₩",KWD:"KD",KYD:"$",KZT:"₸",LAK:"₭",LBP:"\xa3",LKR:"₨",LRD:"$",LSL:"M",LTC:"Ł",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"ден",MMK:"K",MNT:"₮",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"₨",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"₦",NIO:"C$",NOK:"kr",NPR:"₨",NZD:"$",OMR:"﷼",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"₱",PKR:"₨",PLN:"zł",PYG:"Gs",QAR:"﷼",RMB:"￥",RON:"lei",RSD:"Дин.",RUB:"₽",RWF:"R₣",SAR:"﷼",SBD:"$",SCR:"₨",SDG:"ج.س.",SEK:"kr",SGD:"S$",SHP:"\xa3",SLL:"Le",SOS:"S",SRD:"$",SSP:"\xa3",STD:"Db",STN:"Db",SVC:"$",SYP:"\xa3",SZL:"E",THB:"฿",TJS:"SM",TMT:"T",TND:"د.ت",TOP:"T$",TRL:"₤",TRY:"₺",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"лв",VEF:"Bs",VES:"Bs.S",VND:"₫",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"Ƀ",XCD:"$",XOF:"CFA",XPF:"₣",XSU:"Sucre",XUA:"XUA",YER:"﷼",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"}},3276:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return l(8190)}])},4308:function(e,i,l){"use strict";var t=l(5893);l(7294),i.Z=function(e){let{name:i}=e;return(0,t.jsxs)("div",{className:"w-40 h-10 border dark:border-slate-400/50 flex justify-center items-center uppercase text-sm group hover:drop-shadow-md hover:border-slate-950",children:[(0,t.jsx)("div",{className:"w-3 h-3 bg-red-500 dark:bg-red-500 mr-5 group-hover:bg-green-500 group-hover:rounded-full duration-300"}),(0,t.jsx)("div",{className:"group-hover:text-red-900 dark:group-hover:text-slate-200",children:i})]})}},7383:function(e,i,l){"use strict";l.d(i,{Z:function(){return c}});var t=l(5893),a=l(1059),r=l.n(a),d=l(777),n=l(491),o=l(5121),s=l(6446),u=l(6265),c=function(e){var i,l;let{title:a}=e,{data:c,isError:v,isLoading:f}=function(e){let i=async()=>(await o.Z.get("".concat(n.g.url,"/jsonapi/node/page_title/").concat(e),{headers:{Accept:"application/vnd.api+json"}})).data,{data:l,isLoading:t,isError:a}=(0,d.a)({queryKey:["pagetitle"],queryFn:i});return{data:l,isLoading:t,isError:a}}(a);return f?(0,t.jsx)(s.Z,{}):v?(0,t.jsx)(u.Z,{}):(0,t.jsx)("div",{className:"relative z-30 my-14 ".concat(r().className),children:(0,t.jsx)("h1",{className:"uppercase",children:c&&(null==c?void 0:null===(l=c.data)||void 0===l?void 0:null===(i=l.attributes)||void 0===i?void 0:i.field_page_title)})})}},7196:function(e,i,l){"use strict";function t(e,i){let l=[],t=null==e?void 0:e.find(e=>(null==e?void 0:e.id)===i);return null==e||e.map(e=>{var i,a,r,d,n,o,s,u,c,v,f,m,h,p,g,b,_,x,N;(null==t?void 0:null===(r=t.relationships)||void 0===r?void 0:null===(a=r.field_media_image)||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:i.id)===(null==e?void 0:e.id)&&(null==l||l.push({url:null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:null===(d=n.uri)||void 0===d?void 0:d.url,filesize:null==e?void 0:null===(o=e.attributes)||void 0===o?void 0:o.filesize,filemime:null==e?void 0:null===(s=e.attributes)||void 0===s?void 0:s.filemime,width:null==t?void 0:null===(f=t.relationships)||void 0===f?void 0:null===(v=f.field_media_image)||void 0===v?void 0:null===(c=v.data)||void 0===c?void 0:null===(u=c.meta)||void 0===u?void 0:u.width,height:null==t?void 0:null===(g=t.relationships)||void 0===g?void 0:null===(p=g.field_media_image)||void 0===p?void 0:null===(h=p.data)||void 0===h?void 0:null===(m=h.meta)||void 0===m?void 0:m.height,alt:null==t?void 0:null===(N=t.relationships)||void 0===N?void 0:null===(x=N.field_media_image)||void 0===x?void 0:null===(_=x.data)||void 0===_?void 0:null===(b=_.meta)||void 0===b?void 0:b.alt}))}),l}l.d(i,{o:function(){return t}})},8190:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return M}});var t=l(5893),a=l(7383),r=l(6446),d=l(6265),n=l(5675),o=l.n(n),s=l(1664),u=l.n(s),c=l(491),v=l(1463),f=l.n(v),m=function(e){let{currency:i,amount:l}=e;return(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{children:f()(i)}),(0,t.jsx)("div",{className:"ml-1",children:l})]})},h=function(e){let{children:i}=e;return(0,t.jsx)("div",{className:"relative w-full md:border dark:border-slate-400/50 border-green-300 mb-10 md:p-20 p-5 bg-white/80 dark:bg-slate-900 after:md:absolute after:md:flex after:hidden after:w-10 after:h-10 after:rounted-br-full after:bg-green-500 after:border-white after:dark:border-slate-900 after:border-4 after:left-5 after:top-5  before:md:absolute before:md:flex before:hidden before:right-0 before:bottom-0 before:w-8 before:h-8 before:rounded-tl-full before:bg-yellow-400 before:border before:mr-8 before:mb-8 ",children:i})},p=l(4308),g=function(e){var i,l,a,r;let{item:d}=e;return(0,t.jsx)(h,{children:(0,t.jsxs)("div",{className:"md:w-80 w-full",children:[(0,t.jsx)(o(),{className:"w-80 h-80 object-cover mb-2",src:"".concat(c.g.uri).concat(null==d?void 0:null===(i=d.image[0])||void 0===i?void 0:i.url),height:null==d?void 0:null===(l=d.image[0])||void 0===l?void 0:l.height,width:null==d?void 0:null===(a=d.image[0])||void 0===a?void 0:a.width,alt:null==d?void 0:null===(r=d.image[0])||void 0===r?void 0:r.alt}),(0,t.jsx)("div",{className:"flex justify-center my-4",children:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("div",{children:"Rate:"}),(0,t.jsx)(m,{currency:d.currency,amount:d.rate})]})}),(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)(u(),{href:d.product_link,target:"_blank",children:(0,t.jsx)(p.Z,{name:d.product_link_lable})})})]})})},b=l(7294),_=function(e){let{children:i}=e;return(0,t.jsx)("div",{className:"relative after:absolute after:w-20 after:h-10 after:bg-green-500/50 after:right-0 after:-bottom-20 after:z-0",children:i})},x=function(e){let{item:i,index:l}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"relative z-30 mb-10 md:ml-5 md:mt-0 mt-8 w-full md:text-left text-center",children:(0,t.jsx)("h3",{children:i.title})}),(0,t.jsxs)("div",{className:"lg:flex",children:[(0,t.jsx)("div",{className:"".concat(l%2==0?"order-1":"order-2  lg:px-20"),children:(0,t.jsx)(g,{item:i})}),(0,t.jsx)("div",{className:"text-left px-2 first-letter:text-4xl py-4\n                ".concat(l%2==0?"order-2 lg:px-20":"order-1"),children:(0,t.jsx)(_,{children:(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:null==i?void 0:i.body}})})})]})]})},N=l(777),j=l(5121),D=l(7196);let S=(e,i)=>e.find(e=>e.id===i).attributes.name;var y=function(){let{cleanData:e,isError:i,isLoading:l}=function(){let[e,i]=(0,b.useState)([]);console.log("clear data",e);let l={headers:{Accept:"application/vnd.api+json"}},t="".concat(c.g.url,"/jsonapi/node/amazon_product_page_link?").concat("include=field_image_media.field_media_image,field_currency_code"),a=async()=>(await j.Z.get(t,l)).data,{data:r,isError:d,isLoading:n}=(0,N.a)({queryKey:["amazon"],queryFn:a});return console.log("Amazon ",r),(0,b.useEffect)(()=>{let e=[];r&&(null==r||r.data.map(i=>{e.push({id:i.id,title:i.attributes.title,body:i.attributes.body.value,rate:i.attributes.field_rate,currency:S(null==r?void 0:r.included,i.relationships.field_currency_code.data.id),image:(0,D.o)(null==r?void 0:r.included,i.relationships.field_image_media.data.id),product_link:i.attributes.field_amazon_product_link.uri,product_link_lable:i.attributes.field_amazon_product_link.title})})),i(e)},[r]),{cleanData:e,isError:d,isLoading:n}}();return(console.log(e),l)?(0,t.jsx)(r.Z,{}):i?(0,t.jsx)(d.Z,{}):0===e.length?(0,t.jsx)("div",{children:"We are working on this page. Please visit again"}):(0,t.jsx)("div",{className:"relative z-40 body-font",children:e&&(null==e?void 0:e.map((e,i)=>(0,t.jsx)("div",{className:"relative w-full my-10 border dark:border-slate-500/50 pb-10 mb-10 bg-white dark:bg-slate-800 md:p-10",children:(0,t.jsx)(x,{item:e,index:i})},e.id)))})},R=function(e){var i,l,a;let{children:d}=e,{backgroundImage:n,bgLoading:o,bgError:s}=function(){let e="".concat(c.g.url,"/jsonapi/node/background_image"),i=async()=>(await j.Z.get(e,{headers:{Accept:"application/vnd.api+json"}})).data,[l,t]=(0,b.useState)(),{data:a,isLoading:r,isError:d}=(0,N.a)({queryKey:["bg-shop"],queryFn:i});console.log("data Backgroun Image : ",a),(0,b.useEffect)(()=>{var e,i,l,r;let d=null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.find(e=>{var i,l,t,a;return(null===(a=e.relationships)||void 0===a?void 0:null===(t=a.field_page_tag)||void 0===t?void 0:null===(l=t.data)||void 0===l?void 0:null===(i=l.meta)||void 0===i?void 0:i.drupal_internal__target_id)===4});t(null==d?void 0:null===(r=d.relationships)||void 0===r?void 0:null===(l=r.field_image_media)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.id)},[a]);let n=async()=>(await j.Z.get("".concat(c.g.url,"/jsonapi/media/image/").concat(l,"?include=field_media_image&fields[file--file]=uri,url"),{headers:{Accept:"application/vnd.api+json"}})).data,{data:o,isError:s,isLoading:u}=(0,N.a)({queryKey:["bg_mediaimage"],queryFn:n});return{backgroundImage:o,bgLoading:u,bgError:s}}();return(console.log("Background Shop",n,s),o)?(0,t.jsx)(r.Z,{}):(0,t.jsxs)("div",{className:"relative z-30 md:px-20 px-2",children:[(0,t.jsx)("div",{style:{backgroundImage:"url(".concat(c.g.uri).concat(null==n?void 0:null===(a=n.included[0])||void 0===a?void 0:null===(l=a.attributes)||void 0===l?void 0:null===(i=l.uri)||void 0===i?void 0:i.url,")")},className:"fixed h-screen left-0 right-0 top-0 z-0 bg-cover bg-center bg-no-repeat w-full opacity-30 dark:opacity-15"}),d]})},M=function(){return(0,t.jsx)(R,{children:(0,t.jsxs)("div",{className:"relative z-20 w-full min-h-screen flex flex-col",children:[(0,t.jsx)("div",{className:"text-center w-full",children:(0,t.jsx)(a.Z,{title:"cf1089e1-edab-4e89-b955-6682e814a970"})}),(0,t.jsx)("div",{className:"body-font text-center",children:(0,t.jsx)(y,{})})]})})}},1059:function(e){e.exports={style:{fontFamily:"'__Julius_Sans_One_10341e', '__Julius_Sans_One_Fallback_10341e'",fontWeight:400,fontStyle:"normal"},className:"__className_10341e"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=3276)}),_N_E=e.O()}]);