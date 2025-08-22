export type Dashboard = {
  clients: {
    name: string;
    total: number;
    lastMonth: number;
    changePercentage: number;
    lastFiveClients: {
      _id: string;
      company: string;
      image: string;
    }[];
  };
  tools: {
    name: string;
    total: number;
  };
  services: {
    name: string;
    total: number;
    active: number;
    inactive: number;
    lastFiveServices: {
      status: boolean;
      _id: string;
      title: string;
      slug: string;
      description: string;
      image: string;
      imageId: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
  pests: {
    name: string;
    total: number;
  };
  contacts: {
    name: string;
    total: number;
    blockedContacts: number;
  };
};

export type Client = {
  clients: ClientItem[];
};

export type ClientItem = {
  _id: string;
  // company: string;
  // description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

// export type Tools = {};

enum Role {
  Admin = "admin",
  User = "user",
}

export type User = {
  users: {
    _id: string;
    name: string;
    email: string;
    password?: string;
    otp: string;
    otpExpiry?: string;
    confirmEmail?: boolean;
    role: Role;
    createdAt: string;
    updatedAt: string;
    passwordChangedAt?: string;
  }[];
};

export type ServiceItem = {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ServicesResponse = {
  services: ServiceItem[];
};

export type EditServiceArgs = {
  data: FormData;
  id: string;
};

export type EditClientArgs = {
  data: FormData;
  id: string;
};

export type Tools = {
  createdAt: string;
  description: string;
  image: string;
  name: string;
  updatedAt: string;
  _id: string;
};

export type ToolsResponse = {
  tools: Tools[];
};

export type Pests = {
  name: string;
  description: string;
  image: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type PestsResponse = {
  pests: Pests[];
};

export type Contacts = {
  email: string;
  message: string;
  phone: string;
  city: string;
  _id: string;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ContactsResponse = {
  contacts: Contacts[];
};
