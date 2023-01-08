document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#search button")
    .addEventListener("click", function (event) {
        var title = document.querySelector("#search input").value;
        document.querySelector("#search input").value = "";
        document.querySelector("main").innerHTML += title + "<br>";
    });

    (function (global) {


        var script = {};



    })(window);



})