import React from 'react';

const WhatsAppShare = () => {
  const whatsappMessage =
    'Dear Customer,' +
    '\r\n\r\n' +
    'Thanks for shopping at Gyftr. Your Gift Code details' +
    '\r\n\r\n' +
    'Brand: Amazon' +
    '\r\n' +
    'Voucher Code: ZT32-HRGSF5-T6RN' +
    '\r\n' +
    'Voucher PIN: -' +
    '\r\n' +
    'Value: 250' +
    '\r\n' +
    'Expiry Date: 14 Jun 2023' +
    '\r\n\r\n' +
    'Visit  https://www.gyftr.com/instantvouchers/ for more details.';

  return (
    <div>
      <a className="d-md-none" href={`whatsapp://send?text=${encodeURIComponent(whatsappMessage)}`}>
        Share on WhatsApp
      </a>
      <a className="d-none d-md-block" href={`https://web.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer">
        Share on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppShare;