export async function fetcher(input: RequestInfo, init?: RequestInit | undefined) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${input}`, {
      credentials: 'include',
      ...init,
    });

    const textData = await response.text();
    const data = textData ? JSON.parse(textData) : {};

    if (response.ok) {
      return data;
    }

    const error = new Error(response.statusText);
    // @ts-ignore
    error.response = response;
    // @ts-ignore
    error.data = data;

    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}
