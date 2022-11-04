import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-warning bg-gradient col-12 no-gutter fluid" style={{backgroundImage: "url('https://images.unsplash.com/photo-1588532218970-c2cab983746a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80')"}}>
            <h1 className="text-primary">Jon's Record Catalog</h1>
            <div className="col-20">
            </div>
            <NavLink to="/" className="">Add Record To Collection!</NavLink>
            <NavLink  to="/recordList" className="m-3">Catalog</NavLink>
            <NavLink  to="/releaseYearList" className="m-3">By Year</NavLink>
            <NavLink  to="/artistList" className="m-3">By Artist</NavLink>
            <NavLink  to="/genreList" className="m-3">By Genre</NavLink>
            <NavLink  to="/ratingList" className="m-3">By Rating</NavLink>
        </div>
    )
}

export default NavBar;