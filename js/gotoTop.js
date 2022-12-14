/**
 * 返回顶部功能函数封装
 */ 
// 当前页面加载完成
$(function(){
    // 把函数挂载在window上暴露出去
    window.gotoTop=function(options){
        // 准备结构
        var $gotoTopHtml=$('<div class="backToTop"> <img src="../../img/gototop_05.jpg" alt=""></div>');
    // 写样式定位
        $gotoTopHtml.css({
            width:'30px',
            height:'50px',
            positionn:'fixed',
            bottom:'100px',
            left:'610px',
            marginLeft:'50%',
            display:'none',
        });
        // 返回顶部的js代码
        /* 返回顶部 */
    /* 绑定滚动事件 */
    $(document).scroll(function(){
        //获取距离顶部的位置
        var topDistance = $('html,body').scrollTop();
        //判断
        if (topDistance > 500){
            $('.backToTop').fadeIn();
        }else{
            $('.backToTop').fadeOut();
        }
    })
    //返回顶部功能 动态添加的元素 需要使用事件委托 才能绑定事件）
    $('body').on('click','.backToTop',function(){
        $('html,body').animate({
            scrollTop:0
        },300)
    })
    // 追加到页面的尾部
    $('body').append($gotoTopHtml)
    }
})