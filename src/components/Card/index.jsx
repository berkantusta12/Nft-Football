import React from "react";
import "./index.css";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { updateHeaderParam } from "../../redux/actions";

const Card = (props) => {
  const { id, photoUrl, price } = props;

  const dispatch = useDispatch();

  const handleSellClick = () => {
    console.log("Sell button clicked"); // onClickFunc'u logla
    dispatch(updateHeaderParam(-price));
  };

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://challenge.vole.io/cards/mycards");
      const data = await response.json();
      setApiData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleSelectPlayer = async (id) => {
    console.log("cardId", id);
    fetch(`http://challenge.vole.io/cards/${id}`)
      .then((response) => response.json())
      .then(async (data) => {
        console.log("cardData", data);
        await setApiData(data);
        setLoading(false);
        console.log(apiData);
      })
      .catch((error) => console.log(error));
    setSelectedPlayer(id);
    setIsModalOpen(true);
  };

  return (
    <div className="card">
      <img
        className="img"
        onClick={() => handleSelectPlayer(id)}
        src={photoUrl}
        alt=""
      />

      <div className="btndiv">
        <h3 className="hprice">
          {"€ " + price}

          <Button
            buttonType="sell-btn"
            buttonName="Sell"
            onClickFunc={handleSellClick}
          />
        </h3>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={() => {
          setSelectedPlayer(null);
          setIsModalOpen(false);
        }}
      >
        {isModalOpen ? (
          <div>
            <div className="footballer">
              <img src={apiData.photoUrl} alt="footballer" />
            </div>

            <div className="content">
              <p className="pm">{apiData.name}</p>
              <p>{apiData.position}</p>
              <div>
                <div className="sellprice">
                  <label className="label">{"€ " + apiData.price}</label>
                  <div className="csellbtn">
                    <Button
                      buttonType="sell-btn"
                      buttonName="Sell"
                      onClickFunc={handleSellClick}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="attrıbutes">
              <div className="attrbutes2">
                <p className="mpa">ATTRIBUTES</p>
                <div className="categori">
                  <div className="pace">
                    <p className="mpace">
                      {apiData.attributes && apiData.attributes.pace
                        ? `Pace: ${apiData.attributes.pace}`
                        : apiData.attributes && apiData.attributes.diving
                        ? `Diving: ${apiData.attributes.diving}`
                        : "Diving: -"}
                    </p>
                  </div>
                  <div className="shooting">
                    <p className="mshooting">
                      {apiData.attributes && apiData.attributes.shooting
                        ? `Shooting: ${apiData.attributes.shooting}`
                        : apiData.attributes && apiData.attributes.kicking
                        ? `Kicking: ${apiData.attributes.kicking}`
                        : "Kicking: -"}
                    </p>
                  </div>
                  <div className="passing">
                    <p className="mpassing">
                      {apiData.attributes && apiData.attributes.passing
                        ? `Reflexes: ${apiData.attributes.passing}`
                        : apiData.attributes && apiData.attributes.Reflexes
                        ? `Reflexes: ${apiData.attributes.Reflexes}`
                        : "Reflexes: -"}{" "}
                    </p>
                  </div>
                  <div className="dribbiling">
                    <p className="mdribbiling">
                      {apiData.attributes && apiData.attributes.dribbiling
                        ? `Dribbiling: ${apiData.attributes.pace}`
                        : apiData.attributes && apiData.attributes.positioning
                        ? `Positioning: ${apiData.attributes.positioning}`
                        : "Positioning: -"}{" "}
                    </p>
                  </div>
                  <div className="defending">
                    <p className="mdefending">
                      {apiData.attributes && apiData.attributes.defending
                        ? `Defending: ${apiData.attributes.defending}`
                        : apiData.attributes && apiData.attributes.speed
                        ? `Speed: ${apiData.attributes.speed}`
                        : "Speed: -"}{" "}
                    </p>
                  </div>
                  <div className="physical">
                    <p className="mphysical">
                      Physical:{" "}
                      {apiData.attributes && apiData.attributes.physical
                        ? apiData.attributes.physical
                        : "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Modal>
    </div>
  );
};

export { Card };
