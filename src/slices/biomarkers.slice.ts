import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import { Biomarker } from 'src/models/biomarker.model';

export interface BiomarkersState {
  byId: Record<string, Biomarker>;
  allIds: string[];
};

const initialState: BiomarkersState = {
  byId: {},
  allIds: []
};

const slice = createSlice({
  name: 'biomarkers',
  initialState,
  reducers: {
    updateBiomarkers(state: BiomarkersState, action: PayloadAction<{ biomarkers: Record<string, Biomarker> }>) {
      const { biomarkers } = action.payload;
      state.byId = { ...state.byId, ...biomarkers };
      state.allIds = [...state.allIds, ...Object.keys(biomarkers)];
    },
  }
});

export const reducer = slice.reducer;

export const updateBiomarkers = (biomarkers: Record<string, Biomarker>): AppThunk => async (dispatch) => {
  dispatch(slice.actions.updateBiomarkers({ biomarkers: biomarkers }));
};


export default slice;
