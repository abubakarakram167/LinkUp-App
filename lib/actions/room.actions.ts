"use server";

import { nanoid } from "nanoid";
import liveblocks from "../liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

export const createDocument = async ({
	userId,
	email,
}: CreateDocumentParams) => {
	const roomId = nanoid();

	try {
		const metadata = {
			creatorId: userId,
			email,
			title: "Untitled",
		};
		const usersAccesses: RoomAccesses = { [email]: ["room:write"] };

		const room = await liveblocks.createRoom(roomId, {
			defaultAccesses: [],
			metadata,
			usersAccesses,
		});

		revalidatePath("/");

		return parseStringify(room);
	} catch (error) {
		console.log("the error in server", error);
	}
};
