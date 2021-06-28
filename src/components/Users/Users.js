import { Component } from "react";

import { getUsers } from "./usersApi";

export class Users extends Component {
  state = {
    users: [],
    loading: false,
    error: null,
  };

  fetchUsers = async () => {
    this.setState({ loading: true });

    let newState;
    try {
      const response = await getUsers();
      const users = await response.json();

      if (!response.ok) {
        throw new Error("Request has failed");
      }

      if (users.length === 0) {
        newState = { error: "No more users..." };
      } else {
        newState = { users };
      }
    } catch (error) {
      newState = { error: error.message };
    }

    this.setState({ ...newState, loading: false });
  };

  async componentDidMount() {
    setTimeout(this.fetchUsers, 3000);
  }

  componentDidCatch() {
    this.setState({ error: "Something went wrong.." });
  }

  render() {
    const { error, loading, users } = this.state;

    return (
      <div>
        <h1>Users</h1>
        {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
