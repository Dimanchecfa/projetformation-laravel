// requeste and dispatch to redux

import HTTP_CLIENT, { handlingErrors } from "./client";

const FILE_HEADERS = {
  headers: { "Content-Type": "multipart/form-data" },
};
