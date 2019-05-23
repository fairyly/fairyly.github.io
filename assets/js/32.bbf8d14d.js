(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{249:function(n,e,s){"use strict";s.r(e);var a=s(0),t=Object(a.a)({},function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_3-0-1-es5-实现-const"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-1-es5-实现-const","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.0.1 ES5 实现 const")]),n._v(" "),s("blockquote",[s("p",[n._v("const 有什么特征，常量： 只读的常量。一旦声明，常量的值就不能改变。"),s("br"),n._v("\n就是要设置一个变量的描述对象属性 writable: false, configurable: false")])]),n._v(" "),s("ul",[s("li",[n._v("1.获取一个对象属性的 描述对象")])]),n._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"http://es6.ruanyifeng.com/?search=%E9%80%97%E5%8F%B7&x=0&y=0#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E6%9E%9A%E4%B8%BE%E6%80%A7%E5%92%8C%E9%81%8D%E5%8E%86",target:"_blank",rel:"noopener noreferrer"}},[n._v("属性的可枚举性和遍历"),s("OutboundLink")],1)])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("let b = {a:1}\n\nObject.getOwnPropertyDescriptor(b, 'a');\n// {value: 1, writable: true, enumerable: true, configurable: true}\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("ul",[s("li",[n._v("2.可以通过 Object.defineProperty 来实现")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Object.defineProperty(CONST, \"A\", {\n  value: 1,\n  writable: false,        //设置属性只读\n  configurable: false,    //设置属性不可配置\n  enumerable: true\n});\n\n\n\n\n也看到 有的说使用 设置 setter 和 getter 函数\n\nfunction setConst(name, value) {\n  Object.defineProperty(window, name, {\n    set(x) {\n      throw new Error(`Assignment to constant variable ${name}`);\n    },\n    get() {\n      return value;\n    }\n  })\n}\n\nsetConst('name','jack');\nname = 'rose';\n//Uncaught Error: Assignment to constant variable name\n\n参考：https://segmentfault.com/q/1010000008615502\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://es6.ruanyifeng.com/?search=%E9%80%97%E5%8F%B7&x=0&y=0#docs/let",target:"_blank",rel:"noopener noreferrer"}},[n._v("es6---let 和 const 命令"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"http://www.cnblogs.com/dong-xu/p/6239199.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("JavaScript 常量定义"),s("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=t.exports}}]);