import React, { PureComponent } from 'react';
import '../assets/scss/Turntable.scss';
import Dialog from './Dialog.js';
import turntableFailImg from '../assets/img/no-gift.png';
import { prefixStyle } from '../assets/js/dom.js';

const transformCss = prefixStyle('transform-css');
const transformJs = prefixStyle('transform-js');
const transition = prefixStyle('transition');
const transitionend = prefixStyle('transitionend');

export default class Turntable extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      turntableFail: 2,
      turntableSuccess: 1,
      isGoing: false,
      dialog: {
        show: false,
        title: '',
        resultImg: '',
        resultText: '',
        destoryTime: 15
      }
    };

    this.gameStart = this.gameStart.bind(this);
  }

  render () {
    const { turntableFail, dialog } = this.state;
    const { turntable } = this.props;

    return (
      <div className="turntable-wrap">
        <div className="turntable-bg">
          <div className="light"></div>
          <div className="pointer" onClick={this.gameStart}></div>
          <div className="turntable" id="turntable">
            <ul className="prize">
              { turntable.map((item, index) => {
                  return (
                    <li key={item.location}>
                      <img className="img" src={Number(item.type) === turntableFail ? turntableFailImg : item.icon} alt=""/>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="decorate1"></div>
          <div className="decorate2"></div>
        </div>
        <Dialog dialog={dialog} ref="dialog"/>
      </div>
    )
  }

  gameStart () {
    const { turntableFail, turntableSuccess, isGoing } = this.state;
    const { turntable } = this.props;
    const turntableEl = document.querySelector('#turntable');
    
    if (turntable && !turntable.length) {
      return;
    }
    if (isGoing) {
      return;
    }
    
    let setDialog = {show: false};
    this.setState({isGoing: true, dialog: setDialog});

    // 1. 随机生成中奖结果
    let randomNum = parseInt(Math.random() * 100) + 1;
    let count = 0;
    turntable.forEach(item => {
      item.min = count;
      count += Number(item.rate);
      item.max = count;
    });
    let randomRes = turntable.filter(item => {
      return randomNum > item.min && randomNum <= item.max;
    })[0];
    // 若中奖没有中奖图片，则为未中奖
    if (Number(randomRes.type) === turntableSuccess && !randomRes.result_img) {
      randomRes = turntable.filter(item => Number(item.type) === turntableFail)[0];
    }

    // 2. 计算旋转角度，多转5圈，一圈用时1秒
    let itemDeg = (randomRes.location - 1) * (360 / turntable.length); // 第一个不用转
    let rotate = itemDeg + 5 * 360;
    let speed = (itemDeg / 360 + 5).toFixed(2);
    turntableEl.style[transformJs] = `rotate(${rotate}deg)`;
    turntableEl.style[transition] = `${transformCss} ${speed}s ease-out`;
 
    // 3. 监听动画结束
    let runEnd = () => {
      turntableEl.removeAttribute('style');

      // 4.显示中奖结果
      let setDialog = {}
      if (Number(randomRes.type) === turntableSuccess) {
        setDialog.title = '中奖啦'
        setDialog.resultText = '请扫码领取'
        setDialog.destoryTime = 5
      } else {
        setDialog.title = '没抽中'
        setDialog.resultText = '真不巧，没抽中！'
        setDialog.destoryTime = 3
      }
      setDialog.show = true;
      setDialog.resultImg = randomRes.result_img;
      this.setState({dialog: setDialog});
      this.refs.dialog.countDown(); // 倒计时
      
      // 中奖结果执行结束，可重新进行抽奖操作
      setTimeout(() => {
        this.setState({isGoing: false});
        turntableEl.removeEventListener(transitionend, runEnd);
      }, setDialog.destoryTime);
    }
    turntableEl.addEventListener(transitionend, runEnd, false);
  }
}