import styled from 'styled-components';

export const HomeWrap = styled.div`
  margin: 30px auto;
  width: 1000px;
`;

export const HomeLeft = styled.div`
  height: 1000px;
  width: 630px;
  float: left;
  img{
    height: 270px;
    width: 630px;
  }
`;

export const HomeRight = styled.div`
  height: 1000px;
  width: 280px;
  background: yellow;
  float: right;
`;

export const TopicWrap = styled.div`
  height: 120px;
  width: 630px;
  margin-top: 30px;
`;

export const TopicItem = styled.div`
  height: 50px;
  width: 100px;
  border: 2px solid #ccc;
  float: left;
  margin: 5px 12px;
  img{
    height: 30px;
    width: 60px;
    margin: 8px 6px 0 0;
  }
`;

export const ListWrap = styled.div`
  height: 600px;
  width: 630px;
  margin-top: 30px;
`;

export const ListItem = styled.div`
  height: 150px;
  width: 630px;
  border: 2px solid #ccc;
  margin-top: 30px;
  img{
    height: 100px;
    width: 200px;
    float: left;
    margin: 20px 10px;
  }
  div{
    float: right;
    border-left: 2px solid #ccc;
    width: 400px;
    text-align: center;
  }
`;

export const SineWrap = styled.div`
  height: 400px;
  width: 280px;
  background: pink;
`;

export const ScanWrap = styled.div`
  height: 400px;
  width: 280px;
  background: orange;
`;