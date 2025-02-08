const Experience = () => {
  return (
    <section id="experience-section" className="mx-8 sm:mx-0 text-letra">
      <h1 className="font-semibold mb-4 text-5xl sm:text-7xl hover:scale-x-95 transform transition-transform duration-300 ease-in-out ">
        Experiencia
      </h1>
      <div>
        <h3 className=" font-medium py-5 text-3xl sm:text-5xl mb-2">
		FISIOMFULNESS S.A.C (Contrato de prácticas)
        </h3>
        <h4 className=" text-2xl sm:text-4xl mb-4">
          Fullstack Developer | Remoto | Dic 2024 - Actualidad
        </h4>
        <ul className=" font-medium text-1xl sm:text-2xl list-inside list-disc ml-6 mb-2">
          <li>
            Apoyo en el mantenimiento y desarrollo del sistema para un centro de
            fisioterapia y rehabilitación basado en Node.js, Express, MongoDB y
            Next.js
          </li>
          <li>
            Resolver problemas reportados en el sistema, garantizando su
            funcionalidad y estabilidad.
          </li>
          <li>
            Desarrollar y agregar nuevas funcionalidades en el frontend y
            backend según los requerimientos del proyecto.
          </li>
          <li>
            Participar en la optimización del rendimiento y la experiencia de
            usuario.
          </li>
          <li>
            Colaborar con el equipo para cumplir con los objetivos establecidos
            en los sprints.
          </li>
        </ul>
      </div>
      <div>
        <h3 className=" font-medium py-5 text-3xl sm:text-5xl mb-2">
          Suoes Administrativo
        </h3>
        <h4 className="text-2xl sm:text-4xl mb-4">
          Administrativo | Presencial | Feb 2022 - Mar 2024
        </h4>
        <ul className="font-medium text-1xl sm:text-2xl list-inside list-disc ml-6 mb-2">
          <li>
            Supervisé y gestioné la deuda de aportes sindicales y de obra
            social, asegurando el cumplimiento de obligaciones empresariales.
          </li>
          <li>
            Colaboré con inspectores y abogados para el manejo de casos
            derivados a instancias legales
          </li>
          <li>
            Emití órdenes de pago para gastos sindicales, garantizando la
            transparencia y eficiencia en los procesos financieros.
          </li>
          <li>
            Procesé solicitudes de reintegros y subsidios, ofreciendo soporte
            administrativo oportuno
          </li>
          <li>
            Mantuvecomunicación efectiva con equipos internos y externos para
            coordinar actividades y resolver problemas administrativos.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
