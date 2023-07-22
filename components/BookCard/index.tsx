import React, { ReactNode } from "react"
import { CardContainer } from "./index.style"
import Image from 'next/image';
import { useRouter } from "next/router";

interface BookCardProps {
  id: number;
  name: string;
  src: any;
}

const BookCard = ({ id, name, src }: BookCardProps) => {
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push('/book/' + id)}>
      <Image src={src} alt={name} width={380} height={480} />
    </CardContainer>
  )
}

export default BookCard