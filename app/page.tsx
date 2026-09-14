
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
      <h1>Index Page</h1>
      <div>
        { JSON.stringify(users) }
      </div>
    </div>
  )
}

export default IndexPage;