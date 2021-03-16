const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  ABOUT: "/about",
  RESET: "/reset-password",
  LANDING: "/landing",
};

const privateRoutes = {
  HOME: "/home",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
