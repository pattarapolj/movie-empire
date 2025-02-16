import { makeStyles } from "@mui/styles";

const drawerWidth = "240px";

export default makeStyles((theme) => ({
    toolbar: {
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "240px",
        [theme.breakpoints.down("sm")]: {
            // This is everything below 600px or mobile devices
            marginLeft: 0,
            flexWrap: "wrap",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            // This is everything above 600px or not mobile devices
            display: "none",
        },
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    linkButton: {
        '&:hover': {
            color: 'white  !important',
            textDecoration: 'none',
        }
    },
}));
