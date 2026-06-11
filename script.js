let currentTopic = "";

function openNote(topic){

    currentTopic = topic;

    document.getElementById("home").style.display =
        "none";

    document.getElementById("notePage")
        .classList.remove("hidden");

    let title = topic
        .replaceAll("-", " ")
        .toUpperCase();

    document.getElementById("noteTitle")
        .innerText = title;

    let savedNote =
        localStorage.getItem(topic);

    document.getElementById("noteContent")
        .value = savedNote || "";
}

function goBack(){

    document.getElementById("home").style.display = "grid";

    document.getElementById("notePage").classList.add("hidden");
}

function saveNote(){

    let content =
        document.getElementById("noteContent").value;

    localStorage.setItem(currentTopic, content);

    alert("Catatan berhasil disimpan!");
}