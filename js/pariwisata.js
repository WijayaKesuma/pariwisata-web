const slideContainer = document.querySelector(".container__content__destination");
const cards = document.querySelectorAll(".swiper__card");
const leftBtn = document.getElementById("left_btn");
const rightBtn = document.getElementById("right_btn");

// Mendapatkan lebar satu kartu
const cardWidth = cards[0].offsetWidth + 0; // Tambahkan gap antar kartu jika ada

let isScrolling = false; // Status lock

// Fungsi untuk memperbarui status tombol
function updateButtonStatus() {
    if (slideContainer.scrollLeft === 0) {
        leftBtn.disabled = true;
        leftBtn.style.opacity = "0.5";
    } else {
        leftBtn.disabled = false;
        leftBtn.style.opacity = "1";
    }

    if (slideContainer.scrollLeft + slideContainer.offsetWidth >= slideContainer.scrollWidth) {
        rightBtn.disabled = true;
        rightBtn.style.opacity = "0.5";
    } else {
        rightBtn.disabled = false;
        rightBtn.style.opacity = "1";
    }
}

// Fungsi untuk scroll ke kiri
leftBtn.addEventListener("click", () => {
    if (isScrolling) return; // Abaikan klik jika sedang scrolling
    isScrolling = true;

    slideContainer.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
    });

    setTimeout(() => {
        isScrolling = false;
        updateButtonStatus();
    }, 400); // Tunggu hingga scroll selesai (400ms sesuai durasi animasi scroll)
});

// Fungsi untuk scroll ke kanan
rightBtn.addEventListener("click", () => {
    if (isScrolling) return; // Abaikan klik jika sedang scrolling
    isScrolling = true;

    slideContainer.scrollBy({
        left: cardWidth,
        behavior: "smooth",
    });

    setTimeout(() => {
        isScrolling = false;
        updateButtonStatus();
    }, 400); // Tunggu hingga scroll selesai (400ms sesuai durasi animasi scroll)
});

// Event untuk memantau perubahan posisi scroll
slideContainer.addEventListener("scroll", () => {
    updateButtonStatus();
});

// Inisialisasi status tombol saat pertama kali
updateButtonStatus();