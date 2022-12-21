import useApiAxios from "hooks/useApiAxios";

const Contact = async () => {
  const api = useApiAxios();
  const { data } = await api.get("/v1/user/63956395a8b3ff84cb1d85de");
  return (
    <div>
      <div>{data.username}</div>
      <div>{data.email}</div>
      <div>{data.phone_number}</div>
    </div>
  );
};

export default Contact;
