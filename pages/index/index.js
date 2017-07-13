//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    currentTab: 0,
    currentT: 0,
    arr: [
      {
        img: "../../images/pic01.jpg",
        text: "小丸子呀小丸子"
      },
      {
        img: "../../images/pic02.jpg",
        text: "萌萌哒小丸子"
      },
      {
        img: "../../images/pic03.jpg",
        text: "小丸子啊萌萌哒"
      },
      {
        img: "../../images/pic04.jpg",
        text: "小丸子呀小丸子"
      },
      {
        img: "../../images/pic02.jpg",
        text: "萌萌哒小丸子"
      },
      {
        img: "../../images/pic03.jpg",
        text: "小丸子啊萌萌哒"
      },
      {
        img: "../../images/pic04.jpg",
        text: "小丸子呀小丸子"
      },
      {
        img: "../../images/pic01.jpg",
        text: "小丸子呀小丸子"
      },
    ],
    life: [
      {
        img: "../../images/img01.jpg",
        text: "徐云龙争顶！"
      },
      {
        img: "../../images/img02.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../images/img02.jpg",
        text: "徐云龙争顶！"
      },
      {
        img: "../../images/img01.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../images/img02.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../images/img01.jpg",
        text: "徐云龙争顶！"
      },
      {
        img: "../../images/img02.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
      {
        img: "../../images/img01.jpg",
        text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
      },
    ]
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  changeBanner(e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current - 0
    })
  },
  changeFoot(e){
    var that=this;
    that.setData({
      currentT:e.target.dataset.current-0
    });
  }
})
