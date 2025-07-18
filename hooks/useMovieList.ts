import useSwr from 'swr'
import fetcher from '@/lib/fetcher';

const useMovies = () => 
    {
  const { data, error, isLoading } = useSwr('/api/movies', fetcher, 
    {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading
  }
  
};

export default useMovies;