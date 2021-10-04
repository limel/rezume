import Navigation from './components/Navigation/Navigation';
import s from './App.module.css';

function App() {
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default App;
