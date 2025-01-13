import Start from './components/start';
import Login from './components/login';
import Register from './components/register';
import PatchNotes from './components/patchNotes';
import MailVerification from './pages/mailVerification';
import FounderPackInfo from './components/FounderPackInfo';
import ComingSoon from './components/comingSoon';
import FounderBuyPage from './components/FounderBuyPage';
import { Route } from 'wouter';
import './App.css';

function App() {
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
    </main>
  );
}

export default App;
