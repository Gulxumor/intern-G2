import { useMutation, useQueryClient } from "react-query"
import useAxios from "../../useAxios"

const useUpdateUserFromCache = () => {
    const queryClient = useQueryClient()
    return ({ id, shouldUpdatedData }) => {
        queryClient.setQueryData(`user/${id}`, (oldQueryData) => {
            return shouldUpdatedData
        })
    }
}

const useAddUserToCache = () => {
    const queryClient = useQueryClient()
    return (userData) => {
        queryClient.setQueryData(`accomodation/2`, (oldQueryData) => oldQueryData.map(value => String(value.roomNumber) === String(userData.roomNumber) ?
            {
                ...value, cliente: value.cliente.map(value => String(value.clienteID) === String(userData.clienteID) ? {
                    ...value,
                    userID: userData._id
                } : value)
            }
            : value
        )
        )
    }
}


const useUpdatedUser = () => {
    const axios = useAxios()
    const updateUserFromCache = useUpdateUserFromCache()
    return useMutation(({ body, }) => {
        updateUserFromCache({ id: body._id, shouldUpdatedData: body })
        return axios({
            method: "POST",
            url: `/accomodation/2/update-user`,
            body,
        })
    })
}

const useAddUser = () => {
    const axios = useAxios()
    const addToCache = useAddUserToCache()
    return useMutation(({ body }) => axios({
        url: `/accomodation/2/create-user`,
        method: "POST",
        body
    }).then(data => addToCache({ userData: data.data })))
}

export { useUpdatedUser, useAddUser }