(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{599:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ch22-nfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ch22-nfs"}},[s._v("#")]),s._v(" Ch22 NFS")]),s._v(" "),t("p",[s._v("deploy a NFS service on one machine")]),s._v(" "),t("p",[s._v("新建一个目录，把它暴露给其他主机---\x3ech17")]),s._v(" "),t("p",[s._v("查看nfs："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220710215237216.png",alt:"image-20220710215237216"}})]),s._v(" "),t("p",[s._v("then"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220708231120026.png",alt:"image-20220708231120026"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220710215518257.png",alt:"image-20220710215518257"}})]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h2",{attrs:{id:"使用nfs做pv报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用nfs做pv报错"}},[s._v("#")]),s._v(" 使用nfs做pv报错：")]),s._v(" "),t("p",[s._v("ref：https://blog.csdn.net/m0_46090675/article/details/122276216")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl logs nfs-9cf648dcf-c7w65")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-01-02 06:19:36+00:00 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Note"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Entrypoint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Entrypoint script "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" MySQL Server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v(".36-1debian10 started.\nchown: changing ownership of "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/lib/mysql/'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Operation not permitted\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("解决：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220711011648194.png",alt:"image-20220711011648194"}})]),s._v(" "),t("p",[s._v("NFS provisionor: https://computingforgeeks.com/configure-nfs-as-kubernetes-persistent-volume-storage/")])])}),[],!1,null,null,null);t.default=e.exports}}]);