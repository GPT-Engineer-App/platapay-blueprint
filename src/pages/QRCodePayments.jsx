import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const QRCodePayments = () => {
  const [paymentInfo, setPaymentInfo] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const generateQRCode = () => {
    setQRCodeValue(paymentInfo);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Payments</h1>
      <div className="mb-4">
        <Input
          placeholder="Enter Payment Info"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
          className="mr-2"
        />
        <Button onClick={generateQRCode}>Generate QR Code</Button>
      </div>
      {qrCodeValue && <QRCode value={qrCodeValue} />}
    </div>
  );
};

export default QRCodePayments;