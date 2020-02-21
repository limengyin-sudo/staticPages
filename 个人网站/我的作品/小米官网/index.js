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
    $(".pic").mouseover(function(){
        stop();
    })
    $(".pic").mouseout(function(){
        play();
    })
    play();
})