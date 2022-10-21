interface WandProps {
    wood: string
    core: string
    length: number
}

export interface FavoriteProps {
    id: string
    name: string
    species: string
    gender: string
    house: string
    dateOfBirth: string
    yearOfBirth: number
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: WandProps
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alive: boolean
    image: string
}