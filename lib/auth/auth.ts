import configuration from "@/app/config/configuration";

export interface Session {
  id: string;
  role: string;
  avatar: string;
}

export const getServerSession = async (
  cookie: any
): Promise<Session | false> => {
  try {
    const res = await fetch(`${configuration.APP.BACKEND_URL}/auth`, {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: { Cookie: cookie.toString() },
    });

    if (!res.ok) {
      return false;
    }

    return (await res.json()).metadata as Session;
  } catch (err) {
    return false;
  }
};

export const getSession = async () => {
  try {
    const res = await fetch(`${configuration.APP.BACKEND_URL}/auth`, {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
    });

    if (!res.ok) {
      return false;
    }

    return (await res.json()).metadata;
  } catch (err) {
    return false;
  }
};
