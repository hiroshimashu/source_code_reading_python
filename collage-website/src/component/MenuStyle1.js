const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;


const mainWidth = windowWidth * 0.116
const mainHeight =  windowHeight * 0.016;
const mainX = windowWidth *  119 / 750;
const mainY = windowHeight * 112 / 1334;

const imgWidth = windowWidth * 0.019
const imgHeight =  windowHeight * 0.019;
const imgX = windowWidth *  325 / 750;
const imgY = windowHeight * 106 / 1334;

const lineWidth = windowWidth * 0.429;
const lineHeight =  windowHeight * 0.001;
const lineX = windowWidth *  24 / 750;
const lineY = windowHeight * 163 / 1334;


const menuStyle1 = {
    mainStyle: {
        position: 'absolute',
        width: mainWidth,
        height: mainHeight,
        top: mainY,
        left: mainX,
        fontFamily: 'dnp-shuei-mgothic-std',
        fontSize: '13px',
        color: '#505050',
        textAlign: 'center',
        transform: 'scaleY(1.0039)',
        letterSpacing: '0.05em'
    },
    imgStyle: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX
    },
    lineStyle: {
        position: 'absolute',
        width: lineWidth,
        height: lineHeight,
        top: lineY,
        left: lineX,
        borderBottom:'1px solid #dcdcdc'
    }
};

export default menuStyle1;