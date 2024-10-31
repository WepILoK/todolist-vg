import {FC} from "react";
import {IconButton, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import {ETodoStatus, ITodo} from "../../store";

import {StyledListItem} from "./TodoItem.styles.ts";

interface ITodoItem extends ITodo {
    deleteTodoHandler: (id: number) => void
    completeTodoHandler: (id: number) => void
}

export const TodoItem: FC<ITodoItem> = ({title, id, status, deleteTodoHandler, completeTodoHandler}) => {

    return (
        <StyledListItem>
            <ListItemText primary={title}/>
            <>
                {status === ETodoStatus.active &&
                    <IconButton
                        onClick={() => {
                            completeTodoHandler(id)
                        }}
                    >
                        <CheckIcon/>
                    </IconButton>
                }
                {status !== ETodoStatus.deleted &&
                    <IconButton
                        onClick={() => {
                            deleteTodoHandler(id)
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                }
            </>
        </StyledListItem>
    )
}