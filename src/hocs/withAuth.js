 import React from 'react'
 import withAuthRedirect from "./withAuthRedirect";
 import Routes from "@/constants/routes";
 
 const LoadingComponent  = () => {
   return(<>...loading</>);
 }

 export default function withAuth(WrappedComponent, location = Routes.LOGIN) {
   return withAuthRedirect({
     WrappedComponent,
     LoadingComponent,
     expectedAuth: true,
     location,
   });
 }