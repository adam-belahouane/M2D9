const addDeleteTrack = function(){
    let parent = document.querySelectorAll("tbody > tr")
    console.log(parent)
    for(let i = 1;i>parent.length;i++){
        let btn= document.createElement("td")
        btn.innerHTML = '<button type="button" class="btn btn-primary">Primary</button>'
        console.log(btn)
        parent.appendChild(btn)
    }
}