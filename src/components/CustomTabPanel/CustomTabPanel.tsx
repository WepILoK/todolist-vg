import Box from "@mui/material/Box";
import {ReactNode} from "react";


interface TabPanelProps {
    children?: ReactNode;
    value: string;
    activeTab: string;
}

export const CustomTabPanel = (props: TabPanelProps) => {
    const {children, activeTab, value, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={activeTab !== value}
            id={`simple-tabpanel-${value}`}
            aria-labelledby={`simple-tab-${value}`}
            {...other}
        >
            {activeTab === value && <Box sx={{p: 3}}>{children}</Box>}
        </div>
    );
}