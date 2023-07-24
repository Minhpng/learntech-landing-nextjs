function PaymentPolicy() {
    return (
        <main className="section" >
            <div className="container">
                <div className="contentWrapper">
                    <h3 className="primary-heading">Chính sách thanh toán</h3>
                    {/* <p className="body-text">Quý khách khi hàng https://learntech.vn có thể thanh toán chuyển khoản theo thông tin tài khoản sau:</p> */}
                    {/* <p className="body-text">Quý khách khi hàng https://learntech.vn có thể lựa chọn một trong các hình thức thanh toán sau để thuận tiện và nhanh nhất:</p> */}
                    <ul className="ml-50 mb-20">
                        {/* <li className="body-text">Thanh toán qua Visa, Mastercard thông qua Vnpay (hỗ trợ các ngân hàng trong nước) hoặc Paypal (Hỗ trợ ngân hàng trong nước và quốc tế)</li>
                        <li className="body-text">Thanh toán qua tài khoản Paypal</li> */}
                        <li className="body-text">Quý khách khi hàng https://learntech.vn có thể thanh toán chuyển khoản theo thông tin tài khoản sau:</li>
                        {/* <li className="body-text">Thanh toán chuyển khoản: quý khách nếu ngại thanh toán tiền mặt có thể chuyển khoản cho chúng tôi theo thông tin tài khoản sau:</li> */}
                        <ul className="ml-50">
                            <li className="body-text"><span className="font-weight-700">Tên Tài Khoản:</span> LEARNTECT CO. LTD</li>
                            <li className="body-text"><span className="font-weight-700">Số Tài Khoản:</span> 2755746868</li>
                            <li className="body-text"><span className="font-weight-700">Ngân hàng:</span> MBBANK – CN TÂY SÀI GÒN</li>
                        </ul>
                    </ul>
                    <p className="body-text">Ngay sau khi nhận được thanh toán của khách hàng qua chuyển khoản, chúng tôi sẽ liên hệ lại để xác nhận thông tin và hỗ trợ giải quyết giao hàng theo thỏa thuận hợp đồng hoặc theo thỏa thuận trực tiếp với khách hàng. Nếu quá thời gian cam kết giao hàng mà khách hàng vẫn chưa được nâng cấp tài khoản có thể liên hệ hotline: <a className="text-blue-accent" href="tel:0963527374">096 352 7374</a> để được hỗ trợ giải đáp.</p>
                </div>
            </div>
        </main>
    );
}

export default PaymentPolicy;