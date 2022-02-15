import instance from "./instance";

export const addCates = (phone) => {
    const url = `/categories`;
    return instance.post(url, phone);
};
export const getCates = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url)
}
export const getCatesType = (catename) => {
    const url = `/categories?type=${catename}`;
    return instance.get(url)
}
export const getAllCates = () => {
    const url = "/categories";
    return instance.get(url);
}
export const removeCates = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url)
}