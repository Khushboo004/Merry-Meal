const filteringMeal = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setItems: any,
    allItems: any
  ) => {
    if (e.target.value === "all") {
      setItems(allItems);
      return;
    }
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
  