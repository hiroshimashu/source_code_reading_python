import React from 'react';

function Introduction() {
    return(
        <div className = 'introWrpaeer' style = {{position: 'relative', zIndex: 5, marginTop: '-50px'}}>
            <div className="intro" style = {{marginLeft: '80px', fontSize: '15px',fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif" }}>
                キーボーディスト“Dr.kyOn”とギタリスト“佐橋佳幸”からなる<br/>
                インストユニット＝Darjeeling（ダージリン）が設立した新レーベル“GEAEG RECORDSより、<br/>
                川村結花 2年ぶりのスタジオ録音アルバム「ハレルヤ」をリリース。<br/>
                Darjeeling （Dr.kyOn／佐橋佳幸）を始め、坂田学(Dr)、渡辺等 (B)、納浩一 (B)、三沢またろう (Per)、<br/>
                柴草玲 (Vocal)、田中邦和 (Sax, Vocal)ら豪華サポートアーティストが参加。
            </div>
        </div>
    );
}

export default Introduction;