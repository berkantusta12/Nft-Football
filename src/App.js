// // import {Button} from './components/Button';

// import { Header } from "./components/Header";
// import { Mycards } from "./components/Mycards";
// import { Slider } from "./components/Slider";
// import { Market } from "./components/Market";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { Container } from "react-bootstrap";


// function App() {
//   // console.log("cardsApi ==>", cardsApi())
//   return (
//     <div>
      
//       <Provider store={store}>
     
//     </Provider>
//       <Header />
//       <Slider />

//       <Mycards  />
     

//       {/* <div className="appMarket"> */}
//         <Market />

//       {/* </div> */}
//     </div>

//     /* <Button 
//         buttonType="cancel-btn"
//         buttonName="Cancel"
//         onClickFunc={() => alert('You clicked on the button')}
//       /> */
//   );
// }

// export default App;


import React, { useRef } from "react";
import { Header } from "./components/Header";
import { Mycards } from "./components/Mycards";
import { Slider } from "./components/Slider";
import { Market } from "./components/Market";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";


function App() {
  const mycardsRef = useRef(null);
  const marketRef = useRef(null);

  function goToMycards() {
    mycardsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function goToMarket() {
    marketRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Provider store={store}>
        <Header goToMycards={goToMycards} goToMarket={goToMarket} />
        <Slider />

        <div ref={mycardsRef}>
          <Mycards />
        </div>

        <div ref={marketRef}>
          <Market />
        </div>
      </Provider>

    </div>
  );
}

export default App;