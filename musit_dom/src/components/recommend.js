import React,{Component} from 'react'
import {Icon} from 'antd';
import {Flex,Tabs} from 'antd-mobile';
import TabsRecommend from './Tabs/TabsRecommend'
import TabsRanking from './Tabs/TabsRanking'
import TabsSearch from './Tabs/TabsSearch'
const tabs = [
    { title: '推荐音乐', sub: '1' },
    { title: '热歌榜', sub: '2' },
    { title: '搜索', sub: '3' },
]
class Recommend extends Component{
    render(){
        return(
            <div className="flex-container">
                <div className="sub-title">
                <Icon type="customer-service" theme="filled" />
                <span>Music</span>
                </div>
                <Flex.Item  className="placeholder">
                <Icon type="user" className="sub-title"/>
                </Flex.Item>
                <div className="tabs">
                <Tabs  
                useOnPan={true}
                tabs={tabs}
                tabBarBackgroundColor={'#ffff'}
                tabBarInactiveTextColor={'#8c8c8c'}
                tabBarActiveTextColor={'#d43c33'}
                tabBarUnderlineStyle={{border:'1px #d43c33 solid'}}
                swipeable={true}
                // tabBarPosition={'top'}
                >
                 <TabsRecommend/>
                 <TabsRanking/>
                 <TabsSearch/>
                 {/* */}
                </Tabs>
                </div>
            </div> 
        )
    }
}
export default Recommend