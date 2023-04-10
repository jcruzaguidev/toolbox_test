import api from "./http-commons";

export const SecretsServices = () => {
  const getListItems = async () => {
    const res = await api.get("/secret/files");
    return res.data;
  };

  const getItem = async (param) => {
    const res = await api.get(`/secret/file/${param}`);
    return res.data;
  };

  return {
    getListItems,
    getItem,
  };
};
