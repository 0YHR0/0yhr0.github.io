(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{408:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h1",{attrs:{id:"分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[t._v("#")]),t._v(" 分布式锁")]),t._v(" "),s("h2",{attrs:{id:"_1-1-使用背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-使用背景"}},[t._v("#")]),t._v(" 1.1 使用背景")]),t._v(" "),s("p",[t._v("在并发场景中，为了保证临界资源的数据一致性，我们会经常使用到“锁”这个工具对临界资源进行保护，让混乱的并发访问行为退化为秩序的串行访问行为.")]),t._v(" "),s("p",[t._v("在本地环境中，由于多线程之间能够共享进程的数据，因此可以比较简单地实现进程内的互斥锁；然而在分布式场景中，有时我们需要跨域多个物理节点执行加锁操作，因此我们就需要依赖到类似于 redis、mysql 这样的状态存储组件，在此基础之上实现所谓的“分布式锁”技术.")]),t._v(" "),s("h2",{attrs:{id:"_1-2-核心性质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-核心性质"}},[t._v("#")]),t._v(" 1.2 核心性质")]),t._v(" "),s("p",[t._v("分布式锁应当具备如下几项核心性质：")]),t._v(" "),s("ul",[s("li",[t._v("独占性：对于同一把锁，在同一时刻只能被一个取锁方占有，这是作为“锁”工具最基础的一项性质")]),t._v(" "),s("li",[t._v("健壮性：即不能产生死锁（dead lock）. 假如某个占有锁的使用方因为宕机而无法主动执行解锁动作，锁也应该能够被正常传承下去，被其他使用方所延续使用")]),t._v(" "),s("li",[t._v("对称性：加锁和解锁的使用方必须为同一身份. 不允许非法释放他人持有的分布式锁")]),t._v(" "),s("li",[t._v("高可用：当提供分布式锁服务的基础组件中存在少量节点发生故障时，不应该影响到分布式锁服务的稳定性")])]),t._v(" "),s("h2",{attrs:{id:"_1-3-实现类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-实现类型"}},[t._v("#")]),t._v(" 1.3 实现类型")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102095840133.png",alt:"image-20231102095840133"}}),t._v(" "),s("p",[t._v("分布式锁根据其实现模型，可以被划分为两大类：")]),t._v(" "),s("ul",[s("li",[t._v("主动轮询型：该模型类似于单机锁中的主动轮询 + cas 乐观锁模型，取锁方会持续对分布式锁发出尝试获取动作，如果锁已被占用则会不断发起重试，直到取锁成功为止")]),t._v(" "),s("li",[t._v("watch 回调型：在取锁方发现锁已被他人占用时，会创建 watcher 监视器订阅锁的释放事件，随后不再发起主动取锁的尝试；当锁被释放后，取锁方能通过之前创建的 watcher 感知到这一变化，然后再重新发起取锁的尝试动作")])]),t._v(" "),s("h2",{attrs:{id:"_1-4-一些个人理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-一些个人理解"}},[t._v("#")]),t._v(" 1.4 一些个人理解")]),t._v(" "),s("p",[t._v("在单机环境中，主动轮询和 watch 回调两种锁模型各有优劣，所谓的”优“和”劣“也是相对而言，需要对 cpu 空转以及阻塞协程两种行为的损耗做出权衡.")]),t._v(" "),s("p",[t._v("然而，在分布式场景中，我个人觉得优势的天平在略微朝着 watch 回调型的实现策略倾斜. 这是因为分布式场景中”轮询“这一动作的成本相比于单机锁而言要高很多，背后存在的行为可能是一次甚至多次网络 IO 请求. 这种情况下，取锁方基于 watch 回调的方式，在确保锁被释放、自身有机会取锁的情况下，才会重新发出尝试取锁的请求，这样能在很大程度上避免无意义的轮询损耗.")]),t._v(" "),s("p",[t._v("当然，主动轮询型的分布式锁能够保证使用方始终占据流程的主动权，整个流程可以更加轻便灵活；此外，watch 机制在实现过程中需要建立长连接完成 watch 监听动作，也会存在一定的资源损耗. 因此这个问题没有标准答案，应该结合实际的需求背景采取不同的应对策略：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("**在并发激烈程度较高时倾向于 watch 回调型分布式锁；反之，主动轮询型分布式锁可能会是更好的选择.**")])])]),t._v(" "),s("p",[t._v("除此之外，基于 watch 回调模型实现的分布式锁背后可能还存在其他的问题，比如："),s("code",[t._v("**当有多个尝试取锁的使用方 watch 监听同一把锁时，一次锁的释放事件可能会引发“惊群效应”.**")]),t._v(" 这个问题以及对应的解决方案将会在本文第 4 章中进行探讨.")]),t._v(" "),s("h1",{attrs:{id:"_2-主动轮询型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-主动轮询型"}},[t._v("#")]),t._v(" 2 主动轮询型")]),t._v(" "),s("h2",{attrs:{id:"_2-1-实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-实现思路"}},[t._v("#")]),t._v(" 2.1 实现思路")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102100125954.png",alt:"image-20231102100125954"}}),t._v(" "),s("p",[t._v("主动轮询型分布式锁的实现思路为：")]),t._v(" "),s("ul",[s("li",[t._v("针对于同一把分布式锁，使用同一条数据进行标识（以 redis 为例，则为同一个 key 对应的 kv 数据记录）")]),t._v(" "),s("li",[t._v("假如在存储介质成功插入了该条数据（要求之前该 key 对应的数据不存在），则被认定为加锁成功")]),t._v(" "),s("li",[t._v("把从存储介质中删除该条数据这一行为理解为释放锁操作")]),t._v(" "),s("li",[t._v("倘若在插入该条数据时，发现数据已经存在（锁已被他人持有），则持续轮询，直到数据被他人删除（他人释放锁），并由自身完成数据插入动作为止（取锁成功）")]),t._v(" "),s("li",[t._v("由于是并发场景，需要保证【 （1）检查数据是否已被插入（2）数据不存在则插入数据 】这两个步骤之间是原子化不可拆分的"),s("code",[t._v("**（在 redis 中是 set only if not exist —— SETNX 操作）**")])])]),t._v(" "),s("h2",{attrs:{id:"_2-2-技术选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-技术选型"}},[t._v("#")]),t._v(" 2.2 技术选型")]),t._v(" "),s("p",[t._v("实现主动轮询型分布式锁时，我们常用的组件包括 redis 和 mysql.")]),t._v(" "),s("p",[s("strong",[t._v("（1）redis")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在实现主动轮询型分布式锁时，redis 算得上是大家最常用的组件. 在第 3 章中，本文会以 redis 为例，进行主动轮询型分布式锁的实践介绍.  redis 官方文档："),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//redis.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://redis.io/"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("redis 基于内存实现数据的存储，因此足够高轻便高效. 此外，redis 基于单线程模型完成数据处理工作，支持 SETNX 原子指令（set only if not exist），能够很方便地支持分布式锁的加锁操作.")]),t._v(" "),s("ul",[s("li",[t._v("setnx 使用文档："),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//redis.io/commands/setnx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://redis.io/commands/setnx/"),s("OutboundLink")],1),t._v(" （事实上，在 redis 2.6.12 版本之后，setnx 操作已经被弃置，官方推荐大家使用 set 指令并附加 nx 参数来实现与 setnx 指令相同的效果）")])])]),t._v(" "),s("li",[s("p",[t._v("此外，redis 还支持使用 lua 脚本自定义组装同一个 redis 节点下的多笔操作形成一个具备原子性的事务. redis lua 脚本使用文档："),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//redis.io/docs/manual/programmability/eval-intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://redis.io/docs/manual/pr"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("code",[t._v("在通过 redis 实现分布式锁时，我们可以通过将 key 对应的 value 设置为使用方的身份标识. 在解锁流程中，通过 lua 脚本组装步骤：【（1）检查释放锁动作执行者的身份；（2）身份合法时才进行解锁】. 如此一来，分布式锁的对称性也就得以保证了.")])]),t._v(" "),s("p",[s("strong",[t._v("（2）mysql")])]),t._v(" "),s("p",[t._v("mysql 官方文档："),s("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.mysql.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.mysql.com/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("通过经典的关系型数据库 mysql 关也能实现和 redis 类似的效果.")]),t._v(" "),s("ul",[s("li",[t._v("建立一张用于存储分布式锁记录的数据表")]),t._v(" "),s("li",[t._v("以分布式锁的标识键作为表中的唯一键（类比于 redis 中的 key）")]),t._v(" "),s("li",[t._v("基于唯一键的特性，同一把锁只能被插入一条数据，因此也就只能由一个使用方持有锁")]),t._v(" "),s("li",[t._v("当锁被占有时，其他取锁方尝试插入数据时，会被 mysql 表的唯一键所拦截报错，进而感知到锁已被占用这一情报")]),t._v(" "),s("li",[t._v("在表中可以新增一个字段标识使用方的身份. 完整的解锁动作可以基于 mysql 事务（使用 innodb 引擎）保证原子性：【（1）检查释放锁动作执行者的身份；（2）身份合法时才进行解锁】. 基于此，分布式锁的对称性性质能够得到保证.")])]),t._v(" "),s("h2",{attrs:{id:"_2-3-死锁问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-死锁问题"}},[t._v("#")]),t._v(" 2.3 死锁问题")]),t._v(" "),s("p",[t._v("下一个问题是，我们在设计主动轮询型分布式锁时，如何避免出现死锁问题而导致分布式锁不可能用呢？")]),t._v(" "),s("p",[t._v("这项能力在 mysql 中显得捉襟见肘，不过在使用 redis 时，我们可以通过过期时间 expire time 机制得以保证. 我们通常会在插入分布式锁对应的 kv 数据时设置一个过期时间 expire time，这样即便使用方因为异常原因导致无法正常解锁，锁对应的数据项也会在达到过期时间阈值后被自动删除，实现释放分布式锁的效果.")]),t._v(" "),s("p",[t._v("值得一提的是，这种过期机制的引入也带来了新的问题：因为锁的持有者并不能精确预判到自己持锁后处理业务逻辑的实际耗时，因此此处设置的过期时间只能是一个偏向于保守的经验值，假如因为一些异常情况导致占有锁的使用方在业务处理流程中的耗时超过了设置的过期时间阈值，就会导致锁被提前释放，其他取锁方可能取锁成功，最终引起数据不一致的并发问题.")]),t._v(" "),s("p",[t._v("针对于这个问题，在分布式锁工具 redisson 中给出了解决方案——看门狗策略（watch dog strategy）：在锁的持有方未完成业务逻辑的处理时，会持续对分布式锁的过期阈值进行延期操作.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102101315315.png",alt:"image-20231102101315315"}})]),t._v(" "),s("h2",{attrs:{id:"_2-4-弱一致性问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-弱一致性问题"}},[t._v("#")]),t._v(" 2.4 弱一致性问题")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("回顾 redis 的设计思路，为避免单点故障问题，redis 会基于主从复制的方式实现数据备份. （以哨兵机制为例，哨兵会持续监听 master 节点的健康状况，倘若 master 节点发生故障，哨兵会负责扶持 slave 节点上位，以保证整个集群能够正常对外提供服务）. 此外，在 CAP 体系中，redis 走的是 AP 路线，为保证服务的吞吐性能，主从节点之间的数据同步是异步延迟进行的.")]),t._v(" "),s("p",[t._v("到这里问题就来了，试想一种场景：倘若 使用方 A 在 redis master 节点加锁成功，但是对应的 kv 记录在同步到 slave 之前，master 节点就宕机了. 此时未同步到这项数据的 slave 节点升为 master，这样分布式锁被 A 持有的“凭证” 就这样凭空消失了. 于是不知情的使用方 B C D 都可能加锁成功，于是就出现了一把锁被多方同时持有的问题，导致分布式锁最基本的独占性遭到破坏.")])]),t._v(" "),s("li",[s("p",[t._v("red lock解决了这个问题：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("简介\n\nRedis中针对此种情况，引入了红锁的概念。红锁采用主节点过半机制，即获取锁或者释放锁成功的标志为：在过半的节点上操作成功。\n\n原理\n\n在Redis的分布式环境中，我们假设有N个Redis master。这些节点完全互相独立，不存在主从复制或者其他集群协调机制。之前我们已经描述了在Redis单实例下怎么安全地获取和释放锁。我们确保将在每（N）个实例上使用此方法获取和释放锁。在这个样例中，我们假设有5个Redis master节点，这是一个比较合理的设置，所以我们需要在5台机器上面或者5台虚拟机上面运行这些实例，这样保证他们不会同时都宕掉。\n\n为了取到锁，客户端应该执行以下操作：\n\n获取当前Unix时间，以毫秒为单位。\n依次尝试从N个实例，使用相同的key和随机值获取锁。\n向Redis设置锁时，客户端应该设置一个网络连接和响应超时时间，这个超时时间应该小于锁的失效时间。\n例如你的锁自动失效时间为10秒，则超时时间应该在5-50毫秒之间。这样可以避免服务器端Redis已经挂掉的情况下，客户端还在死死地等待响应结果。如果服务器端没有在规定时间内响应，客户端应该尽快尝试另外一个Redis实例。\n客户端使用当前时间减去开始获取锁时间（步骤1记录的时间）得到获取锁使用的时间。\n仅当从大多数（这里是3个节点）的Redis节点都取到锁，且使用的时间小于锁失效时间时，锁才算获取成功。\n如果取到了锁，key的真正有效时间等于有效时间减去获取锁所使用的时间（步骤3计算的结果）。\n如果因为某些原因，获取锁失败（没有在至少N/2+1个Redis实例取到锁或者取锁时间已经超过了有效时间），客户端应该在所有的Redis实例上进行解锁（即便某些Redis实例根本就没有加锁成功）。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("redis 分布式锁的实现")]),t._v(" "),s("ul",[s("li",[t._v("定义了 redis 分布式锁的类型：RedisLock")]),t._v(" "),s("li",[t._v("锁 RedisLock 中需要内置一个 redis 客户端 Client，用于后续的请求交互")]),t._v(" "),s("li",[t._v("锁实例被创建时，需要显式指定锁的标识键 key")]),t._v(" "),s("li",[t._v("锁被创建时，会取创建者的进程 id + 协程 id，拼接生成 token，作为使用方的身份标识")]),t._v(" "),s("li",[t._v("用户可以使用 option 配置项，声明创建的锁是否是阻塞模式，锁对应的过期时间阈值以及等锁超时阈值等配置")]),t._v(" "),s("li",[t._v("解锁动作基于 lua 脚本执行")]),t._v(" "),s("li",[t._v("lua 脚本执行内容分为两部分：【（1）校验当前操作者是否拥有锁的所有权（2）倘若是，则释放锁】")])])])]),t._v(" "),s("h1",{attrs:{id:"_4-watch-回调型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-watch-回调型"}},[t._v("#")]),t._v(" 4 watch 回调型")]),t._v(" "),s("h2",{attrs:{id:"_4-1-实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-实现思路"}},[t._v("#")]),t._v(" 4.1 实现思路")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102105114582.png",alt:"image-20231102105114582"}}),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102105124683.png",alt:"image-20231102105124683"}}),t._v(" "),s("p",[t._v("对于实现 watch 回调型分布式锁，一些基本要点和 2.1 小节中聊到的主动轮询型分布式锁类似：")]),t._v(" "),s("ul",[s("li",[t._v("针对于同一把分布式锁，使用一条相同的数据进行标识（唯一、明确的 key）")]),t._v(" "),s("li",[t._v("倘若在存储介质内成功插入该条数据（要求 key 对应的数据不存在），则这一行为被认定为加锁成功")]),t._v(" "),s("li",[t._v("把从存储介质中删除该条数据这行为理解为解锁操作")])]),t._v(" "),s("p",[t._v("与主动轮询型分布式锁不同的是，在取锁失败时，watch 回调型分布式锁不会持续轮询，而是会 watch 监听锁的删除事件：")]),t._v(" "),s("ul",[s("li",[t._v("倘若在插入数据时，发现该条记录已经存在，说明锁已被他人持有，此时选择监听这条数据记录的删除事件，当对应事件发生时说明锁被释放了，此时才继续尝试取锁")])]),t._v(" "),s("h2",{attrs:{id:"_4-2-技术选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-技术选型"}},[t._v("#")]),t._v(" 4.2 技术选型")]),t._v(" "),s("p",[t._v("在实现上，我们需要依赖于提供了 watch 机制的状态存储组件，不仅能支持数据的存储和去重，还需要利用到其中的 watch 监听回调功能进行锁释放事件的订阅感知.")]),t._v(" "),s("p",[t._v("为满足上述诉求，我们常用的技术组件包括 etcd 和 zookeeper.")]),t._v(" "),s("p",[s("strong",[t._v("（1）etcd")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("etcd 是一款适合用于共享配置和服务发现的分布式 kv 存储组件，底层基于分布式共识算法 raft 协议保证了存储服务的强一致和高可用.")])]),t._v(" "),s("li",[s("p",[t._v("在 etcd 中提供了watch 监听器的功能，即针对于指定范围的数据，通过与 etcd 服务端节点创建 grpc 长连接的方式持续监听变更事件.")])]),t._v(" "),s("li",[s("p",[t._v("此外，etcd 中写入数据时，还支持通过版本 revision 机制进行取锁秩序的统筹协调，是一款很适合用于实现分布式锁的组件.")])])]),t._v(" "),s("p",[s("strong",[t._v("（2）zookeeper")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ZooKeeper是一款开源的分布式应用协调服务，底层基于分布式共识算法 zab 协议保证了数据的强一致性和高可用性.")]),t._v(" "),s("p",[t._v("zookeeper 中提供了临时顺序节点（EPHEMERAL_SEQUENTIAL）类型以及 watch 监听器机制，能够满足实现 watch 回调型分布式锁所需要具备的一切核心能力.")])])]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102105801209.png",alt:"image-20231102105801209"}}),t._v(" "),s("p",[t._v("为避免死锁问题的产生，etcd 中提供了租约 lease 机制. 租约，顾名思义，是一份具有时效性的协议，一旦达到租约上规定的截止时间，租约就会失去效力. 同时，etcd 中还提供了续约机制（keepAlive），用户可以通过续约操作来延迟租约的过期时间.")]),t._v(" "),s("p",[t._v("那么，我们如何来利用租约 lease 机制解决分布式锁中可能存在的死锁问题呢？实现思路如下：")]),t._v(" "),s("ul",[s("li",[t._v("用户可以先申请一份租约，设定好租约的截止时间")]),t._v(" "),s("li",[t._v("异步启动一个续约协程，负责在业务逻辑处理完成前，按照一定的时间节奏持续进行续约操作")]),t._v(" "),s("li",[t._v("在执行取锁动作，将对应于锁的 kv 数据和租约进行关联绑定，使得锁数据和租约拥有相同的过期时间属性")])]),t._v(" "),s("p",[t._v("在这样的设定之下，倘若分布式锁的持有者出现异常状况导致无法正常解锁，则可以通过租约的过期机制完成对分布式锁的释放，死锁问题因此得以规避. 此外，锁的使用方可以将租约的初始过期时间设定为一个偏小的值，并通过续约机制来对租约的生效周期进行动态延长. 可以看到，此处 etcd 中的租约及续约机制，实现了与 redisson 中 watch dog 机制类似的效果.")]),t._v(" "),s("h2",{attrs:{id:"_4-4-惊群效应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-惊群效应"}},[t._v("#")]),t._v(" 4.4 惊群效应")]),t._v(" "),s("p",[t._v("在 watch 回调型分布式锁的实现过程中，可能也会存在类似于惊群效应的问题. 这里指的是：倘若一把分布式锁的竞争比较激烈，那么锁的释放事件可能同时被多个的取锁方所监听，一旦锁真的被释放了，所有的取锁方都会一拥而上尝试取锁，然而我们知道，一个轮次中真正能够取锁成功的只会有一名角色，因此这个过程中会存在大量无意义的性能损耗，且释放锁时刻瞬间激增的请求流量也可能会对系统稳定性产生负面效应.")]),t._v(" "),s("p",[t._v("为规避惊群效应，etcd 中提供了前缀 prefix 机制以及版本 revision 机制，和 zookeeper 的临时顺序节点功能有些类似：")]),t._v(" "),s("ul",[s("li",[t._v("对于同一把分布式锁，锁记录数据的 key 拥有共同的前缀 prefix，作为锁的标识")]),t._v(" "),s("li",[t._v("每个取锁方取锁时，会以锁前缀 prefix 拼接上自身的身份标识（租约 id），生成完整的 lock key. 因此各取锁方完整的 lock key 都是互不相同的（只是有着相同的前缀），理论上所有取锁方都能成功把锁记录数据插入到 etcd 中")]),t._v(" "),s("li",[t._v("每个取锁方插入锁记录数据时，会获得自身 lock key 处在锁前缀 prefix 范围下唯一且递增的版本号 revision")]),t._v(" "),s("li",[t._v("取锁方插入加锁记录数据不意味着加锁成功，而是需要在插入数据后查询一次锁前缀 prefix 下的记录列表，判定自身 lock key 对应的 revision 是不是其中最小的，如果是的话，才表示加锁成功")]),t._v(" "),s("li",[t._v("如果锁被他人占用，取锁方会 watch 监听 revision 小于自己但最接近自己的那个 lock key 的删除事件.")])]),t._v(" "),s("p",[t._v("这样所有的取锁方就会在 revision 机制的协调下，根据取锁序号（revision）的先后顺序排成一条队列，每当锁被释放，只会惊动到下一顺位的取锁方，惊群问题得以避免."),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102111033331.png",alt:"image-20231102111033331"}})]),t._v(" "),s("p",[t._v("ref：https://zhuanlan.zhihu.com/p/626924850")])])}),[],!1,null,null,null);s.default=r.exports}}]);