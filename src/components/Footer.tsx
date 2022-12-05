export const Footer = () => {
  return (
    <footer className="text-center text-white">
      <div className="container p-4 pb-0">
        <section>
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Creado por Ángel Cuervo - PGY4121 003D</span>
            <a href="https://github.com/cuervolu/TeLlevoApp" target="_blank">
              <button
                type="button"
                className="btn btn-outline-light btn-rounded"
              >
                Ver Repositorio
              </button>
            </a>
          </p>
        </section>
      </div>

      <div className="text-center p-3 copyright">
        &copy; 2022 &nbsp;
        <a
          className="text-white"
          href="https://github.com/cuervolu"
          target="_blank"
        >
          Cuervolu
        </a>
      </div>
    </footer>
  );
};
