function inscription() {
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prenom, nom, email, password }),
    })
        .then((response) => response.json())
        .then((data) => alert(data.message))
        .catch((error) => alert("Erreur lors de l'inscription"));
}

function connexion() {
    const email = document.getElementById("email_login").value;
    const password = document.getElementById("password_login").value;

    fetch("/api/connexion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    })
        .then((response) => response.json())
        .then((data) => alert(data.message))
        .catch((error) => alert("Erreur lors de la connexion"));
}
