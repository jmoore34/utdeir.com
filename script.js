// change the selected mentor in appointment form
// name should be lowercase last name
function chgSelectedMentor(name) {
    document.querySelector(`#person [value="${name}"]`).selected = true;
    location.hash = "#contact";
}