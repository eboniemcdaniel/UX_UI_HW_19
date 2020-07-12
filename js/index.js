console.log("Your index.js file works");

// $("li").hover(console.log("Mouse In"),console.log("Mouse Out"));

// $("li").click(console.log("li Clicked"));

$("li").hover(function (){
        $(this).css("text-decoration", "underline");
    },function(){
        $(this).css("text-decoration", "none");
    }
);
