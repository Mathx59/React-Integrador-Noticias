export const Footer = () => {
  return (
    <>
      <footer
        data-theme="dracula"
        className=" "
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16 ">
          <div className="flex flex-wrap items-baseline justify-center ">
            <span className="mt-2 text-md  text-gray-200 ">
              Realizado por Matt
              <a
                href="https://github.com/Mathx59"
                className="mx-2 text-wickedblue hover:text-gray-500"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
