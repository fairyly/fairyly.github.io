(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{258:function(s,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_2016-10-20-git"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2016-10-20-git","aria-hidden":"true"}},[s._v("#")]),s._v(" 2016-10-20 git")]),s._v(" "),n("blockquote",[n("p",[s._v("This document is describe git command.")])]),s._v(" "),n("h2",{attrs:{id:"git-命令格式上传本地项目到-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-命令格式上传本地项目到-github","aria-hidden":"true"}},[s._v("#")]),s._v(" git 命令格式上传本地项目到 github")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n\t1、mkdir first\n  \tcd first\n\n\t2、git init  ////生成本地git管理\n\n\t3、git add . //添加当前目录中的所有文件到索引\n\n\t4、git commit -m \"first commit\" //提交到本地源码库，并附加提交注释\n\n\t5、git remote add origin https://github.com/用户名/first.git\n\n\t6、git push -u origin master //把本地源码库push到github，  \n\t如果出现! [rejected]  master -> master (fetch first)  \n   \terror: failed to push some refs to 'git@github.com:zapnaa/abcappp.git'，  \n\t可以使用命令：git pull --rebase origin master，  \n\t再去git push -u origin master  \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"github-分支管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-分支管理","aria-hidden":"true"}},[s._v("#")]),s._v(" github 分支管理")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\t查看分支：git branch\n\t创建分支：git branch <name>\n\t切换分支：git checkout <name>\n\t创建+切换分支：git checkout -b <name>\n\t合并某分支到当前分支：git merge<name>\n\t删除分支：git branch -d <name>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"github-之-wiki"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-之-wiki","aria-hidden":"true"}},[s._v("#")]),s._v(" github 之 wiki")]),s._v(" "),n("pre",[n("code",[s._v('1、git clone https://github.com/***/weui.wiki.git  //这里克隆是自己的wiki地址；\n\n2、cd weui.wiki  进入wiki目录\n\n3、添加一些md文件或者拷贝别人的wiki，之后\n```\ngit add .\ngit commit -m "维基的一些变更信息"\ngit push  上传wiki了，输入用户名密码就ok了\n')])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n## github 之 Deployment sites\n\n  第一种方法是：在自己的github上建一个这样命名的版本库：你的github用户名.github.io;  \n  把自己做的网站页面上传进来，浏览器地址栏访问：github用户\t名.github.io就会看到页面效果；\n\n  第二种方法：  \n  1、在github新建仓库，如myblog,进入setting  ---》点击Launch automatic page generator---\x3e点击页面最后的continue to layouts,\n  ---\x3e先选择一个主题，点击 publish pages。  \n\n  这个时候会出现你的网页的网址，也就是 http://用户名.github.io/myblog;\n\n  2、在 本地f 盘创建 myblog 文件放你的github上的myblog repository;\n  ```\n    mkdir myblog\n    cd myblog\n    git clone https://github.com/fairyly/myblog.git\n  ```\n\n  在本地新建一个gh-pages分支，而这个分支是远程分支origin/gh-pages的镜像，  \n  也就是我们可以在本地的gh-pages看到github上的gh-pages的内容;  \n  git checkout -b gh-pages origin/gh-pages  \n  就会在本地看到你的来自github 上的 gh-pages 分支下的文件； \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("pre",[n("code",[s._v("  git rm -rf .      //删除原有的gh-pages文件\n```\n\n将自己的网页文件复制粘贴至这个文件夹中；然后执行命令\n\n\n```\n\tgit add .\n\tgit commit -m 'add myblog'\n\tgit push origin gh-pages\n\t然后输入用户名密码\n```\n\n访问你的网址：http://用户名.github.io/myblog就可以看效果了\n")])])])},[],!1,null,null,null);t.default=i.exports}}]);