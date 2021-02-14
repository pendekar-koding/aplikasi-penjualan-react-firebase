import {Button, Container, Paper, Typography, TextField, Grid} from "@material-ui/core";
import useStyles from "./styles";
import {Link} from "react-router-dom";
import {useState} from "react";
import isEmail from "validator/es/lib/isEmail";


function Registrasi() {
    const classes = useStyles();
    const [form, setForm] = useState({
        email:'',
        password:'',
        ulangi_password:''
    });

    const [error, setError] = useState({
        email:'',
        password:'',
        ulangi_password:''
    })

    const handleChange = e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
        setError({
          ...error,
          [e.target.name]:''
        })
    }

    const validate = ()=>{
        const newError = {...error};

        if (!form.email){
            newError.email = 'Email wajib diisi'
        } else if (!isEmail(form.email)){
            newError.email = 'Email tidak valid'
        }

        if (!form.password){
            newError.password = 'Password wajib diisi'
        }

        if (!form.ulangi_password){
            newError.ulangi_password = 'Ulangi Password wajib diisi'
        } else if(form.ulangi_password !== form.password){
            newError.ulangi_password = 'Ulangi Password tidak sama dengan Password'
        }

        return newError;
    }

    const handleSubmit = e=>{
        e.preventDefault();
        const findError = validate();

        if (Object.keys(findError).some(err=>err!=='')){
            setError(findError);
        }
    }
    console.log(form);
    return <Container maxWidth={"xs"}>
        <Paper className={classes.paper}>
            <Typography
                variant={"h5"}
                component={"h1"}
                className={classes.title}>
                Buat Akun Baru
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    margin={"normal"}
                    label={"Alamat Email"}
                    fullWidth
                    required
                    value={form.email}
                    onChange={handleChange}
                    helperText={error.email}
                    error={error.email?true:false}
                />
                <TextField
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    margin={"normal"}
                    label={"Password"}
                    fullWidth
                    required
                    value={form.password}
                    onChange={handleChange}
                    helperText={error.password}
                    error={error.email?true:false}
                />
                <TextField
                    id={"ulangi_password"}
                    type={"password"}
                    name={"ulangi_password"}
                    margin={"normal"}
                    label={"Ulangi Password"}
                    fullWidth
                    required
                    value={form.ulangi_password}
                    onChange={handleChange}
                    helperText={error.ulangi_password}
                    error={error.email?true:false}
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