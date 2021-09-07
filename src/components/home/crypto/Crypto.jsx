import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const Crypto = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        maxHeight: "300px",
        overflowY: "auto",
      }}
    >
      {coins.map((coin) => {
        return (
            <Table hover>
              <tbody>
                <tr>
                  <td>
                    <img src={coin.image} alt="crypto" style={{width:"40px"}} />
                  </td>
                  <td>{coin.name}</td>
                  <td>${coin.current_price}</td>
                  <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                </tr>
              </tbody>
            </Table>
        );
      })}
    </div>
  );
};

export default Crypto;
