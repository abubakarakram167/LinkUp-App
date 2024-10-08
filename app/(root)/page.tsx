import Header from "@/components/Header";
import AddDocumentBtn from "@/components/ui/AddDocumentBtn";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async () => {
	const documents = [];
	const user = await currentUser();
	console.log("the user", user);
	if (!user) redirect("/sign-in");

	return (
		<main className="home-container">
			<Header className="sticky left-0 top-0">
				<div className="flex items-center gap-2 lg:gap-4">
					Notification
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
				</div>
			</Header>
			{documents.length > 0 ? (
				<div></div>
			) : (
				<div className="document-list-empty">
					<Image
						src="/assets/icons/doc.svg"
						alt="Document"
						width={40}
						height={40}
						className="mx-auto"
					/>
					<AddDocumentBtn
						userId={user.id}
						email={user.emailAddresses[0].emailAddress}
					/>
				</div>
			)}
		</main>
	);
};

export default Home;
