// SVGs cartunizados delicados dos gatinhos - Estilo Freepik
const KittenSVG = ({ color, id }) => {
  const svgs = {
    rosa: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={`kittenGrad${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef7ff" />
            <stop offset="30%" stopColor="#fce7f3" />
            <stop offset="70%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <filter id={`shadow${id}`}>
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#ec4899" floodOpacity="0.3"/>
          </filter>
        </defs>
        {/* Corpo do gatinho */}
        <ellipse cx="100" cy="140" rx="50" ry="40" fill={`url(#kittenGrad${id})`} filter={`url(#shadow${id})`} />
        {/* Cabeça */}
        <circle cx="100" cy="75" r="40" fill={`url(#kittenGrad${id})`} filter={`url(#shadow${id})`} />
        {/* Orelhas */}
        <ellipse cx="82" cy="45" rx="12" ry="20" fill="#f472b6" transform="rotate(-25 82 45)" />
        <ellipse cx="118" cy="45" rx="12" ry="20" fill="#f472b6" transform="rotate(25 118 45)" />
        {/* Orelhas internas */}
        <ellipse cx="82" cy="48" rx="6" ry="12" fill="#ec4899" transform="rotate(-25 82 48)" />
        <ellipse cx="118" cy="48" rx="6" ry="12" fill="#ec4899" transform="rotate(25 118 48)" />
        {/* Olhos grandes e fofos */}
        <ellipse cx="88" cy="70" rx="8" ry="12" fill="#1f2937" />
        <ellipse cx="112" cy="70" rx="8" ry="12" fill="#1f2937" />
        {/* Brilho nos olhos */}
        <circle cx="90" cy="67" r="3" fill="white" />
        <circle cx="114" cy="67" r="3" fill="white" />
        <circle cx="86" cy="72" r="1.5" fill="white" />
        <circle cx="110" cy="72" r="1.5" fill="white" />
        {/* Nariz em formato de coração */}
        <path d="M100 82 Q95 78 90 82 Q95 87 100 90 Q105 87 110 82 Q105 78 100 82" fill="#ec4899" />
        {/* Boca sorridente */}
        <path d="M100 90 Q92 96 85 93" stroke="#ec4899" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100 90 Q108 96 115 93" stroke="#ec4899" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Patinhas */}
        <ellipse cx="78" cy="165" rx="10" ry="15" fill="#f472b6" />
        <ellipse cx="122" cy="165" rx="10" ry="15" fill="#f472b6" />
        <ellipse cx="85" cy="170" rx="6" ry="8" fill="#ec4899" />
        <ellipse cx="115" cy="170" rx="6" ry="8" fill="#ec4899" />
        {/* Rabo fofo */}
        <ellipse cx="55" cy="130" rx="8" ry="25" fill="#f472b6" transform="rotate(-40 55 130)" />
        {/* Detalhes decorativos - florezinhas */}
        <circle cx="65" cy="95" r="4" fill="#fce7f3" opacity="0.8" />
        <circle cx="135" cy="100" r="3" fill="#fce7f3" opacity="0.8" />
        <circle cx="125" cy="155" r="2" fill="#fce7f3" opacity="0.6" />
        {/* Bigodes */}
        <line x1="60" y1="80" x2="75" y2="78" stroke="#ec4899" strokeWidth="1" />
        <line x1="60" y1="85" x2="75" y2="85" stroke="#ec4899" strokeWidth="1" />
        <line x1="125" y1="78" x2="140" y2="80" stroke="#ec4899" strokeWidth="1" />
        <line x1="125" y1="85" x2="140" y2="85" stroke="#ec4899" strokeWidth="1" />
      </svg>
    ),
    lilac: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={`kittenGradLilac${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fefbff" />
            <stop offset="30%" stopColor="#f3e8ff" />
            <stop offset="70%" stopColor="#d8b4fe" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <filter id={`shadowLilac${id}`}>
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#a855f7" floodOpacity="0.3"/>
          </filter>
        </defs>
        {/* Corpo do gatinho */}
        <ellipse cx="100" cy="140" rx="50" ry="40" fill={`url(#kittenGradLilac${id})`} filter={`url(#shadowLilac${id})`} />
        {/* Cabeça */}
        <circle cx="100" cy="75" r="40" fill={`url(#kittenGradLilac${id})`} filter={`url(#shadowLilac${id})`} />
        {/* Orelhas */}
        <ellipse cx="82" cy="45" rx="12" ry="20" fill="#c084fc" transform="rotate(-25 82 45)" />
        <ellipse cx="118" cy="45" rx="12" ry="20" fill="#c084fc" transform="rotate(25 118 45)" />
        {/* Orelhas internas */}
        <ellipse cx="82" cy="48" rx="6" ry="12" fill="#a855f7" transform="rotate(-25 82 48)" />
        <ellipse cx="118" cy="48" rx="6" ry="12" fill="#a855f7" transform="rotate(25 118 48)" />
        {/* Olhos grandes e fofos */}
        <ellipse cx="88" cy="70" rx="8" ry="12" fill="#1f2937" />
        <ellipse cx="112" cy="70" rx="8" ry="12" fill="#1f2937" />
        {/* Brilho nos olhos */}
        <circle cx="90" cy="67" r="3" fill="white" />
        <circle cx="114" cy="67" r="3" fill="white" />
        <circle cx="86" cy="72" r="1.5" fill="white" />
        <circle cx="110" cy="72" r="1.5" fill="white" />
        {/* Nariz em formato de coração */}
        <path d="M100 82 Q95 78 90 82 Q95 87 100 90 Q105 87 110 82 Q105 78 100 82" fill="#a855f7" />
        {/* Boca sorridente */}
        <path d="M100 90 Q92 96 85 93" stroke="#a855f7" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100 90 Q108 96 115 93" stroke="#a855f7" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Patinhas */}
        <ellipse cx="78" cy="165" rx="10" ry="15" fill="#c084fc" />
        <ellipse cx="122" cy="165" rx="10" ry="15" fill="#c084fc" />
        <ellipse cx="85" cy="170" rx="6" ry="8" fill="#a855f7" />
        <ellipse cx="115" cy="170" rx="6" ry="8" fill="#a855f7" />
        {/* Rabo fofo */}
        <ellipse cx="55" cy="130" rx="8" ry="25" fill="#c084fc" transform="rotate(-40 55 130)" />
        {/* Detalhes decorativos - estrelinhas */}
        <path d="M65 95 L67 100 L72 100 L68 103 L70 108 L65 105 L60 108 L62 103 L58 100 L63 100 Z" fill="#f3e8ff" opacity="0.8" />
        <circle cx="135" cy="100" r="3" fill="#f3e8ff" opacity="0.8" />
        <circle cx="125" cy="155" r="2" fill="#f3e8ff" opacity="0.6" />
        {/* Bigodes */}
        <line x1="60" y1="80" x2="75" y2="78" stroke="#a855f7" strokeWidth="1" />
        <line x1="60" y1="85" x2="75" y2="85" stroke="#a855f7" strokeWidth="1" />
        <line x1="125" y1="78" x2="140" y2="80" stroke="#a855f7" strokeWidth="1" />
        <line x1="125" y1="85" x2="140" y2="85" stroke="#a855f7" strokeWidth="1" />
      </svg>
    ),
    azul: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={`kittenGradBlue${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="30%" stopColor="#e0f2fe" />
            <stop offset="70%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
          <filter id={`shadowBlue${id}`}>
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#0ea5e9" floodOpacity="0.3"/>
          </filter>
        </defs>
        {/* Corpo do gatinho */}
        <ellipse cx="100" cy="140" rx="50" ry="40" fill={`url(#kittenGradBlue${id})`} filter={`url(#shadowBlue${id})`} />
        {/* Cabeça */}
        <circle cx="100" cy="75" r="40" fill={`url(#kittenGradBlue${id})`} filter={`url(#shadowBlue${id})`} />
        {/* Orelhas */}
        <ellipse cx="82" cy="45" rx="12" ry="20" fill="#7dd3fc" transform="rotate(-25 82 45)" />
        <ellipse cx="118" cy="45" rx="12" ry="20" fill="#7dd3fc" transform="rotate(25 118 45)" />
        {/* Orelhas internas */}
        <ellipse cx="82" cy="48" rx="6" ry="12" fill="#0ea5e9" transform="rotate(-25 82 48)" />
        <ellipse cx="118" cy="48" rx="6" ry="12" fill="#0ea5e9" transform="rotate(25 118 48)" />
        {/* Olhos grandes e fofos */}
        <ellipse cx="88" cy="70" rx="8" ry="12" fill="#1f2937" />
        <ellipse cx="112" cy="70" rx="8" ry="12" fill="#1f2937" />
        {/* Brilho nos olhos */}
        <circle cx="90" cy="67" r="3" fill="white" />
        <circle cx="114" cy="67" r="3" fill="white" />
        <circle cx="86" cy="72" r="1.5" fill="white" />
        <circle cx="110" cy="72" r="1.5" fill="white" />
        {/* Nariz em formato de coração */}
        <path d="M100 82 Q95 78 90 82 Q95 87 100 90 Q105 87 110 82 Q105 78 100 82" fill="#0ea5e9" />
        {/* Boca sorridente */}
        <path d="M100 90 Q92 96 85 93" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100 90 Q108 96 115 93" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Patinhas */}
        <ellipse cx="78" cy="165" rx="10" ry="15" fill="#7dd3fc" />
        <ellipse cx="122" cy="165" rx="10" ry="15" fill="#7dd3fc" />
        <ellipse cx="85" cy="170" rx="6" ry="8" fill="#0ea5e9" />
        <ellipse cx="115" cy="170" rx="6" ry="8" fill="#0ea5e9" />
        {/* Rabo fofo */}
        <ellipse cx="55" cy="130" rx="8" ry="25" fill="#7dd3fc" transform="rotate(-40 55 130)" />
        {/* Detalhes decorativos - gotinhas */}
        <ellipse cx="65" cy="95" rx="3" ry="5" fill="#e0f2fe" opacity="0.8" />
        <circle cx="135" cy="100" r="3" fill="#e0f2fe" opacity="0.8" />
        <circle cx="125" cy="155" r="2" fill="#e0f2fe" opacity="0.6" />
        {/* Bigodes */}
        <line x1="60" y1="80" x2="75" y2="78" stroke="#0ea5e9" strokeWidth="1" />
        <line x1="60" y1="85" x2="75" y2="85" stroke="#0ea5e9" strokeWidth="1" />
        <line x1="125" y1="78" x2="140" y2="80" stroke="#0ea5e9" strokeWidth="1" />
        <line x1="125" y1="85" x2="140" y2="85" stroke="#0ea5e9" strokeWidth="1" />
      </svg>
    )
  }
  return svgs[color] || svgs.rosa
}

// Componente para o card de gatinho individual
export const KittenCard = ({ kitten }) => {
  // URLs de imagens de gatinhos fofos do Unsplash (gratuitas e de alta qualidade)
  const kittenImages = {
    1: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face",
    2: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop&crop=face",
    3: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=face",
    4: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop&crop=face",
    5: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop&crop=face",
    6: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=face"
  }

  return (
    <div className="card-delicado kitten-card max-w-sm mx-auto hover:scale-105 transition-all duration-500">
      <div className="aspect-square overflow-hidden relative rounded-t-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <img 
          src={kittenImages[kitten.id] || kittenImages[1]}
          alt={`Gatinho ${kitten.name} disponível para adoção`}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            // Fallback para uma imagem padrão bonita
            e.target.src = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face";
          }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg animate-pulse">
          <span className="text-sm">💕</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
        {/* Overlay decorativo */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent h-20 rounded-t-2xl"></div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold kitten-name mb-3">
          {kitten.name}
        </h3>
        <p className="text-purple-400 font-semibold mb-4 text-sm font-nunito">
          {kitten.age}
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed font-nunito">
          {kitten.description}
        </p>
        <button 
          className="btn-delicado w-full text-sm shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => alert(`Interesse em adotar ${kitten.name}! Em breve entraremos em contato. 💕`)}
        >
          <span className="flex items-center justify-center gap-2">
            Quero Adotar {kitten.name}
            <span className="text-pink-400">�</span>
          </span>
        </button>
      </div>
    </div>
  )
}

// Componente para o card de depoimento
export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card p-8 hover:scale-105 transition-all duration-500 text-center">
      <div className="mb-8">
        <div className="text-6xl text-pink-300 mb-6 opacity-50 font-serif animate-pulse">"</div>
        <p className="text-gray-700 leading-relaxed text-base font-nunito italic max-w-md mx-auto">
          {testimonial.text}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg text-xl font-bold text-white mb-4 animate-pulse">
          {testimonial.name.charAt(0)}
        </div>
        <div className="text-center">
          <p className="font-bold text-lg mb-1 font-comfortaa">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {testimonial.name}
            </span>
          </p>
          <p className="text-sm text-purple-400 font-nunito flex items-center gap-1 justify-center">
            Adotou <span className="kitten-name text-sm">{testimonial.kitten}</span>
            <span className="text-pink-400 ml-1">🐾</span>
          </p>
        </div>
      </div>
    </div>
  )
}
