'use client'
import { useState, useCallback } from 'react';

import './payment.css'
import Link from 'next/link';

const paymentMethods = {
    transfer: 'chuyen_khoan',
    internetBanking: 'internet_banking',
    visa: "visa",
    paypal: "paypal",
}


function PaymentPage() {
    const [paymentMethod, setMethod] = useState(paymentMethods.transfer)
    const [isVideoOpened, setOpenVideo] = useState(false)
    const [promoCode, setPromoCode] = useState('')

    function handlePaymentMethod(e) {
        const method = e.target.value
        setMethod(() => method)
    }

    const openVideo = useCallback(() => {
        setOpenVideo(!isVideoOpened)
    }, [isVideoOpened])

    const onApplyPromoCode = useCallback((e) => {
        e.preventDefault();
        console.log(promoCode)
    })

    return <>
        <form className='paymentFormWrapper'>
            <div className='userPaymentInfoWrapper'>
                <h3 className='paymentInfoHeading'>Thông tin thanh toán</h3>
                <div className='userInfoItem'>
                    <label htmlFor="user_name">Họ và tên*</label>
                    <input type="text" name="user_name" placeholder="Họ và tên" autoComplete='given-name' required />
                    <span className='body-text text-red'>Vui lòng nhập thông tin này</span>
                </div>
                <div className='userInfoItem'>
                    <label htmlFor="user_phone">Số điện thoại*</label>
                    <input type="text" name="user_phone" placeholder="Số điện thoại" autoComplete='tel' required />
                    <span className='body-text text-red'>Vui lòng nhập thông tin này</span>
                </div>
                <div className='userInfoItem'>
                    <label htmlFor="">Địa chỉ email*</label>
                    <input type="text" name="user_email" placeholder="Email" autoComplete='email' required />
                    <span className='body-text text-red'>Vui lòng nhập thông tin này</span>
                </div>
                <div className='userInfoItem'>
                    <label htmlFor="user_id">ID tài khoản Lang Kingdom*</label>
                    <input type="text" name="user_id" placeholder="ID Lang Kingdom" autoComplete='none' required />
                    <span className='body-text text-red'>Vui lòng nhập thông tin này</span>
                    <p onClick={openVideo} className='userInfoExplain'>Xem video hướng dẫn lấy id {<i className={`fa-solid ${!isVideoOpened ? "fa-circle-chevron-down" : "fa-circle-chevron-up"}`} />}</p>
                    {
                        isVideoOpened ? <div className='paymentVideoWrapper'>
                            <video controls>
                                <source
                                    src="https://static.langkingdom.com/webinars/videos/huong_dan_offer.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div> : null}

                </div>
            </div>

            <div className='paymentDivider'></div>


            <div className='billingDetailWrapper'>
                <p className='paymentInfoHeading'>Đơn hàng của bạn</p>
                <div className='billingUserInfo'>
                    <p className='billingItemMainText'>Tài khoản Lang Kingdom:</p>
                    <p className='billingUserAccount'>Minhphamxxx</p>
                </div>
                <div className='billingProductItem'>
                    <p className='billingItemMainText'>
                        Sản phẩm
                    </p>
                    <p className='billingItemMainText'>Số tiền</p>
                </div>
                <div className='billingProductItem'>
                    <p>Lang kingdom Pro 1 năm</p>
                    <p className='billingItemMainText'>1,490,000đ</p>
                </div>
                <div className='billingProductItem'>
                    <div>
                        <p>Mã giảm giá:</p>
                        <p>
                            <span className='billingUserAccount'>XXXX</span> <span style={{ color: "red", fontWeight: "700", cursor: 'pointer' }}><i className="fa-solid fa-circle-xmark"></i> Xóa</span>
                        </p>
                    </div>
                    <p className='billingItemMainText'> -50,000đ</p>

                </div>
                <div className='paymentDivider'></div>

                <div className='billingProductItem'>
                    <p className='billingItemMainText'>
                        Tổng
                    </p>
                    <p className='billingTotalPrice'>1,440,000đ</p>
                </div>

                <div className='paymentDiscount'>
                    <div className='discountInputWrapper'>
                        <input
                            type="text"
                            name='discount'
                            id='discount'
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            placeholder='Mã giảm giá' ></input>
                        <button onClick={(e) => onApplyPromoCode(e)}>Áp dụng</button>
                    </div>
                    <span className='discountErrorText'>Mã này không hợp lệ. Bạn vui lòng kiểm tra lại nhé.</span>
                </div>

            </div>

            <div className='paymentDivider'></div>

            <div className='paymentMethodsWrapper'>
                <h3 className='paymentSubHeading'>Chọn hình thức thanh toán:</h3>
                <div className='paymentMethodItem'>
                    <div className='methodItemOption'>
                        <input
                            type="radio"
                            name='payment-method'
                            id='chuyen_khoan'
                            value={paymentMethods.transfer}
                            onChange={(e) => handlePaymentMethod(e)}
                            checked={paymentMethod === paymentMethods.transfer}>

                        </input>
                        <label htmlFor="chuyen_khoan">Chuyển khoản hoặc nạp tiền trực tiếp vào tài khoản Ngân hàng</label>
                    </div>
                    {paymentMethod === paymentMethods.transfer ?
                        <div className='methodItemDesc'>
                            <p>Bấm nút <span className='text-org font-weight-700'>Tiến hành thanh</span> toán để xem tài khoản ngân hàng và làm theo hướng dẫn trên màn hình.</p>
                        </div>
                        : null
                    }

                </div>
                <div className='paymentMethodItem'>
                    <div className='methodItemOption'>
                        <input
                            type="radio"
                            name='payment-method'
                            id='internet_banking'
                            value={paymentMethods.internetBanking}
                            checked={paymentMethod === paymentMethods.internetBanking}
                            onChange={(e) => handlePaymentMethod(e)}
                        ></input>
                        <label htmlFor="internet_banking">Thẻ ATM đăng ký Internet Banking</label>
                    </div>
                    {paymentMethod === paymentMethods.internetBanking ?
                        <div className='methodItemDesc'>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>Bạn sẽ được chuyển sang cổng thanh toán <span className='text-org font-weight-700'>Bảo Kim</span> nhằm đảm bảo an toàn cho quá trình thanh toán của bạn.</li>
                                <li>Để thực hiện thanh toán, hãy chắc chắn rằng <span className='text-org font-weight-700'>thẻ ATM</span> của bạn đã có đăng ký sử dụng dịch vụ <span className='text-org font-weight-700'>Internet Banking</span>.</li>
                            </ul>
                        </div> : null}
                </div>
                <div className='paymentMethodItem'>
                    <div className='methodItemOption'>
                        <input
                            type="radio"
                            name='payment-method'
                            id='visa'
                            value={paymentMethods.visa}
                            checked={paymentMethod === paymentMethods.visa}
                            onChange={(e) => handlePaymentMethod(e)}
                        />
                        <label htmlFor="visa">Thẻ Visa, Master phát hành tại Việt Nam</label>
                    </div>
                    {paymentMethod === paymentMethods.visa ?
                        <div className='methodItemDesc'>
                            <p>Bạn sẽ được chuyển sang cổng thanh toán <span className='text-org font-weight-700'>Bảo Kim</span> nhằm đảm bảo an toàn cho quá trình thanh toán của bạn.</p>
                        </div> : null}
                </div>
                <div className='paymentMethodItem'>
                    <div className='methodItemOption'>
                        <input
                            type="radio"
                            name='payment-method'
                            id='paypal'
                            value={paymentMethods.paypal}
                            checked={paymentMethod === paymentMethods.paypal}
                            onChange={(e) => handlePaymentMethod(e)}
                        />
                        <label htmlFor="paypal">Paypal (chấp nhận tất cả thẻ Visa, Master trong và ngoài nước)</label>
                    </div>
                    {paymentMethod === paymentMethods.paypal ?
                        <div className='methodItemDesc'>
                            <p>Qua cổng thanh toán quốc tế PayPal, bạn có thể thanh toán bằng một trong các hình thức sau:</p>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>
                                    Tài khoản của bạn tại cổng thanh toán quốc tế PayPal.</li>
                                <li>
                                    Thẻ tín dụng quốc tế phát hành (có xuất xứ) ngoài Việt Nam.
                                </li>
                            </ul>
                        </div> : null}
                </div>
            </div>
            <Link href={`/payment/transfer`} className='processPaymentBtn'>TIẾN HÀNH THANH TOÁN<span>1,440,000đ</span></Link>
        </form>
    </>;
}

export default PaymentPage;