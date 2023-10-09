import React from 'react'


const FAQ = () => (
	<div className="wrapper max-w--90per module-faq">
		<h2>FAQ</h2>

		<h3>How do I access the timeline? </h3>
		<p>In order to access the timeline you will need to login with a Q4 Google account.</p>

		<h3>How does it pull in projects? Why isn't my project showing?</h3>
		<p>The timeline pulls in any Asana projects with the following squad-specific tags on their multi-home tasks:</p>
		<ul>
			<li>Diamond Hands: “diamondhands”</li>
			<li>Surprise Motorscooter: “surprisemotorscooter”</li>
			<li>Apollo: “apollo”</li>
			<li>Worcestershire Sauce: “worcestershiresauce”</li>
			<li>Romania: “romania”</li>
			<li>Shadow Team: “shadowteam”</li>
			<li>Redesign: “redesign”</li>
		</ul>
		<p>Make sure that the tag is on the mult-home task. The tags are already saved in Asana so it should give you an option to select your target tag a few characters in. </p>

		<h3>Why does it say “[project] is missing Dev Date” in that red box?</h3>
		<p>This application (currently) relies on the “Est. Dev Date” field in order to plot projects. If this field is empty and a squad tag has been added then the application doesn’t know where to plot it.</p>

		<h3>I added a squad tag to a project but it’s showing up on the dev’s timeline as a tiny dash or an inaccurate representation of the actual duration. </h3>
		<p>Project timelines are based on a combination of “Project type” and “Product Type” in Asana.Check these and ensure that they are set properly. If there is still an issue after you’ve checked these, you might be dealing with a new project combination and we will need to create defaults within the application.</p>

		<h3>Why is a project in an empty row under all of the developer rows for my squad?</h3>
		<p>You need to specify which developer in your squad is taking on the website. All projects assigned to squads without a specified developer will be placed in the bottom row. Update the “Developer” field in the multi-home task to resolve this.</p>

		<h3>How does it know project lengths? How can I edit this?</h3>
		<p>Project lengths have been set based on the “Project Type” and “Product Type” fields in the multihome task.</p>

		<h3>The timeline is clearly spanning over weekends, are these days counting towards the project duration?</h3>
		<p>No, the weekends aren’t included in the allotted days for each project phase. As the days for each project phase are plotted out, they pass over the weekend without actually counting towards the total days for that phase.</p>

		<h3>How can I edit my project's start date?</h3>
		<p>The application sets the start date from the “Est. Dev Date” field.</p>

		<h3>How can I zoom in and out of the timeline?</h3>
		<p>You can hold “ctrl” and then use your mouse scroll to zoom in or out.</p>

		<h3>How can I navigate the timeline?</h3>
		<p>Click and drag any part of the timeline</p>

		<h3>Can I see more details about a project?</h3>
		<p>You can see more details on a project by selecting it. These items are pulled from the project’s Asana multi-home task.</p>

		<h3>What are the rate limits with the Asana API?</h3>
		<p>Asana’s API has the following rate limits:
		<span>1500 API requests per minute (premium domains, which I believe we are)
		50 Concurrent GET & 15 concurrent POST/PUT/PATCH/DELETE.</span>  
		This should not be a problem for the application but if we eventually hit this limit then we will just have to start removing squad tags from old projects. It might be a good habit to pull these tags from completed projects as we go along
		</p>
	</div>
);

export default FAQ