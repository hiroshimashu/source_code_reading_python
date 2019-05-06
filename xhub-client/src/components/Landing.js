import React from 'react';
import Top from "./Top/top";
import Category from "./Top/category";
import Vision from "./Top/vision";
import Footer from "./Top/footer";


const Landing = () => {
	return (
		<div className="landing-wrapper">
			<Top />
			<Category />
			<Vision />
			<Footer />
		</div>
	);
};

export default Landing;
