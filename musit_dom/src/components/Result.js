import React,{Component} from 'react'
import { Card, WhiteSpace,List,Accordion} from 'antd-mobile';
import {Icon } from 'antd';
import {Centext,CentextComment} from './ajax/index'
import Comments from './comment'
import {HashRouter as Router,Link} from 'react-router-dom'
import AllComments from './AllComments'
const Item = List.Item
const Brief  =Item.Brief
var arrays = []
class Result extends Component{
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
         // eslint-disable-next-line array-callback-return
        Centext(id.slice(1)).then(item=>{
            arrays = []
            const songs = item.songs
             // eslint-disable-next-line array-callback-return
            songs.map(items=>{
                arrays.push(items.id)
                const songname = items.ar[0].name
                const name = items.name
                const al = items.al.name
                this.setState({
                    Song:[...this.state.Song,{name,song:songname+al}]
                })
            })
            const album = item.album
            const description = album.description
            const aname = album.artist.name
            const name  = album.name
            const img = album.blurPicUrl
            this.setState({
                ListData:[{
                    description,
                    aname,
                    name,
                    img
                }]
            })
        })
        CentextComment(id.slice(1)).then(item=>{
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
             
              return(
                <div key={index}>
                <section style={{width:'100%',height:180,backgroundImage: 'url('+item.img+')'}} className="section">
                </section> 
                <div className="center">
                        <img src={item.img} alt="" style={{width:120,height:120}}/>
                        <span className="lsthd_icon">专辑</span>
                        {/* <span className="lsthd_num"><Icon type="customer-service"/>{`${(item.playCount)/10000}万`}</span> */}
                        <div className="right">
                            <span>{item.name}</span>
                            <div className="list">
                                <p style={{marginLeft:-1}}>歌手:{item.aname}</p>
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
                    <Card.Body>
                        <pre>简介</pre>
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
                        
                                {item.name} <Brief style={{fontSize:12}}>
                                {item.song}
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
export default Result