import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
export default class PaginationOption {
  constructor(totalResults) {
    this.options = {
      totalItems: totalResults,
      itemsPerPage: 20,
      visiblePages: 5,
      page: 1,
      centerAlign: true,
    };
    this.pagination = new Pagination('pagination', this.options);
  }
}
