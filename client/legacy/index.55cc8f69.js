import{r as t,u as n,_ as s,a as r,b as e,c as a,i as o,s as c,d as i,S as u,f,t as h,j as l,k as p,l as v,g,m as d,n as m,o as x,v as b,e as w,q as y,h as E,w as j,p as k,x as q}from"./client.a4826940.js";function L(t,n,s){var r=t.slice();return r[1]=n[s],r}function S(t){var n,s,r,e,a=t[1].title+"";return{c:function(){n=f("li"),s=f("a"),r=h(a),this.h()},l:function(t){n=l(t,"LI",{});var e=p(n);s=l(e,"A",{rel:!0,href:!0});var o=p(s);r=v(o,a),o.forEach(g),e.forEach(g),this.h()},h:function(){d(s,"rel","prefetch"),d(s,"href",e="blog/"+t[1].slug)},m:function(t,e){m(t,n,e),x(n,s),x(s,r)},p:function(t,n){1&n&&a!==(a=t[1].title+"")&&b(r,a),1&n&&e!==(e="blog/"+t[1].slug)&&d(s,"href",e)},d:function(t){t&&g(n)}}}function B(t){for(var n,s,r,e,a,o=t[0],c=[],i=0;i<o.length;i+=1)c[i]=S(L(t,o,i));return{c:function(){n=w(),s=f("h1"),r=h("Recent posts"),e=w(),a=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){y('[data-svelte="svelte-hfp9t8"]',document.head).forEach(g),n=E(t),s=l(t,"H1",{});var o=p(s);r=v(o,"Recent posts"),o.forEach(g),e=E(t),a=l(t,"UL",{class:!0});for(var i=p(a),u=0;u<c.length;u+=1)c[u].l(i);i.forEach(g),this.h()},h:function(){document.title="Blog",d(a,"class","svelte-1frg2tf")},m:function(t,o){m(t,n,o),m(t,s,o),x(s,r),m(t,e,o),m(t,a,o);for(var i=0;i<c.length;i+=1)c[i].m(a,null)},p:function(t,n){var s=j(n,1)[0];if(1&s){var r;for(o=t[0],r=0;r<o.length;r+=1){var e=L(t,o,r);c[r]?c[r].p(e,s):(c[r]=S(e),c[r].c(),c[r].m(a,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=o.length}},i:k,o:k,d:function(t){t&&g(n),t&&g(s),t&&g(e),t&&g(a),q(c,t)}}}function H(t,n){return I.apply(this,arguments)}function I(){return(I=t(n.mark(function t(s,r){var e,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("https://api-euwest.graphcms.com/v1/ck7xpdj5549wo01fx1q7w5d8n/master",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"{\n          posts: blogPosts(where: {\n            status: PUBLISHED\n          }) {\n            slug\n            title\n            summary\n          }\n        }"})});case 2:return e=t.sent,t.next=5,e.json();case 5:if(a=t.sent,200!==e.status){t.next=10;break}return t.abrupt("return",a.data);case 10:this.error(e.status,a&&a.errors);case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function P(t,n,s){var r=n.posts;return t.$set=function(t){"posts"in t&&s(0,r=t.posts)},[r]}export default(function(t){function n(t){var s;return r(this,n),s=e(this,a(n).call(this)),o(i(s),t,P,B,c,{posts:0}),s}return s(n,u),n}());export{H as preload};
