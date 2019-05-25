(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{276:function(t,r,a){"use strict";a.r(r);var e=a(0),s=Object(e.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-1-1-css-相关知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-css-相关知识","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1.1 css 相关知识")]),t._v(" "),a("blockquote",[a("p",[t._v("本质上就是数学中的矩阵计算")])]),t._v(" "),a("h2",{attrs:{id:"_1-transform-的-rotate-translatex-先后顺序有何不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-transform-的-rotate-translatex-先后顺序有何不同","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.transform 的 rotate translateX 先后顺序有何不同")]),t._v(" "),a("blockquote",[a("p",[t._v("属性书写的先后顺序不同，也会造成最终的表现形式不同"),a("br"),t._v("\n结论就是"),a("strong",[t._v("写在后面的先执行")])])]),t._v(" "),a("p",[a("strong",[t._v("第一会改变中心点，第二会改变坐标系，所以请遵循先后顺序。")])]),t._v(" "),a("blockquote",[a("p",[t._v("translateX等虽然让元素发生了位移，但是是不会改变元素的"),a("strong",[t._v("中心点")])])]),t._v(" "),a("blockquote",[a("p",[t._v("transform-origin\n区别于景深，它是作用于变换的dom上"),a("br"),t._v("\nrotate scale skew 其实是围绕transform-origin指定的位置进行转换的，"),a("br"),t._v("\n之所以看起来是围绕中心点，是因为center是这个css的默认值而已")])]),t._v(" "),a("h2",{attrs:{id:"matrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matrix","aria-hidden":"true"}},[t._v("#")]),t._v(" matrix")]),t._v(" "),a("blockquote",[a("p",[t._v("matrix 其实是可以代替：偏移量（translate）,缩放（scale），斜切（skew），旋转（rotate）， 四大功能的，"),a("br"),t._v("\n任意一个matrix样式改变而来的形状也都能通过以上四个功能实现，它们是互通的。")])]),t._v(" "),a("p",[t._v("假定matrix的六个参数用字母表示如下：transform: matrix(a,b,c,d,e,f);")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("e和f 代表着偏移量translate，x和y轴")])]),t._v(" "),a("li",[a("p",[t._v("a和d 代表着缩放比例scale,x 和y轴")])]),t._v(" "),a("li",[a("p",[t._v("b和c 代表着斜切skew（具体参数和角度关系为, b--\x3etanθ y轴 c--\x3etanθ x轴 ,我们具体操作的时候还是要使用小数的）")])]),t._v(" "),a("li",[a("p",[t._v("abcd 中的ad代表缩放(scale),bc代表者斜切(skew); abcd四个参数代表着旋转，这你可能难以理解，请继续往下看。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("为啥6个数能做到，translate，scale，skew，rotate了，因为一个对应两个参数， 原来最后一个rotate 被缩放和斜切给替代了")])]),t._v(" "),a("ul",[a("li",[t._v("对应的矩阵")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("a  c   e\nb  d   f\n0  0   1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://image.zhangxinxu.com/image/blog/201206/css-transforms-matrix5.gif",alt:""}})]),t._v(" "),a("p",[t._v("旋转是可以理解为, "),a("strong",[t._v("旋转=规律的缩放+规律的斜切")]),t._v(" 这里的意思是旋转可以用缩放和斜切一起用来得到, 两者联系在于这个角度θ。具体如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("matrix(cosθ,sinθ,-sinθ,cosθ,0,0)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVS0FG?w=310&h=126",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://segmentfault.com/img/bVS0F1?w=766&h=180",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"矩阵运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#矩阵运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 矩阵运算")]),t._v(" "),a("ul",[a("li",[t._v("矩阵与矩阵的乘法:\n"),a("ul",[a("li",[t._v("1、运算规则\n　　A与B的乘积是这样一个矩阵："),a("br"),t._v("\n　　(1) 行数与（左矩阵）A相同，列数与（右矩阵）B相同，即．"),a("br"),t._v("\n　　(2) C的第i行第j列的元素由A的第i行元素与B的第i列元素对应相乘，再取乘积之和．")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVYgF4?w=373&h=63",alt:""}})]),t._v(" "),a("p",[t._v("第一个矩阵中"),a("strong",[t._v("第一行的数据")]),t._v("分别与第二个矩阵中"),a("strong",[t._v("每一列")]),t._v("的数据相乘后相加")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("a d g        i          a*i +d*m +g*n\nb e h   *    m     =    b*i +e*m +h*n\nc f j        n          c*i + f*m +j*n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://dev.opera.com/articles/understanding-the-css-transforms-matrix/7.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_2-transform动画和直接使用left、top改变位置有什么优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-transform动画和直接使用left、top改变位置有什么优缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.transform动画和直接使用left、top改变位置有什么优缺点")]),t._v(" "),a("blockquote",[a("p",[t._v("通过调用translate，会启动硬件加速，即在GPU层对该元素进行渲染。"),a("br"),t._v("\n这样，CPU就会相对解放出来进行其他的计算，GPU对样式的计算相对较快，且保证较大的帧率。我们可以通过2d和3d的transform来启用GPU计算。")])]),t._v(" "),a("p",[t._v("1，尽量使用keyframes和transform进行动画，这样浏览器会自身分配每帧的长度，并作出优化")]),t._v(" "),a("p",[t._v("2，如果非要使用js来进行动画，使用requestAnimateFrame")]),t._v(" "),a("p",[t._v("3，使用2d transform而不是改变top/left的值，这样会有更短的repaint时间和更圆滑的动画效果")]),t._v(" "),a("p",[t._v("4，移动端的动画效果可能会比pc端的差，因此一定要注意性能优化，尽量减少动画元素的DOM复杂性，待动画结束后异步执行DOM操作")]),t._v(" "),a("ul",[a("li",[t._v("参考："),a("a",{attrs:{href:"https://www.cnblogs.com/accordion/p/4593576.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("尽量使用translate而不是改变top/left进行动画（翻译）"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/8b7997a491d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("transform"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://dev.opera.com/articles/understanding-the-css-transforms-matrix/",target:"_blank",rel:"noopener noreferrer"}},[t._v("understanding-the-css-transforms-matrix"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010688390",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何优雅的使用css3的矩阵变换matrix(矩阵)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解CSS3 transform中的Matrix(矩阵)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www2.edu-edu.com.cn/lesson_crs78/self/j_0022/soft/ch0605.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("6.5 矩阵的运算及其运算规则"),a("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=s.exports}}]);