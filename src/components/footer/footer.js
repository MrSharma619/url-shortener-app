import "./style.css";

function Footer() {
  return (
    <div className="footer_div">
      <div className="d-flex-footer">
        <div className="p-2 flex-title-footer">
          <span className="footer_website_name">Shortly</span>
        </div>
        <div className="p-2">
          <div className="d-flex-col1 flex-column mb-3">
            <div className="p-2">
              <span className="footer_p1">Features</span>
            </div>
            <br></br>

            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Link Shortening
              </a>
            </div>
            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Branded Links
              </a>
            </div>
            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Analytics
              </a>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="d-flex-col2 flex-column mb-3">
            <div className="p-2">
              <span className="footer_p1">Resources</span>
            </div>
            <br></br>

            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Blog
              </a>
            </div>
            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Developers
              </a>
            </div>
            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Support
              </a>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="d-flex-col3 flex-column mb-3">
            <div className="p-2 section_sublink_footer">
              <span className="footer_p1">Company</span>
            </div>
            <br></br>

            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                About
              </a>
            </div>
            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Our Team
              </a>
            </div>
            <div className="p-2 section_sublink_footer">
              <a className="link_foot" href="#abc">
                Careers
              </a>
            </div>
            <div className="p-2">
              <a className="link_foot" href="#abc">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="d-flex-icons-footer">
            <div className="p-2 flex-fill section_socials_footer">
              <a className="icon-link-footer" href="#abc">
                <img alt="facebook" src="images/icon-facebook.svg" />
              </a>
            </div>
            <div className="p-2 flex-fill section_socials_footer">
              <a className="icon-link-footer" href="#abc">
                <img alt="twitter" src="images/icon-twitter.svg" />
              </a>
            </div>
            <div className="p-2 flex-fill section_socials_footer">
              <a className="icon-link-footer" href="#abc">
                <img alt="pinterest" src="images/icon-pinterest.svg" />
              </a>
            </div>
            <div className="p-2 flex-fill section_socials_footer">
              <a className="icon-link-footer" href="#abc">
                <img alt="instagram" src="images/icon-instagram.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
