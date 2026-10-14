function login() {
    alert("Welcome to Mind Your Botness!");
    window.location.href = "feed.html";
}

function signup() {
    alert("Account Created Successfully!");
    window.location.href = "index.html";
}

function createPost() {

    let text = document.getElementById("postText").value;

    if(text === ""){
        alert("Please write something first.");
        return;
    }

    let post = document.createElement("div");

    post.className = "post";

    post.innerHTML =
        "<h3>You</h3>" +
        "<p>" + text + "</p>" +
        "<button onclick='this.parentElement.remove()'>Delete</button>";

    document.getElementById("posts").appendChild(post);

    document.getElementById("postText").value = "";
}