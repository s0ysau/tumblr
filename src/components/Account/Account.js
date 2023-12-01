
import Logout from "../LogOut/LogOut"
import Settings from "../../pages/Settings/Settings"
import styles from "./Account.module.scss"

export default function Account ({user}) {

  return (
    <main className={styles.accountContainer}>
      <h1>Account</h1>
      <Logout />
      <Settings user={user}/>
    </main>
  )
}