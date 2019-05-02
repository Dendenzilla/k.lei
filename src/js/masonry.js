var $grid = $('.grid').masonry({
    // options
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    horizontalOrder: true,
    gutter: '.gutter-sizer'
  });

  // layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});


$('.container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });