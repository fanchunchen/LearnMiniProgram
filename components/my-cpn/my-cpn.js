// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是默认标题',
      // observer: function (newVal, oldVal) { console.log(newVal, oldVal); }
    }
  },
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

    content: '我是cpn组件的内容'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
