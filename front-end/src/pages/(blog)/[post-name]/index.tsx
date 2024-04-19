import { useEffect, useState } from "react";
import { getPostPerName } from "../../../services";
import { Footer, Markdown } from "../../../components";
import { WhapperPostPerName } from "./styles";

export default () => {
  const [text, setText] = useState<string | null>("");

  useEffect(() => {
    (async () => {
      var text = await getPostPerName("");
      setText(text);
    })();
  }, []);

  return (
    <WhapperPostPerName>
      <Markdown>{text}</Markdown>
      <Footer />
    </WhapperPostPerName>
  );
};
