import {AppBar, Box, Button, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

export default function FeastsAppBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit"><Link to="/">Tavoli</Link></Button>
                    <Button color="inherit"><Link to="/menu">Menu</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
