import {useMutation, useQuery} from '@tanstack/react-query';
import {
  addMenu,
  deleteMenu,
  getMenu,
  getMenuDetail,
  updateMenu,
} from '../api/apis/menu';

// 메뉴 보기
export const useMenu = (storeId: number) => {
  return useQuery(['getMenu', storeId], () => {
    return getMenu(storeId);
  });
};

// 메뉴 생성
export const useMenuMutation = () => {
  return useMutation(addMenu, {
    onSuccess(res) {
      console.log('메뉴 생성 성공', res);
    },
    onError(err) {
      console.log('메뉴 생성 에러', err);
    },
  });
};

// 메뉴 상세
export const useMenuDetail = (menuId: string) => {
  return useQuery(['getMenu', menuId], () => {
    return getMenuDetail(menuId);
  });
};

// 메뉴 수정
export const useUpdateMenuMutation = () => {
  return useMutation(updateMenu, {
    onSuccess(res) {
      console.log('메뉴 수정 성공', res);
    },
    onError(err) {
      console.log('메뉴 수정 에러', err);
    },
  });
};

// 메뉴 삭제
export const useDeleteMenuMutation = () => {
  return useMutation(deleteMenu, {
    onSuccess(res) {
      console.log('메뉴 삭제 성공', res);
    },
    onError(err) {
      console.log('메뉴 삭제 에러', err);
    },
  });
};
