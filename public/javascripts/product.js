var add_image_handlers = function() {
  $("#main-image").data('selectedThumb', $('#main-image img').attr('src'));
  $('ul.thumbnails li').eq(0).addClass('selected');
  $('ul.thumbnails li a').click(function() {
    $("#main-image").data('selectedThumb', $(this).attr('href'));
    $('ul.thumbnails li').removeClass('selected');
    $(this).parent('li').addClass('selected');
    return false;
  }).hover(
    function() {
      $('#main-image img').attr('src', $(this).attr('href').replace('mini', 'product'));
    },
    function() {
      $('#main-image img').attr('src', $("#main-image").data('selectedThumb'));
    }
    );
};

jQuery(document).ready(function() {
  add_image_handlers();
});

function update_variant_images(vid, text) {
  jQuery("#variant-thumbnails").empty();
  if (text) jQuery("#variant-images span").html(text);

  if (images && images[vid] && images[vid].length > 0) {
    $.each(images[vid], function(i, link) {
      jQuery("#variant-thumbnails").append('<li>' + link + '</li>');
    });

    jQuery("#variant-images").show();
  } else {
    jQuery("#variant-images").hide();
  }

  add_image_handlers();

  var link = jQuery("#variant-thumbnails a")[0];

  jQuery("#main-image img").attr({
    src: jQuery(link).attr('href')
    });
  jQuery('ul.thumbnails li').removeClass('selected');
  jQuery(link).parent('li').addClass('selected');
}