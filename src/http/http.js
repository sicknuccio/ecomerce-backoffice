const BASE_URL = "https://api.escuelajs.co/api/v1";

const GET = async (resource) => {
  const res = await fetch(`${BASE_URL}/${resource}`);
  const data = await res.json();

  return data;
};

export { GET };
