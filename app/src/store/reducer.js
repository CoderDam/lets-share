/* Npm import */


/* Local import */


/* Code */


/* initialState */
const initialState = {
  sharing: false,
  over: false,
  calculation: false,
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
    pool: 0,
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

const CALCULATION1 = 'calculation1';
const CALCULATION2 = 'calculation2';


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
                get: [],
              },
            },
          },
        };
      }

    case PEOPLE_DELETE:
      {
        const ids = [...state.people.allIds];
        const allIds = ids.filter(id => id !== action.id);
        const peopleById = { ...state.people.byId };
        const byId = {};
        allIds.forEach((id) => {
          byId[id] = peopleById[id];
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

        const peopleAllIds = [...state.people.allIds];
        const peopleNewIds = peopleAllIds.filter(id => (
          state.people.byId[id].input !== ''));
        const peopleById = { ...state.people.byId };
        const peopleNewById = {};
        peopleNewIds.forEach((id) => {
          peopleNewById[id] = peopleById[id];
        });
        const people = {
          ...state.people,
          allIds: peopleNewIds,
          byId: peopleNewById,
        };

        const thingsAllIds = [...state.things.allIds];
        const thingsNewIds = thingsAllIds.filter(id => (
          state.things.byId[id].input !== ''));
        const thingsById = { ...state.things.byId };
        const thingsNewById = {};
        thingsNewIds.forEach((id) => {
          thingsNewById[id] = thingsById[id];
        });
        const things = {
          ...state.things,
          allIds: thingsNewIds,
          byId: thingsNewById,
        };

        return {
          ...state,
          sharing: true,
          people: {
            ...people,
            current: people.allIds[index],
            index: index + 1,
          },
          things,
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

    case CALCULATION1:
      {
        const users = { ...state.people };
        const stuffs = { ...state.things };

        users.allIds.forEach((userId) => {
          const sum = stuffs.allIds.reduce((acc, stuffId) => (
            acc + Number(users.byId[userId].things[stuffId])
          ), 0);
          users.byId[userId].average = sum / users.allIds.length;
        });

        stuffs.allIds.forEach((stuffId) => {
          const prices = [];
          const usersByAmount = {};
          users.allIds.forEach((userId) => {
            prices.push(users.byId[userId].things[stuffId]);
            if (!usersByAmount[users.byId[userId].things[stuffId]]) {
              usersByAmount[users.byId[userId].things[stuffId]] = userId;
            }
          });
          const max = Math.max(...prices);
          const winnerId = usersByAmount[max];
          stuffs.byId[stuffId].max = max;
          stuffs.byId[stuffId].winnerId = winnerId;
          users.byId[winnerId].get.push(stuffId);
        });

        return {
          ...state,
          people: users,
          things: stuffs,
        };
      }

    case CALCULATION2:
      {
        const users = { ...state.people };

        users.allIds.forEach((userId) => {
          const gotSum = users.byId[userId].get.reduce((acc, stuffId) => (
            acc + Number(users.byId[userId].things[stuffId])
          ), 0);
          const toPay = gotSum - users.byId[userId].average;
          users.byId[userId].toPay = Math.round(toPay * 100) / 100;
          users.pool += toPay;
        });

        users.allIds.forEach((userId) => {
          const toGet = users.pool / users.allIds.length;
          const total = toGet - users.byId[userId].toPay;
          users.byId[userId].toGet = Math.round(toGet * 100) / 100;
          users.byId[userId].total = Math.round(total * 100) / 100;
        });

        return {
          ...state,
          people: users,
          calculation: true,
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

export const calculation1 = () => ({
  type: CALCULATION1,
});

export const calculation2 = () => ({
  type: CALCULATION2,
});


/* Export */
export default reducer;
