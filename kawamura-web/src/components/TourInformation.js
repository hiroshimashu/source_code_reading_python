import React,{ Component } from 'react';
import Title from './Title';

class TourInformation extends Component {
    render() {
        return (
            <div className="tourWrapper" style={{
                position: 'relative',
                zIndex: 5,
                fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif",
                marginTop: '50px'
            }}>

                <Title>
                    ツアー情報
                </Title>
                <div style={{marginLeft: '120px', marginBottom: '30px' , marginTop: '30px'}}>
                    ● 川村結花 ツアー2018「独奏」-ハレルヤ-
                </div>
                <div style={{marginLeft: '120px', marginBottom: '30px'}}>
                    1月19日 大阪・Music Club JANUS <br/>
                    open/start 19:00/19:30￥4,500（+1 Drink・全自由/整理番号付）
                </div>
                <div style={{marginLeft: '120px', marginBottom: '30px'}}>
                    1月20日（土）京都・SOLE CAFÉ<br/>
                    open/start 18:30/19:00￥4,500（+1 Drink・全自由/整理番号付）
                </div>
                <div style={{marginLeft: '120px', marginBottom: '30px'}}>
                    1月26日（金）札幌・KRAPS HALL<br/>
                    open/start 19:00/19:30￥4,500（+1 Drink・全自由/整理番号付）
                </div>
                <div style={{marginLeft: '120px', marginBottom: '30px'}}>
                    1月27日（土）札幌・くう-20丁目で逢いましょうアゲイン-<br/>
                    open/start 16:30/17:00￥4,500（+1 Drink・全自由/整理番号付）
                </div>
                <div style={{marginLeft: '120px', marginBottom: '30px'}}>
                    2月4日（日）横浜・モーション・ブルー・ヨコハマ※Guest:田中邦和(sax,vo), 柴草玲(vo,pf) open/start 17:00/18:30<br/>
                    ￥5,000（全自由/整理番号付）
                </div>
                <div style={{marginLeft: '120px', marginBottom: '30px'}}>
                    HP 2次先行受付<br/>
                    期間：2017年11月8日（水）10時～11月19日（日）23時59分<br/>
                    URL：http://eplus.jp/yk-hp/
                </div>
                <div style={{marginLeft: '120px', marginBottom: '30px'}}>
                    チケット一般発売：2017年12月1日（金）10:00～
                </div>
            </div>
        );
    }
}

export default TourInformation;