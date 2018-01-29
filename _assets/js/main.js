//= require webfont
//= require form-send

  WebFont.load({
    google: {
      families: ['Karla:700,700i', 'Montserrat']
    }
  });

$(window).on('load', function () {
	$("#loading").addClass("hidden").delay( 2000 );
    $(".notseen").addClass("load")
});


