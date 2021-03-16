import withAuthRedirect from "./withAuthRedirect";
import Routes from "../constants/routes";

export default function withoutAuth(WrappedComponent, location = Routes.HOME) {
  // const from = history.location.state && history.location.state.from.pathname;

  return withAuthRedirect({
    WrappedComponent,
    location /*from ||*/,
    expectedAuth: false,
  });
}
