import React from 'react';
import Hamburger from './Hamburger';


const Nav = () => {
	const mapNavHeader = [
		{
			id: 0,
			name: 'About',
			href: '#about',
		},
		{
			id: 1,
			name: 'Projects',
			href: '#projects'
		},
		{
			id: 2,
			name: 'Contact',
			href: '#contact'
		},
	];
	return (
		<>
			<nav className='py-5 flex align-middle justify-between shadow-sm z-50 fixed w-full bg-white'>
				<div className='flex justify-between'>
					<h1 className='text-right sm:pl-5 sm:text-lg lg:visible lg:text-2xl flex items-center font-bold text-stone-950 pl-10'>
						<a
							onClick={() => location.reload()}
							className='hover:cursor-pointer hover:text-sky-500 transition-colors'
						>
							matthew-nguyen.dev
						</a>
					</h1>
				</div>
				<div className='pr-5'>
					<Hamburger className='text-2xl lg:hidden' />
				</div>
				<ul className='sm:hidden lg:flex justify-around items-center'>
					{mapNavHeader.map((item) => {
						return (
						<li key={item.id}>
							<a href={item.href} className='mx-5'>
								<button className='invisible lg:visible font-bold hover:text-sky-500 transition-colors'>
									{item.name}
								</button>
							</a>
						</li>
						)
					})}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
