// pages/intersectionObserver/intersectionObserver.js
// 以滑动吸顶为模拟需求，分别使用 wx.createSelectorQuery() 和 wx.createIntersectionObserver() 实现
Page({
  data: {
    // 给固定定位元素添加的自定义标识
    identifier: new Date().getTime(),
    // 滑动吸顶元素距离顶部的高度，如果使用 'createSelectorQuery' 查询的话后续会修改这里的值，当页面滚动高度达到阈值的时候修改 isFixed 值，控制元素是否吸顶
    fixedTop: 0,
    isFixed: false
  },

  onLoad() {
    // 方法一 查询元素高度，配合小程序提供的 onPageScroll , 当界面滚动到这个高度的时候动态设置
    // this.queryFixedElementInfo();
    // // 方法二 创建节点观察器，比方案一好一些的就是，页面渲染要很久并且高度不固定的情况下，用这个比较稳定
    // // 用这个方案的时候记得把 onPageScroll 相关的代码注释掉，或者 fixedTop 设置一个很大的值
    this.onElementLinstener()
  },

  // 查询吸顶元素高度
  // queryFixedElementInfo () {
  //   wx.setNavigationBarTitle({ title: '节点查询' })
  //   // 获取一个 'SelectorQuery' 实例
  //   const query = wx.createSelectorQuery();

  //   // 选择 id 为 'fixed-content' 的页面元素，查询其布局位置
  //   query.select('#fixed-content').boundingClientRect();

  //   // empty-element 选择的是一个页面并不存在的节点，同样发起一个查询，写在这里只是想提醒下看代码片段的各位，对于不能确定的数据，在取值的时候尽量给个默认值，或者判断数据类型后再进行对应的操作，以免操作不当报错，影响后续的逻辑
  //   // 实际应用场景可能为，使用 wx:if 控制的元素，在查询时未渲染
  //   query.select('#empty-element').boundingClientRect();

  //   // 官方注解: '执行所有的请求 ***请求结果按请求次序构成数组*** 在callback的第一个参数中返回。'
  //   query.exec(res => {
  //     const [ fixedElement, emptyElement ] = res;

  //     // 第一项为查询页面节点 '#fixed-content' 的返回值，
  //     const { bottom, dataset, height, left, right, top, width } = fixedElement || {};
  //     // 查询对象中元素自身的宽高
  //     console.log(`%c 查询元素的宽高：${width} * ${height}`, 'color: #282C34');
  //     /**
  //      * top 为距顶部距离， bottom为元素底部距顶部的距离
  //      * 这块可以自己调整元素在界面中的位置
  //      * bottom - top === height;
  //      * console.log(bottom - top === height); // true
  //      */
  //     console.log(`%c 查询元素相对视图的边界坐标\n上：${top}\n下：${bottom}\n左：${left}\n右：${right}`, 'color: #a52222');
  //     // 查询元素中携带的自定义属性
  //     console.dir(dataset);

  //     // 因为第二条并不存在于页面中，所以也没有返回值，从里边取值的时候记得给个默认值
  //     const { id } = emptyElement || {};
  //     console.log(`%c 以解构方式取到的值为：${id}, 但是不会报错，需要的话可以在解构的时候赋个默认值`, 'color: red');
  //     /** 以下写法会报错，影响后续的业务逻辑  */
  //     // console.log(res[1].id || emptyElement.id);

  //     // do sth...
  //     // 记录 '#fixed-content' 距离顶部的距离
  //     this.setData({ fixedTop: top });
  //   });
  // },

  /**
   * 简单说一下这个东西吧，算是自己做一个记录
   * 会用到这个API的场景是在做项目的时候，有一个tab吸顶的需求。
   * 本来开始的想法是页面加载完成后用上边查询元素高度的方法，再配合页面滚动时候做点操作，就可以了
   * 但就在页面加载完成这一步就给我卡住了。。。
   * 首页东西涉及的有些多，所以查询的时机是在页面请求后 setData 完成的回调里再查，但查出来的高度依旧是不准确的，是因为 setData 完成后页面的一些东西可能还没有渲染完成，高度在不断的变化。又尝试了些别的方案，都没办法很好的解决这个问题，于是向老大请教了下，最后知道小程序有提供这个API
   * 即使看过文档，查过一些大佬的使用案例和说明也一样是有点懵，索性新建了个代码片段去尝试，不停的调试查看打印数据，终于完成了需求
   * 想给用到这个API的各位说一下，因为是在项目结束后才有时间去总结这些，所以使用时候踩的坑和迷惑的地方可能没办法全部描述出来，所以即使看过它，也只是看了个和官方文档差不多的一个例子而已，还是需要自己写demo去查看不同状态下的打印数据。
   * 多去尝试，敢于试错
   */
  // 元素观察器
  onElementLinstener() {
    wx.setNavigationBarTitle({ title: '元素观察器' })
    // 获取系统信息 statusBarHeight为状态栏高度
    const { statusBarHeight } = wx.getSystemInfoSync()
    // 创建节点侦查器
    const createIntersectionObserver = wx.createIntersectionObserver(this)
    // 可以链式调用，这里是为了写备注方便点
    /**
     * 调用 relativeToViewport() 去指定页面显示区域作为参照
     * 假定 statusBarHeight 的值为 20 ，那么下边的代码就是选择了距离顶部 64像素(模拟导航栏高度) 的地方，就像页面的一条横截线一样
     * observe() 的第一个参数指定的元素达到所选的参照区域，则侦听器触发回调
     */
    createIntersectionObserver.relativeToViewport({ top: -(statusBarHeight + 44) })
    // 指定要侦测的元素为 '#fixed-wrap' , ← 为包裹固定元素的容器而不是固定元素
    createIntersectionObserver.observe('#fixed-wrap', res => {
      const { boundingClientRect, intersectionRect } = res
      // boundingClientRect - 目标边界相对于页面的情况
      // clientTop 为与目标相去的高度，当它为负值的时候则说明元素已经过了我们所设置监听的那个高度
      const { top: clientTop } = boundingClientRect
      // intersectionRect - 与目标相交的区域 上下左右.. 单位px 因为这里指定的是页面的一条横截线，所以无所谓上下左右
      // top 为观察元素相对于页面的高度
      const { top } = intersectionRect
      if (clientTop <= 0 && top === 0) {
        console.log(clientTop, top, '@@@@@@')
        console.log('true')
        this.setData({ isFixed: true })
        return
      }
      console.log(clientTop, top)
      console.log('false')
      this.setData({ isFixed: false })
    })
  }

  // 页面滑动事件
  // onPageScroll (e) {
  //   const { scrollTop } = e;
  //   const { fixedTop, isFixed } = this.data;
  //   if (scrollTop >= fixedTop && !isFixed) {
  //     this.setData({ isFixed: true });
  //     return;
  //   }
  //   if (scrollTop < fixedTop && isFixed) {
  //     this.setData({ isFixed: false });
  //     return;
  //   }
  // },
})
