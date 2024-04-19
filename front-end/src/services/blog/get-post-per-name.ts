export default async (name: string) => {
  return await fetch(
    "http://127.0.0.1:5173/posts/o-que-e-node-js-guia-para-iniciantes.md",
    { method: "GET" }
  )
    .then((res) => res.text())
    .catch((err) => null);
};
