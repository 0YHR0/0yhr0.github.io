(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{464:function(a,t,r){"use strict";r.r(t);var c=r(2),s=Object(c.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"data-mining"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-mining"}},[a._v("#")]),a._v(" Data Mining")]),a._v(" "),t("p",[a._v("Data --\x3e Information --\x3e knowledge --\x3e decision")]),a._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7927d938-5a04-4e94-8bc9-71b236c0c482-14899999.jpg",alt:"img"}}),a._v(" "),t("p",[a._v("Knowledge discovery process")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/96bed727-38e1-4c00-b9a8-8b9c32d3d787-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("Data mining的挑战（ad hoc data是临时数据）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/040a15d6-52f1-4e49-ad11-8d7dc89c11fb-14899999.jpg",alt:"img"}})]),a._v(" "),t("h3",{attrs:{id:"data-mining-techniques"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-mining-techniques"}},[a._v("#")]),a._v(" Data mining techniques")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220409003232151.png",alt:"image-20220409003232151"}})]),a._v(" "),t("h4",{attrs:{id:"data-mining-phases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-mining-phases"}},[a._v("#")]),a._v(" Data mining phases:")]),a._v(" "),t("ul",[t("li",[a._v("Training phase："),t("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/cdb58050-8741-4175-8ffa-c7caf4009aa8-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("Classification:"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/88ede252-88d5-4a48-8267-8c00b90baec9-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("Test phase:"),t("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ea340ed6-a491-4d92-8563-7f13f4a921a7-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("Classification:"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0c991bee-624d-4834-b3d5-bffd1fa3bbce-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("Application phase:"),t("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/4f52138e-a187-4d38-8482-47fcc88e3602-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("比如给新的数据分类，会给他一个cluster id和confidence（对此次分类的确定程度）")]),a._v(" "),t("li",[a._v("Classification："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9d8e9e34-babb-49ff-9b5f-f62ac9924641-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("总结："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d7802ce8-6221-4525-9e90-0dede9b44320-14899999.jpg",alt:"img"}})])]),a._v(" "),t("h5",{attrs:{id:"association-rule-discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#association-rule-discovery"}},[a._v("#")]),a._v(" Association Rule Discovery")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("itemset 表示一行数据"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ef326407-b1f4-40c4-83ec-151bfeabc7e7-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[t("p",[a._v("在表中有三个transaction，分别tid为 101，102，103")])]),a._v(" "),t("li",[t("p",[a._v("比如beer的support：beer在两个transaction中出现了，总共有三个transaction，所以是2/3")])]),a._v(" "),t("li",[t("p",[a._v("满足 support 和confidence大于某个最小值的时候，则这个rule成立"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/739a8d77-7888-4ab0-8b6e-bcc3be41aada-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("p",[a._v("由于每个support算起来开销太大，使用apriori property来简化计算，当一个组合的support大于最小值的时候，他就是frequent，所以当一个集合的support 是frequent的时候，他的子集也都frequent，也就是2的n次方个子集"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6472b46e-d968-48c2-a583-9b2045aa2740-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("p",[a._v("并且，当c不是frequent的时候，所有包含c的父集都不是frequent的"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ac167a0d-0d09-4e54-b3e0-22d742cb1cef-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("ol",[t("li",[a._v("寻找frequent集")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("寻找frequent itemset的算法：F[k]是满足条件的itemset（S>Smin）从子集开始判断，寻找符合条件的父集"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/bd225214-d1e9-492f-b7ab-00643feb1767-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e4a38be9-a71d-4487-ae7a-0911d30badea-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/35d4460f-a74b-4a91-8d61-19d2ae3d9367-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("子集是frequent，父集才有可能是")]),a._v(" "),t("li",[a._v("子集不是frequent，父集就不可能是")]),a._v(" "),t("li",[a._v("父集如果是frequent，子集一定是")])])]),a._v(" "),t("li",[t("p",[a._v("sql语句实现，在原来frequent集的基础上加一个元素，组成下一个candidate集"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/19f799d9-b81c-47aa-99ab-6ceb6ddb96ab-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("可以用剪枝算法改进")])])])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[a._v("寻找rule：C(L,R)=S(L ,R)/S(L)"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/c046f060-ee2d-462d-b005-6991c1b398b9-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("性质：若父集不能--\x3e, 则子集更不能--\x3e, 因为子集的support更大，所以confidence更小"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/138583f4-a44a-4a65-b184-4add00f525a6-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("所以{3 ，4} --\x3e {5} ，才有可能{3} --\x3e {4，5}, {4} --\x3e{3，5} (父集能产生，则子集才有可能能产生)")])])]),a._v(" "),t("li",[a._v("所以从父集开始判断，寻找符合条件的子集")]),a._v(" "),t("li",[a._v("如果子集可以，那么父集一定可以")])])])])]),a._v(" "),t("li",[t("p",[a._v("Association rules 的种类："),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220409003935136.png",alt:"image-20220409003935136"}})])]),a._v(" "),t("li",[t("p",[a._v("Constraint-based Association Rules：")]),a._v(" "),t("ul",[t("li",[a._v("独立事件：意思为事件A不影响事件B的发生，称这两个事件独立，记为P(AB)=P(A)P(B)")]),a._v(" "),t("li",[a._v("Interest："),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/8687744c-9f22-4898-9c9d-7ef1d69cda7f-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/77c9209a-0ff6-4142-9d32-278fd6d5d524-14899999.jpg",alt:"img"}})])])])])])]),a._v(" "),t("h5",{attrs:{id:"clustering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[a._v("#")]),a._v(" Clustering")]),a._v(" "),t("p",[a._v("Partitioning"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6f46cbbf-348d-43b0-8152-77c580869f80-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("K-means algorithm："),t("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/08a674d8-19cd-447b-98ec-4db21c07f1de-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("两个点之间的距离："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d14f23c5-cc0b-4bdf-8283-2b4e5242c3ab-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("算法：\n"),t("ul",[t("li",[t("ol",[t("li",[a._v("先指定一些点为cluster的中心，循环2，3，直到没有改变")])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[a._v("计算所有的点到哪个中心的距离更近，归类为cluster")])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[a._v("计算每个cluster的平均值，把这个值作为cluster的新中心")])])])])]),a._v(" "),t("li",[a._v("最后的结果很大程度上取决于一开始指定的中心，并且极端异常数据影响大")]),a._v(" "),t("li",[a._v("时间复杂度：O(nkt)")])]),a._v(" "),t("p",[a._v("K-Medoids algorithm："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/68c88131-aaa3-433c-b713-7a6f49613144-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("时间复杂度：O(n^2 kt)")])]),a._v(" "),t("p",[a._v("柱状图：continuous variables（灰色表示总的数据，红的表示在此cluster中的数据）")]),a._v(" "),t("p",[a._v("饼图：categories variables（内圈表示在此cluster中的，外圈表示总的数据）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/798e1444-ba56-4237-bf84-13227df23fa7-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("hierarchical methods\n"),t("ul",[t("li",[a._v("top down：一开始只有一个cluster，每次迭代分裂出更多的cluster")]),a._v(" "),t("li",[a._v("bottom up：一开始每个元素都是一个cluster，每次迭代merge cluster")])])]),a._v(" "),t("li",[a._v("attribute不能考虑的太多，不然在cluster的时候最后有些重要的属性会被忽视"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/29ce0ce6-07bc-4337-b36a-a8b792d85b21-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("只考虑4，5，6是比较好的选择，因为他们关联性不强")])])])]),a._v(" "),t("h5",{attrs:{id:"classification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classification"}},[a._v("#")]),a._v(" Classification")]),a._v(" "),t("ul",[t("li",[a._v("decision tree"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9044e2c9-dd27-4826-88df-2a866003fe88-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/64e816f2-0a0e-4c23-8181-b1d6426e3a73-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("算法：第3，4块是用来判断结束递归，attribute list是分类的依据字段，每次都选择最佳分类字段"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/5e5ec635-845d-47fd-9842-012e69d3cf68-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("例子："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/5ea3bf0e-c1db-492c-a65c-6240db18a4f3-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/12ccc2f6-4d3d-4d1e-9b11-44dff28d6145-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a305f278-3bba-448d-a7f7-ab9cdee6874e-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/4cae168f-50a9-4af3-96c7-9ac81afab3db-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("（3）判断是否所有的数据的play字段都是一样的，是的话退出递归")]),a._v(" "),t("li",[a._v("（4）判断是否已经没有可分类的字段了，是的话退出递归")]),a._v(" "),t("li",[a._v("最后的叶子节点的值取决于多数节点的值")])])]),a._v(" "),t("li",[a._v("可能存在过拟合问题：\n"),t("ul",[t("li",[a._v("可能是训练样本过小")]),a._v(" "),t("li",[a._v("也可能是噪声太大")]),a._v(" "),t("li",[a._v("两种解决过拟合的方法："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/fd115451-40ba-4314-b159-8bbfdee87872-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("拆分数据的算法（在一个属性中如何拆分值）：通过拆分之后信息的纯度计算，纯度越高越好（gini越低越好）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9e67b681-2e98-4d6d-b282-c15e1b5e4ef1-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("gini(S)表示集合中数据的不纯净性，越大表示越不纯净，比如一个集合中有y的有n的")]),a._v(" "),t("li",[a._v("尽量找变量可以拆分出最纯净的集合，gini split相当于两个gini加权相加")]),a._v(" "),t("li",[a._v("例子：一个属性的set总共有2的n次方-2种（减去空集和全集）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/456424b4-e6a6-45ed-8d70-02964b9cbe95-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("拆分数据的算法（如何选取拆分的属性）：通过拆分获取的信息量计算，信息量越高越好"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/fba88b67-7411-430b-942d-7e06800fcaea-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("例子：分别计算原来的信息量与拆分之后的信息量，选取信息量获取最多的那个"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ec4a812a-0691-4647-8d3b-0c26844ec375-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("如何测试分类的质量："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e608af16-43e9-4e53-a607-a119f230f0d9-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("其他分类方法："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b44d6dd9-6bd4-4230-a777-d2c559e756ca-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a9152ac1-1e89-4e24-875d-7192a2c9d770-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("Regression："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/43fa11bf-054a-4b08-8f37-ed68c496b141-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("线性回归"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b74f9c0c-a53d-48cc-8afb-12408ca055c1-14899999.jpg",alt:"img"}})])])])])])])])]),a._v(" "),t("h5",{attrs:{id:"data-mining-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-mining-systems"}},[a._v("#")]),a._v(" Data mining systems")]),a._v(" "),t("ul",[t("li",[a._v("数据分析是基于之前建立起来的数据模型"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/2e0a607b-bc8a-461e-96a6-d75a2ab4ae45-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("pmml"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9df35c99-6692-4866-8e34-42676d3127a6-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("先产生model，再测试这个model的好坏，再应用在实际数据中"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/bd1c5f2c-6037-45a9-92f5-97d00a6144e2-14899999.jpg",alt:"img"}})])])])}),[],!1,null,null,null);t.default=s.exports}}]);