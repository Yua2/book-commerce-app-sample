import { BookType } from "@/app/types/types";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllBooks = async (): Promise<BookType[]> => {
  const allBooks = await client.getList<BookType>({
    endpoint: "bookcommerce",
    customRequestInit: {
      cache: "no-store",
      next: {
        revalidate: 3600,
      },
    },
  });
  return allBooks.contents;
};

export const getDetailBook = async (contentId: string): Promise<BookType> => {
  const detailBook = await client.getListDetail<BookType>({
    endpoint: "bookcommerce",
    contentId,
    customRequestInit: {
      cache: "no-store",
    },
  });

  return detailBook;
};
