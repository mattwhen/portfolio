import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import cultureCruncher from '/public/images/cultureCruncher-live-app.png';
import thingamabobs from '/public/images/treethingamabobs-live-screenshot.png';
import newsletter from '/public/images/newsletter-homepage-screenshot.png';
import fetchcoin from '/public/images/fetchcoin.png';

const Projects = () => {
	return (
		<div>
			<section id='project-section' className='lg: flex justify-center'>
				<div className='mb-20 lg:mt-0' id='projects'>
					<h3 className='text-3xl text-center mt-20 font-bold'>Projects</h3>
					<div className='text-center max-w-sm py-10 md:max-w-3xl flex flex-col gap-y-20'>
						<div id='project-1' className='p-5 shadow-md '>
							<div className='flex justify-center'>
								<a href='https://mattwhen.github.io/fetchcoin/' target='_blank' className='md:w-3/4'>
									<Image
										className='rounded-lg w-full md:w-full'
										src={fetchcoin}
										alt='fetchcoin project screenshot'
									/>
								</a>
							</div>
							<p className='text-gray-800 py-8 text-2xl'>Fetchcoin</p>
							<p className='text-md py-5'>
								A web application that integrates the Postman API to display
								current prices of the top cryptocurrencies.
							</p>
							<div className='flex justify-around py-8'>
								<div className='flex gap-10'>
									<a
										href='https://github.com/mattwhen/fetchcoin'
										target='_blank'
									>
										<span className='px-2'>Github</span>
										<AiFillGithub className='text-3xl display: inline-block' />
									</a>

									<a
										href='https://mattwhen.github.io/fetchcoin/'
										target='_blank'
									>
										<span className='px-2'>Try it out!</span>
										<FiExternalLink className='text-3xl display: inline-block' />
									</a>
								</div>
							</div>
						</div>
						<div id='project-2' className=' p-5 shadow-md hover:bg-zinc-100'>
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
								A web application that displays specific about a country such as
								currency and population. Renders a Youtube video that displays a
								common cuisine in that region.
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

						<div id='project-3' className=' p-5 shadow-md hover:bg-zinc-100'>
							<a href='https://github.com/treecao/thingamabobs' target='_blank'>
								<Image
									className='rounded-lg'
									src={thingamabobs}
									alt='e-commerce landing page screenshot'
								/>
							</a>
							<p className='text-gray-800 py-8 text-2xl'>Thingamabobs</p>
							<p className='text-md py-5'>
								A full stack e-commerce application that allows users to browse
								a catalog of items, and proceed to check out. Utilizes user
								authentcation, which would allow the user to view the entire
								catalog once a user is signed in.
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
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
