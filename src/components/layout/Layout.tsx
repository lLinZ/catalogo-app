import { FC } from 'react'
import { FooterComponent } from './'
import Box from '@mui/material/Box'
import { AppBarComponent } from '../ui'
import { User } from '../../interfaces/user-type'

interface Props {
    title?: string;
    children: any;
}

export const Layout: FC<Props> = ({ title = 'Catalogo-app', children }) => {
    const user: User = {
        id: 0,
        name: '',
        phone: '',
        username: '',
        password: '',
        role_id: 0,
        role_name: '',
        function_id: 0,
        function_name: '',
        status: '',
        created_at: '',
        updated_at: '',
        coloravatar: ''
    }
    return (
        <>
            <AppBarComponent title={title} user={user} />
            <Box sx={{ minHeight: "100vh", p: 0, m: 0 }}>
                {children}
            </Box>
            <FooterComponent />
        </>
    )
}
