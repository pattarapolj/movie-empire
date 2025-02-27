import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    movie: {
        padding: "10px",
    },
    links: {
        alignItems: "center",
        fontWeight: "bolder",
        textDecoration: "none",
        [theme.breakpoints.up("xs")]: {
            display: "flex",
            flexDirection: "column",
        },
        "&:hover": {
            cursor: "pointer",
        },
    },

    image: {
        borderRadius: "10px",
        height: "300px",
        marginBottom: "10px",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },

    title: {
        color: theme.palette.text.primary,
        textOverflow: "ellipsis", // cut off text if it's too long into...
        width: "230px",
        whiteSpace: "nowrap", // ...a single line
        overflow: "hidden", // hide the text that is cut off
        marginTop: "10px",
        marginBottom: "0",
        textAlign: "center",
    },
}));
