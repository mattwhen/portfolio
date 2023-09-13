import React from 'react';


const Contact = () => {
  return (
    <>
      <div className='footer-section flex flex-col items-center bg-slate-100 mb-10' id='contact'>
        <div>
          <h2 className='text-3xl font-bold'>Let&apos;s keep in touch!</h2>
        </div>
        <div className='py-10'>
         <button className='rounded-md border border-black p-4 hover:bg-cyan-500 hover:border-cyan-500'><a href='mailto:matt@mattwhen.com'>Contact me!</a></button>
        </div>
      </div>
    </>
  );
}

export default Contact;
