export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-4 justify-center sm:flex-row flex-col">
        <li>
          <a href="#" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Newsletter
          </a>
        </li>
      </ul>
    </nav>
  );
};
