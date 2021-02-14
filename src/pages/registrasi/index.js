import {Button, Container, Paper, Typography, TextField, Grid} from "@material-ui/core";
import useStyles from "./styles";
import {Link} from "react-router-dom";


function Registrasi() {
    const classes = useStyles();

    return <Container maxWidth={"xs"}>
        <Paper className={classes.paper}>
            <Typography
                variant={"h5"}
                component={"h1"}
                className={classes.title}>
                Buat Akun Baru
            </Typography>
            <form>
                <TextField
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    margin={"normal"}
                    label={"Alamat Email"}
                    fullWidth
                    required
                />
                <TextField
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    margin={"normal"}
                    label={"Password"}
                    fullWidth
                    required
                />
                <TextField
                    id={"ulangi_password"}
                    type={"ulangi_password"}
                    name={"ulangi_password"}
                    margin={"normal"}
                    label={"Ulangi Password"}
                    fullWidth
                    required
                />

                <Grid container className={classes.buttons}>
                    <Grid item xs>
                        <Button color={"primary"}
                                variant={"contained"}
                                type={"submit"}
                                size={"large"}>
                            Daftar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant={"contained"}
                                size={"large"}
                                component={Link}
                                to={"/login"}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </Paper>
    </Container>
}

export default Registrasi;