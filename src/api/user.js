import instance from "./instance";

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user)
}
export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user)
}
export const CreateOneUser = (payload) => {
    const url = "/users";
    return instance.post(url, payload)
}
export const FindOneUser = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
}
export const FindAllUser = () => {
    const url = "/users";
    return instance.get(url);
}
export const RemoveOneUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}
export const UpdateOneUser = (payload) => {
    const url = `/users/${payload.id}`;
    return instance.patch(url, payload);
}