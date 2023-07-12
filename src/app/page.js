import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import ProfileImg from '/public/profilePic.jpeg';
import cultureCruncher from '/public/cultureCruncher-live-app.png';
import thingamabobs from '/public/treethingamabobs-live-screenshot.png';
import newsletter from '/public/newsletter-homepage-screenshot.png';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Matthew Nguyen</title>
				<meta name='description' content='Generated by Matt'></meta>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>

			<main className='bg-white px-10 md:px-20'>
				<section className=' min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className='text-2xl font-burtons text-teal-600'>Portfolio</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill className='cursor-pointer text-2xl' />
							</li>
							<li>
								<a
									className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-4 py-2 ml-8'
									href='https://docs.google.com/document/d/1T551yPK1OGZIGVlfL3N4OmPsiL8Me3Vy_8FndueXiO8/edit?usp=sharing'
									target='_blank'
								>
									Resume
								</a>
							</li>
							{/* <li>
								<a
									className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-4 py-2 ml-8'
									href='#'
								>
									Projects
								</a>
							</li>
							<li>
								<a
									className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-4 py-2 ml-8'
									href='#'
								>
									Contact
								</a>
							</li> */}
						</ul>
					</nav>
					<div className='text-center p-10 py-10'>
						<h2 className='text-5xl py-2 text-teal-600 font-medium'>
							Matthew Nguyen
						</h2>
						<h3 className='text-2xl py-2 my-5'>Web Developer</h3>
						<p className='text-md py-2 leading-8 text-gray-800'>
							Full stack developer with a passion creating beautiful designs!
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
						<a href='https://twitter.com/mattwhendev' target='_blank'>
							<AiFillTwitterCircle />
						</a>
						<a
							href='https://www.linkedin.com/in/matthew-nguyen-1724b9132/'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</div>
					<div className='relative mx-auto mt-20 w-100 h-100 rounded-full flex justify-center'>
						<Image
							className='shadow-lg rounded-full max-w-full h-80 w-80 align-middle border-none '
							src={ProfileImg}
							alt='Profile image'
						/>
					</div>
				</section>
				{/* Services section */}
				<section>
					<div>
						<h3 className='text-3xl py-5'>About Me</h3>
						<p className='text-md py-4 leading-8'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Pharetra convallis posuere morbi leo urna molestie at elementum
							eu. Cursus sit amet dictum sit amet justo donec enim. Aliquet eget
							sit amet tellus cras adipiscing.
						</p>
						<p className='text-md py-4 leading-8 text-gray-800'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor <span className=' text-teal-300'>incididunt</span>{' '}
							ut labore et dolore magna aliqua. Pharetra convallis posuere morbi
							leo urna molestie at elementum eu. Cursus sit amet dictum sit amet
							justo donec enim. Aliquet eget sit amet tellus cras adipiscing. 
						</p>
					</div>
				<div className='space-x-5 my-10'>
					<div className='text-center shadow-xl max-w-md p-10'>
						<Image
							className='rounded-lg '
							src={cultureCruncher}
							alt='cultureCruncher project screenshot'
						/>
						<p className='text-gray-800 py-3'>Culture Cruncher</p>
						<p className='text-gray-800 py-3'>Created by:</p>
						<p className='text-gray-800 py-3'>Culture Cruncher</p>
					</div>
					<div className='text-center shadow-xl max-w-md py-10'>
						<Image 
							className='rounded-lg'
							src={thingamabobs}
							alt='screenshot of application'
						/>
						<p>test</p>
						<p>test</p>
					</div>
					<div className='text-center shadow-xl max-w-md py-10'>
						<Image 
							className='rounded-lg'
							src={newsletter}
							alt='screenshot of application'
						/>
						<p>test</p>
						<p>test</p>
					</div>
				</div>
				</section>
				<div></div>
			</main>
		</div>
	);
}
