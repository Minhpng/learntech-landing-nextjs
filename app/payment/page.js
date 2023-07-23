'use client'
import { useState } from 'react';

import styles from './payment.module.css'
import { useRouter } from 'next/router';
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

    function handlePaymentMethod(e) {
        const method = e.target.value
        setMethod(() => method)
    }

    function openVideo() {
        setOpenVideo(!isVideoOpened)
    }
    return <>
        <form className={styles.paymentFormWrapper}>
            <div className={styles.userPaymentInfoWrapper}>
                <h3 className={styles.paymentInfoHeading}>Thông tin thanh toán</h3>
                <div className={styles.userInfoItem}>
                    <label htmlFor="">Họ và tên</label>
                    <input type="text" name="user_name" placeholder="Họ và tên" autoComplete='given-name' required />
                </div>
                <div className={styles.userInfoItem}>
                    <label htmlFor="">Số điện thoại</label>
                    <input type="text" name="user_phone" placeholder="Số điện thoại" autoComplete='tel' required />
                </div>
                <div className={styles.userInfoItem}>
                    <label htmlFor="">Địa chỉ email</label>
                    <input type="text" name="user_email" placeholder="Email" autoComplete='email' required />
                </div>
                <div className={styles.userInfoItem}>
                    <label htmlFor="">ID tài khoản Lang Kingdom</label>
                    <input type="text" name="user_id" placeholder="ID Lang Kingdom" autoComplete='none' required />
                    <p onClick={openVideo} className={styles.userInfoExplain}>Xem video hướng dẫn lấy id {<i className={`fa-solid ${!isVideoOpened ? "fa-circle-chevron-down" : "fa-circle-chevron-up"}`} />}</p>
                    {
                        isVideoOpened ? <div className={styles.paymentVideoWrapper}>
                            <video controls poster=''>
                                <source
                                    src="https://static.langkingdom.com/webinars/videos/LP-hero-220814.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div> : null}

                </div>
            </div>

            <div className={styles.paymentDivider}></div>


            <div className={styles.billingDetailWrapper}>
                <p className={styles.paymentInfoHeading}>Đơn hàng của bạn</p>
                <div className={styles.billingUserInfo}>
                    <p className={styles.billingItemMainText}>Tài khoản Lang Kingdom:</p>
                    <p className={styles.billingUserAccount}>Minhphamxxx</p>
                </div>
                <div className={styles.billingProductItem}>
                    <p className={styles.billingItemMainText}>
                        Sản phẩm
                    </p>
                    <p className={styles.billingItemMainText}>Số tiền</p>
                </div>
                <div className={styles.billingProductItem}>
                    <p>Lang kingdom Pro 1 năm</p>
                    <p className={styles.billingItemMainText}>1,490,000đ</p>
                </div>
                <div className={styles.billingProductItem}>
                    <p>Mã giảm giá: <span className={styles.billingUserAccount}>XXXX</span> <span style={{ color: "red", fontWeight: "700" }}><i className="fa-solid fa-circle-xmark"></i> Xóa</span></p>
                    <p className={styles.billingItemMainText}> -50,000đ</p>

                </div>
                <div className={styles.paymentDivider}></div>

                <div className={styles.billingProductItem}>
                    <p className={styles.billingItemMainText}>
                        Tổng
                    </p>
                    <p className={styles.billingTotalPrice}>1,440,000đ</p>
                </div>

                <div className={styles.paymentDiscount}>
                    <div className={styles.discountInputWrapper}>
                        <input type="text" name='discount' id='discount' placeholder='Mã giảm giá' ></input>
                        <button>Áp dụng</button>
                    </div>
                    <span className={styles.discountErrorText}>Mã này không hợp lệ. Bạn vui lòng kiểm tra lại nhé.</span>
                </div>

            </div>

            <div className={styles.paymentDivider}></div>

            <div className={styles.paymentMethodsWrapper}>
                <h3 className={styles.paymentSubHeading}>Chọn hình thức thanh toán:</h3>
                <div className={styles.paymentMethodItem}>
                    <div className={styles.methodItemOption}>
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
                        <div className={styles.methodItemDesc}>
                            <p>Bấm nút <span className='text-org font-weight-700'>Tiến hành thanh</span> toán để xem tài khoản ngân hàng và làm theo hướng dẫn trên màn hình.</p>
                        </div>
                        : null
                    }

                </div>
                <div className={styles.paymentMethodItem}>
                    <div className={styles.methodItemOption}>
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
                        <div className={styles.methodItemDesc}>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>Bạn sẽ được chuyển sang cổng thanh toán <span className='text-org font-weight-700'>Bảo Kim</span> nhằm đảm bảo an toàn cho quá trình thanh toán của bạn.</li>
                                <li>Để thực hiện thanh toán, hãy chắc chắn rằng <span className='text-org font-weight-700'>thẻ ATM</span> của bạn đã có đăng ký sử dụng dịch vụ <span className='text-org font-weight-700'>Internet Banking</span>.</li>
                            </ul>
                        </div> : null}
                </div>
                <div className={styles.paymentMethodItem}>
                    <div className={styles.methodItemOption}>
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
                        <div className={styles.methodItemDesc}>
                            <p>Bạn sẽ được chuyển sang cổng thanh toán <span className='text-org font-weight-700'>Bảo Kim</span> nhằm đảm bảo an toàn cho quá trình thanh toán của bạn.</p>
                        </div> : null}
                </div>
                <div className={styles.paymentMethodItem}>
                    <div className={styles.methodItemOption}>
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
                        <div className={styles.methodItemDesc}>
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
            <Link href={`/payment/payment-transfer`} className={styles.processPaymentBtn}>TIẾN HÀNH THANH TOÁN<span>1,440,000đ</span></Link>
        </form>
    </>;
}

export default PaymentPage;