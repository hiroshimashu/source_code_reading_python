import React from 'react';
import "../landing.css";
import Top from "./Top/top";
import UseCase from "./Top/useCase";
import Category from "./Top/category";
import Community from "./Top/community";
import BackgroundCircle1 from "./Top/backgroundCircle1";
import BackgroundCircle2 from "./Top/backgroundCircle2";
import BackgroundEllipse from "./Top/backgroundEllipse1";
import BackgroundEllipse2 from "./Top/backgroundEllipse2";
import Vision from "./Top/vision";
import Footer from "./Top/footer";


const Landing = () => {
	return (
		<div className="landing-wrapper">
			<Top />
			<UseCase />
			<Community />
			<BackgroundCircle1 />
			<BackgroundEllipse />
			<Category />
			<BackgroundEllipse2 />
			<BackgroundCircle2 />
			<Vision />
			<Footer />
		</div>
	);
};

export default Landing;
