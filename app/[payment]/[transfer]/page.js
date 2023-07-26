
'use client'
import { usePathname } from 'next/navigation';
import '../payment.css'

function PaymentTransferMethod() {

    const param = usePathname();

    const price = Number(param.split('/').at(-1)).toLocaleString()


    return (<>
        <div className='bankingTransferWrapper'>
            <div className='bankingInfo'>
                <div className='bankLogo'>
                    <img src='/mb-bank-logo.jpg' />
                </div>
                <div className='bankingInfoItem'>
                    <div className='bankingHeading'>
                        <p>Chủ tài khoản</p>
                    </div>
                    <span >:</span>
                    <div className='bankingContentWrapper'>
                        <p className='bankingContentText'>MB Mbank<i className="fa-regular fa-copy"></i></p>
                        <p className='bankingContentText'>Chi nhánh Tây sài gòn</p>

                    </div>
                </div>
                <div className='bankingInfoItem'>
                    <div className='bankingHeading'>
                        <p>Chủ tài khoản</p>
                    </div>
                    <span >:</span>
                    <div className='bankingContentWrapper'>
                        <p className='bankingContentText'><span className='text-blue-accent'>LEARNTECH CO. LTD</span><i className="fa-regular fa-copy"></i></p>
                        {/* {isCopied && <span>Đã sao chép</span>} */}
                    </div>
                </div>
                <div className='bankingInfoItem'>
                    <div className='bankingHeading'>
                        <p>Số tài khoản</p>
                    </div>
                    <span >:</span>
                    <div className='bankingContentWrapper'>
                        <p className='bankingContentText'><span className='text-blue-accent'>2755746868</span><i className="fa-regular fa-copy"></i></p>
                    </div>
                </div>
                <div className='bankingInfoItem'>
                    <div className='bankingHeading'>
                        <p>Số tiền nạp</p>
                    </div>
                    <span >:</span>
                    <div className='bankingContentWrapper'>
                        <p className='bankingContentText'><span className='text-red'>
                            {price}đ
                        </span></p>
                        <p className='bankingContentText'><span className='text-gray-400'>(Không bao gồm phí chuyển tiền)</span></p>
                    </div>
                </div>
                <div className='bankingInfoItem'>
                    <div className='bankingHeading'>
                        <p>Nội dung chuyển khoản</p>
                    </div>
                    <span >:</span>
                    <div className='bankingContentWrapper'>
                        <p className='bankingContentText'><span className='text-red'>Tên và số điện thoại</span></p>
                    </div>
                </div>
            </div>

            <div className='bankingDesc'>
                <p className='bankingDescHeading'>Bạn thực hiện nạp tiền vào tài khoản trên theo 1 trong các cách sau:</p>
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