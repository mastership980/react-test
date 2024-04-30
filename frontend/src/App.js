import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AddFestival from "./AddFestival";
import Festivals from "./Festivals";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/addFesztival" element={<AddFestival/>}/>
          <Route path="/festivals" element={<Festivals/>}/>
          <Route path="/" element={(
            <>
              <h1>Üdv Az oldalon!</h1>
              <h2>Jelentkezzen fesztiválra</h2>
            </>
          )}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
