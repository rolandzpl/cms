import axios from "axios";
import { createContext } from "react";

export type GetPagesDto = {
    pages: PageDto[];
}

export type PageDto = {
    published: boolean;
    slug: string;
    title: string;
    description: string;
}

export type Api = {
    getPageBySlug: (slug: string) => Promise<string>,
    getPageContent: (slug: string) => Promise<string>,
    getPages: () => Promise<GetPagesDto>,
    updatePage: (slug: string, data: { slug: string, content: string }) => Promise<void>,
    createPage: () => void,
    deletePage: (slug: string) => void
}

export const ApiContext = createContext<Api | null>(null);

type ApiProviderProps = {
    children: React.ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
    const apiUrl = "http://localhost:5100/api";
    return <ApiContext.Provider
        value={{
            getPageBySlug: async (slug: string) => (await axios.get<string>(`${apiUrl}/cms/pages/${slug}/content`)).data,
            getPageContent: async (slug: string) => (await axios.get<string>(`${apiUrl}/cms/pages/${slug}/content`)).data,
            getPages: async () => (await axios.get<GetPagesDto>(`${apiUrl}/cms/pages`)).data,
            updatePage: async (slug: string, data: { slug: string, content: string }) => {
                await axios.put(`${apiUrl}/cms/pages/${slug}`, data);
            },
            createPage: () => { },
            deletePage: (slug: string) => { slug.toString(); }
        }}>
        {children}
    </ApiContext.Provider>;
}