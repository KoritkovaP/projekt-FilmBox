// Najdeme prvek s ID 'menu-tlacitko'
const menuTlacitko = document.querySelector('#menu-tlacitko');
console.log(menuTlacitko);

// Najdeme prvek s ID 'menu-polozky'
const menuPolozky = document.querySelector('#menu-polozky');

// Přidáme posluchač události kliknutí na tlačítko
menuTlacitko.addEventListener('click', () => {
  // Přepneme třídu 'show' u prvku s ID 'menu-polozky'
  menuPolozky.classList.toggle('show');
});
