import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import cultureCruncher from '/public/images/cultureCruncher-live-app.png';
import thingamabobs from '/public/images/treethingamabobs-live-screenshot.png';
import fetchcoin from '/public/images/fetchcoin.png';

const Projects = () => {
	const cardData = [
		{
			name: ['Fetchcoin', 'Culture Cruncher', 'Thingamabobs'],
			description: [
				'A web application that integrates the Postman API to display current prices of the top cryptocurrencies.',
				'A web application that displays specific about a country such ascurrency and population. Renders a Youtube video that displays acommon cuisine in that region.',
				'A full stack e-commerce application that allows users to browse a catalog of items, and proceed to check out. Utilizes user authentcation, which would allow the user to view the entire catalog once a user is signed in.',
			],
			img: [cultureCruncher, thingamabobs, fetchcoin],
			github: [
				'https://github.com/mattwhen/fetchcoin',
				'https://github.com/dbradley555/culture-cruncher',
				'https://github.com/treecao/thingamabobs',
			],
			deployment: [
				'https://mattwhen.github.io/fetchcoin/',
				'https://dbradley555.github.io/culture-cruncher/',
				'https://treethingamabobs.herokuapp.com/',
			],
			alt: [
				'fetchcoin project screenshot',
				'Culture Cruncher project screenshot',
				'Thingamabobs project screenshot',
			],
		},
	];
	return (
		<div>
			<section id='project-section' className='lg: flex justify-center'>
				<div className='mb-20 lg:mt-0' id='projects'>
					<h3 className='text-3xl text-center mt-20 font-bold'>Projects</h3>
					<div className='text-center max-w-sm py-10 md:max-w-3xl flex flex-col gap-y-20'>
						{cardData.map((card) => {
							return (
								<div key={card.id}>
									<div className='shadow-md mb-12'>
										<div className='flex justify-center '>
											<a href={cardData[0].github[0]}>
												<Image
													className='rounded-lg'
													src={cardData[0].img[2]}
													alt='fetchcoin project screenshot'
												/>
											</a>
										</div>
										<h2 className='text-gray-800 py-8 text-2xl'>
											{cardData[0].name[0]}
										</h2>
										<p className='px-5'>{cardData[0].description[0]}</p>
										<div className='flex justify-around py-8'>
											<div className='flex gap-10'>
												<a href={cardData[0].github[0]} target='_blank' className='hover:text-sky-500'>
													<span className='px-2'>Github</span>
													<AiFillGithub className='text-3xl display: inline-block' />
												</a>

												<a href={cardData[0].deployment[0]} target='_blank' className='hover:text-sky-500'>
													<span className='px-2'>Try it out!</span>
													<FiExternalLink className='text-3xl display: inline-block' />
												</a>
											</div>
										</div>
									</div>
									<div className='shadow-md mb-12'>
										<div className='fex justify-center'>
											<a href={cardData[0].github[1]}>
												<Image
													className='rounded-lg'
													src={cardData[0].img[1]}
													alt='fetchcoin project screenshot'
												/>
											</a>
										</div>
										<h2 className='text-gray-800 py-8 text-2xl'>
											{cardData[0].name[1]}
										</h2>
										<p className='px-5'>{cardData[0].description[1]}</p>
										<div className='flex justify-around py-8'>
											<div className='flex gap-10'>
												<a href={cardData[0].github[1]} target='_blank' className='hover:text-sky-500'>
													<span className='px-2'>Github</span>
													<AiFillGithub className='text-3xl display: inline-block' />
												</a>

												<a href={cardData[0].deployment[1]} target='_blank' className='hover:text-sky-500'>
													<span className='px-2'>Try it out!</span>
													<FiExternalLink className='text-3xl display: inline-block' />
												</a>
											</div>
										</div>
									</div>
									<div className='shadow-md'>
										<div className='flex justify-center'>
											<a href={cardData[0].github[2]}>
												<Image
													className='rounded-lg'
													src={cardData[0].img[0]}
													alt='fetchcoin project screenshot'
												/>
											</a>
										</div>
										<h2 className='text-gray-800 py-8 text-2xl'>
											{cardData[0].name[2]}
										</h2>
										<p className='px-5'>{cardData[0].description[2]}</p>
										<div className='flex justify-around py-8'>
											<div className='flex gap-10'>
												<a href={cardData[0].github[2]} target='_blank' className='hover:text-sky-500'>
													<span className='px-2'>Github</span>
													<AiFillGithub className='text-3xl display: inline-block' />
												</a>

												<a href={cardData[0].deployment[2]} target='_blank' className='hover:text-sky-500'>
													<span className='px-2'>Try it out!</span>
													<FiExternalLink className='text-3xl display: inline-block' />
												</a>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					{/* <div className='text-center max-w-sm py-10 md:max-w-3xl flex flex-col gap-y-20'>
						<div id='project-1' className='p-5 shadow-md '>
							<div className='flex justify-center'>
								<a
									href='https://mattwhen.github.io/fetchcoin/'
									target='_blank'
									className='md:w-3/4'
								>
									<Image
										className='rounded-lg'
										src={fetchcoin}
										alt='fetchcoin project screenshot'
									/>
								</a>
							</div>
							<h2 className='text-gray-800 py-8 text-2xl'>Fetchcoin</h2>
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
							<h2 className='text-gray-800 py-8 text-2xl'>Culture Cruncher</h2>
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
							<h2 className='text-gray-800 py-8 text-2xl'>Thingamabobs</h2>
							<p className='text-md py-5'>
								A full stack e-commerce application that allows users to browse
								a catalog of items, and proceed to check out. Utilizes user
								authentication, which would allow the user to view the entire
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
					</div> */}
				</div>
			</section>
		</div>
	);
};

export default Projects;
