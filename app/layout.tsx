import type {Metadata} from 'next';
import { Roboto, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
  weight: ['400', '500', '700', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Trần Minh Nguyệt - Portfolio Truyền thông nội bộ (Internal Communications)',
  description: 'Portfolio cá nhân của Trần Minh Nguyệt - Chuyên viên Truyền thông nội bộ chuyên nghiệp. Sáng tạo nội dung, tổ chức sự kiện gắn kết và tối ưu hóa trải nghiệm nhân viên.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={`${roboto.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FFFFFF] text-[#111827] min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
