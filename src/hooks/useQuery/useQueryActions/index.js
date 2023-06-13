import { useMutation, useQueryClient } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { switchAddUserModalVisibility, switchUserModalVisibility } from "../../../redux/modalSlice"
import useAxios from "../../useAxios"

//* Cache

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
const useDeleteUserFromCache = () => {
    const dispatch = useDispatch()
    const queryClient = useQueryClient()
    return ({ userData }) => {
        dispatch(switchUserModalVisibility())
        userData = queryClient.getQueryData(`user/${userData.userID}`)
        queryClient.setQueryData(`accomodation/2`, (oldQueryData) => oldQueryData.map(value => String(value.roomNumber) === String(userData.roomNumber) ?
            {
                ...value,
                cliente: value.cliente.map(value => String(value.clienteID) === String(userData.clienteID) ? {
                    userID: "",
                    ...value,
                } : value)
            }
            : value
        )
        )
    }
}

//* Mutation

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
    const dispatch = useDispatch()
    const axios = useAxios()
    const addUserToCache = useAddUserToCache()
    return useMutation = ({ body }) => {
        dispatch(switchAddUserModalVisibility({
            open: true,
            loading: true,
        }))
        return axios({
            method: "POST",
            url: `accomodation/2/create-user`,
            body,
        }).then(({ data }) => {
            dispatch(switchAddUserModalVisibility({
                open: false,
                loading: false,
            }))
            addUserToCache({ userData: data.data })
        })
    }

}
const useDeleteUser = () => {
    const { selectedUser } = useSelector(state => state.user)
    const axios = useAxios()
    const deleteFromCache = useDeleteUserFromCache()
    return useMutation(({ body }) => {
        deleteFromCache({ serData: selectedUser })
        axios({
            url: `accomodation/2/delete-user`,
            method: "DELETE",
            body,
        })
    })
}
export { useUpdatedUser, useAddUser, useDeleteUser }