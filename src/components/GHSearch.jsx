import React from "react";
import axios from "axios";
import { Button, Input } from "semantic-ui-react";
import ShowListUser from './components/ShowListUser';

const GHSearch = () => {

  const [searchResults, setSearchResults] = useState();
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    const response = await axios.get("https://api.github.com/users?q=${searchResults}");
    setUsers(response.data.items)
  };

  const searchResults = users.map((user) => {
    return (
      <div id={user.id}>
        <ShowListUser user={user} />
      </div>
    );
  });

  return (
    <>
      <Input
        data-cy="search_input"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button
        data-cy="search_button"
        name="search">Search</Button>
    </>
  );
};

export default GHSearch;
