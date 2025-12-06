//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  const card = document.createElement("div");

  const episodeName = document.createElement("h1");
  episodeName.textContent =
    episodeList[0].name +
    " - " +
    "S" +
    episodeList[0].season.toString().padStart(2, "0") +
    "E" +
    episodeList[0].number.toString().padStart(2, "0");

  card.appendChild(episodeName);
  rootElem.appendChild(card);
}

window.onload = setup;
