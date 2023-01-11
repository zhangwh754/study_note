import InfoContext from '../context/info-context'

const HelloWorld = () => {
  return (
    <InfoContext.Consumer>
      {value => (
        <>
          <h2>{value.name}</h2>
          <h2>{value.age}</h2>
        </>
      )}
    </InfoContext.Consumer>
  )
}

export default HelloWorld
