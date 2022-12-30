function talk() {
    var know = {
        "hi":"hello sir how can i help you?",
        "who are you": "Hello, AICTE doubts clearing bot",
        "how are you": "Good :)",
        "can u help me with login": "Sure, follow the steps for login",
        "can u help me with payment":
            "Sure, follow the steps for payment",
        ok: "Thank You So Much ",
        Bye: "Okay! Contact me anytime to get your doubts cleared..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}

