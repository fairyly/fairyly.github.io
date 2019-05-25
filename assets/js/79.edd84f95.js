(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{222:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_3-3-2-mvvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-mvvm","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3.2 MVVM")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/DMQ/mvvm/raw/master/img/2.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"vue-mvvm实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-mvvm实现原理","aria-hidden":"true"}},[s._v("#")]),s._v(" vue mvvm实现原理")]),s._v(" "),e("p",[s._v("要实现mvvm的双向绑定，就必须要实现以下几点：")]),s._v(" "),e("ul",[e("li",[s._v("1、实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者")]),s._v(" "),e("li",[s._v("2、实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数")]),s._v(" "),e("li",[s._v("3、实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图")]),s._v(" "),e("li",[s._v("4、mvvm入口函数，整合以上三者")])]),s._v(" "),e("h2",{attrs:{id:"_1、实现observer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、实现observer","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、实现Observer")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var data = {name: 'kindeng'};\nobserve(data);\ndata.name = 'dmq'; // 哈哈哈，监听到值变化了 kindeng --\x3e dmq\n\nfunction observe(data) {\n    if (!data || typeof data !== 'object') {\n        return;\n    }\n    // 取出所有属性遍历\n    Object.keys(data).forEach(function(key) {\n\t    defineReactive(data, key, data[key]);\n\t});\n};\n\nfunction defineReactive(data, key, val) {\n    observe(val); // 监听子属性\n    Object.defineProperty(data, key, {\n        enumerable: true, // 可枚举\n        configurable: false, // 不能再define\n        get: function() {\n            return val;\n        },\n        set: function(newVal) {\n            console.log('哈哈哈，监听到值变化了 ', val, ' --\x3e ', newVal);\n            val = newVal;\n        }\n    });\n}\n\n// 需要改善\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/DMQ/mvvm/blob/master/js/observer.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整: observer.js"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_2、实现compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、实现compile","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、实现Compile")]),s._v(" "),e("blockquote",[e("p",[s._v("compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，"),e("br"),s._v("\n一旦数据有变动，收到通知，更新视图，如图所示：")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/DMQ/mvvm/raw/master/img/3.png",alt:""}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function Compile(el) {\n    this.$el = this.isElementNode(el) ? el : document.querySelector(el);\n    if (this.$el) {\n        this.$fragment = this.node2Fragment(this.$el);\n        this.init();\n        this.$el.appendChild(this.$fragment);\n    }\n}\nCompile.prototype = {\n\tinit: function() { this.compileElement(this.$fragment); },\n    node2Fragment: function(el) {\n        var fragment = document.createDocumentFragment(), child;\n        // 将原生节点拷贝到fragment\n        while (child = el.firstChild) {\n            fragment.appendChild(child);\n        }\n        return fragment;\n    }\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/DMQ/mvvm/blob/master/js/compile.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整: compile.js"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_3、实现watcher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、实现watcher","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、实现Watcher")]),s._v(" "),e("blockquote",[e("p",[s._v("Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是:"),e("br"),s._v("\n1、在自身实例化时往属性订阅器(dep)里面添加自己"),e("br"),s._v("\n2、自身必须有一个update()方法"),e("br"),s._v("\n3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function Watcher(vm, exp, cb) {\n    this.cb = cb;\n    this.vm = vm;\n    this.exp = exp;\n    // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解\n    this.value = this.get(); \n}\nWatcher.prototype = {\n    update: function() {\n        this.run();\t// 属性值变化收到通知\n    },\n    run: function() {\n        var value = this.get(); // 取到最新值\n        var oldVal = this.value;\n        if (value !== oldVal) {\n            this.value = value;\n            this.cb.call(this.vm, value, oldVal); // 执行Compile中绑定的回调，更新视图\n        }\n    },\n    get: function() {\n        Dep.target = this;\t// 将当前订阅者指向自己\n        var value = this.vm[exp];\t// 触发getter，添加自己到属性订阅器中\n        Dep.target = null;\t// 添加完毕，重置\n        return value;\n    }\n};\n// 这里再次列出Observer和Dep，方便理解\nObject.defineProperty(data, key, {\n\tget: function() {\n\t\t// 由于需要在闭包内添加watcher，所以可以在Dep定义一个全局target属性，暂存watcher, 添加完移除\n\t\tDep.target && dep.addDep(Dep.target);\n\t\treturn val;\n\t}\n    // ... 省略\n});\nDep.prototype = {\n    notify: function() {\n        this.subs.forEach(function(sub) {\n            sub.update(); // 调用订阅者的update方法，通知变化\n        });\n    }\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br")])]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/DMQ/mvvm/blob/master/js/watcher.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整: watcher.js"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_4、实现mvvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、实现mvvm","aria-hidden":"true"}},[s._v("#")]),s._v(" 4、实现MVVM")]),s._v(" "),e("blockquote",[e("p",[s._v("MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，"),e("br"),s._v("\n通过Observer来监听自己的model数据变化，"),e("br"),s._v("\n通过Compile来解析编译模板指令，"),e("br"),s._v("\n最终利用Watcher搭起Observer和Compile之间的通信桥梁，"),e("br"),s._v("\n达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("一个简单的MVVM构造器是这样子：\n\nfunction MVVM(options) {\n    this.$options = options;\n    var data = this._data = this.$options.data;\n    observe(data, this);\n    this.$compile = new Compile(options.el || document.body, this)\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/DMQ/mvvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("剖析vue实现原理，自己动手实现mvvm"),e("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=t.exports}}]);