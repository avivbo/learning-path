import { useReducer } from "react";
import produce from "immer";
const immerActions = {
  INCREASE_TEL_AVIV_CITIZENS: "INCREASE_TEL_AVIV_CITIZENS",
  UPDATE_SOME_KEYS_OF_NESS_ZIONA: "UPDATE_SOME_KEYS_OF_NESS_ZIONA",
};
const immerReducer = produce((draft, action) => {
  switch (action.type) {
    case immerActions.INCREASE_TEL_AVIV_CITIZENS:
      draft.cities.tel_aviv.citizens += 1;
      break;
    case immerActions.UPDATE_SOME_KEYS_OF_NESS_ZIONA: {
      const uapdaterObject = {
        grade: 4,
        streets: 222,
      };
      Object.assign(draft.cities.ness_ziona, uapdaterObject);
      break;
    }
    default:
      return draft;
  }
});

const immerReducerInit = {
  cities: {
    tel_aviv: {
      citizens: 410_000,
      streets: 1300,
    },
    ness_ziona: {
      citizens: 42_000,
      streets: 220,
      grade: 9,
    },
  },
};

function UseReducerWithImmer() {
  const [state, dispatch] = useReducer(immerReducer, immerReducerInit);

  const { ness_ziona } = state.cities;
  return (
    <div>
      <div>
        In ness ziona there is {ness_ziona.citizens} citizens and{" "}
        {ness_ziona.streets} streets. with grade {ness_ziona.grade}
        <br />
        In tel aviv there is {state.cities.tel_aviv.citizens} citizens and{" "}
        {state.cities.tel_aviv.streets} streets
      </div>
      <button
        onClick={() =>
          dispatch({ type: immerActions.INCREASE_TEL_AVIV_CITIZENS })
        }
      >
        Increase Tel Aviv citizens by 1
      </button>
      <button
        onClick={() =>
          dispatch({ type: immerActions.UPDATE_SOME_KEYS_OF_NESS_ZIONA })
        }
      >
        Update ness ziona
      </button>
    </div>
  );
}

export default function UseReducerComponent() {
  return (
    <div>
      <UseReducerWithImmer />
    </div>
  );
}
