const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.50;
const imgHeight =  windowHeight *  0.134;
const imgY =  212 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.476;
const titleHeight =  windowHeight * 0.097;
const titleX =  12 / 1200  *  windowWidth;
const titleY = 537 / 2246 * windowHeight;




const worksStyle1 =  {
    imgStyle: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
    },
    titleStyle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#7e7e7e',
        fontSize:  '26.55px',
        lineHeight:  'px',
        textAlign:  'left',
        transform: 'scaleY(1.017)',
        fontWeight: 600
    }
};

export default worksStyle1;