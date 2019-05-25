(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{204:function(n,e,s){"use strict";s.r(e);var a=s(0),t=Object(a.a)({},function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_5-1-3-koa-中间件实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-koa-中间件实现原理","aria-hidden":"true"}},[n._v("#")]),n._v(" 5.1.3 koa 中间件实现原理")]),n._v(" "),s("blockquote",[s("p",[n._v("洋葱模型(中间件模型), koa 框架的中间件模型非常好用并且简洁, 但是也有自身的缺陷, 一旦中间件数组过于庞大, 性能会有所下降,")])]),n._v(" "),s("blockquote",[s("p",[n._v("每个中间件默认接受两个参数，第一个参数是 Context 对象，第二个参数是 next 函数。只要调用 next 函数，就可以把执行权转交给下一个中间件。\n如果中间件内部没有调用 next 函数，那么执行权就不会传递下去。\n多个中间件会形成一个栈结构（middle stack），以“先进后出”（first-in-last-out）的顺序执行。整个过程就像，先是入栈，然后出栈的操作。")])]),n._v(" "),s("ul",[s("li",[n._v("参考： "),s("a",{attrs:{href:"https://juejin.im/post/5bc48ba5f265da0aaa053e17",target:"_blank",rel:"noopener noreferrer"}},[n._v("理解 Koa 框架中间件原理"),s("OutboundLink")],1)])]),n._v(" "),s("h2",{attrs:{id:"koa中间件的设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa中间件的设计","aria-hidden":"true"}},[n._v("#")]),n._v(" Koa中间件的设计")]),n._v(" "),s("p",[n._v("Koa中间件与connect中间件的设计有很大的差异：")]),n._v(" "),s("ul",[s("li",[n._v("Koa中间件的执行并不需要匹配路由，所以注册的中间件每一次请求都会执行。（当然还是需要手动调用next）；")]),n._v(" "),s("li",[n._v("Koa中通过继承event，暴露error事件让开发者自定义异常处理；")]),n._v(" "),s("li",[n._v("Koa中res.end由中间件执行完成之后自动调用，这样避免在connect忘记调用res.end导致用户得不到任何反馈。")]),n._v(" "),s("li",[n._v("Koa中采用了async/await语法让开发者利用同步的方式编写异步代码。")])]),n._v(" "),s("p",[n._v("当然，Koa中也是采用use方法注册中间件，相比较connect省去路由匹配的处理，就显得很简洁：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("use(fn) {\n  this.middleware.push(fn);\n  return this;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br")])]),s("p",[n._v("并且use支持链式调用。")]),n._v(" "),s("p",[n._v("Koa中间件的执行流程主要通过koa-compose中的compose函数完成：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function compose (middleware) {\n  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')\n  for (const fn of middleware) {\n    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')\n  }\n\n  /**\n   * @param {Object} context\n   * @return {Promise}\n   * @api public\n   */\n\n  return function (context, next) {\n    let index = -1\n    return dispatch(0)\n    function dispatch (i) {\n      if (i <= index) return Promise.reject(new Error('next() called multiple times'))\n      index = i\n      let fn = middleware[i]\n      if (i === middleware.length) fn = next\n      if (!fn) return Promise.resolve()\n      try {\n        // 递归调用下一个中间件\n        return Promise.resolve(fn(context, dispatch.bind(null, i + 1))); \n      } catch (err) {\n        return Promise.reject(err)\n      }\n    }\n  }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br")])]),s("p",[n._v("看到这里本质上connect与koa实现中间件的思想都是递归，不难看出koa相比较connect实现得更加简洁，主要原因在于：")]),n._v(" "),s("ul",[s("li",[n._v("connect中提供路由匹配的功能，而Koa中则是相当于connect中默认的'/'路径。")]),n._v(" "),s("li",[n._v("connect在捕获中间件的异常时，通过next携带error一个个中间件验证，直到错误处理中间件，"),s("br"),n._v("\n而Koa中则是用Promise包装中间件，一旦中间件发生异常，那么会直接触发reject状态，直接在Promise的catch中处理就行。")])]),n._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c1631eff265da615f772b59",target:"_blank",rel:"noopener noreferrer"}},[n._v("玩转Koa -- 核心原理分析"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5b9a23a45188255c9c751b07",target:"_blank",rel:"noopener noreferrer"}},[n._v("redux, koa, express 中间件实现对比解析"),s("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=t.exports}}]);