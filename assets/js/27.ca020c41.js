(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{245:function(e,s,a){"use strict";a.r(s);var t=a(0),n=Object(t.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_3-1-1-js-运行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-js-运行机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1.1 JS 运行机制.")]),e._v(" "),a("blockquote",[a("p",[e._v("Event Loop是javascript的执行机制"),a("br"),e._v("\nJS的执行机制就是一个主线程 + 一个任务队列")])]),e._v(" "),a("p",[a("strong",[e._v("事件循环流程讲的通俗易懂，对代码的执行顺序有了透彻的理解")])]),e._v(" "),a("p",[e._v("除了广义的同步任务和异步任务，我们对任务有更精细的定义：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("macro-task(宏任务)：包括整体代码script，setTimeout，setInterval\nmicro-task(微任务)：Promise，process.nextTick\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("blockquote",[a("p",[e._v("不同类型的任务会进入对应的Event Queue，比如setTimeout和setInterval会进入相同的Event Queue。\n事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务")])]),e._v(" "),a("p",[e._v("遇到setTimeout，那么将其回调函数注册后分发到宏任务Event Queue。")]),e._v(" "),a("p",[e._v("遇到了Promise，new Promise立即执行，then函数分发到微任务Event Queue。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/21/15fdd88994142347?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"js运行原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js运行原理","aria-hidden":"true"}},[e._v("#")]),e._v(" js运行原理")]),e._v(" "),a("ul",[a("li",[e._v("概述")])]),e._v(" "),a("blockquote",[a("p",[e._v("浏览器组成可分两部分：Shell+内核。浏览器内核又可以分成两部分：渲染引擎(layout engineer或者Rendering Engine)和JS引擎。")])]),e._v(" "),a("ul",[a("li",[e._v("渲染引擎功能作用")])]),e._v(" "),a("blockquote",[a("p",[e._v("渲染引擎，负责对网页语法的解释（如HTML、JavaScript）并渲染网页。"),a("br"),e._v("\n所以，通常所谓的浏览器内核也就是浏览器所采用的渲染引擎，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。"),a("br"),e._v("\n不同的浏览器内核对网页编写语法 的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，"),a("br"),e._v("\n这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("定义")]),e._v(" "),a("ul",[a("li",[e._v("浏览器内核分成两部分渲染引擎和js引擎，由于js引擎越来越独立，内核就倾向于只指渲染引擎")]),e._v(" "),a("li",[e._v("渲染引擎是一种对HTML文档进行解析并将其显示在页面上的工具")])])]),e._v(" "),a("li",[a("p",[e._v("渲染引擎：")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("　　　　firefox使用gecko引擎\n\n　　　　IE使用Trident引擎\n\n　　　　2015年微软推出自己新的浏览器，原名叫斯巴达，后改名edge,使用edge引擎\n\n　　　　opera最早使用Presto引擎，后来弃用\n\n　　　　chrome\\safari\\opera使用webkit引擎\n\n　　　　13年chrome和opera开始使用Blink引擎\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("ul",[a("li",[e._v("js引擎：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("　　　　老版本IE使用Jscript引擎\n\n　　　　IE9之后使用Chakra引擎\n\n　　　　edge浏览器仍然使用Chakra引擎\n\n　　　　firefox使用monkey系列引擎\n\n　　　　safari使用的SquirrelFish系列引擎\n\n　　　　Opera使用Carakan引擎\n\n　　　　chrome使用V8引擎。nodeJs其实就是封装了V8引擎\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20170605144024633?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvR1lfVV9ZRw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),e._v(" "),a("p",[e._v('主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。'),a("br"),e._v('\n只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。')]),e._v(" "),a("p",[e._v('执行栈中的代码（同步任务），总是在读取"任务队列"（异步任务）之前执行。')]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/mr_gly/article/details/50393127",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器内核及JS引擎各有什么功能"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/flyings/p/7058851.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("js运行原理"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/gy_u_yg/article/details/72869315",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript的执行原理"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"js中的异步运行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中的异步运行机制","aria-hidden":"true"}},[e._v("#")]),e._v(" JS中的异步运行机制")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。")])]),e._v(" "),a("li",[a("p",[e._v("（2）主线程之外，还存在一个”任务队列”（task queue）。只要异步任务有了运行结果，就在”任务队列”之中放置一个事件。")])]),e._v(" "),a("li",[a("p",[e._v("（3）一旦”执行栈”中的所有同步任务执行完毕，系统就会读取”任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。")])]),e._v(" "),a("li",[a("p",[e._v("（4）主线程不断重复上面的第三步。")])])]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/fairyly/front-end-summary/blob/gh-pages/4.0.3%20JavaScript%20%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6%2B%E8%BF%90%E8%A1%8C%E5%8E%9F%E7%90%86.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("4.0.3 JavaScript 执行机制+运行原理.md"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=n.exports}}]);