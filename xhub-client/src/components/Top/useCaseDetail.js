import React from 'react';
import '../../useCaseDetail.css';
import Background1 from '../../static/use-case-background.svg';
import Background2 from '../../static/use-case-background2.svg';
import Background3 from '../../static/use-case-background3.svg';
import Background4 from '../../static/use-case-background4.svg';

// TODO 
　 // Backgorundの画像の位置修正

const UseCaseDetail = () => {
	return (
		<div className="case-detail-wrapper">
			<div className="case1-wrapper">
				<div className="case1-title">
					使い方1<br />
					初学者向けメンターサービス
				</div>
				<div className="case1-main">
					困った時にオンラインで気軽に相談できる<br />
					現役AR/VRクリエイターの<br />
					メンターを探すことが出来ます。<br />
					<br />
					直接メンターに依頼できるため<br />
					価格はプログラミング教室の1/10以下で学習可能です。
				</div>
				<div className="case1-background1">
					<img className="case1-background-img1" src={Background1} alt = "use-case-background"/>
				</div>
				<div className="case1-background2">
					<img className="case1-background-img2" src={Background2} alt = "use-case-background2"/>
				</div>
			</div>
			<div className="case2-wrapper">
				<div className="case2-title">
					使い方2<br />
					先端分野の生涯学習コミュニティ
				</div>
				<div className="case2-main">
					業界最前線にいるXRスタートアップの<br />
					CTOやR&Dの部門に所属するトップクリエイター方々と<br />
					インタラクティブに技術探求するコミュニティを提供しています。
				</div>
                <div className="case2-background1">
					<img className="case2-background-img1" src={Background3} alt = "use-case-background3"/>
				</div>
				<div className="case2-background2">
					<img className="case2-background-img2" src={Background4} alt = "use-case-background4"/>
				</div>
			</div>
		</div>
	);
};

export default UseCaseDetail;
