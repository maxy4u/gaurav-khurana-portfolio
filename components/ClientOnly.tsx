import { useEffect, useState, ReactNode } from 'react';

export type TClientOnly = {
  children?: ReactNode;
  props: any;
};

export default function ClientOnly({ children, ...props }: TClientOnly) {
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
