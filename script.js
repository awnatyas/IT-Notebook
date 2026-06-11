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

function searchNotes(){

    let keyword =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let resultContainer =
        document
        .getElementById("searchResults");

    resultContainer.innerHTML = "";

    if(keyword === ""){
        return;
    }

    for(let i = 0; i < localStorage.length; i++){

        let key = localStorage.key(i);

        let note =
            localStorage.getItem(key);

        if(
            key.toLowerCase().includes(keyword)
            ||
            note.toLowerCase().includes(keyword)
        ){

            resultContainer.innerHTML += `
                <div
                    class="result-card"
                    onclick="openNote('${key}')"
                >

                    <h3>${key}</h3>

                    <p>
                    ${note.substring(0,120)}...
                    </p>

                </div>
            `;
        }
    }
}