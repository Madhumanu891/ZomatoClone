// update location in the web page

let fun=(e)=>{
   let sr=document.getElementsByClassName("location")
       sr[0].innerHTML=e.value
       sr[1].innerHTML=e.value
       sr[1].style.color="brown"
       sr[1].style.fontSize="18px"
}

// acordiance for popular search
let ir=document.getElementsByTagName("i")
let dr=document.getElementsByClassName("down-list")
let i=0
let fun1=(ind)=>
{
    if(ind==i)
    {
        if(dr[i].style.display=="none")
        {
            dr[i].style.display="block"
            ir[i].style.class="fa-solid fa-angle-up"
        }
        else{
            dr[i].style.display="none"
            ir[i].style.class="fa-solid fa-angle-down"
        }
    }
    else{
            dr[i].style.display="none"
            ir[i].style.class="fa-solid fa-angle-down"
            dr[ind].style.display="block"
            ir[ind].style.class="fa-solid fa-angle-up"
            i=ind
    }
}

//handbarge functionality
function toggleMenu() {
    let menu = document.getElementsByClassName('bars')[0];
    // Toggle the display property
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}