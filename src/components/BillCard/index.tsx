import {
  AttachMoney as AttachMoneyIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { BillType } from "types";
import { toBRL } from "utils";
import styles from "./styles.module.scss";

type BillCardProps = BillType;

export const BillCard = ({ name, amount }: BillCardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <span className={styles.label}>{name}</span>
      <span className={styles.label}>{toBRL(amount)}</span>
      <div className={styles.options}>
        <div className={styles.option}>
          <IconButton>
            <AttachMoneyIcon className={styles.attach_money} />
          </IconButton>
        </div>
        <div className={styles.option}>
          <IconButton>
            <DeleteIcon className={styles.delete} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};