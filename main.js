const menu = document.getElementById("menu");
const logbook = document.getElementById("logbook");
const summary = document.getElementById("summary");


const menuBtn = document.getElementById("menu_Btn");
const logbookBtn = document.getElementById("logbook_Btn");
const summaryBtn = document.getElementById("summary_Btn");


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







