const INITIAL_STATE = {
    churrasList:[
        {
          _id:"1",
          date:"22/06",
          description: "teste1",
          totalValue: 400,
          totalInvited: 14,
          guestList:[
            {
              _id:"1",
              name: "Doglas",
              value: 100,
              drinkIncluded: true
            },
            {
              _id:"2",
              name: "teste1",
              value: 170,
              drinkIncluded: true
            },
            {
              _id:"3",
              name: "teste2",
              value: 50,
              drinkIncluded: false
            },
            {
              _id:"4",
              name: "teste3",
              value: 30,
              drinkIncluded: false
            }
          ]
        },
        {
          _id:"2",
          date:"22/01",
          description: "teste2",
          totalValue: 112,
          totalInvited: 9,
          guestList:[
            {
              _id:"1",
              name: "Doglas",
              value: 100,
              drinkIncluded: true
            },
            {
              _id:"2",
              name: "teste1",
              value: 170,
              drinkIncluded: true
            },
            {
              _id:"3",
              name: "teste2",
              value: 50,
              drinkIncluded: false
            },
            {
              _id:"4",
              name: "teste3",
              value: 30,
              drinkIncluded: false
            }
          ]
        },
        {
          _id:"3",
          date:"12/02",
          description: "teste3",
          totalValue: 125,
          totalInvited: 4,
          guestList:[
            {
              _id:"1",
              name: "Doglas",
              value: 100,
              drinkIncluded: true
            },
            {
              _id:"2",
              name: "teste1",
              value: 170,
              drinkIncluded: true
            },
            {
              _id:"3",
              name: "teste2",
              value: 50,
              drinkIncluded: false
            },
            {
              _id:"4",
              name: "teste3",
              value: 30,
              drinkIncluded: false
            }
          ]
        }
      ],
    selectedChurras:{
      _id:"1",
      date:"22/06",
      description: "teste1",
      totalValue: 400,
      totalInvited: 14,
      guestList:[
        {
          _id:"1",
          name: "Doglas",
          value: 100,
          drinkIncluded: true
        },
        {
          _id:"2",
          name: "teste1",
          value: 170,
          drinkIncluded: true
        },
        {
          _id:"3",
          name: "teste2",
          value: 50,
          drinkIncluded: false
        },
        {
          _id:"4",
          name: "teste3",
          value: 30,
          drinkIncluded: false
        }
      ]
    },
};

const churras = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case'SET_CHURRAS':
            return {...state, selectedChurras: action.churras};
        default: return state;
    }
};

export default churras;