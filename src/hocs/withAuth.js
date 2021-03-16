 import withAuthRedirect from "./withAuthRedirect";
 import Routes from "@/constants/routes";
 
 export default function withAuth(WrappedComponent, location = Routes.LANDING) {
   return withAuthRedirect({
     WrappedComponent,
     location,
     expectedAuth: true,
   });
 }