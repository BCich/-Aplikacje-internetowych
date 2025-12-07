function addMovie() {
    var title = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    var actors = document.getElementById("actors").value;

    if (title === "" || year === "" || actors === "") {
        alert("Please fill in all fields.");
        return;
    }
    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + title + ", " + year + ", " + actors;
    document.querySelector("ul").appendChild(li);

    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("actors").value = "";
}