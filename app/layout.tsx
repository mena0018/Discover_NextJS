import '/styles/globals.css';
import { PropsWithChildren } from 'react';
import Navbar from 'components/Navbar';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' data-theme='dark'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
