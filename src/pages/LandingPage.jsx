import bannerImage from '../assets/image/banner.jpg';
import backgroundImage from '../assets/image/backg.jpg';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      } else {
        setDisplayText('');
        setCurrentIndex(0);
      }
    }, 200); // Ajusta la velocidad de escritura aquí (en milisegundos)
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, text]);

  return <h1 className="text-3xl font-extrabold sm:text-5xl text-left text-white">{displayText}</h1>;
};

const team = [
  {
    avatar: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
    name: 'Laura Sandoval',
    title: 'Product designer - Scrum Master',
    desc: 'combina habilidades en diseño creativo y metodologías ágiles, optimiza proyectos para ofrecer soluciones innovadoras y de alta calidad.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)',
    github: 'javascript:void(0)'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
    name: 'Juan Gomez',
    title: 'Software engineer',
    desc: 'Con experiencia en ingeniería de software, desarrolla soluciones tecnológicas avanzadas para cumplir con los estándares de la industria',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)',
    github: 'javascript:void(0)'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Andres Martinez',
    title: 'Product designer',
    desc: 'Con habilidades en diseño creativo, optimiza proyectos para ofrecer soluciones innovadoras y de alta calidad en la industria.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)',
    github: 'javascript:void(0)'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: 'Andres Reyes',
    title: 'Product manager',
    desc: 'lidera la gestión de productos con habilidades estratégicas, asegurando la entrega eficiente de soluciones innovadoras y de calidad.',
    linkedin: 'javascript:void(0)',
    twitter: 'javascript:void(0)',
    github: 'javascript:void(0)'
  },
];

