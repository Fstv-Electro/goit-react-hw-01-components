import user from 'data/user.json';

import { User } from 'components/Profile/UserProfile';


export const App = () => {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    </div>
  );
};
