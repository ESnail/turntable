import React, { Component, Fragment } from 'react';
import './assets/scss/App.scss'
import Header from './components/Header.js'
import Turntable from './components/Turntable.js'
import Rule from './components/Rule.js'

const json = require('./api/api.turntable.js')

class App extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      loading: true,
      err: '',
      logo: '',
      turntable: [],
      rule: ''
    }
  }

  render () {
    const { loading, err, logo, turntable, rule } = this.state

    let con;
    if (loading) {
      con = <div className="loading">正在努力加载</div>;
    }
    if (err) {
      con = <div className="err">{err}</div>;
    }
    if (!loading && !err) {
      con = (
        <Fragment>
          <Header logo={logo}/>
          <Turntable turntable={turntable}/>
          <Rule rule={rule}/>
        </Fragment>
      )
    }

    return (
      <div className="app">
        { con }
      </div>
    );
  }

  componentDidMount () {
    this.getData()
  }
  
  getData () {
    // 本地纯静态，实际可通过接口获取数据
    setTimeout(() => {
      this.setState({
        loading: false,
        logo: json.logo,
        rule: json.rule,
        turntable: json.lottery
      });
    }, 500);
  }
}

export default App;
