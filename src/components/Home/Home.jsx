import React, { useState } from "react";
import Style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';
import NavBar from '../Nav/NavBar';



const subestaciones = [
    {
        nombre: " A1001",
        alimentadores: [
            { nombre: "SE-PIURA CENTRO", tension: "13.2 kV", longitud: "5 km" },

        ],
    },
    {
        nombre: " A1002",
        alimentadores: [
            { nombre: "SE-PIURA CENTRO", tension: "22 kV", longitud: "10 km" },
        ],
    },
    {
        nombre: " A1003",
        alimentadores: [
            { nombre: "SE-NORTE", tension: "22 kV", longitud: "10 km" },
        ],
    },
    {
        nombre: " A1004",
        alimentadores: [
            { nombre: "SE-EJIDOS", tension: "22 kV", longitud: "10 km" },
        ],
    },
];

export default function Home() {
    const navigate = useNavigate(); 
    const handleNavigation = () => {
        navigate('/'); // Cambia la ruta según sea necesario
    };
    const [seleccionada, setSeleccionada] = useState("");
    const subestacion = subestaciones.find((s) => s.nombre === seleccionada);

    return (
        <div className={Style.mainBg}>
             <NavBar />
            {/* Sección Home */}
            <section className={Style.homeSection}>
                <div className={Style.homeContent}>
                    <h1>Alimentadores y Subestaciones Eléctricas</h1>
                    <p>
                        Optimiza la gestión eléctrica con una hoja dinámica que conecta códigos de alimentadores y subestaciones para mostrar información precisa de tensión y longitud.
                    </p>
                    <p>
                        Incluye una lista completa de alimentadores que facilita la identificación rápida y precisa, mejorando la eficiencia en el manejo de la red eléctrica.
                    </p>
                </div>
                <div className={Style.homeImage}>
                    <img src="./public/img/img01.png" alt="Dashboard eléctrico" />
                </div>
            </section>

            {/* Sección Introducción */}
            <section className={Style.introSection}>
                <div className={Style.introContent}>
                    <h2>Introducción</h2>
                    <div className={Style.introCards}>
                        <div className={Style.introCard}>
                            <h3>Propósito</h3>
                            <p>
                                Facilitar la consulta rápida de datos eléctricos relacionados con alimentadores y subestaciones para una toma de decisiones eficiente.
                            </p>
                        </div>
                        <div className={Style.introCard}>
                            <h3>Funcionamiento</h3>
                            <p>
                                La hoja utiliza fórmulas dinámicas que actualizan los resultados en tiempo real a medida que se ingresan códigos o selecciones.
                            </p>
                        </div>
                    </div>
                    <div className={`${Style.introCard} ${Style.instructions}`}>
                        <h3>Instrucciones</h3>
                        <p>
                            Introduce el código del alimentador o selecciona la subestación para obtener detalles como tensión nominal y longitud automáticamente.
                        </p>
                    </div>
                </div>
                <div className={Style.introImage}>
                    <img src="./public/img/img02.png" alt="Laptop con dashboard" />
                </div>
            </section>

            {/* Sección Filtrado por Subestación */}
            <section className={Style.filtroSection}>
                <h2>Búsqueda por Subestación Eléctrica (S.E.)</h2>
                <div className={Style.filtroCards}>
                    <div className={Style.filtroCard}>
                        <h3>Campo de Selección</h3>
                        <p>
                            Elige la S.E. desde una lista desplegable para facilitar la búsqueda (ej: SE-CENTRAL, SE-NORTE).
                        </p>
                        <select
                            value={seleccionada}
                            onChange={(e) => setSeleccionada(e.target.value)}
                            className={Style.select}
                        >
                            <option value="">Selecciona una subestación</option>
                            {subestaciones.map((s) => (
                                <option key={s.nombre} value={s.nombre}>
                                    {s.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={Style.filtroCard}>
                        <h3>Detalles Mostrados</h3>
                        <p>
                            Obtén listado de alimentadores conectados, junto con su tensión nominal y longitud.
                        </p>
                        {subestacion ? (
                            <ul className={Style.listaAlimentadores}>
                                {subestacion.alimentadores.map((a) => (
                                    <li key={a.nombre}>
                                        <b>{a.nombre}</b>: {a.tension}, {a.longitud}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Selecciona una subestación para ver detalles.</p>
                        )}
                    </div>
                    <div className={Style.filtroCard}>
                        <h3>Interfaz Sencilla</h3>
                        <p>
                            Consulta rápida e intuitiva para facilitar la gestión de la red eléctrica.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Base de Datos de Alimentadores */}
            <section className={Style.dbSection}>
                <div className={Style.dbFlex}>
                    <div className={Style.dbContent}>
                        <h2 className={Style.dbTitle}>
                            Base de Datos de<br />Alimentadores
                        </h2>
                        <div className={Style.dbTableWrapper}>
                            <table className={Style.dbTable}>
                                <thead>
                                    <tr>
                                        <th>Código de Alimentador</th>
                                        <th>S.E. de Pertenencia</th>
                                        <th>Tensión Nominal (kV)</th>
                                        <th>Longitud (km)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ALIM-001</td>
                                        <td>SE-CENTRAL</td>
                                        <td>13.8</td>
                                        <td>10.5</td>
                                    </tr>
                                    <tr>
                                        <td>ALIM-002</td>
                                        <td>SE-CENTRAL</td>
                                        <td>34.5</td>
                                        <td>22.0</td>
                                    </tr>
                                    <tr>
                                        <td>ALIM-003</td>
                                        <td>SE-NORTE</td>
                                        <td>13.8</td>
                                        <td>15.0</td>
                                    </tr>
                                    {/* Puedes agregar más filas aquí */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="p-6 bg-white shadow rounded max-w-4xl mx-auto mt-10">
                        <h1 className="text-2xl font-semibold mb-4 text-center">DIAGRAMA ST ENOSA</h1>
                        <iframe
                            src="./../public/docs/DU ST ENOSA JUL24.pdf"
                            width="100%"
                            height="380px"
                            title="Demo PDF"
                            className="border rounded"
                        ></iframe>
                    </div>
                </div>
            </section>
            {/* Sección Cronograma de coordinación de cuadrillas */}
                        <div className={Style.dbcord}>
            <div className="p-6 bg-white shadow rounded max-w-4xl mx-auto mt-10">
                        <h1 className="text-2xl font-semibold mb-4 text-center">Cordinador del CCO</h1>
                        <iframe
                            src="./../public/docs/DU ST ENOSA JUL24.pdf"
                            width="150%"
                            aling="center"
                            height="380px"
                            title="Demo PDF"
                            className="border rounded"
                        ></iframe>
                    </div>
                    </div>


            {/* Sección Conclusión y Recursos Adicionales */}
            <section className={Style.conclusionSection}>
                <h2 className={Style.conclusionTitle}>Conclusión y Recursos Adicionales</h2>
                <div className={Style.conclusionCards}>
                    <div className={Style.conclusionCard}>
                        <div>
                            <h3 className={Style.conclusionHeading}>Beneficios</h3>
                            <p className={Style.conclusionText}>
                                Consulta rápida y exacta para<br />
                                mejorar la gestión y<br />
                                mantenimiento de la red eléctrica.
                            </p>
                        </div>
                    </div>
                    <div className={Style.conclusionCard}>
                        <div>
                            <h3 className={Style.conclusionHeading}>Documentación</h3>
                            <p className={Style.conclusionText}>
                                Accede a guías y manuales tecnológicos sobre alimentadores<br />
                                y subestaciones para ampliar tus conocimientos.
                            </p>
                        </div>
                    </div>
                    <div className={Style.conclusionCard}>
                        <div>
                            <h3 className={Style.conclusionHeading}>Soporte</h3>
                            <p className={Style.conclusionText}>
                                Contacta para recibir ayuda técnica y colaborar con mejoras<br />
                                en la hoja de cálculo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-Fonft">

                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
