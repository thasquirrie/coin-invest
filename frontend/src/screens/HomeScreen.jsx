// import React from 'react';
// import Pricing from '../components/Pricing';

// const HomeScreen = () => {
//  return (
//   <>
//    <section className='bg-hero-pattern bg-cover flex lg:justify-end'>
//     <div className='px-8 py-12 max-w-lg mx-auto lg:w-1/2 lg:max-w-full lg:py-56 lg:px-12 lg:ml-24'>
//      <img className='hidden h-14' src='/img/pngegg.png' alt='Big Machine' />
//      <img
//       className='mt-6 rounded-lg sm:mt-8 sm:w-full sm:object-cover sm:object-center lg:hidden'
//       src='/img/Communication.png'
//       alt='Woman organizing'
//      />
//      <h1 className='mt-6 text-2xl font-bold text-gray-900 leading-tight lg:text-4xl'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
//       <span className='text-red-700'>
//        Illo assumenda repellendus quas laborum tempora!
//       </span>
//      </h1>
//      <p className=' lg:text-2xl mt-4 text-gray-800 '>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
//       deleniti. Odio libero sequi quae, repellat quam rem excepturi error
//       molestias ab, maxime est temporibus aut!
//      </p>

//      <div className='mt-4'>
//       <button className='inline-block px-5 py-3 rounded-lg bg-red-700 text-white uppercase tracking-wider shadow-lg font-semibold lg:text-xl hover:bg-red-600 focus:outline-none focus:shadow-outline active:bg-red-700'>
//        Get Started
//       </button>
//      </div>
//     </div>
//     <div className='hidden lg:block lg:w-1/2 relative'>
//      <div className='flex'>
//       <img
//        className='absolute inset-0 object-cover object-center '
//        src='/img/Communication.png'
//        alt='Woman organizing'
//       />
//       <img
//        className='absolute inset-y-96 inset-x-48 object-cover overflow-hidden object-center'
//        src='/img/Media.png'
//        alt='Woman organizing'
//       />
//      </div>
//     </div>
//    </section>
//    <div className='bg-gradient-to-br from-yellow-400 via-white to-blue-500'>
//     <Pricing />
//     {/* <div class='text-5xl font-extrabold text-center'>
//      <span class='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
//       Hello world
//      </span>
//     </div> */}
//     {/* <h2 className='p-5 text-5xl font-extrabold text-center bg-clip-text text-transparent  bg-gradient-to-br from-yellow-400 to-red-700'>
//      Membership Details
//     </h2>
//     <h4 className='text-center text-gray-700 text-lg font-semibold px-3 py-3'>
//      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at
//      incidunt exercitationem corrupti soluta illo facere eaque nesciunt odio
//      perspiciatis?
//     </h4>
//     <div className='px-8 py-4 lg:px-12 lg:ml-24'>
//      <h4>Choose the right plan for you</h4>
//      <p> &bull; It's affordable</p>
//      <p> &bull; It's affordable</p>
//      <p> &bull; It's affordable</p>
//     </div>
//     <div className='px-3 md:max-w-5xl mx-auto'>
//      <div className='flex px-1 md:mx-auto justify-between md:justify-end'>
//       <div className='w-1/3 m-3'>
//        <button className='bg-red-500 py-8 w-full text-white hover:bg-red-700 focus:bg-red-700 rounded-md'>
//         Standard
//        </button>
//       </div>
//       <div className='w-1/3 m-3'>
//        <button className='bg-red-500 py-8 w-full text-white hover:bg-red-700 focus:bg-red-700 rounded-md'>
//         Standard
//        </button>
//       </div>
//       <div className='w-1/3 m-3'>
//        <button className='bg-red-500 py-8 w-full text-white hover:bg-red-700 focus:bg-red-700 rounded-md'>
//         Standard
//        </button>
//       </div>
//      </div>
//      <div className='border-b border-gray-400'>
//       <div>
//        <span className='text-center w-full inline-block mt-1'>
//         Subscription
//        </span>
//        <div className='flex justify-between'>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//        </div>
//       </div>
//      </div>

//      <div className='border-b border-gray-400'>
//       <div>
//        <span className='text-center w-full inline-block mt-1'>
//         Subscription
//        </span>
//        <div className='flex justify-between'>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//        </div>
//       </div>
//      </div>

