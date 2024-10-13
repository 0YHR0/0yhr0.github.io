(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{462:function(a,t,i){"use strict";i.r(t);var e=i(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"physical-data-warehouse-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#physical-data-warehouse-design"}},[a._v("#")]),a._v(" Physical Data warehouse design")]),a._v(" "),t("h3",{attrs:{id:"partitioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partitioning"}},[a._v("#")]),a._v(" Partitioning")]),a._v(" "),t("p",[a._v("Partitioning Methods(分表)可以水平切割也可以垂直切割")]),a._v(" "),t("ul",[t("li",[a._v("Range partitioning")]),a._v(" "),t("li",[a._v("Hash partitioning")]),a._v(" "),t("li",[a._v("也可以结合上面两个，先用range partitioning再用hash partitioning")])]),a._v(" "),t("h3",{attrs:{id:"materialized-summary-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#materialized-summary-data"}},[a._v("#")]),a._v(" Materialized summary data")]),a._v(" "),t("ul",[t("li",[a._v("explicit summary data（显式调用）：有额外的一张表存放，没有和原先数据的连接，在查询的时候也分开查询"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/c8c72664-ea8c-4a8f-913a-bfc7f0957281-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("根据fact表中两个字段（region_dim, region_type）可以在dimension表中查询到唯一一行表示细节"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/07589d81-2939-4f17-a21a-ba166cb071c2-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("查哪些表就把哪些表join起来，用两个and "),t("strong",[a._v("=")]),a._v(" 表示")])])]),a._v(" "),t("li",[a._v("implicit summary data（隐式调用）：只有一张detailed表可以查询，当查询语句查询了这些聚合信息时，自动去Materialized view里找，materialized view refer to the detailed table")])]),a._v(" "),t("h3",{attrs:{id:"materialized-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#materialized-views"}},[a._v("#")]),a._v(" Materialized Views")]),a._v(" "),t("p",[a._v("刷新策略：")]),a._v(" "),t("ul",[t("li",[a._v("deferred：只有当refresh table 语句执行的时候，才会刷新")]),a._v(" "),t("li",[a._v("immediate：源数据有更新的时候")])]),a._v(" "),t("p",[a._v("Derivability：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/765593bc-8c8d-4c74-9ccf-be03930bb573-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e8f538b8-7f21-46ae-a08c-f97e8464fa53-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("需要考虑以下4点：\n"),t("ul",[t("li",[a._v("Predicates：谓词的限制要比summary table要高：如下图，query中有where子句，但是summary中没有，所以在查询的时候满足restiction高的条件，sales就直接从summary data中取，而不是从原始数据中拿"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/47da839f-983d-4ee7-b01e-fb880c5ca6fc-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("Aggregate functions:"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/5887155a-aa82-4b98-959f-3c8f75f63929-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("如求sum的话可以在两个union中分别求sum，再求总的sum")]),a._v(" "),t("li",[a._v("如求max，也可以分别再多个union中求最大值，再求最终的最大值")]),a._v(" "),t("li",[a._v("additive aggregate function 存在逆函数，但是semi-的不存在")]),a._v(" "),t("li",[a._v("additive-computable是在求additive function之后再作一步操作")]),a._v(" "),t("li",[a._v("median是求中位数")]),a._v(" "),t("li",[a._v("如在source中删除了最大值，不知道第二大值是什么，但是sum等是可以计算的"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/28ac910c-9589-4fb9-ac34-2d5d6847b417-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("如果A表，B表 join成了m表：\n"),t("ul",[t("li",[a._v("如果join丢失了数据（lossy），那么对A表的查询不能对M表执行")]),a._v(" "),t("li",[a._v("如果join没有丢失数据（lose less），那么对A表的查询可以对M表执行")])])]),a._v(" "),t("li",[a._v("Groupings："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/8557538d-1c74-4409-a5e7-c32eb9cb49c5-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a8952162-5f55-4455-bd1d-a427f4db040d-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("Grouping set 2 is derivable from Grouping set 1,因为Gs 2中每个group都至少被一个Gs1中的group产生")]),a._v(" "),t("li",[a._v("以下两个条件满足一个就可以说明G1 directly derivable G2\n"),t("ul",[t("li",[a._v("G2 比G1少一个属性")]),a._v(" "),t("li",[a._v("G2 中有一个属性替代了G1中的一个属性，并且G1中的那个属性functionally determined G2的那个属性")])])]),a._v(" "),t("li",[a._v("可以用G3作为materiliaze view来加速对G2的查询（直接使用G3的数据而不是从source中查）")]),a._v(" "),t("li",[a._v("数据量会随着Grouping的数量快速增加"),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/befe9c85-60f2-451c-a235-083856565601-14899999.jpg",alt:"img"}})])])])])])])])]),a._v(" "),t("h4",{attrs:{id:"计算materilize-view的benefit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算materilize-view的benefit"}},[a._v("#")]),a._v(" 计算materilize view的benefit")]),a._v(" "),t("p",[a._v("benefit per unit space: BPUS(u1,...,uk, M)=Benefit/unit size"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d914b6a4-fcd5-45e7-bb05-70005bb15bbb-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("算法：看ppt中例子，也可以直接根据大小来选择"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/3789b43b-2de9-42c1-a968-2ddfa037f795-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("新view： u")]),a._v(" "),t("li",[a._v("已有的view：M")]),a._v(" "),t("li",[a._v("query： q")]),a._v(" "),t("li",[a._v("选取没有被test过的u，让每个query对u+M进行计算u产生的benefit\n"),t("ul",[t("li",[a._v("取最大的BPUS所对应的u，把u并入M中")])])]),a._v(" "),t("li",[a._v("选取CMG时，分别计算其他组合，由于（），（C），（M）,(CM)能derive from CM，所以Benefit是4个2250-450， BPUS就再除以450（size），把最大的BPUS并入总集合中"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/5c06a8ff-250f-4d6e-92a4-1360856a7aa6-14899999.jpg",alt:"img"}})])]),a._v(" "),t("h4",{attrs:{id:"indexs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indexs"}},[a._v("#")]),a._v(" INDEXS")]),a._v(" "),t("p",[a._v("Table scan: 扫描整张表，看是否满足查询条件")]),a._v(" "),t("p",[a._v("Index scan：用index来标记一行是否和查询条件相关，查询就只用在相关的列中筛选")]),a._v(" "),t("p",[a._v("Indexes on dimension tables")]),a._v(" "),t("ul",[t("li",[a._v("当某个维度只有三个值：low，medium，high的时候，就可以使用索引"),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7c30199d-02a7-4ab9-b1a3-52f8c9b541f3-14899999.jpg",alt:"img"}})])]),a._v(" "),t("p",[a._v("Indexes on fact tables")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("通常查询对主键进行筛选，主键一般由多个属性共同组成，所以可以使用共同组成的index")])]),a._v(" "),t("li",[t("p",[a._v("但是会有两个问题，属性组合的顺序，index过大")])])]),a._v(" "),t("p",[a._v("BitMap indexes: 查询结果一位一位竖着计算，比如第一行是O，第二行是O，所以O的前两位是1"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/cc2d099b-7f9a-4811-a9b9-632098bb75bb-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e7bf0c28-db3e-41e0-9443-aea4ef762997-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("Combining One-dimensional Indexes")]),a._v(" "),t("ul",[t("li",[a._v("MDB tree：does not treat all dimensions equally")]),a._v(" "),t("li",[a._v("UB tree")])])])}),[],!1,null,null,null);t.default=r.exports}}]);