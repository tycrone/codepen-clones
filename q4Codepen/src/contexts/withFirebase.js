import React from 'react';

export const FirebaseContext = React.createContext(null);

//higher-order component to give access to instance of firebase without having to unnecessarily supply full instance every time
export const firebaseConsumer = Component => props => (
	<FirebaseContext.Consumer>
		{firebaser => <Component {...props} firebaseInst={firebaser} />}
	</FirebaseContext.Consumer>
)
