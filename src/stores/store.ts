import { Dimension, Measure } from '@/api/columns'
import { create } from 'zustand'


type StoreState = {
  dimension: Dimension|null,
  measures: Measure[],
  addDimension:(dimensionToAdd:Dimension) => void,
  addMeasure:(measureToAdd:Measure) => void,
  clearDimension:() => void,
}

export const useStore = create<StoreState>()((set) => ({
  dimension:null,
  measures:[],
  addDimension:(dimension)=>set(state=>({...state,dimension})),
  clearDimension:()=>set(state=>({...state,dimension:null})),
  addMeasure:(measure)=>set(state=>({...state,measures:[...state.measures,measure]})),
}))