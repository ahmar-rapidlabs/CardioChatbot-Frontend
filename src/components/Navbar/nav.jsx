import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import navlogo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="main_navbar">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-auto w-32" src={navlogo} alt="" />
            <span className="sr-only">Company Name</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          {!mobileMenuOpen && (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" onClick={closeMobileMenu} isActive={location.pathname === '/'}>Home</NavLink>
          <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>About Us</NavLink>
          <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>Features</NavLink>
          <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>Testimonials</NavLink>
          <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>FAQ</NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 text-white lg:justify-end">
          <Link to="/" className="md:bg-red-600 md:px-3 md:py-2 md:rounded-lg md:hover:bg-red-700" onClick={closeMobileMenu}>
            Contact us
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed bg-slate-50 inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={navlogo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/30">
              <div className="space-y-2 py-8 flex flex-col">
                <NavLink to="/" onClick={closeMobileMenu} isActive={location.pathname === '/'}>Home</NavLink>
                <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>About Us</NavLink>
                <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>Features</NavLink>
                <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>Testimonials</NavLink>
                <NavLink to="" onClick={closeMobileMenu} isActive={location.pathname === ''}>FAQ</NavLink>
              </div>
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block hover:bg-red-700 rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                  onClick={closeMobileMenu}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

function NavLink({ to, onClick, isActive, children }) {
  return (
    <Link
      to={to}
      className={`text-sm font-semibold rounded-lg px-3 py-2.5 leading-6 md:hover:bg-transparent hover:bg-red-700 md:hover:text-black hover:text-white ${isActive ? 'border-b-2' : ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
