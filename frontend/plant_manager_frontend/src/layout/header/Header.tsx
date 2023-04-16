import { Typography } from "@mui/material";
import { HeaderDiv } from "./Header.styles";

export function HeaderNew() {
  return (
    <>
      <HeaderDiv>
        <Typography variant="h3" align="center" sx={{py: "10px"}}>🌻 My plant world 🌻</Typography>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Plant View <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </HeaderDiv>
    </>
  );
}
