
const menu = document.getElementById("menu");
const logbook = document.getElementById("logbook");
const summary = document.getElementById("summary");

const menuBtn = document.getElementById("menu_Btn");
const logbookBtn = document.getElementById("logbook_Btn");
const summaryBtn = document.getElementById("summary_Btn");

const confBtn = document.getElementById("confirm");

menuBtn.onclick = function () {
    menu.classList.remove("hidden");
    logbook.classList.add("hidden");
    summary.classList.add("hidden");

};
logbookBtn.onclick = function () {
    menu.classList.add("hidden");
    logbook.classList.remove("hidden");
    summary.classList.add("hidden");

};
summaryBtn.onclick = function () {
    menu.classList.add("hidden");
    logbook.classList.add("hidden");
    summary.classList.remove("hidden");
};

confBtn.addEventListener("click", function () {
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const studentClass = document.getElementById("studentClass");
    const date = document.getElementById("date");
    const place = document.getElementById("place");
    const dateStart = document.getElementById("dateStart");
    const dateEnd = document.getElementById("dateEnd");
    const display = document.getElementById("display");

    console.log(name.value, surname.value, studentClass.value,
        date.value, place.value, dateStart.value, dateEnd.value); //dziłą
    display.innerHTML = `Imie: ${name.value}, Nazwisko: ${surname.value}, 
    Klasa ucznia: ${studentClass.value},
    Rok szkolny: ${date.value}, Miejsce odbycia praktyk: ${place.value}, Data rozpoczęcia praktyk: ${dateStart.value}, Data zakończenia praktyk: ${dateEnd.value}`
})


