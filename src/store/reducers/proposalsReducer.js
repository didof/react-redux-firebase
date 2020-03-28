import * as actionTypes from '../actions/actionTypes'

const init = {
    proposals: [
        {
            id: 1,
            title: 'Visiting Duomo',
            organizer: 'Frank O\'Gift',
            start: '11 a.m.',
            end: '6 p.m.',
            content: 'Me and my friends will head to the main church of Milan this afternoon! If anyone would like to join please contact me or we are in the hall 20 minutes before.',
            participans: 3,
            budget: 60
        },
        {
            id: 2,
            title: 'Apetizer in Darsena',
            organizer: 'Marlena McCoy',
            start: '9 p.m.',
            end: '0 a.m.',
            content: 'Party all night! Woooo xoxo (only gurlz)',
            participans: 2,
            budget: 30
        },
        {
            id: 3,
            title: 'A.A.A. Pacchetto di Sigarette',
            organizer: 'Roberto Cannas',
            start: '--',
            end: '--',
            content: 'L\'ho perso',
            participans: 1,
            budget: 0
        },
        // {
        //     id: 3,
        //     title: 'Fissare la gente',
        //     organizer: 'Marco LO GIUDICE',
        //     start: '--',
        //     end: '--',
        //     content: 'No denuncie',
        //     participans: 1,
        //     budget: 0
        // },
    ]
}

const proposalsReducer = (state = init, action) => {
    switch(action.type) {
        case actionTypes.createProposal:
            console.log(action.proposal)
            return { state }
        case actionTypes.error_createProposal:
            console.error(action.error)
            return { state }
        default:
            return { state }
    }
}

export default proposalsReducer