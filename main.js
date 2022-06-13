const darkmode = () => {
    if(document.getElementById("mode-btn").checked) {
        document.body.style.backgroundColor = "#333";
        for(i = 0; i < document.getElementsByTagName("p").length; i++) {
            document.getElementsByTagName("p")[i].style.color = "#d6d6d6"
        }
        document.getElementById("create-acc").style.color = "white"
        for(i = 0; i < document.getElementsByTagName("hgroup")[0].childNodes.length; i++) {
            if(i %2 != 0)
                document.getElementsByTagName("hgroup")[0].childNodes[i].style.color = "white"
        }
        document.getElementById("button").childNodes[1].style.color = "white";
    }

    if(!document.getElementById("mode-btn").checked) {
        document.body.style.backgroundColor = "#fff";
        for(i = 0; i < document.getElementsByTagName("p").length; i++) {
            document.getElementsByTagName("p")[i].style.color = "black"
        }
        for(i = 0; i < document.getElementsByClassName("msg-text").length; i++) {
            document.getElementsByClassName("msg-text")[i].style.color = "#d6d6d6"
        }
        for(i = 0; i < document.getElementsByTagName("hgroup")[0].childNodes.length; i++) {
            if(i %2 != 0)
                document.getElementsByTagName("hgroup")[0].childNodes[i].style.color = "black"
        }
        document.getElementById("create-acc").style.color = "inherit"
        document.getElementById("button").childNodes[1].style.color = "black";
        
    }
}

const openMenu = () => {
    document.getElementById("menu").classList.toggle("open")
}

document.getElementById("btn").addEventListener("click", openMenu)
document.getElementById("close-btn").addEventListener("click", openMenu)