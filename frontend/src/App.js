import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Footer from './components/Footer';
import DashboardScreen from './screens/DashboardScreen';
import PricingScreen from './screens/PricingScreen';
import ContactScreen from './screens/ContactScreen';
import CreateTransaction from './screens/CreateTransactionScreen';
import TransactionDetails from './screens/TransactionDetails';

function App() {
  return (
    <Router>
      <div className='bg-white'>
        <div className='relative overflow-hidden'>
          <Header />
          <main>
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/signup' element={<SignupScreen />} />
              <Route path='/dashboard' element={<DashboardScreen />} />
              <Route path='/pricing' element={<PricingScreen />} />
              <Route path='/contact' element={<ContactScreen />} />
              <Route
                path='/create-transaction'
                element={<CreateTransaction />}
              />
              <Route
                path='/transactions/:id'
                element={<TransactionDetails />}
              />
              <Route path='/' element={<HomeScreen />} exact />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
