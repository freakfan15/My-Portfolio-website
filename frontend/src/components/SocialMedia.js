import React from "react";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className='app__social'>
			<div>
				<a target="__blank" href='https://www.linkedin.com/in/vivek--kumar/'>
					<BsLinkedin />
				</a>
			</div>
			<div>
				<a target="__blank" href='https://twitter.com/vivek_raiii'>
					<BsTwitter />
				</a>
			</div>
			<div>
				<a target="__blank" href='https://www.instagram.com/vivek_raiii/'>
					{" "}
					<BsInstagram />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
