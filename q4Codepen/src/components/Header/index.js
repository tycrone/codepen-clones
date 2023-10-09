import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import q4Logo from '../../img/q4_white.svg';
import asanaLogo from '../../img/asana.PNG';
import * as ROUTES from '../../constants/routes';
import {SignInBtn} from '../SignIn';
import SignOutBtn from '../SignOut';
import {AuthUserContext} from '../../contexts/withAuthentication';

const Header = () => {
	const authUser = useContext(AuthUserContext)
	let properNav = authUser ? <NavigationAuth /> : <NavigationNonAuth/>;

	return(
		<div className="header">
			<div className="wrapper max-w--90per">
				<div className="header-logo">
					<img src={q4Logo} className="header-logo_image" alt="Q4 logo" />
					<span className="header-logo_text">Scheduler</span>
				</div>
				<div className="header-navigation">
					{properNav}
				</div>
				<div className="header-title">
					<h1>Organic Development Team</h1>
				</div>
			</div>
		</div>
	);
}

const NavigationAuth = () =>(
	<ul>
		<li>
			<NavLink exact activeClassName="active" to={ROUTES.HOME}>Timeline</NavLink>
		</li>
		<li>
			<NavLink exact activeClassName="active" to={ROUTES.FAQ}>FAQ</NavLink>
		</li>
		<li>
			<SignOutBtn/>
		</li>
		<li>
			<a title="Visit Asana (link opens in new window)" className="asana-link" rel="noopener noreferrer" target="_blank" href="https://app.asana.com/0/1199222491229814/list"><img src={asanaLogo} alt="Asana logo" /> </a>
		</li>
		
	</ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
		<SignInBtn/>
    </li>
  </ul>
);

export default Header;

