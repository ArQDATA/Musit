//推荐
import React,{Component} from 'react'
import {WingBlank,Grid,List} from 'antd-mobile'
import {Icon} from 'antd'
import {HashRouter as Router,Link} from 'react-router-dom'
import {Recommend,NewSong} from '../ajax/index'
const Item = List.Item
const Brief = Item.Brief
var arrays = []
class TabsRecommend extends Component{
    constructor(props){
      super(props)
      this.state = {
         Img:[],
         Text:[],
         song:[],
         playCount:[],
         ListId:[] 
     }
    }


     componentWillMount(){
      Recommend().then(data=>{
        const result = data.result
         // eslint-disable-next-line array-callback-return
         result.map(item=>{
          this.setState({
            Img:[...this.state.Img, item.picUrl],
            Text:[...this.state.Text, item.name],
            playCount:[...this.state.playCount,item.playCount],
            ListId:[...this.state.ListId,item.id] 
          })
         })
          
      })
      NewSong().then(data=>{
        var  alias = ""
        const result = data.result
       
        // eslint-disable-next-line array-callback-return
        result.map((item,index)=>{
          arrays.push(item.id) 
            
           // eslint-disable-next-line array-callback-return
         const array = item.song.artists.map((value,index)=>{
                return value.name
          }).join('/')
          if(item.song.alias.length!==0){
            alias =  item.song.alias[0]
          }
          this.setState({
            song:[...this.state.song,{name:item.song.name+alias,artists:array+'-'+item.song.album.name}]
          })
          alias = ""
        })
        
      })
     }
      render(){
        const data = Array.from(new Array(6)).map((_val, i) => ({
          icon:this.state.Img[i],
          text:this.state.Text
        }));
        return(
          <div>
             <span className="recommend" style={{lineHeight:38}}>
             <span className="recommendI">|</span>
             <WingBlank size="sm"/>
              推荐音乐</span>
              <Grid data={data}
              columnNum={3}
              hasLine={false}
              itemStyle={{height:166}}
              renderItem={(dataItem,index) => (
                <Router>
                  <Link to={`/page/:${this.state.ListId[index]}`}>  
                <div style={{marginTop:-10}}>
                  <img src={dataItem.icon} style={{ width: '120px', height: '120px' }} alt="" />
                  <div style={{ color: '#000000', fontSize: '11px', marginTop: '2px' }}>
                     <span className="recom"><Icon type="customer-service"/>{Math.floor(this.state.playCount[index]/10000) + '万'}</span>
                    <span style={{textoverflow:'ellipsis'}}>{dataItem.text[index]}</span>
                  </div>
                </div>
                </Link>
                </Router>
              )}
            />         
          <span className="recommend" style={{lineHeight:38,marginTop:30}}>
             <span className="recommendI">|</span>
             <WingBlank size="sm"/>
              最新音乐</span>   
              {this.state.song.map((item,index)=>{
                 return(
                  <Router key={index}>
                  <Link to={`/Song/:${arrays[index]}`}>
                  <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:15}} />} multipleLine onClick={() => {}} align={'bottom'}>
                  
                          {item.name} <Brief style={{fontSize:12}}>
                          {item.artists}
                          </Brief>
                  </Item>
                  </Link>
                </Router> 
                 )
              })}
  
          </div>
        )
      }
}
export default TabsRecommend
