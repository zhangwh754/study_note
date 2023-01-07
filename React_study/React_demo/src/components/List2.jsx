class List extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [
        { id: 1, name: 'zwh', score: 100 },
        { id: 2, name: 'tian', score: 80 },
        { id: 3, name: 'li', score: 40 },
        { id: 4, name: 'liu', score: 50 },
        { id: 4, name: 'nie', score: 90 }
      ]
    }
  }

  render() {
    const { data } = this.state

    return (
      <ul>
        {data
          .filter(item => item.score > 60)
          .slice(0, 2)
          .map(item => (
            <li key={item.id}>
              <span>
                {item.name}的成绩是{item.score}
              </span>
            </li>
          ))}
      </ul>
    )
  }
}
