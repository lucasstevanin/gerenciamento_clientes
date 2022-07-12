import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { Head } from "next/document";

function Header() {
  return (
    <>
      <div className={styles.Header}>
        <h1>
          <Link href={"/"}>Gerenciamento de Clientes</Link>
        </h1>

        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href={"/consultarCliente"}>Pesquisar</Link>
          </li>

          <li className={styles.li}>
            <Link href={"/addCliente"}>Adicionar Cliente</Link>
          </li>

          <li className={styles.li}>
            <Link href={"/removerCliente"}>Remover Cliente</Link>
          </li>

          <li className={styles.li}>
            <Link href={"/atualizarInfo"}>Atualizar Cadastro</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
