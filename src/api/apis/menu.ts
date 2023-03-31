import api from '..';
import {IMenu, IUpdateMenu} from '../../@types/menu';

// 메뉴 보기
export const getMenu = async () => {
  const res = await api.get(`/menu`);

  return res;
};

// 메뉴 생성
export const addMenu = async (req: IMenu) => {
  const res = await api.post(`/menu`, req);

  return res;
};

// 메뉴 상세
export const getMenuDetail = async (menuId: string) => {
  const res = await api.get(`/menu/${menuId}`);

  return res;
};

// 메뉴 수정
export const updateMenu = async ({
  menuId,
  req,
}: {
  menuId: string;
  req: IUpdateMenu;
}) => {
  const res = await api.put(`/menu/${menuId}`, req);

  return res;
};

// 메뉴 삭제
export const deleteMenu = async (menuId: string) => {
  const res = await api.delete(`/menu/${menuId}`);

  return res;
};
