import {SyntheticEvent, useEffect, useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

import {AppDispatch, completeTodo, deleteTodos, ETodoStatus, getTodos, selectTodos} from "../../store";
import {CustomTabPanel} from "../../components/CustomTabPanel/CustomTabPanel.tsx";
import {TodoItem} from "../../components/TodoItem/TodoItem.tsx";
import {TodoForm} from "../../components/TodoForm/TodoForm.tsx";

import {StyledBox} from "../../components/UI/StyledBox.ts";
import {DeleteAllButton, StyledList, TabsLayout, TodoListLayout, TodoTabsLayout} from "./TodoList.styles.ts";


export const TodoList = () => {
    const [activeTab, setActiveTab] = useState<ETodoStatus | "all">("all");
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch<AppDispatch>()

    const activeTodos = todos.filter(item => item.status === ETodoStatus.active)
    const completedTodos = todos.filter(item => item.status === ETodoStatus.completed)
    const deletedTodos = todos.filter(item => item.status === ETodoStatus.deleted)

    const handleChange = (_: SyntheticEvent, newValue: ETodoStatus | "all") => {
        setActiveTab(newValue);
    };

    const completeTodoHandler = (id: number) => {
        dispatch(completeTodo(id))
    }

    const deleteTodoHandler = (id?: number) => {
        if (id) {
            dispatch(deleteTodos([id]))
        } else {
            const ids = (activeTab === "all" ? todos : todos.filter(item => item.status === activeTab)).map(item => item.id)
            dispatch(deleteTodos(ids))
        }
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    return (
        <TodoListLayout>
            <TodoForm/>
            <StyledBox>
                <TodoTabsLayout>
                    <TabsLayout>
                        <Tabs
                            value={activeTab}
                            onChange={handleChange}
                            variant="fullWidth"
                        >
                            <Tab
                                value={ETodoStatus.active}
                                label={
                                    activeTodos.length
                                        ? `Текущие дела (${activeTodos.length})`
                                        : "Текущие дела"
                                }
                            />
                            <Tab
                                value="all"
                                label={
                                    todos.length
                                        ? `Все дела (${todos.length})`
                                        : "Все дела"
                                }
                            />
                            <Tab
                                value={ETodoStatus.completed}
                                label={
                                    completedTodos.length
                                        ? `Выполненные дела (${completedTodos.length})`
                                        : "Выполненные дела"
                                }
                            />
                            <Tab
                                value={ETodoStatus.deleted}
                                label={
                                    deletedTodos.length
                                        ? `Корзина (${deletedTodos.length})`
                                        : "Корзина"
                                }
                            />
                        </Tabs>
                    </TabsLayout>
                    <CustomTabPanel activeTab={activeTab} value={ETodoStatus.active}>
                        <StyledList>
                            {activeTodos.length
                                ? activeTodos.map(item => (
                                    <TodoItem
                                        key={item.id}
                                        {...item}
                                        completeTodoHandler={completeTodoHandler}
                                        deleteTodoHandler={deleteTodoHandler}
                                    />
                                ))
                                : <Typography variant="h4">
                                    Список пуст
                                </Typography>
                            }
                        </StyledList>
                    </CustomTabPanel>
                    <CustomTabPanel activeTab={activeTab} value="all">
                        <StyledList>
                            {todos.length
                                ? todos.map(item => (
                                    <TodoItem
                                        key={item.id}
                                        {...item}
                                        completeTodoHandler={completeTodoHandler}
                                        deleteTodoHandler={deleteTodoHandler}
                                    />
                                ))
                                : <Typography variant="h4">
                                    Список пуст
                                </Typography>
                            }
                        </StyledList>
                    </CustomTabPanel>
                    <CustomTabPanel activeTab={activeTab} value={ETodoStatus.completed}>
                        <StyledList>
                            {completedTodos.length
                                ? completedTodos.map(item => (
                                    <TodoItem
                                        key={item.id}
                                        {...item}
                                        completeTodoHandler={completeTodoHandler}
                                        deleteTodoHandler={deleteTodoHandler}
                                    />
                                ))
                                : <Typography variant="h4">
                                    Список пуст
                                </Typography>
                            }
                        </StyledList>
                    </CustomTabPanel>
                    <CustomTabPanel activeTab={activeTab} value={ETodoStatus.deleted}>
                        <StyledList>
                            {deletedTodos.length
                                ? deletedTodos.map(item => (
                                    <TodoItem
                                        key={item.id}
                                        {...item}
                                        completeTodoHandler={completeTodoHandler}
                                        deleteTodoHandler={deleteTodoHandler}
                                    />
                                ))
                                : <Typography variant="h4">
                                    Список пуст
                                </Typography>
                            }
                        </StyledList>
                    </CustomTabPanel>
                    <DeleteAllButton>
                        <Button
                            variant="contained"
                            color="error"
                            disabled={activeTab === ETodoStatus.deleted}
                            endIcon={<DeleteIcon/>}
                            onClick={() => deleteTodoHandler()}
                        >
                            Удалить всё
                        </Button>
                    </DeleteAllButton>
                </TodoTabsLayout>
            </StyledBox>
        </TodoListLayout>
    )
}