import { useState } from 'react'
import { 
  HeartIcon, 
  HandRaisedIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { KittenCard, TestimonialCard } from './components/Cards'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve. 💕')
    setFormData({ name: '', email: '', message: '' })
  }

  // Gatinhos disponíveis para adoção
  const kittens = [
    { id: 1, name: 'Luna', age: '3 meses', description: 'Uma gatinha carinhosa e brincalhona que adora brincar com bolinhas de lã e dormir no colo.', color: 'rosa' },
    { id: 2, name: 'Mimi', age: '2 meses', description: 'Tranquila e dócil, perfeita para famílias com crianças. Adora carinhos e ronrona muito.', color: 'lilac' },
    { id: 3, name: 'Bento', age: '4 meses', description: 'Aventureiro e corajoso, gosta de explorar cada cantinho da casa com muita curiosidade.', color: 'azul' },
    { id: 4, name: 'Mel', age: '5 meses', description: 'Doce como mel, se dá bem com outros pets e pessoas. É muito sociável e amorosa.', color: 'rosa' },
    { id: 5, name: 'Thor', age: '6 meses', description: 'Protetor e leal, ideal para quem procura um companheiro fiel e carinhoso.', color: 'lilac' },
    { id: 6, name: 'Nina', age: '3 meses', description: 'Inteligente e curiosa, aprende rápido e adora brincar com brinquedinhos interativos.', color: 'azul' }
  ]

  // Depoimentos
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      text: 'Adotei a Luna há 6 meses e ela transformou nossa casa em um lar cheio de amor! É incrível como um pequeno ser pode trazer tanta alegria e carinho para nossa família.',
      kitten: 'Luna'
    },
    {
      id: 2,
      name: 'João Santos',
      text: 'O Thor é maravilhoso! Muito carinhoso com as crianças e super protetor da família. Foi a melhor decisão que tomamos este ano.',
      kitten: 'Thor'
    },
    {
      id: 3,
      name: 'Ana Costa',  
      text: 'A equipe dos Gatinhos do Bem é fantástica. Todo o processo foi feito com muito cuidado e atenção. Recomendo de coração!',
      kitten: 'Mimi'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden secao-delicada">
        {/* Elementos decorativos delicados */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 opacity-15 text-4xl animate-pulse hidden sm:block" style={{color: '#f9a8d4'}}>
            🌸
          </div>
          <div className="absolute bottom-32 right-16 opacity-15 hidden md:block">
            <SparklesIcon className="w-12 h-12 text-pink-300 animate-pulse" />
          </div>
          <div className="absolute top-1/3 right-8 opacity-15 text-4xl animate-pulse hidden lg:block" style={{color: '#d8b4fe'}}>
            ✨
          </div>
          <div className="absolute bottom-1/4 left-20 opacity-15 text-3xl animate-pulse hidden sm:block" style={{color: '#f9a8d4'}}>
            💕
          </div>
          
          {/* Patinhas decorativas no header */}
          <div className="absolute top-32 left-1/4 opacity-20 animate-bounce hidden md:block" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
            <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>
          
          <div className="absolute top-1/2 right-1/4 opacity-25 animate-bounce hidden lg:block" style={{animationDelay: '1s', animationDuration: '4s'}}>
            <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute bottom-1/3 left-1/3 opacity-20 animate-bounce hidden sm:block" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}>
            <svg className="w-7 h-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute top-40 right-32 opacity-15 animate-bounce hidden md:block" style={{animationDelay: '2s', animationDuration: '5s'}}>
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-8 font-comfortaa leading-tight">
              <span className="text-gray-800">Gatinhos do </span>
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative inline-block font-black">
                Bem
                <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full opacity-60 animate-pulse"></div>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 font-nunito font-light">
              Transformando vidas através do amor incondicional dos felinos
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Cada gatinho merece uma família amorosa. Ajude-nos a encontrar lares cheios de carinho para nossos pequenos amigos peludos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('gatinhos').scrollIntoView({ behavior: 'smooth' })}
                className="btn-delicado w-full sm:w-auto inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-lg">🐾</span>
                Adote um Gatinho
              </button>
              <button 
                onClick={() => document.getElementById('ajudar').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-2 border-pink-300 text-pink-500 hover:bg-pink-300 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3 glass-effect font-comfortaa shadow-lg hover:shadow-xl"
              >
                <span className="text-base">💕</span>
                Como Ajudar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gatinhos Disponíveis */}
      <section id="gatinhos" className="py-24 secao-delicada">
        <div className="container">
          <div className="text-center mb-20">              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-comfortaa">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Nossos Pequenos Amigos
                </span>
              </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-nunito">
              Conheça alguns dos gatinhos que estão esperando por uma família amorosa
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {kittens.map((kitten) => (
              <KittenCard key={kitten.id} kitten={kitten} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Decorativa de Patinhas Gigantes */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-pink-50/30 via-purple-50/20 to-indigo-50/30">
        <div className="absolute inset-0">
          {/* Patinhas Gigantes - Lado Esquerdo */}
          <div className="absolute top-8 left-4 opacity-30 animate-pulse" style={{animationDelay: '0s', animationDuration: '6s'}}>
            <svg className="w-40 h-40 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute top-44 left-16 opacity-25 animate-bounce" style={{animationDelay: '1.2s', animationDuration: '7s'}}>
            <svg className="w-36 h-36 text-pink-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute bottom-20 left-8 opacity-35 animate-pulse" style={{animationDelay: '2.8s', animationDuration: '8s'}}>
            <svg className="w-48 h-48 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/></svg>
          </div>

          {/* Patinhas Gigantes - Lado Direito */}
          <div className="absolute top-20 right-8 opacity-30 animate-bounce" style={{animationDelay: '0.8s', animationDuration: '5.5s'}}>
            <svg className="w-44 h-44 text-purple-250" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute top-56 right-12 opacity-25 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '6.5s'}}>
            <svg className="w-32 h-32 text-pink-250" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute bottom-12 right-16 opacity-40 animate-bounce" style={{animationDelay: '3.5s', animationDuration: '4.5s'}}>
            <svg className="w-52 h-52 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          {/* Patinhas Gigantes - Centro */}
          <div className="absolute top-16 left-1/3 opacity-25 animate-pulse" style={{animationDelay: '2s', animationDuration: '9s'}}>
            <svg className="w-56 h-56 text-pink-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute bottom-28 left-2/3 opacity-17 animate-bounce" style={{animationDelay: '1.8s', animationDuration: '7.5s'}}>
            <svg className="w-46 h-46 text-purple-250" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute top-1/2 right-1/3 opacity-15 animate-pulse" style={{animationDelay: '4s', animationDuration: '6s'}}>
            <svg className="w-60 h-60 text-pink-250" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute bottom-4 left-1/2 opacity-19 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '5.8s'}}>
            <svg className="w-40 h-40 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          {/* Patinhas Gigantes - Extras para preencher espaços (apenas em telas grandes) */}
          <div className="absolute top-6 left-1/4 opacity-10 animate-pulse hidden lg:block" style={{animationDelay: '5s', animationDuration: '10s'}}>
            <svg className="w-28 h-28 text-pink-150" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute bottom-2 right-1/4 opacity-12 animate-bounce hidden lg:block" style={{animationDelay: '3.7s', animationDuration: '6.2s'}}>
            <svg className="w-34 h-34 text-purple-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute top-72 left-3/4 opacity-11 animate-pulse hidden xl:block" style={{animationDelay: '6.5s', animationDuration: '8.5s'}}>
            <svg className="w-42 h-42 text-pink-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>

          <div className="absolute bottom-44 right-6 opacity-14 animate-bounce hidden xl:block" style={{animationDelay: '2.3s', animationDuration: '7.2s'}}>
            <svg className="w-38 h-38 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8.5 5C7.4 5 6.5 5.9 6.5 7C6.5 8.1 7.4 9 8.5 9C9.6 9 10.5 8.1 10.5 7C10.5 5.9 9.6 5 8.5 5ZM15.5 5C14.4 5 13.5 5.9 13.5 7C13.5 8.1 14.4 9 15.5 9C16.6 9 17.5 8.1 17.5 7C17.5 5.9 16.6 5 15.5 5ZM6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11C8 9.9 7.1 9 6 9ZM18 9C16.9 9 16 9.9 16 11C16 12.1 16.9 13 18 13C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9ZM12 8C9.8 8 8 9.8 8 12L8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14L16 12C16 9.8 14.2 8 12 8Z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Como Ajudar */}
      <section id="ajudar" className="py-24 secao-delicada">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-comfortaa">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Como Você Pode Ajudar
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-nunito">
              Existem várias formas de fazer a diferença na vida dos gatinhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Doar */}
            <div className="card-delicado text-center p-8 hover:scale-105 transition-all duration-500">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-lg text-white">💝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Doar
                </span>
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed font-nunito">
                Sua doação ajuda a custear alimentação, tratamentos veterinários e cuidados especiais para nossos gatinhos.
              </p>
              <button className="btn-delicado w-full text-sm">
                Fazer Doação
              </button>
            </div>

            {/* Apadrinhar */}
            <div className="card-delicado text-center p-8 hover:scale-105 transition-all duration-500">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-lg text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Apadrinhar
                </span>
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed font-nunito">
                Torne-se padrinho ou madrinha de um gatinho específico e acompanhe seu desenvolvimento até a adoção.
              </p>
              <button className="btn-delicado w-full text-sm">
                Ser Padrinho
              </button>
            </div>

            {/* Voluntariar */}
            <div className="card-delicado text-center p-8 hover:scale-105 transition-all duration-500">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-lg text-white">🙋‍♀️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-comfortaa">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Voluntariar
                </span>
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed font-nunito">
                Doe seu tempo e ajude nos cuidados diários, eventos de adoção e campanhas de conscientização.
              </p>
              <button className="btn-delicado w-full text-sm">
                Ser Voluntário
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 secao-delicada">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-comfortaa">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Histórias de Amor
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-nunito">
              Veja o que nossos adotantes têm a dizer sobre seus novos companheiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-24 secao-delicada">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-comfortaa">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Entre em Contato
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-nunito">
                Tem interesse em adotar ou quer saber mais? Envie uma mensagem!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card-delicado p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3 font-poppins">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-pink-200/50 rounded-xl focus:border-pink-400 focus:outline-none transition-all duration-300 text-lg font-nunito bg-white/50"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3 font-poppins">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-pink-200/50 rounded-xl focus:border-pink-400 focus:outline-none transition-all duration-300 text-lg font-nunito bg-white/50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="mb-10">
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3 font-poppins">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 border-2 border-pink-200/50 rounded-xl focus:border-pink-400 focus:outline-none transition-all duration-300 resize-none text-lg font-nunito bg-white/50"
                  placeholder="Conte-nos sobre seu interesse em adotar ou como gostaria de ajudar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-delicado w-full text-xl py-5"
              >
                Enviar Mensagem ❤️
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Seção Decorativa de Patinhas Delicadas */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 relative">
            <h2 className="text-4xl font-comfortaa font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent mb-8">
              🐾 Patinhas do Amor 🐾
            </h2>
            
            {/* Container da frase com patinhas ao redor */}
            <div className="relative inline-block max-w-4xl mx-auto">
              <p className="text-xl font-nunito text-gray-700 px-8 py-6 relative z-10 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
                Cada patinha representa um gatinho que encontrou seu lar
              </p>
              
              {/* Patinhas ao redor da frase */}
              
              {/* Patinhas no topo */}
              <div className="absolute -top-4 left-8 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                <svg width="32" height="32" viewBox="0 0 100 100" className="text-pink-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -top-6 left-32 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '4s'}}>
                <svg width="28" height="28" viewBox="0 0 100 100" className="text-purple-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -top-3 right-12 animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>
                <svg width="30" height="30" viewBox="0 0 100 100" className="text-pink-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -top-8 right-32 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '5s'}}>
                <svg width="26" height="26" viewBox="0 0 100 100" className="text-purple-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Patinhas nas laterais */}
              <div className="absolute top-4 -left-8 animate-bounce" style={{animationDelay: '0.8s', animationDuration: '4s'}}>
                <svg width="35" height="35" viewBox="0 0 100 100" className="text-pink-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute top-8 -right-6 animate-pulse" style={{animationDelay: '2s', animationDuration: '3.8s'}}>
                <svg width="33" height="33" viewBox="0 0 100 100" className="text-purple-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute top-12 -left-12 animate-bounce" style={{animationDelay: '2.5s', animationDuration: '4.5s'}}>
                <svg width="29" height="29" viewBox="0 0 100 100" className="text-pink-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute top-16 -right-10 animate-pulse" style={{animationDelay: '3s', animationDuration: '5.5s'}}>
                <svg width="31" height="31" viewBox="0 0 100 100" className="text-purple-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Patinhas na parte inferior */}
              <div className="absolute -bottom-2 left-16 animate-bounce" style={{animationDelay: '0.3s', animationDuration: '3.2s'}}>
                <svg width="34" height="34" viewBox="0 0 100 100" className="text-pink-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-4 left-40 animate-pulse" style={{animationDelay: '1.8s', animationDuration: '4.2s'}}>
                <svg width="28" height="28" viewBox="0 0 100 100" className="text-purple-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-1 right-20 animate-bounce" style={{animationDelay: '2.2s', animationDuration: '3.7s'}}>
                <svg width="32" height="32" viewBox="0 0 100 100" className="text-pink-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-6 right-44 animate-pulse" style={{animationDelay: '2.8s', animationDuration: '5.2s'}}>
                <svg width="30" height="30" viewBox="0 0 100 100" className="text-purple-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Patinhas extras aleatórias */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-bounce" style={{animationDelay: '3.5s', animationDuration: '4.8s'}}>
                <svg width="27" height="27" viewBox="0 0 100 100" className="text-pink-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute top-2 left-2 animate-pulse" style={{animationDelay: '4s', animationDuration: '3.5s'}}>
                <svg width="25" height="25" viewBox="0 0 100 100" className="text-purple-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute top-1 right-4 animate-bounce" style={{animationDelay: '4.3s', animationDuration: '4.2s'}}>
                <svg width="29" height="29" viewBox="0 0 100 100" className="text-pink-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute bottom-0 left-1/3 animate-pulse" style={{animationDelay: '1.2s', animationDuration: '3.8s'}}>
                <svg width="26" height="26" viewBox="0 0 100 100" className="text-purple-600">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute bottom-2 right-1/3 animate-bounce" style={{animationDelay: '0.7s', animationDuration: '4.5s'}}>
                <svg width="31" height="31" viewBox="0 0 100 100" className="text-pink-500">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>

              {/* Patinhas pequenas e delicadas extras */}
              <div className="absolute top-6 left-6 animate-pulse" style={{animationDelay: '5s', animationDuration: '6s'}}>
                <svg width="20" height="20" viewBox="0 0 100 100" className="text-pink-400">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute top-10 right-8 animate-bounce" style={{animationDelay: '5.5s', animationDuration: '3.2s'}}>
                <svg width="22" height="22" viewBox="0 0 100 100" className="text-purple-400">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute bottom-8 left-4 animate-pulse" style={{animationDelay: '6s', animationDuration: '4.8s'}}>
                <svg width="24" height="24" viewBox="0 0 100 100" className="text-pink-400">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute bottom-10 right-6 animate-bounce" style={{animationDelay: '6.5s', animationDuration: '3.8s'}}>
                <svg width="21" height="21" viewBox="0 0 100 100" className="text-purple-400">
                  <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="45" cy="20" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="65" cy="25" rx="8" ry="12" fill="currentColor"/>
                  <ellipse cx="35" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="55" cy="45" rx="6" ry="8" fill="currentColor"/>
                  <ellipse cx="45" cy="65" rx="15" ry="20" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Texto decorativo */}
          <div className="text-center mt-16">
            <p className="text-2xl font-comfortaa text-gray-700 mb-4">
              🐾 💕 Cada adoção é uma nova história de amor 💕 🐾
            </p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-4xl animate-bounce">🐱</span>
              <span className="text-3xl animate-pulse">❤️</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🏠</span>
            </div>
          </div>
        </div>
      </section>
          
          {/* Grade de Patinhas Visíveis */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Patinha 1 - Rosa */}
            <div className="flex justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
              <div className="w-24 h-24 bg-pink-400 rounded-full relative shadow-2xl border-4 border-pink-600 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-3 left-3 w-5 h-5 bg-pink-800 rounded-full"></div>
                <div className="absolute top-3 right-3 w-5 h-5 bg-pink-800 rounded-full"></div>
                <div className="absolute top-8 left-4 w-3 h-3 bg-pink-800 rounded-full"></div>
                <div className="absolute top-8 right-4 w-3 h-3 bg-pink-800 rounded-full"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-pink-800 rounded-full"></div>
              </div>
            </div>

            {/* Patinha 2 - Roxa */}
            <div className="flex justify-center animate-pulse" style={{animationDelay: '0.5s', animationDuration: '4s'}}>
              <div className="w-28 h-28 bg-purple-400 rounded-full relative shadow-2xl border-4 border-purple-600 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-4 left-4 w-6 h-6 bg-purple-800 rounded-full"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-800 rounded-full"></div>
                <div className="absolute top-9 left-5 w-4 h-4 bg-purple-800 rounded-full"></div>
                <div className="absolute top-9 right-5 w-4 h-4 bg-purple-800 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11 h-11 bg-purple-800 rounded-full"></div>
              </div>
            </div>

            {/* Patinha 3 - Rose */}
            <div className="flex justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>
              <div className="w-26 h-26 bg-rose-400 rounded-full relative shadow-2xl border-4 border-rose-600 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-3 left-3 w-5 h-5 bg-rose-800 rounded-full"></div>
                <div className="absolute top-3 right-3 w-5 h-5 bg-rose-800 rounded-full"></div>
                <div className="absolute top-8 left-4 w-3 h-3 bg-rose-800 rounded-full"></div>
                <div className="absolute top-8 right-4 w-3 h-3 bg-rose-800 rounded-full"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-rose-800 rounded-full"></div>
              </div>
            </div>

            {/* Patinha 4 - Lavanda */}
            <div className="flex justify-center animate-pulse" style={{animationDelay: '1.5s', animationDuration: '5s'}}>
              <div className="w-30 h-30 bg-purple-300 rounded-full relative shadow-2xl border-4 border-purple-500 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-4 left-4 w-6 h-6 bg-purple-700 rounded-full"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-700 rounded-full"></div>
                <div className="absolute top-10 left-5 w-4 h-4 bg-purple-700 rounded-full"></div>
                <div className="absolute top-10 right-5 w-4 h-4 bg-purple-700 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-700 rounded-full"></div>
              </div>
            </div>

            {/* Patinha 5 - Rosa Escuro */}
            <div className="flex justify-center animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}}>
              <div className="w-25 h-25 bg-pink-500 rounded-full relative shadow-2xl border-4 border-pink-700 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-3 left-3 w-5 h-5 bg-pink-900 rounded-full"></div>
                <div className="absolute top-3 right-3 w-5 h-5 bg-pink-900 rounded-full"></div>
                <div className="absolute top-8 left-4 w-3 h-3 bg-pink-900 rounded-full"></div>
                <div className="absolute top-8 right-4 w-3 h-3 bg-pink-900 rounded-full"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-9 h-9 bg-pink-900 rounded-full"></div>
              </div>
            </div>

            {/* Patinha 6 - Roxo Médio */}
            <div className="flex justify-center animate-pulse" style={{animationDelay: '2.5s', animationDuration: '3.8s'}}>
              <div className="w-27 h-27 bg-purple-500 rounded-full relative shadow-2xl border-4 border-purple-700 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-4 left-4 w-5 h-5 bg-purple-900 rounded-full"></div>
                <div className="absolute top-4 right-4 w-5 h-5 bg-purple-900 rounded-full"></div>
                <div className="absolute top-9 left-5 w-3 h-3 bg-purple-900 rounded-full"></div>
                <div className="absolute top-9 right-5 w-3 h-3 bg-purple-900 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-900 rounded-full"></div>
              </div>
            </div>

            {/* Patinha 7 - Rose Médio */}
            <div className="flex justify-center animate-bounce" style={{animationDelay: '3s', animationDuration: '4.5s'}}>
              <div className="w-24 h-24 bg-rose-500 rounded-full relative shadow-2xl border-4 border-rose-700 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-3 left-3 w-4 h-4 bg-rose-900 rounded-full"></div>
                <div className="absolute top-3 right-3 w-4 h-4 bg-rose-900 rounded-full"></div>
                <div className="absolute top-7 left-4 w-3 h-3 bg-rose-900 rounded-full"></div>
                <div className="absolute top-7 right-4 w-3 h-3 bg-rose-900 rounded-full"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-rose-900 rounded-full"></div>
              </div>
            </div>

            {/* Patinha 8 - Rosa Claro */}
            <div className="flex justify-center animate-pulse" style={{animationDelay: '3.5s', animationDuration: '5.5s'}}>
              <div className="w-29 h-29 bg-pink-300 rounded-full relative shadow-2xl border-4 border-pink-500 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute top-4 left-4 w-6 h-6 bg-pink-700 rounded-full"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-pink-700 rounded-full"></div>
                <div className="absolute top-10 left-5 w-4 h-4 bg-pink-700 rounded-full"></div>
                <div className="absolute top-10 right-5 w-4 h-4 bg-pink-700 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11 h-11 bg-pink-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Texto decorativo */}
          <div className="text-center mt-16">
            <p className="text-2xl font-comfortaa text-gray-700 mb-4">
              🐾 💕 Cada adoção é uma nova história de amor 💕 🐾
            </p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-4xl animate-bounce">🐱</span>
              <span className="text-3xl animate-pulse">❤️</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🏠</span>
            </div>
          </div>
        </div>
      </section>

