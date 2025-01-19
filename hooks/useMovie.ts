import useSwr from 'swr'
import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const useMovie = (id?: string) => {
  const { 
    data,
    error, 
    isLoading } = useSwr(id ? `/api/movies/${id}` : null, fetcher, 
    {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    }
);

  return {
    data,
    error,
    isLoading
  } 
};

export default useMovie;