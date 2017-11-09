import React, { Component } from 'react';
import SongList from '../components/SongList';

const songs = ['01. カワムラ鉄工所', '02. 夜の調べ', '03. 片付けようちゃんとしよう', '04. 乾杯のうた', '05. 猫の耳たぶ', '06. ロウソクの灯が消えるまで', '07. その先は?', '08. 愛だけしかない景色']
const comments = ['わたしの祖父は鉄工所のおやっさんでした。大阪の森小路という下町、その商店街の中にある住居を兼ねた町工場.あの頃への思いをいつか歌にしたいと、歌詞を書いたまま放置していたところ昨年友人の柴草玲ちゃんがなんとも美しいメロディをつけてくださり、やっと歌となって生まれて来る事ができました。Liveでは涙ぐむ方が毎回いてくださるのもうれしいかぎりです。',]

class Listen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

             <div className = 'tableBox' style = { styles.tableBox }>
                 <table style = {styles.table}>
                     <tbody>
                         <tr style= {{height: '35px', fontSize: '14px'}}>
                            <td width = {'480px'} style = {{ verticalAlign: 'middle', borderBottom: '1px #000 solid'}}>
                                <p style = {{ lineHeight: '170%',  fontSize:'13px', paddingTop: '15px', margin: '0'}} className = 'kind'>収録曲</p>
                            </td>
                            <td style = {{verticalAlign: 'middle', borderBottom: '1px #000 solid', width: '2px', width:'150px'}}>
                            </td>
                            <td style = {{verticalAlign: 'middle', borderBottom: '1px #000 solid' ,width: '105px'}}>
                                <p className = 'listen'　style = {{fontSize:'13px', paddingTop: '15px', lineHeight: '170%', textAlign: 'left', margin:0}}>
                                    試聴
                                </p>
                            </td>
                            <td style = {{verticalAlign: 'middle', borderBottom: '1px #000 solid', width: '2px'}}>
                            </td>
                         </tr>
                         <SongList name = {songs[0]} key = {songs[0]} handleClick = {this.props.handleClick1} fetch = {this.props.fetch}>
                             わたしの祖父は鉄工所のおやっさんでした。<br/>
                             大阪の森小路という下町、その商店街の中にある住居を兼ねた町工場。<br/>
                             あの頃への思いをいつか歌にしたいと、歌詞を書いたまま放置してい<br/>
                             たところ昨年友人の柴草玲ちゃんがなんとも美しいメロディをつけて<br/>
                             くださり、やっと歌となって生まれて来る事ができました。<br/>
                             Liveでは涙ぐむ方が毎回いてくださるのもうれしいかぎりです。
                         </SongList>
                         <SongList name = {songs[1]} key = {songs[1]} handleClick = {this.props.handleClick2} >
                             ハチロクの園まり系スロウをピアノトリオで。<br/>
                             齢50にならなければわからなかった気持ちをゆったりと。<br/>
                             間奏わずか８小節に加えられた小さな銅鑼のような音とハンドクラ<br/>
                             ップ。それだけで一気に場面が波止場へトリップしたような感覚に。<br/>
                             キョンさんのセンスの豊かさに心打たれました。<br/>
                             <br/>
                         </SongList>
                         <SongList name = {songs[2]} key = {songs[2]} handleClick = {this.props.handleClick3}>
                             今さらながら気まぐれに断捨離を始めた昨年作った歌です。<br/>
                             渡辺等さんのベースラインがあまりにかっこよくて<br/>
                             佐橋さんのアイデアによりアウトロのコーラスとして歌われる事に。<br/>
                             ダージリンのお二人と一緒に合唱。素敵な想い出です。<br/>
                             <br/>
                             <br/>
                         </SongList>
                         <SongList name = {songs[3]} key = {songs[3]} handleClick = {this.props.handleClick4}>
                             昨年マンスリーライブを始めた最初の月に書いた、<br/>
                             来てくださった方々へのメッセージをこめた曲です。<br/>
                             もとはピアノ一本で力強めのタッチでしたが、<br/>
                             佐橋さんのアコースティックギターがあまりに美しいので<br/>
                             ピアノを弾くのをやめテンポもゆったり流れるままにまかせたら<br/>
                             こんなにフォーキーで木漏れ日のような曲になりました。<br/>
                             <br/>
                             <br/>
                         </SongList>
                         <SongList name = {songs[4]} key = {songs[4]} handleClick = {this.props.handleClick5}>
                             以前NOKKOさんに作曲提供させていただいた曲。<br/>
                             こういうマイナーキーのスロウなjazzは普段愛聴しているのに<br/>
                             自分でやるのは初めて。<br/>
                             この曲のサビは今まで書いたメロディラインの中でも<br/>
                             ５本の指に入るくらい好きな旋律です。<br/>
                             <br/>
                             <br/>

                         </SongList>
                         <SongList name = {songs[5]} key = {songs[5]} handleClick = {this.props.handleClick6}>
                             １５、６年前ものすごく凹んでたわたしに、<br/>
                             敬愛する大先輩である白井良明さんがくださった励ましのメール。<br/>
                             ことあるごとに思い出しては支えられたその言葉をいつか歌に、と思い<br/>
                             続けやっと実現しました。<br/>
                             デュエットの男性ボーカリストは、サックスプレイヤーの田中邦和君。<br/>
                             この曲、なんとテイク１回でした。<br/>
                             <br/>

                         </SongList>
                         <SongList name = {songs[6]} key = {songs[6]} handleClick = {this.props.handleClick7}>
                             この闇を越えれば光が、みたいな曲を書き尽くしたその昔。<br/>
                             それはそれで真実ではあるものの、じゃあ、その先は？<br/>
                             というモヤモヤを４ビートに乗せて軽やかに。<br/>
                             途中ブルースのソロ回したり、わたしのヘボい鍵盤ハーモニカがあった<br/>
                             り。佐橋さんとキョンさんがそこかしこで会話しているのがとっても楽<br/>
                             しいです。
                         </SongList>
                         <SongList name = {songs[7]} key = {songs[7]} handleClick = {this.props.handleClick8}>
                             11月のある短い期間、代々木公園のとある一角は<br/>
                             まるで天国のような場<br/>
                             <br/>
                             <br/>
                             <br/>
                             <br/>
                             <br/>
                         </SongList>
                     </tbody>
                 </table>
             </div>
        );
    }
}

const styles = {
    tableBox: {
        width: '650px',
        height: '1700px',
        margin: '40px auto 70px auto',
        zIndex: 5,
        position: 'relative'
    },
    table: {
        width:'650px',
        height:'auto',
        margin:'0px auto',
        borderCollapse:'collapse',
        borderSpacing: 0
    }
}

export default Listen