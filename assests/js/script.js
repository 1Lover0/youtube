const menuItem = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

menuItem.onclick = function(){
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}
