import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElement from "./RootElement";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";
import Song from "./song";
import Error from "./Error";

const route = createBrowserRouter([
    {
        path : "/",
        element : <RootElement/>,
        children : [
            {
                index : true,
                element : <Main/> 
            },
            {
                path : "/song/:id",
                element : <Song/>
            },
            {
                path : "*",
                element : <Error/>
            }
        ]
    }, 
    {
        path: "/login", 
        element: <Login/>
    },
    {
        path: "/signup", 
        element: <SignUp/>
    }
])

export default function Home(){
    return (
        <RouterProvider router={route}/>
    );
}