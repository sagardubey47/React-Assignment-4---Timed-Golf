// import React, { Component, useState } from "react";
// import "../styles/App.css";
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { time: 0, x: 0, y: 0 };
//   }
//   componentDidMount() {
    
//   }

//   componentWillUnmount() {
    
//   }



//   render() {
//     return (
//  <>
// </>
//     );
//   }
// }

// export default Timer;


import React, { useState, useEffect, StrictMode } from "react";
import "../styles/App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: 0,
    top: 0,
  });

  // handle Listener

    const handleListener = (event) => {
           
             switch(event.keyCode) {
                 case 39: 
                    setBallPosition({
                        left: ballPosition.left + 5,
                        top: ballPosition.top
                    });
                    break;

                 case 40: 
                       setBallPosition({
                        left: ballPosition.left,
                        top: ballPosition.top + 5
                    });
                    break;

                 case 37: 
                    setBallPosition({
                        left: ballPosition.left - 5,
                        top: ballPosition.top
                    });
                    break;
                    
                 case 38: 
                       setBallPosition({
                        left: ballPosition.left,
                        top: ballPosition.top - 5
                    });
                    break;   
             }

        }

        function tick() {

              setTime( prevTime => prevTime + 1);
        } 

  //useEffect

  useEffect(() => {

        document.addEventListener("keydown", handleListener);
        setX(ballPosition.left);
        setY(ballPosition.top);
        if(x === 250 && y === 250) {
          reset();
        }
       

        return () => {
            document.removeEventListener("keydown", handleListener);
        } 
    }, [ballPosition])



  const buttonClickHandler = () => { 
    setRenderBall(true);
    setInterval(() => {tick()}, 1000);
  } 

  const reset = () => {
    setRenderBall(false); 
    setBallPosition({left: "0px", top:"0px"});
    setCount(0);
   };

  const renderChoice = () => {
    if (renderBall) {
		    return <>
            <div className="ball" style={{
                position: "absolute",
                left: ballPosition.left + "px",
                top: ballPosition.top + "px"  
            }}></div>
            <div className="heading-timer">{time}</div>
            <div className="hole"></div>
            </>
		} else {
		    return <button onClick={buttonClickHandler} className="start" >Start</button>
		}
  };
 
  return (
    <div className="playground">
      {renderChoice()}
    </div>
  );
};

export default App;
