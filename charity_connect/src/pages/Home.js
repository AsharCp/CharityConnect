import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
      <div className='w-full h-auto flex justify-center pt-5 flex-col items-center mb-3'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-5xl sm:text-6xl font-bold max-w-3xl text-center p-4'>Those who are <span className='text-blue-color hover:text-green-color'>happiest</span> are those who do the <span className='text-blue-color hover:text-green-color'>most</span> for others!</p>
          <Link to="donate"><button className='bg-green-color px-10 rounded-md hover:bg-blue-color py-2 text-xl font-semibold text-white my-5'>Donate Now</button></Link>
          
        </div>
        <div className='flex justify-center w-full p-4'>
              <img className='rounded w-11/12 h-500' src='/homeImage.jpg' alt='Home Image' />
        </div>
        <p className='py-3 font-semibold text-xl underline'>TOP DONATIONS COMPANY</p>
        <div className='border flex justify-between items-center w-10/12 text-lg p-2 font-semibold sm:text-2xl'>
          <p>ASHAR JAMAN CP</p>
          <p className='text-green-color font-bold'>3000 INR</p>
        </div>
        <div className='border flex justify-between items-center w-10/12 text-lg p-2 font-semibold sm:text-2xl'>
          <p>NIYAS MUHAMMED</p>
          <p className='text-green-color font-bold'>5000 INR</p>
        </div>
        <div className='border flex justify-between items-center w-10/12 text-lg p-2 font-semibold sm:text-2xl'>
          <p>FAHAD KC</p>
          <p className='text-green-color font-bold'>4000 INR</p>
        </div>
        <div className='border flex justify-between items-center w-10/12 text-lg p-2 font-semibold sm:text-2xl'>
          <p>MURSHID KC</p>
          <p className='text-green-color font-bold'>8000 INR</p>
        </div>
        <div className='border flex justify-between items-center w-10/12 text-lg p-2 font-semibold sm:text-2xl'>
          <p>MIDHUN V</p>
          <p className='text-green-color font-bold'>6000 INR</p>
        </div>
        {/* About section */}
        <div className=' h-auto p-3 w-full mt-5 flex flex-col justify-center items-center'>
          <div className='w-11/12 p-3 rounded bg-slate-200'>
            <div className='p-3 rounded bg-white'>
              <p className='font-bold text-blue-color'>Welcome to charity connect...</p>
            </div>
            <div className='p-4 text-md'>
              <p>Charity Connect is more than just a website; it's a bridge connecting passionate individuals with the causes they care about and the educational resources they need. Here, you'll find everything you need to get involved and make a difference:</p>
              <ol className='ml-8 list-disc'>
                <li>Giving opportunities: Explore a variety of charitable initiatives aligned with your interests. We make it easy to donate securely and directly to the causes that resonate with you.</li>
                <li>Volunteer matching: Discover fulfilling volunteer opportunities that match your skills and schedule. Our personalized matching service connects you with the perfect cause to contribute your time and talents.</li>
                <li>Educational resources: Access a wealth of informative resources designed to empower you and your community. Learn about different social issues, fundraising strategies, and the impact of charitable giving.</li>
                <li>Community connections: Network with other like-minded individuals who share your passion for giving back. Together, we can build a stronger and more compassionate world.</li>
              </ol>
            </div>
          </div>

        </div>
        
        <footer className='bg-black h-24 w-11/12 text-white flex flex-col justify-center items-center mt-5'>
          <p>&copy; 2024 CharityConnect. All rights reserved.</p>
          <p>Designed by Ashar</p>
        </footer>
      </div>
      
  )
}

export default Home