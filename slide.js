# portfolio//ハンバーガー
$('.burger-btn').on('click',function(){
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
});

$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    
    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入してください
    var clickedIndex =$('.index-btn').index($(this));
    
    // eqの引数をclickedIndexに書き換えてください
    $('.slide').eq(clickedIndex).addClass('active');
    
  });
//スクロール
  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 500){
                $(this).addClass('scrollin');
            }
        });
    });
});
//ロ―ディングアイコン
window.onload = function() {
  let spinner = document.getElementById('my-spinner');
 
  // .box に .loaded を追加してローディング表示を消す
  spinner.classList.add('loaded');
} 
});
//slider
$('.slider').slick({
  autoplay:true,
  autoplaySpeed:2000,
  speed:1000,//fadeのスピード
  fade:true,
  cssEase:'linear'
});

