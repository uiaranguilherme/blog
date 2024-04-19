/** @format */

export default (section: string) => {
  // Lógica para rolar para a seção desejada
  const element = document.getElementById(section);
  if (element !== null) {
    element.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  }
};
