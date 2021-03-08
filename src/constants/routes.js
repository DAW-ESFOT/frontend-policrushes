const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  USERS: "/users",
  USERS_ID: `/usuario/:id`,
  ABOUT: "/about",
};

const privateRoutes = {
  HOME: "/",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
