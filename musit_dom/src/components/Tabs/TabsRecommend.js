//推荐
import React,{Component} from 'react'
import {WingBlank,Grid,List} from 'antd-mobile'
import {Icon} from 'antd'
import {HashRouter as Router,Link} from 'react-router-dom'
const Item = List.Item
const Brief = Item.Brief
const img = [
  'http://p1.music.126.net/PjmeANWOl67Q3HnG3vEFfw==/109951164221437658.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
  'http://p1.music.126.net/XMbZ9z01u8tTE06SKQs74w==/109951164232719608.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
  'http://p1.music.126.net/iFbhkzHhG7nzE6waxT1izw==/109951163172804084.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
  'http://p2.music.126.net/-G31v_fyy50ZMpyDEZ0j5w==/109951164265917857.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
  'http://p2.music.126.net/MlRtYwuFK6_hkOfzGLJDbA==/7953867115756465.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
  'http://p2.music.126.net/Xh23ejjTftcg-IrjO9O8uw==/109951164190589369.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
]
const data = Array.from(new Array(6)).map((_val, i) => ({
  icon: img[i],
  text:[
  '[全球百大DJ] 2018百大DJ作品精选',
  '单恋之人，连结束都是一厢情愿',
  '欧布奥特曼歌曲集~ULTRAMAN ORB',
  '耳朵存在的理由，200首必听欧美歌曲',
  '有些情愫，留在现场【欧美】',
  '「民谣歌者」一切高贵的情感都羞于表白'
]
}));
class TabsRecommend extends Component{
    constructor(props){
      super(props)
      this.state = {icon:'',Text:''}
    }
     grid = (el,index) =>{
       this.setState({
         icon: el.icon,
         Text: el.text[index]
       })
     }

     componentWillMount(){
      //  newSong().then(data=>{
      //    console.log(data)
      //  })
     }
      render(){
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
              onClick = {this.grid.bind(this)}
              renderItem={(dataItem,index) => (
                <Router>
                  <Link to='/page'>  
                <div style={{marginTop:-10}}>
                  <img src={dataItem.icon} style={{ width: '120px', height: '120px' }} alt="" />
                  <div style={{ color: '#000000', fontSize: '11px', marginTop: '2px' }}>
                     <span className="recom"><Icon type="customer-service"/>117.8万</span>
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
              <Router>
              <Link to="/Song">
              <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                      这么久没见 <Brief style={{fontSize:12}}>
                      薛之谦 - 尘
                      </Brief>
            </Item>
              </Link>
            </Router>
              <List style={{borderTop:0}}>
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
        )
      }
}
export default TabsRecommend
