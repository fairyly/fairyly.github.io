(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{261:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_3-1-6-this-在不同环境的指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-6-this-在不同环境的指向","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1.6 this 在不同环境的指向")]),s._v(" "),a("h2",{attrs:{id:"js中this在不同环境的指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中this在不同环境的指向","aria-hidden":"true"}},[s._v("#")]),s._v(" js中this在不同环境的指向")]),s._v(" "),a("p",[s._v("this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，\n实际上this的最终指向的是那个调用它的对象；")]),s._v(" "),a("p",[s._v("1.函数调用模式")]),s._v(" "),a("p",[s._v("当作函数调用，这时函数内的this指向全局对象（大对数情况下是window）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function a(){    \n   var num= 233;    \n   console.log(this.num); //undefined    \n   console.log(this); //Window\n}\na();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("按照我们上面说的this最终指向的是调用它的对象，"),a("br"),s._v("\n这里的函数a实际是被Window对象所点出来的，"),a("br"),s._v("\n相当于window.a();"),a("br"),s._v("\na() 是 一个函数也可以说是方法 ，那方法肯定是由对象来调用的。"),a("br"),s._v("\n所以当执行 a(); 时 就有一个隐式对象调用了a() ，这个隐式对象就是 window;")]),s._v(" "),a("h2",{attrs:{id:"_2-方法调用模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法调用模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.方法调用模式")]),s._v(" "),a("p",[s._v("当一个函数是一个对象的属性时，我们称它为该对象的一个方法，当一个方法被调用时，this指向该对象;")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var o = {\n    t:"test",\n    fn:function(){\n        console.log(this.t);  //test\n    }\n}\no.fn();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这里的this指向的是对象o，因为调用这个fn是通过o.fn()执行的，那自然指向就是对象o，"),a("br"),s._v("\n这里再次强调一点，this的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁;"),a("br"),s._v("\n如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象;")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var o = {\n    a:10,\n    b:{        // a:12,\n        fn:function(){\n            console.log(this.a); //undefined\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("o.b.fn();//尽管对象b中没有属性a，这个this指向的也是对象b，因为this只会指向它的上一级对象，"),a("br"),s._v("\n不管这个对象中有没有this要的东西")]),s._v(" "),a("ul",[a("li",[s._v("还有一种比较特殊的情况:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var o = {\n    a:10,\n    b:{\n        a:12,\n        fn:function(){\n            console.log(this.a); //undefined\n            console.log(this); //window\n        }\n    }\n}\nvar j = o.b.fn;\nj();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这里this指向的是window,this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的;"),a("br"),s._v("\n虽然函数fn是被对象b所引用，但是在将fn赋值给变量j的时候并没有执行所以最终指向的是window;")]),s._v(" "),a("h2",{attrs:{id:"_3-构造器调用模式-使用new调用的函数称为构造器函数，此时的this指向该构造器函数实例出来的对象；"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造器调用模式-使用new调用的函数称为构造器函数，此时的this指向该构造器函数实例出来的对象；","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.构造器调用模式 使用new调用的函数称为构造器函数，此时的this指向该构造器函数实例出来的对象；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function Fn(){    \n    this.user = "test";\n}\n var a = new Fn();\nconsole.log(a.user); //test\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这个this指向对象a,这里之所以对象a可以点出函数Fn里面的user是因为new关键字可以改变this的指向，将这个this指向对象a;")]),s._v(" "),a("p",[s._v("这里用变量a创建了一个Fn的实例（相当于复制了一份Fn到对象a里面），此时仅仅只是创建，并没有执行，\n而调用这个函数Fn的是对象a，那么this指向的自然是对象a，那么为什么对象Fn中会有user，\n因为你已经复制了一份Fn函数到对象a中，用了new关键字就等同于复制了一份。 　　\n除了上面的这些以外，还可以自行改变this的指向，用JavaScript中call,apply,bind方法更改this的指向。 　　\n一个小问题当this碰到return时")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function fn()  \n{  \n    this.user = 'test';  \n    return {};  \n}\nvar a = new fn;  \nconsole.log(a.user); //undefined\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("再看一个")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function fn()  \n{  \n    this.user = 'test';  \n    return function(){};\n}\nvar a = new fn;  \nconsole.log(a.user); //undefined\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("再来")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function fn()  \n{  \n    this.user = 'test';  \n    return 1;\n}\nvar a = new fn;  \nconsole.log(a.user); //test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function fn()  \n{  \n    this.user = 'test';  \n    return undefined;\n}\nvar a = new fn;  \nconsole.log(a.user); //test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("什么意思呢？ 　　如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function fn()  \n{  \n    this.user = 'test';  \n    return undefined;\n}\nvar a = new fn;  \nconsole.log(a); //fn {user: \"test\"}\n　　还有一点就是虽然null也是对象，但是在这里this还是指向那个函数的实例，因为null比较特殊。\n\nfunction fn()  \n{  \n    this.user = 'test';  \n    return null;\n}\nvar a = new fn;  \nconsole.log(a.user); //test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"_4-apply-call调用模式以及bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-apply-call调用模式以及bind","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.apply/call调用模式以及bind")]),s._v(" "),a("p",[s._v("apply、call、bind方法可以让我们设定调用者中的this指向谁")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function showValue(){\n  console.log(this.value);\n}\nvar obj={\n  value:4\n}\nshowValue.call(obj)//输出4，this指向了obj对象\ncall()：\n\nvar a = {\n    user:"test",\n    fn:function(){\n        console.log(this.user); //test\n    }\n}\nvar b = a.fn;\nb.call(a);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("通过在call方法，给第一个参数添加要把b添加到哪个环境中，简单来说，this就会指向那个对象，这里指向a ;")]),s._v(" "),a("p",[s._v("apply();")]),s._v(" "),a("p",[s._v("apply方法和call方法有些相似，它也可以改变this的指向;")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var a = {\n    user:"test",\n    fn:function(){\n        console.log(this.user); //test\n    }\n}\nvar b = a.fn;\nb.apply(a);\n//注意如果call和apply的第一个参数写的是null，那么this指向的是window对象\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_5-箭头函数中调用："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-箭头函数中调用：","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.箭头函数中调用：")]),s._v(" "),a("p",[s._v("es6里面this指向固定化，始终指向外部对象，因为箭头函数没有this,因此它自身不能进行new实例化,\n同时也不能使用call, apply, bind等方法来改变this的指向;")]),s._v(" "),a("p",[s._v("function Timer() {"),a("br"),s._v("\nthis.seconds = 0;\nsetInterval( () => this.seconds ++, 1000);\n}\nvar timer = new Timer();")]),s._v(" "),a("p",[s._v("setTimeout( () => console.log(timer.seconds), 3100);"),a("br"),s._v("\n// 3\n在构造函数内部的setInterval()内的回调函数， this始终指向实例化的对象， 并获取实例化对象的seconds的属性, 每1s这个属性的值都会增加1。\n否则最后在3s后执行setTimeOut()函数执行后输出的是0；")]),s._v(" "),a("h2",{attrs:{id:"_6-eval函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-eval函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 6.Eval函数")]),s._v(" "),a("p",[s._v("该函数执行的时候，this绑定到当前作用域的对象上")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    var name="XL";    \n    var person={\n        name:"xl",\n        showName:function(){            \n            eval("console.log(this.name)");\n        }\n    }\n    \n    person.showName();  //输出  "xl"\n    \n    var a=person.showName;\n    a();  //输出  "XL"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"严格模式-‘use-strict’"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格模式-‘use-strict’","aria-hidden":"true"}},[s._v("#")]),s._v(" 严格模式 ‘use strict’;")]),s._v(" "),a("p",[s._v("如果在严格模式的情况下执行纯粹的函数调用，那么这里的的\nthis 并不会指向全局，而是 undefined，这样的做法是为了消除 js 中一些不严谨的行为；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'use strict';\nfunction test() {\n  console.log(this);\n};\n\ntest();\n\n// undefined\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("部分参考：追梦子http://www.cnblogs.com/pssp/p/5216085.html")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/fairyly/front-end-summary/blob/gh-pages/4.1.3.%20this%20%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%8E%AF%E5%A2%83%E4%B8%AD%E6%8C%87%E5%90%91.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("front-end-summary---4.1.3"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=t.exports}}]);