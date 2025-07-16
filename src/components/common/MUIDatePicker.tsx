import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');
const BasicDatePicker: React.FC<{ dateValue: any, onChange: () => void }> = ({ dateValue, onChange }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="es"
      localeText={{
        cancelButtonLabel: 'Cancelar',
        okButtonLabel: 'Aceptar',
        todayButtonLabel: 'Hoy',
        clearButtonLabel: 'Limpiar'
      }}
    >
      <DemoContainer sx={{ width: '100% !important', overflow: 'hidden' }} components={['DatePicker']}>
        <DatePicker
          label=""
          value={dateValue}
          sx={{ width: '100% !important'  }}
          onChange={onChange}
          slotProps={{
            textField: {
              variant: 'outlined',
              InputProps: {
                sx: {
                  backgroundColor: '#fff',
                  borderRadius: '2px',
                  height: '45px',
                  width :'100% !important',
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  border: 'none',
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  color: '#000',
                  padding: '0 8px',
                  '& .MuiSvgIcon-root': {
                    color: '#ababab',
                    fontSize: '24px',
                  },
                },
              },
              inputProps: {
                style: {
                  color: '#000',
                  padding: '10px',
                },
              },
            },
            popper: {
              sx: {
                '& .MuiPaper-root': {
                  backgroundColor: '#2f2f2f',
                  color: '#fff',
                  borderRadius: '8px',
                },
                '& .MuiPickersCalendarHeader-root': { color: '#fff' },
                '& .MuiPickersDay-root': { color: '#fff' },
                '& .MuiTypography-caption': { color: '#fff' },
                '& .MuiButtonBase-root': { color: '#fff' },

                '& .MuiPickersToolbar-root': {
                  backgroundColor: '#444',
                  color: '#fff',
                },
                '& .MuiDialogActions-root button': {
                  color: '#000',
                  backgroundColor: '#fff',
                  textTransform: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  '&:hover': {
                    backgroundColor: '#ddd',
                  }
                },
                '@media (max-width: 600px)': {
                  '& .MuiDialogActions-root button': {
                    width: '100%',
                    marginBottom: '8px',
                  }
                }
              }
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default BasicDatePicker;
