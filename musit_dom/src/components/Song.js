import React,{Component} from 'react'
import {WingBlank,Modal} from 'antd-mobile';
import {Icon} from 'antd'
import Chi from './SongChi'
import {Songs,Check,Comment,Detail,Lyric} from './ajax/index'
import Comments from './comment'
import AllComments from './AllComments'
const alert = Modal.alert
class Song extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            boolen:false,
            url:'',
            item:[],
            id:'',
            img:'',
            duration:'',
            list:[],
            speed:[],
            clear:null,
            i:null,
            y:null,
            comment:[]
        }
    }
    change(){
        this.rotate(this.state.duration,true)
    }
    rotate(time,flage){
        //希望函数做些什么 在生命周期开始被调用一次：
        //音乐初始化时开始调用
        //time 音乐的长度
        //var i = 0  //旋转的角度
        //var y = 0  //记录时间
        var x = document.getElementById("myAudio")
        // const dom = document.querySelector('.xzCrads')
        if(flage){
            if(x!==null){ 
                if(x.paused){ 
                   x.play();// 播放
                   this.set(this.state.i,this.state.y,time)
                //    this.setState({
                //     boolen:true
                //   })
                }else{
                   x.pause();// 暂停
                   this.setState({
                    boolen:false
                  })
                  clearInterval(this.state.clear)
                }
            } 
        }
    }
    set(i,y,time){
        const dom = document.querySelector('.xzCrads')
        setTimeout(()=>{
            this.setState({
                boolen:true
            })
        },10)
        this.setState({
            clear:setInterval(()=>{
                i+=1
                y+=0.03
                dom.style.transform=`rotate(${i}deg)`;
                this.setState({
                    i,y
                })
                if(y>time){
                    clearInterval(this.state.clear)
                    this.setState({
                        boolen:false
                    })
                }
            },30) 
        })
    }
    componentDidMount(){
        var x = document.getElementById("myAudio");

        const id = this.props.match.params.id
        this.setState({
            id:id.slice(1)
        })
        Check(id.slice(1)).then(message=>{
            if(message.success){
                Songs(id.slice(1)).then(data=>{
                    this.setState({
                        url:data.data[0].url
                    })
                })
            }else{
                alert('没有版权', 'you sure???', [
                    { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
                    { text: 'OK', onPress: () => console.log('ok') },
                  ]); 
                return 
            }
        })

        Comment(id.slice(1)).then(item=>{
            //精彩评论
            const hotComments = item.hotComments
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
            //评论
            const Comments = item.comments
              // eslint-disable-next-line array-callback-return
            Comments.map(item=>{
                const user = item.user
                const content = item.content
                const script = user.avatarUrl
                const name = user.nickname
                this.setState({
                    comment:[...this.state.comment,{content,script,name}]
                })
            })

        })
        Detail(id.slice(1)).then(data=>{
             this.setState({
                 img: data.songs[0].al.picUrl
             })
        })
        Lyric(id.slice(1)).then(data=>{
            console.log(data)
            if('lrc' in data){
                const time = data.lrc.lyric.replace(/\[([09]?\d|2[0-10]):[0-9]?\d.[0-9]{1,4}?\d\]/g,'')
                const array =time.split(/\n/)
                
                var speed = data.lrc.lyric.match(/(\[.*\] \S)|\[.*\]\S/g)
                speed = speed.join("")
               
                speed = speed.replace(/[\u4e00-\u9fa5a-zA-Z]+/g,',')
                const a = speed.split(",")
                var r = array.filter(function (s) {
                    return s && s.trim(); 
                });
                a.splice(a.length-1,1)
            //    console.log(data.lrc.lyric)
            //    console.log(r)
               //console.log(a)
              // console.log(data.lrc.lyric.match(/\[([09]?\d|2[0-10]):[0-9]?\d.[0-9]{1,4}?\d\]/g))
              this.setState({
                  list:r,
                  speed:a
              })
            }else{
                return
            }

        })
        setTimeout(()=>{
            this.set(0,0,x.duration)
            this.setState({
                duration:x.duration
            })
        },1500)


    }

    render(){
        return(
           
            <div className="body_bg">
               <Icon type="customer-service" theme="filled" style={{position:'absolute',top:12,left:17,display:'block',height:17,lineHeight:0,color:'red'}} />
                <p style={{position:'absolute',top:21,left:35,display:'block',height:17,lineHeight:0,color:'white'}}>Music</p>
                <div className="xzCrads">
                    <img src={this.state.img} alt="" onClick={this.change.bind(this)}/>
                    <audio src={this.state.url} autoPlay id="myAudio"></audio>
                </div>
                <div style={{margin:'0 auto',textAlign:'center'}}>
                <Chi code={this.state.list} speed={this.state.speed} flage={this.state.boolen}/>
                </div>
             <span className="recommend1" style={{lineHeight:38}}>
             <span className="recommendI1">|</span>
             <WingBlank size="sm"/>
              精彩评论</span>
              <Comments item={this.state.item}/>
              <span className="recommend1" style={{lineHeight:38}}>
             <span className="recommendI1">|</span>
             <WingBlank size="sm"/>
              全部评论</span>
             <AllComments item={this.state.comment} />
            </div>
        )
    }
}
export default Song

