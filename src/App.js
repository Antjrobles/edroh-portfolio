
import Navbar from "./scenes/Navbar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home'); // Determines in which part of the page we are
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");  //Use the mediaquery we created
  return <div className="app bg-deep-blue">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
  </div>;
}

export default App;
