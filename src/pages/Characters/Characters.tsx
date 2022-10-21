import { useCallback, useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Avatar, Button, Card, CardContent, Grid, IconButton, Stack, Typography } from '@mui/material';
import useJsonData, { PathEnum } from '../../hooks/useJsonData';
import useFavorites from '../../hooks/useFavorites';
import { FavoriteProps } from '../../types/favoriteTypes';

const CardContentGrid = styled(CardContent)(() => ({
    padding: 0,
    '&:last-child': {
        paddingBottom: 0
    }
}));

export default function Characters() {
    const [current, setCurrent] = useState<PathEnum>(PathEnum.STUDENTS)
    const list = useJsonData(current);
    const { items, addFavorite, removeFavorite } = useFavorites();

    const getId = useCallback((name: string) => {
        const nospaces = name.replaceAll(/\s/g, '');
        return nospaces.toLocaleLowerCase();
    }, [])

    const isFavorite = useCallback((name: string) => {
        return !!items.find(({ id }) => id === getId(name));
    }, [items])

    const handleFavorite = (item: Pick<FavoriteProps, 'image' | 'alive' | 'name' | 'dateOfBirth' | 'gender' | 'eyeColour' | 'hairColour'>) => {
        const id = getId(item.name);
        addFavorite({
            ...item,
            id
        });
    }

    return (
        <>
            <Grid
                container
                spacing={4}
                direction='column'
                justifyContent='center'
                alignItems='center'
            >
                <Grid item>
                    <Typography
                        sx={{ color: 'white' }}
                    >
                        Harry Potter
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        sx={{ color: 'white' }}
                    >
                        Selecciona tu filtro
                    </Typography>
                </Grid>
                <Grid item>
                    <Stack spacing={2} direction='row'>
                        <Button
                            variant='outlined'
                            onClick={() => setCurrent(PathEnum.STUDENTS)}
                        >
                            Estudiantes
                        </Button>
                        <Button
                            variant='outlined'
                            onClick={() => setCurrent(PathEnum.STAFF)}
                        >
                            Staff
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                sx={{ mt: 2 }}
            >
                {list.map(({ image, alive, name, dateOfBirth, gender, eyeColour, hairColour }, key) => (
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
                                            {alive ? 'VIVO' : 'MUERTO'} / {current === PathEnum.STUDENTS ? 'ESTUDIANTE' : 'PERSONAL'}
                                            <IconButton
                                                onClick={() => {
                                                    if (isFavorite(getId(name))) {
                                                        removeFavorite(getId(name))
                                                    } else {
                                                        handleFavorite({ image, alive, name, dateOfBirth, gender, eyeColour, hairColour })
                                                    }
                                                }}
                                            >
                                                {isFavorite(name) ? (
                                                    <BookmarkBorderOutlinedIcon />
                                                ) : (
                                                    <BookmarkAddOutlinedIcon />
                                                )}
                                            </IconButton>
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
