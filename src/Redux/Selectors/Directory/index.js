import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directoryList;

export const selectSections = createSelector(
	[selectDirectory],
	(section) => section.sections
);
