import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/home/HomePage';
import Shop from './components/pages/shop/Shop';

function App() {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>

    );
}

export default App;
