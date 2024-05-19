"use client";

import BaseProviders from "../contexts/BaseProviders";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <BaseProviders>{children}</BaseProviders>
);

export default RootLayout;
