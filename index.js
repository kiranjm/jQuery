$(document).ready(function(){
    
    //adding classes
    $("h1").addClass("big-title strike");
    //$("h1").removeClass("big-title");
    //("h1").hasClass("big-title");
    //changing text
    $("button").text("click me more");
    //adding tag
    $("h1").html("<em>helloooooo</em>");
    //attributes
    $("a").attr("href","http://www.yahoo.com")

    $("h1").click(function(){
        $("h1").css("color","purple");
    });
    //events
    $(document).keydown(function(e){
        $("h1").text(e.key);
    })
    $("h1").on("mouseover",function(e){
        $("h1").css("color","red");
    })
    //adding or removing element before() after() prepend() append()
    $("h1").after("<p>newly added</p>");
    //animation hide() show() slideup() slidedown() slidetoggle() animate()
    $("button").on("click",function(){
        $("h1").slideUp().slideDown().animate({opacity:0.3});
    });
});
 