var tabs = document.querySelectorAll(".lboard_tabs ul li");
var so = document.querySelector(".so");
var tq = document.querySelector(".tq");
var tp = document.querySelector(".tp");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        var currenttab = tab.getAttribute("data-li");

        tabs.forEach(function(tab){
            tab.classList.remove("active");
        })

        tab.classList.add("active");

        items.forEach(function(item){
            item.style.display = "none";
        })

        if(currenttab == "so"){
            so.style.display = "block";
        }
        else if(currenttab == "tq"){
            tq.style.display = "block";
        }
        else{
            tp.style.display = "block";
        }

    })
})