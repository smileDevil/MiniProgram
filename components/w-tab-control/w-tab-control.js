// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
        type:Array,
        value:["衣服"]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      
      this.setData({
        currentindex: event.currentTarget.dataset.index
      })
      this.triggerEvent("titleclick", { title: event.currentTarget.dataset.title},{})
    }
  }
})
