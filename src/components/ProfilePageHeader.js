import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <Container>
          <div className="content">
            <div className="social-description">
              <h2>Floor 1</h2>
              <p>XX% Full</p>
            </div>
            <div className="social-description">
              <h2>Floor 2</h2>
              <p>XX% Full</p>
            </div>
            <div className="social-description">
              <h2>Floor 3</h2>
              <p>XX% Full</p>
            </div>
            <div className="social-description">
              <h2>Floor 4</h2>
              <p>XX% Full</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
