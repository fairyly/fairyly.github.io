(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{296:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_3-2-2-浅拷贝和深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-浅拷贝和深拷贝","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2.2 浅拷贝和深拷贝")]),s._v(" "),a("p",[s._v("JS 中的浅拷贝与深拷贝，只是针对复杂数据类型（Object，Array）的复制问题。")]),s._v(" "),a("p",[s._v("浅拷贝与深拷贝都可以实现在已有对象上再生出一份的作用。但是对象的实例是存储")]),s._v(" "),a("p",[s._v("在堆内存中然后通过一个引用值去操作对象，由此拷贝的时候就存在两种情况了：拷贝引用和拷贝实例，这也是浅拷贝和深拷贝的区别。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("浅拷贝：浅拷贝是拷贝引用，拷贝后的引用都是指向同一个对象的实例，彼此之间的操作会互相影响")])]),s._v(" "),a("li",[a("p",[s._v("深拷贝：在堆中重新分配内存，并且把源对象所有属性都进行新建拷贝，\n以保证深拷贝的对象的引用图不包含任何原有对象或对象图上的任何对象，拷贝后的对象与原 来的对象是完全隔离，互不影响")])])]),s._v(" "),a("ul",[a("li",[s._v("浅拷贝")])]),s._v(" "),a("p",[s._v("浅拷贝分两种情况，拷贝直接拷贝源对象的引用 和 源对象拷贝实例，但其属性（类型为Object，Array的属性）拷贝引用。")]),s._v(" "),a("p",[s._v("拷贝原对象的引用")]),s._v(" "),a("p",[s._v("这是最简单的浅拷贝。例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var a = {c:1};\nvar b = a;\nconsole.log(a === b); // 输出true。\na.c = 2;\nconsole.log(b.c); // 输出 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("源对象拷贝实例，其属性对象拷贝引用。")]),s._v(" "),a("p",[s._v("这种情况，外层源对象是拷贝实例，如果其属性元素为复杂杂数据类型时，内层元素拷贝引用。\n对源对象直接操作，不影响两外一个对象，但是对其属性操作时候，会改变两外一个对象的属性的只。\n常用方法为：Array.prototype.slice(), Array.prototype.concat(), jQury的$.extend({},obj)，例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var a = [{c:1}, {d:2}];\nvar b = a.slice();\nconsole.log(a === b); // 输出false，说明外层数组拷贝的是实例\na[0].c = 3;\nconsole.log(b[0].c); // 输出 3，说明其元素拷贝的是引用\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("深拷贝")])]),s._v(" "),a("p",[s._v("深拷贝后，两个对象，包括其内部的元素互不干扰。"),a("br"),s._v("\n第一种用JSON.parse(JSON.stringify(obj))，"),a("br"),s._v("\n第二种可以使用for...in加递归完成")]),s._v(" "),a("p",[s._v("递归")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function isObj(obj) {\n    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null\n}\nfunction deepCopy(obj) {\n    let tempObj = Array.isArray(obj) ? [] : {}\n    for(let key in obj) {\n        tempObj[key] = isObj(obj[key]) ? deepCopy(obj[key]) : obj[key]\n    }\n    return tempObj\n}\n\n作者：YDJFE\n链接：https://juejin.im/post/5b235b726fb9a00e8a3e4e88\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("常见方法有JSON.parse(),JSON.stringify()，jQury的$.extend(true,{},obj)，lodash的_.cloneDeep和_.clone(value, true)。例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var a = {c: {d: 1}};\nvar b = $.extend(true, {}, a);\nconsole.log(a === b); // 输出false\na.c.d = 3;\nconsole.log(b.c.d); // 输出 1，没有改变。\n\n\n// JSON.parse(),JSON.stringify()\nconst oldObj = {\n  a: 1,\n  b: [ 'e', 'f', 'g' ],\n  c: { h: { i: 2 } }\n};\n\nconst newObj = JSON.parse(JSON.stringify(oldObj));\nconsole.log(newObj.c.h, oldObj.c.h); // { i: 2 } { i: 2 }\nconsole.log(oldObj.c.h === newObj.c.h); // false\nnewObj.c.h.i = 'change';\nconsole.log(newObj.c.h, oldObj.c.h); // { i: 'change' } { i: 2 }\n\n作者：寻找海蓝96\n链接：https://juejin.im/post/5abb55ee6fb9a028e33b7e0a\n\n确实,这个方法虽然可以解决绝大部分是使用场景,但是却有很多坑.\n\n1.他无法实现对函数 、RegExp等特殊对象的克隆\n\n2.会抛弃对象的constructor,所有的构造函数会指向Object\n\n3.对象有循环引用,会报错\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"原始类型对象的克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始类型对象的克隆","aria-hidden":"true"}},[s._v("#")]),s._v(" 原始类型对象的克隆")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1.字符串的克隆\nvar x="1";\nvar y=x;\ny="2";\nconsole.log(x) //"1"  源不变\nconsole.log(y) //"2"\n\n2.数值的克隆\nvar x=1;\nvar y=x;\ny=2;\nconsole.log(x) //1  源不变\nconsole.log(y) //2\n\n3.布尔值的克隆\nvar x=true;\nvar y=x;\ny=false;\nconsole.log(x) //true  源不变\nconsole.log(y) //false\n\n4.数组的克隆\nvar x=[1,2];\nvar y=x;\ny[3] = 8;\n\nconsole.log(x) //[1, 2, empty, 8]  源跟着变化\nconsole.log(y) //[1, 2, empty, 8]\n原始数组x，克隆数组y，修改了克隆数组y，但也同时修改了原始数组x，这就是引用对象的特点。\n=====================================\nvar x=[1,2];\nvar y=[];\nvar i=0;\nvar j=x.length;\nfor(;i<j;i++)\n{\n\ty[i]=x[i];\n}\ny[3] = 8;\n\nconsole.log(x) //[1, 2]  源不变\nconsole.log(y) //[1, 2, empty, 8]\n克隆数组y，原始数组x，两个数组互补干扰，实现了完整的数组克隆\n--------------------------------------\nvar _test = [1,2,3];//原数组\nvar _testCopy = [].concat(_test);//拷贝数组\n_testCopy[0]=4;\nconsole.log(_test);// [1,2,3]\nconsole.log(_testCopy);//[4,2,3]\n-----------------------------------\n\n\n5. 对象的克隆\n和数组的克隆同理，\nvar x={1:2,3:4};\nvar y=x;\ny[4] =6\nconsole.log(x) //{1: 2, 3: 4, 4: 6}  源变\nconsole.log(y) //{1: 2, 3: 4, 4: 6}\n\n======================================\n完整的克隆\nvar x={1:2,3:4};\nvar y={};\nvar i;\nfor(i in x)\n{\n  y[i]=x[i];\n}\ny[5]=6;\n \nconsole.log(x); // Object {1: 2, 3: 4} \nconsole.log(y);// Object {1: 2, 3: 4, 5: 6} \n\n------------------------------------------\nvar _test = [{"name":"weifeng"},{"name":"boy"}];//原数组\nvar _testCopy = [].concat(JSON.parse(JSON.stringify(_test)));//拷贝数组,注意这行的拷贝方法\n_testCopy[1].name="girl";\nconsole.log(_test);// [{"name":"weifeng"},{"name":"boy"}]\nconsole.log(_testCopy);//[{"name":"weifeng"},{"name":"girl"}]\n------------------------------------------\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br")])]),a("h2",{attrs:{id:"完整的对象克隆demo-在生产环境中最好用lodash的深克隆实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整的对象克隆demo-在生产环境中最好用lodash的深克隆实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 完整的对象克隆demo,在生产环境中最好用"),a("code",[s._v("lodash")]),s._v("的深克隆实现.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function clone(obj)\n{\n\tvar o,i,j,k;\n\tif(typeof(obj)!="object" || obj===null)return obj;\n\tif(obj instanceof(Array))\n\t{\n\t\to=[];\n\t\ti=0;j=obj.length;\n\t\tfor(;i<j;i++)\n\t\t{\n\t\t\tif(typeof(obj[i])=="object" && obj[i]!=null)\n\t\t\t{\n\t\t\t\to[i]=arguments.callee(obj[i]);\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\to[i]=obj[i];\n\t\t\t}\n\t\t}\n\t}\n\telse\n\t{\n\t\to={};\n\t\tfor(i in obj)\n\t\t{\n\t\t\tif(typeof(obj[i])=="object" && obj[i]!=null)\n\t\t\t{\n\t\t\t\to[i]=arguments.callee(obj[i]);\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\to[i]=obj[i];\n\t\t\t}\n\t\t}\n\t}\n\treturn o;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("p",[s._v("// 只解决date，reg类型，其他的可以自己添加")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function deepCopy(obj, hash = new WeakMap()) {\n    let cloneObj\n    let Constructor = obj.constructor\n    switch(Constructor){\n        case RegExp:\n            cloneObj = new Constructor(obj)\n            break\n        case Date:\n            cloneObj = new Constructor(obj.getTime())\n            break\n        default:\n            if(hash.has(obj)) return hash.get(obj)\n            cloneObj = new Constructor()\n            hash.set(obj, cloneObj)\n    }\n    for (let key in obj) {\n        cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key], hash) : obj[key];\n    }\n    return cloneObj\n}\n\n\n作者：YDJFE\n链接：https://juejin.im/post/5b235b726fb9a00e8a3e4e88\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"递归去复制所有层级属性。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归去复制所有层级属性。","aria-hidden":"true"}},[s._v("#")]),s._v(" 递归去复制所有层级属性。")]),s._v(" "),a("p",[s._v("深拷贝的函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function deepClone(obj){\n    let objClone = Array.isArray(obj)?[]:{};\n    if(obj && typeof obj==="object"){\n        for(key in obj){\n            if(obj.hasOwnProperty(key)){\n                //判断ojb子元素是否为对象，如果是，递归复制\n                if(obj[key]&&typeof obj[key] ==="object"){\n                    objClone[key] = deepClone(obj[key]);\n                }else{\n                    //如果不是，简单复制\n                    objClone[key] = obj[key];\n                }\n            }\n        }\n    }\n    return objClone;\n}    \nlet a=[1,2,3,4],\n    b=deepClone(a);\na[0]=2;\nconsole.log(a,b);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("生产环境还是使用 loadsh 中封装好的")])])]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5abb55ee6fb9a028e33b7e0a",target:"_blank",rel:"noopener noreferrer"}},[s._v("掘金---实现深拷贝"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=t.exports}}]);