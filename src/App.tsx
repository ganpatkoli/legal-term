import React from 'react'

const App = () => {
  return (
    <div><>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Corelaw- Law firm, Lawyers &amp; Legal Service HTML Template</title>
      <link
        rel="icon"
        href="/src/assets/images/icons/logo-icon.svg"
        type="image/gif"
        sizes="20x20"
      />
      {/* <link rel="stylesheet" href="/src/assets/css/animate.css" />
      <link rel="stylesheet" href="/src/assets/css/all.css" />
      <link rel="stylesheet" href="/src/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/src/assets/css/boxicons.min.css" />
      <link rel="stylesheet" href="/src/assets/css/bootstrap-icons.css" />
      <link rel="stylesheet" href="/src/assets/css/jquery-ui.css" />
      <link rel="stylesheet" href="/src/assets/css/swiper-bundle.css" />
      <link rel="stylesheet" href="/src/assets/css/slick-theme.css" />
      <link rel="stylesheet" href="/src/assets/css/slick.css" />
      <link rel="stylesheet" href="/src/assets/css/nice-select.css" />
      <link rel="stylesheet" href="/src/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/src/assets/css/odometer.css" />
      <link rel="stylesheet" href="/src/assets/css/style.css" /> */}
      {/* <div className="egns-preloader">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="circle-border">
                <div className="moving-circle" />
                <div className="moving-circle" />
                <div className="moving-circle" />
                <svg
                  width="180px"
                  height="150px"
                  viewBox="0 0 187.3 93.7"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    left: "50%",
                    top: "50%",
                    position: "absolute",
                    transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)"
                  }}
                >
                  <path
                    stroke="#D90A2C"
                    id="outline"
                    fill="none"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    id="outline-bg"
                    opacity="0.05"
                    fill="none"
                    stroke="#959595"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <header className="header-area style-5">
        <div className="nav-left">
          <div className="header-logo">
            <a href="index.html">
              <img alt="image" src="/src/assets/images/icons/header3-logo.svg" />
            </a>
          </div>
          <div className="main-nav">
            <div className="mobile-logo-area d-xl-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap ">
                <a href="index.html">
                  <img alt="image" src="/src/assets/images/icons/header1-logo.svg" />
                </a>
              </div>
              <div className="menu-close-btn">
                <i className="bi bi-x-lg text-white" />
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Home
                </a>
                <i className="bi bi-chevron-down dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index3.html" className="active-menu">
                      Home 3
                    </a>
                  </li>
                  <li>
                    <a href="index4.html">Home 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li className="menu-item-has-children">
                <a href="practice-area.html" className="drop-down">
                  Practice Area
                </a>
                <i className="bi bi-chevron-down dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <a href="practice-area.html">Practice Area</a>
                  </li>
                  <li>
                    <a href="practice-details.html">Practice Area Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="blog-grid.html">Case Study</a>
                <i className="bi bi-chevron-down dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <a href="case-study1.html">Case Study 1</a>
                  </li>
                  <li>
                    <a href="case-study2.html">Case Study 2</a>
                  </li>
                  <li>
                    <a href="casestudy-details.html">Case Study Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Pages
                </a>
                <i className="bi bi-chevron-down dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <a href="team.html">Lawyers</a>
                  </li>
                  <li>
                    <a href="lawyer-details.html">Lawyer Details</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="error.html">Error</a>
                  </li>
                  <li>
                    <a href="error.html">Submenu</a>
                    <i className="bi bi-chevron-right dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="about.html">Children 1</a>
                      </li>
                      <li>
                        <a href="team.html">Children 2</a>
                      </li>
                      <li>
                        <a href="faq.html">Children 3</a>
                      </li>
                      <li>
                        <a href="error.html">Children 4</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="blog-grid.html">Blog</a>
                <i className="bi bi-chevron-down dropdown-icon" />
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-standard.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
            <div className="d-xl-none d-block">
              <div className="eg-btn btn--primary btn--lg d-xl-none d-flex">
                <a href="contact.html">
                  <i className="bi bi-dash-lg" />
                  Free Cosultasion
                </a>
              </div>
            </div>
            <div className="phone-call d-flex justify-content-start align-items-center flex-row d-xl-none d-block mt-5">
              <div className="icon">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.4525 22.3006C27.7155 21.5332 26.8265 21.1229 25.8844 21.1229C24.9498 21.1229 24.0532 21.5256 23.2858 22.293L20.8848 24.6864C20.6873 24.58 20.4898 24.4813 20.2998 24.3825C20.0263 24.2457 19.7679 24.1166 19.5476 23.9798C17.2986 22.5514 15.2547 20.6898 13.2944 18.2813C12.3446 17.0808 11.7064 16.0702 11.2429 15.0445C11.866 14.4746 12.4434 13.882 13.0057 13.3121C13.2184 13.0994 13.4312 12.879 13.6439 12.6663C15.2395 11.0707 15.2395 9.00404 13.6439 7.40845L11.5696 5.33419C11.3341 5.09865 11.091 4.85551 10.863 4.61237C10.4071 4.14129 9.92847 3.65502 9.4346 3.19913C8.69759 2.46972 7.81621 2.08222 6.88925 2.08222C5.96229 2.08222 5.06572 2.46972 4.30592 3.19913C4.29832 3.20673 4.29832 3.20673 4.29072 3.21433L1.70738 5.82046C0.734835 6.79301 0.180177 7.97831 0.0586086 9.35355C-0.123745 11.5722 0.529687 13.6389 1.03116 14.9913C2.26204 18.3116 4.10077 21.3889 6.84366 24.6864C10.1716 28.6602 14.1758 31.7982 18.7498 34.0092C20.4974 34.8374 22.83 35.8176 25.4361 35.9847C25.5956 35.9923 25.7628 35.9999 25.9148 35.9999C27.6699 35.9999 29.1439 35.3693 30.2988 34.1156C30.3064 34.1004 30.3216 34.0928 30.3292 34.0776C30.7243 33.5989 31.1802 33.1658 31.6589 32.7024C31.9856 32.3908 32.3199 32.0641 32.6466 31.7222C33.3988 30.9396 33.7939 30.0278 33.7939 29.0933C33.7939 28.1511 33.3912 27.247 32.6238 26.4871L28.4525 22.3006ZM31.1726 30.3014C31.165 30.3014 31.165 30.309 31.1726 30.3014C30.8763 30.6205 30.5724 30.9092 30.2456 31.2283C29.7518 31.6994 29.2503 32.1933 28.7792 32.7479C28.0118 33.5685 27.1077 33.956 25.9224 33.956C25.8084 33.956 25.6868 33.956 25.5728 33.9484C23.3162 33.8041 21.2192 32.9227 19.6464 32.1705C15.3459 30.0886 11.5696 27.133 8.43165 23.3871C5.84072 20.2643 4.10837 17.3771 2.96106 14.2771C2.25444 12.3852 1.99611 10.9112 2.11008 9.52071C2.18606 8.63174 2.52797 7.89473 3.15861 7.26409L5.74954 4.67316C6.12185 4.32365 6.51695 4.13369 6.90445 4.13369C7.38312 4.13369 7.77063 4.42242 8.01376 4.66556C8.02136 4.67316 8.02896 4.68075 8.03656 4.68835C8.50004 5.12144 8.94072 5.56973 9.4042 6.0484C9.63974 6.29154 9.88288 6.53468 10.126 6.78541L12.2003 8.85968C13.0057 9.66507 13.0057 10.4097 12.2003 11.2151C11.9799 11.4354 11.7672 11.6558 11.5469 11.8685C10.9086 12.5219 10.3008 13.1298 9.63974 13.7224C9.62455 13.7376 9.60935 13.7452 9.60175 13.7604C8.94832 14.4139 9.06989 15.0521 9.20666 15.4852C9.21425 15.508 9.22185 15.5308 9.22945 15.5536C9.76891 16.8604 10.5287 18.0913 11.6836 19.5577L11.6912 19.5653C13.7883 22.1487 15.9993 24.1621 18.4383 25.7045C18.7498 25.9021 19.0689 26.0617 19.3728 26.2136C19.6464 26.3504 19.9047 26.4795 20.125 26.6163C20.1554 26.6315 20.1858 26.6543 20.2162 26.6695C20.4746 26.7987 20.7177 26.8595 20.9684 26.8595C21.5991 26.8595 21.9942 26.4644 22.1233 26.3352L24.7219 23.7367C24.9802 23.4783 25.3905 23.1668 25.8692 23.1668C26.3402 23.1668 26.7277 23.4631 26.9633 23.7215C26.9709 23.7291 26.9709 23.7291 26.9785 23.7367L31.165 27.9232C31.9476 28.6982 31.9476 29.496 31.1726 30.3014Z" />
                  <path d="M19.4556 8.56378C21.4463 8.8981 23.2547 9.84025 24.6983 11.2839C26.1419 12.7275 27.0765 14.5358 27.4184 16.5265C27.502 17.028 27.9351 17.3775 28.4289 17.3775C28.4897 17.3775 28.5429 17.3699 28.6037 17.3623C29.1659 17.2711 29.5382 16.7393 29.4471 16.177C29.0368 13.7684 27.8971 11.5726 26.1571 9.83266C24.4172 8.0927 22.2213 6.953 19.8127 6.5427C19.2505 6.45152 18.7262 6.82383 18.6275 7.37849C18.5287 7.93314 18.8934 8.47261 19.4556 8.56378Z" />
                  <path d="M35.9595 15.8804C35.2832 11.9142 33.4141 8.30511 30.5421 5.43304C27.67 2.56098 24.0609 0.691864 20.0947 0.0156379C19.5401 -0.0831367 19.0158 0.296766 18.917 0.851423C18.8259 1.41368 19.1982 1.93794 19.7604 2.03672C23.3011 2.63696 26.5303 4.31613 29.0984 6.87667C31.6666 9.44481 33.3381 12.674 33.9384 16.2147C34.022 16.7161 34.455 17.0657 34.9489 17.0657C35.0097 17.0657 35.0629 17.0581 35.1237 17.0505C35.6783 16.9669 36.0582 16.435 35.9595 15.8804Z" />
                </svg>
              </div>
              <div className="number">
                <span>Call Us Now</span>
                <h5>
                  <a href="tel:+8801701111000">+880 170 1111 000</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="mobile-menu-btn d-xl-none d-block">
            <i className="bi bi-list text-white" />
          </div>
          <a
            href="contact.html"
            className="eg-btn btn--primary2 sibling2  btn--lg2 d-xxl-flex d-none"
          >
            <i className="bi bi-dash-lg" />
            Free Cosultasion
            <i className="bi bi-chevron-right" />
          </a>
        </div>
        <div className="nav-right d-xl-flex d-none jsutify-content-end align-items-center gap-5">
          <div className="phone-call d-xl-flex d-none justify-content-center align-items-center flex-row">
            <div className="icon">
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.4525 22.3006C27.7155 21.5332 26.8265 21.1229 25.8844 21.1229C24.9498 21.1229 24.0532 21.5256 23.2858 22.293L20.8848 24.6864C20.6873 24.58 20.4898 24.4813 20.2998 24.3825C20.0263 24.2457 19.7679 24.1166 19.5476 23.9798C17.2986 22.5514 15.2547 20.6898 13.2944 18.2813C12.3446 17.0808 11.7064 16.0702 11.2429 15.0445C11.866 14.4746 12.4434 13.882 13.0057 13.3121C13.2184 13.0994 13.4312 12.879 13.6439 12.6663C15.2395 11.0707 15.2395 9.00404 13.6439 7.40845L11.5696 5.33419C11.3341 5.09865 11.091 4.85551 10.863 4.61237C10.4071 4.14129 9.92847 3.65502 9.4346 3.19913C8.69759 2.46972 7.81621 2.08222 6.88925 2.08222C5.96229 2.08222 5.06572 2.46972 4.30592 3.19913C4.29832 3.20673 4.29832 3.20673 4.29072 3.21433L1.70738 5.82046C0.734835 6.79301 0.180177 7.97831 0.0586086 9.35355C-0.123745 11.5722 0.529687 13.6389 1.03116 14.9913C2.26204 18.3116 4.10077 21.3889 6.84366 24.6864C10.1716 28.6602 14.1758 31.7982 18.7498 34.0092C20.4974 34.8374 22.83 35.8176 25.4361 35.9847C25.5956 35.9923 25.7628 35.9999 25.9148 35.9999C27.6699 35.9999 29.1439 35.3693 30.2988 34.1156C30.3064 34.1004 30.3216 34.0928 30.3292 34.0776C30.7243 33.5989 31.1802 33.1658 31.6589 32.7024C31.9856 32.3908 32.3199 32.0641 32.6466 31.7222C33.3988 30.9396 33.7939 30.0278 33.7939 29.0933C33.7939 28.1511 33.3912 27.247 32.6238 26.4871L28.4525 22.3006ZM31.1726 30.3014C31.165 30.3014 31.165 30.309 31.1726 30.3014C30.8763 30.6205 30.5724 30.9092 30.2456 31.2283C29.7518 31.6994 29.2503 32.1933 28.7792 32.7479C28.0118 33.5685 27.1077 33.956 25.9224 33.956C25.8084 33.956 25.6868 33.956 25.5728 33.9484C23.3162 33.8041 21.2192 32.9227 19.6464 32.1705C15.3459 30.0886 11.5696 27.133 8.43165 23.3871C5.84072 20.2643 4.10837 17.3771 2.96106 14.2771C2.25444 12.3852 1.99611 10.9112 2.11008 9.52071C2.18606 8.63174 2.52797 7.89473 3.15861 7.26409L5.74954 4.67316C6.12185 4.32365 6.51695 4.13369 6.90445 4.13369C7.38312 4.13369 7.77063 4.42242 8.01376 4.66556C8.02136 4.67316 8.02896 4.68075 8.03656 4.68835C8.50004 5.12144 8.94072 5.56973 9.4042 6.0484C9.63974 6.29154 9.88288 6.53468 10.126 6.78541L12.2003 8.85968C13.0057 9.66507 13.0057 10.4097 12.2003 11.2151C11.9799 11.4354 11.7672 11.6558 11.5469 11.8685C10.9086 12.5219 10.3008 13.1298 9.63974 13.7224C9.62455 13.7376 9.60935 13.7452 9.60175 13.7604C8.94832 14.4139 9.06989 15.0521 9.20666 15.4852C9.21425 15.508 9.22185 15.5308 9.22945 15.5536C9.76891 16.8604 10.5287 18.0913 11.6836 19.5577L11.6912 19.5653C13.7883 22.1487 15.9993 24.1621 18.4383 25.7045C18.7498 25.9021 19.0689 26.0617 19.3728 26.2136C19.6464 26.3504 19.9047 26.4795 20.125 26.6163C20.1554 26.6315 20.1858 26.6543 20.2162 26.6695C20.4746 26.7987 20.7177 26.8595 20.9684 26.8595C21.5991 26.8595 21.9942 26.4644 22.1233 26.3352L24.7219 23.7367C24.9802 23.4783 25.3905 23.1668 25.8692 23.1668C26.3402 23.1668 26.7277 23.4631 26.9633 23.7215C26.9709 23.7291 26.9709 23.7291 26.9785 23.7367L31.165 27.9232C31.9476 28.6982 31.9476 29.496 31.1726 30.3014Z" />
                <path d="M19.4556 8.56378C21.4463 8.8981 23.2547 9.84025 24.6983 11.2839C26.1419 12.7275 27.0765 14.5358 27.4184 16.5265C27.502 17.028 27.9351 17.3775 28.4289 17.3775C28.4897 17.3775 28.5429 17.3699 28.6037 17.3623C29.1659 17.2711 29.5382 16.7393 29.4471 16.177C29.0368 13.7684 27.8971 11.5726 26.1571 9.83266C24.4172 8.0927 22.2213 6.953 19.8127 6.5427C19.2505 6.45152 18.7262 6.82383 18.6275 7.37849C18.5287 7.93314 18.8934 8.47261 19.4556 8.56378Z" />
                <path d="M35.9595 15.8804C35.2832 11.9142 33.4141 8.30511 30.5421 5.43304C27.67 2.56098 24.0609 0.691864 20.0947 0.0156379C19.5401 -0.0831367 19.0158 0.296766 18.917 0.851423C18.8259 1.41368 19.1982 1.93794 19.7604 2.03672C23.3011 2.63696 26.5303 4.31613 29.0984 6.87667C31.6666 9.44481 33.3381 12.674 33.9384 16.2147C34.022 16.7161 34.455 17.0657 34.9489 17.0657C35.0097 17.0657 35.0629 17.0581 35.1237 17.0505C35.6783 16.9669 36.0582 16.435 35.9595 15.8804Z" />
              </svg>
            </div>
            <div className="number">
              <span>Call Us Now</span>
              <h5>
                <a href="tel:+8801701111000">+880 170 1111 000</a>
              </h5>
            </div>
          </div>
        </div>
      </header>
      <div className="banner-section3">
        <img
          src="/src/assets/images/bg/banner3-vector.svg"
          alt="image"
          className="banner3-vector"
        />
        <div className="banner-social-area-dark">
          <ul className="banner-social gap-4">
            <li>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bx bxl-pinterest" />
              </a>
            </li>
          </ul>
        </div>
        <div className="banner3-bg" />
        <div className="container-fluid">
          <div className="row">
            <div className="swiper banner3-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Wellcome to Corelaw</span>
                      <h2>
                        Incredible Solutions All <span>Criminal Law..</span>
                      </h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <a
                          href="contact.html"
                          className="eg-btn btn--primary2 sibling2  btn--lg2"
                        >
                          <i className="bi bi-dash-lg" />
                          Contact Now
                          <i className="bi bi-chevron-right" />
                        </a>
                        <div className="btn-with-vdo d-flex align-items-center gap-4">
                          <div className="video-play">
                            <a
                              href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                              className="popup-youtube video-icon"
                            >
                              <i className="bx bx-play" />
                            </a>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                            className="video-btn popup-youtube"
                          >
                            Play Video
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img
                        src="/src/assets/images/bg/banner3-lawyer1.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Wellcome to Corelaw</span>
                      <h2>
                        Incredible Solutions All <span>Family Law..</span>
                      </h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <a
                          href="contact.html"
                          className="eg-btn btn--primary2 sibling2  btn--lg2"
                        >
                          <i className="bi bi-dash-lg" />
                          Contact Now
                          <i className="bi bi-chevron-right" />
                        </a>
                        <div className="btn-with-vdo d-flex align-items-center gap-4">
                          <div className="video-play">
                            <a
                              href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                              className="popup-youtube video-icon"
                            >
                              <i className="bx bx-play" />
                            </a>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                            className="video-btn popup-youtube"
                          >
                            Play Video
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img
                        src="/src/assets/images/bg/banner3-lawyer2.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bann31-single d-flex align-items-center">
                    <div className="content">
                      <span>Wellcome to Corelaw</span>
                      <h2>
                        Incredible Solutions All <span>Land Law..</span>
                      </h2>
                      <div className="button-group gap-5 d-flex justify-content-xl-start justify-content-center flex-md-nowrap flex-wrap">
                        <a
                          href="contact.html"
                          className="eg-btn btn--primary2 sibling2  btn--lg2"
                        >
                          <i className="bi bi-dash-lg" />
                          Contact Now
                          <i className="bi bi-chevron-right" />
                        </a>
                        <div className="btn-with-vdo d-flex align-items-center gap-4">
                          <div className="video-play">
                            <a
                              href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                              className="popup-youtube video-icon"
                            >
                              <i className="bx bx-play" />
                            </a>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                            className="video-btn popup-youtube"
                          >
                            Play Video
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="banner3-lawyer-img">
                      <img
                        src="/src/assets/images/bg/banner3-lawyer3.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-arrows banner3-arrows text-center d-md-flex d-none flex-row justify-content-center align-items-center gap-5">
          <div
            className="banner3-prev swiper-prev-arrow style-3"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          >
            <img src="/src/assets/images/icons/arr-prev.svg" alt="image" />
          </div>
          <div
            className="banner3-next swiper-next-arrow style-3"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          >
            <img src="/src/assets/images/icons/arr-next.svg" alt="image" />
          </div>
        </div>
      </div>
      <div className="practice-area-section pt-120 pb-120 dark-mode-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Practice Area</span>
                  <span>Practice Area</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>PRACTICE AREA</span>
                <h2 className="text-white">
                  We are Practicing on various fields for longtime.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-12">
              <div className="swiper practice3-slider pb-65">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="practice-single3">
                      <div className="practice-image">
                        <img
                          src="/src/assets/images/bg/practice31.png"
                          className="img-fluid"
                          alt="image"
                        />
                        <div className="practice-icon">
                          <img src="/src/assets/images/icons/practice31.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>
                          <a href="practice-details.html">Business Law</a>
                        </h4>
                        <p className="para">
                          In consequat tincidunt turpis sit ametoi imperdiet.
                          Praesent Class.
                        </p>
                        <a href="practice-details.html" className="details-btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="practice-single3">
                      <div className="practice-image">
                        <img
                          src="/src/assets/images/bg/practice32.png"
                          className="img-fluid"
                          alt="image"
                        />
                        <div className="practice-icon">
                          <img src="/src/assets/images/icons/practice32.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>
                          <a href="practice-details.html">Workplace Accident</a>
                        </h4>
                        <p className="para">
                          In consequat tincidunt turpis sit ametoi imperdiet.
                          Praesent Class.
                        </p>
                        <a href="practice-details.html" className="details-btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <div className="practice-single3">
                      <div className="practice-image">
                        <img
                          src="/src/assets/images/bg/practice33.png"
                          className="img-fluid"
                          alt="image"
                        />
                        <div className="practice-icon">
                          <img src="/src/assets/images/icons/practice33.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>
                          <a href="practice-details.html">Juvenile Crime</a>
                        </h4>
                        <p className="para">
                          In consequat tincidunt turpis sit ametoi imperdiet.
                          Praesent Class.
                        </p>
                        <a href="practice-details.html" className="details-btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.8s"
                  >
                    <div className="practice-single3">
                      <div className="practice-image">
                        <img
                          src="/src/assets/images/bg/practice31.png"
                          className="img-fluid"
                          alt="image"
                        />
                        <div className="practice-icon">
                          <img src="/src/assets/images/icons/practice31.svg" alt="" />
                        </div>
                      </div>
                      <div className="practice-content">
                        <h4>
                          <a href="practice-details.html">Business Law</a>
                        </h4>
                        <p className="para">
                          In consequat tincidunt turpis sit ametoi imperdiet.
                          Praesent Class.
                        </p>
                        <a href="practice-details.html" className="details-btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination d-flex align-items-center justify-content-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section pb-120">
        <img
          src="/src/assets/images/bg/section-bg1.svg"
          alt="image"
          className="section-bg1 img-fluid"
        />
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-xl-6 text-lg-start d-sm-flex d-none justify-content-center wow fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="about3-image-area">
                <img
                  src="/src/assets/images/bg/about3-bg.png"
                  className="about3-image"
                  alt="image"
                />
                <img
                  src="/src/assets/images/bg/abt-img-text1.svg"
                  className="abt-img-text1"
                  alt="image"
                />
                <img
                  src="/src/assets/images/bg/abt-img-text2.svg"
                  className="abt-img-text2"
                  alt="image"
                />
                <span className="years">05</span>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-xl-end flex-column justify-content-center text-xl-start text-center">
              <div className="section-title-area sibling3">
                <div className="marquee">
                  <div>
                    <span>About Corelaw</span>
                    <span>About Corelaw</span>
                  </div>
                </div>
                <div className="section-title text-xl-start text-center">
                  <span>GET TO KNOW US</span>
                  <h2>Let you know who we are learn about our firm.</h2>
                </div>
              </div>
              <div className="about3-content">
                <p className="para">
                  In consequat tincidunt turpis sit amet imperdiet. Praesent Class
                  officelan nonatoureanor mauris laoreet, iaculis libero
                  quis.Curabitur et tempus eri consequat tincidunt turpis sit amet
                  imperdiet. Praesent nonatourean olei aptent taciti sociosqu ad
                  litora torquent per.
                </p>
                <ul className="about3-list">
                  <li>
                    Aenean vitae pharetra leo. Aliquam poriana told gotten guning.
                  </li>
                  <li>
                    In aliquet, quam vitae blandit temporg all of person are thisis.
                  </li>
                  <li>
                    Aenean volutpat enim vitae tincidunta we are got this timeng.
                  </li>
                  <li>
                    Felis at venenatis porttitor, nunc arcua law is best of this
                    law.
                  </li>
                </ul>
                <div className="d-flex justify-content-xl-start justify-content-center align-items-center flex-wrap gap-4">
                  <div className="about3-author">
                    <img
                      src="/src/assets/images/bg/about3-author.png"
                      className="author-image"
                      alt="image"
                    />
                  </div>
                  <img src="/src/assets/images/icons/signature3.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="history-section dark3-bg pt-120 pb-120">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area">
              <div className="marquee">
                <div>
                  <span>Growth History</span>
                  <span>Growth History</span>
                </div>
              </div>
              <div className="section-title">
                <span>OUR HISTORY</span>
                <h2>We are the most famous Law firm have a rich history.</h2>
              </div>
              <hr className="m-0" />
            </div>
          </div>
          <div className="row justify-content-center padding-x g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="history-card">
                <span className="date-badge">2018</span>
                <h3>We Are Started New At Corelaw.</h3>
                <p>
                  In consequat tincidunt turpis sit amet imperdie Praesent Class
                  officelan nonatoureanor mauris consequat tincidunt turpis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="history-card">
                <span className="date-badge">2021</span>
                <h3>Best Law Firm Company Of The Year.</h3>
                <p>
                  In consequat tincidunt turpis sit amet imperdie Praesent Class
                  officelan nonatoureanor mauris consequat tincidunt turpis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="history-card mb-0">
                <span className="date-badge">2022</span>
                <h3>Opening New One Office At A Time.</h3>
                <p>
                  In consequat tincidunt turpis sit amet imperdie Praesent Class
                  officelan nonatoureanor mauris consequat tincidunt turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case-study-section dark-mode-bg pt-120">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Project Study</span>
                  <span>Project Study</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>OUR CASE STUDY</span>
                <h2 className="text-white">
                  Get what we have done for solving the problems.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center g-4">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="/src/assets/images/bg/casestudy31.png" alt="image" />
                  <a href="casestudy-details.html" className="case-details-arrow">
                    <img src="/src/assets/images/icons/read-more-arro.svg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>Skirmish</span>
                  <h4>
                    <a href="casestudy-details.html">Business Law</a>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="/src/assets/images/bg/casestudy32.png" alt="image" />
                  <a href="casestudy-details.html" className="case-details-arrow">
                    <img src="/src/assets/images/icons/read-more-arro.svg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>Skirmish</span>
                  <h4>
                    <a href="casestudy-details.html">Real State Law</a>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="/src/assets/images/bg/casestudy33.png" alt="image" />
                  <a href="casestudy-details.html" className="case-details-arrow">
                    <img src="/src/assets/images/icons/read-more-arro.svg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>Skirmish</span>
                  <h4>
                    <a href="casestudy-details.html">Family Law</a>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="/src/assets/images/bg/casestudy34.png" alt="image" />
                  <a href="casestudy-details.html" className="case-details-arrow">
                    <img src="/src/assets/images/icons/read-more-arro.svg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>Skirmish</span>
                  <h4>
                    <a href="casestudy-details.html">Helth Care Law</a>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="/src/assets/images/bg/casestudy35.png" alt="image" />
                  <a href="casestudy-details.html" className="case-details-arrow">
                    <img src="/src/assets/images/icons/read-more-arro.svg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>Skirmish</span>
                  <h4>
                    <a href="casestudy-details.html">Criminal Law</a>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="/src/assets/images/bg/casestudy36.png" alt="image" />
                  <a href="casestudy-details.html" className="case-details-arrow">
                    <img src="/src/assets/images/icons/read-more-arro.svg" alt="image" />
                  </a>
                </div>
                <div className="content">
                  <span>Skirmish</span>
                  <h4>
                    <a href="casestudy-details.html">Drug Offense</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-lg-12 text-center">
              <a
                href="case-study2.html"
                className="eg-btn btn--primary2 sibling2  btn--lg2 d-inline-flex"
              >
                <i className="bi bi-dash-lg" />
                View All Case
                <i className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="attorneys-section pt-120 pb-120 dark-mode-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Creative Team</span>
                  <span>Creative Team</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>CREATIVE TEAM</span>
                <h2 className="text-white">
                  We have the most experienced lawyers.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper attorney-slider pb-65">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide  wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="attorney-single sibling3">
                      <img
                        src="/src/assets/images/bg/attorney41.png"
                        className="casestudy1"
                        alt="image"
                      />
                      <div className="content">
                        <h4>
                          <a href="lawyer-details.html">Sebastian Vol</a>
                        </h4>
                        <p>Family Lawyer</p>
                      </div>
                      <ul className="social-list2 gap-3">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="swiper-slide wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="attorney-single sibling3">
                      <img
                        src="/src/assets/images/bg/attorney42.png"
                        className="casestudy1"
                        alt="image"
                      />
                      <div className="content">
                        <h4>
                          <a href="lawyer-details.html">John Joseph</a>
                        </h4>
                        <p>Family Lawyer</p>
                      </div>
                      <ul className="social-list2 gap-3">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="swiper-slide wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <div className="attorney-single sibling3">
                      <img
                        src="/src/assets/images/bg/attorney43.png"
                        className="casestudy1"
                        alt="image"
                      />
                      <div className="content">
                        <h4>
                          <a href="lawyer-details.html">Michael Mason</a>
                        </h4>
                        <p>Criminal Lawyer</p>
                      </div>
                      <ul className="social-list2 gap-3">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="swiper-slide wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.8s"
                  >
                    <div className="attorney-single sibling3">
                      <img
                        src="/src/assets/images/bg/attorney44.png"
                        className="casestudy1"
                        alt="image"
                      />
                      <div className="content">
                        <h4>
                          <a href="lawyer-details.html">Harper Luna</a>
                        </h4>
                        <p>Drug Offense Lawyer</p>
                      </div>
                      <ul className="social-list2 gap-4">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination d-flex align-items-center justify-content-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section dark3-bg pt-120 pb-120">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area">
              <div className="marquee">
                <div>
                  <span>Creative Team</span>
                  <span>Creative Team</span>
                </div>
              </div>
              <div className="section-title">
                <span>CONTACT US</span>
                <h2 className="text-white">
                  Let us know your concern We Are Always Ready.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-start gy-5">
            <div className="col-xl-7 col-lg-7">
              <form className="contact-form contact-form3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                      <select className="sibling3">
                        <option>Business Law</option>
                        <option>Drug Law</option>
                        <option>Crime Law</option>
                        <option>Money Law</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                      <input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner dark-mode">
                      <input type="text" placeholder="Enter your Phone" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner dark-mode">
                      <textarea
                        rows={5}
                        placeholder="Your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-lg-start text-center">
                    <button
                      type="submit"
                      className="eg-btn btn--primary2 sibling2  btn--lg2"
                    >
                      <i className="bi bi-dash-lg" />
                      Contact Now
                      <i className="bi bi-chevron-right" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 offset-xl-1 col-lg-5">
              <div className="contact-text text-lg-start text-center">
                <h2>Lets Talk</h2>
                <p>
                  Integer quis libero semper, interdum odio non, consequat sem.
                  Quisquewb pretium, quam ut lacinia ultricies, est urna cursus
                  purus, ut tristique puru pretium, quam ut lacinia ultricies.
                </p>
              </div>
              <ul className="address-list sibling4">
                <li>
                  <div className="icon">
                    <svg
                      width={44}
                      height={44}
                      viewBox="0 0 44 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_153_65)">
                        <path d="M22 0.125C13.519 0.125 6.61914 7.02485 6.61914 15.5059C6.61914 18.3713 7.41288 21.1677 8.91508 23.5938L21.1245 43.2691C21.3584 43.646 21.7704 43.875 22.2135 43.875C22.217 43.875 22.2203 43.875 22.2237 43.875C22.6707 43.8715 23.0836 43.6354 23.3132 43.2519L35.2114 23.386C36.6307 21.0112 37.3809 18.2863 37.3809 15.5059C37.3809 7.02485 30.481 0.125 22 0.125ZM33.0115 22.0699L22.1941 40.1311L11.0939 22.2432C9.84348 20.2239 9.16553 17.8942 9.16553 15.5059C9.16553 8.43835 14.9325 2.67139 22 2.67139C29.0675 2.67139 34.8259 8.43835 34.8259 15.5059C34.8259 17.8233 34.1927 20.0935 33.0115 22.0699Z" />
                        <path d="M22 7.81543C17.7595 7.81543 14.3096 11.2654 14.3096 15.5059C14.3096 19.7193 17.7034 23.1963 22 23.1963C26.3496 23.1963 29.6904 19.673 29.6904 15.5059C29.6904 11.2654 26.2405 7.81543 22 7.81543ZM22 20.6499C19.1582 20.6499 16.856 18.34 16.856 15.5059C16.856 12.6789 19.173 10.3618 22 10.3618C24.827 10.3618 27.1355 12.6789 27.1355 15.5059C27.1355 18.2986 24.8868 20.6499 22 20.6499Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_153_65">
                          <rect
                            width="43.75"
                            height="43.75"
                            fill="white"
                            transform="translate(0.125 0.125)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text">
                    <h4>Location</h4>
                    <p>
                      168/170, Ave 01,Old York Drive Rich Mirpur, Dhaka, Bangladesh
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <svg
                      width={44}
                      height={44}
                      viewBox="0 0 44 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_153_52)">
                        <path d="M34.7007 27.2267C33.805 26.2941 32.7247 25.7955 31.5797 25.7955C30.444 25.7955 29.3544 26.2849 28.4218 27.2175L25.5039 30.1261C25.2638 29.9969 25.0238 29.8768 24.7929 29.7568C24.4605 29.5906 24.1466 29.4336 23.8788 29.2674C21.1456 27.5314 18.6617 25.2692 16.2794 22.3421C15.1252 20.8832 14.3496 19.6551 13.7863 18.4085C14.5435 17.716 15.2452 16.9958 15.9285 16.3032C16.1871 16.0447 16.4456 15.7769 16.7042 15.5184C18.6433 13.5793 18.6433 11.0677 16.7042 9.12861L14.1834 6.6078C13.8971 6.32156 13.6016 6.02608 13.3246 5.7306C12.7706 5.1581 12.1889 4.56714 11.5887 4.01312C10.693 3.12668 9.62189 2.65576 8.49537 2.65576C7.36886 2.65576 6.27928 3.12668 5.3559 4.01312C5.34667 4.02235 5.34667 4.02235 5.33744 4.03159L2.19797 7.19876C1.01605 8.38068 0.341985 9.82114 0.194245 11.4924C-0.0273642 14.1887 0.766737 16.7003 1.37616 18.3439C2.87203 22.379 5.10659 26.1187 8.43997 30.1261C12.4843 34.9554 17.3505 38.7689 22.9092 41.4559C25.033 42.4624 27.8678 43.6535 31.0349 43.8567C31.2288 43.8659 31.432 43.8752 31.6166 43.8752C33.7496 43.8752 35.541 43.1088 36.9445 41.5852C36.9538 41.5667 36.9722 41.5575 36.9815 41.539C37.4616 40.9573 38.0156 40.431 38.5974 39.8677C38.9944 39.4891 39.4007 39.0921 39.7977 38.6766C40.7119 37.7255 41.192 36.6174 41.192 35.4817C41.192 34.3367 40.7026 33.2379 39.77 32.3145L34.7007 27.2267ZM38.0064 36.9499C37.9972 36.9499 37.9972 36.9591 38.0064 36.9499C37.6463 37.3377 37.2769 37.6886 36.8799 38.0764C36.2797 38.6489 35.6703 39.2491 35.0978 39.9231C34.1652 40.9204 33.0663 41.3913 31.6259 41.3913C31.4874 41.3913 31.3396 41.3913 31.2011 41.382C28.4587 41.2066 25.9102 40.1355 23.9988 39.2214C18.7725 36.6913 14.1834 33.0994 10.3698 28.5472C7.22112 24.7521 5.11583 21.2433 3.72153 17.4759C2.8628 15.1767 2.54885 13.3854 2.68735 11.6956C2.77969 10.6152 3.19521 9.71957 3.96161 8.95317L7.11031 5.80447C7.56277 5.37971 8.04292 5.14887 8.51384 5.14887C9.09557 5.14887 9.56649 5.49975 9.86197 5.79523C9.8712 5.80447 9.88043 5.8137 9.88967 5.82293C10.4529 6.34926 10.9885 6.89405 11.5517 7.47577C11.838 7.77125 12.1335 8.06673 12.4289 8.37144L14.9498 10.8923C15.9285 11.871 15.9285 12.7759 14.9498 13.7547C14.682 14.0225 14.4234 14.2903 14.1557 14.5488C13.38 15.3429 12.6413 16.0816 11.838 16.8018C11.8195 16.8203 11.8011 16.8295 11.7918 16.848C10.9977 17.6421 11.1455 18.4177 11.3117 18.9441C11.3209 18.9718 11.3301 18.9995 11.3394 19.0272C11.995 20.6154 12.9183 22.1112 14.3219 23.8934L14.3311 23.9026C16.8796 27.0421 19.5666 29.489 22.5307 31.3634C22.9092 31.6035 23.2971 31.7974 23.6664 31.9821C23.9988 32.1483 24.3128 32.3053 24.5805 32.4715C24.6175 32.49 24.6544 32.5177 24.6913 32.5361C25.0053 32.6931 25.3008 32.767 25.6055 32.767C26.3719 32.767 26.852 32.2868 27.009 32.1298L30.167 28.9719C30.4809 28.658 30.9795 28.2794 31.5612 28.2794C32.1337 28.2794 32.6047 28.6395 32.8909 28.9534C32.9001 28.9627 32.9001 28.9627 32.9094 28.9719L37.9972 34.0597C38.9482 35.0015 38.9482 35.9711 38.0064 36.9499Z" />
                        <path d="M23.7683 10.5319C26.1875 10.9382 28.3851 12.0832 30.1395 13.8376C31.8939 15.592 33.0297 17.7897 33.4452 20.2089C33.5468 20.8183 34.0731 21.2431 34.6733 21.2431C34.7471 21.2431 34.8118 21.2338 34.8857 21.2246C35.5689 21.1138 36.0214 20.4674 35.9106 19.7842C35.412 16.8571 34.0269 14.1885 31.9124 12.074C29.7979 9.95945 27.1293 8.57439 24.2022 8.07577C23.5189 7.96497 22.8818 8.41742 22.7618 9.09148C22.6417 9.76554 23.085 10.4211 23.7683 10.5319Z" />
                        <path d="M43.8237 19.424C43.0019 14.604 40.7304 10.218 37.24 6.72766C33.7496 3.23731 29.3636 0.965807 24.5436 0.144004C23.8695 0.0239658 23.2324 0.485653 23.1124 1.15972C23.0016 1.84301 23.454 2.48014 24.1373 2.60018C28.4402 3.32964 32.3646 5.3703 35.4856 8.48207C38.6066 11.6031 40.638 15.5274 41.3675 19.8303C41.4691 20.4398 41.9954 20.8645 42.5956 20.8645C42.6694 20.8645 42.7341 20.8553 42.8079 20.846C43.482 20.7445 43.9437 20.0981 43.8237 19.424Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_153_52">
                          <rect
                            width="43.75"
                            height="43.75"
                            fill="white"
                            transform="translate(0.125 0.125)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text">
                    <h4>Phone</h4>
                    <a href="tel:+012-3456-789102">012-3456-789102</a> <br />
                    <a href="tel:+012-3456-789102">+012-3456-789102</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-section pt-120 position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Contact Us Now</span>
                  <span>Contact Us Now</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>TESTIMONIAL</span>
                <h2 className="text-white">
                  Learn about our satisfied &amp; Honest clients.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="swiper testi3-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi3-single">
                    <div className="image">
                      <img src="/src/assets/images/bg/testi31.png" alt="image" />
                      <div className="img-content">
                        <h3>Sebastian Ethan</h3>
                        <span>Crime Case</span>
                      </div>
                    </div>
                    <div className="content">
                      <img
                        src="/src/assets/images/icons/testi-quote.svg"
                        className="testi3-quote"
                        alt="image"
                      />
                      <p>
                        Curabitur magna nisi, egestas quis est in, finibus pulvinar
                        ipsumai ni Nunc sitaa amet do odiotadin gone interdum,
                        maximus dolorbankon quis, ullamcorper lectus. Mauris
                        vitaelai faucibus andijovan godmar libero. Curabitur eu
                        convallis purus. Nunc accumsan diam in thelicol arcubl
                        pellentesque odiotadin gone interdum, maximus dolorbankon
                        quis, foxthure themego odio.{" "}
                      </p>
                      <span className="ms-auto">01</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi3-single">
                    <div className="image">
                      <img src="/src/assets/images/bg/testi32.png" alt="image" />
                      <div className="img-content">
                        <h3>Jordan Martin</h3>
                        <span>Crime Case</span>
                      </div>
                    </div>
                    <div className="content">
                      <img
                        src="/src/assets/images/icons/testi-quote.svg"
                        className="testi3-quote"
                        alt="image"
                      />
                      <p>
                        Curabitur magna nisi, egestas quis est in, finibus pulvinar
                        ipsumai ni Nunc sitaa amet do odiotadin gone interdum,
                        maximus dolorbankon quis, ullamcorper lectus. Mauris
                        vitaelai faucibus andijovan godmar libero. Curabitur eu
                        convallis purus. Nunc accumsan diam in thelicol arcubl
                        pellentesque odiotadin gone interdum, maximus dolorbankon
                        quis, foxthure themego odio.{" "}
                      </p>
                      <span className="ms-auto">02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-arrows testi3-arrows text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-5">
              <div
                className="testi3-prev swiper-prev-arrow style-3"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="/src/assets/images/icons/arr-prev.svg" alt="image" />
              </div>
              <div
                className="testi3-next swiper-next-arrow style-3"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <img src="/src/assets/images/icons/arr-next.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section pb-120 dark-mode-bg pt-120">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Articale Post</span>
                  <span>Articale Post</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>LATEST BLOG</span>
                <h2 className="text-white">
                  Read and Learn from our Daily articles.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center g-4">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="blog-single2">
                <div className="image">
                  <span className="blog-badge">By, Admin</span>
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/images/blog/blog-single21.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="content">
                  <ul className="post-meta-list">
                    <li>Skirmish</li>
                    <li>22.05.2022</li>
                  </ul>
                  <h5>
                    <a href="blog-details.html">
                      Ut faucibus sit amet metus utoi porttitor sem et posuere.
                    </a>
                  </h5>
                  <p>
                    Integer quis libero semper, interdum odion boi non, consequat
                    sem.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="400ms"
            >
              <div className="blog-single2">
                <div className="image">
                  <span className="blog-badge">By, Admin</span>
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/images/blog/blog-single22.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="content">
                  <ul className="post-meta-list">
                    <li>Skirmish</li>
                    <li>22.05.2022</li>
                  </ul>
                  <h5>
                    <a href="blog-details.html">
                      hendrerit mi at eleifend massin porttitor sem et posuere.
                    </a>
                  </h5>
                  <p>
                    Integer quis libero semper, interdum odion boi non, consequat
                    sem.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="600ms"
            >
              <div className="blog-single2">
                <div className="image">
                  <span className="blog-badge">By, Admin</span>
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/images/blog/blog-single23.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="content">
                  <ul className="post-meta-list">
                    <li>Skirmish</li>
                    <li>22.05.2022</li>
                  </ul>
                  <h5>
                    <a href="blog-details.html">
                      gravida elementu an mattisinai porttitor sem et posuere.
                    </a>
                  </h5>
                  <p>
                    Integer quis libero semper, interdum odion boi non, consequat
                    sem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-section sibling3">
        <div className="footer-top">
          <div className="container-xl container-lg-fluid container">
            <div className="row gy-5">
              <div className="col-lg-3 col-md-6">
                <div className="footer-about">
                  <img src="/src/assets/images/icons/header1-logo.svg" alt="image" />
                  <p>
                    Integer purus odio, placerat nec andi rhoncus in, ullamcorper
                    nec dolorali aptent taciti sociosqu.
                  </p>
                  <ul className="footer-social gap-4">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest" />
                      </a>
                    </li>
                  </ul>
                  <div className="open-hour">
                    <h6>Open Hour</h6>
                    <p>Monday To Saturday, 9.00 AM - 10.30 PM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                  <h4>Practice Area</h4>
                  <ul className="link-list">
                    <li>
                      <a href="practice-details.html">Business Law</a>
                    </li>
                    <li>
                      <a href="practice-details.html">Work Accident</a>
                    </li>
                    <li>
                      <a href="practice-details.html">Criminal Law</a>
                    </li>
                    <li>
                      <a href="practice-details.html">Real State Law</a>
                    </li>
                    <li>
                      <a href="practice-details.html">Drug Offense</a>
                    </li>
                    <li>
                      <a href="practice-details.html">Juvenile Crime</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                  <h4>Contacts</h4>
                  <ul className="contact-list">
                    <li>
                      <div className="icon">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_169_19583)">
                            <path d="M18.1771 14.2474C17.7063 13.7571 17.1383 13.495 16.5364 13.495C15.9393 13.495 15.3665 13.7523 14.8762 14.2425L13.3422 15.7716C13.216 15.7037 13.0898 15.6406 12.9684 15.5775C12.7937 15.4901 12.6286 15.4076 12.4879 15.3202C11.051 14.4076 9.74519 13.2183 8.49278 11.6795C7.88599 10.9125 7.47823 10.2669 7.18212 9.61153C7.58017 9.24745 7.9491 8.86882 8.30832 8.50475C8.44424 8.36882 8.58016 8.22805 8.71608 8.09213C9.73548 7.07272 9.73548 5.75235 8.71608 4.73295L7.39085 3.40772C7.24037 3.25724 7.08503 3.1019 6.9394 2.94656C6.64814 2.6456 6.34232 2.33492 6.02679 2.04366C5.55592 1.57765 4.99282 1.33008 4.4006 1.33008C3.80837 1.33008 3.23556 1.57765 2.75013 2.04366C2.74528 2.04852 2.74528 2.04852 2.74043 2.05337L1.08996 3.7184C0.46861 4.33975 0.114245 5.09702 0.0365763 5.97565C-0.079927 7.39311 0.337543 8.71348 0.657928 9.57755C1.44433 11.6989 2.61907 13.6649 4.37147 15.7716C6.49766 18.3104 9.05588 20.3153 11.9782 21.7279C13.0947 22.257 14.5849 22.8832 16.25 22.99C16.3519 22.9949 16.4587 22.9997 16.5558 22.9997C17.6771 22.9997 18.6189 22.5968 19.3567 21.7958C19.3616 21.7861 19.3713 21.7813 19.3761 21.7716C19.6286 21.4657 19.9198 21.1891 20.2256 20.8929C20.4344 20.6939 20.648 20.4852 20.8567 20.2667C21.3373 19.7667 21.5897 19.1842 21.5897 18.5871C21.5897 17.9852 21.3324 17.4075 20.8421 16.9221L18.1771 14.2474ZM19.915 19.359C19.9101 19.359 19.9101 19.3638 19.915 19.359C19.7256 19.5629 19.5315 19.7473 19.3227 19.9512C19.0072 20.2522 18.6868 20.5677 18.3859 20.9221C17.8956 21.4463 17.3179 21.6939 16.5606 21.6939C16.4878 21.6939 16.4102 21.6939 16.3373 21.689C14.8956 21.5968 13.5558 21.0337 12.551 20.5531C9.80344 19.2231 7.39085 17.3347 5.38602 14.9416C3.7307 12.9464 2.62392 11.1018 1.89092 9.12124C1.43947 7.91252 1.27442 6.97078 1.34724 6.08245C1.39578 5.51449 1.61423 5.04362 2.01713 4.64072L3.67245 2.9854C3.91031 2.7621 4.16274 2.64074 4.41031 2.64074C4.71613 2.64074 4.9637 2.82521 5.11904 2.98054C5.12389 2.9854 5.12874 2.99025 5.1336 2.99511C5.42971 3.2718 5.71126 3.55821 6.00737 3.86403C6.15786 4.01937 6.31319 4.1747 6.46853 4.3349L7.79376 5.66012C8.30832 6.17468 8.30832 6.6504 7.79376 7.16496C7.65298 7.30573 7.51706 7.44651 7.37629 7.58243C6.96853 7.9999 6.58018 8.38824 6.15786 8.76688C6.14815 8.77659 6.13844 8.78144 6.13359 8.79115C5.71611 9.20862 5.79378 9.61638 5.88116 9.89308C5.88602 9.90764 5.89087 9.9222 5.89572 9.93677C6.24038 10.7717 6.72581 11.5581 7.46367 12.495L7.46852 12.4998C8.80831 14.1503 10.2209 15.4367 11.7791 16.4221C11.9782 16.5483 12.1821 16.6503 12.3762 16.7474C12.551 16.8347 12.716 16.9173 12.8568 17.0046C12.8762 17.0143 12.8956 17.0289 12.9151 17.0386C13.0801 17.1211 13.2354 17.16 13.3956 17.16C13.7985 17.16 14.051 16.9076 14.1335 16.825L15.7937 15.1649C15.9587 14.9998 16.2208 14.8008 16.5267 14.8008C16.8276 14.8008 17.0752 14.9901 17.2257 15.1551C17.2305 15.16 17.2305 15.16 17.2354 15.1649L19.9101 17.8396C20.4101 18.3347 20.4101 18.8444 19.915 19.359Z" />
                            <path d="M12.43 5.47141C13.7019 5.685 14.8572 6.28693 15.7795 7.20925C16.7018 8.13157 17.2989 9.28689 17.5174 10.5587C17.5708 10.8791 17.8474 11.1024 18.163 11.1024C18.2018 11.1024 18.2358 11.0975 18.2746 11.0927C18.6338 11.0344 18.8717 10.6946 18.8135 10.3354C18.5513 8.79661 17.8232 7.39371 16.7115 6.28208C15.5999 5.17044 14.197 4.44229 12.6582 4.18016C12.299 4.12191 11.964 4.35977 11.9009 4.71413C11.8378 5.0685 12.0708 5.41315 12.43 5.47141Z" />
                            <path d="M22.9732 10.1458C22.5411 7.61183 21.347 5.30604 19.512 3.47111C17.6771 1.63618 15.3713 0.442024 12.8374 0.00999088C12.483 -0.0531151 12.148 0.1896 12.0849 0.543965C12.0267 0.903183 12.2646 1.23813 12.6238 1.30124C14.8859 1.68473 16.949 2.75753 18.5897 4.39343C20.2305 6.03418 21.2984 8.09727 21.6819 10.3594C21.7353 10.6798 22.012 10.9031 22.3275 10.9031C22.3664 10.9031 22.4003 10.8982 22.4392 10.8933C22.7935 10.8399 23.0363 10.5001 22.9732 10.1458Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_169_19583">
                              <rect width={23} height={23} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text">
                        <a href="tel:+8801761111456">+880 176 1111 456</a>
                        <a href="tel:+8801761111458" className="mb-0">
                          +880 176 1111 458
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_169_19592)">
                            <path d="M20.7988 2.91992H2.11134C0.922305 2.91992 -0.0449219 3.88715 -0.0449219 5.07619V18.0137C-0.0449219 19.2027 0.922305 20.1699 2.11134 20.1699H20.7988C21.9879 20.1699 22.9551 19.2027 22.9551 18.0137V5.07619C22.9551 3.88715 21.9879 2.91992 20.7988 2.91992ZM20.7988 4.35742C20.8965 4.35742 20.9894 4.37768 21.0743 4.41306L11.4551 12.7501L1.83581 4.41306C1.92074 4.37772 2.01364 4.35742 2.11129 4.35742H20.7988ZM20.7988 18.7324H2.11134C1.71477 18.7324 1.39257 18.4103 1.39257 18.0136V5.93179L10.9841 14.2444C11.1196 14.3616 11.2873 14.4199 11.4551 14.4199C11.6228 14.4199 11.7906 14.3617 11.9261 14.2444L21.5176 5.93179V18.0137C21.5175 18.4103 21.1954 18.7324 20.7988 18.7324Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_169_19592">
                              <rect width={23} height={23} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text">
                        <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#21484f474e614459404c514d440f424e4c">
                          <span
                            className="__cf_email__"
                            data-cfemail="1b72757d745b7e637a766b777e35787476"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                        <a
                          href="https://demo.egenslab.com/cdn-cgi/l/email-protection#6c1f191c1c031e182c09140d011c0009420f0301"
                          className="mb-0"
                        >
                          <span
                            className="__cf_email__"
                            data-cfemail="473432373728353307223f262a372b226924282a"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          width={23}
                          height={23}
                          viewBox="0 0 23 23"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_169_19596)">
                            <path d="M18.3087 3.93864C16.9129 1.52975 14.4335 0.0580615 11.6764 0.00181934C11.5588 -0.000606445 11.4403 -0.000606445 11.3226 0.00181934C8.56552 0.0580615 6.08619 1.52975 4.69029 3.93864C3.26348 6.4009 3.22444 9.35855 4.58585 11.8504L10.2893 22.2897C10.2918 22.2943 10.2944 22.2989 10.297 22.3035C10.548 22.7397 10.9975 23 11.4996 23C12.0016 23 12.4512 22.7396 12.7021 22.3035C12.7047 22.2989 12.7073 22.2943 12.7098 22.2897L18.4132 11.8504C19.7746 9.35855 19.7355 6.4009 18.3087 3.93864ZM11.4995 10.4219C9.71606 10.4219 8.26513 8.97097 8.26513 7.18752C8.26513 5.40408 9.71606 3.95315 11.4995 3.95315C13.2829 3.95315 14.7339 5.40408 14.7339 7.18752C14.7339 8.97097 13.283 10.4219 11.4995 10.4219Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_169_19596">
                              <rect width={23} height={23} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text">
                        168/170, Avenue 01, Mirpur DOHS, Bangladesh
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-end">
                <div className="footer-item">
                  <h4>Recent Case</h4>
                  <ul className="recent-caselist">
                    <li>
                      <div className="image">
                        <img
                          src="/src/assets/images/blog/recent-case1.png"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <span>skirmish</span>
                        <h5>
                          <a href="casestudy-details.html">Education Law</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="/src/assets/images/blog/recent-case2.png"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <span>skirmish</span>
                        <h5>
                          <a href="casestudy-details.html">Personal injury</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="/src/assets/images/blog/recent-case3.png"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <span>skirmish</span>
                        <h5>
                          <a href="casestudy-details.html">Drug Offense</a>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="row d-flex align-items-center g-3">
              <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
                <p>
                  Copyright 2022{" "}
                  <a href="#" className="egns-lab">
                    Core Law{" "}
                  </a>{" "}
                  | Design By{" "}
                  <a
                    href="https://themeforest.net/category/site-templates?term=egenslab"
                    className="egns-lab"
                  >
                    Egens Lab
                  </a>
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
                <ul className="f-bottom-list d-flex jusify-content-start align-items-center">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Mirrored from demo.egenslab.com/html/corelaw/preview/index3.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 08 Apr 2024 17:49:21 GMT */}
    </>
    </div>
  )
}

export default App