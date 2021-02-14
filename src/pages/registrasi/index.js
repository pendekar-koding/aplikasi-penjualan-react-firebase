import {Button} from "@material-ui/core";
import useStyles from "./styles";


function Registrasi(){
    const classes = useStyles();

    return<>
        <h1 className={classes.blue}>Halaman Registrasi</h1>
        <Button color={"primary"}
        variant={"contained"}>Click</Button>
    </>
}

export default Registrasi;