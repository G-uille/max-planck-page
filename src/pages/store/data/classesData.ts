import { Classes, ClassesMode } from "../../../models/Classes.model";
// @ts-ignore
import becas from '../../../assets/jpg/becas_logo.png'
import carreraGrado from '../../../assets/jpg/carreras_de_grado.png'
import colegiosTecnicos from '../../../assets/jpg/colgeios_tecnicos.png'
import refuerzos from '../../../assets/jpg/refuerzos_academico.png'
import cursos from '../../../assets/jpg/cursos.png'
import modalBecas from '../../../assets/png/becas.png'
import modalGrado from '../../../assets/png/grado.png'
import modalTecnico from '../../../assets/png/tecnico.png'
import modalRefuerzo from '../../../assets/png/refuerzo.png'
import modalCurso from '../../../assets/png/cursos.png'

const date = new Date();

 const classesData: Classes[] = [
    {
        id: 1,
        name: 'Becas del gobierno',
        mode: [ClassesMode.PRESENCIAL, ClassesMode.VIRTUAL],
        description: `En Max Planck te preparamos para el examen de ingreso a las Becas de la Entidad Binacional ITAIPU,\ncon clases actualizadas, materiales específicos y simulacros basados en exámenes anteriores.`,
        question: '¿Querés postularte a una de las becas más importantes del país?',
        shortDescription: 'Te preparamos para el examen de ingreso a las Becas de la Entidad Binacional',
        fileUrl: becas,
        popupFile: modalBecas,
        contactLink: 'https://wa.link/l36dsu',
        createdAt: date.toLocaleDateString('es-ES'),
        deletedAt: null,
        updatedAt: date.toLocaleDateString('es-ES')
    },
    {
        id: 2,
        name: 'Ingreso a carreras de grado',
        question: '¿Estás por ingresar a la universidad?',
        description: `En Max Planck te ofrecemos cursillos diseñados según la carrera que elegiste,\ncon enfoque en los contenidos que realmente necesitás dominar para rendir con seguridad.\nPodés consultar qué carreras cubrimos y qué preparación te ofrecemos según tus objetivos.`,
        mode: [ClassesMode.PRESENCIAL],
        shortDescription: 'Te ofrecemos cursillos diseñados según la carrera que elegiste',
        fileUrl: carreraGrado,
        popupFile: modalGrado,
        contactLink: 'https://wa.link/1nx8ar',
        createdAt: date.toLocaleDateString('es-ES'),
        deletedAt: null,
        updatedAt: date.toLocaleDateString('es-ES')
    },
      {
        id: 3,
        name: 'Colegios técnicos',
        mode: [ClassesMode.PRESENCIAL],
        question: '¿Querés ingresar a un colegio técnico?',
        description: `En Max Planck te preparamos con todo lo que necesitás para rendir con confianza en el examen de ingreso de tu colegio técnico de elección.\n✅ Simulacros de exámenes reales\n✅ Materiales de años anteriores\n✅ Clases pregrabadas disponibles en todo momento`,
        shortDescription: 'Te preparamos con todo lo que necesitás para rendir con confianza en el examen de ingreso',
        fileUrl: colegiosTecnicos,
        popupFile: modalTecnico,
        contactLink: 'https://wa.link/lka43a',
        createdAt: date.toLocaleDateString('es-ES'),
        deletedAt: null,
        updatedAt: date.toLocaleDateString('es-ES'),
    },
    {
        id: 4,
        name: 'Refuerzos académicos',
        mode: [ClassesMode.PRESENCIAL, ClassesMode.VIRTUAL],
        question: '¿Tenés dificultades en alguna materia? ¿Querés reforzar tus conocimientos antes de los exámenes?',
        shortDescription: 'En Max Planck ofrecemos clases de refuerzo académico personalizadas',
        description: `En Max Planck ofrecemos clases de refuerzo académico personalizadas para:\n✅ 1ro, 2do y 3ro de la Media\n✅ Materias específicas de carreras de grado\n✅ Preparación para exámenes parciales o finales`,
        fileUrl: refuerzos,
        popupFile: modalRefuerzo,
        contactLink: 'https://wa.link/jbw7p8',
        createdAt: date.toLocaleDateString('es-ES'),
        deletedAt: null,
        updatedAt: date.toLocaleDateString('es-ES'),
    },
    {
        id: 6,
        name: 'Paquetes de cursos',
        mode: [ClassesMode.VIRTUAL],
        question: 'En Max Planck desarrollamos paquetes de cursos pensados para distintos objetivos y niveles.',
        description: `✅ Matemáticas desde nivel básico hasta avanzado\n✅ Preparación específica para exámenes de becas del gobierno\n🚀 ¡Y próximamente más opciones! Estamos trabajando para ofrecer nuevos contenidos útiles y accesibles.`,
        shortDescription: 'Estamos trabajando para ofrecer nuevos contenidos útiles y accesibles.',
        fileUrl: cursos,
        popupFile: modalCurso,
        contactLink: 'https://wa.link/wvps5x',
        createdAt: date.toLocaleDateString('es-ES'),
        deletedAt: null,
        updatedAt: date.toLocaleDateString('es-ES')
    },
]

export default classesData
