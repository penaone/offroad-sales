

function Footer() {
    return(
        <footer>
            <div className="left-footer">
                <h4 className="footer-title">Mamasita's Empanadas</h4>
                <p>
                    <a href="https://goo.gl/maps/TYGQ49kfWZjct1fF8" target="_blank" rel="noreferrer">
                        1234 N. Antarctica Ln 
                        <br></br>
                        South Pole, Antarctica
                    </a>
                </p>
                <p>888-888-8888</p>
                <p>&copy; 2021</p>
            </div>
            <div className="right-footer">
                <a href="mailto:mamasitasempanadas@mail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                {/* <a href='#'><i class="fa fa-yelp" aria-hidden="true"></i></a> */}
                <a href='https://www.facebook.com/'><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                {/* <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href='#'><i class="fa fa-twitter-square" aria-hidden="true"></i></a> */}
            </div>
        </footer>
    )
}

export default Footer;