const toggleMenuButton = document.getElementById('toggle-menu');
const sidebar = document.querySelector('.sidebar');

toggleMenuButton.addEventListener('click', () => {
  // Alternar la clase "collapsed" en el menú
  sidebar.classList.toggle('collapsed');

  if (sidebar.classList.contains('collapsed')) {
    // Cuando el menú está colapsado
    sidebar.style.width = '50px';
    toggleMenuButton.textContent = '>';
    toggleMenuButton.classList.add('outside');
    toggleMenuButton.style.left = '-20px'; // Mueve el botón hacia afuera del menú
  } else {
    // Cuando el menú está expandido
    sidebar.style.width = '300px';
    toggleMenuButton.textContent = '<';
    toggleMenuButton.classList.remove('outside');
    toggleMenuButton.style.left = ''; // Resetea la posición
  }
});
