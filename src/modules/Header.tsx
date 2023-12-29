import { Navbar } from "../components/Navbar";

export default function Header() {
  return (
    <header className="drop-shadow-md">
      <div className="container grid sm:grid-cols-2 sm:gap-x-8 gap-y-4 sm:items-baseline">
        <h1>tasty</h1>
        <Navbar />
      </div>
    </header>
  );
}
