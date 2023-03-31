import api from '..';
import {IFavorite} from '../../@types/favorite';

// 찜한 상품 보기
export const getFavorite = async () => {
  const res = await api.get(`/favorite`);

  return res;
};

// 찜하기
export const addFavorite = async (req: IFavorite) => {
  const res = await api.post(`/favorite`, req);

  return res;
};

// 찜한 상품 상세
export const getFavoriteDetail = async (favoriteId: string) => {
  const res = await api.get(`/favorite/${favoriteId}`);

  return res;
};

// 찜한 상품 수정
export const updateFavorite = async ({
  favoriteId,
  req,
}: {
  favoriteId: string;
  req: IFavorite;
}) => {
  const res = await api.put(`/favorite/${favoriteId}`, req);

  return res;
};

// 찜한 상품 삭제
export const deleteFavorite = async (favoriteId: string) => {
  const res = await api.delete(`/favorite/${favoriteId}`);

  return res;
};
