import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import RealMovieCatalog from '/public/images/movie-catalog.png';
import thingamabobs from '/public/images/treethingamabobs-live-screenshot.png';
import fetchcoin from '/public/images/fetchcoin.png';

const Projects = () => {
	const cardData = [
		{
			name: ['Fetchcoin', 'Reel Movie Catalog', 'Thingamabobs'],
			description: [
				'A web application that integrates the CoinStats API to display current prices of the top cryptocurrencies.',
				'Reel Movie Catalog (RMC) is a web application focused on providing users with a user-friendly platform to access and explore a diverse array of movies from a dynamic database.',
				'A full stack e-commerce application that allows users to browse a catalog of items, and proceed to check out. Utilizes user authentcation, which would allow the user to view the entire catalog once a user is signed in.',
			],
			img: [fetchcoin, RealMovieCatalog, thingamabobs],
			github: [
				'https://github.com/mattwhen/fetchcoin',
				'https://github.com/mattwhen/movie-catalog',
				'https://github.com/treecao/thingamabobs',
			],
			deployment: [
				'https://mattwhen.github.io/fetchcoin/',
				'https://movie-catalog-ecru.vercel.app/',
				'https://treethingamabobs.herokuapp.com/',
			],
			alt: [
				'fetchcoin project screenshot',
				'Movie Catalog project screenshot',
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
													src={cardData[0].img[0]}
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
												<a
													href={cardData[0].github[0]}
													target='_blank'
													className='hover:text-sky-500'
												>
													<span className='px-2'>Github</span>
													<AiFillGithub className='text-3xl display: inline-block' />
												</a>

												<a
													href={cardData[0].deployment[0]}
													target='_blank'
													className='hover:text-sky-500'
												>
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
												<a
													href={cardData[0].github[1]}
													target='_blank'
													className='hover:text-sky-500'
												>
													<span className='px-2'>Github</span>
													<AiFillGithub className='text-3xl display: inline-block' />
												</a>

												<a
													href={cardData[0].deployment[1]}
													target='_blank'
													className='hover:text-sky-500'
												>
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
													src={cardData[0].img[2]}
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
												<a
													href={cardData[0].github[2]}
													target='_blank'
													className='hover:text-sky-500'
												>
													<span className='px-2'>Github</span>
													<AiFillGithub className='text-3xl display: inline-block' />
												</a>

												<a
													href={cardData[0].deployment[2]}
													target='_blank'
													className='hover:text-sky-500'
												>
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
				</div>
			</section>
		</div>
	);
};

export default Projects;
