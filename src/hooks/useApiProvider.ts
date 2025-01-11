import { useContext } from "react";
import { Api, ApiContext } from "../context";

export default function useApiProvider(): Api {
    const context = useContext(ApiContext);
    if (context == null) {
        throw Error("usePageProvider must be used inside ApiProvider");
    }
    return context;
}
