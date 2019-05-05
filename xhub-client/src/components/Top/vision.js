import React from 'react';

const Vision = () => {
	return (
		<div className="vision-wrapper" style={styles.visionWrapper}>
			<div style = { styles.textWrapper }>
                〇〇（サービス名）は<br />
                未経験のクリエイターの卵も<br />
                経験豊富な現役クリエイターも<br/>
                <br/>
                誰もがXRを 楽しみ 学ぶための<br/>
                インタラクティブな生涯学習コミュニティです。<br />
                <br/>
                初学者には 1on1のメンターを通じて、<br/>
				気兼ねなく質問出来る環境を<br />
                
                現役クリエイターには社外のつながりと共に、<br/> 
                専門分野を探求出来る環境を<br/> 
                <br/>
                それぞれ提供して参ります。<br />
                <br />
                <br/>
                このサービスがXRクリエイターの皆様にとって<br/>
				楽しさと、学びと、社会的つながりを得られる<br/>
                XXXXX"となれば幸いです<br/> 
                <br />
                <br/>
                x garden<br/>
                - 多彩なXRが 咲き誇る国へ -
			</div>
		</div>
	);
};

const styles = {
	visionWrapper: {
		/* Rectangle */
		width: '100%',
		height: '719px',
		background: 'linear-gradient(90deg, #67CB99 1.64%, #7ACE68 100%)',
        opacity: 0.2,
        zIndex: 1
	},
	textWrapper: {
		width: '540px',
		height: '572px',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: '89px',
		fontFamily: 'Noto Sans CJK JP',
		fontSize: '14px',
		lineHeight: '25px',
		textAlign: 'center',
        color: '#3D4043',
        opacity: 1,
        zIndex: 2
	}
};

export default Vision;
