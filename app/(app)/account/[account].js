import {router, useLocalSearchParams, Link, Redirect} from 'expo-router';
import Explore from "../../../components/explore/Explore";
import AccountHeader from "../../../components/account/AccountHeader";
import useProfileFeed from "../../../components/account/useProfileFeed";
import { useOtherAccount } from "../../../network/User";
import Loading from "../../../components/loading/Loading";
import {useSession} from "../../../auth/Auth";

export default function Page() {

    const params = useLocalSearchParams()
    const { account: userId } = params

    const {account: userAccount} = useSession()
    if(userId === userAccount.id) return <Redirect href="profile" />

    const {posts} = useProfileFeed(userId)
    const {account, isFollowing, toggleIsFollowing} = useOtherAccount(userId)

    function getPosts() {
        return posts.map(post => {
            return {
                source: post.media[0].source,
                id: post['post_id']
            }
        })
    }

    function getNumberOfFollowers() {
        if(isFollowing !== account['user_follows']) {
            if(!isFollowing) return account.followers-1;
            else return account.followers+1
        }
        else return account.followers
    }

    const getUpdatedAccount = () => {
        return {
            ...account,
            followers: getNumberOfFollowers()
        }
    }

    if(posts && account) return (
        <Explore
            posts={getPosts()}
            Header={() => {
                return <AccountHeader account={getUpdatedAccount()} action={isFollowing ? "Unfollow" : "Follow"} onAction={toggleIsFollowing} />
            }}
        />
    )
    else return <Loading />
}