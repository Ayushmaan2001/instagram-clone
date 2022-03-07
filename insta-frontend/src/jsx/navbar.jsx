import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Instagram-Clone
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/createpost'>
                    Create Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/profile'>
                    Profile
                  </Link>
                </li>
                <li className="nav-item dropdown"></li>
              </ul>
              <form className="d-flex">
                <h1 className="me-2" /> Signed as:{" "}
                <button className="btn btn-outline-success">Logout</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar   ;