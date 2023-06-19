import instance from "./axios";

export const getDataAPI = async (url: string, token: string) => {
    const res = await instance.get(`/api/v1/${url}`, {
        headers: { Authorization: token }
    })
    return res
}

export const postDataAPI = async (url: string, data?: any, token?: string) => {
    const res = await instance.post(`/api/v1/${url}`, data, {
        headers: { Authorization: token }
    })
    return res
}
export const putDataAPI = async (url: string, data: any, token: string) => {
    const res = await instance.put(`/api/v1/${url}`, data, {
        headers: { Authorization: token }
    })
    return res
}
export const patchDataAPI = async (url: string, data: any, token: string) => {
    const res = await instance.patch(`/api/v1/${url}`, data, {
        headers: { Authorization: token }
    })
    return res
}
export const deleteDataAPI = async (url: string, token: string) => {
    const res = await instance.delete(`/api/v1/${url}`, {
        headers: { Authorization: token }
    })
    return res
}