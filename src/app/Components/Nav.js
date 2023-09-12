import React from 'react';
import Hamburger from './Hamburger';

const Nav = () => {
  return (
    <>
      	<nav className='py-5 flex align-middle justify-between shadow-sm z-50 fixed w-full bg-white'>
					<div className='flex justify-between'>
						<h1 className='text-right sm:pl-5 sm:text-lg lg:visible lg:text-2xl flex items-center font-bold text-stone-950 pl-10'>
							<a
								onClick={() => location.reload()}
								className='hover:cursor-pointer hover:text-cyan-500'
							>
								mattwhen.com
							</a>
						</h1>
					</div>
					<div className='pr-5'>
						<Hamburger className='text-2xl lg:hidden' />
					</div>
					<ul className='sm:hidden lg:flex justify-around items-center'>
						<li>
							<a
								href='https://docs.google.com/document/d/1T551yPK1OGZIGVlfL3N4OmPsiL8Me3Vy_8FndueXiO8/edit?usp=sharing'
								target='_blank'
							>
								<button className='invisible lg:visible rounded-md mx-5 py-2 px-2 font-bold hover:text-cyan-500'>
									Resume
								</button>
							</a>
						</li>
						<li>
							<a href='#projects'>
								<button className='invisible lg:visible  rounded-md mx-5 py-2 px-2 font-bold hover:text-cyan-500'>
									Projects
								</button>
							</a>
						</li>
					</ul>
				</nav>
    </>
  );
}

export default Nav;
