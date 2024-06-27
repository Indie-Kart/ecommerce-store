declare module "auth" {
  export function signIn(provider: string, options?: any): Promise<void>;
  export function signOut(options?: any): Promise<void>;
}
