"use client";

import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import '../globals.css';

const Hamburger = () => {
	// useState returns an array with exactly two values
	// 1. The current state.
	// 2. The set function that lets you update the state to a different value
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
					<div className='hamburger-icon'>
						<a
							href='#home'
							className='text-4xl flex align-middle text-gray-500 md:hidden lg:hidden'
							onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
						>
							{navOpen ? (
								<RxCross1 className='z-50 transition-all' />
							) : (
								<GiHamburgerMenu className='' />
							)}
						</a>
					</div>
				<section className='js-mobile-menu md:hidden lg:hidden'>
					<ul
						className={navOpen ? 'show-mobile-nav bg-white' : 'hide-mobile-nav'}
					>
						<li className=' border-gray-400'>
							<a
								href='#resume'
								onClick={() => {
									document.body.scrollTop = 0;
									document.documentElement.scrollTop = 0;
									return navOpen ? setNavOpen(false) : setNavOpen(true);
								}}
							>
								RESUME
							</a>
						</li>
						<li className=' border-gray-400 '>
							<a
								href='#projects'
								onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
							>
								PROJECTS
							</a>
						</li>
						<li className=' border-gray-400 '>
							<a
								href='#contact'
								onClick={() => (navOpen ? setNavOpen(false) : setNavOpen(true))}
							>
								CONTACT
							</a>
						</li>
					</ul>
				</section>
		</>
	);
};

export default Hamburger;
