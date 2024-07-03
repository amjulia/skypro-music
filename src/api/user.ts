import { SigninFormType } from "@/types/types";

const apiUrl: string = "https://skypro-music-api.skyeng.tech/user/";

export const fetchUser = async ({ email, password }: SigninFormType) => {
  const response = await fetch(apiUrl + "login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  } else if (!response.ok) {
    throw new Error("Заполните поля");
  }
  const responseData = await response.json();
  return responseData;
};

export const fetchTokens = async ({ email, password }: SigninFormType) => {
  const response = await fetch(apiUrl + "token/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 400) {
    throw new Error("Неверный токен");
  } else if (!response.ok) {
    throw new Error("Заполните поля");
  }
  const responseData = await response.json();
  return responseData;
};

export const fetchAuthorization = async ({
  email,
  password,
}: SigninFormType) => {
  const response = await fetch(apiUrl + "signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const responseData = await response.json();
  return responseData;
};
