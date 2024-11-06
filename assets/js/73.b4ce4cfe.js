(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{471:function(a,t,i){"use strict";i.r(t);var e=i(2),c=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"replication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[a._v("#")]),a._v(" Replication")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Replication可以带来的好处：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("performance enhancement：比如，负载均衡到多台服务器上")])]),a._v(" "),t("li",[t("p",[a._v("fault-torlance: 比如，有f+1台服务器，f台挂了，还能有一台提供服务")])]),a._v(" "),t("li",[t("p",[a._v("availability")])])])]),a._v(" "),t("li",[t("p",[a._v("Replication需要实现的点：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("replication transparency：用户只看到一个logical object，而不是很多个pyhsical object")])]),a._v(" "),t("li",[t("p",[a._v("consistency：一致性保证")])])])]),a._v(" "),t("li",[t("p",[a._v("replica manager"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/a307bfee-f5aa-4823-bc6a-e05c695f4f9b-14899999.jpg",alt:"image"}})])]),a._v(" "),t("li",[t("p",[a._v("处理请求的5个阶段："),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/1bc77446-b2a3-4f9b-af67-60cd46dfe71c-14899999.jpg",alt:"image"}})])]),a._v(" "),t("li",[t("p",[a._v("Group communication：把process分成一个一个group，更方便管理，并且可以用multicast，用group address"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/44c9a64c-07df-4300-8a97-41b83ef82374-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("p",[a._v("process只可以处理在view中的process发出的消息"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f02e0998-58bf-46b4-bf16-ea9ca388febd-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("p",[a._v("分布式系统的一致性https://www.cnblogs.com/hzmark/p/consistency_model.html"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/d854d71b-0ed8-4a33-8f25-5f5d96f487d5-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/7efa0e10-1a16-436a-8d41-7eeaf0446698-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f051ed14-c92e-40a1-b30b-e22f62114f97-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/73f9a8ab-70cd-44cd-a61d-6d7e0e303ab1-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("p",[a._v("例子：")]),a._v(" "),t("ul",[t("li",[a._v("不可能linearizable，但是可以是sequential的"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/09300424-5753-438e-ae3d-4aeec363ff60-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/349dda59-bda5-46fd-969b-bc9d7ae5e56a-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[t("p",[a._v("一种解决fault torlance的模型：实现了linearizable consistency，请求只发给primary")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("每个请求带有一个独一无二的id，只有primary接受并且处理这个请求，并且存储结果，如果这个请求已经处理过了，那么re-send他的结果")])]),a._v(" "),t("li",[t("p",[a._v("如果是一个更新操作，那么primary把这个更新发送给其他的backup，让他们更新，backup发回ack来确认收到了更新")])]),a._v(" "),t("li",[t("p",[a._v("通过view-synchronize来得知primary挂了")])])])]),a._v(" "),t("li",[t("p",[a._v("Active 模型：请求发给所有的RM"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/0a150abe-2ae9-4dcc-91d4-711089eab660-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("p",[a._v("gossip 模型：请求发给离自己最近的RM")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("data is replicated close to the location of the client")])]),a._v(" "),t("li",[t("p",[a._v("RMs periodically exchange ‘gossip’ messages containing updates")])]),a._v(" "),t("li",[t("p",[a._v("执行update和query之前必须先询问其他rm来执行在这之前的update，来做到causal ordering")])]),a._v(" "),t("li",[t("p",[a._v("使用vector timestamps来确保update执行的顺序")])])])])])])}),[],!1,null,null,null);t.default=c.exports}}]);