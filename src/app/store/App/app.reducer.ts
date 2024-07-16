import { createReducer, on } from "@ngrx/store"
import * as appActions from './app.actions'

export interface AppState {
  toggleAddUserForm:boolean
  toggleAddTaskForm:boolean
}

const initState= {
  toggleAddUserForm:false,
  toggleAddTaskForm:false,
}

export const appReducer = createReducer(initState,
  on(appActions.toggleAddUserForm,(state:AppState)=>{
    return{
      ...state,
      toggleAddUserForm:!state.toggleAddUserForm
    }
  }),
  on(appActions.toggleAddTaskForm,(state:AppState)=>{
    return{
      ...state,
      toggleAddTaskForm:!state.toggleAddTaskForm
    }
  })
)
