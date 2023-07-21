import { useAppDispatch } from "../store/store";
import { HomePage, rootActions } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";

export function Home(_state: HomePage) {
  const dispatch = useAppDispatch();

  return (
    <>
      <NavBar />

      <div className="container">
        <button
          className="btn btn-link"
          onClick={() => dispatch(rootActions.goToProjectsPage())}
        >
          Projects!
        </button>
      </div>
    </>
  );
}
