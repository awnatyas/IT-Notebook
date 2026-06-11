let currentTopic = "";

function openNote(topic){

    currentTopic = topic;

    document.getElementById("home").style.display = "none";

    document.getElementById("notePage").classList.remove("hidden");

    document.getElementById("noteTitle").innerText =
        topic.toUpperCase();

    let savedNote =
        localStorage.getItem(topic);

    document.getElementById("noteContent").value =
        savedNote || "";
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