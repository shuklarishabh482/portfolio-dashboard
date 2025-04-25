import { useEffect, useState } from 'react';
import PortfolioTable from '@/components/PortfolioTable';
import UsePortfolioTableData from '@/hooks/UsePortfolioTableData';
import Disclaimer from '@/components/Disclaimer';

/**
 * Home page component that renders the dynamic portfolio dashboard.
 */
export default function Home() {
  const { data, loading, error } = UsePortfolioTableData();

  // State for API call success/failure message
  const [apiError, setApiError] = useState(null);

  // Effect to refresh data periodically (every 15 seconds or any set interval)
  useEffect(() => {
    const interval = setInterval(() => {
      // Reload data when the interval fires
      window.location.reload();
    }, 15 * 60 * 1000); // Refresh every 15 minutes (900,000ms)

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  useEffect(() => {
    if (error) {
      setApiError(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Dynamic Portfolio</h1>

      {/* Display loading, error, and data */}
      {loading && <p className="text-center">Loading portfolio data...</p>}
      {apiError && <p className="text-center text-red-500">Error: {apiError}</p>}
      {!loading && !apiError && data.length > 0 && <PortfolioTable data={data} />}
      
      {/* Disclaimer component */}
      <Disclaimer />
    </div>
  );
}


// index.js 
// index.js 
















