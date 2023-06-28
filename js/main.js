try {
    var typed3 = new Typed("#typed3", {
        strings: ['I\'M A STRUGGLER', 'I\'M A CODE WRITTER', 'I\'M A JAVA DEVELOPER'],//字符串
        startDelay: 0,//开始的延迟
        typeSpeed: 200,//打字速度
        backSpeed: 100,//回退速度
        loop: true,//是否循环
        showCursor: true,//显示游标
        smartBackspace: true, //默认true
        cursorChar: '_',//游标样式
    });
} catch (err) {
}


$(document).ready(function(){
    // 添加 scrollspy 到 <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // 在导航栏内的所有链接上添加平滑滚动
    $("#myNavbar a").on('click', function(event) {
      // 确保 this.hash 在覆盖默认行为之前有一个值
      if (this.hash !== "") {
        // 防止默认的锚点点击行为
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // 使用 jQuery 的 animate() 方法添加平滑的页面滚动
        // 可选数字（800）指定滚动到指定区域所需的毫秒数
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // 完成滚动时将哈希 (#) 添加到 URL（默认点击行为）
          window.location.hash = hash;
        });
      }  // End if
    });
  });
