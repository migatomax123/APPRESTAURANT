export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://media.revistaad.es/photos/620cbc911db9f1841aebdf15/16:9/w_1920,c_limit/portada.jpg')" }}>
      <header className="w-full bg-green-500 py-4 bg-opacity-90">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl font-bold">Restaurante de Paco</h1>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col justify-center items-center w-full py-10">
        <div className="text-center bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Bienvenido a Nuestro Restaurante</h2>
          <p className="text-lg mb-8">
            Disfruta de una experiencia culinaria única con nuestros platos exquisitos y ambiente acogedor.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Ver Menú
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Hacer una Reserva
            </button>
          </div>
        </div>
      </main>
      
      <footer className="w-full bg-green-500 py-4 bg-opacity-90">
        <div className="container mx-auto text-white text-center">
          © 2024 Restaurante Delicioso. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

