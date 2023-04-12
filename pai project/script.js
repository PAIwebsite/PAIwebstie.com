// Mendapatkan elemen tombol
const button = document.querySelector('.button');

// Menambahkan event listener pada tombol
button.addEventListener('click', function() {
  // Mengambil nilai input
  const nameInput = document.querySelector('#name').value;
  
  // Menampilkan pesan selamat datang
  const greeting = document.querySelector('.greeting');
  greeting.textContent = `Selamat datang, ${nameInput}!`;
  greeting.classList.add('visible');
});
