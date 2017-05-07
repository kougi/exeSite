import immutable from 'object-path-immutable'

export const initialState = {
    activeServerId: null,
    servers: [
        {
            id: 1,
            name: 'exe.pub | FFA'
        },
        {
            id: 2,
            name: 'exe.pub | InstaDuel'
        },
        {
            id: 3,
            name: 'exe.pub | RelaxedRunning'
        }
    ],
    maps: [
        {
            id: 1,
            name: 'asylum_full',
            thumbnail_url: '...',
            recent_winner: '',
            server_id: 1
        }
    ]


};

export function mainReducer (state, action) {
    if (typeof(state) === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case 'CLICK_TAB':
            return immutable.set(state, 'activeTab', action.tabId)
    }

}
