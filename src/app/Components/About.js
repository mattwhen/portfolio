import React from 'react';
import Image from 'next/image';
import ProfileImg from '/public/images/profilePic.jpeg';

const About = () => {
	return (
		<div id='about'>
			<h2 className='fade-in-text text-3xl font-bold text-center mb-10 lg:mb-28 lg:mt-28 lg:pt-10'>
				About Me
			</h2>
            <div className='flex justify-center'>
			<div className='about-me-grid flex flex-col mb-20 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:mb-40 lg:auto-cols-min lg:w-1/2'>
				<div className='profile-wrapper'>
					<div className='profile-icon flex justify-center mb-10'>
						<Image
							className='rounded-full w-56 h-56 border-4 border-black lg:w-80 lg:h-80 lg:rounded-md'
							height={250}
							width={250}
							sizes={200}
							src={ProfileImg}
							alt='self-portrait'
						/>
					</div>
				</div>
				<div className='about-me-paragraph leading-10 lg:flex lg:flex-col lg:justify-center'>
					<p className='pb-4 lg:text-start lg:justify-center lg:pl-10 lg:pr-10'>
						My interest in creating responsive web applications and beautiful
						designs is what sparked my interest in web development.
					</p>
					<p className='pb-16 lg:text-start lg:pl-10 lg:pr-10'>
						I love to problem solve and learn new concepts. I learn the most
						building apps, watching Udemy courses, and collaborating with other
						developers!
					</p>
					<p className='pb-16 lg:text-start lg:pl-10 lg:pr-10'>
						In my free time, I like to travel, run outdoors, play video games. Also, don&apos;t judge me for this, but I LOVE to eat!
					</p>
				</div>
			</div>
            </div>
			<div className='my-tech-stack'>
				<h2 className='text-center text-slate-800 underline underline-offset-1 pb-8 text-2xl'>
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
			</div>
		</div>
	);
};

export default About;
