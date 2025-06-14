// Teste de carregamento de imagens
import React from 'react';

const ImageTest = () => {
  const testImages = [
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=center&auto=format&q=80'
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Teste de Imagens</h2>
      <div className="grid grid-cols-3 gap-4">
        {testImages.map((url, index) => (
          <div key={index} className="border-2 border-gray-300">
            <img 
              src={url} 
              alt={`Teste ${index + 1}`}
              className="w-full h-48 object-cover"
              onLoad={() => console.log(`Imagem ${index + 1} carregou com sucesso`)}
              onError={(e) => {
                console.log(`Erro ao carregar imagem ${index + 1}:`, e);
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.display = 'flex';
                e.target.style.alignItems = 'center';
                e.target.style.justifyContent = 'center';
                e.target.innerHTML = '🐱';
                e.target.style.fontSize = '48px';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
