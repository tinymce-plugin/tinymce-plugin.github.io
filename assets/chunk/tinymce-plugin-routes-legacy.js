!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./pinia-legacy.js","./vue-legacy.js"],(function(e,n){"use strict";var r;return{setters:[function(){},function(e){r=e.I}],execute:function(){var o=e("_",(function(e,t){return e()}));e("g",(function(e,c,i){e.addRoute({name:"404",path:"/:path(.*)",component:i["/assets/chunk/test-legacy.js"]||{template:"<div>404</div>"}}),c.routes.map((function(c){e.hasRoute(c.name)&&e.removeRoute(c.name),c.children&&c.children.length>0?(e.addRoute(t(t({},c),{},{component:{template:'<div class="'+c.name+' w1300" ><router-view></router-view></div>'}})),c.children.map((function(i){i.children&&i.children.length>0?(e.addRoute(c.name,t(t({},i),{},{component:{template:'<div class="'+i.name+' w1300" ><router-view></router-view></div>'}})),i.children.map((function(c){e.addRoute(i.name,t(t({},c),{},{component:r((function(){return o((function(){return n.import("/assets/chunk/"+c.name+"-legacy.js")}),void 0)}))}))}))):e.addRoute(c.name,t(t({},i),{},{component:r((function(){return o((function(){return n.import("/assets/chunk/"+i.name+"-legacy.js")}),void 0)}))}))}))):e.addRoute(t(t({},c),{},{component:r((function(){return o((function(){return n.import("/assets/chunk/"+c.name+"-legacy.js")}),void 0)}))}))}))}))}}}))}();
