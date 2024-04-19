import { AccountCircleTwoTone, LogoutTwoTone } from "@mui/icons-material";
import { IconButton, MenuItem } from "@mui/material";
import { WhapperHeaderMenuLayoutDashboard, Logo, WhapperUserMenuLayoutDashboard, WhapperMenuUserLayoutDashboard,  } from "./styles"
import { useState } from "react";

export default () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <WhapperHeaderMenuLayoutDashboard elevation={0} position="fixed">
            <a href='/'>
                <Logo height='50px' width='80px' src='/imgs/logo.svg' />
            </a>
            <WhapperUserMenuLayoutDashboard>
                <IconButton onClick={handleClick} size="medium">
                    <AccountCircleTwoTone fontSize="large"/>
                </IconButton>
                <WhapperMenuUserLayoutDashboard 
                    elevation={0}
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}>
                        <MenuItem><LogoutTwoTone/> Sair</MenuItem>
                </WhapperMenuUserLayoutDashboard>
            </WhapperUserMenuLayoutDashboard>
        </WhapperHeaderMenuLayoutDashboard>
    );
}