window.addEventListener('load', function () {
    var dropdownMenuButton = document.getElementById("DropdownMenuButton");
    dropdownMenuButton.addEventListener("click", toggleDropdownMenu)

  })

function toggleDropdownMenu() {
    var dropdownMenu = document.getElementById("DropdownMenu");
    dropdownMenu.classList.toggle("hidden");
}
