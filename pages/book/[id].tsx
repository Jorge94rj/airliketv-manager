import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { books } from "..";
import { MainHeader, PillButton } from "../../styles/index.style";
import Image from "next/image";
import { CardContainer } from "../../components/BookCard/index.style";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;

  const book = books.find(b => b.id.toString() === id);
  const alt = book?.name || "";

  return (
    <>
      <MainHeader>
        <h4>Biblioteca</h4>
        <h2>{book?.name}</h2>
        <h3>{book?.author}</h3>
        <CardContainer>
          <Image src={book?.src} alt={alt} width={380} height={480} />
        </CardContainer>
        <h2>Sinopsis</h2>
        <p>{book?.details}</p>
        <PillButton>
          Leer
        </PillButton>
      </MainHeader>
    </>
  )
}

export default Book