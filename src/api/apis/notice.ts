import api from '..';

// 공지사항 보기
export const getNotice = async () => {
  const res = await api.get(`/notice`);

  return res?.data?.data;
};

// 공지사항 상세
export const getNoticeDetail = async (noticeId: string) => {
  const res = await api.get(`/notice/${noticeId}`);

  return res;
};

// 공지사항 등록 (관리자)

// 공지사항 수정 (관리자)

// 공지사항 삭제 (관리자)
