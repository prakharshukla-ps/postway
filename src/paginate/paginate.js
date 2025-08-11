export default function paginate(array, page = 1, limit = 5) {
  page = Number(page) || 1;
  limit = Number(limit) || 5;

  const totalItems = array.length;
  const totalPages = Math.ceil(totalItems / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    totalItems,
    currentPage: page,
    totalPages,
    items: array.slice(startIndex, endIndex),
  };
}
