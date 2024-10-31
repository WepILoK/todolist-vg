import {Box, List, styled} from "@mui/material";

export const TodoListLayout = styled(Box)`
    width: 100%;
    height: 100%;
`

export const TodoTabsLayout = styled(Box)`
    width: 100%;
`

export const TabsLayout = styled(Box)`
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`

export const StyledList = styled(List)`
    overflow: auto;
    max-height: calc(100vh - 350px);
`

export const DeleteAllButton = styled(Box)`
    display: flex;
    justify-content: end;
`

