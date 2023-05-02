import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { EnterprisePage } from '../../pages/admin'
export const AdminRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/admin/enterprise' element={<EnterprisePage />} />
        </Routes>
    )
}
