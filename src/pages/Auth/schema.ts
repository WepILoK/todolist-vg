import * as yup from "yup";

export const authFormSchema = yup.object().shape({
    login: yup.string()
        .matches(/^admin$/, "Логин должен быть вида: admin")
        .required('Введите почту'),
    password: yup.string()
        .matches(/^admin$/, "Пароль должен быть: admin")
        .required('Введите пароль'),
});