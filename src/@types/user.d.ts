export declare global {
  type User =  {
    name?: string,
    username?: string,
    city?: string,
    email?: string,
    description: string;
    password?: string,
    games?: string[],
  }
}