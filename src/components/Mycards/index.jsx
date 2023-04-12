import React, { useState, useEffect } from "react";
import "./index.css";
import { Card } from "../Card";

const Mycards = () => {
  const [isHidden, setIshidden] = useState(true);
  const [ishidden, setishidden] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://challenge.vole.io/cards/mycards")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
        setLoading(false);
        setFilteredData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleVisibility = () => {
    setIshidden(!isHidden);
  };

  const togglevisibility = () => {
    setishidden(!ishidden);
  };

  const filterData = (position) => {
    const filtered = apiData.filter((item) => item.position === position);
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="Body">
        <div className="MyCards">
          <span className="span">MY CARDS</span>
          <div className="cardType">
            <div className="p">
              <p>Card Type</p>
              <button onClick={toggleVisibility} className="btnVector">
                ↑
              </button>

              {!isHidden && <div> </div>}
            </div>
            {isHidden && (
              <div className="category">
                <span onClick={() => filterData("Gold")}>Gold (13)</span>
                <span onClick={() => filterData("Silver")}>Silver (13)</span>
                <span onClick={() => filterData("Bronze")}>Bronze (13)</span>
              </div>
            )}
            <hr className="chr" />
            <div className="p">
              <p>Position</p>
              <button onClick={togglevisibility} className="btnVectorPosition">
                ↑
              </button>
              {!ishidden && <div> </div>}
            </div>
            <div>
              {ishidden && (
                <div className="category">
                  <span onClick={() => filterData("Goalkeeper")}>
                    Goalkeeper (13)
                  </span>
                  <span onClick={() => filterData("Defender")}>
                    Defender (13)
                  </span>
                  <span onClick={() => filterData("Midfielder")}>
                    Midfielder (13)
                  </span>
                  <span onClick={() => filterData("Forward")}>
                    Forward (13)
                  </span>
                </div>
              )}
              <hr className="phr" />
            </div>
            <div>
              <div className="p">
                <span>Price</span>
                <button className="btnVectorPrice">↑</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carddata">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredData.map((item, index) => {
            return (
              <Card
                key={index}
                id={item.id}
                photoUrl={item.photoUrl}
                price={item.price}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export { Mycards };
