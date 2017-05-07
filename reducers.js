import immutable from 'object-path-immutable'

export const initialState = {
    activeTab: null
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
