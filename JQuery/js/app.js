$("#accordion button").click(function(){
    $("#accordion p").stop().slideUp()
    $(this).next().stop().slideToggle()
})

$("#tabMenu button").click(function(){
    $("#tabMenu button").css("background"," rgb(86, 86, 131")
    $(this).css("background","#333")
    const btnInd=$(this).index()
    $("#tabMenu p").stop().slideUp()
    $("#tabMenu p").eq(btnInd).stop().slideDown()
})