"use client"

import { useEffect, useState } from 'react';
import styles from '../payment.module.css'



function PaymentTransferMethod() {
    // const [isCopied, setCopy] = useState(false)
    // function copyText(e) {

    //     setCopy(true)
    // }

    // useEffect(() => {
    //     const id = setTimeout(() => {
    //         setCopy(false)
    //         console.log('setimteOUt');
    //     }, 2000)
    //     // console.log(id);
    //     return () => {
    //         clearTimeout(id)
    //     }

    // }, [isCopied])
    return (<>
        <div className={styles.bankingTransferWrapper}>
            <div className={styles.bankingInfo}>
                <div className={styles.bankLogo}>
                    <img src='/logo-wooribank.png' />
                </div>
                <div className={`${styles.bankingInfoItem}`}>
                    <div className={styles.bankingHeading}>
                        <p>Chủ tài khoản</p>
                    </div>
                    <span >:</span>
                    <div className={styles.bankingContentWrapper}>
                        <p className={styles.bankingContentText}>Wooribank<i className="fa-regular fa-copy"></i></p>
                        <p className={styles.bankingContentText}>Chi nhánh Hà nội</p>

                    </div>
                </div>
                <div className={styles.bankingInfoItem}>
                    <div className={styles.bankingHeading}>
                        <p>Chủ tài khoản</p>
                    </div>
                    <span >:</span>
                    <div className={styles.bankingContentWrapper}>
                        <p className={styles.bankingContentText}><span className='text-blue-accent'>HELLOCHAO PAY</span><i className="fa-regular fa-copy"></i></p>
                        {/* {isCopied && <span>Đã sao chép</span>} */}
                    </div>
                </div>
                <div className={styles.bankingInfoItem}>
                    <div className={styles.bankingHeading}>
                        <p>Số tài khoản</p>
                    </div>
                    <span >:</span>
                    <div className={styles.bankingContentWrapper}>
                        <p className={styles.bankingContentText}><span className='text-blue-accent'>902005443194</span><i className="fa-regular fa-copy"></i></p>
                    </div>
                </div>
                <div className={styles.bankingInfoItem}>
                    <div className={styles.bankingHeading}>
                        <p>Số tiền nạp</p>
                    </div>
                    <span >:</span>
                    <div className={styles.bankingContentWrapper}>
                        <p className={styles.bankingContentText}><span className='text-red'>1,440,000đ</span></p>
                        <p className={styles.bankingContentText}><span className='text-gray-400'>(Không bao gồm phí chuyển tiền)</span></p>
                    </div>
                </div>
            </div>

            <div className={styles.bankingDesc}>
                <p className={styles.bankingDescHeading}>Bạn thực hiện nạp tiền vào tài khoản trên theo 1 trong các cách sau:</p>
                <ol>
                    <li>Chuyển khoản trực tuyến (internet banking, mobile banking).</li>
                    <li>Chuyển khoản tại quầy giao dịch ngân hàng, các điểm chuyển tiền của Viettel, VNPOST,...</li>
                    <li>Chuyển khoản tại cây ATM.</li>
                    <li>Chuyển tiền đến tài khoản ngân hàng từ ví Momo, ZaloPay, ViettelPay,...</li>
                </ol>
                <p className='text-org font-weight-700'>Lưu ý</p>
                <ol>
                    <li>Nội dung chuyển khoản ghi rõ: Tên và Số Điện Thoại</li>
                    <li>Chọn hình thức <span className='text-red'>Chuyển tiền nhanh 24/7</span> để giao dịch có thể thành công ngay lập tức.</li>
                    <li>Nếu bạn chuyển <span className='text-red'>không đủ số tiền</span>, giao dịch chuyển khoản sẽ thất bại và bạn sẽ <span className='text-red'>KHÔNG bị mất tiền</span>.</li>
                    <li>Tài khoản Lang Kingdom của bạn sẽ <span className='text-red'>được nâng cấp tự động</span> ngay khi bạn chuyển khoản thành công.</li>
                </ol>
            </div>

        </div>
    </>);
}

export default PaymentTransferMethod;