function setup() {
    let background = "../src/background4.jpg";
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = "cover";

    console.log(window.screen.height);
}

setup();