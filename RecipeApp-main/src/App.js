import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
