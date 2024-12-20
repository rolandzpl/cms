import { FC } from "react";
import { usePages } from "../hooks";
import { NavLink, Outlet } from "react-router";

const PageList: FC = () => {
    const data = usePages();
    return (<>
        <div className="col-md-4">
            <ul>
                {data.items.map((item) => (<li>
                    <NavLink to={item.id}>{item.title}</NavLink>
                </li>))}
            </ul>
        </div>
        <Outlet />
    </>);
}

export default PageList;
