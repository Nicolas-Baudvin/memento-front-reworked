export type Key = "tkn" | "_id";

const getDataFromLocalStorage = (key: Key): string => {
    const data: string | null = localStorage.getItem(key);
    return data || "";
};

export default getDataFromLocalStorage;