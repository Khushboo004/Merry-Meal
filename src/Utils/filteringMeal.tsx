const filteringMeal = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setItems: any,
  allItems: any
) => {
  if (e.target.value === "all") {
    setItems(allItems);
    return;
  }
  console.log(e.target.value);

  allItems.forEach((item: any) => {
    console.log(item.category);
  });
  setItems(
    allItems.filter((item: any) =>
      item.category
        ? item.category === e.target.value
        : item.status === e.target.value
    )
  );
  setItems(
    allItems.filter((item: any) =>
      item.category
        ? item.category === e.target.value
        : item.session === e.target.value
    )
  );
};

export default filteringMeal;
