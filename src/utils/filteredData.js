function filteredData(data, filter) {
  const filterLower = filter.toLowerCase();

  function recurse(items) {
    const result = [];

    for (const item of items) {
      if (
        item.type === "FILE" &&
        item.name.toLowerCase().includes(filterLower)
      ) {
        result.push(item);
      } else if (item.type === "FOLDER") {
        const children = recurse(item.children);
        if (children.length > 0) {
          result.push({ ...item, children });
        }
      }
    }

    return result;
  }

  return recurse(data);
}

export default filteredData;
