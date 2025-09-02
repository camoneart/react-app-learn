import { ReactNode, useTransition } from "react";

const TabButton = ({
  children,
  isActive,
  onClick,
}: {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  if (isActive) {
    return (
      <button className="bg-orange-100 px-2 py-2 rounded-md border-2">
        {children}
      </button>
    );
  }

  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      className="border-2 px-2 py-2 rounded-md"
    >
      {isPending ? "Loading..." : children}
    </button>
  );
};

export default TabButton;
