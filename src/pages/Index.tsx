
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-4xl font-bold mb-4 text-green-400">CyberStore</div>
        <p className="text-xl text-gray-400">Carregando loja de cibersegurança...</p>
      </div>
    </div>
  );
};

export default Index;
