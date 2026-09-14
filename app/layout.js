// app/layout.js
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Dota 2 Platform',
  description: 'Explore Dota 2 heroes, matches, players, teams, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
