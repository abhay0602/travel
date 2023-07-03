document.addEventListener("DOMContentLoaded", function(){{
    document.querySelector(".btn-0").addEventListener("click",function(){
        let menu=document.querySelector("#menu")
        if(menu.style.display=="flex"){
            menu.style.display="none"
        }else if(menu.style.display="none"){
            menu.style.display="flex"
        }
    })

}})