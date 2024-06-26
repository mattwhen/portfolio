import React from 'react';
import { TfiEmail } from 'react-icons/tfi';

const Contact = () => {
	return (
		<>
    <div className='mt-12'>
			<div
				className='footer-section flex flex-col items-center bg-slate-100 pb-20'
				id='contact'
			>
				<div className='mb-10'>
					<h2 className='text-3xl font-bold'>Contact</h2>
				</div>
				<div className='flex justify-center items-center w-96 md:justify-between'>
					<TfiEmail className='text-3xl md:text-4xl' />
          <a href='mailto:matt.nguyen741@gmail.com' className='text-lg ml-3 md:text-2xl hover:cursor-pointer hover:hover:text-sky-500'>matt.nguyen741@gmail.com</a>
				</div>
			</div>
    </div>
		</>
	);
};

export default Contact;