import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Cards from "./cards/Cards";
import Mens from "./cards/Mens";
import Cardsdetails from "./carddetails/Cardsdetails";
import { useState } from "react";



function App() {


  const[search,setsearch] = useState("")
  // console.log(search)
  return (
    <div className="App">
      <Header search={search} setsearch={setsearch}/>

      <Routes >
        <Route path="/" element={<Cards search={search} />}/>
        <Route path="/mens" element={<Mens  />}/>
        <Route path="/cart/:id" element={<Cardsdetails />}/>



      </Routes>
    </div>
  );
}

export default App;
