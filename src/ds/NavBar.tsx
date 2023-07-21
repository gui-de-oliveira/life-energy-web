import { useAppDispatch } from "../store/store";
import { rootActions } from "../store/slices/root";

export function NavBar() {
  const dispatch = useAppDispatch();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => dispatch(rootActions.goToHomePage())}
          href="#"
        >
          Life Energy
        </a>
      </div>
    </nav>
  );
}
