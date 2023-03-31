import {useMutation, useQuery} from '@tanstack/react-query';
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
  getFavoriteDetail,
  updateFavorite,
} from '../api/apis/favorite';

// 찜한 상품 보기
export const useFavorite = () => {
  return useQuery(['getFavorite'], () => {
    return getFavorite();
  });
};

// 찜하기
export const useFavoriteMutation = () => {
  return useMutation(addFavorite, {
    onSuccess(res) {
      console.log('찜하기 성공', res);
    },
    onError(err) {
      console.log('찜하기 에러', err);
    },
  });
};

// 찜한 상품 상세
export const useFavoriteDetail = (favoriteId: string) => {
  return useQuery(['getFavoriteDetail', favoriteId], () => {
    return getFavoriteDetail(favoriteId);
  });
};

// 찜한 상품 수정
export const useUpdateFavoriteMutation = () => {
  return useMutation(updateFavorite, {
    onSuccess(res) {
      console.log('찜한 상품 수정 성공', res);
    },
    onError(err) {
      console.log('찜한 상품 수정 에러', err);
    },
  });
};

// 찜한 상품 삭제
export const useDeleteFavoriteMutation = () => {
  return useMutation(deleteFavorite, {
    onSuccess(res) {
      console.log('찜한 상품 삭제 성공', res);
    },
    onError(err) {
      console.log('찜한 상품 삭제 에러', err);
    },
  });
};
