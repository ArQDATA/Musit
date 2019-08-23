import React,{Component} from 'react'
import {Icon} from 'antd'
import Chi from './SongChi'
//http://s3.music.126.net/mobile-new/img/disc_light-ip6.png?996fc8a%E2%80%A6=
class Song extends Component{
    constructor(props){
        super(props)
        this.state = {boolen:false}
    }
    change(){
        this.setState({
            boolen:!this.state.boolen
        })
      
    }
    componentDidMount(){
        if(!this.state.boolen){
           const dom = document.querySelector('.xzCrads')
           var i = 0
           var clear = setInterval(()=>{
                dom.style.transform=`rotate(${i}deg)`;
                i+=1
                if(i===3600){
                    clearInterval(clear)
                    console.log(0)
                }
           },20)
           
        }
    }
    shouldComponentUpdate(nextProps){ // 应该使用这个方法，否则无论props是否有变化都将会导致组件跟着重新渲染
        console.log(this.state.boolen)
        return false
        
    }
    render(){
        return(
            <div className="body_bg">
               <Icon type="customer-service" theme="filled" style={{position:'absolute',top:12,left:8,display:'block',height:17,lineHeight:0,color:'red'}} />
                <p style={{position:'absolute',top:21,left:29,display:'block',height:17,lineHeight:0,color:'white'}}>Music</p>
                <div className="xzCrads">
                    <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" alt="" onClick={this.change.bind(this)}/>
                </div>
                <div style={{margin:'0 auto',textAlign:'center'}}>
                <Chi/>
                <Chi/>
                <Chi/>
                </div>
                <div className="bg_gc">
                    <span> 查看完整歌词 ></span>
                    <div className="bg_bottom">
                    <Icon type="up" style={{bottom:18}}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Song