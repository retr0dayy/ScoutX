(this.webpackJsonpfb=this.webpackJsonpfb||[]).push([[6],{165:function(e,t,c){"use strict";var n=c(7),i=c(3),s=c.n(i),o=c(5),r=c(1),a=c(16),l=(c(169),c(174),c(172)),d=c(173),u=c(2),j=Object(r.forwardRef)((function(e,t){var c=e.setValue,i=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{close:function(){return j(!1)}}}));var s=Object(r.useState)(!1),o=Object(n.a)(s,2),a=o[0],j=o[1];return Object(r.useEffect)((function(){var e=i.current,t=function(e){c((function(t){return t+e.detail.unicode}))};return e.addEventListener("emoji-click",t),function(){e.removeEventListener("emoji-click",t)}}),[c]),Object(u.jsxs)("div",{className:"emoji-picker",children:[Object(u.jsx)("div",{className:"opener",onClick:function(){return j((function(e){return!e}))},children:a?Object(u.jsx)(l.b,{}):Object(u.jsx)(d.a,{})}),Object(u.jsx)("div",{className:a?"picker open":"picker",children:Object(u.jsx)("emoji-picker",{ref:i})})]})}));t.a=function(e){var t=e.placeholder,c=e.handler,i=e.showEmoji,l=e.initialValue,d=void 0===l?"":l,b=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),null===(n=f.current)||void 0===n||n.close(),h.trim()&&c(h.trim()),O("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=Object(r.useState)(d),p=Object(n.a)(m,2),h=p[0],O=p[1],f=Object(r.useRef)();return Object(r.useEffect)((function(){O(d)}),[d]),Object(u.jsxs)("form",{className:"input__box",onSubmit:b,children:[i&&Object(u.jsx)(j,{setValue:O,ref:f}),Object(u.jsx)("input",{type:"text",placeholder:t,value:h,onChange:function(e){return O(e.target.value)},onFocus:function(){var e;return null===(e=f.current)||void 0===e?void 0:e.close()}}),Object(u.jsx)("button",{type:"submit","aria-label":"submit",children:Object(u.jsx)("img",{src:a.n,alt:"send"})})]})}},166:function(e,t,c){"use strict";var n=c(7),i=c(1),s=c(16),o=(c(170),c(2));t.a=function(e){var t=e.options,c=e.id,r=void 0===c?"":c,a=Object(i.useState)(!1),l=Object(n.a)(a,2),d=l[0],u=l[1];Object(i.useEffect)((function(){var e=function(e){e.target.id!=="options"+r&&e.target.id!=="options__icon"+r&&u(!1)};return document.body.addEventListener("click",e),function(){return document.body.removeEventListener("click",e)}}),[r]);return Object(o.jsxs)("div",{className:"options",id:"options"+r,onClick:function(){return u((function(e){return!e}))},children:[Object(o.jsx)("img",{src:s.l,alt:"options",className:"options__icon",id:"options__icon"+r}),Object(o.jsx)("ul",{className:d?"show":"",children:Object.entries(t).map((function(e,t){var c=Object(n.a)(e,2),i=c[0],s=c[1];return Object(o.jsx)("li",{onClick:function(){return function(e){u(!1),e()}(s)},children:i},t)}))})]})}},167:function(e,t,c){"use strict";var n=c(7),i=c(1),s=c(48),o=(c(171),c(2)),r=function(e){var t=e.show,c=e.toggleShow,n=e.text,i=e.onSuccess;return Object(o.jsx)(s.a,{show:t,onClose:c,children:Object(o.jsxs)("div",{className:"confirmation",children:[Object(o.jsx)("h2",{children:n}),Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("button",{onClick:c,children:"Cancel"}),Object(o.jsx)("button",{className:"danger",onClick:function(){c(),i()},children:"Yes, I'm sure"})]})]})})};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Are Your sure ?",c=Object(i.useState)(!1),s=Object(n.a)(c,2),a=s[0],l=s[1],d=function(){return l(!a)},u=Object(o.jsx)(r,{show:a,onSuccess:e,text:t,toggleShow:d});return{toggleShow:d,Confirmation:u}}},168:function(e,t,c){"use strict";var n=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){if(!e)return"";var t=new Date(e);return t="".concat(t.getDate()," ").concat(n[t.getMonth()]," ").concat(t.getFullYear())}},169:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},176:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));c(1);var n=c(16),i=c(63),s=c(2),o=function(e){var t=e.singlepost;return Object(s.jsxs)("article",{className:t?"post halfborder single":"post gradient-border",children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("img",{src:n.f,alt:"profileImage",className:"post__dp roundimage"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"loadingBox",style:{width:"70px",height:"10px"}}),Object(s.jsx)("div",{className:"loadingBox",style:{width:"100px",height:"10px",marginTop:"0.5em"}})]})]}),Object(s.jsx)("div",{className:"post__details",children:Object(s.jsx)("div",{className:"loadingBox",style:{width:"100%",height:t?"60vh":"400px",borderRadius:"1em"}})}),Object(s.jsx)("div",{className:"post__footer",children:Object(s.jsxs)("div",{className:"group",children:[Object(s.jsx)(i.b,{}),Object(s.jsx)("div",{className:"loadingBox",style:{width:"250px",height:"20px"}})]})})]})};t.b=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(o,{}),Object(s.jsx)(o,{})]})}},178:function(e,t,c){},181:function(e,t,c){"use strict";var n=c(7),i=c(1),s=c(10),o=c(29),r=c(16),a=c(165),l=c(6),d=c(17),u=c(23),j=c(166),b=(c(178),c(63)),m=c(187),p=c(175),h=c(168),O=c(173),f=c(172),v=c(186),x=c(11),g=c(2),_=function(e){var t=e.item,c=t.onClick,n=t.Icon,i=t.title;return Object(g.jsxs)("div",{className:"share__item",onClick:c,children:[Object(g.jsx)(n,{}),Object(g.jsx)("p",{children:i})]})},w=function(e){var t=e.post,c=Object(s.b)(),n={twitter:"https://twitter.com/intent/tweet?text=".concat(t.caption,"&url=https://adra-amie.netlify.app/post/").concat(t._id),facebook:"https://www.facebook.com/dialog/share?\n\t\tapp_id=287203076842060\n\t\t&display=popup\n\t\t&href=https://adra-amie.netlify.app/post/".concat(t._id,"\n\t\t&redirect_uri=https://adra-amie.netlify.app/post/").concat(t._id),linkedin:"https://www.linkedin.com/sharing/share-offsite/?url=https://adra-amie.netlify.app/post/".concat(t._id),whatsapp:"https://api.whatsapp.com/send/?text=".concat(t.caption," Link: https://adra-amie.netlify.app/post/").concat(t._id)},i=function(e){window.open(n[e],"_blank")},o=[{title:"Embed",onClick:function(){window.navigator.clipboard.writeText('<iframe\n\t\t\t\tsrc="https://adra-amie.netlify.app/post/'.concat(t._id,'?embed=true"\n\t\t\t\twidth="500"\n\t\t\t\theight="700"\n\t\t\t\ttitle="social-media-app"\n\t\t\t></iframe>')),c(Object(x.c)({msg:"Copied embed code to clipboard"}))},Icon:v.a},{title:"Whatsapp",onClick:function(){return i("whatsapp")},Icon:p.b},{title:"Facebook",onClick:function(){return i("facebook")},Icon:O.b},{title:"Twitter",onClick:function(){return i("twitter")},Icon:b.d},{title:"Linked In",onClick:function(){return i("linkedin")},Icon:f.a}];return Object(g.jsxs)("article",{className:"share",children:[Object(g.jsx)("h2",{children:"Share"}),Object(g.jsx)("div",{className:"share__items",children:o.map((function(e,t){return Object(g.jsx)(_,{item:e},t)}))}),Object(g.jsxs)("div",{className:"share__url",children:[t._id,Object(g.jsx)("button",{className:"btn",onClick:function(){window.navigator.clipboard.writeText("https://adra-amie.netlify.app/post/".concat(t._id)),c(Object(x.c)({msg:"URL copied to clipboard"}))},children:"Copy URL"})]})]})},k=c(48),N=function(e){var t=e.image,c=e.onClose;return Object(g.jsxs)("div",{className:"imageViewer",children:[Object(g.jsx)("button",{onClick:c,"aria-label":"close",children:Object(g.jsx)("img",{src:r.e,alt:"close"})}),Object(g.jsx)("img",{src:t,alt:"post"})]})},y=c(167);t.a=function(e){var t,c,O,f=e.singlepost,v=e.post,x=Object(h.a)(v.createdAt),_=Object(i.useState)(!1),I=Object(n.a)(_,2),C=I[0],S=I[1],F=Object(i.useState)(!1),E=Object(n.a)(F,2),L=E[0],R=E[1],B=Object(s.b)(),D=Object(u.a)(),Y=Object(l.o)(),A=Object(s.c)((function(e){return e})),T=A.user.id,J=A.users.usersOnline,V=T===v.createdBy,M=null===(t=v.likes)||void 0===t?void 0:t.includes(T),W=J.some((function(e){return e.id===v.createdBy})),z=Object(y.a)((function(){B(Object(o.e)({customFetch:D,id:v._id})),f&&Y(-1)}),"Are you sure, You want to delete the post?"),U=z.Confirmation,q={Delete:z.toggleShow,Edit:function(){B(Object(o.j)(v))}},H=function(){var e,t,c,n=function(){return R(!L)};return Object(g.jsxs)(g.Fragment,{children:[v.caption&&(c=v.caption,c.split(/[\n\r]/g).map((function(e,t){return e&&Object(g.jsx)("p",{className:"post__caption",children:e},t)}))),f&&Object(g.jsx)(k.a,{show:L,onClose:n,children:Object(g.jsx)(N,{image:null===(e=v.image)||void 0===e?void 0:e.src})}),(null===(t=v.image)||void 0===t?void 0:t.src)&&Object(g.jsx)("img",{src:v.image.src,alt:"post_image",className:"post__image",loading:"lazy",onClick:n})]})};return Object(g.jsxs)("article",{className:f?"post halfborder single":"post gradient-border",children:[U,Object(g.jsx)(k.a,{show:C,onClose:function(){return S(!1)},children:Object(g.jsx)(w,{post:v})}),Object(g.jsxs)("header",{children:[Object(g.jsx)(d.b,{to:"/user/".concat(v.createdBy),className:W?"green":"",children:Object(g.jsx)("img",{src:(null===(c=v.userDetails)||void 0===c?void 0:c.image)||r.f,alt:"profileImage",loading:"lazy",className:"post__dp roundimage"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:null===(O=v.userDetails)||void 0===O?void 0:O.name}),Object(g.jsx)("p",{children:x})]}),V&&Object(g.jsx)(j.a,{options:q,id:v._id})]}),Object(g.jsx)("div",{className:"post__details",children:f?H():Object(g.jsx)(d.b,{to:"/post/".concat(v._id),children:H()})}),Object(g.jsxs)("div",{className:"post__footer",children:[Object(g.jsxs)("div",{className:"group",children:[Object(g.jsx)("div",{onClick:function(){B(Object(o.g)({customFetch:D,id:v._id,isLiked:M}))},children:M?Object(g.jsx)(b.b,{}):Object(g.jsx)(b.c,{})}),Object(g.jsx)("p",{children:function(){var e,t,c,n,i;return(null===(e=v.likes)||void 0===e?void 0:e.length)?(null===(t=v.likes)||void 0===t?void 0:t.includes(T))?(null===(c=v.likes)||void 0===c?void 0:c.length)-1===0?"You":(null===(n=v.likes)||void 0===n?void 0:n.length)-1===1?"You and 1 more":"You and ".concat(v.likes.length-1," others"):null===(i=v.likes)||void 0===i?void 0:i.length:""}()})]}),f||Object(g.jsx)(a.a,{placeholder:"Write a comment...",handler:function(e){B(Object(o.b)({customFetch:D,id:v._id,comment:e}))}}),Object(g.jsxs)(d.b,{className:f?"comment__icon group":"group",to:"/post/".concat(v._id),children:[Object(g.jsx)(m.a,{}),Object(g.jsx)("p",{children:v.comments.length})]}),Object(g.jsx)("div",{className:"group",onClick:function(){return S(!0)},title:"share",children:Object(g.jsx)(p.a,{})})]})]})}},193:function(e,t,c){},194:function(e,t,c){},195:function(e,t,c){},203:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c.n(n),s=c(5),o=c(7),r=c(1),a=c(165),l=c(10),d=c(17),u=c(16),j=c(29),b=c(23),m=c(167),p=c(166),h=(c(193),c(2)),O=function(e){var t=e.comment,c=e.postId,n=Object(l.c)((function(e){return e.users})).users.find((function(e){return e._id===t.commentedBy})),i=Object(b.a)(),s=Object(l.b)(),O=Object(l.c)((function(e){return e.user})).id,f=Object(r.useState)(!1),v=Object(o.a)(f,2),x=v[0],g=v[1],_=Object(r.useState)(!1),w=Object(o.a)(_,2),k=w[0],N=w[1],y=Object(m.a)((function(){t.commentId?s(Object(j.d)({replyId:t._id,postId:c,customFetch:i,commentId:t.commentId})):s(Object(j.d)({commentId:t._id,postId:c,customFetch:i}))}),"Are you sure, You want to delete the comment?"),I=y.Confirmation,C=y.toggleShow,S={Reply:function(){return N(!0)}};return O===(null===n||void 0===n?void 0:n._id)&&(S.Delete=C,S.Edit=function(){return g(!0)}),Object(h.jsxs)("div",{className:"comment__group",children:[I,Object(h.jsxs)("div",{className:"comment",children:[Object(h.jsx)(d.b,{to:"/user/".concat(null===n||void 0===n?void 0:n._id),children:Object(h.jsx)("img",{src:(null===n||void 0===n?void 0:n.profileImage)||u.f,alt:"".concat(null===n||void 0===n?void 0:n.name,"-dp"),className:"comment__dp"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:(null===n||void 0===n?void 0:n.name)||"user"}),Object(h.jsxs)("p",{className:"comment__text",children:[(null===t||void 0===t?void 0:t.replyTo)&&Object(h.jsxs)("span",{children:["@",t.replyTo]})," ",null===t||void 0===t?void 0:t.comment]})]}),Object(h.jsx)(p.a,{options:S,id:t._id})]}),x&&Object(h.jsx)(a.a,{placeholder:"Edit Comment",handler:function(e){t.commentId?s(Object(j.f)({replyId:t._id,postId:c,customFetch:i,commentId:t.commentId,comment:e})):s(Object(j.f)({commentId:t._id,postId:c,comment:e,customFetch:i})),g(!1)},initialValue:null===t||void 0===t?void 0:t.comment}),k&&Object(h.jsx)(a.a,{placeholder:"Reply to ".concat(null===n||void 0===n?void 0:n.name),handler:function(e){s(Object(j.h)({commentId:t.commentId||t._id,id:c,comment:e,replyTo:null===n||void 0===n?void 0:n.name,customFetch:i})),N(!1)}})]})},f=(c(194),function(e){var t,c,n=e.post;return Object(h.jsx)("div",{className:"comments",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:((null===n||void 0===n||null===(t=n.comments)||void 0===t?void 0:t.length)||"")+" comments"}),null===n||void 0===n||null===(c=n.comments)||void 0===c?void 0:c.map((function(e){var t;return Object(h.jsxs)("div",{className:"commentAndReplies",children:[Object(h.jsx)(O,{comment:e,postId:n._id}),!!e.replies.length&&Object(h.jsx)("div",{className:"replies",children:null===(t=e.replies)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(O,{comment:e,postId:n._id},e._id)}))})]},e._id)}))]})})}),v=c(181),x=c(64),g=c(6),_=c(37),w=c.n(_),k=c(20),N=(c(195),c(176));t.default=function(){var e,t=Object(g.q)().id,c=Object.fromEntries(Object(g.l)().search.slice(1).split("&").map((function(e){return e.split("=")}))).embed,n=JSON.parse(null!==(e=w.a.get("user"))&&void 0!==e?e:"{}").token,d=Object(l.c)((function(e){return e.post})).singlePost,u=Object(r.useState)(!0),m=Object(o.a)(u,2),p=m[0],O=m[1],_=Object(l.b)(),y=Object(b.a)();Object(r.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,y(k.f,{id:t});case 3:(c=e.sent)&&_(Object(j.l)(c.post)),O(!1);case 6:case"end":return e.stop()}}),e)})))()}),[t,n,_,y]);var I=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(Object(j.b)({customFetch:y,id:d._id,comment:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(h.jsx)(h.Fragment,{children:p?Object(h.jsx)(N.a,{}):Object(h.jsx)(v.a,{post:d})}):Object(h.jsxs)("section",{className:"singlepost",children:[Object(h.jsxs)("div",{className:"singlepost__left",children:[p?Object(h.jsx)(N.a,{singlepost:!0}):Object(h.jsx)(v.a,{singlepost:!0,post:d}),Object(h.jsxs)("article",{className:"singlepost__comments",children:[Object(h.jsx)(f,{post:d}),Object(h.jsx)(a.a,{placeholder:"Write a comment...",handler:I,showEmoji:!0})]})]}),Object(h.jsx)("article",{className:"singlepost__right gradient-border",children:Object(h.jsx)(x.a,{})})]})}}}]);
//# sourceMappingURL=6.e6eb3c0a.chunk.js.map