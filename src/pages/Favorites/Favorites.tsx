import { styled } from '@mui/material/styles';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import useFavorites from '../../hooks/useFavorites';

const CardContentGrid = styled(CardContent)(() => ({
    padding: 0,
    '&:last-child': {
        paddingBottom: 0
    }
}));

export default function Favorites() {
    const { items } = useFavorites();

    return (
        <>
            <Grid
                container
                spacing={3}
                sx={{ mt: 2 }}
            >
                {items.map(({ image, alive, name, dateOfBirth, gender, eyeColour, hairColour }, key) => (
                    <Grid
                        item
                        key={key}
                        sm={12}
                        md={6}
                    >
                        <Card>
                            <CardContentGrid>
                                <Grid
                                    container
                                >
                                    <Grid
                                        item
                                        sm={3}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'linear-gradient(149deg, rgba(230,49,49,0.7763480392156863) 50%, rgba(237,182,14,0.5914740896358543) 70%)'
                                        }}
                                    >
                                        <Avatar
                                            alt={name}
                                            src={image}
                                            sx={{ width: 110, height: 110 }}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={9}
                                        sx={{ display: 'flex', flexDirection: 'column', p: 1 }}
                                    >
                                        <Typography
                                            variant='subtitle2'
                                            color='text.secondary'
                                        >
                                            {alive ? 'VIVO' : 'MUERTO'}
                                        </Typography>
                                        <Typography
                                            sx={{ mt: 2, mb: 3 }}
                                            variant="h5"
                                            gutterBottom
                                        >
                                            {name}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                        >
                                            <span>Cumpleaños: </span>{dateOfBirth}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                        >
                                            <span>Genero: </span>{gender}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                        >
                                            <span>Color de ojos: </span>{eyeColour}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                        >
                                            <span>Color de pelo: </span>{hairColour}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContentGrid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
