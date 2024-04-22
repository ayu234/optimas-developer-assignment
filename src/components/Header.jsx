function Header() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 col-md-12 col-xl-2">
          <div>
            <img
              src="/images/user-logo.svg"
              className="w-100 image-bg mt-2"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-12 col-xl-7 header-top d-flex flex-column align-items-center padding-start">
          <div className="d-flex align-items-center justify-content-center bg-clip">
            <div className="text-center border-end border-white px-5">
              <img src="/images/dashboard.svg" className="w-10 mb-1" alt="" />
              <h6>Dashboard</h6>
            </div>
            <div className="text-center border-end border-white px-5">
              <img src="/images/user-gif.svg" className="w-10 mb-1" alt="" />
              <h6>Users</h6>
            </div>
            <div className="text-center border-end border-white px-5">
              <img
                src="/images/roles.svg"
                className="w-10 image-bg mb-1"
                alt=""
              />
              <h6>Roles</h6>
            </div>
            <div className="text-center px-5">
              <img
                src="/images/settings.svg"
                className="w-10 image-bg mb-1"
                alt=""
              />
              <h6>Settings</h6>
            </div>
          </div>
          <div className="polygon">
            {" "}
            <img src="/images/polygon.svg" className="w-10 mb-1" alt="" />
          </div>
        </div>
        <div className="col-xl-3 d-flex align-items-center justify-content-end">
          <div className="row align-items-center">
            <div className="col-6 gif">
              <img src="/images/notif-gif.gif" className="" alt="" />
            </div>
            <div className="col-6">
              <img src="/images/author.svg" className="author" alt="" />
              <img
                src="/images/notification.svg"
                className="notification"
                alt=""
              />
              <div className="notif-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
