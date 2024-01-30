import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Dashboards from './pages/Dashboards';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/dashboards" element={ <Dashboards/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;