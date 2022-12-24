

export const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <div>
        <footer className="footer mt-5 py-3 bg-warning ">
            <div className="container">
                <p className="text-center text-dark font-weight-bold">© {year} - Todos los derechos reservados</p>
                </div>
        </footer>
    </div>
  )
}
