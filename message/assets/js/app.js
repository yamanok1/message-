const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", () => { 
    createNotifaction()
})

function createNotifaction(){
    const notif = document.createElement("div")

    notif.classList.add("mesaj")

    notif.innerText = "Sepete Eklendi !!"

    container.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    },2000)
}
    