const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  ABOUT: "/about",
  RECOVERY: "/password-recovery",
  LANDING: "/landing",
};

const privateRoutes = {
  HOME: "/home",
  PRODUCT: "/product",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
