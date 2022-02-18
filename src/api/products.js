import instance from "./instance";

export const CreateOneProduct = (payload) => {
    const url = "/products";
    return instance.post(url, payload)
}
export const FindOneProduct = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const ProductGetById = (id) => {
    const url = `/products?categorieId=${id}`;
    return instance.get(url);
}
export const FindAllProducts = () => {
    const url = "/products";
    return instance.get(url);
}
export const RemoveOneProduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const UpdateOneProduct = (payload) => {
    const url = `/products/${payload.id}`;
    return instance.put(url, payload);
}