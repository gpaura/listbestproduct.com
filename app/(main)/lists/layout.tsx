// app/(main)/lists/layout.tsx
import { ReactNode } from "react";

export default function ListsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Lists</h2>
      {children}
    </div>
  );
}
