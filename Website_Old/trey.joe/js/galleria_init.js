$(document).ready(function()
{
	Galleria.loadTheme('./jq/galleria/themes/classic/galleria.classic.min.js');
   	Galleria.run('#galleria', {
    	transition: 'fadeslide',
    	imageCrop: true,
		autoplay:2000,
		swipe:true,
		carousel:true
	});
});