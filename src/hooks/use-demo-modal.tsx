import * as React from "react";

type DemoModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const DemoModalContext = React.createContext<DemoModalContextType | undefined>(
  undefined,
);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);

  return (
    <DemoModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = React.useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
