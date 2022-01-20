import { XIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { transactDetails } from '../actions/transactionActions';
import { addWithdrawal } from '../actions/withdrawalActions';
import LoadingCircle from '../components/LoadingCircle';
import LoadingPage from '../components/LoadingPage';
import TransactionIDInput from '../components/TransactionIDInput';
import { TRANSACTION_DETAILS_RESET } from '../constants/transactionConstants';
import { WITHDRAWAL_UPDATE_RESET } from '../constants/withdrawalConstant';

/* This example requires Tailwind CSS v2.0+ */
const products = [
  {
    id: 1,
    name: 'Cold Brew Bottle',
    description:
      'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
    href: '#',
    quantity: 1,
    price: '$32.00',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
    imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
  },
];

export default function Example() {
  const dispatch = useDispatch();
  const [transactionIDInput, setTransactionIDInput] = useState('');
  const [email, setEmail] = useState('');
  const [coinType, setCoinType] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [coinSymbol, setCoinSymbol] = useState('');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');
  const [username, setUsername] = useState('');

  console.log();

  console.log(transactionIDInput);

  const transactionDetails = useSelector((state) => state.transactionDetails);

  const { loading, error, transaction } = transactionDetails;
  console.log({ transaction, loading });

  // const withdrawalUpdate = useSelector((state) => state.withdrawalUpdate);

  const createWithdrawal = useSelector((state) => state.createWithdrawal);

  const { loading: loadingCreate, success, withdrawal } = createWithdrawal;

  console.log({ withdrawal });

  const params = useParams();

  useEffect(() => {
    if (transaction && transaction._id === params.id) {
      setEmail(transaction.user.email);
      setCoinType(transaction.coinType);
      setTransactionId(transaction.transactionId);
      setCoinSymbol(transaction.coinSymbol);
      setAmount(transaction.amount);
      setAddress(transaction.address);
      setDateCreated(transaction.dateCreated);
      setTransactionStatus(transaction.transactionStatus);
      setUsername(transaction.user.username);
      setAddress(transaction.address);
    } else {
      dispatch(transactDetails(params.id));
    }
  }, [dispatch, params, transaction]);

  const imageSrc = transaction
    ? transaction.coinType === 'Doge'
      ? '../img/dogecoin.png'
      : transaction.coinType === 'Algo'
      ? '../img/algorand.png'
      : '../img/tron.png'
    : '';

  // const days = 7 * 24 * 60 * 60 * 1000;
  const days = 1 * 60 * 60 * 1000;

  const navigate = useNavigate();

  const onClickHandler = () => {
    console.log({
      email,
      transactionId,
      amount,
      username,
      address,
      coinType,
      coinSymbol,
    });
    dispatch(
      addWithdrawal({
        email,
        transactionId,
        amount,
        username,
        address,
        coinType,
        coinSymbol,
      })
    );
  };

  useEffect(() => {
    if (success) {
      window.setTimeout(() => {
        navigate(`/withdrawals/${withdrawal.id}`);
        dispatch({ type: WITHDRAWAL_UPDATE_RESET });
      }, 3000);
    }
  });

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <main className='bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32'>
          <div className='max-w-3xl mx-auto'>
            <div className='max-w-xl'>
              <h1 className='text-sm font-semibold uppercase tracking-wide text-indigo-600'>
                Awesome!
              </h1>
              <p className='mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
                Your investment is on the way!
              </p>
              {/* <p className='mt-2 text-base text-gray-500'>
                {`Your order ${products.id} has shipped and will be with you soon.`}
              </p> */}

              <dl className='mt-12 text-sm font-medium'>
                {!transaction.transactionId ? (
                  <TransactionIDInput
                    transactionIDInput={transactionIDInput}
                    setTransactionIDInput={setTransactionIDInput}
                    id={params.id}
                  />
                ) : (
                  <>
                    <dt className='text-gray-900'>Transaction ID</dt>
                    <dd className='text-indigo-600 mt-2'>
                      {transaction.transactionId}
                    </dd>
                  </>
                )}
              </dl>
            </div>

            <section
              aria-labelledby='order-heading'
              className='mt-10 border-t border-gray-200'
            >
              <h2 id='order-heading text-red-500' className='sr-only'>
                Your order
              </h2>
              <h3 className='sr-only'>Items</h3>
              {products.map((product) => (
                <div className='py-10 border-b border-gray-200 flex space-x-6'>
                  <img
                    src={imageSrc}
                    alt={transaction.coinType}
                    className='flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40'
                  />
                  <div className='flex-auto flex flex-col'>
                    <div>
                      <h4 className='font-medium text-gray-900'>
                        <p>{transaction.coinType} transaction</p>
                      </h4>
                      {/* <p className='mt-2 text-sm text-gray-600'>
                        {product.description}
                      </p> */}
                    </div>
                    <div className='mt-6 flex-1 flex items-end'>
                      <dl className='flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6'>
                        <div className='flex'>
                          <dt className='font-medium text-gray-900'>
                            Quantity
                          </dt>
                          <dd className='ml-2 text-gray-700'>
                            {transaction.amount &&
                              transaction.amount.toLocaleString()}{' '}
                            units
                          </dd>
                        </div>
                        <div className='pl-4 flex sm:pl-6'>
                          {/* <dt className='font-medium text-gray-900'>Price</dt> */}
                          <dd className='ml-2 text-gray-700 capitalize'>
                            {transaction.user && transaction.user.username}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
              <div className='sm:ml-40 sm:pl-6'>
                <h3 className='sr-only'>Your information</h3>

                <h4 className='sr-only'>Addresses</h4>
                <dl className='grid grid-cols-2 gap-x-6 text-sm py-10'>
                  <div>
                    <dt className='font-medium text-gray-900'>
                      Transaction ID
                    </dt>
                    <dd className='mt-2 text-gray-700'>
                      <address className='not-italic'>
                        <span className=' font-bold'>
                          {transaction.transactionId
                            ? transaction.transactionId
                            : 'No Transaction ID'}
                        </span>
                        {/* <span className='block'>7363 Cynthia Pass</span>
                        <span className='block'>Toronto, ON N3Y 4H8</span> */}
                      </address>
                    </dd>
                  </div>
                  <div>
                    <dt className='font-medium text-gray-900'>
                      Your Wallet Address
                    </dt>
                    <dd className='mt-2 text-gray-700'>
                      <address className='not-italic'>
                        <span className='break-words selection:text-sky-400 selection:bg-black'>
                          {transaction.address}
                        </span>
                        {/* <span className='block'>7363 Cynthia Pass</span>
                        <span className='block'>Toronto, ON N3Y 4H8</span> */}
                      </address>
                    </dd>
                  </div>
                </dl>

                <h4 className='sr-only'>Payment</h4>
                <dl className='grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10'>
                  <div>
                    <dt className='font-medium text-gray-900'>
                      Transaction Status
                    </dt>
                    <dd className='mt-2 text-gray-700'>
                      <p className='capitalize'>
                        {transaction.transactionStatus}
                      </p>
                    </dd>
                  </div>
                  <div>
                    <dt className='font-medium text-gray-900'>
                      Expected Withdrawal Date
                    </dt>
                    <dd className='mt-2 text-gray-700'>
                      {new Date(
                        Date.parse(transaction.dateCreated) + days
                      ).toDateString()}
                      ,{' '}
                      {new Date(
                        Date.parse(transaction.dateCreated) + days
                      ).toLocaleTimeString('en-US', { hour12: false })}
                    </dd>
                  </div>
                </dl>

                <h3 className='sr-only'>Summary</h3>

                <dl className='space-y-6 border-t border-gray-200 text-sm pt-10'>
                  <div className='flex justify-between'>
                    <dt className='font-medium text-gray-900'>
                      Invested Amount
                    </dt>
                    <dd className='text-gray-700'>
                      {transaction.amount &&
                        transaction.amount.toLocaleString()}{' '}
                      {transaction.coinSymbol}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='flex font-medium text-gray-900'>
                      Accumulated Earnings
                    </dt>
                    <dd className='text-gray-700'>
                      {transaction.amount &&
                        (transaction.amount * 0.05).toLocaleString()}{' '}
                      {transaction.coinSymbol}
                    </dd>
                  </div>
                  {/* <div className='flex justify-between'>
                    <dt className='font-medium text-gray-900'>Shipping</dt>
                    <dd className='text-gray-700'>$5.00</dd>
                  </div> */}
                  <div className='flex justify-between border-t pt-3'>
                    <dt className='font-medium text-gray-900'>Total</dt>
                    <dd className='text-gray-900 '>
                      {transaction.amount + transaction.amount * 0.05}{' '}
                      {transaction.coinSymbol}
                    </dd>
                  </div>
                </dl>
              </div>
              {!loadingCreate ? (
                <div className='mt-5 sm:col-span-2 sm:flex sm:justify-end'>
                  {/* <Link to='/withdrawals'> */}

                  <button
                    type='button'
                    className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto disabled:cursor-not-allowed disabled:bg-gray-300'
                    onClick={onClickHandler}
                    disabled={
                      Date.now() < Date.parse(transaction.dateCreated) + days
                    }
                  >
                    Withdrawal request
                  </button>
                  {/* </Link> */}
                </div>
              ) : (
                <div class='flex items-center justify-end'>
                  <button
                    type='button'
                    class='mt-2 inline-flex items-center justify-center px-6 py-3 font-semibold leading-6  shadow-sm text-base rounded-md text-white bg-gray-800 hover:bg-gray-900 transition ease-in-out duration-150 cursor-not-allowed'
                    disabled=''
                  >
                    <svg
                      class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        class='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        stroke-width='4'
                      ></circle>
                      <path
                        class='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Processing...
                  </button>
                </div>
              )}
            </section>
          </div>
        </main>
      )}
    </>
  );
}
