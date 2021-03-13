const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  ABOUT: "/about",
};

const privateRoutes = {
  HOME: "/home",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
