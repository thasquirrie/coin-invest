/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { logout } from '../actions/userActions';

const currencies = ['USD'];

const navigation = {
 pages: [
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '#' },
 ],
};

// function classNames(...classes) {
//  return classes.filter(Boolean).join(' ');
// }

export default function Example() {
 const [open, setOpen] = useState(false);

 const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin);

 const { userInfo } = userLogin;

 const clickHandler = () => {
  return setOpen(false);
 };

 const capitalize = (word) => {
  word = word.split('');
  word[0].toUpperCase();
  return word.join('');
 };

 console.log(capitalize('thasquirrie'));

 const logoutHandler = () => {
  console.log('Logout bitch!');
  dispatch(logout());
 };

 return (
  <div className='bg-white'>
   {/* Mobile menu */}
   <Transition.Root show={open} as={Fragment}>
    <Dialog
     as='div'
     className='fixed inset-0 flex z-40 lg:hidden'
     onClose={setOpen}
    >
     <Transition.Child
      as={Fragment}
      enter='transition-opacity ease-linear duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity ease-linear duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
     >
      <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
     </Transition.Child>

     <Transition.Child
      as={Fragment}
      enter='transition ease-in-out duration-300 transform'
      enterFrom='-translate-x-full'
      enterTo='translate-x-0'
      leave='transition ease-in-out duration-300 transform'
      leaveFrom='translate-x-0'
      leaveTo='-translate-x-full'
     >
      <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
       <div className='px-4 pt-5 pb-2 flex'>
        <button
         type='button'
         className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
         onClick={() => setOpen(false)}
        >
         <span className='sr-only'>Close menu</span>
         <XIcon className='h-6 w-6' aria-hidden='true' />
        </button>
       </div>

       <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
        {navigation.pages.map((page) => (
         <div key={page.name} className='flow-root'>
          <NavLink
           to={page.href}
           className='-m-2 p-2 block font-medium text-gray-900'
           onClick={() => setOpen(false)}
          >
           {page.name}
          </NavLink>
         </div>
        ))}
       </div>

       {userInfo ? (
        <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
         <div className='flow-root '>
          <NavLink
           to='/dashboard'
           className='-m-2 p-2 block font-medium text-gray-900'
           onClick={clickHandler}
          >
           {userInfo.user.email.split('@')[0]}
          </NavLink>
         </div>
         <div className='flow-root'>
          <NavLink
           to='/'
           className='-m-2 p-2 block font-medium text-gray-900'
           onClick={() => {
            clickHandler();
            logoutHandler();
           }}
          >
           Log out
          </NavLink>
         </div>
        </div>
       ) : (
        <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
         <div className='flow-root'>
          <NavLink
           to='/signup'
           className='-m-2 p-2 block font-medium text-gray-900'
           onClick={clickHandler}
          >
           Create an account
          </NavLink>
         </div>
         <div className='flow-root'>
          <NavLink
           to='/login'
           className='-m-2 p-2 block font-medium text-gray-900'
           onClick={clickHandler}
          >
           Sign in
          </NavLink>
         </div>
        </div>
       )}
      </div>
     </Transition.Child>
    </Dialog>
   </Transition.Root>

   <header className='relative'>
    <nav aria-label='Top'>
     {/* Top navigation */}
     <div className='bg-gray-900'>
      <div className='hidden max-w-7xl mx-auto h-10 px-4  items-center justify-between sm:px-6 lg:px-8'>
       {/* Currency selector */}
       <form>
        <div>
         <label htmlFor='desktop-currency' className='sr-only'>
          Currency
         </label>
         <div className='-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white'>
          <select
           id='desktop-currency'
           name='currency'
           className='bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent'
          >
           {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
           ))}
          </select>
          <div className='absolute right-0 inset-y-0 flex items-center pointer-events-none'>
           <svg
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
            className='w-5 h-5 text-gray-300'
           >
            <path
             stroke='currentColor'
             strokeLinecap='round'
             strokeLinejoin='round'
             strokeWidth='1.5'
             d='M6 8l4 4 4-4'
            />
           </svg>
          </div>
         </div>
        </div>
       </form>
      </div>
     </div>

     {/* Secondary navigation */}
     <div className='bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
       <div className='border-b border-gray-200'>
        <div className='h-16 flex items-center justify-between'>
         {/* Logo (lg+) */}
         <div className='hidden lg:flex-1 lg:flex lg:items-center'>
          <NavLink to='/'>
           <span className='sr-only'>Coin Invest</span>

           <h2 className='text-green-500 text-xl font-extrabold'>
            <span className='text-white font-extrabold text-3xl'>Coin</span>{' '}
            Invest
           </h2>
          </NavLink>
         </div>

         <div className='hidden h-full lg:flex'>
          {/* Flyout menus */}
          <Popover.Group className='px-4 bottom-0 inset-x-0'>
           <div className='h-full flex justify-center space-x-8'>
            {navigation.pages.map((page) => (
             <a
              key={page.name}
              href={page.href}
              className='flex items-center text-sm font-medium text-white hover:border-b-4 hover:border-red-900 hover:text-red-900 hover:border-current'
             >
              {page.name}
             </a>
            ))}
           </div>
          </Popover.Group>
         </div>

         {/* Mobile menu and search (lg-) */}
         <div className='flex-1 flex items-center lg:hidden'>
          <button
           type='button'
           className='-ml-2 bg-gray-900 p-2 rounded-md text-gray-400'
           onClick={() => setOpen(true)}
          >
           <span className='sr-only'>Open menu</span>
           <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </button>
         </div>

         {/* Logo (lg-) */}
         {/* <a href='#' className='lg:hidden'>
          <span className='sr-only'>Workflow</span>
          <img
           src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
           alt=''
           className='h-8 w-auto'
          />
         </a> */}
         <NavLink to='/' className='lg:hidden'>
          <span className='sr-only'>Coin Invest</span>

          <h2 className='text-green-500 text-xl font-extrabold'>
           <span className='text-white font-extrabold text-3xl'>Coin</span>
           Invest
          </h2>
         </NavLink>

         {/* <div className='flex-1 flex items-center justify-end'> */}
         {!userInfo ? (
          <div className='hidden lg:flex ml-4 items-center space-x-6'>
           <NavLink
            to='/login'
            className='text-sm font-medium text-white hover:text-gray-100'
           >
            Sign in
           </NavLink>
           <NavLink
            to='/signup'
            className='text-sm font-medium text-white hover:text-gray-100'
           >
            Create an account
           </NavLink>
          </div>
         ) : (
          <div className='hidden lg:flex ml-4 items-center space-x-6'>
           <NavLink
            to='/'
            className='text-sm font-medium text-white hover:text-gray-300'
            onClick={logoutHandler}
           >
            Log out
           </NavLink>
           <NavLink
            to='/dashboard'
            className='text-sm font-medium text-white hover:text-gray-300'
           >
            {userInfo.user.email.split('@')[0]}
           </NavLink>
          </div>
         )}
         {/* </div> */}
         {/* </div> */}
         {/* </div> */}
        </div>
       </div>
      </div>
     </div>
    </nav>
   </header>
  </div>
 );
}
