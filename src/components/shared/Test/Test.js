const USERS = [
  {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
    name: "Mango",
    isOnline: true,
    id: 1812,
  },
  {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg",
    name: "Kiwi",
    isOnline: false,
    id: 1137,
  },
  {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg",
    name: "Ajax",
    isOnline: true,
    id: 1213,
  },
  {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg",
    name: "Jay",
    isOnline: true,
    id: 1714,
  },
  {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg",
    name: "Poly",
    isOnline: false,
    id: 1284,
  },
];

export const Test = () => {
  return (
    <div>
      <h1>Example from Roman</h1>
      <ul>
        {USERS.map((friend) => {
          return (
            <li key={friend.id}>
              <h3>{friend.name}</h3>
              <img
                width="200"
                height="200"
                src={friend.avatar}
                alt={friend.name}
              />
              <p>is {friend.isOnline ? "online" : "not here"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
