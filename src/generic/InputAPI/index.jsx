const useInput = () => {
  const phoneFormatter = (value) => {
    const filteredValue = "";
  };
  return { phoneFormatter };
};

export default useInput;

// Kiritilayotgan raqamlarni formatlash uchun:
// const formatPhoneNumber = (phoneNumber) => {
//   const formattedPhoneNumber = `+998${phoneNumber.slice(
//     0,
//     2
//   )} ${phoneNumber.slice(2, 5)} - ${phoneNumber.slice(
//     5,
//     7
//   )} - ${phoneNumber.slice(7, 9)}`;
//   return formattedPhoneNumber;
// };
