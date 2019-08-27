import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react';

class Chi extends React.Component{
  constructor(props){
    super(props)
    this.state = {flag:false,speed:null}
  } 
  componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
    if(nextProps.flage===this.props.flage){
       return 
    }

    this.setState(
      {
        flag: nextProps.flage,
        speed:this.state.speed
      }
      
      );
 }
  Time(index){
    // this.setState({flag: this.props.flage});
    var time 
    var a =[]
    var array = this.props.speed
  // eslint-disable-next-line array-callback-return
    array.map((item)=>{
      var str1 = item.substring(1,item.indexOf(']'))
      str1 = str1.split(':')
      var time_min = parseFloat(str1[0])
// 提取秒数
      var time_sec = parseFloat(str1[1])
      time = time_min * 60 + time_sec
      a.push(time)
    })   
    // if(a[])
    // console.log(a)
    if(a[0]!==0){
       a.unshift(0)
    }
    const len = a.length - 1;
    const r = [];
    
    for (let i = 0; i < len; i++) {
          r.push((parseFloat(a[i + 1]) - parseFloat(a[i]))*1000);
     }     
    // if(index===r.length-1){

    // }
    return r[index]
  }

    render(){
        return(
            <WingBlank>
      <Carousel className="my-carousel"
      vertical
      dots={false}
      dragging={false}
      swiping={false}
      autoplay={this.state.flag}
      beforeChange = {(from)=>{this.setState({speed:this.Time(from)})
      }}
      autoplayInterval={this.state.speed+100}
    >
     {this.props.code.map((type,index) => (
        <div className="v-item" key={index} style={{color:'white'}}>{type}</div>
      ))}
    </Carousel>
          </WingBlank>
        )
    }
}
export default Chi