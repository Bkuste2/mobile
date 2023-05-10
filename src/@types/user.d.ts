export declare global {
  type User = {
    id?: string;
    name?: string,
    username?: string,
    city?: string,
    email?: string,
    avatar?: string,
    description: string;
    password?: string,
    games?: string[],
  }
}