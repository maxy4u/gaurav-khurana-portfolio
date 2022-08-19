import { useEffect, useState } from 'react';

export default function ClientOnly({ children, ...props }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className='clientOnly' {...props}>
      {children}
    </div>
  );
}
