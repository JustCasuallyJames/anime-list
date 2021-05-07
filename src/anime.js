const base_url = "https://api.jikan.moe/v3/anime";

const pageLoaded = () => {
    fetch(base_url)
        .then(res => res.json())
        .then(data=>console.log(data))
        .catch(err => console.log(err.message))
}


window.addEventListener("load", pageLoaded);