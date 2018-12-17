import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../assets/scss/Dialog.scss';

export default class Dialog extends PureComponent {
  
  constructor (props) {
    super(props);

    this.state = {
      show: false,
      destoryTime: 5
    }
  }

  componentWillReceiveProps (nextProps) {
    const { show, destoryTime } = nextProps.dialog;
    this.setState({
      show: show,
      destoryTime: destoryTime
    })
  }

  render () {
    const { title, resultImg, resultText } = this.props.dialog;
    const { show, destoryTime } = this.state;

    return (
      <div className="dialog-wrap">
        <div className={show ? 'mask show' : 'mask hide'}></div>
        <CSSTransition
          in={show}
          timeout={800}
          classNames='bounce-in'
          unmountOnExit
        >
          <div className="con">
            <h3 className="title">{title}</h3>
            <div className="main">
              <img className="img" src={resultImg} alt=""/>
              <span className="text">{resultText}</span>
            </div>
            <button className="btn">{destoryTime}s 返回页面</button>
          </div>
        </CSSTransition>
        
      </div>
    )
  }

  // 倒计时
  countDown () {
    let { destoryTime } = this.state;
    
    let time = destoryTime
    let timer = setInterval(() => {
      time--;
      this.setState({destoryTime: time});
      if (time <= 0) {
        clearInterval(timer);
        this.setState({show: false});
      }
    }, 1000)
  }
}