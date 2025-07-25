const webEndpoints = {
  experience: "/experience",
  home: "/",
  works: "/works",
} as const;

export type WebEndpointKey = keyof typeof webEndpoints;

export const getWebEndpoint = (key: WebEndpointKey): string => {
  const endpoint = webEndpoints[key];
  if (!endpoint) {
    throw new Error(`Web endpoint not found: ${key}`);
  }
  return endpoint;
};
