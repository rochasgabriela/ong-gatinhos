import { useState } from 'react'
import { 
  HeartIcon, 
  HandRaisedIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { KittenCard, TestimonialCard } from './components/Cards'

// Custom components for paw print (using emoji as fallback)
const PawIcon = ({ className = "w-6 h-6" }) => (
  <span className={`text-2xl ${className.includes('w-') ? '' : 'text-2xl'}`}>🐾</span>
)

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
    // Aqui seria integrado com um serviço de envio de email
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', message: '' })
  }

  // Gatinhos disponíveis para adoção
  const kittens = [
    { id: 1, name: 'Luna', age: '3 meses', description: 'Carinhosa e brincalhona' },
    { id: 2, name: 'Mimi', age: '2 meses', description: 'Tranquila e dócil' },
    { id: 3, name: 'Bento', age: '4 meses', description: 'Aventureiro e corajoso' },
    { id: 4, name: 'Mel', age: '5 meses', description: 'Amorosa e sociável' },
    { id: 5, name: 'Thor', age: '6 meses', description: 'Protetor e leal' },
    { id: 6, name: 'Nina', age: '3 meses', description: 'Curiosa e inteligente' }
  ]

  // Depoimentos
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      text: 'Adotei a Luna há 6 meses e ela transformou nossa casa em um lar cheio de amor!',
      kitten: 'Luna'
    },
    {
      id: 2,
      name: 'João Santos',
      text: 'O Thor é incrível! Muito carinhoso com as crianças e super protetor da família.',
      kitten: 'Thor'
    },
    {
      id: 3,
      name: 'Ana Costa',
      text: 'A equipe dos Gatinhos do Bem é maravilhosa. Todo o processo foi feito com muito cuidado.',
      kitten: 'Mimi'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-soft via-purple-soft to-pink-light min-h-screen flex items-center">
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-poppins">
              Gatinhos do <span className="text-pink-600">Bem</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-nunito">
              Transformando vidas através do amor incondicional dos felinos
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Cada gatinho merece uma família amorosa. Ajude-nos a encontrar lares cheios de carinho para nossos pequenos amigos peludos.
            </p>
            <button 
              onClick={() => document.getElementById('gatinhos').scrollIntoView({ behavior: 'smooth' })}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <PawIcon /> Adote um Gatinho
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20 text-4xl">
          <PawIcon />
        </div>
        <div className="absolute bottom-32 right-16 opacity-20">
          <HeartIcon className="w-8 h-8 text-pink-400" />
        </div>
        <div className="absolute top-1/3 right-8 opacity-20 text-4xl">
          <PawIcon />
        </div>
      </section>

      {/* Gatinhos Disponíveis */}
      <section id="gatinhos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos Pequenos <span className="text-pink-600">Amigos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos gatinhos que estão esperando por uma família amorosa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kittens.map((kitten) => (
              <KittenCard key={kitten.id} kitten={kitten} />
            ))}
          </div>
        </div>
      </section>

      {/* Como Ajudar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Como Você Pode <span className="text-purple-600">Ajudar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Existem várias formas de fazer a diferença na vida dos gatinhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doar */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Doar</h3>
              <p className="text-gray-600 mb-6">
                Sua doação ajuda a custear alimentação, tratamentos veterinários e cuidados especiais para nossos gatinhos.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Fazer Doação
              </button>
            </div>

            {/* Apadrinhar */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <PawIcon className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Apadrinhar</h3>
              <p className="text-gray-600 mb-6">
                Torne-se padrinho ou madrinha de um gatinho específico e acompanhe seu desenvolvimento até a adoção.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Ser Padrinho
              </button>
            </div>

            {/* Voluntariar */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandRaisedIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Voluntariar</h3>
              <p className="text-gray-600 mb-6">
                Doe seu tempo e ajude nos cuidados diários, eventos de adoção e campanhas de conscientização.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Ser Voluntário
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Histórias de <span className="text-purple-600">Amor</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos adotantes têm a dizer sobre seus novos companheiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Entre em <span className="text-pink-600">Contato</span>
              </h2>
              <p className="text-xl text-gray-600">
                Tem interesse em adotar ou quer saber mais? Envie uma mensagem!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Conte-nos sobre seu interesse em adotar ou como gostaria de ajudar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem ❤️
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo e descrição */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Gatinhos do Bem</h3>
              <p className="text-gray-300 leading-relaxed">
                Uma ONG dedicada ao resgate, cuidado e adoção responsável de gatinhos. 
                Transformando vidas através do amor felino.
              </p>
            </div>

            {/* Contatos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contatos</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5" />
                  <span className="ml-3">(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span className="ml-3">contato@gatinhosdobem.org</span>
                </div>
                <div className="text-gray-300">
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center hover:text-pink-300 transition-colors duration-300">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <span className="ml-3">@gatinhosdobem</span>
                </a>
                <a href="#" className="flex items-center hover:text-pink-300 transition-colors duration-300">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <span className="ml-3">Gatinhos do Bem</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Gatinhos do Bem. Feito com ❤️ para nossos pequenos amigos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
