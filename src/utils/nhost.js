import { createClient } from "nhost-js-sdk";

const config = {
  baseURL: "https://backend-76077072.nhost.app",
};

const { auth, storage } = createClient(config);

export { auth, storage };