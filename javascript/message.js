
//form validation
function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;
    var now = new Date();

    if (name == "" || date == "" || gender == "" || messages == "") {
        alert("Input tidak boleh kosong");
        return false;
    }

    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    document.getElementById("sender-time").innerText = now;
    return false;
}