import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

// tratando requisições
const queryClient = new QueryClient()

function Requests () {
  const { isLoading, error, data } = useQuery({
    queryKey: 'requestData',
    queryFn: () => fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json(),
    ),
  })

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  if (error) {
    return <h1>Deu erro!</h1>
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>Subscribers: {data.subscribers_count}</strong>{' '}
      <strong>Stars: {data.stargazers_count}</strong>{' '}
      <strong>Forks: {data.forks_count}</strong>
    </div>
  )
}

export default function MyApp () {
  return (
    <QueryClientProvider client={queryClient}>
      <Requests />
    </QueryClientProvider>
  )
}
