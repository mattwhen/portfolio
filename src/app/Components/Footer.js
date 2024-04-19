import React from 'react';
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
	return (
        <footer className='flex flex-col justify-center  bg-slate-200 py-10 font-bold'>
			<div className='flex justify-center items-center gap-10 text-4xl'>
				<a href='https://github.com/mattwhen/' target='_blank'>
					<AiFillGithub />
				</a>
				<a
					href='https://www.linkedin.com/in/matthew-nguyen-1724b9132/'
					target='_blank'
				>
					<AiFillLinkedin />
				</a>
				<a href='https://twitter.com/MatthewxNguyen' target='_blank'>
					<AiFillTwitterCircle />
				</a>
			</div>
			<div className='text-black text-center mt-8 text-sm'>
				© 2023 Matthew A. Nguyen. All Rights Reserved.
			</div>
        </footer>

	);
};

export default Footer;
