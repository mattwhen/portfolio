import Head from 'next/head';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import Hamburger from './Components/Hamburger';
import ProfileImg from '/public/images/profilePic.jpeg';
import cultureCruncher from '/public/images/cultureCruncher-live-app.png';
import thingamabobs from '/public/images/treethingamabobs-live-screenshot.png';
import newsletter from '/public/images/newsletter-homepage-screenshot.png';
import Footer from './Components/Footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Matthew Nguyen</title>
				<meta name='description' content='Generated by Matt'></meta>
				<link rel='icon' href=''>
					👨🏻‍💻
				</link>
			</Head>

			<main className='bg-white px-10 md:px-20'>
				<section id='about-me-section' className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className='text-3xl font-burtons text-stone-950'>Portfolio</h1>
						<ul className='flex items-center'>
							<li>
								<a
									href='https://docs.google.com/document/d/1T551yPK1OGZIGVlfL3N4OmPsiL8Me3Vy_8FndueXiO8/edit?usp=sharing'
									target='_blank'
								>
									<button className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-100'>
										Resume
									</button>
								</a>
							</li>
							<li>
								<a href='#projects'>
									<button className=' text-black  ml-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:duration-100'>
										Projects
									</button>
								</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10'>
						<h2 className='text-5xl py-2 text-cyan-600 font-medium'>
							Matthew Nguyen
						</h2>
						<h3 className='text-2xl py-2 my-5'>Web Developer</h3>
						<p className='text-md py-2 leading-8 text-gray-800'>
							Hi, my name is Matthew Nguyen, and I am Frontend developer based
							in Houston, TX 🤘🏻
						</p>
					</div>
					<div className='relative shadow-lg mx-auto mt-20 rounded-md justify-around  md: grid justify-items-center'>
						<Image
							className='shadow-lg rounded-md max-w-full align-middle border-none'
							src={ProfileImg}
							alt='self-portrait'
						/>
						<div className='px-5'>
							<h3 className='text-3xl py-5 mt-5 px-4'>About Me</h3>
							<div className='text-md py-4 px-4 leading-8'>
								<p className='my-5'>
									My passion in creating beautiful web designs is what led me to
									become a Frontend developer. Look forward to working with you!
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* PROJECT SECTION START HERE */}
				<section id='project-section'>
					<div className='mt-20 mb-10'>
						<h3 id='projects' className='text-3xl my-4 text-center'>
							Projects
						</h3>
						<div className='text-center max-w-sm py-10 md:max-w-3xl flex flex-col gap-y-20'>
							<div id='project-1' className=' shadow-lg'>
								<a
									href='https://dbradley555.github.io/culture-cruncher/'
									target='_blank'
								>
									<Image
										className='rounded-lg'
										src={cultureCruncher}
										alt='cultureCruncher project screenshot'
									/>
								</a>
								<p className='text-gray-800 py-8 text-2xl'>Culture Cruncher</p>
								<p className='text-md py-5'>
									A web application that displays specific about a country such
									as currency and population. Renders a Youtube video that
									displays a common cuisine in that region.
								</p>
								<div className='flex justify-around py-8'>
									<div className='flex gap-10'>
										<a
											href='https://github.com/dbradley555/culture-cruncher'
											target='_blank'
										>
											<span className='px-2'>Github</span>
											<AiFillGithub className='text-3xl display: inline-block' />
										</a>

										<a
											href='https://dbradley555.github.io/culture-cruncher/'
											target='_blank'
										>
											<span className='px-2'>Try it out!</span>
											<FiExternalLink className='text-3xl display: inline-block' />
										</a>
									</div>
								</div>
							</div>

							<div id='project-2' className=' shadow-lg'>
								<a
									href='https://github.com/treecao/thingamabobs'
									target='_blank'
								>
									<Image
										className='rounded-lg'
										src={thingamabobs}
										alt='e-commerce landing page screenshot'
									/>
								</a>
								<p className='text-gray-800 py-8 text-2xl'>Thingamabobs</p>
								<p className='text-md py-5'>
									A full stack e-commerce application that allows users to
									browse a catalog of items, and proceed to check out. Utilizes
									user authentcation, which would allow the user to view the
									entire catalog once a user is signed in.
								</p>
								<div className='flex justify-around py-8'>
									<div className='flex gap-10'>
										<a
											href='https://github.com/treecao/thingamabobs'
											target='_blank'
										>
											<span className='px-2'>Github</span>
											<AiFillGithub className='text-3xl display: inline-block' />
										</a>

										<a
											href='https://treethingamabobs.herokuapp.com/'
											target='_blank'
										>
											<span className='px-2'>Try it out!</span>
											<FiExternalLink className='text-3xl display: inline-block' />
										</a>
									</div>
								</div>
							</div>
							<div id='project-3' className=' shadow-lg'>
								<a
									href='https://mattwhen.github.io/newsletter-signup/'
									target='_blank'
								>
									<Image
										className='rounded-lg'
										src={newsletter}
										alt='cultureCruncher project screenshot'
									/>
								</a>
								<p className='text-gray-800 py-8 text-2xl'>
									Newsletter landing page
								</p>
								<p className='text-md py-5'>A full stack </p>
								<div className='flex justify-around py-8'>
									<div className='flex gap-10'>
										<a
											href='https://github.com/mattwhen/newsletter-signup'
											target='_blank'
										>
											<span className='px-2'>Github</span>
											<AiFillGithub className='text-3xl display: inline-block' />
										</a>

										<a
											href='https://mattwhen.github.io/newsletter-signup/'
											target='_blank'
										>
											<span className='px-2'>Try it out!</span>
											<FiExternalLink className='text-3xl display: inline-block' />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* PROJECT SECTION ENDS HERE */}
			</main>
			<Footer />
		</div>
	);
}
