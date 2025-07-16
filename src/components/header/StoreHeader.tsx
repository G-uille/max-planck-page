import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import useDisplay from '../../hooks/use-display'
import logoSVG from '../../assets/svg/logo-letras.svg'
import logoSVGLight from '../../assets/svg/logo-arandupy-white.svg'
import { Close } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import useHeaders from '../../hooks/use-header.jsx'

const StoreHeader: React.FC = () => {
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const display = useDisplay()
    const { headers } = useHeaders()
    const location = useLocation();
    const navigate = useNavigate()
    const openMenu = Boolean(anchorElMenu);
    
    const handleClickMenu = (event: any) => {
        setAnchorElMenu(event.currentTarget);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            handleCloseMenu();
        }
    };

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };
    return(
        <header
            className={`ap-flex ap-overflow-hidden ap-items-center  
            ap-px-10 ap-min-h-12 ap-gap-7 ap-fixed ap-w-full  ap-z-[10000] ap-shadow 
            ${display.mdAndDown ? 'ap-justify-between ap-px-10' : 'ap-justify-center'} 
            ${display.smAndDown ? ' ap-px-4 ap-py-2' : 'ap-py-3'}
            ${location.pathname.startsWith('/clase') ? 'ap-bg-black ap-text-white ap-bg-opacity-85 ap-backdrop-blur-xl' : 'ap-bg-[#161616] ap-bg-opacity-75 ap-backdrop-blur-xl ap ap-border-b-[#e8eaed]'}
            `}
        >
                <div className={`ap-flex ap-gap-2 ${display.mdAndDown ? 'ap-justify-between ap-w-full ' : 'ap-h-8 ap-items-center'}`}>
                    <img onClick={() => navigate('/inicio')} src={ !location.pathname.startsWith('/clase') ? logoSVG : logoSVGLight} alt="logo"
                    className={`ap-cursor-pointer ${location.pathname !== '/inicio' ? 'ap-mr-7 ' : 'ap-mr-12'} 
                    ${display.smAndDown ? 'ap-justify-between ap-w-24 !ap-mr-0' : 'ap-h-6'}  
                    ${location.pathname.startsWith('/clase') ? 'ap-h-[34px]' : ''}
                    `}/>
                    { display.mdAndDown &&  <IconButton sx={{p: '4px'}} aria-label="menu" onClick={handleClickMenu}>
                        <MenuIcon sx={{ color: location.pathname.startsWith('/clase') ?'white' : 'white' }} />
                    </IconButton>}
                </div>
            { !display.mdAndDown && <ul className='ap-list-none ap-text-white ap-flex ap-gap-5 !ap-text-sm'>
                { headers.map((x, index) => (
                    <li key={index}>
                        <button onClick={() => scrollToSection(x.segment)}>{x.title}</button>
                    </li>))
                }
            </ul> }

           <Menu
                anchorEl={anchorElMenu}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    style: {
                        width: '100vw',
                        backgroundColor: '#121212',
                        color: 'white',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        borderRadius: 0,
                        zIndex: 10000,
                    }
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem
                    className="!ap-font-[Poppins] !ap-py-7 !ap-text-[14px] !ap-flex !ap-w-full !ap-justify-end"
                    onClick={handleCloseMenu}
                >
                    <IconButton sx={{ color: 'white' }}>
                        <Close sx={{ fontSize: '19px !important' }} />
                    </IconButton>
                </MenuItem>

                {headers.map((header, index) =>
                    header.segment && (
                        <MenuItem
                            key={index}
                            onClick={() => scrollToSection(header.segment)}
                            className="ap-text-white !ap-font-[Poppins] !ap-text-sm"
                        >
                            {header.title}
                        </MenuItem>
                    )
                )}
            </Menu>
        </header>
    )
}
export default StoreHeader;
