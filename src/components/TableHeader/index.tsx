import styles from "./styles.module.scss";

type TableHeaderProps = {
  columnLabels: string[];
};

export const TableHeader = ({
  columnLabels,
}: TableHeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      {columnLabels.map((name, index) => (
        <span className={styles.label} key={index}>
          {name}
        </span>
      ))}
    </header>
  );
};
