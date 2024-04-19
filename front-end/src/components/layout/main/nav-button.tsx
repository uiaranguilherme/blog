/** @format */

import { useNavigate } from "react-router-dom";
import { NavItemHeaderLayoutMain } from "./styles";

interface INavButtonProps {
  link: string;
  label: string;
}

export default ({ label, link }: INavButtonProps) => {
  var navigate = useNavigate();
  return (
    <NavItemHeaderLayoutMain
      onClick={() => navigate(link)}
      disableElevation
      variant={window.location.pathname.includes(link) ? "outlined" : "text"}>
      {label}
    </NavItemHeaderLayoutMain>
  );
};
