import * as React from 'react' 
import { Modes } from "../../../models/Modes-model";
import {  Place, Videocam } from '@mui/icons-material';
import presencial from '../../../assets/png/presencial.png'
import virtual from '../../../assets/png/virtual.png'

const useModes = () => {
    const modes: Modes[] = [
        {
            id: 1,
            name: 'Presencial',
            description: 'Contamos con un espacio propio especialmente diseñado para fomentar el aprendizaje. ¡La experiencia Max Planck también se vive en el aula!',
            helpText: 'Luque, Central - Paraguay',
            fileUrl: presencial,
            icon: <Place sx={{ fontSize: '25px' }} />
        },
        {
            id: 2,
            name: 'Virtual',
            description: 'Nuestras clases virtuales se desarrollan a través de plataformas organizadas como Google Classroom, con materiales, ejercicios y clases grabadas siempre disponibles, estés donde estés.',
            helpText: 'Plataformas virtuales',
            fileUrl: virtual,
            icon: <Videocam sx={{ fontSize: '25px' }} />
        },
    ]

    return {
        modes
    }
}
export default useModes;