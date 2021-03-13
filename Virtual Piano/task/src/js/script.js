document.addEventListener("keydown", function (event) {
    switch (event.code) {
        case "KeyA":
            let audioA = new Audio("white_keys/A.mp3");
            audioA.load();
            audioA.play();
            break;
        case "KeyS":
            let audioS = new Audio("white_keys/S.mp3");
            audioS.load();
            audioS.play();
            break;
        case "KeyD":
            let audioD = new Audio("white_keys/D.mp3");
            audioD.load();
            audioD.play();
            break;
        case "KeyF":
            let audioF = new Audio("white_keys/F.mp3");
            audioF.load();
            audioF.play();
            break;
        case "KeyG":
            let audioG = new Audio("white_keys/G.mp3");
            audioG.load();
            audioG.play();
            break;
        case "KeyH":
            let audioH = new Audio("white_keys/H.mp3");
            audioH.load();
            audioH.play();
            break;
        case "KeyJ":
            let audioJ = new Audio("white_keys/J.mp3");
            audioJ.load();
            audioJ.play();
            break;
        case "KeyW":
            let audioW = new Audio("black_keys/W.mp3");
            audioW.load();
            audioW.play();
            break;
        case "KeyE":
            let audioE = new Audio("black_keys/E.mp3");
            audioE.load();
            audioE.play();
            break;
        case "KeyT":
            let audioT = new Audio("black_keys/T.mp3");
            audioT.load();
            audioT.play();
            break;
        case "KeyY":
            let audioY = new Audio("black_keys/Y.mp3");
            audioY.load();
            audioY.play();
            break;
        case "KeyU":
            let audioU = new Audio("black_keys/U.mp3");
            audioU.load();
            audioU.play();
            break;
        default:
            console.warn("Not a correct key!");
            break;
    }
});