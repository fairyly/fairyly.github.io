(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{245:function(s,e,n){"use strict";n.r(e);var t=n(0),a=Object(t.a)({},function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_3-3-6-event-bus-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-6-event-bus-实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3.6 Event Bus 实现")]),s._v(" "),n("blockquote",[n("p",[s._v("GitHub 上说: EventBus是Android和Java的发布/订阅事件总线。")])]),s._v(" "),n("blockquote",[n("p",[s._v("原理：eventbus 解决了兄弟组件之间事件传递问题,本质是订阅发布者模式，从而摆脱了兄弟之间需要父组件转而传递的复杂"),n("br"),s._v("\n还有一种方法是vuex数据流")])]),s._v(" "),n("h2",{attrs:{id:"三要素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三要素","aria-hidden":"true"}},[s._v("#")]),s._v(" 三要素")]),s._v(" "),n("ul",[n("li",[s._v("Event 事件。它可以是任意类型。")]),s._v(" "),n("li",[s._v("Subscriber 事件订阅者。在EventBus3.0之前我们必须定义以onEvent开头的那几个方法，分别是onEvent、onEventMainThread、onEventBackgroundThread和onEventAsync，而在3.0之后事件处理的方法名可以随意取，不过需要加上注解@subscribe()，并且指定线程模型，默认是POSTING。")]),s._v(" "),n("li",[s._v("Publisher 事件的发布者。我们可以在任意线程里发布事件，一般情况下，使用EventBus.getDefault()就可以得到一个EventBus对象，然后再调用post(Object)方法即可。")])]),s._v(" "),n("p",[s._v("作者：唱着歌的猫"),n("br"),s._v("\n链接：https://www.jianshu.com/p/f9ae5691e1bb")]),s._v(" "),n("h2",{attrs:{id:"_1-基本构造"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本构造","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.基本构造")]),s._v(" "),n("h3",{attrs:{id:"_1-1初始化class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1初始化class","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1初始化class")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class EventEmeitter {\n  constructor() {\n    this._events = this._events || new Map(); // 储存事件/回调键值对\n    this._maxListeners = this._maxListeners || 10; // 设立监听上限\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_1-2-监听与触发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-监听与触发","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 监听与触发")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 触发名为type的事件\nEventEmeitter.prototype.emit = function(type, ...args) {\n  let handler;\n  // 从储存事件键值对的this._events中获取对应事件回调函数\n  handler = this._events.get(type);\n  if (args.length > 0) {\n    handler.apply(this, args);\n  } else {\n    handler.call(this);\n  }\n  return true;\n};\n\n// 监听名为type的事件\nEventEmeitter.prototype.addListener = function(type, fn) {\n  // 将type事件以及对应的fn函数放入this._events中储存\n  if (!this._events.get(type)) {\n    this._events.set(type, fn);\n  }\n};\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"_1-3实例化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3实例化","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.3实例化")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 实例化\nconst emitter = new EventEmeitter();\n\n// 监听一个名为arson的事件对应一个回调函数\nemitter.addListener('arson', man => {\n  console.log(`expel ${man}`);\n});\n\n// 我们触发arson事件,发现回调成功执行\nemitter.emit('arson', 'low-end'); // expel low-end\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5ac2fb886fb9a028b86e328c",target:"_blank",rel:"noopener noreferrer"}},[s._v("Event Bus 进行组件通信实现"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Gozala/events/blob/master/events.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("events.js"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/greenrobot/EventBus",target:"_blank",rel:"noopener noreferrer"}},[s._v("greenrobot/EventBus"),n("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=a.exports}}]);