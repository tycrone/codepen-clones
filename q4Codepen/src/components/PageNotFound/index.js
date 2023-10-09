import React from 'react';
import pageNotFoundImg from '../../img/404.png';

const PageNotFound = () => (
	<div className="text--centered padding-v--60">
        <img src={pageNotFoundImg} className="img-404" alt="Error 404. Page not found." /> 
    </div>
);

export default PageNotFound;