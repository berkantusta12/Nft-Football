import React, { useState, useEffect } from "react";
import "./index.css";
import { Card } from "../Card";
import { Pagination } from "antd";
// import axios from "axios";

const Market = () => {
  <Pagination defaultCurrent={1} total={5} />;
  const [isHidden, setIshidden] = useState(true);

  const toggleVisibility = () => {
    setIshidden(!isHidden);
  };
  const [ishidden, setishidden] = useState(true);

  const togglevisibility = () => {
    setishidden(!ishidden);
  };
  const [apidata, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [goldData, setGoldData] = useState([]);
  const [silverData, setSilverData] = useState([]);
  const [bronzeData, setBronzeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetch("http://challenge.vole.io/cards/market")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
        const pagesCount = Math.ceil(data.length / pageSize);
        const newPages = Array.from({ length: pagesCount }, (_, index) =>
          data.slice(index * pageSize, (index + 1) * pageSize)
        );
        setPages(newPages);
        setLoading(false);
        setGoldData(data.filter((item) => item.cardType === "Gold"));
        setSilverData(data.filter((item) => item.cardType === "Silver"));
        setBronzeData(data.filter((item) => item.cardType === "Bronze"));
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleGoldClick = () => {
    setApiData(goldData);
  };

  const handleSilverClick = () => {
    setApiData(silverData);
  };

  const handleBronzeClick = () => {
    setApiData(bronzeData);
  };

  const handleClick = (filter) => {
    switch (filter) {
      case "Goalkeeper":
        setApiData(goldData.filter((item) => item.position === "Goalkeeper"));
        break;
      case "Defender":
        setApiData(goldData.filter((item) => item.position === "Defender"));
        break;
      case "Midfielder":
        setApiData(goldData.filter((item) => item.position === "Midfielder"));
        break;
      case "Forward":
        setApiData(goldData.filter((item) => item.position === "Forward"));
        break;
      default:
        setApiData(goldData);
        break;
    }
  };

  return (
    <div>
      <div className="mBody">
        <div className="mMyCards">
          <span className="mspan">MARKET</span>
          <div className="mcardType">
            <div className="mp">
              <p>Card Type</p>
              <button onClick={toggleVisibility} className="mbtnVector">
                ↑
              </button>

              {!isHidden && <div> </div>}
            </div>
            {isHidden && (
              <div className="mcategory">
                <span onClick={handleGoldClick}>Gold (13)</span>
                <span onClick={handleSilverClick}>Silver (13)</span>
                <span onClick={handleBronzeClick}>Bronze (13)</span>
              </div>
            )}
            <hr className="chr" />
            <div className="mp">
              <p>Position</p>
              <button onClick={togglevisibility} className="mbtnVectorPosition">
                ↑
              </button>
              {!ishidden && <div> </div>}
            </div>
            <div>
              {ishidden && (
                <div className="mcategory">
                  <span onClick={() => handleClick("Goalkeeper")}>
                    Goalkeeper (13)
                  </span>
                  <span onClick={() => handleClick("Defender")}>
                    Defender (13)
                  </span>
                  <span onClick={() => handleClick("Midfielder")}>
                    Midfielder (13)
                  </span>
                  <span onClick={() => handleClick("Forward")}>
                    Forward (13)
                  </span>
                </div>
              )}

              <hr className="phr" />
            </div>
            <div>
              <div className="p">
                <span>Price</span>
                <button className="mbtnVectorPrice">↑</button>
              </div>
            </div>
          </div>
          <div className="pagination">
            <Pagination
              total={apidata.length}
              showTotal={(total) => `Total ${total} items`}
              pageSize={pageSize}
              current={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <div className="mcarddata">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {pages[currentPage - 1].map((item, index) => (
              <Card
                className="mcarddata"
                key={index}
                id={item.id}
                photoUrl={item.photoUrl}
                price={item.price}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export { Market };
