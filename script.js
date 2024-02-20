function module() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}




/*podemos utilizar a função TOGGLe porém não está liberando por motivo ainda desconhecido, ficaria assim: html.classlist.toggle('light') ...isso substituiria o IF e ELSE..assim a minha função deveria der TOGGLEMODE*/
