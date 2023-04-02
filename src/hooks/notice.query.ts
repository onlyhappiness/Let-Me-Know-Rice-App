import {useQuery} from '@tanstack/react-query';
import {getNotice, getNoticeDetail} from '../api/apis/notice';

// 공지사항 보기
export const useNotice = () => {
  return useQuery(['getNotice'], () => {
    return getNotice();
  });
};

// 공지사항 상세
export const useNoticeDetail = (noticeId: string) => {
  return useQuery(['getNoticeDetail', noticeId], () => {
    return getNoticeDetail(noticeId);
  });
};
