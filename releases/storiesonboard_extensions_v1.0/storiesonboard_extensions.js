function addCopyPermalinkButtonToSidebar() {
  var personaLink = document.querySelector('[id^="card-persona-menu-"]');
  if (personaLink && !document.querySelector("#sobe__copy-permalink-button")) {
    var sidebarContainer = document.querySelector(".card-body-right");
    var roadmapCardId = personaLink.id.replace("card-persona-menu-", "");
    var button = Object.assign(document.createElement("button"), {
      type: "button",
      className: "sobe__button",
      id: "sobe__copy-permalink-button",
      textContent: "Copy permalink",
    });
    sidebarContainer.appendChild(document.createElement("br"));
    sidebarContainer.appendChild(button);
    _addClickListenerToCopyPermalinkButton(roadmapCardId);
  }
}

const observer = new MutationObserver(() => {
  if (document.querySelector('[id^="card-persona-menu-"]')) {
    setTimeout(addCopyPermalinkButtonToSidebar(), 500);
  }
});
observer.observe(document, { subtree: true, childList: true });

// private

function _addClickListenerToCopyPermalinkButton(roadmapCardId) {
  document.body.addEventListener("click", function (event) {
    if (event.target.id == "sobe__copy-permalink-button") {
      _copyCardPermalinkToClipboard(roadmapCardId);
    }
  });
}

function _copyCardPermalinkToClipboard(roadmapCardId) {
  if (document.querySelector("#sobe__copy-permalink-button")) {
    var newLocation = _getPermalinkUrl(roadmapCardId);
    _updateCopyPermalinkText();
    navigator.clipboard.writeText(newLocation);
  }
}

function _getPermalinkUrl(roadmapCardId) {
  var splitLocation = window.location
    .toString()
    .replace("/r/", "/m/")
    .split("/");
  splitLocation[splitLocation.length - 1] = `!card/${roadmapCardId}`;
  return splitLocation.join("/");
}

function _updateCopyPermalinkText() {
  document.querySelector("#sobe__copy-permalink-button").innerHTML = "Copied!";
  setTimeout(() => {
    document.querySelector("#sobe__copy-permalink-button").innerHTML =
      "Copy permalink";
  }, "1500");
}
