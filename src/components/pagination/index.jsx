// MyComponent.jsx
import React, { useState } from 'react';
import {
  useQuery,
  QueryClient,
  useQueryClient,
  keepPreviousData,
} from '@tanstack/react-query'

const fetchData = async (page = 0) => {
  const response = await fetch(`https://api.example.com/data?page=${page}`);
  return response.json();
};

const MyComponent = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(0)
  
  const { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ['myData', page], 
    queryFn: () => fetchData(page), 
    placeholderData: keepPreviousData,
    staleTime: 5000, // how often the data should automatically be refetched
  });
  
  // prefetching next page
  useEffect(() => {
    if (!isPlaceholderData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['myData', page + 1],
        queryFn: () => fetchData(page + 1),
      })
    }
  }, [data, isPlaceholderData, page, queryClient])

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
   <div>
      {/* Render your component with data */}
      {/* some list or grid view here */}
      <div>
        {/* Pagination UI */}
        <button onClick={() => setPage((old) => Math.max(old - 1, 0))} 
        disabled={page === 0}>
          Previous
        </button>
        <span>Current Page: {page + 1}</span>
        <button onClick={() => {
          setPage((old) => (data?.hasMore ? old + 1 : old))
        }} 
        // Disable the next button until next page is available or there is no more data
        disabled={isPlaceholderData || !data?.hasMore}>
          Next
        </button>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    </div>
  );
};

export default MyComponent;