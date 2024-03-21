export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img src="" alt="Stonecraft Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#music">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#videos">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <button type="button" className="btn btn-outline-light">
              <a
                href="https://open.spotify.com/artist/0CZgbP9rRJSH9MVBxVjZia?si=uBG2BltkRSyLbTuUiSicaw"
                target="_blank"
              >
                Listen on Spotify
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
