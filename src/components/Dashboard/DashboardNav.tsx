import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";
type Props = {
  role: String;
};

const DashboardNav = (props: Props) => {
  const { role } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
    navigate(`/${role?.toLowerCase()}`);
  };

  const handleLogout = (e: any) => {
    localStorage.setItem("token", "");
    localStorage.setItem("authorization", "");
  };
  return (
    <div className="sticky top-0 z-20 bg-white left-0 border-b border--600  backdrop-filter backdrop-blur-lg bg-opacity-60   p-2 text-bold text-xl flex justify-end ">
      <h1 className="w-full text-3xl text-green-400 font-bold m-4  cursor-pointer font-serif">
        Merry Meal
      </h1>
      <Tooltip title="Account Nav">
        <IconButton onClick={(e) => handleClick(e)}>
          <Avatar sx={{ width: 40, height: 40 }}>N</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Dashboard
        </MenuItem>
        <Divider />

        <a
          href={`${window.location.protocol}//${window.location.host}/login`}
          onClick={(e) => handleLogout(e)}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </a>
      </Menu>
    </div>
  );
};

export default DashboardNav;
