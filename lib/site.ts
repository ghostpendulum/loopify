const defaultStudioBase = "https://app.amplift.io";

export const getStudioBaseUrl = (): string => {
  const raw = process.env.NEXT_PUBLIC_AI_STUDIO_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return defaultStudioBase;
};

export const getStudioAuthUrl = (mode: "signup" | "login"): string => {
  const base = getStudioBaseUrl();
  const param = mode === "login" ? "auth=login" : "auth=signup";
  return `${base}/?${param}`;
};
