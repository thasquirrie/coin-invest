import { Disclosure } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  updateWithdrawal,
  withdrawalDetail,
} from '../actions/withdrawalActions';
import LoadingPage from '../components/LoadingPage';

const subtotal = '$108.00';
const discount = { code: 'CHEAPSKATE', amount: '$16.00' };

const total = '$141.92';

export default function WithdrawalScreen() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const withdrawalDetails = useSelector((state) => state.withdrawalDetails);
  const { loading, error, success, withdrawal } = withdrawalDetails;

  !withdrawal && console.log('Nothing to see');

  console.log({ withdrawal, loading });

  const withdrawalUpdate = useSelector((state) => state.withdrawalUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    successs: successUpdate,
    withdrawal: withdrawalEdit,
  } = withdrawalUpdate;

  const params = useParams();

  useEffect(() => {
    if (!withdrawal || withdrawal.id !== params.id) {
      dispatch(withdrawalDetail(params.id));
    }
  }, [withdrawal, params, dispatch]);

  return (
    <>
      {!withdrawal ? (
        <LoadingPage />
      ) : (
        <div className='bg-white'>
          <main className='lg:min-h-screen lg:overflow-hidden lg:flex lg:flex-row-reverse'>
            <h1 className='sr-only'>Withdrawal</h1>

            {/* Mobile order summary */}
            <section
              aria-labelledby='order-heading'
              className='bg-gray-50 px-4 py-6 sm:px-6 lg:hidden'
            >
              <Disclosure as='div' className='max-w-lg mx-auto'>
                {({ open }) => (
                  <>
                    <div className='flex items-center justify-between'>
                      <h2
                        id='order-heading'
                        className='text-lg font-medium text-gray-900'
                      >
                        Your Withdrawal
                      </h2>
                      <Disclosure.Button className='font-medium text-indigo-600 hover:text-indigo-500'>
                        {open ? (
                          <span>Hide full summary</span>
                        ) : (
                          <span>Show full summary</span>
                        )}
                      </Disclosure.Button>
                    </div>

                    <Disclosure.Panel>
                      <dl className='text-sm font-medium text-gray-500 mt-10 space-y-6'>
                        <div className='flex justify-between'>
                          <dt>Investment</dt>
                          <dd className='text-gray-900'>
                            {withdrawal.amount} {withdrawal.coinSymbol}{' '}
                          </dd>
                        </div>
                        <div className='flex justify-between'>
                          <dt className='flex'>Accumulated Earnings</dt>
                          <dd className='text-gray-900'>
                            {withdrawal.amount * 0.05} {withdrawal.coinSymbol}
                          </dd>
                        </div>
                      </dl>
                    </Disclosure.Panel>

                    <p className='flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6'>
                      <span className='text-base'>Total</span>
                      <span className='text-base'>
                        {withdrawal.amount * (1 + 0.05)} {withdrawal.coinSymbol}
                      </span>
                    </p>
                  </>
                )}
              </Disclosure>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby='summary-heading'
              className='hidden bg-gray-50 w-full max-w-md flex-col lg:flex'
            >
              <h2 id='summary-heading' className='sr-only'>
                Withdrawal summary
              </h2>

              <div className='sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6'>
                <dl className='text-sm font-medium text-gray-500 mt-10 space-y-6'>
                  <div className='flex justify-between'>
                    <dt>Investment</dt>
                    <dd className='text-gray-900'>
                      {withdrawal.amount} {withdrawal.coinSymbol}{' '}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='flex'>Accumulated Earnings</dt>
                    <dd className='text-gray-900'>
                      {withdrawal.amount * 0.05}
                    </dd>
                  </div>

                  <div className='flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6'>
                    <dt>Total</dt>
                    <dd className='text-base'>
                      {withdrawal.amount + withdrawal.amount * 0.05}{' '}
                      {withdrawal.coinSymbol}
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Checkout form */}
            <section
              aria-labelledby='payment-heading'
              className='flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24'
            >
              <h2 id='payment-heading' className='sr-only'>
                Payment details
              </h2>

              <div className='max-w-lg mx-auto lg:pt-16'>
                <div className='relative mt-8'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-200' />
                  </div>
                  <div className='relative flex justify-center'>
                    <span className='px-4 bg-white text-base font-medium text-gray-500'>
                      Withdrawal Form
                    </span>
                  </div>
                </div>

                <form className='mt-6'>
                  <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
                    <div className='col-span-full'>
                      <label
                        htmlFor='email-address'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email address
                      </label>
                      <div className='mt-1'>
                        <input
                          type='email'
                          id='email-address'
                          name='email-address'
                          autoComplete='email'
                          value={withdrawal.email}
                          className='read-only:border-gray-400 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          readOnly
                        />
                      </div>
                    </div>

                    <div className='col-span-full'>
                      <label
                        htmlFor='username'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Username
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          id='username'
                          name='username'
                          autoComplete='username'
                          value={withdrawal.username}
                          className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          readOnly
                        />
                      </div>
                    </div>

                    <div className='col-span-full'>
                      <label
                        htmlFor='address'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Wallet Address
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          id='address'
                          name='address'
                          autoComplete='wallet-address'
                          value={withdrawal.address}
                          className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          readOnly
                        />
                      </div>
                    </div>

                    <div className='col-span-full sm:col-span-full'>
                      <label
                        htmlFor='transactionId'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Transaction ID
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          id='city'
                          name='city'
                          value={withdrawal.transactionId}
                          className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {userInfo.user.role === 'admin' && (
                    <div className='hidden sm:flex sm:gap-4'>
                      <button
                        type='submit'
                        className='w-full mt-6 bg-red-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className='w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        Approve {withdrawal.amount * (1 + 0.05)} withdrawal
                      </button>
                    </div>
                  )}

                  <p className='flex justify-center text-sm font-medium text-gray-500 mt-6'>
                    <LockClosedIcon
                      className='w-5 h-5 text-gray-400 mr-1.5'
                      aria-hidden='true'
                    />
                    All details stored in plain text
                  </p>
                </form>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
