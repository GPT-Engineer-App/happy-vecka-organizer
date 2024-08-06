import { useState, useEffect } from 'react';
import { getWeek, format } from 'date-fns';
import { sv } from 'date-fns/locale';

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weekNumber = getWeek(currentDate, { weekStartsOn: 1 });
  const formattedDate = format(currentDate, 'EEEE d MMMM yyyy', { locale: sv });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">{weekNumber}</h1>
        <p className="text-2xl text-gray-600 mb-2">Vecka</p>
        <p className="text-xl text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Index;
