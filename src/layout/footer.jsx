function Footer() {
    return <footer className="page-footer green accent-5">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear}
                Мананков Владислав ТКБО-01-22
                <a className="grey-text text-lighten-4 right" href="!#">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };