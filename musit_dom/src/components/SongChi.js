import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react';

class Chi extends React.Component{
    render(){
        return(
            <WingBlank>
            <Carousel className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
                autoplayInterval={2000}
            >
              {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                <div className="v-item" key={type}>{type}</div>
              ))}
            </Carousel>
          </WingBlank>
        )
    }
}
export default Chi