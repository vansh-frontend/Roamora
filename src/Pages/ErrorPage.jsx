import { NavLink, useRouteError } from "react-router-dom";
export const ErrorPage = () =>{
const error =  useRouteError();
console.log(error);

    return(
        <>
        <h1>oops! an error occured</h1>
        {error && <p>{error.data}</p>}

        <NavLink to='/' >
            <button> Go Back To Home</button>
        </NavLink>
        </>
    )
}