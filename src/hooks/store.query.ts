import {useMutation, useQuery} from '@tanstack/react-query';
import {addStore, getStore, getStoreDetail} from '../api/apis/store';

// 가게 생성
export const useStoreMutation = () => {
  return useMutation(addStore, {
    onSuccess(res) {
      console.log('가게 생성 성공', res);
    },
    onError(err) {
      console.log('가게 생성 에러', err);
    },
  });
};

// 가게 전체 보기
export const useGetStore = () => {
  return useQuery(['getStore'], () => {
    return getStore();
  });
};

// 가게 상세
export const useGetStoreDetail = (storeId: string) => {
  return useQuery(['getStoreDetail', storeId], () => {
    return getStoreDetail(storeId);
  });
};

// 가게 수정
export const useUpdateStoreMutation = () => {
  return useMutation(addStore, {
    onSuccess(res) {
      console.log('가게 수정 성공', res);
    },
    onError(err) {
      console.log('가게 수정 에러', err);
    },
  });
};

// 가게 삭제
export const useDeleteStoreMutation = () => {
  return useMutation(addStore, {
    onSuccess(res) {
      console.log('가게 삭제 성공', res);
    },
    onError(err) {
      console.log('가게 삭제 에러', err);
    },
  });
};
