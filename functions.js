function toggleStyle() {
    const styleElement = document.getElementById("currentStyleSheet");
    let currentName = styleElement.getAttribute("href");

    if (currentName === "style1.css") {
        currentName = "style2.css";
    }

    else {
        currentName = "style1.css";
    }

    styleElement.setAttribute("href", currentName);
    localStorage.setItem("currentStyle", currentName);
}

window.onload = function(){
    if (localStorage.getItem("currentStyle") === null) {
        localStorage.setItem("currentStyle", "style1.css");
    }
    let currentStyle = localStorage.getItem("currentStyle")
    const styleElement = document.getElementById("currentStyleSheet");
    styleElement.setAttribute("href", currentStyle);
}