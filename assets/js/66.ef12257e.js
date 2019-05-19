(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{209:function(s,n,a){"use strict";a.r(n);var r=a(0),e=Object(r.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_4-1-3-判断素数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-判断素数","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.1.3 判断素数")]),s._v(" "),a("blockquote",[a("p",[s._v("质数概念：质数是指在大于1的自然数中,除了1和该数自身外,无法被其他自然数整除的数。2是唯一一个既是偶数又是质数的数字")])]),s._v(" "),a("h2",{attrs:{id:"_1-判断一个数是不是素数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断一个数是不是素数","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.判断一个数是不是素数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" function isPrinme(n) {\n    if(n == 0 || n==1){\n        return false;\n    }\n    if(n==2){\n        return true;\n    }\n    for(var i=2;i<Math.sqrt(n);i++){\n        if(n%i == 0){\n            return false;\n        }\n    }\n    return true;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_2-输出n内的所有素数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-输出n内的所有素数","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.输出n内的所有素数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nfunction get_primes(n){\n  var x,arr=[];\n  for(x=1;x<=n;x++){\n      arr.push(x);\n  }\n    return arr.filter(function(num){\n        if (num === 1) {\n            return false;\n        }\n        for(var i=2;i<=Math.sqrt(num);i++){\n            if (num%i === 0){\n                return false;\n            }\n        }\n        return true;\n    });\n}\nget_primes(100)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("另一种写法")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function prinmeN(n) {\n        var flag=0;\n        var result=[];\n        if(n == 0 || n==1){\n            result=[];\n        }else if(n==2){\n            result=[2];\n        } else if (n==3 || n==4){\n            result=[2,3]\n        }else{\n            result.push(2,3);\n            for(var i=5;i<=n;i++){\n                for(var j=2;j<=Math.sqrt(i);j++){\n                    if(i%j == 0){\n                        flag=1;\n                        break;\n                    }else{\n                        flag=0;\n                    }\n                }\n                if(flag==0){\n                    result.push(i);\n                }\n            }\n\n        }\n        return result;\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lmjZone/p/9593063.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("js 判断素数(质数)"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=e.exports}}]);