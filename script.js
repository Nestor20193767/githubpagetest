const toggleMenuButton = document.getElementById('toggle-menu');
const sidebar = document.querySelector('.sidebar');

toggleMenuButton.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  if (sidebar.classList.contains('collapsed')) {
    sidebar.style.width = '50px';
    toggleMenuButton.textContent = '>';
  } else {
    sidebar.style.width = '300px';
    toggleMenuButton.textContent = '<';
  }
});
