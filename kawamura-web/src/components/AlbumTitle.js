import React from 'react';

function AlbumTitle() {
    return(
        <div style = {{width: '389px', width: '225px', fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif"}}>
          <div style = {{width: '389px', height: '80px', fontSize: '80px', letterSpacing: '0.2em', color: 'rgba(201,120,19, 0.7)'}}>
              川村結花
          </div>
        　<div style = {{width: '450px', height: '40px', fontSize: '36px', color: 'rgba(14,201,131, 0.7)', marginRight: '100px'}}>
              2017.11.8 RELEASE
         </div>
         <div style = {{fontSize: '20px',marginTop: '5px', color: '#4D4D4D'}}>
             NEW ALBUM
         </div>
         <div style = {{fontSize: '40px', width: '389px', color: '#4D4D4D'}}>
             「　ハレルヤ　」
         </div>
        </div>
    )
}

export default AlbumTitle;