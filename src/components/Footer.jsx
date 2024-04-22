function Footer() {
    return (
      <div className="container-fluid mt-5 pt-5">
        <div className="row footer align-items-center">
          <div className="col-2">
            <div>
              <img
                className="width-164"
                alt="element"
                src="/images/footer-one.gif"
              />
            </div>
          </div>
          <div className="col-8">
            <div className="row justify-content-center">
              <div className="col-3 d-flex flex-column align-items-end">
                <div className="rotate-img">
                  <img
                    className="width-164 "
                    alt="element"
                    src="/images/footer-two.gif"
                  />
                  <img
                    className="width-164 hover-asset"
                    alt="element"
                    src="/images/hover-asset.svg"
                  />
                  <h6 className="text-prime title-space mt-0 ">ADMIN</h6>
                </div>
  
                <img
                  className="element"
                  alt="element"
                  src="/images/footer-icon-2.svg"
                />
              </div>
              <div className="col-3">
                <img
                  className="width-164"
                  alt="element"
                  src="/images/footer-four.svg"
                />
                <img
                  className="element2"
                  alt="element"
                  src="/images/footer-icon-1.svg"
                />
                <h6 className="title-space opacity-50 text-white mt-0">OFFICER</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div>
              <img
                className="width-164"
                alt="element"
                src="/images/footer-last.gif"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  