////// In app routes //////

const app: string = '/app'

export const appRoutes = {
    app: app,

    //
    home: '/home',
    error: '/404',

    // Health reference search
    searchReferences: `/references`,
    searchCreateReferences: `/references/create`,
    searchEditReferences: `/references/edit/`,     // :id

    // Knowledgebase
    allBiomarkers: `${app}/biomarkers`,
}