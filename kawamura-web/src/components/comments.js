import React , { Component } from 'react';
import CommentCard from './commentsCard';
import comment from '../static/comment.png';

class Comment extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
         <div>
            {this.props.note1 &&
            <CommentCard
            children1='01.'
            children2=' カワムラ鉄工所'
            top = '500px'
            style1={{
                top: '180px',
                position: 'absolute',
                width: '594px',
                height: '230px',
                left: '10%',
                marginLeft: ' -297px',
                zIndex: '110',
                background: `url(${comment})`
            }}
            style2={{
                marginTop: '14px',
                marginLeft: '518px',
                cursor: 'pointer',
                zIndex: '101'
            }}
            handleClick  = {this.props.handleClick1}
            >
            わたしの祖父は鉄工所のおやっさんでした。<br/>
            大阪の森小路という下町、その商店街の中にある住居を兼ねた町工場.<br/>
            あの頃への思いをいつか歌にしたいと、歌詞を書いたまま放置していたところ<br/>
            昨年友人の柴草玲ちゃんがなんとも美しいメロディをつけてくださり、<br/>
            やっと歌となって生まれて来る事ができました。<br/>
            Liveでは涙ぐむ方が毎回いてくださるのもうれしいかぎりです。
            </CommentCard>}
            {this.props.note2 &&
            <CommentCard
                children1='02.'
                children2=' 夜の調べ'
                top = '500px'
                style1={{
                    top: '250px',
                    position: 'absolute',
                    width: '594px',
                    height: '230px',
                    left: '10%',
                    marginLeft: ' -297px',
                    zIndex: '110',
                    background: `url(${comment})`
                }}
                style2={{
                    marginTop: '14px',
                    marginLeft: '518px',
                    cursor: 'pointer',
                    zIndex: '101'
                }}
                handleClick  = {this.props.handleClick2}
            >
                ハチロクの園まり系スロウをピアノトリオで。<br/>
                齢50にならなければわからなかった気持ちをゆったりと。<br/>
                間奏わずか８小節に加えられた小さな銅鑼のような音とハンドクラップ。<br/>
                それだけで一気に場面が波止場へトリップしたような感覚に。<br/>
                キョンさんのセンスの豊かさに心打たれました。<br/>
            </CommentCard>}
             {this.props.note3 &&
             <CommentCard
                 children1='03.'
                 children2=' 片付けちゃんとしよう'
                 top = '500px'
                 style1={{
                     top: '320px',
                     position: 'absolute',
                     width: '594px',
                     height: '230px',
                     left: '10%',
                     marginLeft: ' -297px',
                     zIndex: '110',
                     background: `url(${comment})`
                 }}
                 style2={{
                     marginTop: '14px',
                     marginLeft: '518px',
                     cursor: 'pointer',
                     zIndex: '101'
                 }}
                 handleClick  = {this.props.handleClick3}
             >
                 今さらながら気まぐれに断捨離を始めた昨年作った歌です。<br/>
                 渡辺等さんのベースラインがあまりにかっこよくて<br/>
                 佐橋さんのアイデアによりアウトロのコーラスとして歌われる事に。<br/>
                 ダージリンのお二人と一緒に合唱。素敵な想い出です。<br/>

             </CommentCard>}
             {this.props.note4 &&
             <CommentCard
                 children1='04.'
                 children2=' 乾杯のうた'
                 top = '500px'
                 style1={{
                     top: '390px',
                     position: 'absolute',
                     width: '594px',
                     height: '230px',
                     left: '10%',
                     marginLeft: ' -297px',
                     zIndex: '110',
                     background: `url(${comment})`
                 }}
                 style2={{
                     marginTop: '14px',
                     marginLeft: '518px',
                     cursor: 'pointer',
                     zIndex: '101'
                 }}
                 handleClick  = {this.props.handleClick4}
             >
                 昨年マンスリーライブを始めた最初の月に書いた、<br/>
                 来てくださった方々へのメッセージをこめた曲です。<br/>
                 もとはピアノ一本で力強めのタッチでしたが、<br/>
                 佐橋さんのアコースティックギターがあまりに美しいので<br/>
                 ピアノを弾くのをやめテンポもゆったり流れるままにまかせたら<br/>
                 こんなにフォーキーで木漏れ日のような曲になりました。<br/>
             </CommentCard>}
             {this.props.note5 &&
             <CommentCard
                 children1='05.'
                 children2=' 猫の耳たぶ'
                 top = '500px'
                 style1={{
                     top: '460px',
                     position: 'absolute',
                     width: '594px',
                     height: '230px',
                     left: '10%',
                     marginLeft: ' -297px',
                     zIndex: '110',
                     background: `url(${comment})`
                 }}
                 style2={{
                     marginTop: '14px',
                     marginLeft: '518px',
                     cursor: 'pointer',
                     zIndex: '101'
                 }}
                 handleClick  = {this.props.handleClick5}
             >
                 以前NOKKOさんに作曲提供させていただいた曲。<br/>
                 こういうマイナーキーのスロウなjazzは普段愛聴しているのに<br/>
                 自分でやるのは初めて。<br/>
                 この曲のサビは今まで書いたメロディラインの中でも<br/>
                 ５本の指に入るくらい好きな旋律です。
             </CommentCard>}
             {this.props.note6 &&
             <CommentCard
                 children1='06.'
                 children2=' ロウソクの火が消えるまで'
                 top = '500px'
                 style1={{
                     top: '530px',
                     position: 'absolute',
                     width: '594px',
                     height: '230px',
                     left: '10%',
                     marginLeft: ' -297px',
                     zIndex: '110',
                     background: `url(${comment})`
                 }}
                 style2={{
                     marginTop: '14px',
                     marginLeft: '518px',
                     cursor: 'pointer',
                     zIndex: '101'
                 }}
                 handleClick  = {this.props.handleClick6}
             >
                 １５、６年前ものすごく凹んでたわたしに、<br/>
                 敬愛する大先輩である白井良明さんがくださった励ましのメール。<br/>
                 ことあるごとに思い出しては支えられたその言葉をいつか歌に、と思い続けやっと実現しました。<br/>
                 デュエットの男性ボーカリストは、サックスプレイヤーの田中邦和君。<br/>
                 この曲、なんとテイク１回でした。<br/>

             </CommentCard>}
             {this.props.note7 &&
             <CommentCard
                 children1='07.'
                 children2=' その先は?'
                 top = '500px'
                 style1={{
                     top: '600px',
                     position: 'absolute',
                     width: '594px',
                     height: '230px',
                     left: '10%',
                     marginLeft: ' -297px',
                     zIndex: '110',
                     background: `url(${comment})`
                 }}
                 style2={{
                     marginTop: '14px',
                     marginLeft: '518px',
                     cursor: 'pointer',
                     zIndex: '101'
                 }}
                 handleClick  = {this.props.handleClick7}
             >
                 この闇を越えれば光が、みたいな曲を書き尽くしたその昔。<br/>
                 それはそれで真実ではあるものの、じゃあ、その先は？<br/>
                 というモヤモヤを４ビートに乗せて軽やかに。<br/>
                 途中ブルースのソロ回したり、わたしのヘボい鍵盤ハーモニカがあったり。<br/>
                 佐橋さんとキョンさんがそこかしこで会話しているのがとっても楽しいです。
             </CommentCard>}
             {this.props.note8 &&
             <CommentCard
                 children1='08.'
                 children2=' 愛だけしかない景色'
                 top = '500px'
                 style1={{
                     top: '670px',
                     position: 'absolute',
                     width: '594px',
                     height: '230px',
                     left: '10%',
                     marginLeft: ' -297px',
                     zIndex: '110',
                     background: `url(${comment})`
                 }}
                 style2={{
                     marginTop: '14px',
                     marginLeft: '518px',
                     cursor: 'pointer',
                     zIndex: '101'
                 }}
                 handleClick  = {this.props.handleClick8}
             >
                 11月のある短い期間、代々木公園のとある一角は<br/>
                 まるで天国のような場

             </CommentCard>}

         </div>
    )
    }
}

export default Comment;