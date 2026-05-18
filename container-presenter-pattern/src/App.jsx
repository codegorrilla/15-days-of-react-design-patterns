import './App.css';
//import UserProfile from './messy-way/components/UserProfile';
import UserProfileContainer from './with-pattern/components/profile/UserProfieContainer';

function App() {
  return (
    <div>
      <UserProfileContainer userId={3} />
    </div>
  );
}

export default App;
