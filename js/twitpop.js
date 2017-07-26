$(document).ready(function() {
 
 $('.social').click(function(event) {
    var width  = 800,
        height = 385,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        scrollbars = true,
        url    = this.href,        
        opts   = 'status=1' +  
                ',scrollbars' +              
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left; 


    
    window.open(url, 'social', opts );
 
    return false;
  });


 
});