(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{2431:function(){},8560:function(e,n,a){Promise.resolve().then(a.bind(a,748))},748:function(e,n,a){"use strict";a.r(n);var t=a(7437),i=a(2265),s=a(4466),l=a.n(s);a(6543);var r=a(1396),m=a.n(r);let c={transfer:"chuyen_khoan",internetBanking:"internet_banking",visa:"visa",paypal:"paypal"};n.default=function(){let[e,n]=(0,i.useState)(c.transfer),[a,s]=(0,i.useState)(!1);function r(e){let a=e.target.value;n(()=>a)}return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("form",{className:l().paymentFormWrapper,children:[(0,t.jsxs)("div",{className:l().userPaymentInfoWrapper,children:[(0,t.jsx)("h3",{className:l().paymentInfoHeading,children:"Th\xf4ng tin thanh to\xe1n"}),(0,t.jsxs)("div",{className:l().userInfoItem,children:[(0,t.jsx)("label",{htmlFor:"",children:"Họ v\xe0 t\xean"}),(0,t.jsx)("input",{type:"text",name:"user_name",placeholder:"Họ v\xe0 t\xean",autoComplete:"given-name",required:!0})]}),(0,t.jsxs)("div",{className:l().userInfoItem,children:[(0,t.jsx)("label",{htmlFor:"",children:"Số điện thoại"}),(0,t.jsx)("input",{type:"text",name:"user_phone",placeholder:"Số điện thoại",autoComplete:"tel",required:!0})]}),(0,t.jsxs)("div",{className:l().userInfoItem,children:[(0,t.jsx)("label",{htmlFor:"",children:"Địa chỉ email"}),(0,t.jsx)("input",{type:"text",name:"user_email",placeholder:"Email",autoComplete:"email",required:!0})]}),(0,t.jsxs)("div",{className:l().userInfoItem,children:[(0,t.jsx)("label",{htmlFor:"",children:"ID t\xe0i khoản Lang Kingdom"}),(0,t.jsx)("input",{type:"text",name:"user_id",placeholder:"ID Lang Kingdom",autoComplete:"none",required:!0}),(0,t.jsxs)("p",{onClick:function(){s(!a)},className:l().userInfoExplain,children:["Xem video hướng dẫn lấy id ",(0,t.jsx)("i",{className:"fa-solid ".concat(a?"fa-circle-chevron-up":"fa-circle-chevron-down")})]}),a?(0,t.jsx)("div",{className:l().paymentVideoWrapper,children:(0,t.jsx)("video",{controls:!0,poster:"",children:(0,t.jsx)("source",{src:"https://static.langkingdom.com/webinars/videos/LP-hero-220814.mp4",type:"video/mp4"})})}):null]})]}),(0,t.jsx)("div",{className:l().paymentDivider}),(0,t.jsxs)("div",{className:l().billingDetailWrapper,children:[(0,t.jsx)("p",{className:l().paymentInfoHeading,children:"Đơn h\xe0ng của bạn"}),(0,t.jsxs)("div",{className:l().billingUserInfo,children:[(0,t.jsx)("p",{className:l().billingItemMainText,children:"T\xe0i khoản Lang Kingdom:"}),(0,t.jsx)("p",{className:l().billingUserAccount,children:"Minhphamxxx"})]}),(0,t.jsxs)("div",{className:l().billingProductItem,children:[(0,t.jsx)("p",{className:l().billingItemMainText,children:"Sản phẩm"}),(0,t.jsx)("p",{className:l().billingItemMainText,children:"Số tiền"})]}),(0,t.jsxs)("div",{className:l().billingProductItem,children:[(0,t.jsx)("p",{children:"Lang kingdom Pro 1 năm"}),(0,t.jsx)("p",{className:l().billingItemMainText,children:"1,490,000đ"})]}),(0,t.jsxs)("div",{className:l().billingProductItem,children:[(0,t.jsxs)("p",{children:["M\xe3 giảm gi\xe1: ",(0,t.jsx)("span",{className:l().billingUserAccount,children:"XXXX"})," ",(0,t.jsxs)("span",{style:{color:"red",fontWeight:"700"},children:[(0,t.jsx)("i",{className:"fa-solid fa-circle-xmark"})," X\xf3a"]})]}),(0,t.jsx)("p",{className:l().billingItemMainText,children:" -50,000đ"})]}),(0,t.jsx)("div",{className:l().paymentDivider}),(0,t.jsxs)("div",{className:l().billingProductItem,children:[(0,t.jsx)("p",{className:l().billingItemMainText,children:"Tổng"}),(0,t.jsx)("p",{className:l().billingTotalPrice,children:"1,440,000đ"})]}),(0,t.jsxs)("div",{className:l().paymentDiscount,children:[(0,t.jsxs)("div",{className:l().discountInputWrapper,children:[(0,t.jsx)("input",{type:"text",name:"discount",id:"discount",placeholder:"M\xe3 giảm gi\xe1"}),(0,t.jsx)("button",{children:"\xc1p dụng"})]}),(0,t.jsx)("span",{className:l().discountErrorText,children:"M\xe3 n\xe0y kh\xf4ng hợp lệ. Bạn vui l\xf2ng kiểm tra lại nh\xe9."})]})]}),(0,t.jsx)("div",{className:l().paymentDivider}),(0,t.jsxs)("div",{className:l().paymentMethodsWrapper,children:[(0,t.jsx)("h3",{className:l().paymentSubHeading,children:"Chọn h\xecnh thức thanh to\xe1n:"}),(0,t.jsxs)("div",{className:l().paymentMethodItem,children:[(0,t.jsxs)("div",{className:l().methodItemOption,children:[(0,t.jsx)("input",{type:"radio",name:"payment-method",id:"chuyen_khoan",value:c.transfer,onChange:e=>r(e),checked:e===c.transfer}),(0,t.jsx)("label",{htmlFor:"chuyen_khoan",children:"Chuyển khoản hoặc nạp tiền trực tiếp v\xe0o t\xe0i khoản Ng\xe2n h\xe0ng"})]}),e===c.transfer?(0,t.jsx)("div",{className:l().methodItemDesc,children:(0,t.jsxs)("p",{children:["Bấm n\xfat ",(0,t.jsx)("span",{className:"text-org font-weight-700",children:"Tiến h\xe0nh thanh"})," to\xe1n để xem t\xe0i khoản ng\xe2n h\xe0ng v\xe0 l\xe0m theo hướng dẫn tr\xean m\xe0n h\xecnh."]})}):null]}),(0,t.jsxs)("div",{className:l().paymentMethodItem,children:[(0,t.jsxs)("div",{className:l().methodItemOption,children:[(0,t.jsx)("input",{type:"radio",name:"payment-method",id:"internet_banking",value:c.internetBanking,checked:e===c.internetBanking,onChange:e=>r(e)}),(0,t.jsx)("label",{htmlFor:"internet_banking",children:"Thẻ ATM đăng k\xfd Internet Banking"})]}),e===c.internetBanking?(0,t.jsx)("div",{className:l().methodItemDesc,children:(0,t.jsxs)("ul",{style:{paddingLeft:"20px"},children:[(0,t.jsxs)("li",{children:["Bạn sẽ được chuyển sang cổng thanh to\xe1n ",(0,t.jsx)("span",{className:"text-org font-weight-700",children:"Bảo Kim"})," nhằm đảm bảo an to\xe0n cho qu\xe1 tr\xecnh thanh to\xe1n của bạn."]}),(0,t.jsxs)("li",{children:["Để thực hiện thanh to\xe1n, h\xe3y chắc chắn rằng ",(0,t.jsx)("span",{className:"text-org font-weight-700",children:"thẻ ATM"})," của bạn đ\xe3 c\xf3 đăng k\xfd sử dụng dịch vụ ",(0,t.jsx)("span",{className:"text-org font-weight-700",children:"Internet Banking"}),"."]})]})}):null]}),(0,t.jsxs)("div",{className:l().paymentMethodItem,children:[(0,t.jsxs)("div",{className:l().methodItemOption,children:[(0,t.jsx)("input",{type:"radio",name:"payment-method",id:"visa",value:c.visa,checked:e===c.visa,onChange:e=>r(e)}),(0,t.jsx)("label",{htmlFor:"visa",children:"Thẻ Visa, Master ph\xe1t h\xe0nh tại Việt Nam"})]}),e===c.visa?(0,t.jsx)("div",{className:l().methodItemDesc,children:(0,t.jsxs)("p",{children:["Bạn sẽ được chuyển sang cổng thanh to\xe1n ",(0,t.jsx)("span",{className:"text-org font-weight-700",children:"Bảo Kim"})," nhằm đảm bảo an to\xe0n cho qu\xe1 tr\xecnh thanh to\xe1n của bạn."]})}):null]}),(0,t.jsxs)("div",{className:l().paymentMethodItem,children:[(0,t.jsxs)("div",{className:l().methodItemOption,children:[(0,t.jsx)("input",{type:"radio",name:"payment-method",id:"paypal",value:c.paypal,checked:e===c.paypal,onChange:e=>r(e)}),(0,t.jsx)("label",{htmlFor:"paypal",children:"Paypal (chấp nhận tất cả thẻ Visa, Master trong v\xe0 ngo\xe0i nước)"})]}),e===c.paypal?(0,t.jsxs)("div",{className:l().methodItemDesc,children:[(0,t.jsx)("p",{children:"Qua cổng thanh to\xe1n quốc tế PayPal, bạn c\xf3 thể thanh to\xe1n bằng một trong c\xe1c h\xecnh thức sau:"}),(0,t.jsxs)("ul",{style:{paddingLeft:"20px"},children:[(0,t.jsx)("li",{children:"T\xe0i khoản của bạn tại cổng thanh to\xe1n quốc tế PayPal."}),(0,t.jsx)("li",{children:"Thẻ t\xedn dụng quốc tế ph\xe1t h\xe0nh (c\xf3 xuất xứ) ngo\xe0i Việt Nam."})]})]}):null]})]}),(0,t.jsxs)(m(),{href:"/payment/payment-transfer",className:l().processPaymentBtn,children:["TIẾN H\xc0NH THANH TO\xc1N",(0,t.jsx)("span",{children:"1,440,000đ"})]})]})})}},4466:function(e){e.exports={paymentHero:"payment_paymentHero__ime7e",paymentHeroHotline:"payment_paymentHeroHotline__BBoZW",paymentVideoWrapper:"payment_paymentVideoWrapper__mekq6",paymentHeader:"payment_paymentHeader__CW9pJ",paymentSubtitle:"payment_paymentSubtitle__8qJrV",paymentSubHeading:"payment_paymentSubHeading__SSju3",paymentWrapper:"payment_paymentWrapper__wIHy5",paymentFormWrapper:"payment_paymentFormWrapper__RaoHC",userPaymentInfoWrapper:"payment_userPaymentInfoWrapper____ASa",paymentInfoHeading:"payment_paymentInfoHeading__xzqhV",userInfoItem:"payment_userInfoItem__ZT8kx",userInfoExplain:"payment_userInfoExplain__wOsTh",paymentDivider:"payment_paymentDivider__n6Bjy",billingDetailWrapper:"payment_billingDetailWrapper__5_bVf",billingUserInfo:"payment_billingUserInfo__EZbmu",billingProductItem:"payment_billingProductItem__kNXi4",billingUserAccount:"payment_billingUserAccount__lAdVy",billingItemMainText:"payment_billingItemMainText___YHG5",billingTotalPrice:"payment_billingTotalPrice___MNKn",paymentDiscount:"payment_paymentDiscount__xOQDN",discountInputWrapper:"payment_discountInputWrapper__XCPkg",discountErrorText:"payment_discountErrorText__rwu0T",paymentMethodsWrapper:"payment_paymentMethodsWrapper__X_C5w",paymentMethodItem:"payment_paymentMethodItem__22_R5",methodItemOption:"payment_methodItemOption__rDaHz",methodItemDesc:"payment_methodItemDesc__H0JsK",processPaymentBtn:"payment_processPaymentBtn__E18_W",paymentSupportWrapper:"payment_paymentSupportWrapper__3Lko7",supportListWrapper:"payment_supportListWrapper__0srfi",paymentSupportImage:"payment_paymentSupportImage__2Etz8",bankingTransferWrapper:"payment_bankingTransferWrapper__neMVJ",bankingInfo:"payment_bankingInfo__EcDSw",bankingInfoItem:"payment_bankingInfoItem__49HeJ",bankLogo:"payment_bankLogo__cMhA_",bankingContentText:"payment_bankingContentText__2oaAj",bankingDescHeading:"payment_bankingDescHeading__TCBTQ",bankingDesc:"payment_bankingDesc__uX4CF"}}},function(e){e.O(0,[15,295,971,596,744],function(){return e(e.s=8560)}),_N_E=e.O()}]);