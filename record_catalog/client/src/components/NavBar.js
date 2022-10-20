import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-warning bg-gradient col-12 no-gutter fluid">
            <h1 className="text-primary">Jon's Record Catalog</h1>
            <NavLink to="/" className="">Add Record To Collection!</NavLink>
            <NavLink  to="/recordList" className="m-3">Catalog</NavLink>
        </div>
    )
}

export default NavBar;