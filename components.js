/* ==========================================
   Mod Squad Academy - Shared Component Engine
   ========================================== */

class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sticky-nav-container">
                <header>
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="MOD Logo" style="max-height: 38px; width: auto; display: block; filter: invert(1) brightness(2);">
                        </a>
                    </div>

                    <input type="checkbox" id="menu-toggle">
                    
                    <label for="menu-toggle" class="hamburger-label">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <nav>
                        <ul>
                            <li><a href="/" class="nav-home">Home</a></li>
                            <li><a href="https://modsquadacademy.com/create" target="_blank">Create</a></li>
                            <li><a href="">Explore</a></li>
                            <li><a href="">Featured</a></li>
                            <li><a href="">Play from Scratch</a></li>
                            <li><a href="https://modsquadacademy.com" target="_blank">Main Site</a></li>
                        </ul>
                    </nav>
                </header>

                <div class="construction-ribbon">
                    ⚠️ This Subdomain Is Under Construction! ⚠️
                </div>

            </div>
        `;
    }
}

customElements.define('shared-header', SharedHeader);

class SharedFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="footer-brand">
                        <div class="footer-logo">
                            <img src="/images/logo.png" alt="MOD SQUAD ACADEMY Logo">
                        </div>
                        <p class="footer-tagline">Code to new worlds never seen before!</p>
                    </div>
                    
                    <div class="footer-links-group">
                        <div class="footer-column">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="https://modsquadacademy.com">Main Site</a></li>
                                <li><a href="/create">Create</a></li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Featured</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Asset Library</a></li>
                                <li><a href="https://scratch.mit.edu/users/ModSquadAcademy/" target="_blank" rel="noopener noreferrer">Scratch Profile</a></li>
                                <li><a href="https://modsquadacademy.com/about">About Us</a></li>
                                <li><a href="https://modsquadacademy.com/policies">Policies</a></li>
                                <li><a href="https://modsquadacademy.com/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>Mod Squad Academy &bull; Empowering Next-Gen Creators</p>
                    <p class="footer-credit">© 2026 Mod. Squad Academy</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('shared-footer', SharedFooter);