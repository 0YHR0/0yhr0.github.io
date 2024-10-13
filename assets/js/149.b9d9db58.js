(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{545:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),s("p",[s("strong",[t._v("java四种引用类型")]),s("a",{attrs:{href:"https://blog.csdn.net/coding_or_coded/article/details/6603549",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("https://blog.csdn.net/coding_or_coded/article/details/6603549")]),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("浮点数精度问题")])]),t._v(" "),s("p",[t._v("直接double类型计算会出现小数多的情况。")]),t._v(" "),s("p",[t._v("可以使用java.math包下的BigDecimal来计算")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),t._v(" v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),t._v(" v2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),t._v(" b1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),t._v(" b2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" b1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doubleValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("java中对象不使用时，建议手动赋值为null")])]),t._v(" "),s("p",[t._v("有利于jvm更早回收内存，以减少内存占用。")]),t._v(" "),s("p",[t._v("换而言之，就是尽早断掉与GC root 的关系：")]),t._v(" "),s("p",[t._v("在JVM中，即使离开作用域，局部变量表中依然存在作用域中的对象引用，直到有新的对象要占用局部变量表，才会覆盖原来的，手动赋值为null就是为了尽快释放内存空间。")]),t._v(" "),s("p",[s("strong",[t._v("深拷贝和浅拷贝")])]),t._v(" "),s("p",[t._v("浅拷贝：被复制对象的所有值属性都含有与原来对象的相同，而所有的对象引用属性仍然指向原来的对象。")]),t._v(" "),s("p",[t._v("深拷贝：在浅拷贝的基础上，所有引用其他对象的变量也进行了clone，并指向被复制过的新对象。")]),t._v(" "),s("p",[t._v("可以重写clone()方法来实现深拷贝，但是不是强制检查错误，需要把所有的父类都实现clone方法和接口，所以一般使用序列化来实现深拷贝。也可以在重写的方法中多次使用clone方法。")]),t._v(" "),s("p",[t._v("注意：在自己的类内使用clone方法可以不重写clone方法，但是在别的类内使用clone方法必须重写clone方法。")]),t._v(" "),s("p",[s("strong",[t._v("Java常见异常类的继承关系")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112745350.png",alt:"image-20230425112745350"}})]),t._v(" "),s("p",[s("strong",[t._v("Java的Collection集合类")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112812599.png",alt:"image-20230425112812599"}})]),t._v(" "),s("p",[t._v("Vector线程安全，ArrayList线程不安全，实现原理都是数组，但是Vector吃更多的资源")]),t._v(" "),s("p",[t._v("Hashset 底层是哈希表，存储无序，元素无索引，不可以重复")]),t._v(" "),s("p",[t._v("LinkedList线程不安全，链表结构")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112825799.png",alt:"image-20230425112825799"}})]),t._v(" "),s("p",[s("strong",[t._v("java单例模式饿汉线程安全，懒汉线程不安全，双检查模式线程安全")])]),t._v(" "),s("p",[s("strong",[t._v("JVM垃圾回收算法：")])]),t._v(" "),s("p",[s("strong",[t._v("标记-清除算法")]),t._v("： 标记无用对象，然后进行清除回收，但是效率不高，无法清除垃圾碎片")]),t._v(" "),s("p",[s("strong",[t._v("标记-整理算法")]),t._v("：标记无用对象，然后让存活的对象都向一端移动，然后直接清除掉端边界以外的内存")]),t._v(" "),s("p",[s("strong",[t._v("复制算法")]),t._v("：按照容量大小划分两个大小相等的区域，当一个区域用完的时候将活着的对象复制到另一个区域，然后把已使用的那个区域一次性清理掉，缺点：内存使用率不高只有原来的一半。")]),t._v(" "),s("p",[s("strong",[t._v("分代算法")]),t._v("：根据对象存活周期的不同将内存划分为几块，一般是新生代和老生代，新生代使用复制算法，老生代使用标记整理的算法")]),t._v(" "),s("p",[s("strong",[t._v("Mysql调优")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("可以只编译一次mysql语句，后面传参数就可以，可以减少开销，在只执行一次的地方使用Preparedstatement")])]),t._v(" "),s("li",[s("p",[t._v("使用DButils使整个项目链接只建立一次")])]),t._v(" "),s("li",[s("p",[t._v("在插入时可以先update（修改），修改返回行数为0时再用Insert语句插入")])])]),t._v(" "),s("p",[s("strong",[t._v("String内存问题：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425112911403.png",alt:"image-20230425112911403"}})]),t._v(" "),s("p",[t._v("用了new关键字就会为其分配内存空间，不用就先会去常量池找是否存在123，若存在就直接指向它")]),t._v(" "),s("p",[s("strong",[t._v("Interger缓存问题：")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("Integer在JVM没有设置过的时候，默认缓存为-128到127. 所以如果赋值为-128到127，会指向同一个值，而超过此范围就会开辟新的内存空间。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426225603459.png",alt:"image-20230426225603459"}})]),t._v(" "),s("ul",[s("li",[t._v("类加载双亲委派\n"),s("ul",[s("li",[t._v("https://blog.csdn.net/u013568373/article/details/93995246")])])]),t._v(" "),s("li",[t._v("索引建立原则：\n"),s("ul",[s("li",[t._v("https://www.cnblogs.com/deepalley/p/10784756.html")])])]),t._v(" "),s("li",[t._v("Linux 5种IO模型：\n"),s("ul",[s("li",[t._v("https://zhuanlan.zhihu.com/p/115912936")])])]),t._v(" "),s("li",[t._v("I/O模型以及多路复用三种实现方式select、poll和epoll比较及区别\n"),s("ul",[s("li",[t._v("https://blog.csdn.net/hotpots/article/details/103257237")])])]),t._v(" "),s("li",[t._v("为什么CMS两次标记时要 stop the world\n"),s("ul",[s("li",[t._v("https://blog.csdn.net/xiaobao5214/article/details/88051863")])])]),t._v(" "),s("li",[t._v("TCP是逻辑上的连接")]),t._v(" "),s("li",[t._v("java实现开根号运算")]),t._v(" "),s("li",[t._v("javaweb，servlet编译异常（javax.servlet.ServletException: 实例化Servlet类[Servletss]异常）\n"),s("ul",[s("li",[t._v("删除.iml中的部分"),s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/251a8f4f-8cc6-4fce-a3b9-a20efa6029d1-14899999.jpg",alt:"img"}})])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);