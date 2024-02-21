import { data } from "autoprefixer";

export default function Home() {
  const BE_URL = "http://localhost:3001/add-users";
  async function handleAdd(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
    };
    console.log(data);
    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.text();
    console.log(FETCHED_JSON);
  }
  return (
    <div>
      <form onSubmit={handleAdd}>
        <label htmlFor="username">
          username:
          <input id="username" name="username" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
