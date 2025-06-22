import { Text, usePaginationContext } from "@chakra-ui/react";

/**
 * The Anilist API is not very good at pagination.
 * This component is a workaround to display the current page
 * without exposing the total number of pages and it will vary
 * wildly until you hit the final page.
 */

export const PaginationPage = () => {
  const { page } = usePaginationContext();

  return (
    <Text fontWeight={"medium"} flex={1} textAlign={"center"}>
      Page {page}
    </Text>
  );
};
