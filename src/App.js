import Background from './components/Background/Background';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <WelcomeBanner name={'NAME HERE'} />
      <Background />
    </div>
  );
};

export default App;
