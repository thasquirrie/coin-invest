import React from 'react';
import { useSelector } from 'react-redux';
// import { PaperClipIcon, CheckIcon, XIcon } from '@heroicons/react/solid';

export default function Details() {
  //  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);

  const { user } = userDetails;

  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          User's Information
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
          Personal details and application.
        </p>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
        <dl className='sm:divide-y sm:divide-gray-200'>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {user.email}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Cash out date</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              Click on each transaction to view the payout date.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
