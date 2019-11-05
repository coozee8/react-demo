import React,{Component} from 'react';
import {ListWrap,ListItem} from './../homeStyle';
import {connect} from 'react-redux';

class List extends Component{
    render(){
        return(
            <div>
                <ListWrap>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <ListItem key={index}>
                                    <img src={item.imgUrl} alt=""/>
                                    <div>
                                        <h3>{item.txt}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </ListWrap>
            </div>
        )
    }
}

const mapState = (state) =>({
    list:state.home.list
});

export default connect(mapState,null)(List);