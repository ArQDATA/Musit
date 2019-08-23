//搜索
import React,{Component} from 'react'
import { SearchBar, WhiteSpace,List } from 'antd-mobile';
import {HashRouter as Router,Link} from 'react-router-dom'
import {Icon} from 'antd'
const Item = List.Item
const Brief = Item.Brief
class TabsSearch extends Component {
  constructor(props){
    super(props)
    this.state = {dis:false,list:[],values:'' }
  }
  none = (e)=>{
    if(this.state.list.length!==0){
      for(var i =0; i<this.state.list.length;i++){
         if(e!==this.state.list[i]){
          this.setState({
            list:[...this.state.list,e]
          })
         }
      }
    }else{
      this.setState({
        list:[...this.state.list,e]
      })
    }
    this.autoFocusInst.focus();
    (!e)?console.log(1):this.setState({dis:true})
  }
  block = (e)=>{
    this.setState({
      dis:false
    })
  }
  clears = (index)=>{
    console.log(index)
  }
  // componentDidMount() {
  //   this.autoFocusInst.focus();
  // }
  remove = (i)=>{
    this.state.list.splice(i,1)
    this.setState({
      list:this.state.list
    })
  }
  values = (item)=>{

  }
  render() {
    return (<div>
    
     <WhiteSpace/>
      <SearchBar placeholder='搜索歌曲、歌手、专辑'
      cancelText={'  '}
      onSubmit={this.none}
      ref={ref => this.autoFocusInst = ref}
      onClear={this.block}
      defaultValue = {this.state.values}
      style={{backgroundColor:'white'}}
      />
    <WhiteSpace />
    <WhiteSpace />
<div style={this.state.dis?{display:'none'}:{display:'block'}}>
       <p style={{fontSize:12,color:' #666',marginLeft:15}}>热门搜索</p>
       <WhiteSpace />
  <div className="m-hotlist">
     <ul className="listsss">
        <li className="item f-bd f-bd-full">
        <a className="link" href="http://www.alipay.com">不得不爱Lambert</a>
        </li>
        <li className="item f-bd f-bd-full">
            <a className="link" href="http://www.alipay.com">My O My</a>
      </li>
        <li className="item f-bd f-bd-full">
        <a className="link" href="http://www.alipay.com">溢</a>
     </li>
        <li className="item f-bd f-bd-full">
        <a className="link" href="http://www.alipay.com">王晨艺夜空彩虹</a></li>
        <li className="item f-bd f-bd-full">
        <a className="link" href="http://www.alipay.com">朱星杰中国话</a>
        </li>
        <li className="item f-bd f-bd-full">
          <a className="link" href="http://www.alipay.com" >霉霉新专辑</a>
        </li>
        <li className="item f-bd f-bd-full">
        <a className="link" href="http://www.alipay.com" >隔壁老樊这一生关于你的风景</a>
        </li>
        <li className="item f-bd f-bd-full">
          <a className="link" href="http://www.alipay.com" >尚士达迷人的危险</a>
        </li>
        <li className="item f-bd f-bd-full">
          <a className="link" href="http://www.alipay.com" >我在云村有房</a>
        </li>
        <li className="item f-bd f-bd-full">
      <a className="link" href="http://www.alipay.com" >刘宪华 OPEN TO MORE</a>
    </li>
    </ul>
   </div>
   <WhiteSpace />
   <div>
   <p style={this.state.list.length!==0?{fontSize:12,color:' #666',marginLeft:15}:{display:'none'}}>历史记录</p>
   {/* <Icon type="close"/> */}
     {this.state.list.map((number,index)=>{
        return(
          <div  key={index} style={{marginLeft:15,marginTop:15}} onClick={()=>{ 
             this.autoFocusInst.focus(); 
             this.setState({
              values:number
            })}}>
            <div className="icon_left">
            <Icon type="clock-circle" />
            </div>
            <div className="icon_center">
            {number}
            </div>
            <div className="icon_right" onClick={()=>{this.remove(index)}}>
            <Icon type="close"/>
            </div>
          </div>
        )
     })}
   <p></p>
   </div>
</div>
      <div  style={this.state.dis?{display:'block'}:{display:'none'}}>
      <p style={{fontSize:12,color:' #666',marginLeft:15}}>最佳匹配</p>
            <Item arrow={'empty'}  multipleLine onClick={() => {}} align={'bottom'} activeStyle={{height:50}}>
                        <img src="http://p4.music.126.net/aryxbULAHjqP5MPgUdg9gA==/109951164292787462.webp?imageView&thumbnail=150x0&quality=75&tostatic=0&type=webp" alt="" style={{width:50,height:50}}/>
                        <Brief style={{fontSize:17,color:'black',marginLeft:60,marginTop:-51}}>
                         专辑:
                        </Brief>
                        <Brief style={{fontSize:12,margin:'0 auto',marginLeft:60}}>
                        薛之谦 - 尘
                        </Brief>
          </Item>
          <List> 
         <Router>
          <Link to="/Song">
          <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                  这么久没见 <Brief style={{fontSize:12}}>
                  薛之谦 - 尘
                  </Brief>
         </Item>
          </Link>
        </Router>
        <Router>
          <Link to="/Song">
          <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                  这么久没见 <Brief style={{fontSize:12}}>
                  薛之谦 - 尘
                  </Brief>
         </Item>
          </Link>
        </Router>
        <Router>
          <Link to="/Song">
          <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                  这么久没见 <Brief style={{fontSize:12}}>
                  薛之谦 - 尘
                  </Brief>
         </Item>
          </Link>
        </Router>
        <Router>
          <Link to="/Song">
          <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                  这么久没见 <Brief style={{fontSize:12}}>
                  薛之谦 - 尘
                  </Brief>
         </Item>
          </Link>
        </Router>
        <Router>
          <Link to="/Song">
          <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                  这么久没见 <Brief style={{fontSize:12}}>
                  薛之谦 - 尘
                  </Brief>
         </Item>
          </Link>
        </Router>
         </List>   
      </div>
    </div>);
  }
}

export default TabsSearch