module.exports = {
  tp_id: 1,
  logo: '',
  rule: '<ol><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">请“点击抽奖”进行转盘抽奖，奖品奖券通过二维码进行领取；<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">单个用户仅可领取一次；<br></span></li><li style="text-align: left;"><span style="color: rgb(255, 255, 255);">本次活动保留最终解释权。</span><br></li></ol>', // 活动说明
  awaken_img: '', // 唤醒图
  lottery: [
    {
      location: 1, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1406236855,840809371&fm=26&gp=0.jpg', // 转盘上的图片
      result_img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022536995,359514895&fm=26&gp=0.jpg', // 中奖结果图片
      rate: 90 // 中奖概率 1-100
    },
    {
      location: 2, // 位置 1-6
      type: 2, // 抽奖类型 1：活动 2：未中奖
      icon: '', // 转盘上的图片
      result_img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2027419133,3685143289&fm=26&gp=0.jpg', // 中奖结果图片
      rate: 20 // 中奖概率 1-100
    },
    {
      location: 3, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1406236855,840809371&fm=26&gp=0.jpg', // 转盘上的图片
      result_img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022536995,359514895&fm=26&gp=0.jpg', // 中奖结果图片
      rate: 20 // 中奖概率 1-100
    },
    {
      location: 4, // 位置 1-6
      type: 2, // 抽奖类型 1：活动 2：未中奖
      icon: '', // 转盘上的图片
      result_img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2027419133,3685143289&fm=26&gp=0.jpg', // 中奖结果图片
      rate: 20 // 中奖概率 1-100
    },
    {
      location: 5, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1406236855,840809371&fm=26&gp=0.jpg', // 转盘上的图片
      result_img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022536995,359514895&fm=26&gp=0.jpg', // 中奖结果图片
      rate: 10 // 中奖概率 1-100
    },
    {
      location: 6, // 位置 1-6
      type: 1, // 抽奖类型 1：活动 2：未中奖
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1406236855,840809371&fm=26&gp=0.jpg', // 转盘上的图片
      result_img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4022536995,359514895&fm=26&gp=0.jpg', // 中奖结果图片
      rate: 10 // 中奖概率 1-100
    }
  ]
}
