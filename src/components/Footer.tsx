// with tailwindcss
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-indigo-100 text-center py-4 mt-8 flex justify-center gap-4">
      <p>© 2021 - Bonny</p>

      <p>
        <a href="/" className="text-indigo-300 hover:text-indigo-200">
          Home
        </a>{" "}
        |{" "}
        <a href="/" className="text-indigo-300 hover:text-indigo-200">
          About
        </a>{" "}
        |{" "}
        <a href="/" className="text-indigo-300 hover:text-indigo-200">
          Contact
        </a>
      </p>
    </footer>
  );
};
