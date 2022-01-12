import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={<Home productsPerPage={15}/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));