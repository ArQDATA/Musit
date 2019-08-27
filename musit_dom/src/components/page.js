import React,{Component} from 'react'
import { Card, WhiteSpace,List,SegmentedControl,Accordion} from 'antd-mobile';
import {Icon } from 'antd';
import {Playlist,Cplaylist} from './ajax/index'
import Comments from './comment'
import {HashRouter as Router,Link} from 'react-router-dom'
import AllComments from './AllComments'
const Item = List.Item
const Brief  =Item.Brief
var arrays = []
class Page extends Component{
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
        id:'',
        ListData:[],
        Song:[],
        tags:[],
        item:[],
        comments:[]
      };
    
      like = () => {
        this.setState({
          likes: 1,
          dislikes: 0,
          action: 'liked',
        });
      };
    
      dislike = () => {
        this.setState({
          likes: 0,
          dislikes: 1,
          action: 'disliked',
        });
      };
      componentDidMount(){
        const id = this.props.match.params.id
        this.setState({
            id:id.slice(1)
        })
        Playlist(id.slice(1)).then(data=>{
          // console.log(data)
         
          const playlist = data.playlist
          const playCount = playlist.playCount
          const coverImgUrl = playlist.coverImgUrl
          const backgroundCoverUrl = playlist.backgroundCoverUrl //背景图
          const name =playlist.name //[欧美私人订制] 最懂你的欧美日推
          const updateFrequency = playlist.updateFrequency //"每日更新"
          const description = playlist.description //"收藏属于你的个性化欧美歌单 ↵每天和喜欢的欧美音乐不期而遇"
          const tags = playlist.tags
          const avatarUrl = playlist.creator.avatarUrl
          const nickname = playlist.creator.nickname
          const tracks = playlist.tracks
          this.setState({
            ListData:[{
              name,
              coverImgUrl,
              backgroundCoverUrl,
              nickname,
              avatarUrl,
              description,
              updateFrequency,
              playCount
            }],
          })
           // eslint-disable-next-line array-callback-return
          tracks.map(item=>{
            var  alias = ""
            arrays.push(item.id)
            const SongName = item.name
            const al = item.al.name
            const ar = item.ar.map(array=>{
              return array.name
            }).join('/')
            if(item.alia.length!==0){
              alias = `(${item.alia[0]})`
            }
            this.setState({
              Song:[...this.state.Song,{SongName:SongName+alias,ar:ar + '-' +al}],
              tags:[tags]
            })
  
            alias = " "
          })
        })
        Cplaylist(id.slice(1)).then(item=>{
          const hotComments = item.hotComments
          const comments = item.comments
          // eslint-disable-next-line array-callback-return
         hotComments.map(item=>{
             const user = item.user
             const content = item.content
             const script = user.avatarUrl
             const name = user.nickname
             this.setState({
                 item:[...this.state.item,{content,script,name}]
             })
         })
         // eslint-disable-next-line array-callback-return
         comments.map(item=>{
          const user = item.user
          const content = item.content
          const script = user.avatarUrl
          const name = user.nickname
          this.setState({
              comments:[...this.state.comments,{content,script,name}]
          })
       })
    })
      }
    render(){
        return(
            <div>
            {this.state.ListData.map((item,index)=>{
              var img = item.backgroundCoverUrl
              if(!item.backgroundCoverUrl){
                 img = item.coverImgUrl
              }
             
              return(
                <div key={index}>
                <section style={{width:'100%',height:180,backgroundImage: 'url('+img+')'}} className="section">
                </section> 
                <div className="center">
                        <img src={item.coverImgUrl} alt="" style={{width:120,height:120}}/>
                        <span className="lsthd_icon">歌单</span>
                        <span className="lsthd_num"><Icon type="customer-service"/>{`${(item.playCount)/10000}万`}</span>
                        <div className="right">
                            <span>{item.name}</span>
                            <div className="list">
                                <img src={item.avatarUrl} alt="" style={{height:30,width:30,borderRadius:'100%'}}/>
                                <p>{item.nickname}</p>
                            </div>
                        </div>
                    </div>
              </div>
              )
            })}

                    <section>
                    <WhiteSpace size="lg" />
                    {this.state.ListData.map((item,index)=>{
                    return(
                    <Card style={{border:0}} full key={index}>
                    <Card.Header
                        title="标签:"
                        extra={
                        <SegmentedControl values={this.state.tags[0]} />
                        }
                    />
                    <Card.Body>
                        <pre>简介{item.name}</pre>
                        <WhiteSpace/>
                        <Accordion style={{border:0}}>
                             <Accordion.Panel  className="pad" style={{width:360}}>
                                   <span>
                                    <WhiteSpace/>
                                    <pre>{item.description}</pre>
                                     </span>
                                 </Accordion.Panel>
                    </Accordion>
                    </Card.Body>
                    <Card.Footer />
                    </Card> 
                  )
                    })}

                    <h3 className="u-smtitle">歌曲列表</h3>
                    <WhiteSpace/>
                    {this.state.Song.map((item,index)=>{
                      return(
                        <Router key={index}>
                        <Link to={`/Song/:${arrays[index]}`}>
                        <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:15}} />} multipleLine onClick={() => {}} align={'bottom'}>
                        
                                {item.SongName} <Brief style={{fontSize:12}}>
                                {item.ar}
                                </Brief>
                        </Item>
                        </Link>
                      </Router> 
                      )
                    })}
                    <h3 className="u-smtitle">精彩评论</h3>
                    <Comments item={this.state.item}/>
                    <h3 className="u-smtitle">所有评论</h3>
                    <AllComments item={this.state.comments}/>
                    </section>
            </div>
        )
    }
}
export default Page