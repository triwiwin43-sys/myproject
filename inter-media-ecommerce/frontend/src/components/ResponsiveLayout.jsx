import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useResponsive from '../hooks/useResponsive';

const Layout = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <div className="min-h-screen-safe flex flex-col bg-gray-50">
      <Header />
      
      <main 
        className={`
          flex-1 
          ${isMobile ? 'px-4 py-4' : isTablet ? 'px-6 py-6' : 'px-8 py-8'}
          max-w-screen-2xl 
          mx-auto 
          w-full
        `}
      >
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
