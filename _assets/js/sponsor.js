/* Randomly choose a sponsor to show in the sidebar. */

var sponsors = [
	[
		'Writer\'s Café - a place to be creative',
		'http://www.writerscafe.co.uk/',
		'writerscafe.gif'
	],
	[
		'Try HelpBlocks, a great HTML Help editor',
		'http://www.helpblocks.com/',
		'helpblocks.gif'
	],
	[
		'DialogBlocks - dialogs unlimited',
		'http://www.anthemion.co.uk/dialogblocks/',
		'dialogblocks.gif'
	],
	[
		'wxWidgets Consulting',
		'http://www.tt-solutions.com/',
		'tt.gif'
	],
];

$(document).ready(function(){
	var sponsor_num = Math.floor( Math.random() * sponsors.length );

	$('div.logos .card-body').html(' \
		<a href="' + sponsors[sponsor_num][1] + '" target="_new"> \
			<img src="/assets/img/logos/' + sponsors[sponsor_num][2] + '" alt="' + sponsors[sponsor_num][0] + '" /> \
		</a> \
    ');

    $('div.logos').show();
});
