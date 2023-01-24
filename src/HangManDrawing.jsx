import React from "react";

const HangManDrawing = ({numberOfGuesses}) => {
    const HEAD = (
        <div key = 'head'
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "100%",
            border: "3px solid black",
            position: "absolute",
            top: "20px",
            right: "-11px",
          }}
        />
      )
      
      const BODY = (
        <div key = 'body'
          style={{
            width: "3px",
            height: "50px",
            background: "black",
            position: "absolute",
            top: "44px",
            right: 0,
          }}
        />
      )
      
      const RIGHT_ARM = (
        <div key = 'right_arm'
          style={{
            width: "50px",
            height: "3px",
            background: "black",
            position: "absolute",
            top: "50px",
            right: "-50px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
          }}
        />
      )
      
      const LEFT_ARM = (
        <div key = 'left_arm'
          style={{
            width: "50px",
            height: "3px",
            background: "black",
            position: "absolute",
            top: "50px",
            right: "3px",
            rotate: "30deg",
            transformOrigin: "right bottom",
          }}
        />
      )
      
      const RIGHT_LEG = (
        <div key = 'right_leg'
          style={{
            width: "50px",
            height: "3px",
            background: "black",
            position: "absolute",
            top: "90px",
            right: "-47px",
            rotate: "60deg",
            transformOrigin: "left bottom",
          }}
        />
      )
      
      const LEFT_LEG = (
        <div key = 'left_leg'
          style={{
            width: "50px",
            height: "3px",
            background: "black",
            position: "absolute",
            top: "90px",
            right: 0,
            rotate: "-60deg",
            transformOrigin: "right bottom",
          }}
        />
      )

      const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

    return (
        <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
          style={{
            height: '20px',
            width: "3px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <div
          style={{
            height: "3px",
            width: "100px",
            background: "black",
            marginLeft: "60px",
          }}
        />
        <div
          style={{
            height: "180px",
            width: "3px",
            background: "black",
            marginLeft: "60px",
          }}
        />
        <div style={{ height: "3px", width: "120px", background: "black" }} />
      </div>
    )
}

export default HangManDrawing