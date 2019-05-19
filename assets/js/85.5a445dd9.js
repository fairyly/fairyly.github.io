(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{201:function(s,n,a){"use strict";a.r(n);var r=a(0),t=Object(r.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_4-2-1-js数组全排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-js数组全排列","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.2.1 js数组全排列")]),s._v(" "),a("h2",{attrs:{id:"递归实现js数组全排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归实现js数组全排列","aria-hidden":"true"}},[s._v("#")]),s._v(" 递归实现js数组全排列")]),s._v(" "),a("blockquote",[a("p",[s._v("当n = 1时， 数组arr = [A]，全排列结果为 [A];"),a("br"),s._v("\n当n = 2时， 数组arr = [A, B]，全排列结果为  [A, B]  [B, A];"),a("br"),s._v("\n当n = 3时， 数组arr = [A, B, C]，全排列结果为")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[A, B, C]\n[A, C, B]\n[B, A, C]\n[B, C, A]\n[C, A, B]\n[C, B, A]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("到n = 3时可以看出全排列有以下规律:")]),s._v(" "),a("ul",[a("li",[s._v("1.固定第一个元素，将剩下的元素进行全排列处理；")]),s._v(" "),a("li",[s._v("2.将第一个元素与依次与第i（1<i<=arr.length）个元素互换，将剩下的元素进行全排列处理；")])]),s._v(" "),a("p",[s._v("很适合使用递归解决。只要写一个全排列函数permutation，能固定一个下标为i的元素，剩下元素再进行全排列即可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ES5中使用闭包将全排列函数封装。\n\n// 数组全排列\nfunction Permutation(arr) {\n    this.len = 0;    // 存储全排列次数\n    this.arr = arr.concat();   // 传入的数组\n    this.result = [];    // 存储全排列结果\n\n    // 首次创建对象时初始化方法\n    if (typeof Permutation.run == 'undefined') {\n        Permutation.prototype.start = function() {\n            this.run(0);\n        }\n\n        // 递归函数(核心方法)，index为数组下标\n        Permutation.prototype.run = function(index) {\n            // 单遍历到数组末端时，将结果储存在result数组中，全排列次数加1\n            if (index == this.arr.length - 1) {\n                this.result.push(this.arr.slice());\n                this.len++;\n                return;\n            }\n\n            for(let i = index; i < this.arr.length; i++) {\n                this.swap(this.arr, index, i);      // 与下标为i的元素交换位置\n                this.run(index + 1);                // 剩下元素全排列\n                this.swap(this.arr, index, i);      // 复原数组\n            }\n        }\n\n        // 交换位置\n        Permutation.prototype.swap = function(array, i, j) {\n            var t;\n            t = array[i];\n            array[i] = array[j]; \n            array[j] = t;\n        }\n    }\n}\n\nvar per = new Permutation(['A', 'B', 'C']);\nper.start();\nconsole.log(per.result);\nconsole.log(per.len);\n// [ [ 'A', 'B', 'C' ],\n//   [ 'A', 'C', 'B' ],\n//   [ 'B', 'A', 'C' ],\n//   [ 'B', 'C', 'A' ],\n//   [ 'C', 'B', 'A' ],\n//   [ 'C', 'A', 'B' ] ]\n// 6\n\n\nES5代码使用动态原型模式创建对象，主要是想让函数封装的尽量像一个类。在ES6中有class，语法可以更加简洁高效。\n\n  // ES6\n  class Permutation {\n    constructor(arr) {\n        this.arr = Array.from(arr);\n        this.result = [];\n        this.len = 0;\n        this.run(0);\n    }\n\n    run(index) {\n        if (index == this.arr.length - 1) {\n            this.result.push(Array.from(this.arr));\n            this.len++;\n            return;\n        }\n        for(let i = index; i < this.arr.length; i++) {\n            [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];\n            this.run(index + 1);\n            [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];\n        }\n    }\n  }\n\n  let p = new Permutation([\"A\", \"B\", \"C\"]);\n  console.log(p.result);\n  console.log(p.len);\n  // [ [ 'A', 'B', 'C' ],\n  //   [ 'A', 'C', 'B' ],\n  //   [ 'B', 'A', 'C' ],\n  //   [ 'B', 'C', 'A' ],\n  //   [ 'C', 'B', 'A' ],\n  //   [ 'C', 'A', 'B' ] ]\n  // 6\n以上就是全排列的js实现。\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br")])]),a("h2",{attrs:{id:"全排列另一个写法-可能好理解一些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全排列另一个写法-可能好理解一些","aria-hidden":"true"}},[s._v("#")]),s._v(" 全排列另一个写法(可能好理解一些)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function permutation(arr){\n\tif (arr.length == 1)\n\t\treturn arr;\n\telse if (arr.length == 2)\n\t\treturn [[arr[0],arr[1]],[arr[1],arr[0]]];\n\telse {\n\t\tvar temp = [];\n\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t\tvar save = arr[i];\n\t\t\tarr.splice(i, 1);//取出arr[i]\n\t\t\tvar res = permutation(arr);//递归排列arr[0],arr[1],...,arr[i-1],arr[i+1],...,arr[n]\n\t\t\tarr.splice(i, 0, save);//将arr[j]放入数组，保持原来的位置\n\t\t\tfor (var j = 0; j < res.length; j++) {\n\t\t\t\tres[j].push(arr[i]);\n\t\t\t\ttemp.push(res[j]);//将arr[j]组合起来\n\t\t\t}\n\t\t}\n\t\treturn temp;\n\t}\n}\n\n--------------------- \n作者：筱葭\n原文：https://blog.csdn.net/zhouziyu2011/article/details/62237216 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/6e7f88ead393",target:"_blank",rel:"noopener noreferrer"}},[s._v("递归实现js数组全排列"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=t.exports}}]);