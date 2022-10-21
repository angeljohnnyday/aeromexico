import { FavoriteProps } from "./favoriteTypes"


export interface FavoriteSchemaProps {
    items: FavoriteProps[]
}

export const favoriteSchema: FavoriteSchemaProps = {
    items: []
}

export interface StoreProps {
    favorite: FavoriteSchemaProps
}

export interface ActionProps {
    state: {
        [key: string]: any
    },
    action: {
        type: string
        payload: any
    }
}

export interface HandlerProps {
    [key: string]: Function
}