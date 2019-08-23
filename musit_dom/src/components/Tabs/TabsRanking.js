//排行
import React,{Component} from 'react' 
import { Carousel, WhiteSpace,List} from 'antd-mobile';
import {Icon} from 'antd'
import {HashRouter as Router,Link} from 'react-router-dom'
const Item = List.Item
const Brief  = Item.Brief
class Car extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3'],
      });
    }, 100);
  }
  render() {
    return (
        <div>
             <WhiteSpace size="lg" />
             <Carousel
                autoplay={false}
                infinite
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
                    src={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                </a>
            ))}
        </Carousel>
        <Router>
          <Link to="/Song">
          <Item arrow={'empty'} extra={<Icon type="play-circle" style={{fontSize:23}} />} multipleLine onClick={() => {}} align={'bottom'}>
                  这么久没见 <Brief style={{fontSize:12}}>
                  薛之谦 - 尘
                  </Brief>
         </Item>
          </Link>
        </Router>

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

    );
  }
}
export default Car