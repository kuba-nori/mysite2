$(function(){
    $(".card-img-top").hover(
        function(){
            $(this).animate({
                'width':'130px','height':'130px'
            },300);
        },
        function(){
            $(this).animate({
                'width':'120px','height':'120px'
            },300);

            } );
  });


  