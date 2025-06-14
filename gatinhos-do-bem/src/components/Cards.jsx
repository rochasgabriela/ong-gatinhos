// Componente para o card de gatinho individual
export const KittenCard = ({ kitten }) => {
  return (
    <div className="relative group max-w-sm mx-auto">
      {/* Card principal com design moderno */}
      <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-[1.02] overflow-hidden border border-pink-100/60 hover:border-pink-200/80 relative">
        
        {/* Gradiente decorativo no topo */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 rounded-t-[2.5rem]"></div>
        
        {/* Container da foto com padding */}
        <div className="p-6 pt-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-pink-50/80 group-hover:border-pink-100 transition-all duration-500">
            <img 
              src={kitten.photo} 
              alt={kitten.name}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay delicado */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-pink-50/20"></div>
            
            {/* Coração flutuante */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full p-3 shadow-lg border border-pink-200/50 group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl animate-pulse">💖</span>
            </div>
            
            {/* Decoração no canto inferior esquerdo */}
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-pink-200/90 to-purple-200/90 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-white/50">
              <span className="text-sm font-comfortaa text-pink-800">✨ Disponível</span>
            </div>
          </div>
        </div>
        
        {/* Seção de informações com espaçamento elegante */}
        <div className="px-8 pb-8 text-center space-y-4">
          {/* Nome do gatinho */}
          <div className="relative">
            <h3 className="kitten-name-delicate text-3xl mb-2">
              {kitten.name}
            </h3>
            {/* Linha decorativa sob o nome */}
            <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"></div>
          </div>
          
          {/* Idade */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl px-4 py-2 inline-block border border-purple-200/50">
            <p className="text-purple-700 font-semibold text-base font-comfortaa">
              🎂 {kitten.age}
            </p>
          </div>
          
          {/* Descrição */}
          <p className="text-gray-700 text-sm leading-relaxed font-nunito max-w-xs mx-auto">
            {kitten.description}
          </p>
          
          {/* Espaçamento antes do botão */}
          <div className="pt-6">
            {/* Botão super delicado com cores radiantes */}
            <button 
              className="w-full py-6 px-10 font-bold text-xl transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden group/btn font-comfortaa shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, #f472b6 0%, #ec4899 25%, #d946ef 50%, #c084fc 75%, #a855f7 100%)',
                color: 'white',
                borderRadius: '3rem',
                border: '3px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 60px rgba(236, 72, 153, 0.4), 0 8px 30px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(145deg, #ec4899 0%, #d946ef 25%, #c084fc 50%, #a855f7 75%, #9333ea 100%)';
                e.target.style.transform = 'scale(1.12) translateY(-8px)';
                e.target.style.boxShadow = '0 30px 80px rgba(236, 72, 153, 0.5), 0 15px 40px rgba(139, 92, 246, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(145deg, #f472b6 0%, #ec4899 25%, #d946ef 50%, #c084fc 75%, #a855f7 100%)';
                e.target.style.transform = 'scale(1) translateY(0)';
                e.target.style.boxShadow = '0 20px 60px rgba(236, 72, 153, 0.4), 0 8px 30px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onClick={() => alert(`Que lindo! Você tem interesse em adotar ${kitten.name}! 💕 Em breve entraremos em contato.`)}
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="text-2xl animate-pulse filter drop-shadow-lg">🐾</span>
                <span className="font-black tracking-wide text-shadow-lg">Quero Adotar</span>
                <span className="text-2xl animate-bounce filter drop-shadow-lg">💝</span>
              </span>
              
              {/* Efeito de brilho radiante */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              {/* Borda interna brilhante */}
              <div className="absolute inset-2 rounded-3xl border border-white/30 group-hover/btn:border-white/50 transition-colors duration-300"></div>
              
              {/* Partículas flutuantes */}
              <div className="absolute top-1 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 right-6 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </button>
          </div>
        </div>
        
        {/* Decoração de fundo */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-pink-100/20 to-purple-100/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      </div>
    </div>
  )
}

// Componente para o card de depoimento
export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative group max-w-md mx-auto">
      {/* Card principal */}
      <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] overflow-hidden border border-purple-100/60 hover:border-purple-200/80 p-8 relative">
        
        {/* Gradiente decorativo no topo */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 rounded-t-[2.5rem]"></div>
        
        {/* Aspas decorativas */}
        <div className="text-center mb-6">
          <div className="text-6xl text-purple-300 opacity-40 font-serif animate-pulse">"</div>
        </div>
        
        {/* Texto do depoimento */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-lg font-nunito italic text-center max-w-sm mx-auto">
            {testimonial.text}
          </p>
        </div>
        
        {/* Informações do autor */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Avatar */}
          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-xl text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 border-4 border-white/80">
            {testimonial.name.charAt(0)}
          </div>
          
          {/* Nome e informações */}
          <div className="text-center space-y-2">
            <p className="section-title text-xl">
              {testimonial.name}
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl px-4 py-2 inline-block border border-purple-200/50">
              <p className="text-sm text-purple-600 font-nunito flex items-center gap-2 justify-center">
                <span>Adotou</span>
                <span className="kitten-name-delicate text-sm">{testimonial.kitten}</span>
                <span className="text-pink-400 animate-pulse">🐾</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Decoração de fundo */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
        
        {/* Decoração delicada no canto */}
        <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <span className="text-2xl animate-pulse">💕</span>
        </div>
      </div>
    </div>
  )
}
