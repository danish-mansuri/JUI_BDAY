async function fetchData() {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    display(data);
  } catch (error) {
    console.log(error);
  }
}

function display(data) {
  for (let i = 0; i < 7; i++) {
    let cards = document.getElementsByClassName("container")[0];
    cards.innerHTML += `<div class="card m-3 bg-danger" style="width: 18rem">
    <img src="images/${data[i].pic}" class="card-img-top" alt="..." />
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="display-4 text-light">${data[i].title}</h5>
        <div class="d-flex align-items-center">
          <button
            class="btn btn-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${i}"
            aria-expanded="false"
            aria-controls="collapse${i}"
          >
            Hey Jui
          </button>
        </div>
      </div>
      <div class="collapse" id="collapse${i}" data-bs-parent="#myGroup">
        <div class="card card-body mt-2">
          ${data[i].desc}
        </div>
      </div>
    </div>
  </div>`;
  }
}

window.addEventListener("load", (event) => {
  fetchData();
});

window.addEventListener("mousemove", ()=>{
  let bg_music = new Audio('song.mp3');
  bg_music.play(-1);
})