const btn = document.querySelector(".btn")
const ul = document.querySelector("ul")

const output = document.createElement("div")
output.classList.add("alert","alert-success")


ul.addEventListener("click",(e)=>{
    console.log(e.target)
    const active = document.querySelector(".active")
    if(active){
        active.classList.remove("active")
    }
    e.target.classList.add("active")

    output.innerText = "You selected "+e.target.innerText 
    output.classList.remove("hide")
    ul.insertAdjacentElement("afterend",output)

})


btn.addEventListener("click", ()=>{
  
  /*   console.dir(ul.classList)  */
     ul.classList.toggle("hide")
     output.classList.add("hide")

    btn.innerText = ul.classList.contains("hide") ? "Show Destinations":"Hide Destinations"
})