import { FC } from "react";
import { usePages } from "../hooks";
import { NavLink, Outlet } from "react-router";
import { Grid2, List, ListItem } from "@mui/material";

const PageList: FC = () => {
    const { items } = usePages();
    return (<Grid2 container>
        <Grid2 size={3}>
            <List>
                {
                    items?.map((item) =>
                        <ListItem>
                            <NavLink to={item.id}>
                                {item.title}
                            </NavLink>
                        </ListItem>
                    )
                }
            </List>
        </Grid2>
        <Grid2 size={9}>
            <Outlet />
        </Grid2>
    </Grid2>);
}

export default PageList;
