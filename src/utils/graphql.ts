import z from "zod";

export const AnilistPageResponseSchema = z.object({
  data: z.object({
    Page: z.object({
      media: z.array(
        z.object({
          id: z.number(),
          title: z.object({
            english: z.string().nullable(),
            romaji: z.string().nullable(),
          }),
        })
      ),
    }),
  }),
});
export type AnilistPageResponse = z.infer<typeof AnilistPageResponseSchema>;
