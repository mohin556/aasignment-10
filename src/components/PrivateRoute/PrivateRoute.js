import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContex } from '../../App';


const PrivateRoute = ({ children,...rest }) => {
    
    const [logInUser,setLogInUser] = useContext(UserContex);
    console.log(logInUser);
    return (
        <Route
                {...rest}
                render={({ location }) =>
               logInUser.email || logInUser.name ? (
                    children
                ) : (
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                    />
                )
                }
      />
    );
};

export default PrivateRoute;