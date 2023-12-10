import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <div>
      <h1>This is UsersPage</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
/**
 * 캐싱을 비활성화할 때는 두 번째 인자로 다음 객체를 전달함.
 *
 * {cache: 'no-store'};
 * 데이터가 자주 변경되는 경우 유용하게 사용할 수 있음.
 *
 * {next:{revalidate:10}}
 * 캐싱을 특정 시간 동안만 유지하고, 그 이후에는
 * 다시 요청을 보내 최신 버전을 캐싱하고 싶은 경우
 */
