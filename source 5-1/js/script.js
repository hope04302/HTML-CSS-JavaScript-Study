// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        // 뒤에 코드가 더 있다면, 비동기로 뒤의 코드 실행
        $ajaxUtils 
        .sendGetRequest("data/name.json", 
          function (res) {  // json obj
            var message =
            res.firstName + " " + res.lastName;
            if(res.likesChineseFood) {
              message += " likes CF";
            }
            else {
              message += " doesn't like CF";
            }
            message += " and uses ";
            message += res.numberOfDisplays;
            message += " displays for coding.";

            document.querySelector("#content")
              .innerHTML = "<h2>Hello " + message + "!</h2>";
          });

        
      });
  }
);





