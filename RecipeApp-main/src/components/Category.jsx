import { NavLink } from "react-router-dom";
import '../style/Category.css';


function Category() {
  return (
    <div className="categorybar">
        <NavLink className="link" to={'/cuisine/Italian'}>
            <h4 className="categoryTitle">Italian</h4>
        </NavLink>
        <NavLink className="link" to={'/cuisine/American'}>
            <h4 className="categoryTitle">American</h4>
        </NavLink>
        <NavLink className="link" to={'/cuisine/Thai'}>
            <h4 className="categoryTitle">Thai</h4>
        </NavLink>
        <NavLink className="link" to={'/cuisine/Japanese'}>
            <h4 className="categoryTitle">Japanese</h4>
        </NavLink>
    </div>
  );
}

export default Category;