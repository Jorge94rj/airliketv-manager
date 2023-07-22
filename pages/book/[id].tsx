import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { books } from "..";
import { CloseButton, MainHeader, PdfWrapper, PillButton } from "../../styles/index.style";
import Image from "next/image";
import { CardContainer } from "../../components/BookCard/index.style";
import { Document, Page } from 'react-pdf';

const Book = () => {
  const router = useRouter();
  const { id } = router.query;

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isPdfOpened, setIsPdfOpened] = useState(false);

  const book = books.find(b => b.id.toString() === id);
  const alt = book?.name || "";

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      {
        isPdfOpened && (
          <>
            <PdfWrapper>
              {/* <object data="./metamorfosis.pdf" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="./metamorfosis.pdf">to the PDF!</a></p>
              </object> */}
              <iframe src={"/metamorfosis.pdf"} />
              {/* <AllPages pdf="./metamorfosis.pdf" /> */}
            </PdfWrapper>
            <CloseButton onClick={() => setIsPdfOpened(false)}>
              x
            </CloseButton>
          </>
        )
      }
      {
        !isPdfOpened && (
          <MainHeader>
            <h4>Biblioteca</h4>
            <h2>{book?.name}</h2>
            <h3>{book?.author}</h3>
            <CardContainer>
              <Image src={book?.src} alt={alt} width={380} height={480} />
            </CardContainer>
            <h2>Sinopsis</h2>
            <p>{book?.details}</p>
            <PillButton onClick={() => setIsPdfOpened(true)}>
              Leer
            </PillButton>
          </MainHeader>
        )
      }
    </>
  )
}

export default Book