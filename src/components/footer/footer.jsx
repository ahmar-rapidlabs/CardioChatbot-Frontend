import React from 'react'
import logo from '../../assets/logo/logo_light.png'
function footer() {
  return (
    <>
    <footer className="w-full md:px-12 px-4 py-4 flex-shrink-0 footer_main_tag text-white">
    <div className="container py-4">
        <div className="flex md:flex-row flex-col py-4 px-5">
            <div className="">
                    <span><img src={logo} alt="logo.png"  className="h-auto max-w-full me-2"/></span>
                    <p className="mt-4 w-48 text-light">Empowering your health with trusted advice and actionable tips.</p>
            </div>
            <div className="md:ms-auto md:mt-0 mt-6">
                <h5 className="text-white mb-3 text-2xl font-semibold">Support</h5>
                <ul className="list-none text-white">
                    <li><a href="#">FAQ</a></li>
                    <li className='py-4'><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Services</a></li>
                </ul>
            </div>
            <div className="md:ms-16 md:mt-0 mt-6">
                <h5 className="text-white mb-3 text-2xl font-semibold">Product</h5>
                <ul className="list-none text-white">
                    <li><a href="#">Pricing</a></li>
                    <li className='py-4'><a href="#">Customer</a></li>
                    <li><a href="#">Product</a></li>
                </ul>
            </div>
            
        </div>
    </div>
    <div className="container">
        <small className="small mb-0">&copy; 2024 Cardio Bot. All rights reserved </small>
    </div>
</footer>
    
    </>
  )
}

export default footer