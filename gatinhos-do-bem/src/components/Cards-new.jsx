// Componente para o card de gatinho individual
export const KittenCard = ({ kitten }) => {
  // SVGs de gatinhos fofos por cor
  const getKittenSVG = (color) => {
    const svgStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '1rem'
    };

    const colors = {
      rosa: { bg: '#fdf2f8', cat: '#f9a8d4', accent: '#be185d' },
      lilac: { bg: '#faf5ff', cat: '#d8b4fe', accent: '#7c3aed' },
      azul: { bg: '#f0f9ff', cat: '#93c5fd', accent: '#1e40af' }
    };

    const { bg, cat, accent } = colors[color] || colors.rosa;

    return (
      <svg style={svgStyle} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`bg-${kitten.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={bg} />
            <stop offset="100%" stopColor={cat} />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="300" height="300" fill={`url(#bg-${kitten.id})`} rx="15" />
        
        {/* Sparkles */}
        <circle cx="50" cy="50" r="3" fill={accent} opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="80" r="2" fill={accent} opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="250" r="2.5" fill={accent} opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        
        {/* Cat Body */}
        <ellipse cx="150" cy="200" rx="70" ry="50" fill={cat} />
        
        {/* Cat Head */}
        <circle cx="150" cy="130" r="50" fill={cat} />
        
        {/* Cat Ears */}
        <ellipse cx="125" cy="95" rx="12" ry="20" fill={cat} transform="rotate(-25 125 95)" />
        <ellipse cx="175" cy="95" rx="12" ry="20" fill={cat} transform="rotate(25 175 95)" />
        
        {/* Inner Ears */}
        <ellipse cx="125" cy="100" rx="6" ry="12" fill="#ffffff" opacity="0.8" transform="rotate(-25 125 100)" />
        <ellipse cx="175" cy="100" rx="6" ry="12" fill="#ffffff" opacity="0.8" transform="rotate(25 175 100)" />
        
        {/* Eyes */}
        <ellipse cx="135" cy="125" rx="8" ry="12" fill="#ffffff" />
        <ellipse cx="165" cy="125" rx="8" ry="12" fill="#ffffff" />
        <ellipse cx="135" cy="128" rx="4" ry="8" fill="#333" />
        <ellipse cx="165" cy="128" rx="4" ry="8" fill="#333" />
        
        {/* Eye shine */}
        <circle cx="137" cy="125" r="2" fill="#ffffff" opacity="0.8" />
        <circle cx="167" cy="125" r="2" fill="#ffffff" opacity="0.8" />
        
        {/* Nose */}
        <ellipse cx="150" cy="140" rx="3" ry="2" fill={accent} />
        
        {/* Mouth */}
        <path d="M 150 143 Q 145 148 140 145" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 150 143 Q 155 148 160 145" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Whiskers */}
        <line x1="110" y1="135" x2="130" y2="138" stroke={accent} strokeWidth="1.5" opacity="0.7" />
        <line x1="110" y1="145" x2="130" y2="145" stroke={accent} strokeWidth="1.5" opacity="0.7" />
        <line x1="170" y1="138" x2="190" y2="135" stroke={accent} strokeWidth="1.5" opacity="0.7" />
        <line x1="170" y1="145" x2="190" y2="145" stroke={accent} strokeWidth="1.5" opacity="0.7" />
        
        {/* Tail */}
        <path d="M 220 200 Q 250 180 240 150 Q 235 130 245 120" stroke={cat} strokeWidth="20" fill="none" strokeLinecap="round" />
        
        {/* Paws */}
        <ellipse cx="120" cy="240" rx="12" ry="8" fill={cat} />
        <ellipse cx="180" cy="240" rx="12" ry="8" fill={cat} />
        
        {/* Heart float */}
        <text x="230" y="50" fontSize="20" fill={accent} opacity="0.6">💕</text>
      </svg>
    );
  };

  return (
    <div className="card-delicado max-w-sm mx-auto overflow-hidden">
      <div className="aspect-square relative">
        {getKittenSVG(kitten.color)}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 shadow-lg backdrop-blur-sm">
          <span className="text-xl">💖</span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3" style={{color: '#374151'}}>{kitten.name}</h3>
        <p className="font-semibold mb-3 text-lg" style={{color: '#be185d'}}>{kitten.age}</p>
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{kitten.description}</p>
        <button 
          className="btn-delicado w-full py-4 text-lg transform hover:scale-105 transition-all duration-300"
          onClick={() => alert(`Que lindo! Você tem interesse em adotar ${kitten.name}! 💕 Em breve entraremos em contato.`)}
        >
          Quero Adotar {kitten.name} 💕
        </button>
      </div>
    </div>
  )
}

// Componente para o card de depoimento
export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card-delicado p-10">
      <div className="mb-8">
        <div className="text-5xl mb-6 opacity-20" style={{color: '#a855f7'}}>"</div>
        <p className="text-gray-700 italic leading-relaxed text-lg">
          {testimonial.text}
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mr-6 shadow-lg text-xl"
             style={{background: 'linear-gradient(135deg, #f9a8d4, #d8b4fe)'}}>
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-lg" style={{color: '#374151'}}>{testimonial.name}</p>
          <p className="text-base" style={{color: '#6b7280'}}>Adotou {testimonial.kitten} 🐾</p>
        </div>
      </div>
    </div>
  )
}
