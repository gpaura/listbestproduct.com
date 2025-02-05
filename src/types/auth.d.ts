 

export interface Session {
  user?: {
    id: string;
    name?: string;
    email?: string;
  };
  expires: string;
}

 
