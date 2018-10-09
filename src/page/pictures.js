import React from 'react';
import { h } from 'preact';
const Picture = (props) => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  )
}
class Pictures extends React.Component{
  render() {
    return (
      <div className='container'>
        {/* <Picture key={picture.id} src={picture.src}>
        // 这里放置的内容就是 props.children
        </Picture> */}
        <Picture key={this.props.key} src={this.props.src}>
        <h>// 这里放置的内容就是 props.children</h>
        </Picture>
      </div>
    )
  }
}
export default Pictures;


