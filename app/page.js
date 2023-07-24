import Script from "next/script";

export default function Home() {
  return (
    <main>
      <section className="section section-hero bg-dark">
        <div className="container hero">
          <div className="hero-content">
            <h1 className="app-name">Lang Kingdom</h1>
            <p className="hero-content_body-text">
              Ứng dụng tự học tiếng Anh online duy nhất nhất giúp bạn hiểu rõ ngọn
              ngành từng từ vựng, cấu trúc câu, ngữ pháp và văn hóa bản xứ trong
              từng câu nói.
            </p>
            {/* <p className="hero-content_body-text">
              Phát triển kỹ năng nghe-nói tiếng Anh bằng cách luyện nói phân
              vai, tăng tốc độ phản xạ nghe hiểu và đối đáp lại trong vòng dưới
              7 giây!
            </p> */}
            <div className="download-app-cta">
              <div className="download-app-button-wrapper">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.langkingdom.langkingdom" className="download-app-button">
                  <img
                    src="/Get_it_on_Google_play.png"
                    alt="download from Google play"
                  />
                </a>
                <a target="_blank" href="https://apps.apple.com/us/app/lang-kingdom-gi%E1%BB%8Fi-ti%E1%BA%BFng-anh/id1353744959" className="download-app-button">
                  <img
                    src="/App_Store_Badge.png"
                    alt="download from Apple store"
                  />
                </a>
              </div>
              <div className="app-rating">
                <p className="app-rating-text">4.7</p>
                <div><img src="/rating.png" alt="rating" /></div>
                <p className="app-rating-text">(7k+ Reviews)</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-image-1.png" alt="Lang Kingdom main feature" />
          </div>
        </div>
      </section>

      {/* === === === === SECTION ABOUT LANG KINGDOM APP === === === === === */}
      <section className="section">
        <div className="container">
          <div className="appIntroWrapper">
            <div className="hero-content">
              <h1 className="body-text">ỨNG DỤNG LANG KINGDOM</h1>
              <p className="primary-heading">
                Tự học tiếng Anh chưa bao giờ dễ dàng đến thế
              </p>
              <li className="body-text">
                Ứng dụng luyện nói tiếng Anh trực tuyến.
              </li>
              <li className="body-text">
                Tự luyện nói tiếng Anh dễ dàng thông qua các mẫu câu, bài hội thoại đơn giản, gần gũi với cuộc sống thường ngày;
              </li>
              <li className="body-text">
                Tra cứu từ điển từ, cụm, câu Anh - Việt giúp hiểu rõ ngữ nghĩa và cách dùng;
              </li>
              <li className="body-text">
                Luyện nói bất cứ nơi đâu có kết nối mạng, dừng và tiếp tục luyện  bất kỳ lúc nào.
              </li>

            </div>
            <div className="app-intro-image">
              <img src="/main-screen-2.png" alt="Lang Kingdom main feature" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SECTION 6 PHUONG PHAP --> */}

      <section className="section">
        <div className="container section-methods">
          <h1 className="primary-heading">
            Phương pháp tự học tiếng Anh với Lang Kingdom
          </h1>
          <div className="six-methods">
            <ul className="six-methods_block">
              <li className="six-methods_block-item">
                <h4 className="heading-4">
                  Học chủ động, tìm hiểu cặn kẽ.
                </h4>
              </li>
              <li className="six-methods_block-item">
                <h4 className="heading-4">Làm bài tập để nhớ mặt chữ</h4>
              </li>
              <li className="six-methods_block-item">
                <h4 className="heading-4">
                  Nghe cho quen tai - Quen và ngấm toàn bộ nội dung (16000
                  words, 24000 phrases, 14000 sentences) để tích lũy đủ ba loại
                  vốn
                </h4>
              </li>
              <li className="six-methods_block-item">
                <h4 className="heading-4">
                  Đọc cho quen miệng - Thuộc lòng và phản xạ vô điều kiện, không
                  cần suy nghĩ
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- === === === === SECTION PICTURE FEATURES === === === === === --> */}
      <section className="">
        <div className="container">
          {/* <!-- Slider main container --> */}
          <div className="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide feature-image-item">
                <img src="/hoc-chu-dong.png" alt="lang kingdom" />
              </div>
              <div className="swiper-slide feature-image-item">
                <img src="/lam-bai-tap.png" alt="lang kingdom" />
              </div>
              <div className="swiper-slide feature-image-item">
                <img src="/nghe-thu-dong.png" alt="lang kingdom" />
              </div>
              <div className="swiper-slide feature-image-item">
                <img src="/phan-xa-7s.png" alt="lang kingdom" />
              </div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          {/* <!-- <div className="feature-image-wrapper">
                <div className="feature-image-item">
                    <img src="/hoc-chu-dong.png" alt="lang kingdom" />
                </div>
                <div className="feature-image-item">
                    <img src="/lam-bai-tap.png" alt="lang kingdom" />
                </div>
                <div className="feature-image-item">
                    <img src="/nghe-thu-dong.png" alt="lang kingdom" />
                </div>
                <div className="feature-image-item">
                    <img src="/phan-xa-7s.png" alt="lang kingdom" />
                </div>
            </div> --> */}
        </div>
      </section>

      {/* <!-- SECTION COUNT --> */}
      <section className="section section-count">
        <div className="container">
          <div className="counter-wrapper bg-dark">
            <div className="counter-item-block">
              <h1 data-max-number="500000" className="counter-number">500,000+</h1>
              <p className="counter-subtext">người dùng</p>
            </div>
            <div className="counter-item-block">
              <h1 data-max-number="200000" className="counter-number">200,000+</h1>
              <p className="counter-subtext">lượt tải app</p>
            </div>
            <div className="counter-item-block">
              <h1 data-max-number="20" className="counter-number">20+</h1>
              <p className="counter-subtext">quốc gia</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- === === === === SECTION TESTIMONIALS === === === === --> */}
      <section className="section bg-light-gray">
        <div className="container">
          <div className="testimonials-wrapper-grid">
            <div className="testimonials-grid-item">
              <p className="testimonials-content">
                Tôi đã sử dụng Lang Kingdom để học tiếng Anh trong vài tháng qua
                và tôi rất hài lòng với trải nghiệm của mình. Ứng dụng này cung
                cấp một lộ trình học hoàn chỉnh, giúp tôi cải thiện khả năng
                ngôn ngữ của mình một cách hiệu quả. Bên cạnh đó, tôi cũng rất
                thích tính năng bài giảng cho từng câu từ và trình phát tự động
                giúp tôi học một thuật lợi và hiệu quả
              </p>
              <div className="testimonials-person">
                <div className="person-avatar">
                  <img src="/avatar01.png" alt="user avatar" />
                </div>
                <div className="person-info">
                  <div className="person-name">Nam Nguyễn</div>
                  <div className="person-rating">
                    <img src="/rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-grid-item">
              <p className="testimonials-content">
                Lang Kingdom là một ứng dụng học tiếng Anh tốt nhất mà tôi từng
                dùng. Nó cung cấp cho người dùng rất nhiều một lộ trình học tập
                vô cùng chi tiết. Ngoài ra, phương phát học 6 bước của Lang
                Kingdom vô cùng hay giúp tôi cải thiện kỹ năng nói tiếng Anh của
                mình rất nhanh và hiệu quả.
              </p>
              <div className="testimonials-person">
                <div className="person-avatar">
                  <img src="/avatar02.png" alt="user avatar" />
                </div>
                <div className="person-info">
                  <div className="person-name">Ly Nguyễn</div>
                  <div className="person-rating">
                    <img src="/rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-grid-item">
              <p className="testimonials-content">
                Nếu bạn đang tìm kiếm một ứng dụng học tiếng Anh đầy đủ và chất
                lượng, tôi sẽ khuyên bạn hãy sử dụng Lang Kingdom. Tôi đã sử
                dụng ứng dụng này trong vài tháng qua và tôi thấy mình đã học
                được rất nhiều từ mới và cải thiện được khả năng giao tiếp của
                mình trong tiếng Anh. 1 like cho Lang Kingdom 👍
              </p>
              <div className="testimonials-person">
                <div className="person-avatar">
                  <img src="/avatar03.png" alt="user avatar" />
                </div>
                <div className="person-info">
                  <div className="person-name">Hà Thu</div>
                  <div className="person-rating">
                    <img src="/rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-grid-item">
              <p className="testimonials-content">
                Lang Kingdom là một ứng dụng học tiếng Anh rất tuyệt vời. Nó
                cung cấp cho người dùng rất nhiều bài học, hiểu rõ cách dùng
                bằng bài giảng vô cùng chi tiết, giúp tôi cải thiện nhanh chóng
                khả năng ngôn ngữ của mình. Tôi đã sử dụng nhiều ứng dụng học
                tiếng Anh trên thị trường, nhưng Lang Kingdom thực sự là một
                trong những ứng dụng tốt nhất mà tôi từng dùng.❤️
              </p>
              <div className="testimonials-person">
                <div className="person-avatar">
                  <img src="/avatar04.png" alt="user avatar" />
                </div>
                <div className="person-info">
                  <div className="person-name">Phương Oanh</div>
                  <div className="person-rating">
                    <img src="/rating.png" alt="rating" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- =========== SECTION KHAI MO ==================== --> */}
      {/* <section className="section section-khaimo">
        <div className="container">
          <div className="video-wrapper">
            <span className="play-icon">
              <i className="fas fa-play"></i>
            </span>
            <video video-controler='true' poster="./thumbnail-video-1.jpg">
              <source
                src="https://static.langkingdom.com/webinars/videos/LP-hero-220814.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="khoa-hoc-content">
            <p className="khoa-hoc-subtext">Khóa học khai mở</p>
            <h1 className="primary-heading">
              Chinh phục tiếng Anh sau 2 buổi, ngay cả khi bạn nghĩ mình không
              có tố chất và tự gọi mình là “quá lười”!
            </h1>
            <a href="" className="khoa-hoc-detail-button">Xem chi tiết</a>
          </div>
        </div>
      </section> */}
      {/* <!-- =========== SECTION PRICING ==================== --> */}
      <section id="pricing" className="section section-pricing">
        <div className="container">
          <div className="pricing-wrapper">
            <div className="pricing-item">
              <div className="pricing-tag-wrapper">
                <div className="pricing-tag">Premium 1 năm</div>
              </div>
              <div className="pricing-divider"></div>
              <p className="pricing-price">1,290,000đ</p>
              <div className="pricing-divider"></div>
              <ul className="pricing-item-feature-list">
                <li className="pricing-feature-list-item">1 năm học</li>
                <li className="pricing-feature-list-item cross-item">
                  Tặng khóa "10 ngày nắm vững phát âm IPA giọng bản xứ và đọc
                  làu làu từ điển"
                </li>
                <li className="pricing-feature-list-item cross-item">
                  Tặng khóa "60 điểm ngữ pháp lấy lại tất tần tật căn bản mà
                  người ta không muốn hệ thống hóa cho bạn!"
                </li>
              </ul>

              <a href="/payment" className="pricing-buy-button">Mua tài khoản</a>
            </div>
            <div className="pricing-item pricing-primary">
              <div className="pricing-tag-wrapper">
                <div className="pricing-tag tag-primary">Được mua nhiều nhất</div>
                <div className="pricing-tag">Premium đặc biệt</div>
              </div>
              <div className="pricing-divider"></div>
              <p className="pricing-price">2,590,000đ</p>
              <div className="pricing-divider"></div>
              <ul className="pricing-item-feature-list">
                <li className="pricing-feature-list-item">2 năm học</li>
                <li className="pricing-feature-list-item">Tặng thêm 6 tháng học</li>
                <li className="pricing-feature-list-item">
                  Tặng khóa "10 ngày nắm vững phát âm IPA giọng bản xứ và đọc
                  làu làu từ điển"
                </li>
                <li className="pricing-feature-list-item">
                  Tặng khóa "60 điểm ngữ pháp lấy lại tất tần tật căn bản mà
                  người ta không muốn hệ thống hóa cho bạn!"
                </li>
              </ul>

              <a href="/payment" className="pricing-buy-button">Mua tài khoản</a>
            </div>

            <div className="pricing-item">
              <div className="pricing-tag-wrapper">
                <div className="pricing-tag">Premium 6 tháng</div>
              </div>
              <div className="pricing-divider"></div>
              <p className="pricing-price">890,000đ</p>
              <div className="pricing-divider"></div>
              <ul className="pricing-item-feature-list">
                <li className="pricing-feature-list-item">6 tháng học</li>

                <li className="pricing-feature-list-item cross-item">
                  Tặng khóa "10 ngày nắm vững phát âm IPA giọng bản xứ và đọc
                  làu làu từ điển"
                </li>
                <li className="pricing-feature-list-item cross-item">
                  Tặng khóa "60 điểm ngữ pháp lấy lại tất tần tật căn bản mà
                  người ta không muốn hệ thống hóa cho bạn!"
                </li>
              </ul>

              <a href="/payment" className="pricing-buy-button">Mua tài khoản</a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- === === === === SECTION FAQS === === === === --> */}
      <section className="section section-faqs bg-light-gray">
        <div className="container">
          <h1 className="primary-heading">FAQs</h1>
          <div className="faq-list">
            <div className="faq-list-item expanded">
              <div className="faq-item-icon"></div>
              <div className="faq-item-content-wrapper">
                <h4 className="faq-heading heading-4">
                  Nâng cấp tài khoản LANG KINGDOM như thế nào?
                </h4>
                <p className="faq-desc">
                  Sau khi đã thanh toán thành công, tài khoản Lang Kingdom của bạn sẽ được tự động nâng cấp.
                </p>
              </div>
            </div>

            <div className="faq-list-item">
              <div className="faq-item-icon"></div>
              <div className="faq-item-content-wrapper">
                <h4 className="faq-heading heading-4">
                  LANG KINGDOM hoạt động trên điện thoại, máy tinh bảng hay máy tính?
                </h4>
                <p className="faq-desc">
                  Hiện tại, LANG KINGDOM có thể sử dụng được trên điện thoại Android/iOS và trên máy trình duyệt máy tính. Trong tương lai, LANG KINGDOM sẽ cố gắng cải tiến để phục vụ người dùng tốt nhất.
                </p>
                <p className="faq-desc">
                  Đối với máy tính bảng hãy lưu ý riêng với iPad, hãy tải LANG KINGDOM từ iTune store (như iPhone vậy). LANG KINGDOM chưa hỗ trợ tối đa cho các thiết bị màn hình lớn nên một số design có thể gặp lỗi. Vì vậy, để đạt chất lượng tốt nhất, hãy sử dụng LANG KINGDOM với iPhone hay điện thoại Android.
                </p>
              </div>
            </div>
            <div className="faq-list-item">
              <div className="faq-item-icon"></div>
              <div className="faq-item-content-wrapper">
                <h4 className="faq-heading heading-4">
                  App này có phải miễn phí không?
                </h4>
                <p className="faq-desc">
                  Đúng. Miễn phí tải LANG KINGDOM và thử sử dụng với những bài học mẫu. Từ đó, bạn có thể hiểu rõ phương pháp học của LANG KINGDOM. Tuy nhiên, toàn bộ khóa học có tính phí.
                </p>
              </div>
            </div>
            <div className="faq-list-item">
              <div className="faq-item-icon"></div>
              <div className="faq-item-content-wrapper">
                <h4 className="faq-heading heading-4">
                  Tiếng Anh của tôi khá, liệu LANG KINGDOM có phù hợp với tôi?
                </h4>
                <p className="faq-desc">
                  Để biết câu trả lời chính xác, hãy tài LANG KINGDOM ngay và làm bài test để được LANG KINGDOM đánh giá ngay.
                </p>
              </div>
            </div>
            <div className="faq-list-item">
              <div className="faq-item-icon"></div>
              <div className="faq-item-content-wrapper">
                <h4 className="faq-heading">
                  Tôi có thể học LANG KINGDOM khi thiết bị đang không có kết nối internet được không?
                </h4>
                <p className="faq-desc">
                  Không. Vì số lượng dữ liệu rất lớn để LANG KINGDOM có thể nhận diện giọng nói trực tuyến của tất cả các bạn, LANG KINGDOM cần được kết nối wifi liên tục.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" />
      <Script src="/main.js" />

    </main>
  )
}
