function darkmode() {


    var element = document.body;
    // var s = document.body;
    element.classList.toggle("dark-mode");
    var element = document.getElementById("mode");
    element.classList.toggle("fa-moon");
    element.classList.toggle("fa-sun");
    var s = document.getElementsByTagName("p");
    for (var i = 0; i < s.length; i++) {
        s[i].classList.toggle("dark-mode");
        s[i].classList.toggle("dark-font");
    }
    // var w = document.body;
    var w = document.getElementsByTagName("h1");
    for (var i = 0; i < w.length; i++) {
        w[i].classList.toggle("dark-mode");
    }

    var x = document.getElementsByTagName("a");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.toggle("dark-mode");
        x[i].classList.toggle("dark-mode:hover");
    }
   var span = document.getElementsByTagName("span");
    for (var i = 0; i < span.length; i++) {
        span[i].classList.toggle("dark-mode");
    }
    
    
}

