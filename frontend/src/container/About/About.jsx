import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			setAbouts(data);
			console.log(data);
		});
	}, []);

	// const abouts = [
	// 	{
	// 		title: "Backend Developer",
	// 		description:
	// 			"I am a backend developer. I can integrate user-facing elements with server side logic and build applications with speed and scalability.",
	// 		imgUrl: images.about04,
	// 	},
	// 	{
	// 		title: "Frontend Developer",
	// 		description:
	// 			"I am a frontend developer with a passion for building beautiful and functional web applications.",
	// 		imgUrl: images.about01,
	// 	},
	// ];

	return (
		<>
			<h2 className='head-text'>
				I Know that <span>Good Dev </span> <br /> means{" "}
				<span>Good Business</span>
			</h2>

			<div className='app__profiles'>
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className='app__profile-item'
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className='bold-text' style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className='p-text' style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(About, "about");
