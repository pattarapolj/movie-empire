import { makeStyles } from "@mui/styles";
import { border } from "@mui/system";

export default makeStyles((theme) => ({
    searchContainer: {
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
    },
    input: {
        color: theme.palette.mode === "light" && "black",
        filter: theme.palette.mode === "light" && "invert(1)",
        [theme.breakpoints.down("sm")]: {
            marginTop: "-10px",
            marginBottom: "10px",
        },
    },
}));
