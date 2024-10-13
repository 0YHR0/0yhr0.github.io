(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{631:function(s,a,t){"use strict";t.r(a);var n=t(2),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"分片集群-sharded-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分片集群-sharded-cluster"}},[s._v("#")]),s._v(" 分片集群-Sharded Cluster")]),s._v(" "),a("h2",{attrs:{id:"分片概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分片概念"}},[s._v("#")]),s._v(" 分片概念")]),s._v(" "),a("p",[s._v("分片（sharding）是一种跨多台机器分布数据的方法， MongoDB使用分片来支持具有非常大的数据集\n和高吞吐量操作的部署。")]),s._v(" "),a("p",[s._v("换句话说：分片(sharding)是指将数据拆分，将其分散存在不同的机器上的过程。有时也用分区\n(partitioning)来表示这个概念。将数据分散到不同的机器上，不需要功能强大的大型计算机就可以储存\n更多的数据，处理更多的负载。")]),s._v(" "),a("p",[s._v("具有大型数据集或高吞吐量应用程序的数据库系统可以会挑战单个服务器的容量。例如，高查询率会耗\n尽服务器的CPU容量。工作集大小大于系统的RAM会强调磁盘驱动器的I / O容量。")]),s._v(" "),a("p",[s._v("有两种解决系统增长的方法：垂直扩展和水平扩展。")]),s._v(" "),a("p",[s._v("垂直扩展意味着增加单个服务器的容量，例如使用更强大的CPU，添加更多RAM或增加存储空间量。可\n用技术的局限性可能会限制单个机器对于给定工作负载而言足够强大。此外，基于云的提供商基于可用\n的硬件配置具有硬性上限。结果，垂直缩放有实际的最大值。")]),s._v(" "),a("p",[s._v("水平扩展意味着划分系统数据集并加载多个服务器，添加其他服务器以根据需要增加容量。虽然单个机\n器的总体速度或容量可能不高，但每台机器处理整个工作负载的子集，可能提供比单个高速大容量服务\n器更高的效率。扩展部署容量只需要根据需要添加额外的服务器，这可能比单个机器的高端硬件的总体\n成本更低。权衡是基础架构和部署维护的复杂性增加。")]),s._v(" "),a("p",[s._v("MongoDB支持通过分片进行水平扩展。")]),s._v(" "),a("h2",{attrs:{id:"分片集群包含的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分片集群包含的组件"}},[s._v("#")]),s._v(" 分片集群包含的组件")]),s._v(" "),a("p",[s._v("MongoDB分片群集包含以下组件：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("分片（存储）：每个分片包含分片数据的子集。 每个分片都可以部署为副本集。")])]),s._v(" "),a("li",[a("p",[s._v("mongos（路由）：mongos充当查询路由器，在客户端应用程序和分片集群之间提供接口。")])]),s._v(" "),a("li",[a("p",[s._v("config servers（“调度”的配置）：配置服务器存储群集的元数据和配置设置。 从MongoDB 3.4开\n始，必须将配置服务器部署为副本集（CSRS）。")])])]),s._v(" "),a("p",[s._v("下图描述了分片集群中组件的交互："),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122125933.png",alt:"image-20221118122125933"}})]),s._v(" "),a("p",[s._v("27018 if mongod is a shard member；\n27019 if mongod is a config server member")]),s._v(" "),a("p",[s._v("两个分片节点副本集（3+3）+一个配置节点副本集（3）+两个路由节点（2），共11个服务节点。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122224001.png",alt:"image-20221118122224001"}})]),s._v(" "),a("h3",{attrs:{id:"compass连接分片集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compass连接分片集群"}},[s._v("#")]),s._v(" Compass连接分片集群")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122420089.png",alt:"image-20221118122420089"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122427034.png",alt:"image-20221118122427034"}})]),s._v(" "),a("h3",{attrs:{id:"springdatamongdb连接分片集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springdatamongdb连接分片集群"}},[s._v("#")]),s._v(" SpringDataMongDB连接分片集群")]),s._v(" "),a("p",[s._v("Java客户端常用的是SpringDataMongoDB，其连接的是mongs路由，配置和单机mongod的配置是一\n样的。\n多个路由的时候的SpringDataMongoDB的客户端配置参考如下：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据源配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mongodb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主机地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host: 180.76.159.126")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# database: articledb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认端口是27017")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# port: 27017")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#也可以使用uri连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uri: mongodb://192.168.40.134:28017/articledb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接副本集字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uri:")]),s._v("\nmongodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//180.76.159.126"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("180.76.159.126"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27018")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("180.76.159.126"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("27019/article\ndb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("connect=replicaSet"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&slaveOk=true&replicaSet=myrs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#连接路由字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mongodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//180.76.159.126"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("180.76.159.126"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("27117/articledb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);