import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-content">
                    <ion-icon name="code-outline"></ion-icon>
                    <span> marcos coelho </span>
                    <a href="https://github.com/mviniciusca/cardbolt">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href="https://twitter.com/marcosvca_">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>

                </div>
            </footer>
        );
    }
}
export default Footer;