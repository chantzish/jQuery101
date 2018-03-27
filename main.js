// console.log($("h1"));
// var kQuery = function (arg) {
//     return {
//       message: function () {
//         alert(arg)
//       }
//     }
// }
// var myObject = kQuery('hi');
// myObject.message();
// kQuery('hello to you as well').message();

$(".red-div").css("color","red");
$("#brown-div").css("color","brown");
$("ul:first > li:nth-child(1)").css("color","green");
$("ul > li:nth-child(2)").css("color","pink");
$("button:first").on("click",function(){alert($("#my-input").val());} );
$("button:nth-of-type(2)").on("click",function(){
    // onclick=\"removeMe($(this));\"
    var newHtml = "<li>"+$("#my-input2").val()+"</li>";
    $(newHtml).appendTo('.students').click(function(){
        $(this).remove();
    });;
    // $(".students").append("<li>"+$("#my-input2").val()+"</li>").click(function(){
    //     console.log(this);
    // });
} );
// var removeMe = function(ob){
//     $(ob).remove();
// };
$("li").click(function(){
    $(this).remove();
});