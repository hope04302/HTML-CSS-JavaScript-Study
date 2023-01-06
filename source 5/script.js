// Event -> 이러면 굳이 html 끝에 js file 넣을 필요 X
document.addEventListener("DOMContentLoaded",
function (event) {
    /* document object */
    console.log(document.getElementById("title"));
    console.log(document instanceof HTMLDocument);

    /* button의 onclick과 상호작용 */
    /* 

    주의!
    this -> 기본적으로 window를 가리킴.
    new를 사용해 객체로 만들어야 this가 가리키는 것을 바꿀 수 있음.

    */

    function sayHello (event) {

        console.log(event);
        // name, name2 고쳐서 쓸 것

        var name = document.getElementById("name2").value
        var message = "Hello " + name + "!"
        var message2 = "<h2>Hello " + name + "!</h2>"

        /* .textContent vs innerHTML */

        document
        .getElementById("content")
        .textContent = message;

        document
        .getElementById("content2")
        .innerHTML = message2;

        /* 형태 기억(querySelector) */

        if (name === "hope04302") {
            var title =
            document
            .querySelector("#title")
            .textContent;
            title += " & Lovin' it!";
            document
            .querySelector("#title")
            .textContent = title;
        }

    }

    /* button에 onclick이 없더라도 이렇게 하면 됨 */
    // document
    // .querySelector("#button")
    // .addEventListener("click", sayHello);

    document
    .querySelector("#button")
    .onclick = sayHello;

    document.querySelector("body")
    .addEventListener("mousemove",
    function (event) {
        console.log("x: " + event.clientX);
        console.log("y: " + event.clientY);
    });
});