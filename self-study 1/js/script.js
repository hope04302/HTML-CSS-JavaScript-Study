document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#search button")
    .addEventListener("click", function (event) {
        var title = document.querySelector("#search input").value;
        document.querySelector("#search input").value = "";
        document.querySelector("main").innerHTML += "<h1>" + title + "<h1>" + "<br>";
    });

    (function (global) {


        var script = {};



    })(window);



})