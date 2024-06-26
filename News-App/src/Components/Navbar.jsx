function Navbar({setCategory}){
    return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Prime<span className="badge bg-danger px-2 py-2">News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={()=>setCategory("health")}>Health</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</>
    );

}
export default Navbar;