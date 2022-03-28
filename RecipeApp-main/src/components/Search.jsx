import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import './Search.css';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

  return (
   <div className="searchformWrapper">
    <form className="searchform" onSubmit={submitHandler}>
        <div>
          <FaSearch className="searchicon"></FaSearch>
          <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}
            placeholder="Search..."
          />
        </div>
    </form>
   </div>
  );
}

export default Search;