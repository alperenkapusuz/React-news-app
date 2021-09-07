import React, { useState, useEffect } from "react";
import { Carousel, Card, Col, Row, Button, Calendar } from "antd";
import axios from "axios";
import Crypto from "./crypto/Crypto";

const { Meta } = Card;

const Home = () => {
  const [home, setHome] = useState([]);

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  useEffect(() => {
    const loadHomeNews = async () => {
      const data = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=82a939089d3144dcbc9ea4177fe51a56"
      );
      setHome(data.data.articles);
    };
    loadHomeNews();
  }, []);

  return (
    <Row>
      <Col style={{ width: 1400, margin: "auto" }}>
        <Carousel autoplay>
          {home &&
            home.map((item, index) => {
              return (
                <Col span={8}>
                  <Card
                    key={index}
                    cover={
                      <img
                        alt="foto"
                        src={item.urlToImage}
                        style={{ width: 470, height: 272.9 }}
                      />
                    }
                    style={{ display: "flex", width: 470 }}
                  >
                    <Meta title={item.title} description={item.content} />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button type="primary" style={{ marginTop: "10px" }}>
                        Read More
                      </Button>
                    </a>
                  </Card>
                </Col>
              );
            })}
        </Carousel>
      </Col>
      <Col style={{ width: 1400, display:"flex", margin:"auto"}}>
          <Card style={{ width: 700}}><Calendar fullscreen={false} onPanelChange={onPanelChange} /></Card>
          <Card style={{ width: 700}}><Crypto /></Card>
      </Col>
    </Row>
  );
};

export default Home;
