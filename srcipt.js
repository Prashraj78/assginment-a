function openNav() {
    var sidePanel = document.getElementById("sidePanel");
    if (sidePanel.style.width === "250px") {
        sidePanel.style.width = "0";
    } else {
        sidePanel.style.width = "250px";
    }
}


function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}

