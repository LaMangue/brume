const header = document.getElementById("header");
const footer = document.getElementById("footer");
const main = document.getElementById("main");

header.innerHTML = readTextFile("./components/header.html");
footer.innerHTML = readTextFile("./components/footer.html");

function readTextFile(file) {
  let output = "";
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        output = allText;
      }
    }
  };
  rawFile.send(null);
  return output;
}

const router_links = document.querySelectorAll("[router-link]");
for (link of router_links) {
  link.addEventListener("click", (event) => {
    const path = event.target.attributes["router-link"].value;
    setPage(path);
  });
}

setPage("naissance_du_monde_erudit");
function setPage(path) {
const html = readTextFile(`./views/${path}.html`);
    main.innerHTML = html;

}