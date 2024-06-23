import { Button, Pagination } from "@mui/material";
import {
  WhapperPostNewsletter,
  ImgPostNewsletter,
  TitlePostNewsletter,
  DateCreateAtPostNewsletter,
  StacksPostNewsletter,
} from "../../(blog)/newsletters/styles";
import {
  WhapperPostsDashboard,
  HeaderPostsDashboard,
  ContainerPostsDashboard,
  FooterPostDashboard,
} from "./styles";
import { Card, Stack } from "../../../components";
import ModalAddPost from "./modal-add-post";

const othersPosts = [
  {
    name: "O que é Node.js? [Guia para iniciantes]",
    link: "/guia-para-iniciantes-node",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/clement-helardot-95YRwf6CNw8-unsplash-1-scaled-e1611956600834-1536x864.jpg",
    stacks: ["Node"],
  },
  {
    name: "20 Comandos em node para salvar seu projeto",
    link: "/20-comandos-node",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2021/02/o_que_e_node_js-e1612977170388.jpg",
    stacks: ["Node"],
  },
  {
    name: "GitHub vai exigir autenticação em dois fatores para proteger códigos",
    link: "/github-vai-exigir-autenticacao-em-dois-fatores-para-proteger-codigos",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2022/05/github-2fa.jpg",
    stacks: ["GitHub"],
  },
  {
    name: "GitHub vai exigir autenticação em dois fatores para proteger códigos",
    link: "/github-vai-exigir-autenticacao-em-dois-fatores-para-proteger-codigos",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2022/05/github-2fa.jpg",
    stacks: ["GitHub"],
  },
  {
    name: "Como criar um blog grátis: 5 plataformas com esse propósito",
    link: "/como-criar-um-blog-gratis-5-plataformas",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2022/01/alterar-dados-mei-1-1536x864.jpg",
    stacks: ["Blog", "Node", "PHP", "Wordpress"],
  },
  ,
  {
    name: "Linguagem Elixir; 7 motivos para aprender",
    link: "/linguagem-elixir-7-motivos-para-aprender",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2022/01/linguagem-elixir-capa-tb-1536x864.png",
    stacks: ["Elixir", "Tecnologia", "Programação"],
  },
  ,
  {
    name: "OLX, Trybe e outras abrem mais de 1.000 vagas de emprego em tecnologia",
    link: "/olx-trybe-e-outras-abrem-mais-de-1-000-vagas-de-emprego-em-tecnologia",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2021/08/olx-brasil-e1629167065118.jpg",
    stacks: ["OlX", "Programação"],
  },
  ,
  {
    name: "O que é TypeScript? [Guia para iniciantes]",
    link: "/o-que-e-typescript-guia-para-iniciantes",
    createdAt: new Date(),
    img: "https://files.tecnoblog.net/wp-content/uploads/2021/03/o_que_e_typescript_james-harrison-unsplash-700x394.jpg",
    stacks: ["Typescript"],
  },
];

export default () => {
  return (
    <WhapperPostsDashboard>
      <HeaderPostsDashboard>
        <Button variant="contained" disableElevation>
          Adicionar novo Post
        </Button>
      </HeaderPostsDashboard>
      <ContainerPostsDashboard>
        {othersPosts.map((post) => (
          <Card>
            <WhapperPostNewsletter>
              <ImgPostNewsletter src={post?.img} />
              <TitlePostNewsletter>{post?.name}</TitlePostNewsletter>
              <DateCreateAtPostNewsletter variant="caption">
                {post?.createdAt.toLocaleString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </DateCreateAtPostNewsletter>
              <StacksPostNewsletter>
                {post?.stacks.map((stack) => (
                  <Stack>{stack}</Stack>
                ))}
              </StacksPostNewsletter>
            </WhapperPostNewsletter>
          </Card>
        ))}
      </ContainerPostsDashboard>
      <FooterPostDashboard>
        <Pagination count={5} />
      </FooterPostDashboard>
      <ModalAddPost />
    </WhapperPostsDashboard>
  );
};
