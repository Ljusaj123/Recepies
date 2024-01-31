import { Logo } from ".";

export default function Header() {
  return (
    <header className="drop-shadow-md bg-blue-100 py-12">
      <div className="container mx-auto max-[640px]:max-w-96 px-8">
        <Logo />
      </div>
    </header>
  );
}
