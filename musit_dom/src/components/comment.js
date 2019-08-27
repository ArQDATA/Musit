import React,{Component} from 'react'
import {List} from 'antd-mobile'
const Item = List.Item
const Brief  = Item.Brief
class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div>
            {this.props.item.map((item,index)=>{
                return(
            <List key={index}>
                <Item 
                style={{fontSize:14,color: '#666'}}
                arrow={'empty'}  multipleLine onClick={() => {}} align={'bottom'}>
                <img src={item.script} alt="" style={{width:30,height:30,borderRadius:'100%'}}/>
                    <div className="brief">
                            <Brief style={{fontSize:11,whiteSpace:'normal'}}>
                          {item.name}
                            </Brief>
                            <Brief style={{color:'black',fontSize:15,whiteSpace:'normal'}}>
                           {item.content}
                            </Brief>
                    </div> 
                    </Item>
                </List>
                )
            })}
            </div>
        )
    }
}

export default Comments