import { useRoot } from "../store/slices/root";

/* eslint-disable jsx-a11y/anchor-is-valid */

export function NavBar() {
  const { goToHomePage } = useRoot();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={goToHomePage} href="#">
          Life Energy
        </a>
      </div>
    </nav>
  );
}
