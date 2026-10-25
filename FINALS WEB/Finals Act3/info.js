$(document).ready(function () {
    
    // 1. Change Title
    $("#btn1").click(function () {
        $("#title").text("Good Morning taong may bitawww");
    });

    // 2. Change Course Message
    $("#course").change(function () {
        $("#message").text($(this).val());
    });

    // 3. Focus on Name Input
    $("#name").focus(function () {
        $("#message").text("Input field focused!");
        $(this).css("background-color", "lightyellow");
    }).blur(function() {
        // Bonus: Reset background when clicking away
        $(this).css("background-color", "white");
    });

    $("#Course").change(function(){
        $("#message").text($(this).val());
    })

    // 4. Hide Card and Table
    $("#btn2").click(function () {
        $("#message").text("You clicked Button 2! Hiding table...");
        $(".card1").hide(1000);
        $("#table").hide(1000);
    });

    // 5. Show Table on Double Click (Fixed typos)
    $("#btn3").dblclick(function () {
        $("#message").text("You double-clicked the button!");
        $(this).css("color", "white"); // Fixed "coolor" typo
        $("#table").show(1000);        // Fixed "1000" string
    });

    // 6. Initial Table Stripes
    $("tr:even").css("background", "lightblue");
    $("tr:odd").css("background", "lightyellow");

    // 7. Apply Red to Even Rows
    $("#btn4").click(function () {
        $("tr:even").css("background", "red");
        $("#message").text("Even rows changed to RED");
    });

    // 8. Apply Green to Odd Rows
    $("#btn5").click(function () {
        $("tr:odd").css("background", "green");
        $("#message").text("Odd rows changed to GREEN");
    });

});