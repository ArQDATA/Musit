import React,{Component} from 'react'
import { Card, WhiteSpace,List,SegmentedControl,Accordion} from 'antd-mobile';
import {Icon } from 'antd';
import Comments from './comment'
import AllComments from './AllComments'
const Item = List.Item
const Brief  =Item.Brief

class Page extends Component{
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
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
    render(){
        return(
            <div>
                <section style={{width:'100%',height:180}} className="section">
                </section> 
                <div className="center">
                        <img src="https://p2.music.126.net/u6hYMOddQcHdIwrHU2uwFg==/109951164194073386.webp?imageView&thumbnail=378x0&quality=75&tostatic=0&type=webp" alt="" style={{width:120,height:120}}/>
                        <span className="lsthd_icon">歌单</span>
                        <span className="lsthd_num"><Icon type="customer-service"/>117.8万</span>
                        <div className="right">
                            <span>记得变优秀 让自己能担得起任何人的喜欢</span>
                            <div className="list">
                                <img src="http://p1.music.126.net/pfJqtzBjaQyl58AlRb9-Ow==/109951164184069956.webp?imageView&thumbnail=90x0&quality=75&tostatic=0&type=webp" alt="" style={{height:30,width:30,borderRadius:'100%'}}/>
                                <p>空气很颓废</p>
                            </div>
                        </div>
                    </div>
                    <section>
                    <WhiteSpace size="lg" />
                    <Card style={{border:0}} full>
                    <Card.Header
                        title="标签:"

                        extra={
                        <SegmentedControl values={['欧美','流行']} />
                        }
                    />
                    <Card.Body>
                        <div>简介：我们还会遇见很多人，付出很多真心，然后错过很多感情，才能慢慢长大。我们能在彼此的爱里长大，那才是幸福的。...</div>
                        <WhiteSpace/>
                        <Accordion style={{border:0}}>
                             <Accordion.Panel  className="pad" style={{width:360}}>
                                 <WhiteSpace/>
                                 <p >舍不得的最终都会变成舍得，放不下的最终都会慢慢放下。经历它始终是一种经历，我们不能回到过去改变它，让它从未发生，我们也不需要否定原来的那个自己。</p>
                                 <WhiteSpace/>
                                 <p>我们只要往前走，那些被丢下的经历，它会让你沉淀，未来再回头看看，就会发现其实没有爱错人，也没有白白爱过那个人。</p>
                                 <WhiteSpace/>
                                 <p>是那个人，让原本的我们变得更好。你们之所以会在一起，是命运恰巧要你们遇见，最后结果真的不那么重要，不对的人永远也走不到一起。下一站到了，你们还是要分道扬镳，消失在人海里。</p>
                                 <WhiteSpace/>
                                 <p>有些东西不是不好吃，只是它不符合你的口味；有些文字不是不好看，只是没体会到它的深意；有些人不是不好，只是你们没办法走到最后。</p>
                                 <WhiteSpace/>
                                 <p>既然我们是败将，给不了他们想要的，那就好好分开吧。</p>
                                 <WhiteSpace/>
                                 <p>然后，你要收拾一下你的心情。然后，你就要重新出发了，为了接下来能遇到的人，更为了你自己。</p>
                             </Accordion.Panel>
                    </Accordion>
                    </Card.Body>
                    <Card.Footer />
                    </Card>
                    <h3 className="u-smtitle">歌曲列表</h3>
                    <WhiteSpace/>
                    <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                            这么久没见 <Brief style={{fontSize:12}}>
                            薛之谦 - 尘
                            </Brief>
                    </Item>
                    <List>
                    <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                            这么久没见 <Brief style={{fontSize:12}}>
                            薛之谦 - 尘
                            </Brief>
                    </Item>
                    <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                            这么久没见 <Brief style={{fontSize:12}}>
                            薛之谦 - 尘
                            </Brief>
                    </Item>
                    <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                            这么久没见 <Brief style={{fontSize:12}}>
                            薛之谦 - 尘
                            </Brief>
                    </Item>
                    <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                            这么久没见 <Brief style={{fontSize:12}}>
                            薛之谦 - 尘
                            </Brief>
                    </Item>
                    </List> 
                    <h3 className="u-smtitle">精彩评论</h3>
                         <Comments/>  
                    <h3 className="u-smtitle">所有评论</h3>
                         <AllComments/>      
                    </section>
            </div>
        )
    }
}
export default Page