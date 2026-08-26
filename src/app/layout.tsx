import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kurasa John Wesly | Full Stack & MERN Developer Portfolio',
  description:
    'Personal Portfolio of Kurasa John Wesly. B.Tech Data Science & Engineering Student at NIAT (9.32 CGPA), Full Stack MERN Developer seeking software development internships.',
  keywords: [
    'Kurasa John Wesly',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'NIAT',
    'Data Science',
    'Portfolio',
  ],
  authors: [{ name: 'Kurasa John Wesly' }],
  openGraph: {
    title: 'Kurasa John Wesly | Full Stack & MERN Developer Portfolio',
    description:
      'Personal Portfolio of Kurasa John Wesly. B.Tech Data Science Student at NIAT (9.32 CGPA), Full Stack MERN Developer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0d0d12] text-gray-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
