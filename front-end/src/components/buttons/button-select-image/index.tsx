import { Button, ButtonProps } from "@mui/material";

interface IButtonSelectImageProps extends ButtonProps {
  onSelectImage: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default ({ onSelectImage, ...rest }: IButtonSelectImageProps) => {
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={onSelectImage}
      />
      <label htmlFor="contained-button-file">
        <Button {...rest} component="span">
          {rest.children}
        </Button>
      </label>
    </>
  );
};
