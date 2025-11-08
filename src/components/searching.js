import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
     const comparator = createComparison([
    rules.skipEmptyTargetValues(),
    rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false),
  ]);

    return (data, state, action) => {
       const criteria = { [searchField]: state[searchField] };
    return data.filter(item => comparator(item, criteria));
    }
}