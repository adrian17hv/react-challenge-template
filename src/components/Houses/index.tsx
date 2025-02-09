import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";
import { fetchHouses } from "../../api/services/houseServices";
import HouseCard from "./houseCard";
import { ListContainer, LoadingMessage } from "./styles";
import LoadingHouseList from "./loadingHouseList";

const perPage = 12;

function HousesList() {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetching, error } = useInfiniteQuery({
    queryKey: ["houses"],
    queryFn: ({ pageParam = 1 }) => fetchHouses({ page: pageParam, per_page: perPage }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    retry: 5,
    retryDelay: (attemptIndex) => Math.min(500 * 2 ** attemptIndex, 30000),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNextPage, fetchNextPage, data?.pages.length]);

  if (error instanceof Error) return <LoadingMessage>Error: {error.message}</LoadingMessage>;

  const houseList = data?.pages.flatMap(page => page.houses);

  return (
    <ListContainer>
      {houseList?.map((house, index) => {
        const isLastIndex = (houseList?.length - 3) === index;
        return (
          <div ref={isLastIndex ? observerRef : null} key={house.id}>
            <HouseCard house={house} />
          </div>
        );
      })}
      {isFetching && <LoadingHouseList />}
    </ListContainer>
  );
}

export default HousesList;
