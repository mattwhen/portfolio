import React from 'react';
import Image from 'next/image';
import ProfileImg from '/public/images/profilePic.jpeg';

const About = () => {
	return (
		<>
			<div className='about-me flex flex-col'>
				<h2 className='fade-in-text text-3xl font-bold text-center mb-10'>About Me</h2>
                <div className='profile-icon flex justify-center mb-10'>
					<Image
						className='rounded-full w-56 h-56 border-4 border-black'
						height={250}
						width={250}
						sizes={200}
						src={ProfileImg}
						alt='self-portrait'
					/>
                    <div className='profile-icon-border'></div>
				</div>
				<p className='pb-4 lg:text-center'>
					My interest in creating responsive web applications and beautiful
					designs is what sparked my interest in web development.
				</p>
				<p className='pb-16 lg:text-center'>
					I love to problem solve and learn new concepts. I learn the most
					building apps, watching Udemy courses, and collaborating with other
					developers!
				</p>
				<h2 className='text-center underline underline-offset-1 pb-8 text-2xl'>
					Tech Stack
				</h2>
				<ul className='mb-28'>
                    <div className='flex flex-col items-center justify-center'>
					<li href='https://skillicons.dev' className='pb-8'>
						<img src='https://skillicons.dev/icons?i=html,css,javascript,react' />
					</li>
					<li href='https://skillicons.dev'>
						<img src='https://skillicons.dev/icons?i=git,vercel,nodejs,mongodb' />
					</li>
                    </div>
				</ul>
			
				<div></div>
			</div>
		</>
	);
};

export default About;
