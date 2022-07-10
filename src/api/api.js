const baseUrl = process.env.REACT_APP_GITHUB_URL;
const auth = process.env.REACT_APP_GITHUB_TOKEN;
export const fetchUsers = async () => {
  const res = await fetch(`${baseUrl}/users`, {
    headers: {
      Authorization: `token ${auth}`,
    },
  });
  const data = await res.json();
  return data;
};
