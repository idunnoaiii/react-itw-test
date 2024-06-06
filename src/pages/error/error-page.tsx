const ErrorFullPage = ({ error }: { error: Error }) => {
  console.log('ErrorFullPage')
  return (
    <div role='alert'>
      <div>There's a problem. Try refreshing the page.</div>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorFullPage
