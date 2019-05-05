import React from 'react'
import bg1 from "../../static/footer-bg1.svg";
import bg2 from "../../static/footer-bg2.svg";

// TODO
// 1400pxより画面がおおきいときの対応

const Footer = () => {
    return (
        <div className="footer-wrapper" style = { styles.footerWrapper }>
            <div className="bg-1" style = {styles.bg1} />
            <div className="bg-2" style = { styles.bg2 } />
        </div>
    )
}

const styles = {
    footerWrapper: {
        marginTop: "287px",
        position: "relative",
        width: "100%",
        height: "279px"
    },
    bg1: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat"
    },
    bg2: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: "no-repeat"
    }

}


export default Footer;