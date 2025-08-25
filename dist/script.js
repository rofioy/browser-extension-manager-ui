'use strict';

const themePicker = document.getElementById('themePicker');

themePicker.addEventListener('click', () => {
  console.log(themePicker);

  document.documentElement.classList.toggle('dark');

  // Ganti ikonnya juga
  const themeIcon = themePicker.querySelector('img');

  // Cek apakah mode gelap aktif
  if (document.documentElement.classList.contains('dark')) {
    // Jika IYA (mode gelap), tampilkan ikon MATAHARI (untuk beralih ke terang)
    themeIcon.src = './images/icon-sun.svg';
  } else {
    // Jika TIDAK (mode terang), tampilkan ikon BULAN (untuk beralih ke gelap)
    themeIcon.src = './images/icon-moon.svg';
  }
});

// Load document HTML
document.addEventListener('DOMContentLoaded', () => {
  console.log('Halaman sudah siap, JavaScript berjalan!');

  //Seleksi elemen untuk Filter
  const allButton = document.getElementById('all');
  const activeButton = document.getElementById('active');
  const inactiveButton = document.getElementById('inactive');

  //   console.log(allButton, activeButton, inactiveButton);
  //Ambil SEMUA elemen yang punya class 'extension-card'
  const allCards = document.querySelectorAll('.extension-card');

  const filterButtons = [allButton, activeButton, inactiveButton];

  function updateActiveButton(clickedButton) {
    // Loop setiap tombol yang ada di dalam grup 'filterButtons'
    filterButtons.forEach((button) => {
      // Hapus semua background merah dari semua tombol
      button.classList.remove('bg-red-700');
    });

    // Tambahkan background merah pada tombol yang diklik
    clickedButton.classList.add('bg-red-700');
  }

  //   Fungsi FilterCards utama untuk memfilter kartu
  function filterCards(filterType) {
    // Loop setiap kartu yang ada di variabel allCard
    allCards.forEach((card) => {
      // Cari elemen input checkbox di dalam kartu
      const toggle = card.querySelector('input[type="checkbox"]');

      // Cek checkbox apakah dicentang
      const isChecked = toggle.checked;

      // Logic
      switch (filterType) {
        case 'all':
          // Tampilkan card
          card.style.display = 'flex';
          break;
        case 'active':
          // Tampilkan kartu hanya jika togglenya dicentang (isChecked)
          if (isChecked) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
          break;
        case 'inactive':
          // Tampilkan kartu HANYA JIKA toggle-nya TIDAK dicentang (!isChecked)
          if (!isChecked) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
          break;
      }
    });
  }

  //   Event Listener
  // 1. Tombol All
  allButton.addEventListener('click', () => {
    // Update tampilan button
    updateActiveButton(allButton);
    // Jalankan fungsi filterCards dengan parameter 'all'
    filterCards('all');
  });

  //   2. Tombol Active
  activeButton.addEventListener('click', () => {
    // Update tampilan tombol
    updateActiveButton(activeButton);
    // Jalankan fungsi filterCards dengan parameter 'active'
    filterCards('active');
  });

  // 3. Tombol Inactive
  inactiveButton.addEventListener('click', () => {
    // Update tampilan tombol
    updateActiveButton(inactiveButton);
    // Jalankan fungsi filterCards dengan parameter 'inactive'
    filterCards('inactive');
  });
});
