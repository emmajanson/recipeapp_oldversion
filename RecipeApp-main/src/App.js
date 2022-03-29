import Pages from "./pages/Pages";
import react, { useState, useEffect } from "react";
import Category from "./components/Category";
import Search from "./components/Search";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {

// MOBILE MODE START
  const [mobileMode, setMobileMode] = useState(false)
  const [windowLoad, setWindowLoad] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 500) {
      setWindowLoad(true)
    } else if (window.innerWidth > 500) {
      setWindowLoad(false)
    }
  }, [])

  window.addEventListener('resize', () => {

    if (window.innerWidth < 500) {
      setMobileMode(true)
    } else if (window.innerWidth > 500) {
      setMobileMode(false)
    }
   })

   useEffect(() => {
  console.log(mobileMode);
   }, [mobileMode])

// MOBILE MODE END
 


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <Search />
        <Pages mobileMode={mobileMode} windowLoad={windowLoad}  />
      </BrowserRouter>
    </div>
  );
}

export default App;
