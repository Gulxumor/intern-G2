import { useMutation, useQueryClient } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { switchAddUserModalVisibility, switchUserModalVisibility } from "../../../redux/modalSlice"
import useAxios from "../../useAxios"

//* Cache

const useUpdateUserFromCache = () => {
  const queryClient = useQueryClient();
  return ({ id, shouldUpdatedData }) => {
    queryClient.setQueryData(`user/${id}`, () => {
      return shouldUpdatedData;
    });
  };
};
const useAddUserToCache = () => {
  const queryClient = useQueryClient();
  return ({ userData }) => {
    queryClient.setQueryData(
      `accomodation/${userData.buildingMutation}`,
      (oldQueryData) => {
        oldQueryData.map((value) =>
          String(value.roomNumber) === String(userData.roomNumber)
            ? {
                ...value,
                cliente: value.cliente.map((value) =>
                  String(value.clienteID) === String(userData.clienteID)
                    ? {
                        ...value,
                        userID: userData._id,
                      }
                    : value
                ),
              }
            : value
        );
      }
    );
  };
};
const useDeleteUserFromCache = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return ({ userData }) => {
    // console.log(userData.buildingMutation, "ssss");
    dispatch(switchUserModalVisibility());
    queryClient.getQueryData(`user/${userData.userID}`);
    const accomoDationNumber = `accomodation/${userData.buildingMutation}`;
    // console.log(accomoDationNumber);
    queryClient.setQueryData(accomoDationNumber, (oldQueryData) => {
      // console.log(oldQueryData, "fpund");
      return oldQueryData.map((value) =>
        String(value.roomNumber) === String(userData.roomValue.roomNumber)
          ? {
              ...value,
              cliente: value.cliente.map((value) =>
                String(value.clienteID) ===
                String(userData.clienteValue.clienteID)
                  ? {
                      ...value,
                      userID: "",
                    }
                  : value
              ),
            }
          : value
      );
    });
  };
};

//* Booked User

const useDeleteBookedUserFromCache = () => {
  const queryClient = useQueryClient();
  const { selectedUser } = useSelector((state) => state.user);
  // console.log(selectedUser);
  return ({ body }) => {
    queryClient.setQueryData(
      `accomodation/${selectedUser.buildingMutation}`,
      (oldQueryData) => {
        return oldQueryData.map((value) =>
          String(value.roomNumber) === String(selectedUser.roomValue.roomNumber)
            ? {
                ...value,
                bookedCliente: value?.bookedCliente?.map((bookedClienteValue) =>
                  String(bookedClienteValue?.bookedClienteID) ===
                  String(selectedUser.clienteValue.clienteID)
                    ? {
                        ...bookedClienteValue,
                        bookedClienteList:
                          bookedClienteValue?.bookedClienteList?.filter(
                            (id) => id !== selectedUser.userID
                          ),
                      }
                    : bookedClienteValue
                ),
              }
            : value
        );
      }
    );
  };
};

//* Mutation

const useUpdatedUser = () => {
  const axios = useAxios();
  const updateUserFromCache = useUpdateUserFromCache();
  const { selectedUser } = useSelector((state) => state.user);
  return useMutation(({ body }) => {
    updateUserFromCache({ id: body._id, shouldUpdatedData: body });
    return axios({
      method: "POST",
      url: `/accomodation/${selectedUser.buildingMutation}/update-user`,
      body,
    });
  });
};
const useAddUser = () => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const addUserToCache = useAddUserToCache();
  const { selectedUser } = useSelector((state) => state.user);
  return useMutation(({ body }) => {
    dispatch(
      switchAddUserModalVisibility({
        open: true,
        loading: true,
      })
    );
    return axios({
      method: "POST",
      url: `/accomodation/${selectedUser.buildingMutation}/create-user`,
      body,
    }).then(({ data }) => {
      dispatch(
        switchAddUserModalVisibility({
          open: false,
          loading: false,
        })
      );
      addUserToCache({ userData: data.data });
    });
  });
};
const useDeleteUser = () => {
  const axios = useAxios();
  const { selectedUser } = useSelector((state) => state.user);
  const deleteFromCache = useDeleteUserFromCache();
  // console.log(selectedUser);
  return useMutation(({ body }) => {
    deleteFromCache({ userData: selectedUser });
    axios({
      url: `/accomodation/${selectedUser.buildingMutation}/delete-user`,
      method: "DELETE",
      body,
    });
  });
};
const useMoveUser = () => {
  const queryClient = useQueryClient();
  const deleteFromCache = useDeleteUserFromCache();
  const { selectedUser } = useSelector((state) => state.user);
  const updateUserFromCache = useUpdateUserFromCache();
  const addUserToCache = useAddUserToCache();
  const axios = useAxios();

  const userValue = queryClient.getQueryData(
    `user/${selectedUser.clienteValue.userID}`
  );

  return useMutation((data) => {
    const shouldUpdatedData = {
      ...userValue,
      clienteID: data.newClienteID,
      roomNumber: String(data.newRoomNumber),
      buildingNumber: `building-${data.newAccomodationID}`,
      roomID: data.room_id,
    };

    deleteFromCache({ userData: selectedUser });
    updateUserFromCache({
      id: selectedUser.clienteValue.userID,
      shouldUpdatedData,
    });
    addUserToCache({ userData: shouldUpdatedData });
    return axios({
      url: `/accomodation/${selectedUser.buildingMutation}/transfer-user`,
      method: "POST",
      body: {
        oldRoomNumber: selectedUser.roomValue.roomNumber,
        OldClienteID: selectedUser.clienteValue.clienteID,
        _id: selectedUser.clienteValue.userID,
        ...data,
      },
    });
  });
};
// * Booked Users

const useDeleteBookedUser = () => {
  const axios = useAxios();
  const { selectedUser } = useSelector((state) => state.user);
  const deleteBookedUserFromCache = useDeleteBookedUserFromCache();
  return useMutation(({ body }) => {
    deleteBookedUserFromCache({ body });
    return axios({
      url: `/accomodation/${selectedUser.buildingMutation}/delete-booked-user`,
      method: "DELETE",
      body,
    });
  });
};

export {
  useUpdatedUser,
  useAddUser,
  useDeleteUser,
  useDeleteBookedUser,
  useMoveUser,
};