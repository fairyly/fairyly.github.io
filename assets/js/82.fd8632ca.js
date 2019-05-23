(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{206:function(n,s,t){"use strict";t.r(s);var a=t(0),e=Object(a.a)({},function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"_4-1-9-2-计数排序（稳定排序）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-9-2-计数排序（稳定排序）","aria-hidden":"true"}},[n._v("#")]),n._v(" 4.1.9.2 计数排序（稳定排序）")]),n._v(" "),t("p",[n._v("平均时间复杂度\t{\\displaystyle O(n+k)} O(n+k)")]),n._v(" "),t("p",[n._v("最坏空间复杂度\t{\\displaystyle O(n+k)} O(n+k)")]),n._v(" "),t("blockquote",[t("p",[n._v("统计数组中每个值为 i 的元素出现的次数，存入数组  C 的第 i项;")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Array.prototype.countSort = function() {\n  const C = []\n  // 先算出每个数字出现的次数\n  for(let i = 0; i < this.length; i++) {\n    const j = this[i]\n    C[j] >= 1 ? C[j] ++ : (C[j] = 1)\n  }\n\n  const D = []\n  for(let j = 0; j < C.length; j++) {\n    if(C[j]) {\n      while(C[j] > 0) {\n        D.push(j)\n        C[j]--\n      }\n    }\n  }\n  return D\n}\nconst arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]\nconsole.log(arr.countSort())\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("wiki-计数排序"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);