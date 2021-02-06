
$('.grid-sorting').addClass("active");
$('.list-sorting').click(function(){
    $('.gorev-calismasi-wrapper .list-items .list-item').removeClass("col-md-3");
    $('.gorev-calismasi-wrapper .sort-wrapper .grid-sorting').removeClass("active");
    $('.gorev-calismasi-wrapper .list-items .list-item').addClass("col-md-4");
    $('.gorev-calismasi-wrapper .sort-wrapper .list-sorting').addClass("active");
});
$('.grid-sorting').click(function(){
    $('.gorev-calismasi-wrapper .list-items .list-item').addClass("col-md-3");
    $('.gorev-calismasi-wrapper .sort-wrapper .grid-sorting').addClass("active");
    $('.gorev-calismasi-wrapper .list-items .list-item').removeClass("col-md-4");
    $('.gorev-calismasi-wrapper .sort-wrapper .list-sorting').removeClass("active");
});