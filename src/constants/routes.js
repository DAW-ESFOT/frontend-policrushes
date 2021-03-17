const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  ABOUT: "/about",
  RECOVERY: "/password-recovery",
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
