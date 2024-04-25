import { store } from "@/store";

export function getAccessToken() {
  const accessToken = store.getState().sensitive.token.accessToken;
  return accessToken;
}

export function getRefreshToken() {
  const accessToken = store.getState().sensitive.token.refreshToken;
  return accessToken;
}
