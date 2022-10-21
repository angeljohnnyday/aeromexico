import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';

const pages = [
    {
        name: 'Lista',
        path: '/',
    },
    {
        name: 'Favoritos',
        path: '/favorites'
    }
];

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <AppBar>
            <Toolbar variant="dense">
                {pages.map(({ name, path }) => (
                    <Button
                        key={name}
                        onClick={() => navigate(path)}
                        sx={{ color: 'white' }}
                    >
                        {name}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};