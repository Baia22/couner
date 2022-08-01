let decrease=document.querySelector(".decrease")



let reset=document.querySelector(".reset")



let increase=document.querySelector(".increase")

let number=document.querySelector(".number")



let count=0;
// number.innerHTML=count;


decrease.addEventListener("click", function(){
        // console.log(number.innerHTML--)
        count--
        number.innerHTML=count
})

increase.addEventListener("click", function(){
    // console.log(number.innerHTML++)
    count++
    number.innerHTML=count
})

reset.addEventListener("click",function() {
    // console.log(number.innerHTML=0)
    count=0
    number.innerHTML=count
})