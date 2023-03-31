// 회원가입
export interface IRegister {
  signname: string;
  password: string;
  name: string;
  email: string;
  phone: string;
}

// 로그인
export interface ILogin {
  signname: string;
  password: string;
}
