import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  RiSettings3Line,
  RiArrowRightSLine,
  RiRobotLine,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import { AuthContext } from '../contexts/AuthProvider';
import Chatbot from "./Chatbot";

function AdminSidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenuCursos, setShowSubmenuCursos] = useState(false);
  const [showSubmenuTests, setShowSubmenuTests] = useState(false);
  const [showSubmenuEstudiantes, setShowSubmenuEstudiantes] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const { user } = useContext(AuthContext);

  // Verificar si el usuario tiene el rol de "admin"
  const isAdmin = user && user.role && user.role.name_role === 'admin';

  if (!isAdmin) {
    return null; // No mostrar el sidebar si no es admin
  }

  return (
    <>
      <div
        className={`xl:h-[100vh] fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-custom-blue p-6 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all overflow-y-auto`}
      >
        <div className="flex items-center gap-4 mb-20">
          <img
            src="/src/assets/image/logo.jpg"
            alt="Sidebar Logo"
            className="h-8 w-8 object-cover rounded-full"
          />
          <h1 className="text-2xl font-bold text-white">IAprendix</h1>
        </div>
        <ul className="flex-1">
          <li>
            <h1 className="text-2xl font-bold text-white mb-4">
              Admin Dashboard
            </h1>
            <ul>
              <li>
                <button
                  onClick={() => setShowSubmenuTests(!showSubmenuTests)}
                  className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
                  <span className="flex items-center gap-4">
                    <RiSettings3Line className="text-primary" /> Registrar Test
                  </span>
                  <RiArrowRightSLine
                    className={`mt-1 ${ showSubmenuTests && "rotate-90" } transition-transform`} />
                </button>
                <ul className={`ml-8 ${ showSubmenuTests ? "h-auto" : "h-0" } overflow-y-hidden transition-all`}>
                  <li className="my-2">
                    <Link
                      to="/admin/tests/TestsAdd"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Agregar Test</Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/admin/tests/TestsList"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Listar Tests</Link>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  onClick={() => setShowSubmenuCursos(!showSubmenuCursos)}
                  className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
                  <span className="flex items-center gap-4">
                    <RiSettings3Line className="text-primary" /> Registrar Cursos
                  </span>
                  <RiArrowRightSLine
                    className={`mt-1 ${ showSubmenuCursos && "rotate-90" } transition-transform`} />
                </button>
                <ul className={`ml-8 ${ showSubmenuCursos ? "h-auto" : "h-0" } overflow-y-hidden transition-all`}>
                  <li className="my-2">
                    <Link
                      to="/admin/courses/CoursesAdd"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Agregar Curso</Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/admin/courses/CoursesEdit"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Editar Curso</Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/admin/courses/CoursesDelete"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Eliminar Curso</Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/admin/courses/CoursesList"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Listar Curso</Link>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  onClick={() => setShowSubmenuEstudiantes(!showSubmenuEstudiantes)}
                  className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
                  <span className="flex items-center gap-4">
                    <RiSettings3Line className="text-primary" /> Registrar Estudiantes
                  </span>
                  <RiArrowRightSLine
                    className={`mt-1 ${ showSubmenuEstudiantes && "rotate-90" } transition-transform`}/>
                </button>
                <ul
                  className={`ml-8 ${ showSubmenuEstudiantes ? "h-auto" : "h-0" } overflow-y-hidden transition-all`}>
                  <li className="my-2">
                    <Link
                      to="/admin/students/UserAdd"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Agregar Estudiante</Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/admin/students/UserEdit"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Editar Estudiante</Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/admin/students/UserDelete"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Eliminar Estudiante</Link>
                  </li>
                  <li className="my-2">
                    <Link
                      to="/admin/students/UserList"
                      className="py-2 px-4 border-l border-gray-600 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-4 before:top-1/2 before:-translate-y-1/2 hover:text-white transition-colors">Listar Estudiante</Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
                  <RiSettings3Line className="text-primary" /> Configuración
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowChatbot(!showChatbot)}
                  className="w-full flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
                  <RiRobotLine className="text-primary" /> IAprendix Chatbot
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <nav className="mt-8">
          <Link to="/logout" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-white">
            <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)} className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50">
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
      {showChatbot && <Chatbot />}
    </>
  );
}

export default AdminSidebar;
