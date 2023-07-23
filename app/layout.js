import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learntech - Nhà phân phối chính thức Lang Kingdom tại Việt Nam',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en"

    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
      </head>
      <body>
        <header>
          <div className="main-header bg-dark">
            <div className="container">
              <div className="header-wrapper">
                <div className="logo">
                  <img src="/logo.png" alt="Learntech logo" />
                </div>
                <div className="header-cta">
                  <a href="#pricing" className="header-button">Mua tài khoản</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="section footer">
          <div className="container">
            <div className="footer-item-wrapper">
              <div className="footer-item">
                <div className="item-heading">Thông tin liên hệ</div>
                <p className="link-desc">
                  <a href="tel:0963527374">Điện thoại: 0963527374</a>
                </p>
                <p className="link-desc">
                  <a href="mailto:0963527374">Email: learntech@gmail.com</a>
                </p>
                <p className="link-desc">
                  Địa chỉ: 165 - 167 Nguyện Thị Thập, KĐT Him Lam, Phường Tân
                  Hưng, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
              <div className="footer-item">
                <div className="item-heading">Chính sách</div>
                <p className="link-desc">
                  <a href="/chinh-sach-thanh-toan"
                  ><i className="fa-solid fa-caret-right"></i> Chính sách thanh
                    toán</a
                  >
                </p>
                <p className="link-desc">
                  <a href="/chinh-sach-bao-mat">
                    <i className="fa-solid fa-caret-right"></i> Chính sách bảo mật</a
                  >
                </p>
              </div>
              <div className="footer-item">
                <div className="item-heading">Download App</div>
                <p className="link-desc">
                  <a href="">
                    <img
                      src="/Get_it_on_Google_play.png"
                      alt=" Lang kingdom Google play"
                    />
                  </a>
                </p>
                <p className="link-desc">
                  <a href=""
                  ><img src="/App_Store_Badge.png" alt="Lang Kingdom appstore"
                    /></a>
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-logo">
                <img src="/logo.png" alt="lang kingdom logo" />
              </div>
              <p className="footer-bottom-desc">
                LearnTech.vn - là chuyên trang phân phối chính thức LANG KINGDOM
                tại Việt Nam.
              </p>
              <p className="footer-bottom-desc">GPKD: Công ty TNHH LearnTech</p>
              <p className="footer-bottom-desc">MST: 0317803574</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
