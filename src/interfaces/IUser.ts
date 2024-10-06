import { IColumn } from "./IProducts";

export interface IUser {
  id: string;
  username: string;
  role: string[];
  isActive?: boolean;
  avatar?: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  token?: string;
}

export const ColumnUsuario: IColumn[] = [
  {
    key: "id",
    label: "ID"
  },
  {
    key: "username",
    label: "USERNAME"
  },
  {
    key: "role",
    label: "ROLES"
  },
  {
    key: "avatar",
    label: "AVATAR"
  },
  {
    key: "email",
    label: "EMAIL"
  },
  {
    key: "password",
    label: "PASSWORD"
  },
  {
    key: "createdAt",
    label: "CREACIÓN"
  },
  {
    key: "updatedAt",
    label: "ACTUALIZACIÓN"
  }
];
