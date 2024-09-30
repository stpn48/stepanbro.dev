export type Repository = {
  node: {
    id: string;
    name: string;
    description: string | null;
    url: string;
  };
};

export type Repo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
};
