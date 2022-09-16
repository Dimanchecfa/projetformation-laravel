import React, { Suspense } from "react";
import Loading from "./Loading";

export default function MainLoadable({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
