import Image from "next/image"
import { User } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=30&width=30" alt="Logo" width={30} height={30} className="mr-2" />
          <span className="text-sm font-medium">El tigre azul</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-500" />
        </div>
      </header>

      {/* Search Section */}
      <div className="mb-10">
        <div className="bg-[#95aac9] py-3 px-4 mb-6">
          <h2 className="text-center text-lg font-medium">Buscador</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Taza Ballena Lila"
              width={200}
              height={200}
              className="mb-3"
            />
            <h3 className="text-center font-medium">Taza Ballena</h3>
            <p className="text-center">Lila</p>
            <p className="text-center font-bold mt-2">$1500</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Taza de animales de ceramica"
              width={200}
              height={200}
              className="mb-3"
            />
            <h3 className="text-center font-medium">Taza de animales de</h3>
            <p className="text-center">ceramica</p>
            <p className="text-center font-bold mt-2">$700 c/a</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Taza plato colador y tapa de ceramica"
              width={200}
              height={200}
              className="mb-3"
            />
            <h3 className="text-center font-medium">Taza plato colador y tapa de</h3>
            <p className="text-center">ceramica</p>
            <p className="text-center font-bold mt-2">$29.500</p>
          </div>
        </div>
      </div>

      {/* Footer Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Contact Section */}
        <div>
          <div className="bg-[#95aac9] py-3 px-4 mb-6">
            <h2 className="text-center text-lg font-medium">Contactanos :)</h2>
          </div>
          <div className="pl-4 space-y-2">
            <p className="font-medium">Whatsapp: +54 9 11 1111-1111</p>
            <p className="font-medium">Instagram: El.Tigree.azul</p>
            <p className="font-medium">Correo: eltigreazul@gmail.com</p>
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <div className="bg-[#95aac9] py-3 px-4 mb-6">
            <h2 className="text-center text-lg font-medium">Sobre Nosotros</h2>
          </div>
          <div className="pl-4">
            <h3 className="text-2xl font-bold mb-2">Nuestra Historia</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <h3 className="text-2xl font-bold mb-2">Como creamos nuestros productos</h3>
            <p>
              Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
