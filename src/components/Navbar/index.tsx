import {
  AccountCircle as AccountCircleIcon,
  AttachMoney as AttachMoneyIcon,
  Dashboard as DashboardIcon,
  MoneyOff as MoneyOffIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from "./styles.module.scss";

export const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <IconButton>
            <MoneyOffIcon className={styles.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <AttachMoneyIcon className={styles.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <DashboardIcon className={styles.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <AccountCircleIcon className={styles.icon} />
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};
