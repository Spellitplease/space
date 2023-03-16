anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1500,
    delay: (el, i) => 1500 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //&lt;![CDATA[

jQuery(document).ready(function(){

    $('#essai').hide(0).delay(5000).show(200);
    });
    
    //]]&gt;