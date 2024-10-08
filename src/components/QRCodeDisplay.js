import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDisplay = () => {
  const localIP = " http://192.168.29.186:3000";
  return (
    <div>
      <QRCodeCanvas value={localIP} />
      <p>Scan the QR code to join the game on your mobile device.</p>
    </div>
  );
};

export default QRCodeDisplay;





 