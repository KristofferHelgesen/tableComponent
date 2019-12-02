import React, { useState } from "react";
import moment from "moment";

import "./App.css";
import Table from "./table/index";
import { jsonData } from "./table/molecules/json";
function App() {
  const [json, setJson] = useState(jsonData);
  const [loading, setLoading] = useState(false);
  const [lastSorted, setLastSorted] = useState(null);
  const [lastSortedDirection, setLastSortedDirection] = useState(null);

  //All states a filter have.
  const [sorting, setSorting] = useState([
    { arrayPos: 0, sort: "desc" },
    { arrayPos: 1, sort: "desc" },
    { arrayPos: 2, sort: "desc" }
  ]);

  const handleFilterChange = position => {
    setLastSorted(position);
    let copyState = [...sorting];
    let newState = copyState.map((x, i) => {
      if (x.arrayPos === position) {
        let sortOrder = x.sort === "asc" ? "desc" : "asc";
        setLastSortedDirection(sortOrder);
        x.sort = sortOrder;
      }
      return x;
    });
    setSorting(newState);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  function sortFunction(pos) {
    setLoading(true);

    let copyState = [...json];
    let returnThis = copyState.sort(function(a, b) {
      var A = a.cells[pos].cellValue;
      var B = b.cells[pos].cellValue;
      let sortOrder = sorting.filter(x => {
        return x.arrayPos == pos;
      });
      //In this implementation column nr 3 (array pos 2) is date
      if (pos === 2) {
        A = moment(A);
        B = moment(B);
      }
      //What direction do it need to sort?
      let sortIf1 = sortOrder[0].sort === "asc" ? A < B : A > B;
      let sortIf2 = sortOrder[0].sort === "asc" ? A > B : A < B;
      if (sortIf1) {
        return -1;
      } else if (sortIf2) {
        return 1;
      } else {
        return 0;
      }
    });
    setJson(returnThis);
    handleFilterChange(pos);
  }

  return (
    <Table
      sortFunction={sortFunction}
      sortState={sorting}
      lastSorted={lastSorted}
      lastSortedDirection={lastSortedDirection}
      json={json}
      loading={loading}
      tableHead={{
        label: [
          { cellValue: "Name" },
          { cellValue: "Age" },
          { cellValue: "Date" }
        ]
      }}
    />
  );
}

export default App;
