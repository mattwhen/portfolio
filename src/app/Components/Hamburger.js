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

	
	const navOpenHandler = () => {
		if (navOpen) {
			document.body.style.overflow = 'visible';
			setNavOpen(false);
		} else {
			document.body.style.overflow = 'hidden';
			setNavOpen(true);
		}
		
	}

	return (
		<>
					<div className='hamburger-icon'>
						<a
							href='#home'
							className='text-4xl flex align-middle text-black md:hidden lg:hidden'
							onClick={navOpenHandler}
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
								href='https://docs.google.com/document/d/1PZulJi5XldPfTHpE1n50ucLkwBEiDmUWwMJ7oQZJ5_c/edit?usp=sharing'
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
