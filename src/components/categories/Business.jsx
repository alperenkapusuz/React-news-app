import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "antd";
import axios from "axios";

const { Meta } = Card;

const Business = () => {
  const [business, setBusinnes] = useState([]);

  useEffect(() => {
    const loadBusinnesNews = async () => {
      const data = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=82a939089d3144dcbc9ea4177fe51a56"
      );
      setBusinnes(data.data.articles);
    };
    loadBusinnesNews();
  }, []);

  return (
    <div>
      <Row gutter={16}>
          {business &&
            business.map((item, index) => {
              return (
                <Col span={8}>
                <Card
                  key={index}
                  hoverable
                  style={{width: 470, height:470, margin: 20 }}
                  cover={<img alt="foto" src={item.urlToImage} style={{width:470 , height:272.9}}/>}
                >
                  <Meta title={item.title} description={item.content} />
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Button type="primary" style={{ marginTop: "10px" }}>
                      Read More
                    </Button>
                  </a>
                </Card>
                </Col>
              );
            })}
      </Row>
    </div>
  );
};

export default Business;
