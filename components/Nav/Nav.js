import Link from "next/link";
import { NavWrapper } from "./NavWrapper";
import NavMenu from "../NavMenu/NavMenu";

const Nav = () => {
  return (
    <NavWrapper>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <div>
              Learn<span style={{ fontSize: "2em" }}>2</span>Sign{" "}
            </div>
          </Link>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <Link href="/">Home</Link>
          </div>
          <div className="nav-item">
            <Link href="/learn">Learn2Sign</Link>
          </div>
          <div className="nav-item">
            <Link href="/about">About</Link>
          </div>
          <div className="nav-item">
            <Link href="/team">Team</Link>
          </div>
          <div className="nav-menu">
            <NavMenu />
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
