import Start from './components/start';
import Login from './components/login';
import Register from './components/register';
import PatchNotes from './components/patchNotes';
import MailVerification from './pages/mailVerification';
import FounderPackInfo from './components/FounderPackInfo';
import ComingSoon from './components/comingSoon';
import FounderBuyPage from './components/FounderBuyPage';
import Account from './components/Account';
import GetAP from './components/GetAP';
import TransactionHistory from './components/TransactionHistory';
import ResetPassword from './components/ResetPassword';
import LoginFirst from './components/LoginFirst';
import { useContext, useEffect } from 'react';
import { UserContext, UserProvider } from './context/UserContext';
import { Route } from 'wouter';
import { getUser, getUserAP } from './services/auth';
import './App.css';

function AppContent() {
  const token = localStorage.getItem('authToken');
  const { user, setUser, userAP, setUserAP } = useContext(UserContext);

  const handleUserLogin = async () => {
    try {
      const result = await getUser(token);
      setUser({ name: result.username, email: result.email });
    } catch (error) {
      console.error('Error during user login:', error);
    }
  };

  const getUserAPCount = async () => {
    try {
      const result = await getUserAP(token);
      setUserAP({ AP: result.pvalues });
    } catch (error) {
      console.error('Error getting user AP: ', error);
    }
  };

  useEffect(() => {
    if (token) {
      handleUserLogin();
      getUserAPCount();
    }
  }, [token]);

  return (
    <main className='flex flex-col justify-center items-center bg-pageGreen/90 mainBackground'>
      <Route path='/' component={Start} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/patchNotes' component={PatchNotes} />
      <Route path='/verify' component={MailVerification} />
      <Route path='/founderPackInfo' component={FounderPackInfo} />
      <Route path='/comingSoon' component={ComingSoon} />
      <Route path='/founderBuy' component={FounderBuyPage} />
      <Route path='/profile' component={Account} />
      <Route path='/getAP' component={GetAP} />
      <Route path='/transactionHistory' component={TransactionHistory} />
      <Route path='/resetPassword' component={ResetPassword} />
      <Route path='/loginFirst' component={LoginFirst} />
    </main>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
