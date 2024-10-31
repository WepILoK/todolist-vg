import {Box, styled} from "@mui/material";

export const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;
    margin: 14px 0;
    &:nth-child(2) {
        margin-top: 40px;
    }
`