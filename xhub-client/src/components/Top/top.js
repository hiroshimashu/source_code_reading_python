import React from 'react'
import topBackground from "../../static/top-background.png";
import topBackground2 from "../../static/top-background2.svg";
import topBackground3 from "../../static/top-background3.svg";

const Top = () => {
    return (
        <div className="top-wrapper">
            <div className="img-wrapper" style = { styles.imgWrapper } style = { styles.topWrapper }>
                <img src={topBackground} alt="top-background" style = { styles.background1 } />
                <img src={topBackground2} alt="top-background2" style = { styles.background2 } />
                <img src={topBackground3} alt="top-background3" style = { styles.background3 } />
            </div>
        </div>
    )
}

const styles = {
    topWrapper: {
        width: "100%",
        height: "1500px",
    },
    imgWrapper: {
        position: "relative",
        width: "100%",
        height: "900px"
    },
    background1: { 
        position: "absolute",
        zIndex: 0,
    },
    background2: {
        position: "absolute",
        zIndex: 1,
        opacity: 0.5
    },
    background3: {
        position: "absolute",
        zIndex: 2,
        opacity: 0.5
    }




}

export default Top;