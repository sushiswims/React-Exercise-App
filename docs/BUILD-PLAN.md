# BUILD PLAN – Search Bar for Exercise Tracker

## Feature Description
Add a search bar to the main exercise list that filters exercises by name as the user types.

## Steps

1. Add state for the search query — Introduce a single piece of state (e.g., searchQuery) in the component that owns the exercise list. Verify it initializes to an empty string and nothing breaks.
2. Render the search input — Add a text input above the exercise list and wire its value and onChange to your new state. Test that typing updates the state (you can confirm with a quick console.log or React DevTools).
3. Filter the exercise list — Derive a filteredExercises array from your existing list by comparing each exercise name against searchQuery (case-insensitive). Pass filteredExercises to your list renderer instead of the original array. Test with a few known exercise names.
4. Handle edge cases — Make sure an empty search shows all exercises, a query with no matches shows an empty state (even just nothing rendered), and the comparison handles mixed casing gracefully. Test each scenario manually.
5. Add an empty state message — When filteredExercises is empty and the query is non-empty, show a friendly message like "No exercises match your search." Confirm it appears and disappears correctly as you type.
6. Polish the input UX — Add a placeholder text, and optionally a clear/reset button that sets searchQuery back to "". Test that clearing restores the full list.
7. Lift state if needed — If you realize the search query needs to be accessible in other components (e.g., a header search bar), refactor by lifting the state up or moving it into context/a store. This step is conditional — skip it if everything lives in one component already.