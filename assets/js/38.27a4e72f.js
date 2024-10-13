(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{435:function(_,t,v){"use strict";v.r(t);var a=v(2),s=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"ch03-datalink-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ch03-datalink-layer"}},[_._v("#")]),_._v(" Ch03 DataLink Layer")]),_._v(" "),t("h2",{attrs:{id:"数据链路层的基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层的基本概念"}},[_._v("#")]),_._v(" 数据链路层的基本概念")]),_._v(" "),t("h3",{attrs:{id:"数据链路层的简单模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层的简单模型"}},[_._v("#")]),_._v(" 数据链路层的简单模型")]),_._v(" "),t("p",[_._v("数据链路层不关心物理层解决的问题，只关心帧头帧尾和校验。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image1.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"数据链路层的信道类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层的信道类型"}},[_._v("#")]),_._v(" 数据链路层的信道类型")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("点到点信道：这种信道使用一对一的点对点通信方式。")])]),_._v(" "),t("li",[t("p",[_._v("广播信道：广播信道上的主机很多，需要专用的共享信道协议来协调主机的数据发送。")])])]),_._v(" "),t("h3",{attrs:{id:"链路与数字链路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链路与数字链路"}},[_._v("#")]),_._v(" 链路与数字链路")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("链路(link)——是一条点到点的物理线路段，中间没有任何其他的交换节点。一条链路只是一条通路的一个组成部分。")])]),_._v(" "),t("li",[t("p",[_._v("数据链路(data link)——除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上，就构成了数据链路。最常用的方法是使用适配器(网卡)来实现这些协议的硬件和软件。一般的适配器都包括了数据链路层和物理层这两层的功能。")])])]),_._v(" "),t("h3",{attrs:{id:"帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帧"}},[_._v("#")]),_._v(" 帧")]),_._v(" "),t("p",[_._v("在网络层，给数据包增加了接收端和发送端的IP地址。在数据链路层里，增加了帧头帧尾，MAC地址和校验值。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image2.png",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"数据链路层解决的基本问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层解决的基本问题"}},[_._v("#")]),_._v(" 数据链路层解决的基本问题")]),_._v(" "),t("h3",{attrs:{id:"封装成帧-framing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#封装成帧-framing"}},[_._v("#")]),_._v(" 封装成帧(framing)")]),_._v(" "),t("p",[_._v("就是在一段数据的前后分别添加帧头和帧尾，构成一个帧，确定帧的界限。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image3.png",alt:"img"}})]),_._v(" "),t("p",[_._v("但是，可能会出现以下问题，")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image4.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"透明传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#透明传输"}},[_._v("#")]),_._v(" 透明传输")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("用字节填充法解决透明传输问题。发送端的数据链路层在数据中出现控制字符“SOH”或“EOT”的前面插入一个转义字符“ESC”(十六进制数1B)。")])]),_._v(" "),t("li",[t("p",[_._v("字节填充(byte stuffing)或字符填充(character stuffing)——接收端的数据链路层在数据送往网络层之前杀出插入的转义字符。")])]),_._v(" "),t("li",[t("p",[_._v("如果转义字符也出现在数据之中，那么应该在转义字符前插入一个转义字符。当接收端收到连续的两个转义字符时，就删除前面的那一个。")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image5.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"差错校验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#差错校验"}},[_._v("#")]),_._v(" 差错校验")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("传输过程中可能会产生bit差错：0变成1，1变成0.")])]),_._v(" "),t("li",[t("p",[_._v("在一段时间内，传输错误的比特率占所传输比特总数的比率称为误码率BER(bit error rate)。")])]),_._v(" "),t("li",[t("p",[_._v("误码率和信噪比的关系很大。")])]),_._v(" "),t("li",[t("p",[_._v("为了保证数据传输的可靠性，在计算机网络传输数据时，必须采用各种差错检验措施。")])])]),_._v(" "),t("h4",{attrs:{id:"循环冗余检验crc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环冗余检验crc"}},[_._v("#")]),_._v(" 循环冗余检验CRC:")]),_._v(" "),t("p",[_._v("除数必须比后面添加的0的位数多一位，可以是任意的二进制数。每一步运算其实是不进位的加法。下图的001就是FCS帧检验序列。接收端计算101001001(也就是原数据加上FCS)除以1101，如果商为0，意味着传输过程没有差错，就接受，否则丢弃。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image6.png",alt:"img"}})]),_._v(" "),t("p",[_._v("在数据后面添加的冗余码称为帧检验序列FCS(frame check seqeunce)。CRC不是获得FCS的唯一方法。")]),_._v(" "),t("h5",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[_._v("#")]),_._v(" 特点：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("不能确定出错的bit的是哪一位；")])]),_._v(" "),t("li",[t("p",[_._v("可能会出错，但只要经过严格的挑选，并且除数位数足够大，就可以极大减少出错概率；")])]),_._v(" "),t("li",[t("p",[_._v("CRC只能做到无差错接受(意思是传输过程没有差错，有差错的一律丢弃)；")])]),_._v(" "),t("li",[t("p",[_._v("要做到可靠传输，必须加上确认和重传机制。")])])]),_._v(" "),t("h2",{attrs:{id:"两种情况下的数据链路层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种情况下的数据链路层"}},[_._v("#")]),_._v(" 两种情况下的数据链路层")]),_._v(" "),t("h3",{attrs:{id:"使用点对点信道的数据链路层-广域网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用点对点信道的数据链路层-广域网"}},[_._v("#")]),_._v(" 使用点对点信道的数据链路层(广域网)")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("PPP协议(point to point protocol)，是数据链路层协议，例如用户使用拨号上网。")])]),_._v(" "),t("li",[t("p",[_._v("PPP协议应该满足：")])])]),_._v(" "),t("blockquote",[t("p",[_._v("简单")]),_._v(" "),t("p",[_._v("封装成帧")]),_._v(" "),t("p",[_._v("透明性")]),_._v(" "),t("p",[_._v("多种网络层协议")]),_._v(" "),t("p",[_._v("多种类型链路")]),_._v(" "),t("p",[_._v("差错检验")]),_._v(" "),t("p",[_._v("检测连接状态")]),_._v(" "),t("p",[_._v("最大传送单元")]),_._v(" "),t("p",[_._v("网络层地址协商")]),_._v(" "),t("p",[_._v("数据压缩协商")])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("PPP协议不需要满足：")])]),_._v(" "),t("blockquote",[t("p",[_._v("纠错")]),_._v(" "),t("p",[_._v("流量控制")]),_._v(" "),t("p",[_._v("序号")]),_._v(" "),t("p",[_._v("多点链接")]),_._v(" "),t("p",[_._v("半双工或单工连接")])]),_._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[_._v("PPP协议的组层部分：")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("数据链路层协议可以用于异步串行或同步串行介质；")])]),_._v(" "),t("li",[t("p",[_._v("使用LCP(链路控制协议)建立并维护数据链路连接，可以实现身份验证和欠费管理；")])]),_._v(" "),t("li",[t("p",[_._v("网络控制协议(NCP)允许在点到点连接上使用多种网络层协议，如下图；")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image7.png",alt:"img"}})]),_._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[_._v("PPP协议帧格式")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("标志字段F = 0x7E")])]),_._v(" "),t("li",[t("p",[_._v("地址字段A = 0xFF，它并不起作用")])]),_._v(" "),t("li",[t("p",[_._v("控制字段C = 0x03")])])]),_._v(" "),t("p",[_._v("PPP协议是面向字节的，所以所有的PPP帧的长度都是整数字节。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image8.png",alt:"img"}})]),_._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[_._v("字节填充(类似于透明传输)")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("此时，信息部分是以字节为单位的。")])]),_._v(" "),t("li",[t("p",[_._v("将信息字段中出现的每个0x7E字节转变成为2字节序列(0x7D,0x5E);")])]),_._v(" "),t("li",[t("p",[_._v("将信息字段中出现的每个0x7D字节转变成为2字节序列(0x7D,0x5D);")])]),_._v(" "),t("li",[t("p",[_._v("将信息字段中出现的每个ASCII码控制字符(小于0x20字符)，在前面加入一个0x7D；")])])]),_._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[_._v("0比特填充(类似于透明传输)")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("此时，信息部分是二进制流。PPP协议在SONET/SDH链路时，是使用同步传输。")])]),_._v(" "),t("li",[t("p",[_._v("在发送端，只要发现有5个连续的1，则填充一个0，接收端删掉对应的0。")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image9.png",alt:"img"}})]),_._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[_._v("PPP协议不使用序号和确认机制的原因")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("在数据链路层出现错误的概率不大时，使用较简单的PPP协议较为合理；")])]),_._v(" "),t("li",[t("p",[_._v("在Internet环境下，PPP的信息字段放入的数据是IP数据报。数据链路层的可靠传输并不能保证网络层的传输也是可靠的；")])]),_._v(" "),t("li",[t("p",[_._v("帧检验序列FCS字段可以保证无差错接受。")])])]),_._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[_._v("PPP协议的工作状态")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("当用户拨号接入ISP(网络运营商)时，陆游去的调制解调器对拨号进行确认，建立物理连接；")])]),_._v(" "),t("li",[t("p",[_._v("PC机箱路由器发送一些列的LCP(链路控制协议)分组(封装成多个PPP帧)；")])]),_._v(" "),t("li",[t("p",[_._v("这些分组及其响应选择一些PPP参数，和进行网络层配置，NCP(网络控制协议)给新接入的PC机分配一个临时的IP地址，使PC机成为Internet上的一个主机；")])]),_._v(" "),t("li",[t("p",[_._v("通信完毕后，NCP释放网络层连接，收回原来分配出去的IP地址；")])]),_._v(" "),t("li",[t("p",[_._v("接着，LCP释放数据链路层连接；")])]),_._v(" "),t("li",[t("p",[_._v("最后释放的事物理层连接。")])])]),_._v(" "),t("h3",{attrs:{id:"使用广播信道的数据链路层-局域网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用广播信道的数据链路层-局域网"}},[_._v("#")]),_._v(" 使用广播信道的数据链路层(局域网)")]),_._v(" "),t("p",[_._v("一般是总线型。")]),_._v(" "),t("ol",[t("li",[_._v("局域网的拓扑")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image10.png",alt:"img"}})]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("共享通信媒体")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("静态划分信道(麻烦)：")])]),_._v(" "),t("li",[t("p",[_._v("频分复用；时分复用；波分复用；码分复用；")])]),_._v(" "),t("li",[t("p",[_._v("动态媒体接入控制(多点接入)：")])]),_._v(" "),t("li",[t("p",[_._v("随机接入(主要是以太网)；受控接入，如多点线路探询(polling)，轮询(不采用了)。")])])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("认识以太网")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("最初的以太网是将许多计算机都连接到一根总线上，当初认为这样连接即简单又可靠，因为总线上没有有源器件。")])]),_._v(" "),t("li",[t("p",[_._v("总线上每一个主机都能检测到B发送的数据。但是只有D的地址和数据帧首部写入的地址一致，所以只有D接收。其余计算机都能检测到这不是发送给他们的数据帧，所以就丢弃这个数据帧。")])]),_._v(" "),t("li",[t("p",[_._v("这是一种具有广播特性的总线上实现了一对一通信。这种方式不安全。")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image11.png",alt:"img"}})]),_._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[_._v("带冲突检测的载波监听/碰撞检测")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("CSMA/CD：")]),_._v(" "),t("ul",[t("li",[_._v("Carrier Sense Multiple Access with Collision Detection")])])]),_._v(" "),t("li",[t("p",[_._v("多点接入：")]),_._v(" "),t("ul",[t("li",[_._v("许多计算机以多点接入的方式连接在一根总线上。")])])]),_._v(" "),t("li",[t("p",[_._v("载波监听：")]),_._v(" "),t("ul",[t("li",[_._v("每一个站在发送数据之前都先要用电子技术检测一下总线时候有其它计算机在发送数据信号，如果有则不发送数据，以免发生碰撞；")])])])]),_._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[_._v("碰撞检测")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("碰撞检测就是计算机边发送数据边检测信道上信号电压的大小。")])]),_._v(" "),t("li",[t("p",[_._v("当几个站同时在总线上发送数据时，总线上的信号电压摆动值将会增大；")])]),_._v(" "),t("li",[t("p",[_._v("当一个站检测到信号地哪呀摆动值超过一定的门限值时，就认为总线上至少有两个站在同时发送数据，表明产生了碰撞；")])]),_._v(" "),t("li",[t("p",[_._v("碰撞就是冲突，碰撞检测也称冲突检测。")])]),_._v(" "),t("li",[t("p",[_._v("检测到碰撞后：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("在发生碰撞时，总线上传输的信号产生了严重的失真，无法从中恢复出有用的信息；")])]),_._v(" "),t("li",[t("p",[_._v("每一个正在发送数据的站，一旦发现总线上出现了碰撞，就立即停止发送，避免浪费网络资源，等待一个随机的时间后再次发送。")])])])])]),_._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[_._v("传播时延对载波监听的影响")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image12.png",alt:"img"}})]),_._v(" "),t("p",[_._v("在2t时间内，可能存在碰撞。")]),_._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[_._v("CSMA/CD的重要特性")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("使用CSMA/CD协议的以太网不能进行全双工通信而只能进行双向交替通信(半双工)；")])]),_._v(" "),t("li",[t("p",[_._v("每个站在发送数据之后的一小段时间内，存在着遭遇碰撞的可能；")])]),_._v(" "),t("li",[t("p",[_._v("这种发送的不确定性使整个以太网的平均通信量远小于以太网的最高数据率。")])])]),_._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[_._v("争用期")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("最先发送数据帧的站，在发送数据帧后至多经过时间2t(2倍的端到端往返时延)就可知道发送的数据帧是否发生了碰撞。")])]),_._v(" "),t("li",[t("p",[_._v("经过争用期这段时间还没有检测到碰撞，就可以肯定不会发生碰撞；")])]),_._v(" "),t("li",[t("p",[_._v("以太网的争用期：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("以太网的端到端往返时延2t称为争用期，或碰撞窗口，通常取51.2微秒为争用期的长度；如果网线过长，会导致争用期时间的延长，这也是为什么网线一般不超过100m；")])]),_._v(" "),t("li",[t("p",[_._v("对于10Mb/s的以太网，在争用期可以发送512bit，也就是64 byte；")])]),_._v(" "),t("li",[t("p",[_._v("以太网在发送数据的时候，若前64字节没有冲突，后续也不会发生冲突；")])])])]),_._v(" "),t("li",[t("p",[_._v("最短有效帧长：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("如果发生冲突，一定是前64字节；")])]),_._v(" "),t("li",[t("p",[_._v("由于一旦发生冲突就立刻停止，所以已发送的数据一定小雨64字节；")])]),_._v(" "),t("li",[t("p",[_._v("以太网规定了最短有效帧长为64字节，凡事小雨64字节的帧一定是因为冲突而异常终止的无效帧。")])])])])]),_._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[_._v("二进制指数类型退避算法")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("发送碰撞的站在停止发送数据后，要推迟一个随机事件才能发送数据。")])]),_._v(" "),t("li",[t("p",[_._v("确定基本退避时间，一般是争用期2t；")])]),_._v(" "),t("li",[t("p",[_._v("定义参数k = min(重传次数，10)；")])]),_._v(" "),t("li",[t("p",[_._v("从整数集合{0,1,…,2^k-1}中随机取出一个数，记为r，重传所需的时延就是r倍的基本退避时间；")])]),_._v(" "),t("li",[t("p",[_._v("当重传达16次时仍不能成功时就丢弃该帧，并向高层报告。")])])]),_._v(" "),t("h2",{attrs:{id:"以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太网"}},[_._v("#")]),_._v(" 以太网")]),_._v(" "),t("h3",{attrs:{id:"以太网的两个标准"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太网的两个标准"}},[_._v("#")]),_._v(" 以太网的两个标准")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("DIX Ethernet V2一般是指这个。")])]),_._v(" "),t("li",[t("p",[_._v("IEEE 802.3 两个标准差别很小。")])]),_._v(" "),t("li",[t("p",[_._v("以太网 是满足DIX Ethernet V2标准的局域网。")])])]),_._v(" "),t("h3",{attrs:{id:"以太网与数据链路层的2个子层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太网与数据链路层的2个子层"}},[_._v("#")]),_._v(" 以太网与数据链路层的2个子层")]),_._v(" "),t("p",[_._v("为了使数据链路层更好的适应多种局域网标准，802委员会把局域网拆分为：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("逻辑链路控制LLC(Logical Link Control)子层；")])]),_._v(" "),t("li",[t("p",[_._v("媒体接入控制MAC(Medium Access Control)子层。")])])]),_._v(" "),t("p",[_._v("与接入到传输媒体有关的内容都放在MAC子层上，而LLC子层与传输媒体无关，不管什么协议的局域网对LLC子层都是透明的；")]),_._v(" "),t("p",[_._v("由于局域网标准一般是DIX Ethernet V2而不是IEEE 802.3，所以802.2标准的LLC子层作用已经不大了，很多厂商适配器没有LLC协议；")]),_._v(" "),t("h3",{attrs:{id:"以太网提供的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太网提供的服务"}},[_._v("#")]),_._v(" 以太网提供的服务")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("以太网提供服务是不可靠的交付，即最大努力的交付；")])]),_._v(" "),t("li",[t("p",[_._v("当接收站收到的有差错的数据帧时就丢弃此帧，其它什么也不做，差错的纠正由高层来处理；")])]),_._v(" "),t("li",[t("p",[_._v("如果高层发现丢失了一些数据而进行重传，但以太网并不知道这是一个重传的帧，而是当作一个新帧发送。")])])]),_._v(" "),t("h3",{attrs:{id:"以太网的星型拓扑结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太网的星型拓扑结构"}},[_._v("#")]),_._v(" 以太网的星型拓扑结构")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("物理上是星型，逻辑上是总线型。")])]),_._v(" "),t("li",[t("p",[_._v("为了降低成本，最初由粗的同轴电缆变成细的同轴电缆最后变成无屏蔽双绞线。每个站需要用两对双绞线，分别用于发送和接收；")])]),_._v(" "),t("li",[t("p",[_._v("在星形的中心增加了一种可靠性高的设备，为集线器(hub)。")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image13.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"集线器的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集线器的特点"}},[_._v("#")]),_._v(" 集线器的特点")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("集线器使用电子器件来模拟实际电缆线的工作，因此整个系统仍然是像一个传统的以太网那样运行。由于集线器使用了大规模集成电路芯片，所以可靠性更高；")])]),_._v(" "),t("li",[t("p",[_._v("使用集线器逻辑上仍然是一个总线网，各工作站使用的还是CSMA/CD协议，共享逻辑网络上的总线；")])]),_._v(" "),t("li",[t("p",[_._v("集线器像一个多接口的转发器，工作在物理层。")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image14.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"_10base-t-基于集线器的以太网标准"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10base-t-基于集线器的以太网标准"}},[_._v("#")]),_._v(" 10Base-T 基于集线器的以太网标准")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("它的通信距离稍短，每个站到集线器的距离不超过100m。")])]),_._v(" "),t("li",[t("p",[_._v("这种10MB/s的无屏蔽双绞线星形网的出现，能降低成本和提高可靠性。")])]),_._v(" "),t("li",[t("p",[_._v("10Base-T的出现有很大的意义，类似标准有100Base-FX，10Base-T，100Base-T4.")])])]),_._v(" "),t("h3",{attrs:{id:"信道利用率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信道利用率"}},[_._v("#")]),_._v(" 信道利用率")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("争用期长度为2t；帧长为L bit，数据发送旅为C b/s，帧的发送时间为L/C = T0 秒。")])]),_._v(" "),t("li",[t("p",[_._v("一个帧从开始发送，经可能发生的碰撞后，将再次重传多次，直到发送成功且信道转为空闲(即再经过t使得信道上没有信号在传播)时为止，是发送一帧所需的平均时间。（最后t为传送时间，信道利用率即发送时间比发送一帧所需平均时间）")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image15.png",alt:"img"}})]),_._v(" "),t("ul",[t("li",[t("p",[_._v("定义a = t / T0，是单程端到端时延t与帧发送时间T0的比值。a越小，说明碰撞检测越快，信道利用率高。")])]),_._v(" "),t("li",[t("p",[_._v("当数据率(网速)一定时，以太网的连线长度受到限制，否则t会太长；")])]),_._v(" "),t("li",[t("p",[_._v("以太网的帧长不能太短，否则T0太小，使a太大。")])])]),_._v(" "),t("h3",{attrs:{id:"信道利用率的最大值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信道利用率的最大值"}},[_._v("#")]),_._v(" 信道利用率的最大值")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("假设理想状态下，以太网个展发送的数据都不会碰撞，一旦总线空闲就能有站立即发送数据，所以没有争用期；")])]),_._v(" "),t("li",[t("p",[_._v("发送一帧需要占用总线T0+t，而帧本身需要发送时间为T0，于是理想情况下极限信道利用率Smax = T0 / (T0 + t) = 1 / (1 + a).")])])]),_._v(" "),t("h2",{attrs:{id:"mac层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac层"}},[_._v("#")]),_._v(" MAC层")]),_._v(" "),t("h3",{attrs:{id:"mac层的硬件地址-mac地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac层的硬件地址-mac地址"}},[_._v("#")]),_._v(" MAC层的硬件地址(MAC地址)")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("硬件地址 = 物理地址 = MAC地址")])]),_._v(" "),t("li",[t("p",[_._v("MAC地址前3个字节(24位)是厂家分配的地址字段，后3个字节(24位)是厂家自定义，称为扩展标识符；")])]),_._v(" "),t("li",[t("p",[_._v("一个地址块可以产生2^24个地址，这种48位地址称为MAC-48，通用名为EUI-48，这就是MAC地址；")])]),_._v(" "),t("li",[t("p",[_._v("MAC地址实际上是每一个站的名字或标识符。")])])]),_._v(" "),t("h3",{attrs:{id:"适配器检查mac地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适配器检查mac地址"}},[_._v("#")]),_._v(" 适配器检查MAC地址")]),_._v(" "),t("p",[_._v("适配器从网络上每收到一个MAC帧就要用硬件检查MAC帧中的MAC地址：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("如果是发往本站的帧就收下，然后进行其它处理；")])]),_._v(" "),t("li",[t("p",[_._v("否则丢弃。")])])]),_._v(" "),t("p",[_._v("发往本站的帧包括：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("单播帧(unicast)(一对一)")])]),_._v(" "),t("li",[t("p",[_._v("广播帧(broadcast)(一对全体)")])]),_._v(" "),t("li",[t("p",[_._v("多播帧(multicast)(一对多)")])])]),_._v(" "),t("h3",{attrs:{id:"mac帧的格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac帧的格式"}},[_._v("#")]),_._v(" MAC帧的格式")]),_._v(" "),t("p",[_._v("6 + 6 + 2 + 46 + 4 =64 byte，这就是为什么IP数据报的最短长度为46字节。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image16.png",alt:"img"}})]),_._v(" "),t("ul",[t("li",[_._v("前8个字节的作用是实现比特同步，第一个字段共7个字节，称为前同步码，作用是实现快速MAC帧的比特同步；第二个字段是帧开始定界符，表示后面的信息是MAC帧。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image17.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"无效的mac帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无效的mac帧"}},[_._v("#")]),_._v(" 无效的MAC帧")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("帧的长度不是整数个字节；")])]),_._v(" "),t("li",[t("p",[_._v("用收到的帧检验序列FCS查出有错误；")])]),_._v(" "),t("li",[t("p",[_._v("数据字段的长度不在46-1518字节内；")])]),_._v(" "),t("li",[t("p",[_._v("对于检查出来的无效MAC帧简单的丢弃。")])])]),_._v(" "),t("h3",{attrs:{id:"帧间最小间隔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帧间最小间隔"}},[_._v("#")]),_._v(" 帧间最小间隔")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("为9.6微秒。相当于96bit的发送时间。")])]),_._v(" "),t("li",[t("p",[_._v("一个站在检测到总线空闲时，还需要等待9.6微秒后才能再次发送数据，这样做是为了使刚刚收到的数据帧的站接收缓存来得及清理，做好接收下一帧的准备。")])])]),_._v(" "),t("h2",{attrs:{id:"数据帧的抓包分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据帧的抓包分析"}},[_._v("#")]),_._v(" 数据帧的抓包分析")]),_._v(" "),t("h2",{attrs:{id:"扩展以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展以太网"}},[_._v("#")]),_._v(" 扩展以太网")]),_._v(" "),t("h3",{attrs:{id:"在物理层考虑扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在物理层考虑扩展"}},[_._v("#")]),_._v(" 在物理层考虑扩展")]),_._v(" "),t("ol",[t("li",[_._v("距离的扩展")])]),_._v(" "),t("p",[_._v("主机使用光纤和一对光纤调制解调器连接到集线器。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image18.png",alt:"img"}})]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("数量的扩展")])]),_._v(" "),t("p",[_._v("集线器集联：使网络中计算机增加，变成一个大的冲突域，会造成效率降低。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image19.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"在数据链路层考虑扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在数据链路层考虑扩展"}},[_._v("#")]),_._v(" 在数据链路层考虑扩展")]),_._v(" "),t("ol",[t("li",[_._v("使用网桥")])]),_._v(" "),t("p",[_._v("网桥工作在数据链路层，他根据MAC帧的目的地址对收到的帧进行转发。网桥具有过滤帧的功能。当网桥收到一个帧时，并不是向所有的接口转发此帧，而是现检查此帧的目的MAC地址，然后再确定将该帧转发到对应的接口。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image20.png",alt:"img"}})]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("交换机")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("随着网桥的接口的增加， 后来网桥和集线器合并了，计算机可以直接和交换机连接，这就是交换机。")])]),_._v(" "),t("li",[t("p",[_._v("交换机就是网桥和集线器的合并升级版，能全双工，安全通信。")])])]),_._v(" "),t("blockquote",[t("p",[_._v("端口带宽独享")]),_._v(" "),t("p",[_._v("安全")]),_._v(" "),t("p",[_._v("基于MAC地址转发")]),_._v(" "),t("p",[_._v("通过学习构建MAC地址表")])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("透明网桥(transparent )")])]),_._v(" "),t("p",[_._v("透明指局域网上的站点不知道所发送的帧将经过几个网桥，因为网桥对于各站点是看不见的。")]),_._v(" "),t("p",[_._v("透明网桥是一种即插即用的设备，标准是IEEE 802.1D。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image21.png",alt:"img"}})]),_._v(" "),t("p",[_._v("透明网桥使用了生成树算法。避免产生转发的帧在网络中不停的转圈。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image22.png",alt:"img"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image23.png",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"快速以太网-fast-ethernet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速以太网-fast-ethernet"}},[_._v("#")]),_._v(" 快速以太网(fast ethernet)")]),_._v(" "),t("h3",{attrs:{id:"_100base-t以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_100base-t以太网"}},[_._v("#")]),_._v(" 100Base-T以太网")]),_._v(" "),t("p",[_._v("速率在100Mb/s以上的以太网称为高速以太网。")]),_._v(" "),t("p",[_._v("在双绞线上传送100Mb/s基带信号的星型拓扑以太网，仍使用IEEE 802.3的CSMA/CD协议。100Base-T以太网被称为快速以太网(fast ethernet)。")]),_._v(" "),t("p",[_._v("100Base-T以太网的物理层：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("100Base-TX:使用2对UTP 5类线或屏蔽双绞线STP。")])]),_._v(" "),t("li",[t("p",[_._v("100Base-FX:使用2对光纤。")])]),_._v(" "),t("li",[t("p",[_._v("100Base-T4:使用4对UTP 3类线或5类线。")])])]),_._v(" "),t("h3",{attrs:{id:"_100base-t以太网的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_100base-t以太网的特点"}},[_._v("#")]),_._v(" 100Base-T以太网的特点")]),_._v(" "),t("p",[_._v("可以实现全双工通信(注意，如果交换机上某一路连接着集线器(半双工)，则这一路不能实现全双工)而无冲突，此时不使用CSMA/CD协议。")]),_._v(" "),t("p",[_._v("MAC帧格式不变，仍是802.3 标准。")]),_._v(" "),t("p",[_._v("最短帧长度不变，但是一个网段的最大电缆长度减少到100m。")]),_._v(" "),t("p",[_._v("帧间间隔从9.6微秒缩小到0.96微秒。")]),_._v(" "),t("h3",{attrs:{id:"吉比特gbit以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#吉比特gbit以太网"}},[_._v("#")]),_._v(" 吉比特Gbit以太网")]),_._v(" "),t("p",[_._v("允许在1 Gb/s下全双工或半双工工作方式。")]),_._v(" "),t("p",[_._v("使用802.3标准的帧格式。")]),_._v(" "),t("p",[_._v("在半双工下使用CSMA/CD协议。")]),_._v(" "),t("p",[_._v("与10Base-T和100Base-T技术向后兼容。")]),_._v(" "),t("p",[_._v("当吉比特以太网在全双工方式时，不用载波延伸和分组冲突。")]),_._v(" "),t("p",[_._v("1000Base-X以太网的物理层(基于光纤通道)：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("1000Base-SX：SX表示短波长，传输距离上275m或550m。")])]),_._v(" "),t("li",[t("p",[_._v("1000Base-LX：LX表示长波长，传输距离上550m或5000m。")])]),_._v(" "),t("li",[t("p",[_._v("1000Base-CX：")])])]),_._v(" "),t("p",[_._v("1000Base-T以太网的物理层(基于双绞线)：")]),_._v(" "),t("ul",[t("li",[_._v("使用 4对 5类线UTP。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image24.png",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"_10gbit-s以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10gbit-s以太网"}},[_._v("#")]),_._v(" 10Gbit/s以太网")]),_._v(" "),t("p",[_._v("MAC帧格式不变，仍是802.3 标准。")]),_._v(" "),t("p",[_._v("使用光纤而不是铜线。")]),_._v(" "),t("p",[_._v("只能工作在全双工方式，没有争用问题。")]),_._v(" "),t("p",[_._v("它的出现使工作范围从局域网扩大到城域网和广域网，实现了端到端的以太网传输，优点是：技术成熟；互操作性好；广域网中使用以太网便宜；统一的帧格式。")]),_._v(" "),t("h3",{attrs:{id:"以太网从10mb-s到10gb-s的演变说明了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太网从10mb-s到10gb-s的演变说明了"}},[_._v("#")]),_._v(" 以太网从10Mb/s到10Gb/s的演变说明了")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("可拓展性")])]),_._v(" "),t("li",[t("p",[_._v("灵活性(多种传输媒体，全/半双工，共享/交换)")])]),_._v(" "),t("li",[t("p",[_._v("易于安装")])]),_._v(" "),t("li",[t("p",[_._v("稳健性好")])])]),_._v(" "),t("h3",{attrs:{id:"cisco建网的3层模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cisco建网的3层模型"}},[_._v("#")]),_._v(" Cisco建网的3层模型")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image25.png",alt:"img"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);