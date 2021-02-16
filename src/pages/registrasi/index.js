import React, {useState} from "react";
import {Button, Container, Paper, Typography, TextField, Grid} from "@material-ui/core";
import useStyles from "./styles";
import {Link, Redirect} from "react-router-dom";
import isEmail from "validator/es/lib/isEmail";
import {useFirebase} from "../../components/firebaseProvider";
import AppLoading from "../../components/AppLoading";


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

    const [isSubmitting, setSubmitting] = useState(false);

    const {auth, user, loading} = useFirebase();

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

    const handleSubmit = async e => {
        e.preventDefault();
        const findErrors = validate();

        if (Object.values(findErrors).some(err => err !== '')){
            setError(findErrors);
        } else {
            try {
                setSubmitting(true);
                await auth.createUserWithEmailAndPassword(form.email, form.password)
            } catch (e) {
                const newError = {};
                switch (e.code) {
                    case 'auth/email-already-in-use':
                        newError.email = 'Email sudah terdaftar';
                        break;
                    case 'auth/invalid-email':
                        newError.email = 'Email tidak valid';
                        break;
                    case 'auth/weak-password':
                        newError.password = 'Password lemah';
                        break;
                    case 'auth/operation-not-allowed':
                        newError.email = "Metode email dan password tidak didukung"
                        break;
                    default:
                        newError.email = 'Terjadi kesalahan silahkan coba lagi';
                        break;
                }
                setError(newError);
                setSubmitting(false);
            }
        }
    }

    if (loading){
        return <AppLoading />
    }

    if (user){

        return <Redirect to={"/"} />
    }



    console.log(user);
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
                    error={error.email ? true : false}
                    disabled={isSubmitting}
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
                    error={error.email ? true : false}
                    disabled={isSubmitting}
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
                    error={error.email ? true : false}
                    disabled={isSubmitting}
                />

                <Grid container className={classes.buttons}>
                    <Grid item xs>
                        <Button color={"primary"}
                                variant={"contained"}
                                type={"submit"}
                                size={"large"}
                                disabled={isSubmitting}
                        >
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