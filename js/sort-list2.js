//Sales table sort
document.addEventListener("DOMContentLoaded", () => {
    const getSort = ({ target }) => {
      const order = (target.dataset.order = -(target.dataset.order || -1));
      const index = [...target.parentNode.cells].indexOf(target);
      const collator = new Intl.Collator(["en"], { numeric: true });
      const comparator = (index, order) => (a, b) =>
        order *
        collator.compare(
          a.children[index].innerHTML,
          b.children[index].innerHTML
        );

      for (const tBody of target.closest("table").tBodies)
        tBody.append(...[...tBody.rows].sort(comparator(index, order)));

      for (const cell of target.parentNode.cells)
        cell.classList.toggle("sorted", cell === target);
    };

    document
      .querySelectorAll(".sales-table thead th:nth-of-type(2)")
      .forEach((tableTH) =>
        tableTH.addEventListener("click", () => getSort(event))
      );
  });
//Sales table sort
