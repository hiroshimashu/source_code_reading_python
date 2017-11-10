import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Concept() {
    return(
        <div className="ConceptWrapper" style = {{position:'relative', marginTop: '10%'}}>
            <ScrollAnimation animateIn='fadeIn'>
                <div style ={{fontFamily: 'Raleway, sans-serif', fontSize: '40px', letterSpacing: '0.1em'}}>CONCEPT</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                <div style = {{fontSize: '16px', width: '100%', fontFamily: 'Hiragino Maru Gothic', marginTop: '5%', lineHeight: '2em'}}>
               "コラージュ"とはもともと現代絵画の手法の一つです.<br/>
               従来の画法/技法とは異なり、<br/>
               あらゆる性質とロジックがバラバラの素材を組み合わせて、<br/>
               ひとつの作品を作り出し、<br/>
               作品としての統一性を出す技法です。<br/>
           　　　その技法は,絵画と彫刻の境界を消滅させました。<br/>
               今の広告業界に必要なのは、<br/>
               既存のプロモーション手法、商慣習にとらわれない、<br/>
               新しい発想や概念、他業種との融合です。<br/>
               「広告という既成概念」の境界を消滅させ、<br/>
               そこから生まれる全く新しい形のコミュニケーション<br/>
               を提供したい。それが私たち”コラージュ”の想いです.
                </div>
            </ScrollAnimation>
      　 </div>
    );
}

export default Concept;