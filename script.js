const app = () => {
    const modal = document.querySelector(".modal");
    const modalBtn = document.getElementById("modal-btn");
    const closeBtn = document.querySelector(".close");
    const tl = new TimelineMax({ delay: 0.2 });


    function openModal() {
        modal.style.display = "block";
        tl.fromTo(modal, 0.5, { y: "-500", opacity: 0 }, { y: "0", opacity: 1 });
    }

    function closeModal() {
        tl.fromTo(modal, 0.5, { y: "0", opacity: 1 }, { y: "-500", opacity: 0 })
    }

    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener("click", closeModal);
};
app();