const buttonCurso = document.getElementById("button-curso");

function toggleMenu(event) {
  const cursoInfo = document.getElementById("cursoInfo");
  cursoInfo.classList.toggle("cursoInfoAtivo");

  const cursoInfoAtivo = cursoInfo.classList.contains("cursoInfoAtivo");
  event.currentTarget.setAttribute("aria-expanded", cursoInfoAtivo);
  if (cursoInfoAtivo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

buttonCurso.addEventListener("click", toggleMenu);

// FECHAR

const buttonCursoFechar = document.getElementById("button-curso-fechar");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const cursoInfo = document.getElementById("cursoInfo");
  cursoInfo.classList.toggle("cursoInfoAtivo");

  const cursoInfoAtivo = cursoInfo.classList.contains("cursoInfoAtivo");
  event.currentTarget.setAttribute("aria-expanded", cursoInfoAtivo);
  if (cursoInfoAtivo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

buttonCursoFechar.addEventListener("click", toggleMenu);
buttonCursoFechar.addEventListener("touchstart", toggleMenu);