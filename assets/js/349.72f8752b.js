(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{745:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ch00-tensorflow-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch00-tensorflow-basics"}},[s._v("#")]),s._v(" Ch00 Tensorflow basics")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621213510643.png",alt:"image-20220621213510643"}})]),s._v(" "),a("h3",{attrs:{id:"安装tf环境-不使用anaconda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装tf环境-不使用anaconda"}},[s._v("#")]),s._v(" 安装TF环境(不使用anaconda)")]),s._v(" "),a("p",[s._v("打开nvidia控制面板--\x3e系统信息  查看CUDA版本")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621214415907.png",alt:"image-20220621214415907"}})]),s._v(" "),a("p",[s._v("一般安装的cuda工具低于等于自己驱动的版本就可以了。如果自己驱动版本太低，可以去官网下载新版的驱动装一下。（tensorflow-gpu版本2.0最低也要cuda版本10）")]),s._v(" "),a("p",[s._v("以下操作要在管理员权限下操作")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("如果只想专用cpu加速，安装\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" tensorflow\n如果想使用gpu加速，还需要安装\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" tensorflow-gpu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("安装以后还需要cuda显卡驱动")]),s._v(" "),a("p",[s._v("安装适合自己版本的cuda：https://developer.nvidia.com/cuda-11.1.1-download-archive?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exenetwork")]),s._v(" "),a("p",[s._v("在这里选择自定义，点击下一步"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621234457349.png",alt:"image-20220621234457349"}})]),s._v(" "),a("p",[s._v("选择第一个组件即可")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621234509039.png",alt:"image-20220621234509039"}})]),s._v(" "),a("p",[s._v("点击下一步继续安装（建议不要更换默认的自定义位置，如果系统盘内存实在不足，更改也没关系，记住安装的位置即可）")]),s._v(" "),a("p",[s._v("根据cuda版本下载对应的cudnn")]),s._v(" "),a("p",[s._v("解压下载下来的cudnn压缩包")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621234624771.png",alt:"image-20220621234624771"}})]),s._v(" "),a("p",[s._v("ref：https://zhuanlan.zhihu.com/p/290670392")]),s._v(" "),a("h3",{attrs:{id:"使用anoconda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用anoconda"}},[s._v("#")]),s._v(" 使用Anoconda")]),s._v(" "),a("p",[s._v("官网安装anoconda")]),s._v(" "),a("p",[s._v("查看显卡支持的cuda版本")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701215738033.png",alt:"image-20220701215738033"}})]),s._v(" "),a("p",[s._v("在此链接中看清cuda和cudnn版本")]),s._v(" "),a("p",[s._v("https://tensorflow.google.cn/install/source_windows#gpu")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701215822895.png",alt:"image-20220701215822895"}})]),s._v(" "),a("p",[s._v("对于我来说 我可以安装的CUDA是11.6以下的所有版本")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装matplotlib")])]),s._v(" "),a("li",[a("p",[s._v("使用prompt命令行工具，激活环境")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("conda create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" TC2 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("python")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.7")]),s._v("  //新建一个python3.7的环境，命名为TC2\nactivate TC2\nconda "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tensorflow-gpu //这里也可以指定版本,比如conda "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tensorflow-gpu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701222110092.png",alt:"image-20220701222110092"}})])]),s._v(" "),a("li",[a("p",[s._v("输入y确认。我们不需要再额外安装cuda和cudnn，因为他已经包含在安装的列表里了")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("conda "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("查看当前环境下安装的包\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("已经成功安装了tensorflow-gpu2.1.0的版本")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" tensorflow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" tf\ntf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__version__  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Num GPUs Available: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("experimental"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list_physical_devices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GPU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("ref: https://www.cnblogs.com/jshmztl/p/13306837.html")])])]),s._v(" "),a("p",[s._v("修改CUDA cache size, 修改C盘模型缓存地点：")]),s._v(" "),a("p",[s._v("环境变量：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220702012259178.png",alt:"image-20220702012259178"}})]),s._v(" "),a("blockquote",[a("p",[s._v("在GPU训练模型时可以加入以下代码：")])]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[s._v("config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConfigProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gpu_options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GPUOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("per_process_gpu_memory_fraction"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#device_count = {'GPU': 1}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gpu_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("allow_growth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\nsession "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);