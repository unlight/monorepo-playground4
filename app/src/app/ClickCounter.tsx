import React, { useState } from 'react';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>
        Counter,{' '}
        <button onClick={handleClick} className="underline">
          click
        </button>{' '}
        Count: {count}
      </p>
    </div>
  );
};

export default ClickCounter;
