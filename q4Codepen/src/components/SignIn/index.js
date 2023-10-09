import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { firebaseConsumer} from '../../contexts/withFirebase';

const SignInFormBase = (props) => {
	return (
       	<button onClick ={props.firebaseInst.doSignInWithRedirect}>Sign In with Google</button>
	);
}

const SignInBtn = compose(
  withRouter,
  firebaseConsumer,
)(SignInFormBase);
 
export { SignInBtn };
