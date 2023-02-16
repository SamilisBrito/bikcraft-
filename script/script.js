const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;

  //includes = se tem tal coisa na variável

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLinks);
