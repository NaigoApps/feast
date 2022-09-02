import {Category} from "./MenuComponent";
import {Typography} from "@mui/material";

export function CategoryComponent(props: { onDelete: () => void, category: Category }) {
    return <Typography>{props.category.name}</Typography>;
}
