window.onload = function(){
    var button = document.querySelector("button");
    var httpRequest;

    button.addEventListener('click',function(element){
        element.preventDefault();

        httpRequest = new XMLHttpRequest();

        var url = "superheroes.php";
        httpRequest.onreadystatechange = loadList;
        httpRequest.open('POST',url);
        httpRequest.send();
    });

    function loadList(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                var button = document.querySelector('button');
                button.innerHTML = response;
            }
            else{
                alert('There was a problem with the request.');
            }
        }
    }
};