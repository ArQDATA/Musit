//排行
import React,{Component} from 'react' 
import { Carousel, WhiteSpace,List} from 'antd-mobile';
import {Icon} from 'antd'
import {HashRouter as Router,Link} from 'react-router-dom'
import {Ranking} from '../ajax/index'
const Item = List.Item
const Brief  = Item.Brief
var arrays = []
class Car extends Component {
  state = {
    data: ['1'],
    imgHeight: 176,
    Img:'',
    list:[]
  }
  componentDidMount() {
    Ranking().then(data=>{
      var  alias = ""
      const imgurl = data.playlist.coverImgUrl
      const tracks = data.playlist.tracks
      const index = 30;
      const array = []
      for(var i=0;i<index;i++){
        array.push(tracks[i])
      }
        // eslint-disable-next-line array-callback-return
      array.map(item=>{
        arrays.push(item.id)
       var name = item.ar.map(value=>{
          return value.name
        }).join('/')
        if(item.alia.length!==0){
          alias =  item.alia[0]
        }
        this.setState({
          Img:imgurl,
          list:[...this.state.list,{name:item.name+alias,text:name+'-'+item.al.name}]
        })
        alias = ""
      })
     
    })
  }
  render() {
    return (
        <div>
             <WhiteSpace size="lg" />
             <Carousel
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
            {this.state.data.map(val => (
                <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                <img
                    src={this.state.Img}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top', height: this.state.imgHeight }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    }}
                />
                </a>
            ))}
        </Carousel>
        {this.state.list.map((item,index)=>{
            return(
              <Router key={index}>
                <Link to={`/Song/:${arrays[index]}`}>
                <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:15}} />} multipleLine onClick={() => {}} align={'bottom'}>
                   {/*    ; */}
                   {index+1} {item.name} 
                   <Brief style={{fontSize:12}}>{item.text}</Brief>
                  
              </Item>
                </Link>
              </Router>  
            )
        })}
        </div>

    );
  }
}
export default Car