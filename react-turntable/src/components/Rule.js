import React from 'react';
import '../assets/scss/Rule.scss';

const Rule = (props) => {
  const { rule } = props;

  return (
    <div className="rule-wrap">
      <h2 className="title">活动规则</h2>
      <div className="rule-con" dangerouslySetInnerHTML={{__html: rule}}></div>
    </div>
  )
}

export default Rule;