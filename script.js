const a = document.querySelector(".modal");
const b = document.querySelector(".tint");

const openmodal = () => {
    a.classList.add("active");
    b.classList.add("active");
}

let closemodal = () => {
    a.classList.remove("active")
}