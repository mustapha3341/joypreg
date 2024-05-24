interface SignupLayoutProps {
  children: React.ReactNode;
}

export default function SignupLayout({ children }: SignupLayoutProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-8">
        <span className="text-4xl">
          🤰
        </span>{" "}
        JoyPreg
      </h1>
      {children}
    </div>
  );
}
