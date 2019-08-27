//搜索
import React,{Component} from 'react'
import { SearchBar, WhiteSpace,List } from 'antd-mobile';
import {HashRouter as Router,Link} from 'react-router-dom'
import {Icon} from 'antd'
import {Search,HotList,Album} from '../ajax/index'
const Item = List.Item
const Brief = Item.Brief
var arrays = []
class TabsSearch extends Component {
  constructor(props){
    super(props)
    this.state = {dis:false,list:[],song:[],Hotlist:[],values:'',albumId:[]}
  }
  none = (e)=>{
    Album('10',e).then(data=>{
      // console.log(data)
      // eslint-disable-next-line array-callback-return
      data.result.albums.map(item=>{
        const picUrl = item.artist.picUrl
        const name = item.name
        const artistname = item.artist.name
         this.setState({
           albumId:[...this.state.albumId,{
             img:picUrl,
             artist:item.artist.id,
             album:item.id,
             name,
             artistname
           }],
         })
      })
    })










    this.setState({
      song:[],
      values:e
    })
    // console.log(e)
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
    Search(e).then(data=>{
        arrays = []
        var  alias = ""
        
        const result = data.result
        // eslint-disable-next-line array-callback-return
        result.songs.map((item,index)=>{
          arrays.push(item.id)
          const array = item.artists.map((value,index)=>{
         
          return value.name
          }).join('/')
          if(item.alias.length!==0){
            alias =  item.alias[0]
          }
          this.setState({
            song:[...this.state.song,{name:item.name+alias,artists:array+'-'+item.album.name}]
          })
        alias = ""
        })
        
      }) 
  }
  block = (e)=>{
    this.setState({
      dis:false,
      values:''
    })
  }
  clears = (index)=>{
    console.log(index)
  }

  remove = (i)=>{
    this.state.list.splice(i,1)
    this.setState({
      list:this.state.list
    })
  }
  componentDidMount(){
    HotList().then(data=>{
       this.setState({
        Hotlist:data.result.hots
       })
     
    })
  }
  render() {
    return (<div>
    
     <WhiteSpace/>
      <SearchBar placeholder='搜索歌曲、歌手、专辑'
      cancelText={'  '}
      onSubmit={this.none}
      ref={ref => this.autoFocusInst = ref}
      onClear={this.block}
      value = {this.state.values}
      onChange={(e)=>{this.setState({values:e})}}
      style={{backgroundColor:'white'}}
      />
    <WhiteSpace />
    <WhiteSpace />
<div style={this.state.dis?{display:'none'}:{display:'block'}}>
       <p style={{fontSize:12,color:' #666',marginLeft:15}}>热门搜索</p>
       <WhiteSpace />
  <div className="m-hotlist">
     <ul className="listsss">
     {this.state.Hotlist.map((type,index)=>{
        return(
          <li className="item f-bd f-bd-full" key={index} onClick={()=>{
            this.none(this.state.Hotlist[index].first)
            this.setState({
              values:this.state.Hotlist[index].first
            })
            }}>
           <p className="link">{type.first}</p>
        </li>
        )
     })}

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
             this.none(number)
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
      {this.state.albumId.map((item,index)=>{
          return(
            <Router key={index}>
              <Link to={`/result/:${item.album}`}>
              <Item arrow={'empty'}  multipleLine onClick={() => {}} align={'bottom'} activeStyle={{height:50}}>
                        <img src={item.img} alt="" style={{width:50,height:50}}/>
                        <Brief style={{fontSize:17,color:'black',marginLeft:60,marginTop:-51}}>
                         专辑:{item.name}
                        </Brief>
                        <Brief style={{fontSize:12,margin:'0 auto',marginLeft:60}}>
                         {item.artistname}
                        </Brief>
             </Item>
              </Link>
            </Router>
          )
      })}
          {this.state.song.map((item,index)=>{
                 return(
                  <Router key={index}>
                  <Link to={`/Song/:${arrays[index]}`}>
                  <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:15}} />} multipleLine onClick={() => {}} align={'bottom'} >
                         <span style={{color:'#507daf'}}> {item.name}</span> <Brief style={{fontSize:12}}>
                          {item.artists}
                          </Brief>
                  </Item>
                  </Link>
                </Router> 
                 )
          })}  
      </div>
    </div>);
  }
}

export default TabsSearch