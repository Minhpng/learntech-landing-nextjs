import './payment.css'

const supportTel = '097 397 9109'


function PaymentLayout({ children }) {
    return (<>
        <section className='paymentHero bg-dark'>
            <div className="container">
                <h2 className='paymentHeader'>THANH TOÁN</h2>
                <div className="logo">
                    <img src="/logo.png" alt="Learntech logo" />
                </div>
                <h2 className='paymentSubtitle'>Kênh phân phối chính thức của <span className='inline'>Lang Kingdom</span> tại thị trường Việt Nam</h2>
                <h3 className='paymentSubtitle'>An toàn - Bảo mật - Nhanh chóng</h3>
            </div>
        </section>
        <section className='section'>
            <div className='container'>
                <div className='paymentWrapper'>
                    {children}
                    <div className='paymentSupportWrapper'>
                        <p className='paymentInfoHeading'>Nếu bạn có thắc mắc vui lòng CHAT hoặc GỌI cho chúng tôi để được giải đáp</p>
                        <div className='supportListWrapper'>
                            <div className='paymentSupportImage'>
                                <img src="/chat.svg"></img>
                            </div>
                            <a href="">Nhắn tin Messenger cho chúng tôi</a>
                        </div>
                        <div className='supportListWrapper'>
                            <div className='paymentSupportImage'>
                                <img src="/call.svg"></img>
                            </div>
                            <a href="">Hotline: {supportTel}</a>
                        </div>
                        <div className='supportListWrapper'>
                            <div className='paymentSupportImage'>
                                <img src="/icon-zalo.svg"></img>
                            </div>
                            <a href="">Zalo chat: {supportTel}</a>
                        </div>
                        <div className='supportListWrapper'>
                            <div className='paymentSupportImage'>
                                <img src="/mail.svg"></img>
                            </div>
                            <a href="">Email: support@langkingdom.com</a>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    </>);
}

export default PaymentLayout;