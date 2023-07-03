"use client";

import { Add as AddIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { BillCard } from "components/BillCard";
import { Navbar } from "components/Navbar";
import { TableHeader } from "components/TableHeader";
import type { NextPage } from "next";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contas a Pagar</h1>
      <TableHeader columnLabels={["Nome", "Valor total", "Opções"]} />
      <main className={styles.main}>
        <BillCard name="Boticário" amount={249.99} />
        <BillCard name="Magazine Luiza" amount={899.99} />
        <BillCard name="Cesuca" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mercado Pago" amount={609.99} />
        <BillCard name="Mega Oferta do Supermercado Rissul" amount={609.99} />
      </main>
      <Navbar />
      <IconButton className={styles.add_bill_button}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Home;
