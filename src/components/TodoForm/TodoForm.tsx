import {useDispatch} from "react-redux";
import {Button, Input} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {Controller, useForm} from "react-hook-form";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import {AppDispatch, createTodo, ETodoStatus} from "../../store";
import {NewTodoLayout} from "./TodoForm.styles.ts";

import {StyledBox} from "../UI/StyledBox.ts";


export const TodoForm = () => {
    const dispatch = useDispatch<AppDispatch>()

    const {control, handleSubmit, setValue} = useForm({
        mode: 'onSubmit',
        defaultValues: {
            title: ''
        }
    })
    const createTodoHandler = (data: { title: string }) => {
        if (data.title.trim() === "") {
            window.alert("Введите текст")
            return
        }
        dispatch(
            createTodo({
                id: Date.now(),
                title: data.title.trim(),
                status: ETodoStatus.active,
            })
        )
        setValue('title', '')
    }

    return (
        <form onSubmit={handleSubmit(createTodoHandler)}>
            <StyledBox>
                <NewTodoLayout>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon/>}
                        type="submit"
                    >
                        Добавить
                    </Button>
                    <Controller
                        name="title"
                        control={control}
                        render={({field, fieldState}) => (
                            <Input
                                placeholder="Пополните список"
                                error={!!fieldState.error}
                                onChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                    <Controller
                        name="title"
                        control={control}
                        render={({field}) => (
                            <Button
                                variant="contained"
                                color="error"
                                endIcon={<ClearAllIcon/>}
                                onClick={() => {
                                    field.onChange('')
                                }}
                            >
                                Очистить
                            </Button>
                        )}
                    />
                </NewTodoLayout>
            </StyledBox>
        </form>
    )
}