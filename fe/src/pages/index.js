import { data } from "autoprefixer";

export default function Home() {
  const BE_URL = "http://localhost:3001/add-users";
  async function handleAdd(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      age: Number(e.target.age.value),
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
      <form onSubmit={handleAdd} className="flex gap-4 mt-9 ml-10">
        <label htmlFor="username"></label>
        <input name="username" id="username" className="border rounded-lg" />
        <label htmlFor="age"></label>
        <input name="age" id="age" className="border rounded-lg" />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
}
