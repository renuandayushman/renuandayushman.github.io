import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<{ targetDateISO: string }> = ({ targetDateISO }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDateISO) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO]);

  if (!hasMounted) return null;

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-6">
      {items.map((item, idx) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col items-center">
            <div className="w-14 h-16 sm:w-18 sm:h-20 flex items-center justify-center bg-[#FAF7F2]/90 backdrop-blur-md rounded-lg border border-[#C5A059]/40 shadow-sm transition-transform hover:scale-105">
              <span className="font-editorial text-2xl sm:text-3xl font-medium text-[#4A5D4E]">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#4A5D4E]/80 mt-1.5 font-medium">
              {item.label}
            </span>
          </div>

          {idx < items.length - 1 && (
            <span className="text-xl sm:text-2xl text-[#C5A059] font-editorial self-center pb-5">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
