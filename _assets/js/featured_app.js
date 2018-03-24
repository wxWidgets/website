/* Randomly choose a screenshot to show on the home page. */

var featured_apps = [
	[
		'ECMerge',
		'ECMerge on Linux',
		'ecmerge-linux-thumb.png',
		'ecmerge-linux.png'
	],
	[
		'Audacity',
		'Audacity on Windows',
		'audacity-msw-thumb.jpg',
		'audacity-msw.png'
	],
	[
		'Poedit',
		'Poedit on Mac OS X',
		'poedit-mac-thumb.jpg',
		'poedit-mac.png'
	],
	[
		'Transcribe!',
		'Transcribe! on Linux',
		'transcribe-mac-thumb.jpg',
		'transcribe-mac.png'
	],
	[
		'WebsitePainter',
		'WebsitePainter on Windows',
		'websitepainter-msw-thumb.jpg',
		'websitepainter-msw.jpg'
	],
	[
		'Kirix Strata',
		'Kirix Strata on Windows',
		'kirix-strata-msw-thumb.jpg',
		'kirix-strata-msw.png'
	]
];

$(document).ready(function(){
	var featured_app_num = Math.floor( Math.random() * featured_apps.length );

	// Make some room in the grid for the screenshot.
	$('.home-intro-text').removeClass('col-lg-12').addClass('col-lg-9');

	$('.home-intro').append(' \
		<div class="col-lg-3 text-center featured-app d-none d-lg-block"> \
			<a href="/about/screenshots/' + featured_apps[featured_app_num][3] + '" title="' + featured_apps[featured_app_num][1] + '" data-fancybox> \
				<img src="/about/screenshots/' + featured_apps[featured_app_num][2] + '" class="img-thumbnail" alt="' + featured_apps[featured_app_num][1] + '" width="170" height="130" /> \
			</a> \
			<p style="font-size: 1rem;">Featured App:<br>' + featured_apps[featured_app_num][0] + '</p> \
			<p style="font-size: 1rem;"><a href="/about/screenshots/">More Screenshots</a> \
		</div> \
	');
});
