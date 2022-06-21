import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <WelcomeBanner name={'NAME HERE'} />
      <Background />
      <Footer />
    </div>
  );
};

export default App;
