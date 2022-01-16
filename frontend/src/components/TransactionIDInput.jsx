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
    ],
  }
  ```
*/
import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function TransactionIDInput({
  transactionIDInput,
  setTransactionIDInput,
}) {
  const [errors, setErrors] = useState(true);

  return (
    <div className=''>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Transaction ID
        </label>
        <span className='flex items-center text-gray-700 font-light'>
          <InformationCircleIcon className='h-5 w-5 mr-1 text-gray-700'></InformationCircleIcon>
          For easy tracking of transaction{' '}
        </span>
        <div className='sm:flex'>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <input
              type='text'
              name='text'
              id='transactionID'
              className={classNames(
                errors
                  ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                  : 'border-teal-300 text-teal-900 placeholder-teal-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500',
                'block w-full pr-10 sm:text-sm rounded-md'
              )}
              placeholder='Enter your transaction ID'
              value={transactionIDInput}
              onChange={(e) => {
                setTransactionIDInput(e.target.value);
                e.target.value.length === 23
                  ? setErrors(false)
                  : setErrors(true);
                console.log(errors);
              }}
              aria-invalid='true'
              aria-describedby='transaction-error'
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              {errors ? (
                <ExclamationCircleIcon
                  className='h-5 w-5 text-red-500'
                  aria-hidden='true'
                />
              ) : (
                <CheckCircleIcon
                  className='h-5 w-5 text-teal-500'
                  aria-hidden='true'
                />
              )}
            </div>
          </div>
          <button
            type='submit'
            className='mt-3 w-full px-6 sm:py-3 py-0 border border-transparent sm:text-md font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed'
            disabled={transactionIDInput.length !== 23}
          >
            Enter
          </button>
        </div>
        <p className='mt-2 text-sm text-red-600' id='transaction-error'>
          {transactionIDInput.length !== 23 &&
            `Your input must not be less/more than 23 characters.`}
        </p>
      </div>
    </div>
  );
}

// {
//   /* <p className='mt-2 text-sm text-red-600' id='transaction-error'>
//   {transactionIDInput.length !== 23 &&
//     `Your input must not be less/more than 23 characters.`}
// </p>; */
// }
