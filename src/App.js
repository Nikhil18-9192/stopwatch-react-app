import './App.scss';
import StopWatch from './components/StopWatch';

function App() {
  return (
    <div className="App bg-slate-800 h-screen  md:h-auto md:p-12 lg:h-screen lg:p-14  sm:h-auto sm:p-0 sm:h-screen">
      <StopWatch />
    </div>
  );
}

export default App;
