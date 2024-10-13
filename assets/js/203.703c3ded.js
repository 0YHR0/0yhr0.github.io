(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{600:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("主要参考： https://blog.csdn.net/weixin_43501172/article/details/125869017")]),s._v(" "),a("p",[s._v("b步骤不用cri-docker， 用containerd代替")]),s._v(" "),a("p",[s._v("https://blog.csdn.net/weixin_43501172/article/details/125869017")]),s._v(" "),a("p",[s._v("https://serverfault.com/questions/1118051/failed-to-run-kubelet-validate-service-connection-cri-v1-runtime-api-is-not-im")]),s._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[s._v("kubeadm join 192.168.221.207:6443 --token nzk3d0.vb8c9wfni629snw5 "),a("br"),s._v("\n--discovery-token-ca-cert-hash sha256:d6ae16b75d4689a21745cd6d0fd19b7585d3815f0f2a6cc2797d44b8c54e5a9b")]),s._v(" "),a("h2",{attrs:{id:"k8s-metrics-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k8s-metrics-server"}},[s._v("#")]),s._v(" K8s Metrics Server")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/metrics\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载metrics配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件")]),s._v("\ncontainers:\n      - args:\n        - --cert-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp\n        - --secure-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4443")]),s._v("\n        - --kubelet-preferred-address-types"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("InternalIP,ExternalIP,Hostname\n        - --kubelet-use-node-status-port\n        - --metric-resolution"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("15s\n        - --kubelet-insecure-tls "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入参数 ")]),s._v("\n        image: registry.aliyuncs.com/google_containers/metrics-server:v0.6.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换成国内镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用")]),s._v("\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" components.yaml\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装文件")]),s._v("\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h1",{attrs:{id:"k8s-v1-27"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k8s-v1-27"}},[s._v("#")]),s._v(" k8s v1.27")]),s._v(" "),a("p",[s._v("ref: https://www.linkedin.com/pulse/kubernetes-cluster-setup-ubuntu-2204-using-kubeadm-calico-md-sajjad/")]),s._v(" "),a("p",[s._v("mistake: sudo sysctl --system")]),s._v(" "),a("p",[s._v("docker & k8s key:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://download.docker.com/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gpg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dearmor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" /usr/share/keyrings/docker-archive-keyring.gpg\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch='),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("dpkg --print-architecture"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/docker.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" https://packages.cloud.google.com/apt/doc/apt-key.gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://apt.kubernetes.io/ kubernetes-xenial main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/kubernetes.list\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://download.docker.com/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubeadm init --pod-network-cidr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);