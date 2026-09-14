import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

const IndexPage = async () => {
  const users = await fetchUsers();

  console.log(users)

  return (
    <div>
      <Users users={users}></Users>
    </div>
  )
}

export default IndexPage;