import React from "react";
import styled from "styled-components/macro";

const ShowStock = () => {
    return (
        <Module>
            <thead>
                <tr>
                    <th>종목이름</th>
                    <th>전일대비</th>
                    <th>현재가</th>
                </tr>
            </thead>
            <div>
                {/* map 으로 stockprice 쏴주는 곳 */}
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
                <StockClick>
                    <Span className="name">삼성전자</Span>
                    <Span className="percent">+30%</Span>
                    <Span className="price">70,000</Span>
                </StockClick>
            </div>
        </Module>
    );
};

export default ShowStock;

const Module = styled.div`

`

const StockClick = styled.div`
cursor: pointer;
border-bottom: 1px solid rgba(0,0,0,0.1);
padding-bottom: 5px;
margin-bottom: 5px;
:first-child{
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 5px;
    margin-top: 5px;
}
`

const Span = styled.span`
margin-right: 5px;
-ms-user-select: none; 
-moz-user-select: -moz-none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
`