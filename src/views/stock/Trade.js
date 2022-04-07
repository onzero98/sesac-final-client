import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import ShowStock from "./ShowStock";

const Trade = () => {

    const [order, setOrder] = useState("buy");

    const toggle_buy = () =>{
        setOrder("buy");
    }

    const toggle_sell = () =>{
        setOrder("sell");
    }

    return (
        <Container>
            <ShowStocks>
                <ShowStock/>
            </ShowStocks>
            <StockDetail>
                <div>왼쪽에서 선택한 주식 타겟</div>
                <div>삼성전자</div>
                <div>+30%</div>
                <div>70,000</div>
            </StockDetail>
            <Order>
                <Toggle>
                    <Item onClick={toggle_buy}>매수</Item>
                    <Item onClick={toggle_sell}>매도</Item>
                </Toggle>
            {order === "buy" ? 
            <Buy>
                <div>
                    현재가 70000 P
                </div>
                <div>
                    수량
                    <input>
                    </input>
                </div>
                <div>
                    거래가능 0
                </div>
                <div>
                    매수총액 0
                </div>
                <button>
                    매수
                </button>
            </Buy>:
            <Sell>
                <div>
                    현재가 70000 P
                </div>
                <div>
                    수량
                    <input>
                    </input>
                </div>
                <div>
                    거래가능 0
                </div>
                <div>
                    매도총액 0
                </div>
                <button>
                    매도
                </button>
            </Sell>}
            </Order>
        </Container>
    );
};

export default Trade;

const Container = styled.div`
background-color: white;
margin-top: 5vh;
margin-bottom: 10vh;
min-width: 1280px;
max-width: 1280px;
min-height: 720px;
max-height: 720px;
border: 1px solid rgba(0,0,0,0.1);
display: flex;
`

const ShowStocks = styled.span`
overflow-y: scroll;
width: 25%;
`

const StockDetail = styled.div`
display: block;
width: 35%;
`

const Order = styled.div`
display: block;
width: 40%;
`

const Buy = styled.div`
`

const Sell = styled.div`

`

const Toggle = styled.div`
display: flex;
justify-content: space-between;
`

const Item = styled.div`
font-family: 'IBM Plex Sans KR', sans-serif;
font-size: large;
text-decoration: none;
text-align: center;
color: #0078ff;
cursor: pointer;
display: block;
width: 49.5%;
background-color: white;
border: 1px solid #0078ff;
:first-child{
    color: red;
    border: 1px solid red;
}
`