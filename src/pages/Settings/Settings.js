
export default function Settings({ user }) {

  const userInfo = user.user

  return (
    <>
      <h1>Settings</h1>
      <div key={userInfo._id}>
        <h2>Username: {userInfo.username}</h2>
        <h2>Email: {userInfo.email}</h2>
        <h3>Name: {userInfo.firstName} {userInfo.lastName}</h3>
        <button>Delete Account</button>
        </div>
      </>
      )
}
