

let bar = document.querySelector(".toggle-menu");

let isClicked = false;

bar.addEventListener("click",function(event)
{
    let elementUl = event.target.nextElementSibling;
    if (elementUl.className === "") 
    {
        elementUl.className = "headnav";
        return;    
    }
    elementUl.className = "";
    
})

