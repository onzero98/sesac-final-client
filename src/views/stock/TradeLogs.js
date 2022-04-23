import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";

const TradeLogs = ({ backAPI }) => {
  const logsAPI = backAPI + "/logs";
  const [logs, setLogs] = useState([]);
  let params = window.location.pathname.substring(6);

  useEffect(() => {
    let isMounted = true;
    getLogs(logsAPI)
      .then((response) => response[0].data)
      .then((data) => {
        if (isMounted) setLogs(data);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const getLogs = async (request) => {
    let logs = [];
    logs = logs.concat(
      await axios.get(request, {
        params: { competitionId: params },
      })
    );
    return logs;
  };
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Log ID</th>
            <th>거래 종류</th>
            <th>단축코드</th>
            <th>회사 이름</th>
            <th>구매가</th>
            <th>판매가</th>
            <th>거래량</th>
            <th>손익</th>
            <th>체결 시각</th>
          </tr>
        </thead>
        <tbody>
          {logs &&
            logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td style={{ color: log.buying ? "red" : "blue" }}>
                  {log.buying ? "매수" : "매도"}
                </td>
                <td>{log.ticker}</td>
                <td>{log.companyName}</td>
                <td>{log.buyingPrice}</td>
                <td>{log.sellingPrice}</td>
                <td>{log.amount}</td>
                <td
                  style={{
                    color:
                      log.profit > 0
                        ? "red"
                        : log.profit < 0
                        ? "blue"
                        : "black",
                  }}
                >
                  {log.profit}
                </td>
                <td>{log.createdTime}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TradeLogs;

const Container = styled.div`
  margin: 1rem auto;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  border: 1px solid;
  td,
  th {
    padding: 5px;
    border: 1px solid;
  }
`;
