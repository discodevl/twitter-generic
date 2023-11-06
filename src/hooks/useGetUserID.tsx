function useGetUserID() {
  const userID = localStorage.getItem("userID");
  return { userID };
}

export default useGetUserID;
