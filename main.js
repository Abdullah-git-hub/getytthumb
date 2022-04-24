// const ytForm = document.getElementById("linkForm");
// const ytLink = document.getElementById("ytLink");
// const thumbImg = document.getElementById("thumbImg");
// const downloadBtn = document.getElementById("downloadBtn");

// ytForm.onsubmit = function(e){
//     let data = ytLink.value;
//     // console.log(data)
//     let n = data.indexOf("watch") + 8
//     console.log(data.slice(n,(n+11)))
//     console.log(`https://img.youtube.com/vi/${data.slice(n,(n+11))}/0.jpg`)
//     thumbImg.src = `https://img.youtube.com/vi/${data.slice(n,(n+11))}/0.jpg`;
//     // downloadBtn.href = `https://img.youtube.com/vi/${data.slice(n,(n+11))}/0.jpg`;
//     downloadImage(`https://img.youtube.com/vi/${data.slice(n,(n+11))}/0.jpg`);

//     e.preventDefault()
// }

// async function downloadImage(imageSrc) {
//     const image = await fetch(imageSrc)
//     const imageBlog = await image.blob()
//     const imageURL = URL.createObjectURL(imageBlog)
  
//     const link = document.createElement('a')
//     link.href = imageURL
//     link.download = 'thumb'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
// }

const ytLink = document.getElementById("ytLink"),
prevBox = document.querySelector(".prevBox"),
prevBoxIcon = document.querySelector(".prevBox .icons"),
downloadBtn = document.getElementById("downloadBtn"),
prevImg = document.querySelector(".prevBox img");

ytLink.onkeyup = function(){
    // console.log(this.value)
    if(this.value != ""){
        prevBox.classList.add("showPrev");
        downYtThumb(this.value)
    }else{
        prevBox.classList.remove("showPrev");
        console.log(this.value);
    }
}

function downYtThumb(link){
    let data = ytLink.value;
    if(data.indexOf("watch?") != -1 && data.indexOf("youtube.com") != -1){

        let n = data.indexOf("watch") + 8
        // console.log(data.slice(n,(n+11)))
        prevImg.src = `https://img.youtube.com/vi/${data.slice(n,(n+11))}/maxresdefault.jpg`;
        downloadBtn.href = (`https://img.youtube.com/vi/${data.slice(n,(n+11))}/maxresdefault.jpg`);

    }else if(data.indexOf("embed/") != -1 && data.indexOf("youtube.com") != -1){

        let n = data.indexOf("embed") + 6
        prevImg.src = `https://img.youtube.com/vi/${data.slice(n,(n+11))}/maxresdefault.jpg`;
        downloadBtn.href = (`https://img.youtube.com/vi/${data.slice(n,(n+11))}/maxresdefault.jpg`);

    }else if(data.indexOf("embed/") == -1 && data.indexOf("watch?") == -1 && data.indexOf("youtu.be/") != -1){

        let n = data.indexOf("youtu.be/") + 9
        prevImg.src = `https://img.youtube.com/vi/${data.slice(n,(n+11))}/maxresdefault.jpg`;
        downloadBtn.href = (`https://img.youtube.com/vi/${data.slice(n,(n+11))}/maxresdefault.jpg`);

    }else{
        prevBox.classList.remove("showPrev");
        downloadBtn.href = "https://media.istockphoto.com/photos/macca-kabe-picture-id508107988?b=1&k=20&m=508107988&s=170667a&w=0&h=QiSqIWBJAwMP8IBWo0FDUn17U_xP5l-X3J_b8NaIne8=";
    }
}

// https://youtu.be/FucPPCPDd2Y

function download(data){
    // const blob = new Blob([data], {type: "image/jpeg"});

    // const href = URL.createObjectURL(blob);

    // console.log(href)
    fetch(data).then(res => res.blob()).then(blob => {
        let objectURL = URL.createObjectURL(blob);
        let myImage = new Image();
        myImage.src = objectURL;
        document.getElementById('myImg').appendChild(myImage)
    })
}