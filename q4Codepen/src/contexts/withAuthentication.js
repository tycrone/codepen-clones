import React, {useState, useEffect} from 'react';
import { firebaseConsumer} from '../contexts/withFirebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../constants/routes';

export const AuthUserContext = React.createContext(null);

export const withAuthentication = Component => {
    const WithAuthentication2 = (props) => {
        const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));

        useEffect(() => {
            const listener = props.firebaseInst.onAuthUserListener(authUser => {
                if (authUser && authUser.email.split('@').pop() === 'q4inc.com'){
                  localStorage.setItem('authUser', JSON.stringify(authUser));
                  setAuthUser({authUser});
                  props.history.push(ROUTES.HOME)
                }
            }, () => {
                localStorage.removeItem('authUser');
                setAuthUser(null);
            });
            return() => {
                listener()
            };
        }, []);

        return (
            <AuthUserContext.Provider value={authUser}>
                <Component {...props}/>
            </AuthUserContext.Provider>
        );
    }

    return compose(withRouter, firebaseConsumer)(WithAuthentication2);
};
