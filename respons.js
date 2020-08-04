document.getElementById("inicio").style.display = "block";
document.getElementById("nosotros").style.display = "none";
document.getElementById("servicios").style.display = "none";
document.getElementById("contacto").style.display = "none";

function inicio() {
    document.getElementById("inicio").style.display = "block";
    document.getElementById("nosotros").style.display = "none";
    document.getElementById("servicios").style.display = "none";
    document.getElementById("contacto").style.display = "none";
};

function nosotros() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("nosotros").style.display = "block";
    document.getElementById("servicios").style.display = "none";
    document.getElementById("contacto").style.display = "none";
};

function servicios() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("nosotros").style.display = "none";
    document.getElementById("servicios").style.display = "block";
    document.getElementById("contacto").style.display = "none";
};

function contacto() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("nosotros").style.display = "none";
    document.getElementById("servicios").style.display = "none";
    document.getElementById("contacto").style.display = "block";
};
