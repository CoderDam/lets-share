/* Npm import */


/* Local import */


/* Code */


/* initialState */
const initialState = {
  sharing: false,
  over: false,
  things: {
    nextId: 1,
    allIds: [],
    byId: {},
  },
  people: {
    index: 0,
    current: 0,
    nextId: 1,
    allIds: [],
    byId: {},
  },
};


/* Types */
const THING_ADD = 'thing-add';
const THING_DELETE = 'thing-delete';
const THING_UPDATE = 'thing-update';

const PEOPLE_ADD = 'people-add';
const PEOPLE_DELETE = 'people-delete';
const PEOPLE_UPDATE = 'people-update';

const SHARE_START = 'share-start';
const SHARE_AMOUNTS = 'share-amounts';
const SHARE_CHANGE = 'share-change';
const SHARE_VALID = 'share-valid';


/* Duck */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    /* THINGS */
    case THING_UPDATE:
      return {
        ...state,
        things: {
          ...state.things,
          byId: {
            ...state.things.byId,
            [action.id]: {
              ...state.things.byId[action.id],
              input: action.value,
            },
          },
        },
      };

    case THING_ADD:
      {
        const currId = state.things.nextId;
        return {
          ...state,
          things: {
            ...state.things,
            nextId: currId + 1,
            allIds: [...state.things.allIds, currId],
            byId: {
              ...state.things.byId,
              [currId]: {
                id: [currId],
                input: '',
              },
            },
          },
        };
      }

    case THING_DELETE:
      {
        const ids = [...state.things.allIds];
        const allIds = ids.filter(id => id !== action.id);
        const things = { ...state.things.byId };
        const byId = {};
        allIds.forEach((id) => {
          byId[id] = things[id];
        });
        return {
          ...state,
          things: {
            ...state.things,
            allIds,
            byId,
          },
        };
      }

    /* PEOPLE */
    case PEOPLE_UPDATE:
      return {
        ...state,
        people: {
          ...state.people,
          byId: {
            ...state.people.byId,
            [action.id]: {
              ...state.people.byId[action.id],
              input: action.value,
            },
          },
        },
      };

    case PEOPLE_ADD:
      {
        const currId = state.people.nextId;
        return {
          ...state,
          people: {
            ...state.people,
            nextId: currId + 1,
            allIds: [...state.people.allIds, currId],
            byId: {
              ...state.people.byId,
              [currId]: {
                id: [currId],
                input: '',
                done: 'waiting',
                things: {},
              },
            },
          },
        };
      }

    case PEOPLE_DELETE:
      {
        const ids = [...state.people.allIds];
        const allIds = ids.filter(id => id !== action.id);
        const people = { ...state.people.byId };
        const byId = {};
        allIds.forEach((id) => {
          byId[id] = people[id];
        });
        return {
          ...state,
          people: {
            ...state.people,
            allIds,
            byId,
          },
        };
      }

    case SHARE_START:
      {
        const index = state.people.index;
        return {
          ...state,
          sharing: true,
          people: {
            ...state.people,
            current: state.people.allIds[index],
            index: index + 1,
          },
        };
      }

    case SHARE_AMOUNTS:
      {
        const nThings = {};
        state.things.allIds.forEach((thingId) => {
          nThings[thingId] = 0;
        });
        return {
          ...state,
          people: {
            ...state.people,
            byId: {
              ...state.people.byId,
              [state.people.current]: {
                ...state.people.byId[state.people.current],
                done: 'go',
                things: nThings,
              },
            },
          },
        };
      }

    case SHARE_CHANGE:
      return {
        ...state,
        people: {
          ...state.people,
          byId: {
            ...state.people.byId,
            [state.people.current]: {
              ...state.people.byId[state.people.current],
              things: {
                ...state.people.byId[state.people.current].things,
                [action.thingId]: action.amount,
              },
            },
          },
        },
      };

    case SHARE_VALID:
      {
        const index = state.people.index;
        if (index < state.people.allIds.length) {
          return {
            ...state,
            people: {
              ...state.people,
              current: state.people.allIds[index],
              index: index + 1,
              byId: {
                ...state.people.byId,
                [state.people.current]: {
                  ...state.people.byId[state.people.current],
                  done: 'ok',
                },
              },
            },
          };
        }
        return {
          ...state,
          over: true,
          people: {
            ...state.people,
            byId: {
              ...state.people.byId,
              [state.people.current]: {
                ...state.people.byId[state.people.current],
                done: 'ok',
              },
            },
          },
        };
      }

    default:
      return state;
  }
};


/* Action creators */
export const addThing = () => ({
  type: THING_ADD,
});

export const deleteThing = id => ({
  type: THING_DELETE,
  id,
});

export const updateThingInput = (id, value) => ({
  type: THING_UPDATE,
  id,
  value,
});

export const addPeople = () => ({
  type: PEOPLE_ADD,
});

export const deletePeople = id => ({
  type: PEOPLE_DELETE,
  id,
});

export const updatePeopleInput = (id, value) => ({
  type: PEOPLE_UPDATE,
  id,
  value,
});

export const startSharing = () => ({
  type: SHARE_START,
});

export const startAmounts = () => ({
  type: SHARE_AMOUNTS,
});

export const changeAmount = (thingId, amount) => ({
  type: SHARE_CHANGE,
  thingId,
  amount,
});

export const validAmounts = () => ({
  type: SHARE_VALID,
});


/* Export */
export default reducer;
