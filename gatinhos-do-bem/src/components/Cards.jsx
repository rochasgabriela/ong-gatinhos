import { HeartIcon, SparklesIcon } from '@heroicons/react/24/solid';

export function KittenCard({ name, age, color, description, image }) {
  return (
    <div className="group bg-white/95 backdrop-blur-md rounded-[2rem] shadow-soft hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-pink-100/30 overflow-hidden max-w-sm mx-auto h-full flex flex-col hover:border-pink-200/50">
      {/* Decorative sparkles */}
      <div className="absolute top-4 right-4 z-20">
        <SparklesIcon className="w-6 h-6 text-pink-300 animate-pulse drop-shadow-sm" />
      </div>
      
      {/* Image container */}
      <div className="relative h-52 overflow-hidden flex-shrink-0 rounded-t-[2rem]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Adopt button - positioned right below the photo */}
      <div className="px-6 pt-5 pb-3">
        <button className="w-full bg-gradient-to-br from-pink-300/90 via-rose-400/90 to-purple-400/90 hover:from-pink-400/95 hover:via-rose-500/95 hover:to-purple-500/95 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group/btn relative overflow-hidden backdrop-blur-sm border border-white/30 btn-hover-glow">
          <div className="flex items-center justify-center gap-3 relative z-10">
            <HeartIcon className="w-5 h-5 group-hover/btn:animate-bounce transition-all duration-300 drop-shadow-sm" />
            <span className="text-base font-bold tracking-wide drop-shadow-sm">Quero Adotar</span>
          </div>
          {/* Delicate shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></div>
          {/* Soft inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-300/30 via-rose-300/20 to-purple-300/30 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 pt-2 relative flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-bold text-gray-800 text-shadow-soft">{name}</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-pink-300/50 via-purple-300/30 to-transparent"></div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-pink-600">Idade:</span> <span className="text-gray-700">{age}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-pink-600">Pelagem:</span> <span className="text-gray-700">{color}</span>
            </p>
          </div>
          <div className="mt-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100/50">
            <p className="text-sm text-gray-700 leading-relaxed italic">{description}</p>
          </div>
        </div>
        
        {/* Decorative paw prints */}
        <div className="absolute top-2 right-4 opacity-15">
          <div className="text-pink-400 text-lg">🐾</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCard({ name, text, kitten }) {
  return (
    <div className="group relative bg-white/85 backdrop-blur-sm rounded-[2rem] p-6 shadow-soft hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-pink-100/50 overflow-hidden w-full max-w-sm mx-auto">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-transparent to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
      
      {/* Subtle floating hearts */}
      <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-50 transition-all duration-500 group-hover:animate-pulse">
        <div className="text-pink-300 text-lg">�</div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <span className="text-pink-600 font-bold text-lg">{name.charAt(0)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-800 text-base group-hover:text-pink-600 transition-colors duration-300">{name}</h4>
            <div className="flex text-pink-400 text-sm gap-0.5 group-hover:text-pink-500 transition-colors duration-300">
              {Array.from({length: 5}).map((_, i) => (
                <span key={i} className="group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>★</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonial text with better spacing */}
        <div className="mb-5 px-2">
          <p className="text-gray-700 text-sm leading-relaxed text-center italic">
            <span className="text-pink-400 text-lg font-serif">"</span>
            <span className="mx-1">{text}</span>
            <span className="text-pink-400 text-lg font-serif">"</span>
          </p>
        </div>
        
        {/* Kitten info with cute styling */}
        {kitten && (
          <div className="flex items-center justify-center gap-2 pt-3 border-t border-pink-100/60">
            <div className="text-pink-300 text-base">🐾</div>
            <p className="text-xs text-gray-500">
              Adotou: <span className="text-pink-600 font-semibold">{kitten}</span>
            </p>
          </div>
        )}
        
        {/* Decorative bottom line */}
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full group-hover:w-12 transition-all duration-500"></div>
        </div>
      </div>
      
      {/* Soft hover glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-pink-200/10 to-purple-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
