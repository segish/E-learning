import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <div className='flex flex-col border-t-2 bottom-0 mb-0'>
      <div className='w-full  bg-blue-950 dark:bg-black py-16 px-4 grid sm:grid-cols-1 lg:grid-cols-2 gap-8 text-gray-300 '>
        <div className=''>
          <div className='flex flex-col'>
            <div className='bg-logo-image px-2 py-2 w-12 h-12 bg-cover' />
            <h1 className='text-3xl font-bold mr-4 hover:text-orange-500 sm:text-4xl cursor-pointer'> NERD</h1>
          </div>
          <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FacebookIcon size={30} />
            <InstagramIcon size={30} />
            <LinkedInIcon size={30} />
            <TwitterIcon size={30} />
          </div>
        </div>
        <div className='grid  grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
          <div className='flex flex-col '>
            <h6 className='font-medium text-white'>Courses</h6>
            <ul>
              <li className='py-2 text-sm'>Tech</li>
              <li className='py-2 text-sm'>Graphic Design</li>
              <li className='py-2 text-sm'>Python</li>
              <li className='py-2 text-sm'>JavaScript</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h6 className='font-medium text-white'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h6 className='font-medium text-white'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h6 className='font-medium text-white'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;