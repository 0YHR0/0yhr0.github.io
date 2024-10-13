(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{646:function(t,a,c){"use strict";c.r(a);var m=c(2),i=Object(m.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deadlocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deadlocks"}},[t._v("#")]),t._v(" Deadlocks")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("死锁产生的条件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Mutual exclusion")])]),t._v(" "),a("li",[a("p",[t._v("Hold and wait")])]),t._v(" "),a("li",[a("p",[t._v("No preemption")])]),t._v(" "),a("li",[a("p",[t._v("Circular wait")])])])]),t._v(" "),a("li",[a("p",[t._v("死锁的处理策略：(资源分配图有环不一定代表死锁)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("预防死锁：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("破坏互斥条件"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/7ede06e0-b45e-4585-adbb-827ffee6c41b-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("破坏不剥夺条件"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/c3063601-89c4-4973-8924-5ffa7e65e4b4-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("破坏请求和保持条件：当一个进程请求资源的时候，不能持有其他资源"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/c1a6f1cc-70d4-4703-8793-defb7002947c-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("破坏循环等待"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/963aeddf-0f42-4c46-8f82-df257fb7a8c2-14899999.jpg",alt:"img"}})])])])]),t._v(" "),a("li",[a("p",[t._v("避免死锁：多实例资源可以用银行家算法，单实例资源可以直接判断是否有循环等待（系统处于安全状态，一定不发生死锁，系统处于不安全状态，是有可能发生死锁，不是一定）"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/d622bed0-548b-43f2-ba13-be7bdb74c96e-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/cb228cbb-6257-4d79-9398-4e34758647cc-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/42e29408-3c5a-48ab-8aa8-20427c97993a-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f71a2446-d2ac-4b9d-bb01-7c65b1c30796-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/e4df572e-07ec-4cfb-87d0-f91d9bc88e9b-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/1566c89d-a975-4ae9-a77c-448befd1ba7c-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/caa9e130-12e1-4969-9e55-8cc5606f14d5-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/caa27923-163e-478d-b26d-5e7c9471ac27-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("死锁的检测和移除：没循环一定不死锁，有循环，且每种资源只要一个，必定死锁")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当一个进程可以被分配资源并且执行结束，就会消除与自己相关的请求边和分配边")])]),t._v(" "),a("li",[a("p",[t._v("死锁的解除"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/990d3ea5-ce91-494a-959d-e5515fa8af97-14899999.jpg",alt:"img"}})])])])])])]),t._v(" "),a("li",[a("p",[t._v("虚线表示可能请求的资源"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/c4e83ab6-383b-428f-95e6-39085d229f76-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("一旦出现这种说明死锁了"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/26de36b2-f39d-4672-99bd-861151cdac6c-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("银行家算法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("前提："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/ffcf674a-0426-40ef-bfbe-a78ec57f53ee-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("算法："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/a47ecb2d-f996-4bc6-8956-8cf5eb175822-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("一种共享资源的发现和解除死锁"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/81045e5f-369c-4a7b-9006-0658caafe6c1-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f1cb9065-6bd7-4f98-9914-a696b4c04fb8-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("银行家算法复杂度"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/4dd03828-2582-499d-906c-b05a2d622767-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("单资源用资源分配图，多资源用银行家算法")])])])])])])}),[],!1,null,null,null);a.default=i.exports}}]);