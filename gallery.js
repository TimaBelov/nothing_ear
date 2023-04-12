const ACTIVE_SLIDE_CLASSNAME = "gallery__slide__active";

const slidesNodes = Array.from(document.querySelectorAll(".gallery__slide"));
const prevButtonNode = document.querySelector(".gallery__control-prev");
const nextButtonNode = document.querySelector(".gallery__control-next");

let activeId;

init();

function init() {
  activeId = 0;

  prevButtonNode.addEventListener("click", () => {
    setActiveSlideById(getPrevID());
  });

  nextButtonNode.addEventListener("click", () => {
    setActiveSlideById(getNextID());
  });
}

function setActiveSlideById(id) {
  const currentId = activeId;
  activeId = id;
  slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME);
  slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);
}

function getPrevID() {
  return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextID() {
  return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}
