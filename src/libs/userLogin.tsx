export default async function userLogin(
  userEmail: string,
  userPassword: string
) {
  const data = {
    email: userEmail,
    password: userPassword
  };

  // TODO: Fill in URL.
  const response = await fetch(``, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Failed to log in.");
  }

  return await response.json();
}
