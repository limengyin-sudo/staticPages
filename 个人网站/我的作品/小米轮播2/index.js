	$(document).ready(function(){
    // 定义正在显示的元素下标
    var index = 0;
    $(".next").click(function(){
        index++;
        if(index>4){
            index = 0;
        }
        animate(index);
    })
    $(".prev").click(function(){
        index--;
        if(index<0){
            index = 4;
        }
        animate(index);
    })
    // 点击按钮，让对应的图片出现
    $(".all-icons span").click(function(){
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".pic img").eq(index).show().siblings().hide();
    })
     // 焦点随左右按钮变化
    function animate(index){
        $(".pic img").eq(index).show().siblings().hide()
        $(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active");
    }
    //自动播放
    function play() {
        timer = setInterval(function () {
            $(".next").click()
        }, 2000)
    }
    function stop() {
        clearInterval(timer)
    }
    $(".banner").mouseover(function(){
        stop();
    })
    $(".banner").mouseout(function(){
        play();
    })
    play();
})

// 1.先考虑右边的按钮，每次点一下,实现一个加加,但是有一个临界值,达到临界值,下标重置;
// 2.点击左边的按钮,每次点一下减减,达到临界值,下标重置;
// 3.点击左右按钮,焦点图跟着改变;
// 4.点击焦点,焦点对应的下标的图片出现,下标重置为当前焦点的下标.