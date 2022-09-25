export interface Timestamps {
    createdAt: string
    updatedAt: string
}

export interface NameIdPair {
    id: number
    name: string
}

export interface Neighborhood extends Timestamps, NameIdPair {}

export interface City extends Timestamps, NameIdPair {
    state: string
    consolidatedAt: string
    neighborhoods: Neighborhood[]
}
