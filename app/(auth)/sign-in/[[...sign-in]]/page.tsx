"use client";

import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
	return (
		<main className="auth-page">
			<SignIn />
		</main>
	);
};

export default SignInPage;
