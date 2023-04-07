import {useMutation, useQuery} from '@tanstack/react-query';
import {
  createReview,
  getAllReview,
  getReview,
  updateReview,
} from '../api/apis/review';

// 리뷰 보기
export const useGetAllReview = () => {
  return useQuery(['getAllReview'], () => {
    return getAllReview();
  });
};

// 리뷰 생성
export const useCreateReview = () => {
  return useMutation(createReview, {
    onSuccess(res) {
      console.log('리뷰 생성 성공', res);
    },
    onError(err) {
      console.log('리뷰 생성 에러', err);
    },
  });
};

// 리뷰 상세
export const useGetReview = (reviewId: number) => {
  return useQuery(['getReview', reviewId], () => {
    return getReview(reviewId);
  });
};

// 리뷰 수정
export const useUpdateReview = () => {
  return useMutation(updateReview, {
    onSuccess(res) {
      console.log('리뷰 수정 성공', res);
    },
    onError(err) {
      console.log('리뷰 수정 에러', err);
    },
  });
};
