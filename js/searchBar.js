const cursosList = document.getElementById("cursosList");
const searchBar = document.getElementById("searchBar");
let cursos = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const cursosFiltrados = cursos.filter((curso) => {
    return curso.name.toLowerCase().includes(searchString);
  });
  displayCursos(cursosFiltrados);
});

const loadCursos = async () => {
  try {
    const res = await fetch(
      "https://listadecursos-api.vercel.app/api/cursos.json"
    );
    cursos = await res.json();
    displayCursos(cursos);
  } catch (err) {
    console.error(err);
  }
};

const displayCursos = (cursosGuia) => {
  const htmlString = cursosGuia
    .map((curso) => {
      return `
            <li class="curso" id=""nav>
              <button id="button-curso">
                <img src="${curso.image}"></img>
                  <h4>${curso.name}</h4>
              </button>
            </li>
        `;
    })
    .join("");
  cursosList.innerHTML = htmlString;
};

loadCursos();
