import { FC } from "react";
import { useParams } from "react-router";

const Page: FC = () => {
    const args = useParams();
    return (<div>
        <h1>{args.id}</h1>
    </div>);
}

export default Page;
