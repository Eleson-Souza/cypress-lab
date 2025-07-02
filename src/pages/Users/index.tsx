import { useEffect, useState } from "react";
import { Card } from "../../components/Card";

import "./style.css";
import { getUsers, type User } from "../../services/user";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getUsers();

      setUsers(response);
    })();
  }, []);

  return (
    <div>
      <h1>Catalog</h1>

      <div className="cards-box">
        {users.map(({ name, email, phone, address, website }) => (
          <Card
            name={name}
            email={email}
            phone={phone}
            address={`${address?.street}, ${address?.city}, ${address?.suite} - ${address?.zipcode}`}
            website={website}
          />
        ))}
      </div>
    </div>
  );
};
