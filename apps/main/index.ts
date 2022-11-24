import assert from "assert";

import { initDbClient } from "db-shared";

async function getPost(id: number): Promise<string> {
  const post = (await dbClient("posts").where("id", id).select("content"))[0];
  if (!post)
    throw new Error(`Post ${id} not found`);

  const { content } = post;
  assert(content !== null, "Expected post to have content");

  return content;
}

let dbClient: ReturnType<typeof initDbClient>;

export const main = async function () {
  dbClient ??= initDbClient();

  console.log(await getPost(1));
};
