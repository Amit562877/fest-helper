import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Event Manager App',
  description: 'Explore vendors and manage event portfolios.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
