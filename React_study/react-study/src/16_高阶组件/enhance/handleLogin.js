function enhance(OriginComponent) {
  return props => {
    const isLogin = !!localStorage.getItem('token')
    if (isLogin) {
      return <OriginComponent {...props} />
    }
    return <h2>请先登录</h2>
  }
}

export default enhance
