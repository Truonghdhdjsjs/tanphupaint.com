var menu = document.getElementById("menu_reponsive_list");

function openMenu() {
    menu.style.width = "300px"; // Set the width to expand the menu
    // menu.style.display = "inline-block"; // Not necessary when using width
    // menu.style.visibility = "visible"; // Set visibility to make the menu visible
    menu.style.display="block";
}

function closeMenu() {
    menu.style.width = "0px"; // Set the width to collapse the menu
    menu.style.backgroundColor = "#fff"; // Optional: Set background color to transparent
    menu.style.color = "transparent"; // Optional: Set text color to transparent
    // menu.style.display = "none"; // Not necessary when using visibility
    // menu.style.visibility = "hidden"; // Set visibility to hide the menu
    menu.style.display="none";
}
