import { Rubik } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/navigation/Sidebar';
import Player from '@/components/player/Player';
import SearchBar from '@/components/searchbar/SearchBar';
import ReduxProvider from '@/redux/ReduxProvider';

export const metadata = {
  title: 'GgWpDJ',
  description: 'XZ_Maksimka_XZ',
}

const rubik = Rubik({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={ rubik.className }>
      <link rel="icon" href="./favicon.png" sizes="any" />

      <body>
        <ReduxProvider>
          <div className='wrapper'>
            <Sidebar />
            
            <div className='main-container'>
              <SearchBar />

              <main>
                { children }
              </main>
            </div>

            <Player />
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
