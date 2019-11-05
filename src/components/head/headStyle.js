import styled from 'styled-components';
import logo from './../../static/logo.jpg';
export const HeadWrap = styled.div`
  height: 60px;
  background: #ccc;
`;

export const Logo = styled.a`
  height: 60px;
  width: 100px;
  display: block;
  background: url(${logo});
  background-size: contain;
  margin-left: 50px;
  float: left;
`;

export const Nav = styled.div`
  height: 60px;
  width: 300px;
  float: left;
  margin-left: 100px;
`;

export const NavItem = styled.span`
  font-size: 26px;
  line-height: 60px;
  margin-left: 50px;
`;

export const SearchWrap = styled.div`
  height: 60px;
  float: right;
  position: relative;
  span{
    position: absolute;
    right: 140px;
    top: 24px;
  }
`;

//属性attrs({key:val,key:val})
export const Search = styled.input.attrs({placeholder:'请输入内容'})`
  height: 40px;
  width: 180px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 10px;
  margin-right: 105px;
  padding-left: 20px;
  transition: 1s;
  &.flag{   //&同级属性写法
    width: 220px;
    transition: 1s;
  }
`;

export const SearchInfo = styled.div`
  height: 60px;
  width: 300px;
  float: left;
  margin-left: 150px;
  span{
    font-size: 16px;
    margin-left: 30px;
    line-height: 60px;
  }
`;
