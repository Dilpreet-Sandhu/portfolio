import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 mt-10 flex justify-between items-center flex-wrap gap-5'>
        <div className="text-white-500 flex gap-2">
           <p>Terms and Conditions</p>
           <p>|</p>
           <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <a target="_blank" href="https://github.com/Dilpreet-Sandhu/">
            <div className='social-icon'>
                <img className="w-1/2 h-1/2" src={'/assets/github.svg'} alt="github"/>
            </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/dilpreet_sandhu224/">
            <div className='social-icon'>
                <img className="w-1/2 h-1/2" src={'/assets/instagram.svg'} alt="github"/>
            </div>
            </a>
            
        </div>
    </section>
  )
}

export default Footer
