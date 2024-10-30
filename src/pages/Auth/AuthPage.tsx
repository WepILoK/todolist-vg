import {Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Navigate} from "react-router-dom";
import {IAuthAction, login, selectIsAuth} from "../../store";
import {authFormSchema} from "./schema.ts";
import {useState} from "react";
import {StyledBox} from "../../components/UI/StyledBox.tsx";

export const AuthPage = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const [showPassword, setShowPassword] = useState(false);

    const {control, handleSubmit} = useForm({
        resolver: yupResolver(authFormSchema),
        mode: 'onSubmit',
        defaultValues: {
            login: '',
            password: ''
        }
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const onSubmit = (data: IAuthAction) => {
        dispatch(login(data))
    }

    if(isAuth) {
        return <Navigate to="/todolist-vg/todo" replace/>;
    }

    return (
        <StyledBox>
            <Typography variant="h5" mb={'12px'}>
                Авторизация
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="login"
                    control={control}
                    render={({field, fieldState}) => (
                        <TextField
                            helperText={fieldState.error ? fieldState.error.message : null}
                            size="small"
                            error={!!fieldState.error}
                            onChange={field.onChange}
                            value={field.value}
                            type={"text"}
                            fullWidth
                            label={"Логин"}
                            variant="outlined"
                            sx={{pb: "12px"}}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({field, fieldState}) => (
                        <TextField
                            helperText={fieldState.error ? fieldState.error.message : null}
                            size="small"
                            error={!!fieldState.error}
                            onChange={field.onChange}
                            value={field.value}
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>,
                            }}
                            fullWidth
                            label={"Пароль"}
                            variant="outlined"
                        />
                    )}
                />
                <Button
                    type="submit"
                    sx={{mt: "12px"}}
                    variant="contained"
                >
                    Войти
                </Button>
            </form>
        </StyledBox>
    )
}