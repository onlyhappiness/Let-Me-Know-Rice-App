import api from '..';
import {IStore} from '../../@types/store';

// 가게 생성
export const addStore = async (req: IStore) => {
  const res = await api.post(`/store`, req);

  return res;
};

// 가게 전체 보기
export const getStore = async () => {
  const res = await api.get(`/store`);

  return res?.data?.data;
};

// 가게 상세
export const getStoreDetail = async (storeId: string) => {
  const res = await api.get(`/store/${storeId}`);

  return res?.data?.data;
};

// 가게 수정
export const updateStore = async ({
  storeId,
  req,
}: {
  storeId: string;
  req: IStore;
}) => {
  const res = await api.put(`/store/${storeId}`, req);

  return res;
};

// 가게 삭제
export const deleteStore = async (storeId: string) => {
  const res = await api.delete(`/store/${storeId}`);

  return res;
};
