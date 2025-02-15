export interface Users {
    [socketId: string]: string;
  }

export interface UserRequest {
  email: string
  name: string
  password: string
}