/** @format */

import { ReactNode, useEffect, useState } from "react";
import {
  WhapperCarousel,
  ContainerCarousel,
  DotsCarousel,
  WhapperItemCarousel,
} from "./styles";
import { Grow } from "@mui/material";
import Dots from "./dots";
import arrayDivider from "../../utils/array-divider";

interface ICarouselProps {
  children: ReactNode;
  dividerPer?: number;
}

export default ({ children, dividerPer }: ICarouselProps) => {
  if (Array.isArray(children) === false) {
    return <WhapperCarousel>{children}</WhapperCarousel>;
  }

  const [dots, setDots] = useState<number>(0);
  const [isSelect, setIsSelect] = useState<number>(0);

  useEffect(() => {
    if (Array.isArray(children)) {
      setDots(children.length);
    }
  }, [children]);

  if (dividerPer === undefined) {
    return (
      <WhapperCarousel>
        <ContainerCarousel>
          {Array.isArray(children) &&
            children.map((child, index) => (
              <Grow
                style={{ width: "100%" }}
                timeout={index === 0 ? 500 : index * 1000}
                key={index}
                in={isSelect === index}>
                <WhapperItemCarousel isvisible={isSelect === index}>
                  {child}
                </WhapperItemCarousel>
              </Grow>
            ))}
        </ContainerCarousel>
        <DotsCarousel>{dots}</DotsCarousel>
      </WhapperCarousel>
    );
  }

  children = arrayDivider(children, dividerPer);
  useEffect(() => {
    if (Array.isArray(children)) {
      setDots(children.length);
    }
  }, [children]);

  return (
    <WhapperCarousel>
      <ContainerCarousel>
        {Array.isArray(children) &&
          children.map((child, index) => (
            <WhapperItemCarousel isvisible={isSelect === index}>
              {Array.isArray(child) &&
                child.map((ch, id) => (
                  <Grow
                    style={{ width: "100%" }}
                    timeout={id === 0 ? 500 : id * 1000}
                    key={id}
                    in={isSelect === index}>
                    <div>{ch}</div>
                  </Grow>
                ))}
            </WhapperItemCarousel>
          ))}
      </ContainerCarousel>
      <DotsCarousel>
        {Object.keys(new Array(dots).fill(null)).map((dt, index) => (
          <Dots
            onClick={() => setIsSelect(index)}
            isSelected={isSelect === index}
          />
        ))}
      </DotsCarousel>
    </WhapperCarousel>
  );
};
