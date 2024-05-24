
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }:{error:Error, reset: () => void}) {
  useEffect(() => {
    // Логирование ошибки
    console.error(error);
  }, [error]);

  return (
    <div style={{backgroundColor:"#000000D9"}}>
      <h2>Что-то пошло не так!</h2>
      <button style={{width: "278px", height: "52px", borderRadius: "6px", backgroundColor: "#580EA2", color: "#fff"}} onClick={reset}>Попробовать снова</button>
    </div>
  );
}