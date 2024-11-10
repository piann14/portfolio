// Menambahkan Intersection Observer untuk mengamati bagian-bagian halaman saat mereka muncul
const sections = document.querySelectorAll('.animate-item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

// Menambahkan event listener untuk menampilkan formulir "Contact Me"
document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah aksi default untuk menavigasi ke #contact
    document.getElementById('contact-form').style.display = 'block'; // Menampilkan formulir
    window.scrollTo(0, document.getElementById('contact-form').offsetTop); // Scroll ke formulir
});

// Menambahkan event listener untuk menangani pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil data formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Menampilkan pesan konfirmasi atau pengolahan data formulir
    alert('Terima kasih ' + name + '! Pesan Anda telah dikirim.');

    // Mengosongkan formulir setelah pengiriman
    document.getElementById('contactForm').reset();
});
// Fungsi untuk animasi mengetik pada teks
const roles = ["Aspiring Developer", "Frontend Developer", "Fullstack Developer"];
let roleIndex = 0;
const roleElement = document.getElementById("role");

function animateRole() {
    roleElement.textContent = "";
    const role = roles[roleIndex];
    let charIndex = 0;

    // Menggunakan setInterval untuk mengetik satu per satu karakter
    const typingInterval = setInterval(() => {
        roleElement.textContent += role.charAt(charIndex);
        charIndex++;

        // Jika semua karakter sudah diketik, ganti ke teks berikutnya
        if (charIndex === role.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                roleIndex = (roleIndex + 1) % roles.length; // Mengganti ke teks berikutnya
                animateRole(); // Panggil kembali untuk animasi
            }, 1000); // Tunggu 1 detik sebelum mengganti teks
        }
    }, 100); // Interval waktu untuk mengetik karakter
}

// Mulai animasi
animateRole();

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('clicked');
    });
});
