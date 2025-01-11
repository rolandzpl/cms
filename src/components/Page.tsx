import { FC } from "react";
import { useParams } from "react-router";
import { usePage } from "../hooks";
import { Stack, Typography } from "@mui/material";
import { Editor } from "@monaco-editor/react";

const Page: FC = () => {
    const { id } = useParams();
    const { title, content } = usePage(id ?? "");
    return (<Stack>
        <Typography variant="h1">{title}</Typography>
        <Editor
            width="100%"
            height="90vh"
            defaultLanguage="html"
            value={content}
        />
    </Stack>);
}

export default Page;