function LandingPage() {
  return (
  
  <div className="bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="App">

    {/* Navbar */}
    <section className="relative bg-gray-500 text-white" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
          <div className="relative z-10 navbar bg-custom-blue bg-opacity-0 text-white p-5 flex justify-between items-center">
            <div className="navbar-brand text-2xl flex items-center">
              <img src="/src/assets/image/IAprendix_logo_transparente.png" alt="Logo de Aprendix" className="inline-block mr-1 w-60 h-20" />
            </div>
            <div className="navbar-links flex">
              <div className="navbar-item mx-5">Servicios</div>
              <div className="navbar-item mx-5">Contacto</div>
              <div className="navbar-item mx-5">
                <a href="/login" className="button-login text-blue-300 hover:text-blue-500">Iniciar Sesión</a>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="max-w-xl">
              <TypingEffect text="Optimiza tu Educación con IAprendix" />
              <strong className="block font-extrabold text-white"> </strong>
              <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                Identifica tu estilo de aprendizaje con el Test VAK y personaliza tus técnicas para una experiencia educativa más efectiva.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <Link to="/register" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
                  Get Start
                </Link>
              </div>
            </div>
          </div>
    </section>

    {/* Modelos de aprendizaje */}
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Primer artículo */}
          <article className="group rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
            <img
              alt=""
              src="/src/assets/image/audio.jpg"
              className="h-56 w-full object-cover transition group-hover:grayscale-[50%]"
            />
            <div className="p-4 bg-white">
              <a href="#">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition text-center">
                  Aprendizaje Auditivo
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Se destacan por aprender a través de la experiencia práctica y el movimiento físico. Utilizan actividades prácticas y manipulativas para comprender mejor conceptos y procedimientos, favoreciendo el aprendizaje basado en la acción y la experiencia directa.             
              </p>
            </div>
          </article>

          {/* Segundo artículo */}
          <article className="group rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
            <img
              alt=""
              src="/src/assets/image/visual.jpg"
              className="h-56 w-full object-cover transition group-hover:grayscale-[50%]"
            />
            <div className="p-4 bg-white">
              <a href="#">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition text-center">
                  Aprendizaje Visual
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-500">
              Este estilo se centra en aprender a través de imágenes y gráficos, ilustrando y ayudando a entender conceptos complejos mediante la organización visual. Utilizan mapas mentales y diagramas para procesar información efectivamente.
              </p>
            </div>
          </article>

          {/* Tercer artículo */}
          <article className="group rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
            <img
              alt=""
              src="/src/assets/image/kinestesico.jpg"
              className="h-56 w-full object-cover transition group-hover:grayscale-[50%]"
            />
            <div className="p-4 bg-white">
              <a href="#">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition text-center">
                  Aprendizaje Kinestésico
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Se destacan por aprender a través de la experiencia práctica y el movimiento físico. Utilizan actividades prácticas y manipulativas para comprender mejor conceptos y procedimientos, favoreciendo el aprendizaje basado en la acción y la experiencia directa.             
              </p>
            </div>
          </article>
        </div>
    </div>
    
    {/* Logos Grid */}
    <section className="bg-white bg-opacity-35 rounded-lg shadow-lg overflow-hidden mt-10 max-w-screen-lg mx-auto transform scale-115">
      <div className="px-4 py-10 sm:px-6 md:py-14 lg:px-10 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Proyecto Educativo Aprendix</h2>
          <p className="mt-4 text-gray-500 sm:text-lg">
            IAprendix se enfoca en ofrecer educación de calidad basado en modelos de aprendizaje. Nuestro compromiso es formar
            profesionales capacitados para enfrentar los desafíos del futuro.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="px-4 py-6 text-center">
              <dt className="text-lg font-medium text-gray-500">Cursos Disponibles</dt>
              <dd className="mt-2 text-3xl font-extrabold text-blue-600 md:text-4xl">20+</dd>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md mt-4 sm:mt-0">
            <div className="px-4 py-6 text-center">
              <dt className="text-lg font-medium text-gray-500">Estudiantes Actuales</dt>
              <dd className="mt-2 text-3xl font-extrabold text-blue-600 md:text-4xl">500+</dd>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md mt-4 sm:mt-0">
            <div className="px-4 py-6 text-center">
              <dt className="text-lg font-medium text-gray-500">Certificaciones Ofrecidas</dt>
              <dd className="mt-2 text-3xl font-extrabold text-blue-600 md:text-4xl">10+</dd>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Integrantes */}
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-center font-semibold sm:text-4xl">
            Nuestro Equipo
          </h3>
          <p className="text-gray-600 mt-3 text-center">
            un grupo de profesionales con habilidades complementarias que trabajan en conjunto para diseñar, construir y ayudar a la comunidad con sus modelos de aprendizaje para una enseñanza personalizada.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {team.map((item, index) => (
              <li key={index} className="gap-8 sm:flex">
                <div className="w-full h-60">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                  <p className="text-indigo-600">{item.title}</p>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a href={item.twitter} aria-label="Twitter">
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.github} aria-label="GitHub">
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="currentColor"
                          clipPath="url(#clip0_910_44)"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                            clip-rule="evenodd"
                          />
                          <path
                            d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_910_44">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.linkedin} aria-label="LinkedIn">
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Videos */}
    <div className="flex justify-center items-center mt-10 bg-gray-100 shadow-lg rounded-lg overflow-hidden max-w-screen-lg mx-auto mb-10 bg-opacity-35">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <video className="w-full" autoPlay loop controls muted>
            <source
              src="/src/assets/video/vak.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-center">Descubre tu Estilo de Aprendizaje: VAK</h2>
          <p className="text-gray-600 mb-8">
            Los modelos de aprendizaje VAK (Visual, Auditivo, Kinestésico) son esenciales para personalizar tu educación. Identifica si aprendes mejor mediante imágenes, sonidos o actividades prácticas y optimiza tu proceso de aprendizaje para alcanzar tu máximo potencial académico.
          </p>
          <a href="#" className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm text-center font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">Get Started Today</a>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="mi-footer bg-gradient-to-r from-gray-800 to-gray-600 text-white p-5 text-center opacity-50">
  <p>© 2024 Aprendix. Todos los derechos reservados.</p>
  <div className="flex justify-center space-x-4 mt-4">
    <a href="#" className="hover:text-gray-300 transition duration-300">Política de privacidad</a>
    <a href="#" className="hover:text-gray-300 transition duration-300">Términos y condiciones</a>
    <a href="#" className="hover:text-gray-300 transition duration-300">Contacto</a>
  </div>
    </footer>

  </div>
</div>
  );
}

export default LandingPage;