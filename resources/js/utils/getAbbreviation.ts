export function getAbbreviation(name: string): string {
    const split = name.split(/\s/)

    if (split.length === 0) return '?'

    const first = split[0][0]
    const last = split[split.length - 1][0]

    return first + last
}
