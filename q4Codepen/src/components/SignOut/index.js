import React from 'react';
import { firebaseConsumer} from '../../contexts/withFirebase';

const SignOutButton = ({firebaseInst}) => (
	<button className="button--link" type="button" onClick={firebaseInst.doSignOut}>
	    Sign Out
	</button>
);

export default firebaseConsumer(SignOutButton);