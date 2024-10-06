import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <header className="w-full bg-green-500 text-white p-4 shadow-md">
                <h1 className="text-3xl font-bold text-center">Restaurante de paco</h1>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Bienvenido a Nuestro Restaurante</h2>
                    <p className="text-gray-600 text-center mb-8">
                        Disfruta de una experiencia culinaria única con nuestros platos exquisitos y ambiente acogedor.
                    </p>
                    <div className="flex justify-center mb-4">
                        <a href="/menu" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                            Ver Menú
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a href="/reservations" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                            Hacer una Reserva
                        </a>
                    </div>
                </div>
            </main>
            <footer className="w-full bg-green-500 text-white p-4 shadow-md text-center">
                <p>&copy; 2024 Restaurante Delicioso. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
