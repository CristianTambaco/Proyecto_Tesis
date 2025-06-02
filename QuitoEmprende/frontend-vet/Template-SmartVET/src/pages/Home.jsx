import logoDarkMode from '../assets/dark.png'
import logoDogCatMain from '../assets/dogmain.png'
import AppStoreImage from '../assets/appstore.png'
import GooglePlayImage from '../assets/googleplay.png'
import logoDog from '../assets/dog-hand.webp'
import { Link } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaCommentSms } from "react-icons/fa6";
import { TbDog } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


export const Home = () => {
    return (
        <>
            {/* HEADER */}
            <header className="container mx-auto h-20 flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-white shadow-sm">
                <h1 className="font-bold text-2xl text-amber-700 mb-2 md:mb-0">Quito<span className="text-black">Emprende</span></h1>
                <ul className="flex gap-6 text-gray-700 font-semibold">
                    <li><a href="#" className="hover:text-amber-700 hover:underline">Home</a></li>
                    <li><a href="#" className="hover:text-amber-700 hover:underline">Productos</a></li>
                    <li><a href="#" className="hover:text-amber-700 hover:underline">Sobre Nosotros</a></li>
                    <li><a href="#" className="hover:text-amber-700 hover:underline">Contacto</a></li>
                </ul>
                <div className="mt-2 md:mt-0">
                    <img src={logoDarkMode} alt="Modo Oscuro" width={30} height={30} className="cursor-pointer" />
                </div>
            </header>

            {/* HERO / FEATURED PRODUCTS */}
            <main className="bg-red-50 py-8 px-6 md:px-20">
                <h2 className="font-extrabold text-4xl text-amber-800 uppercase text-center md:text-left md:text-5xl">
                    Productos Destacados
                </h2>
                <p className="text-gray-600 mt-4 text-center md:text-left">
                    Explora una selección de artículos creados por emprendedores de Quito. Apoya lo local, descubre innovación.
                </p>

                {/* GRID DE CARDS DE PRODUCTOS */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
                        <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Imagen del Producto</span>
                        </div>
                        <h3 className="font-bold text-xl text-amber-700 mb-2">Nombre del Producto 1</h3>
                        <p className="text-gray-700 flex-1 mb-4">
                            Breve descripción del producto para atraer al usuario y destacar sus beneficios.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-800">$ XX.XX</span>
                            <button className="bg-amber-800 text-white py-1 px-4 rounded-xl hover:bg-amber-700">
                                Ver más
                            </button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
                        <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Imagen del Producto</span>
                        </div>
                        <h3 className="font-bold text-xl text-amber-700 mb-2">Nombre del Producto 2</h3>
                        <p className="text-gray-700 flex-1 mb-4">
                            Breve descripción del producto para atraer al usuario y destacar sus beneficios.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-800">$ XX.XX</span>
                            <button className="bg-amber-800 text-white py-1 px-4 rounded-xl hover:bg-amber-700">
                                Ver más
                            </button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
                        <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Imagen del Producto</span>
                        </div>
                        <h3 className="font-bold text-xl text-amber-700 mb-2">Nombre del Producto 3</h3>
                        <p className="text-gray-700 flex-1 mb-4">
                            Breve descripción del producto para atraer al usuario y destacar sus beneficios.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-800">$ XX.XX</span>
                            <button className="bg-amber-800 text-white py-1 px-4 rounded-xl hover:bg-amber-700">
                                Ver más
                            </button>
                        </div>
                    </div>
                    {/* Agrega más cards según sea necesario */}
                </div>
            </main>

            {/* SOBRE NOSOTROS */}
            <section className="container mx-auto my-16 px-4">
                <div className="relative text-center mb-8">
                    <h2 className="font-semibold text-3xl text-amber-800 inline-block bg-white px-4">SOBRE NOSOTROS</h2>
                    <div className="border-2 border-amber-800 absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-0"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Imagen Representativa</span>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 mb-4">
                            QuitoEmprende es una plataforma dedicada a visibilizar y potenciar el trabajo de emprendedores locales. Nuestro objetivo es acercar al consumidor productos únicos, hechos con pasión y creatividad en Quito.
                        </p>
                        <ul className="space-y-3 text-gray-800">
                            <li className="flex items-center">
                                <MdDashboard className="inline text-2xl text-amber-700 mr-2" />
                                Tecnología y Gadgets
                            </li>
                            <li className="flex items-center">
                                <FaRobot className="inline text-2xl text-amber-700 mr-2" />
                                Juguetes y Robótica
                            </li>
                            <li className="flex items-center">
                                <BsCashCoin className="inline text-2xl text-amber-700 mr-2" />
                                Finanzas y Asesorías
                            </li>
                            <li className="flex items-center">
                                <FaCommentSms className="inline text-2xl text-amber-700 mr-2" />
                                Servicios de Comunicación
                            </li>
                            <li className="flex items-center">
                                <TbDog className="inline text-2xl text-amber-700 mr-2" />
                                Productos para Mascotas
                            </li>
                            <li className="flex items-center">
                                <FaUserDoctor className="inline text-2xl text-amber-700 mr-2" />
                                Salud y Bienestar
                            </li>
                            <li className="flex items-center">
                                <GiMedicines className="inline text-2xl text-amber-700 mr-2" />
                                Salud y Medicamentos Naturales
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CATEGORÍAS */}
            <section className="container mx-auto my-16 px-4">
                <div className="relative text-center mb-8">
                    <h2 className="font-semibold text-3xl text-amber-800 inline-block bg-white px-4">CATEGORÍAS</h2>
                    <div className="border-2 border-amber-800 absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-0"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
                        <MdDashboard className="text-5xl text-amber-700 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Tecnología</h4>
                        <p className="text-gray-600">
                            Productos innovadores de emprendedores tecnológicos de Quito.
                        </p>
                    </div>
                    <div className="text-center bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
                        <FaRobot className="text-5xl text-amber-700 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Robótica</h4>
                        <p className="text-gray-600">
                            Proyectos de robótica y automatización hechos en la ciudad.
                        </p>
                    </div>
                    <div className="text-center bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
                        <BsCashCoin className="text-5xl text-amber-700 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Finanzas</h4>
                        <p className="text-gray-600">
                            Servicios de asesoría y finanzas personales de expertos locales.
                        </p>
                    </div>
                    <div className="text-center bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
                        <FaCommentSms className="text-5xl text-amber-700 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Comunicación</h4>
                        <p className="text-gray-600">
                            Soluciones de chat, marketing y comunicación de emprendedores.
                        </p>
                    </div>
                    <div className="text-center bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
                        <TbDog className="text-5xl text-amber-700 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Mascotas</h4>
                        <p className="text-gray-600">
                            Productos y servicios para el cuidado de mascotas en Quito.
                        </p>
                    </div>
                    <div className="text-center bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
                        <FaUserDoctor className="text-5xl text-amber-700 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Salud</h4>
                        <p className="text-gray-600">
                            Emprendedores en el sector salud y bienestar local.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-red-50 py-8 px-6 md:px-20 mt-16 rounded-tr-3xl rounded-tl-3xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h3 className="text-3xl font-extrabold text-amber-800 mb-4 md:mb-0">Contacto</h3>
                    <ul className="flex gap-6 text-gray-700">
                        <li><FaFacebook className="text-2xl hover:text-amber-700" /></li>
                        <li><FaSquareInstagram className="text-2xl hover:text-amber-700" /></li>
                        <li><FaXTwitter className="text-2xl hover:text-amber-700" /></li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <p className="font-bold text-gray-800 mb-1">Email: contacto@quitoemprende.com</p>
                        <p className="font-bold text-gray-800">Teléfono: 0999-123-456</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <form action="#" className="w-full">
                            <fieldset className="border-2 border-amber-900 p-4 rounded-sm">
                                <legend className="bg-amber-950 text-white px-2 py-1">Suscríbete a nuestro boletín</legend>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <input type="email" placeholder="Ingresa tu correo" className="flex-1 border border-gray-300 rounded-md px-2 py-1 focus:outline-none" />
                                    <button className="bg-amber-950 text-white px-4 py-2 rounded-lg hover:bg-amber-800">
                                        Enviar
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <hr className="border-amber-800 my-8" />
                <p className="text-center font-semibold text-gray-700">
                    © 2025 QuitoEmprende. Todos los derechos reservados.
                </p>
            </footer>
        </>
    )
}
