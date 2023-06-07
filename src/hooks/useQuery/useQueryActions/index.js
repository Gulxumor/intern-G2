import { useMutation, useQueryClient } from "react-query"
import useAxios from "../../useAxios"

const useUpdateUserFromCache = () => {
    const queryClient = useQueryClient()
    return ({ id, shouldUpdatedData }) => {
        queryClient.setQueryData(`user/${id}`, (oldQueryData) => {
            console.log(oldQueryData);
            return shouldUpdatedData
        })
    }
}


const useUpdatedUser = () => {
    const axios = useAxios()
    const UpdateUserFromCache = useUpdateUserFromCache()
    return useMutation(({ body, }) => {
        UpdateUserFromCache({ id: body._id, shouldUpdatedData: body })
        return axios({
            method: "POST",
            url: "/accomodation/2/update-user",
            body,
        })
    })
}

export { useUpdatedUser }