//      <div className='border-b border-gray-400'>
//       <div>
//        <span className='text-center w-full inline-block mt-1'>
//         Subscription
//        </span>
//        <div className='flex justify-between'>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//        </div>
//       </div>
//      </div>
//     </div> */}
//    </div>
//    <section>
//     <div>
//      <form>
//       <input />
//      </form>
//     </div>
//    </section>
//   </>
//  );
// };

// export default HomeScreen;

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/
import { Fragment } from 'react';
// import {
//  CloudUploadIcon,
//  CogIcon,
//  LockClosedIcon,
//  RefreshIcon,
//  ServerIcon,
//  ShieldCheckIcon,
// } from '@heroicons/react/outline';
// import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Pricing from '../components/Pricing';

// const features = [
//  {
//   name: 'Push to Deploy',
//   description:
//    'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
//   icon: CloudUploadIcon,
//  },
//  {
//   name: 'SSL Certificates',
//   description:
//    'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
//   icon: LockClosedIcon,
//  },
//  {
//   name: 'Simple Queues',
//   description:
//    'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
//   icon: RefreshIcon,
//  },
//  {
//   name: 'Advanced Security',
//   description:
//    'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
//   icon: ShieldCheckIcon,
//  },
//  {
//   name: 'Powerful API',
//   description:
//    'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
//   icon: CogIcon,
//  },
//  {
//   name: 'Database Backups',
//   description:
//    'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
//   icon: ServerIcon,
//  },
// ];
// const blogPosts = [
//  {
//   id: 1,
//   title: 'Boost your conversion rate',
//   href: '#',
//   date: 'Mar 16, 2020',
//   datetime: '2020-03-16',
//   category: { name: 'Article', href: '#' },
//   imageUrl:
//    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//   preview:
//    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//   author: {
//    name: 'Roel Aufderehar',
//    imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//    href: '#',
//   },
//   readingLength: '6 min',
//  },
//  {
//   id: 2,
//   title: 'How to use search engine optimization to drive sales',
//   href: '#',
//   date: 'Mar 10, 2020',
//   datetime: '2020-03-10',
//   category: { name: 'Video', href: '#' },
//   imageUrl:
//    'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//   preview:
//    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//   author: {
//    name: 'Brenna Goyette',
//    imageUrl:
//     'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//    href: '#',
//   },
//   readingLength: '4 min',
//  },
//  {
//   id: 3,
//   title: 'Improve your customer experience',
//   href: '#',
//   date: 'Feb 12, 2020',
//   datetime: '2020-02-12',
//   category: { name: 'Case Study', href: '#' },
//   imageUrl:
//    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//   preview:
//    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//   author: {
//    name: 'Daniela Metz',
//    imageUrl:
//     'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//    href: '#',
//   },
//   readingLength: '11 min',
//  },
// ];

const startHandler = (e) => {
  e.preventDefault();

  console.log(e.target);
};

export default function Example({ history }) {
  return (
    <>
      <div className='pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
        <div className='relative bg-gray-800 px-6 sm:py-40 sm:px-12 lg:px-16'>
          <div className='absolute inset-0 overflow-hidden'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
              alt=''
              className='w-4/5 h-full object-center object-cover mx-auto rounded-lg'
            />
          </div>
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gray-900 bg-opacity-75'
          />
          <div className='relative max-w-3xl mx-auto flex flex-col items-center text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
              Long-term thinking
            </h2>
            <p className='mt-3 text-xl text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              iste fugiat corporis ea provident cum. Harum aspernatur sequi quod
              consequuntur, deserunt facere! Nam, labore soluta ratione adipisci
              similique reprehenderit possimus reiciendis? Facere quia tempore
              suscipit voluptatum! Impedit molestias labore distinctio, atque
              voluptatibus reprehenderit! Cupiditate ipsa ad distinctio nulla
              expedita asperiores nisi, quod, dolorum neque dolorem culpa sunt
              maxime.
            </p>
            <Link
              to='/signup'
              className='mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from--500 to-cyan-600'>
        <Pricing history={history} />
      </div>
    </>
  );
}
