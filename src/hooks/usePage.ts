import { useQuery } from "@tanstack/react-query";
import useApiProvider from "./useApiProvider";

export default function usePage(id: string) {
    const api = useApiProvider();
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await api.getPageBySlug(id),
        queryKey: ["page", id]
    })
    return {
        title: "Page",
        content: data ?? "dsfsdfsdfsdfsdf",
        isLoading,
        isError
    };
}
