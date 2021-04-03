import { Avatar, Button, Divider, IconButton, Link, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import img from "../../Images/nav.jpg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  icons: {
    "& > svg": {
		margin: theme.spacing(1),
		
	  },
	  align: "left"
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const sections = [
    { title: "Blog", url: "#" },
    { title: "Portfolio", url: "#" },
    { title: "Contact", url: "#" },
    { title: "About", url: "#" },
  ];
  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <Typography color="inherit" noWrap className={classes.icons}>
          <FacebookIcon/>
          <TwitterIcon />
          <InstagramIcon />
        </Typography>
        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
          <img src={img} height="100" width="300" />
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar container="nav" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} className={classes.toolbarLink}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Divider />
    </div>
  );
};
