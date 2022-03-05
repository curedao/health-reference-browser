export const removeMapListItem = (map: { [key: string]: any }, id: string): { [key: string]: any } => {
    const newArrayOfMap = Object.keys(map || {}).map(fb => {
        return fb !== id && { [fb]: map[fb] };
    }).filter(f => f);
    // Return Map as { [key: id]: mapItem }
    return { ...Object.assign({}, {}, ...newArrayOfMap) };
};