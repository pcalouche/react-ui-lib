import React, {useState} from 'react';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button className="ClickCounter"
            onClick={() => setCount(count => count + 1)}>
      Click Count: {count}
    </button>
  );
};

export default ClickCounter;