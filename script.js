const modal = document.querySelector(".modal");
const tint = document.querySelector(".tint");

function openmodal()
{
    modal.classList.add("active")
    tint.classList.add("active")
}

function closemodal()
{
    modal.classList.remove("active")
}