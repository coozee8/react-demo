import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './homeStyle';
//import oImg from './../../static/banner.png';
import {connect} from 'react-redux';
import List from './components/List';
import Topic from './components/Topic';
import Sine from './components/Sine';
import Scan from './components/Scan';
import axios from 'axios';

class Home extends Component{
    render(){
        return(
            <div>
                <HomeWrap>
                    <HomeLeft>
                        <img src='//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848' alt=""/>
                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Sine/>
                        <Scan/>
                    </HomeRight>
                </HomeWrap>
            </div>
        )
    }

    componentDidMount(){
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                console.log(res.data);
                const data = res.data.data;
                const action = {
                    type:'init_home_data',
                    data
                };
                this.props.changeHomeData(action);
            })
    }
}

const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
});

export default connect(null,mapDispatch)(Home);