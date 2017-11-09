import React, { Component } from 'react';
import HomeBtn from '../static/homebtn.png';
import Radium from 'radium';
import Official from '../static/osbtn.png';
import scrollToComponent from 'react-scroll-to-component';



class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
       return(
           <div className="headerWrapper" style = { styles.wrapper} >

               <a href = './' style = {{zIndex:5}}>
                   <div style = {styles.homebtn}>
                       <div　style = {{ width: '124px', height: '30px', fontSize: '22px', letterSpacing: '0.15em',textAlign: 'center', color: 'rgba(111, 72, 12, 0.6)', fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif" }}>川村結花</div>
                       <div  style = {{ width: '124px', height: '12px', fontSize: '12px', letterSpacing: '0.6em', textAlign: 'center', color: 'rgba(111, 72, 12, 0.6)', marginLeft: '1px', fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif"}}>
                           「ハレルヤ」
                       </div>
                   </div>
               </a>
               <div className = 'menuWrapper' style = { styles.menuWrapper}>
                   <div key = 'one' className = 'menu' style = { styles.menu } onClick={() => {
                       this.props.appearBtn();
                       return(scrollToComponent(this.props.target1, { offset:  0, align: 'top', duration: 500}))
                   }}>
                       セルフライナーノーツ
                   </div>
                   <div key = 'two'className = 'menu' style = { styles.menu } onClick= {() => {
                       this.props.appearBtn();
                       return (scrollToComponent(this.props.target2, {offset: 0, align: 'top', duration: 500}))
                   }}>
                       トレーラー
                   </div>
                   <div key = 'three' className = 'menu' style = { styles.menu } onClick= {() => {
                       this.props.appearBtn();
                       return (scrollToComponent(this.props.target3, {offset: 0, align: 'top', duration: 500}))
                   }}>
                       アーティストコメント
                   </div>
                   <div key = 'four' className = 'menu' style = { styles.menu } onClick= {() => {
                       this.props.appearBtn();
                       return (scrollToComponent(this.props.target4, {offset: 0, align: 'top', duration: 500}))
                   }}>
                       ツアー情報
                   </div>
                   <div key = 'five' className = 'menu' style = { styles.menu } onClick= {() => {
                       this.props.appearBtn();
                       return (scrollToComponent(this.props.target5, {offset: 0, align: 'top', duration: 500}))
                   }}>
                      リンク
                   </div>
               </div>
               <a href= 'http://www.kawamurayuka.com/' target = '_blank' style = { styles.officialWrapper }>
                  <img src = {Official} alt = 'official' style = { styles.official }/>
               </a>
           </div>
       )
    }
}

const styles = {
    wrapper: {
        width: '1200px',
        height: '70px',
        margin: '0 auto',
        display: 'flex',
        verticalAlign: 'baseline',
        zIndex: 5
    },
    menuWrapper: {
        paddingTop: '28px',
        display: 'flex',
        height: '20px',
        zIndex: 5
    },
    menu: {
        fontSize: '13px',
        color: '#4D4D4D',
        letterSpacing:'0.2em',
        marginRight: '20px',
        zIndex: 5,
        ':hover': {
             borderBottom: 'solid 1px'
        }
    },
    homebtn: {
        paddingTop:'10px',
        marginLeft: '10px',
        marginRight: '10px',
        float: 'left',
        zIndex: 5
    },
    officialWrapper: {
        background: 'transparent',
        marginLeft: '50px',
        zIndex: 5
    },
    official: {
        paddingTop: '28px',
        float: 'right',
        zIndex: 5
    }


}

export default Radium(Header);