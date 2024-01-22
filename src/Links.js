import "./App.css";

const Links = () => {
  return (
    <>
      <ul className="list-unstyled align-items-start align-items-lg-center gap-0 gap-lg-4 mb-0 d-flex flex-column flex-lg-row pt-2 pt-lg-0">
        <li className="w-100 w-lg-auto">
          <button
            type="button"
            className="btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 w-lg-auto rounded-0 rounded-lg-pill py-1"
            href="#"
          >
            Home
          </button>
        </li>
        <li className="w-100 w-lg-auto">
          <button
            type="button"
            className="btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 w-lg-auto rounded-0 rounded-lg-pill py-1"
            href="#"
          >
            Chi siamo
          </button>
        </li>
        <li className="w-100 w-lg-auto">
          <button
            type="button"
            className="btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 w-lg-auto rounded-0 rounded-lg-pill py-1"
            href="#"
          >
            Progetti
          </button>
        </li>
        <li className="w-100 w-lg-auto">
          <button
            type="button"
            className="btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 w-lg-auto rounded-0 rounded-lg-pill py-1"
            href="#"
          >
            Contatti
          </button>
        </li>
      </ul>
    </>
  );
};

export default Links;
