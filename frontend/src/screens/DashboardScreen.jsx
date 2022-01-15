import { useState, useEffect } from 'react';

import { MenuAlt1Icon, PlusIcon } from '@heroicons/react/outline';
import { CashIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Details from './Details';
import { getMyDetails } from '../actions/userActions';
import Sidebar from '../components/Sidebar';
import { listTransactions } from '../actions/transactionActions';

const statusStyles = {
  success: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-red-500 text-white',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dashboard = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split('=')[1] : '/login';
  //  const newRedirect = user;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const transactionList = useSelector((state) => state.transactionList);
  const {
    transactLoading = loading,
    trasactionError = error,
    transactions,
  } = transactionList;

  useEffect(() => {
    if (!userInfo) {
      console.log('No user infomation saved');
      history.push(redirect);
    } else if (!user.username) {
      dispatch(getMyDetails());
    } else {
      setUsername(user.username);
      console.log('Okay. Leggo');
      dispatch(listTransactions());
    }
  }, [userInfo, history, redirect, dispatch, user]);

  console.log({ location });
  console.log({ transactions });

  return (
    <>
      {/* {userInfo && <Modal error={} value={'Sign in again!'} />} */}
      <div className='bg-gradient-to-r from-cyan-500 to-cyan-700 py-4'>
        <div className='h-screen max-w-7xl mx-auto flex overflow-hidden bg-gray-100 shadow-lg rounded-lg'>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className='flex-1 overflow-auto focus:outline-none'>
            <div className='relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none'>
              <button
                className='px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden'
                onClick={() => setSidebarOpen(true)}
              >
                <span className='sr-only'>Open sidebar</span>
                <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <main className='flex-1 relative pb-8 z-0 overflow-y-auto'>
              {/* Page header */}
              <div className='bg-white shadow'>
                <div className='px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
                  <div className='py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200'>
                    <div className='flex-1 min-w-0'>
                      {/* Profile */}
                      <div className='flex items-center'>
                        <img
                          className='hidden h-16 w-16 rounded-full sm:block'
                          src={user.photo}
                          alt=''
                        />
                        <div>
                          <div className='flex items-center'>
                            <img
                              className='h-16 w-16 rounded-full sm:hidden'
                              src={user.photo}
                              alt=''
                            />
                            <h1 className='ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate'>
                              Welcome, {user.username}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-6 flex space-x-3 md:mt-0 md:ml-4'></div>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <Details />

                <div className='flex justify-between'>
                  <h2 className='max-w-6xl  mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8'>
                    Recent activity
                  </h2>
                  <Link
                    to={'/#pricing'}
                    type='button'
                    className='inline-flex items-center px-4 py-0 text-cyan-500 cursor-pointer mt-2'
                  >
                    <PlusIcon
                      className='-ml-0.5 mr-2 h-4 w-4'
                      aria-hidden='true'
                    />
                    New Transaction
                  </Link>
                </div>

                {/* Activity list (smallest breakpoint only) */}
                {transactions && (
                  <div className='shadow sm:hidden'>
                    <ul className='mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden'>
                      {transactions.map((transaction) => (
                        <li key={transaction.id}>
                          <Link
                            to={`/transactions/${transaction._id}`}
                            className='block px-4 py-4 bg-white hover:bg-gray-50'
                          >
                            <span className='flex items-center space-x-4'>
                              <span className='flex-1 flex space-x-2 truncate'>
                                <CashIcon
                                  className='flex-shrink-0 h-5 w-5 text-gray-400'
                                  aria-hidden='true'
                                />
                                <span className='flex flex-col text-teal-500 text-sm truncate'>
                                  <span className='truncate'>
                                    {transaction.coinType} Transaction
                                  </span>
                                  <span>
                                    <span className='text-gray-900 font-medium'>
                                      {transaction.amount}
                                    </span>{' '}
                                    {transaction.currency}
                                  </span>
                                  <time dateTime={transaction.datetime}>
                                    {transaction.date}
                                  </time>
                                </span>
                              </span>
                              <ChevronRightIcon
                                className='flex-shrink-0 h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <nav
                      className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200'
                      aria-label='Pagination'
                    >
                      <div className='flex-1 flex justify-between'>
                        <Link
                          to='#'
                          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
                        >
                          Previous
                        </Link>
                        <Link
                          to='#'
                          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
                        >
                          Next
                        </Link>
                      </div>
                    </nav>
                  </div>
                )}

                {/* Activity table (small breakpoint and up) */}
                {transactions && (
                  <div className='hidden sm:block'>
                    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                      <div className='flex flex-col mt-2'>
                        <div className='align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg'>
                          <table className='min-w-full divide-y divide-gray-200'>
                            <thead>
                              <tr>
                                <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                  Transaction
                                </th>
                                <th className='px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                  Amount
                                </th>
                                <th className='hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block'>
                                  Status
                                </th>
                                <th className='px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                  Date
                                </th>
                              </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200'>
                              {transactions.map((transaction) => (
                                <tr key={transaction.id} className='bg-white'>
                                  <td className='max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                                    <div className='flex'>
                                      <Link
                                        to={`/transactions/${transaction._id}`}
                                        className='group inline-flex space-x-2 truncate text-sm'
                                      >
                                        <CashIcon
                                          className='flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                                          aria-hidden='true'
                                        />
                                        <p className='text-teal-500 truncate group-hover:text-teal-900'>
                                          {transaction.coinType} Transaction
                                        </p>
                                      </Link>
                                    </div>
                                  </td>
                                  <td className='px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500'>
                                    <span className='text-gray-900 font-medium'>
                                      {transaction.amount}{' '}
                                    </span>
                                    {transaction.coinSymbol}
                                  </td>
                                  <td className='hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block'>
                                    <span
                                      className={classNames(
                                        statusStyles[
                                          transaction.transactionStatus
                                        ],
                                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                      )}
                                    >
                                      {transaction.transactionStatus}
                                    </span>
                                  </td>
                                  <td className='px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500'>
                                    <time dateTime={transaction.datetime}>
                                      {new Date(
                                        transaction.dateCreated
                                      ).toLocaleDateString()}
                                    </time>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {/* Pagination */}
                          <nav
                            className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'
                            aria-label='Pagination'
                          >
                            <div className='hidden sm:block'>
                              <p className='text-sm text-gray-700'>
                                Showing <span className='font-medium'>1</span>{' '}
                                to{' '}
                                <span className='font-medium'>
                                  {transactions.length > 10
                                    ? 10
                                    : transactions.length}
                                </span>{' '}
                                of{' '}
                                <span className='font-medium'>
                                  {transactions.length}
                                </span>{' '}
                                results
                              </p>
                            </div>
                            {transactions.length > 10 && (
                              <div className='flex-1 flex justify-between sm:justify-end'>
                                <Link
                                  to='#'
                                  className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                                >
                                  Previous
                                </Link>
                                <Link
                                  to='#'
                                  className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                                >
                                  Next
                                </Link>
                              </div>
                            )}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
