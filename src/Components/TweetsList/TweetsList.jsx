import { useSelector } from "react-redux"
import { usePagination } from "../../hooks/usePaginations";
import { selectVisibleTweets } from "../../redux/selectors"
import { Tweet } from "../TweetsItem/TweetsItem";
import { LoadMoreBtn } from "../TweetsItem/TweetsItem.styled";
import { Cards, ListItem } from "./TweetsList.styled";

export const TweetsList = () => {
    const tweets = useSelector(selectVisibleTweets);
    const { perPage, loadMore } = usePagination(3);

    return (
        <div>
            <Cards>
                {tweets.slice(0, perPage).map(tweet => (
                    <ListItem key={tweet.id}>
                        <Tweet item={tweet} />
                    </ListItem>
                ))}
            </Cards>
            {tweets.length > perPage && <LoadMoreBtn type="button" onClick={loadMore}>Load More</LoadMoreBtn>}
        </div>
    )
};
