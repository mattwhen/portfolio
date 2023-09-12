import React from 'react';
import Image from 'next/image';
import ProfileImg from '/public/images/profilePic.jpeg';

const About = () => {
  return (
    <>
      <div className='flex flex-col'>
						<div className='flex justify-center'>
							<Image
								className='rounded-md'
								height={250}
								width={250}
                                sizes={200}
								src={ProfileImg}
								alt='self-portrait'
							/>
						</div>
					</div>
    </>
  );
}

export default About;
