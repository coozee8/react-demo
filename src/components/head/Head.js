import React from 'react';
import {HeadWrap,Logo,Nav,NavItem,SearchWrap,Search,SearchInfo} from './headStyle';
import {connect} from 'react-redux';
import * as headActionCreaters from './store/headActionCreates';

//js文件,在组件类外部可以使用任何js语法
function showInfo(flag) {
   if(flag){
       return(
           <SearchInfo>
               <span>精品锅具</span>
               <span>厨房用品</span>
               <span>酒杯茶具</span>
           </SearchInfo>
       )
   }else {
       return null;
   }
}
//2.把有状态组件改成无状态组件
function Head(props) {  //相同属性名可以进行es6结构赋值
    const {flag,inputFocus,inputBlur} = props;
    return(
        <div>
            <HeadWrap>
                <Logo/>
                <Nav>
                    <NavItem>首页</NavItem>
                    <NavItem>详情页</NavItem>
                </Nav>
                {showInfo(flag)}
                <SearchWrap>
                    <Search className={flag ? 'flag' : ''}
                            onFocus={inputFocus}
                            onBlur={inputBlur}/>
                    <span className='glyphicon glyphicon-search'></span>
                </SearchWrap>
            </HeadWrap>
        </div>
    )
}

/*const mapState = (state) =>{
    console.log(state);
    return{    //head主reducer中取的key值
        flag:state.head.flag
    }
};*/
//映射数据
const mapState = (state) =>({
    flag:state.head.flag
});
//派发方法
const mapDispatch = (dispatch) =>({
    inputFocus(){
        /*const action = {
            type:'input_focus'
        };
        dispatch(action);*/
        //1.如果一个组件中的action有很多个,应该把它们放在一个单独的文件下边
        //在组件中引入使用
        dispatch(headActionCreaters.handleFocus());
    },
    inputBlur(){
        dispatch(headActionCreaters.handleBlur());
    }
});

//react-redux会把state映射成props,所以可以把有状态组件改成无状态组件
export default connect(mapState,mapDispatch)(Head);