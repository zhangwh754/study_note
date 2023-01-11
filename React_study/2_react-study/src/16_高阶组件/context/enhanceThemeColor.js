import ThemeColor from './ThemeColor'

function mixinsThemeColor(OriginComponent) {
  return props => (
    <>
      <ThemeColor.Consumer>
        {value => (
          <>
            <OriginComponent {...props} {...value} />
          </>
        )}
      </ThemeColor.Consumer>
    </>
  )
}

export default mixinsThemeColor
