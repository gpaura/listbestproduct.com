// app/(main)/lists/electronics/layout.tsx
import { ReactNode } from "react";

export default function ElectronicsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <h3>Electronics</h3>
      {children}
    </div>
  );
}
