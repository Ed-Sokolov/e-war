import store from './redux/ReduxStore';
import { Provider } from 'react-redux';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import GameContainer from './components/game/GameContainer';
import Main from './components/main/Main';
import StatisticsContainer from './components/statistics/StatisticsContainer';
import MapContainer from './components/map/MapContainer';
import HeaderContainer from './components/header/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <main>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path='/main' element={<Main />} />
            <Route path='/map' element={<MapContainer />} />
            <Route path='/statistics' element={<StatisticsContainer />} />
            <Route path='/game' element={<GameContainer />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__content">
          <p>Copyright	&#169; <time dateTime="2022">2022</time> Sokolov Eduard</p>
          <address>Ukraine.</address>
        </div>
      </footer>
    </div>
  );
}

export const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
}