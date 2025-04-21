
type Role = "admin" | "customer" | "manager"

type Status = "active" | "inactive" | "banned"

export interface ImageLink{
  imageLink: string
}
  

export const USERS: User[] = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "admin",
      status: "active",
      createdAt: new Date("2024-01-15T08:30:00Z"),
      lastLogin: new Date("2024-06-01T12:15:00Z"),
      isEmailVerified: true,
      avatarUrl: {imageLink:"https://i.pravatar.cc/100?img=1"}
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "customer",
      status: "banned",
      createdAt: new Date("2023-11-10T14:45:00Z"),
      lastLogin: undefined,
      isEmailVerified: false,
      avatarUrl: {imageLink:"https://i.pravatar.cc/100?img=2"}
    },
    {
      id: 3,
      name: "Sarah Lee",
      email: "sarah@example.com",
      role: "manager",
      status: "inactive",
      createdAt: new Date("2024-03-01T09:00:00Z"),
      lastLogin: new Date("2024-06-10T18:40:00Z"),
      isEmailVerified: true,
      avatarUrl: {imageLink:"https://i.pravatar.cc/100?img=3"}
    }
  ];

  export interface  User{
    id: number,
    name: string,
    email: string,
    role: Role,
    status: Status,
    createdAt: Date,
    lastLogin: Date | undefined,
    isEmailVerified: boolean,
    avatarUrl: ImageLink  
  }