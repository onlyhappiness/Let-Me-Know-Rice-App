// 메뉴 생성
export interface IMenu {
  storeId: number;
  name: string;
  price: string;
}

// 메뉴 수정
export interface IUpdateMenu {
  name: string;
  price: string;
}
