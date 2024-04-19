import Markdown from "react-markdown";
import Code from "./code";
import remarkGfm from "remark-gfm";
import Image from "./image";
import Italic from "./italic";
import H1 from "./h1";
import Blockquote from "./blockquote";

export default ({ children }: { children: string | null | undefined }) => {
  return (
    <Markdown
      components={{
        h1(props) {
          return <H1 {...props} />;
        },
        em(props) {
          return <Italic {...props} />;
        },
        blockquote(props) {
          return <Blockquote {...props} />;
        },
        img(props) {
          return <Image {...props} />;
        },
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <Code {...rest} children={String(children).replace(/\n$/, "")} />
          ) : (
            <code {...rest}>{children}</code>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </Markdown>
  );
};
