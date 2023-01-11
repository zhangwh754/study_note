class Cart extends React.Component {
  constructor() {
    super()

    this.state = {
      books: [
        { id: 1, name: '算法导论', date: '2006-9', price: 85, count: 1 },
        { id: 2, name: 'UNIX编程艺术', date: '2006-2', price: 59, count: 1 },
        { id: 3, name: '编程珠玑', date: '2008-10', price: 39, count: 1 },
        { id: 4, name: '代码大全', date: '2006-3', price: 128, count: 1 }
      ]
    }
  }

  changeCount(id, count = 1) {
    const newBooks = [...this.state.books]
    newBooks.find(item => item.id === id).count += count
    this.setState({
      books: newBooks
    })
  }

  remove(id) {
    const newBooks = [...this.state.books]
    const index = newBooks.findIndex(item => item.id === id)
    newBooks.splice(index, 1)
    this.setState({
      books: newBooks
    })
  }

  renderBookList() {
    const { books } = this.state

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>书籍名称</th>
              <th>出版日期</th>
              <th>价格</th>
              <th>购买数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {books.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>《{item.name}》</td>
                <td>{item.date}</td>
                <td>{this.priceFilter(item.price)}</td>
                <td>
                  {item.count > 1 ? (
                    <button onClick={() => this.changeCount(item.id, -1)}>-</button>
                  ) : (
                    <button disabled>-</button>
                  )}
                  <span>{item.count}</span>
                  <button onClick={() => this.changeCount(item.id)}>+</button>
                </td>
                <td>
                  <button onClick={() => this.remove(item.id)}>移除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>总价格：{this.priceFilter(books.reduce((pre, cur) => pre + cur.count * cur.price, 0))}</h3>
      </div>
    )
  }

  renderBookEmpty() {
    return (
      <div>
        <h2>购物车为空~</h2>
      </div>
    )
  }

  render() {
    const { books } = this.state

    return books.length > 0 ? this.renderBookList() : this.renderBookEmpty()
  }

  priceFilter(price) {
    return `￥${Number(price).toFixed(2)}`
  }
}
