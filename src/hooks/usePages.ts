import { useQuery } from "@tanstack/react-query";
import useApiProvider from "./useApiProvider";

export default function usePages() {
  const api = useApiProvider();
  const x = useQuery({
    queryFn: async () => await api.getPages(),
    queryKey: ["all-pages"]
  })
  return {
    items: x.data?.pages.map(item => ({
      id: item.slug,
      title: item.title
    }))
  };
}

